echo "Running security scans..."

echo "1. Dependency vulnerability scan..."
pnpm audit --audit-level=moderate

echo "2. Secret detection..."
detect-secrets scan --all-files --baseline .secrets.baseline

echo "3. SAST with Semgrep..."
semgrep --config=p/security-audit --config=p/javascript --config=p/typescript .

echo "4. TypeScript check..."
pnpm tsc --noEmit

echo "5. ESLint security rules..."
pnpm eslint . --ext .js,.jsx,.ts,.tsx

echo "Security scan completed!"
