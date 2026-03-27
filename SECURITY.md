# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| latest  | ✅        |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly:

- **Email:** wandatimarvin23@gmail.com
- **Subject:** `[SECURITY] <brief description>`

Please include:
1. Description of the vulnerability
2. Steps to reproduce
3. Potential impact
4. Suggested remediation (if any)

I will respond within **72 hours** and aim to resolve confirmed issues within **14 days**.

**Please do not open a public GitHub issue for security vulnerabilities.**

## Security Practices in This Project

- Dependencies are scanned with `npm audit` on every CI run
- Container images are scanned with [Trivy](https://trivy.dev/) for CVEs
- Static code analysis via [Semgrep](https://semgrep.dev/) (OWASP Top 10 rules)
- Secret scanning via [Gitleaks](https://gitleaks.io/) on every commit
- Security headers enforced via Nginx and Vite dev server
- Multi-stage Docker builds with non-root user
- Source maps disabled in production builds
