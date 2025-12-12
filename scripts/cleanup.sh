#!/bin/bash

# MRS Design System - Cleanup Script
# Removes build artifacts, reinstalls dependencies, and runs quality checks

set -e  # Exit on error

echo "🧹 Starting MRS Design System Cleanup..."
echo ""

# 1. Remove build artifacts
echo "📦 Removing build artifacts..."
rm -rf dist/
rm -rf storybook-static/
rm -rf coverage/
rm -rf .nyc_output/
rm -rf *.tgz
echo "✅ Build artifacts removed"
echo ""

# 2. Clean node_modules
echo "🗑️  Cleaning node_modules..."
rm -rf node_modules/
rm -rf package-lock.json
echo "✅ node_modules cleaned"
echo ""

# 3. Fresh install
echo "📥 Fresh install..."
npm install
echo "✅ Dependencies installed"
echo ""

# 4. Run quality checks
echo "✅ Running quality checks..."
echo ""

echo "  🔍 Type checking..."
npm run type-check
echo "  ✅ TypeScript: OK"
echo ""

echo "  🔍 Linting..."
npm run lint
echo "  ✅ ESLint: OK"
echo ""

echo "  🔍 Running tests..."
npm run test:run
echo "  ✅ Tests: OK"
echo ""

# 5. Build
echo "🏗️  Building package..."
npm run build
echo "✅ Build complete"
echo ""

# 6. Build Storybook
echo "📚 Building Storybook..."
npm run build-storybook
echo "✅ Storybook built"
echo ""

# 7. Report
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Cleanup complete!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 Package Status:"
echo ""
npm pack --dry-run 2>&1 | grep "package size"
echo ""
echo "🔐 Security Status:"
npm audit --summary 2>&1 | head -10 || echo "  ⚠️  Some vulnerabilities found (check npm audit for details)"
echo ""
echo "✨ All systems ready!"
echo ""
