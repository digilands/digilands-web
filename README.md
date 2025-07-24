# DigiLands Web (Frontend)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

**Tech Stack:**
Next.js (App Router) • Tailwind CSS v4 (CSS-first, theme variables) • TypeScript • Radix UI • Lucide Icons

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/digilands/digilands-web.git
cd digilands-web

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

---

## 🔒 Security & Code Quality Setup

This project includes tools for security scanning and code quality control.

### Prerequisites

- **Node.js 18+** and **pnpm** installed
- **Python 3.8+** installed
- **Git** configured

### Initial Security Setup

```bash
# 1. Install Python security tools globally
pip install pre-commit detect-secrets semgrep

# 2. Install Node.js dependencies if not already done (includes ESLint security plugins)
pnpm install

# 3. Create secrets detection baseline
detect-secrets scan --all-files --baseline .secrets.baseline

# 4. Install pre-commit hooks
pre-commit install

# 5. (Optional) Run security scan on all files
pre-commit run --all-files
```

### Security Tools Included

- **Pre-commit Hooks**: Run security checks before each commit
- **ESLint Security**: Detects JavaScript/TypeScript security vulnerabilities
- **Semgrep SAST**: Static Application Security Testing
- **Secret Detection**: Prevents API keys and credentials from being committed
- **TypeScript Checking**: Ensures type safety
- **Prettier**: Code formatting
- **GitHub Actions**: Automated security scanning on push/PR

### Available Commands

```bash
# Code quality and security
pnpm lint                    # Run ESLint
pnpm lint:fix               # Fix ESLint issues
pnpm type-check             # TypeScript type checking
pnpm security:scan          # Run Semgrep security scan
pnpm security:secrets       # Scan for secrets
pnpm security:audit         # Check dependencies for vulnerabilities

# Development
pnpm dev                    # Start development server
pnpm build                  # Build for production
pnpm start                  # Start production server

# Pre-commit (runs automatically on git commit)
pre-commit run --all-files  # Run all pre-commit checks manually
```

### Security Workflow

1. **Pre-commit**: Security checks run automatically on each commit
2. **GitHub Actions**: Comprehensive security analysis on push/PR
3. **Dependency Scanning**: Automated vulnerability detection
4. **Secret Detection**: Prevents credentials from entering the codebase

### Troubleshooting

**SSL Certificate Issues (macOS):**

```bash
# Fix Python SSL certificates
/Applications/Python\ 3.12/Install\ Certificates.command
# or
pip install --upgrade certifi
```

**Pre-commit Issues:**

```bash
# Clear cache and reinstall
pre-commit clean
pre-commit install
```

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
