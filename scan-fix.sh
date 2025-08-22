echo "Running code fixes..."

echo "1. Dependency vulnerability fix..."
pnpm audit fix

echo "2. Prettier fix..."
pnpm prettier --write .

echo "3. Lint fix..."
pnpm eslint . --ext .js,.jsx,.ts,.tsx --fix

echo "Code fixes completed!"
