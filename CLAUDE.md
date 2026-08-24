# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal portfolio for a DevSecOps/SRE engineer. React 18 + Vite + Tailwind, shipped either as a hardened Nginx container (GHCR) or as static files on Vercel. The repository doubles as a demonstration of the author's DevSecOps practice, so the CI pipeline and container hardening are part of the product, not just scaffolding.

## Commands

```bash
npm run dev              # Vite dev server (auto-opens browser)
npm run build            # production bundle -> dist/ (sourcemaps off)
npm run preview          # serve dist/ with the production security headers applied
npm run lint             # eslint src, --max-warnings 0 (warnings fail)
npm run audit:check      # npm audit --audit-level=moderate (same gate as CI)

docker build -t portfolio . && docker run --rm -p 8080:8080 portfolio
```

There is no test framework in this repo — `lint`, `build`, and the CI security scans are the full verification surface. CI runs on Node 24; match that locally when reproducing a failure.

## Architecture

**No router.** `src/App.jsx` renders every section in a fixed order (`Hero → About → ProfessionalFocus → DeliveryLoop → Skills → Resume → Contact`) and does its own 404: any `window.location.pathname !== '/'` returns `<NotFound />`. This is evaluated once at render, not reactively — the server decides only the status code, the client decides a path is invalid. nginx serves the shell for unmatched paths via `error_page 404 /index.html`; Vercel does the same through the `dist/404.html` that `npm run build` copies out of `index.html`. Both return a real **404 status**, so don't reintroduce a blanket `try_files … /index.html` or a Vercel rewrite — that turns every bogus path into an indexable 200.

**Navigation is anchor-based.** Section `id`s (`home`, `impact`, `experience`, `approach`, `stack`) are the contract between `Navbar.jsx`'s `links` array and the individual section components. Renaming a section id means editing both.

**Icons are `lucide-react`, except the brand marks.** lucide removed `Github` and `Linkedin` in v1 with no replacement export; both are hand-inlined in `src/components/BrandIcons.jsx` with a lucide-compatible API (`size` prop, `currentColor`, `aria-hidden` unless given a `title`). Don't reach for `simple-icons` — the CSP means everything ships self-hosted regardless, and two glyphs don't justify the dependency.

**Content lives as data at the top of each component.** Each component in `src/components/` is a self-contained default export whose copy sits in module-scope arrays/objects above the function (e.g. `bootLines`/`stats` in `Hero.jsx`, `manifest` in `Skills.jsx`, `jobs` in `ProfessionalFocus.jsx`). Content changes belong in those literals, not inline in the JSX.

**The design concept is "the portfolio is a pipeline run".** Every section is styled as a stage of a CI/CD run: the hero terminal replays the deploy log, impact metrics are gate checks (`✓ PASS`), experience renders as job logs with diff-style `+` lines, the stack is a `stack.yaml` manifest, and contact is the `deploy` stage. Type is monospace throughout (system mono stack — no font files, the CSP stays clean). Terminal panels (`.term-window`, `.contact-panel`, the always-dark hero) use the fixed `--term-*` tokens and stay dark in **both** themes, like code blocks in docs; only page chrome swaps with `.dark`. Keep new content inside the metaphor (stage chips, prompt marks, `#` comments) rather than adding plain marketing sections.

**Styling is split deliberately.** Tailwind utilities handle layout only (grid, spacing, responsive breakpoints); all visual identity is hand-written semantic classes in the single global `src/index.css` (`.term-window`, `.check-card`, `.job-panel`, …). There are no CSS modules or styled-components. Dark mode is `darkMode: 'class'` — `App.jsx` toggles `.dark` on `<html>` from `localStorage`, and CSS overrides are written as `.dark .foo { … }`.

**Motion is CSS, not a library.** framer-motion was removed (it was 40% of the bundle for one fade-and-rise effect). `src/hooks/useReveal.js` returns `[ref, visible]` from an IntersectionObserver and the component toggles `.is-visible`; the transition itself is in `index.css`, so the `@media (prefers-reduced-motion: reduce)` block covers it along with every other animation. Reveal styles are scoped to `.js` (set by `public/theme.js`) so content is never left at opacity 0 with scripting disabled. Don't reintroduce a JS animation library for this.

**Design tokens live at the top of `src/index.css`** and are redeclared under `.dark`. The palette is ANSI-terminal (green/amber/cyan/violet/red) with per-theme variants: `--ansi-*` tokens are AA-safe on the light surfaces (`#f3f6f2` page, `#ffffff` card, `#e9efe8` band), while the raw `--green`/`--amber`/… values are only for the always-dark terminal panels. Don't hardcode a hex for text, and don't go below `--fs-2xs` (11px).

## Security constraints that shape the code

The CSP is `script-src 'self'` with `object-src 'none'` and no external origins for fonts, images, or `connect-src`. Consequences to respect when editing:

- No CDN scripts, external stylesheets, Google Fonts, or third-party analytics — anything added must be bundled or self-hosted. `style-src` allows `'unsafe-inline'` (Tailwind needs it); `script-src` does not — which is why the no-flash theme script is the external `public/theme.js` rather than an inline block whose hash would need syncing across all three header sources.
- **The header set is duplicated in three places and must be kept in sync:** `vite.config.js` (preview), `nginx.conf` + `security-headers.conf` (container), `vercel.json` (static hosting). Changing CSP in one place without the others produces a "works locally, breaks in prod" split. The `server` (dev) block in `vite.config.js` is a deliberate exception — HMR needs inline/eval'd script — and carries only the non-CSP headers.
- **nginx resets inherited `add_header` directives in any block that declares its own.** All headers live in `security-headers.conf`, which is `include`d in the server block *and* re-included in every `location` that adds a header of its own. Adding a `location` with an `add_header` and forgetting the include silently ships unhardened responses for whatever it matches — this was a real regression once.

`Dockerfile` is multi-stage (`node:24-alpine` builder → `nginx:1.30-alpine`) running as non-root uid 1001 on port **8080**, not 80 — the port is baked into `nginx.conf`, `EXPOSE`, and the `HEALTHCHECK`.

## CI (.github/workflows/devsecops.yml)

Seven sequential stages: dependency audit → (SAST, lint) → build → container scan → secret scan → deploy. Gates that fail the build rather than warn:

- Semgrep `--error` with `p/javascript`, `p/react`, `p/owasp-top-ten`
- Trivy image scan `exit-code: 1` on `CRITICAL,HIGH`
- Trivy config/IaC scan `exit-code: 1` (only picks up `Dockerfile`; it does not analyse workflow files)
- zizmor `--min-severity medium` over the workflows, which is what actually covers CI misconfiguration. Every `actions/checkout` must keep `persist-credentials: false` or this gate fails.
- `npm audit --audit-level=moderate` and ESLint `--max-warnings 0`

Deploy runs only on `push` to `main`. It builds and pushes **once** under an immutable `sha` tag, Trivy-scans that published digest, cosign-signs it keylessly, attests provenance, then moves `latest` onto the same digest with `buildx imagetools create`. Never reintroduce a rebuild between the scan and the promotion — the point is that the shipped and gated artifacts are byte-identical.

**All actions are pinned to full commit SHAs** with the *exact* version as a trailing comment (`# v7.0.1`, not `# v7`) — zizmor's `ref-version-mismatch` audit fails the build when the comment disagrees with the tag the SHA carries, and note that zizmor only runs that audit online, so a local offline run will not catch it. Pins are also required and so are the container images the pipeline executes (`semgrep/semgrep`) and the Dockerfile base images (`node:24-alpine`, `nginx:1.30-alpine`). Never replace a pin with a floating tag; Dependabot (`.github/dependabot.yml`, weekly, with cooldowns) rolls them forward. Commit prefixes follow the Dependabot convention: `chore(deps)`, `chore(ci)`, `chore(docker)`.

`dist/` is git-ignored despite being present locally — don't commit build output.
