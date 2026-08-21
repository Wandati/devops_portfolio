# devops_portfolio

[![DevSecOps Pipeline](https://github.com/Wandati/devops_portfolio/actions/workflows/devsecops.yml/badge.svg)](https://github.com/Wandati/devops_portfolio/actions/workflows/devsecops.yml)

Personal portfolio for **Marvin Wandati**, DevSecOps / Site Reliability Engineer.

The site itself is a single-page React app. The interesting part is everything
around it: the repository is deliberately built as a working sample of the
delivery practice the site describes, so the pipeline and the container
hardening are part of the product rather than scaffolding.

---

## Architecture

React 18 + Vite + Tailwind, shipped two ways from one source tree:

| Target | Artifact | Headers from |
|---|---|---|
| Container | hardened Nginx image on GHCR, non-root uid 1001, port 8080 | `nginx.conf` + `security-headers.conf` |
| Static | `dist/` on Vercel | `vercel.json` |

There is no router. `src/App.jsx` renders every section in a fixed order and
handles its own 404: any `window.location.pathname !== '/'` renders
`<NotFound />`. Both hosts serve the app shell for unmatched paths **with a
real 404 status** — nginx via `error_page 404 /index.html`, Vercel via the
`dist/404.html` emitted at build time — so unknown paths render the branded
page without being indexable as live content.

Section `id`s (`home`, `impact`, `experience`, `approach`, `stack`) are the
contract between `Navbar.jsx`'s `links` array and the section components.

---

## Security posture

**Content Security Policy is `script-src 'self'`** with `object-src 'none'`
and no external origins for fonts, images or `connect-src`. That is a design
constraint, not a header: there are no CDN scripts, no Google Fonts and no
third-party analytics anywhere in the tree, because none of them could load.

One consequence worth knowing: the no-flash theme script is `public/theme.js`,
an external file rather than an inline `<script>`, because an inline one would
need its hash kept in sync across all three header sources. It must stay
render-blocking in `<head>`.

The full header set — CSP, HSTS with preload, `nosniff`, `X-Frame-Options:
DENY`, `Referrer-Policy`, `Permissions-Policy`, COOP and CORP — is applied to
**every** response class: the HTML document, hashed assets, the CV PDF and
404s alike. In nginx this needs care, because `add_header` in a nested block
discards the inherited set; `security-headers.conf` is therefore re-included
in each `location` that adds a header of its own.

The same set lives in three places by necessity — `nginx.conf` (container),
`vercel.json` (static) and `vite.config.js` (preview). Changing one without
the others produces a works-locally/breaks-in-prod split. The Vite **dev**
server deliberately omits CSP and HSTS, because HMR needs inline and eval'd
script that the production policy forbids.

### Container

Multi-stage build, `node:24-alpine` → `nginx:1.30-alpine`, both **pinned by
digest**. The builder runs `npm ci --ignore-scripts` to block install-time
lifecycle scripts. The runtime stage runs as a non-root user (uid 1001) on
port 8080, with a `HEALTHCHECK` and `server_tokens off`.

---

## CI/CD

`.github/workflows/devsecops.yml` — seven stages, each of the following gates
fails the build rather than warning:

| Stage | Gate |
|---|---|
| Dependency audit | `npm audit --audit-level=moderate` |
| SAST | Semgrep `--error` with `p/javascript`, `p/react`, `p/owasp-top-ten` |
| Lint | ESLint `--max-warnings 0` |
| Build | production bundle |
| Container | Trivy image scan, `exit-code: 1` on `CRITICAL,HIGH` |
| Container | Trivy config/IaC scan, `exit-code: 1` |
| Secrets | Gitleaks over full history |
| Workflows | zizmor, gating at medium severity |

**Every action is pinned to a full commit SHA** with the exact version as a
trailing comment (`# v7.0.1`, not `# v7`), and so are the container images the
pipeline itself executes — including the Semgrep scanner. zizmor's
`ref-version-mismatch` audit enforces that the comment matches the tag the SHA
actually carries. Dependabot rolls them forward weekly with
cooldowns. Never replace a pin with a floating tag.

### Build once, promote the digest

The deploy stage builds and pushes the image **exactly once**, under an
immutable `sha` tag. Trivy then scans that published digest, cosign signs it
keylessly, provenance is attested, and only then is `latest` moved onto the
same digest with `docker buildx imagetools create`. Nothing is rebuilt between
the scan and the release, so the artifact that ships and the artifact that was
gated are byte-identical by construction.

Verify a published image:

```bash
cosign verify ghcr.io/wandati/devops_portfolio:latest \
  --certificate-identity-regexp 'https://github.com/Wandati/devops_portfolio/.*' \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com

gh attestation verify oci://ghcr.io/wandati/devops_portfolio:latest \
  --repo Wandati/devops_portfolio
```

---

## Local development

```bash
npm install
npm run dev              # Vite dev server
npm run build            # production bundle -> dist/ (sourcemaps off)
npm run preview          # serve dist/ with the production security headers
npm run lint             # eslint src, --max-warnings 0
npm run audit:check      # same gate as CI

docker build -t portfolio . && docker run --rm -p 8080:8080 portfolio
```

CI runs on Node 24; match that locally when reproducing a failure. There is no
test framework — `lint`, `build` and the security scans are the full
verification surface.

Check the headers you are actually shipping:

```bash
curl -sID - http://localhost:8080/ | grep -i 'content-security\|strict-transport'
curl -sID - http://localhost:8080/assets/<hashed>.js | grep -i 'content-security'
```

---

## Conventions

- Content lives as data in module-scope literals at the top of each component,
  not inline in the JSX.
- Tailwind utilities handle layout only; visual identity is hand-written
  semantic classes in the single global `src/index.css`. Dark mode is
  `darkMode: 'class'`.
- **Colour, type, motion and radii are tokens** at the top of `src/index.css`,
  redeclared under `.dark`. Light-mode text tokens are picked to clear WCAG AA
  against all three light surfaces the site uses — page `#f6f8f7`, card
  `#ffffff`, band `#edf1ef` — so don't introduce a raw hex for text. The type
  scale bottoms out at `--fs-2xs` (11px); nothing should be smaller.
- **Motion lives in CSS, not JS.** `useReveal` returns `[ref, visible]` and the
  component toggles `.is-visible`; the transition is in `index.css`, so the
  `prefers-reduced-motion` block covers it along with everything else. Reveal
  styles are scoped to `.js` so content is never stuck invisible with scripting
  off.
- Commit prefixes follow the Dependabot convention: `chore(deps)`,
  `chore(ci)`, `chore(docker)`.

## Security

See [SECURITY.md](SECURITY.md) for the disclosure policy.
