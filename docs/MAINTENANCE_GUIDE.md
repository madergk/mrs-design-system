# MRS Design System - Maintenance Guide

**For**: Design System Users & Maintainers
**Version**: 1.0.0-beta.1
**Last Updated**: December 11, 2025

---

## 📖 Table of Contents

1. [Updating Visual Styles](#updating-visual-styles)
2. [Audit & Cleanup Routine](#audit--cleanup-routine)
3. [Package Updates & Releases](#package-updates--releases)

---

# Updating Visual Styles

Learn how to customize the design system's appearance either by updating design tokens from Figma or by directly modifying component configurations.

---

## Method 1: Update from Figma Design Tokens

**When to use**: You have design changes from Figma that need to be synced to code.

### Step 1: Extract Design Tokens from Figma

#### Option A: Manual Extraction (Current Method)

1. **Open your Figma file**
   - Navigate to your design system file in Figma

2. **Extract Color Variables**
   - Select Design → Variables
   - Note down colors with their hex values
   - Example: `Primary/Main = #00686f`

3. **Extract Typography Values**
   - Check text styles panel
   - Note: font family, sizes, weights, line heights
   - Example: `H1 = Nunito, 96px, 600 weight, 1.167 line-height`

4. **Extract Spacing Values**
   - Check spacing guidelines
   - Note: base unit and scale
   - Example: `Base = 8px, Scale = [8, 16, 24, 32, ...]`

5. **Document in design-tokens.json**
   ```bash
   cd /Users/mader/mrs-design-system
   # Edit design-tokens.json with your values
   ```

#### Option B: Figma Plugin (Future Enhancement)

*Note: Can be set up later for automated extraction*

### Step 2: Update TypeScript Design Tokens

**File**: `src/theme/designTokens.ts`

#### Update Colors

```typescript
// 1. Update Primitive Colors (Tier 1)
export const primitiveColors = {
  verones: '#00686f',        // Change this to your new color
  teal: '#009999',           // Or add new colors
  black: '#000000',
  white: '#ffffff',
  // Add more primitive colors...
} as const;

// 2. Update Semantic Colors (Tier 2)
export const semanticColors = {
  primary: {
    main: primitiveColors.verones,  // References primitive
    dark: '#004e53',                 // Update derived colors
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#99cc00',         // Update secondary color
    contrastText: '#000000de',
  },
  // ... other semantic colors
} as const;
```

#### Update Typography

```typescript
// Update Typography Primitives
export const primitiveTypography = {
  fontFamily: {
    base: 'Nunito',          // Change font family
    // Add alternative fonts...
  },
  fontSize: {
    '0.75rem': 12,           // Update sizes
    '0.875rem': 14,
    '1rem': 16,
    '1.25rem': 20,
    // ... more sizes
  },
  fontWeight: {
    regular: 400,            // Update weights
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
} as const;

// Update Typography Variants
export const typographyVariants = {
  h1: {
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: 96,            // Update size
    fontWeight: primitiveTypography.fontWeight.semiBold,
    lineHeight: 1.167,       // Update line height
  },
  // ... more variants
} as const;
```

#### Update Spacing

```typescript
export const primitiveSpacing = {
  1: 8,     // Base unit - change this to scale everything
  2: 16,
  3: 24,
  4: 32,
  // ... more spacing values
} as const;
```

### Step 3: Test Your Changes

```bash
# 1. Type check
npm run type-check

# 2. Run Storybook to preview changes
npm run storybook
# Opens at http://localhost:6006

# 3. Check all components visually
# Navigate through each component in Storybook
# Verify colors, typography, spacing look correct

# 4. Run tests
npm run test:run

# 5. Build to verify
npm run build
```

### Step 4: Commit Changes

```bash
git add src/theme/designTokens.ts design-tokens.json
git commit -m "feat: Update design tokens from Figma

- Updated primary color to #new-color
- Updated typography scale
- Updated spacing values

Figma source: [link to Figma file]"
git push origin main
```

---

## Method 2: Direct Component Configuration

**When to use**: You want to customize specific component styles without changing global tokens.

### Step 1: Locate Component Override

**File**: `src/theme/theme.ts`

```typescript
const themeOptions = {
  // ... other config

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: primitiveRadius.rounded,  // Change button shape
          textTransform: 'none',                  // Modify text transform
          fontWeight: 600,                        // Update font weight
          // Add more custom styles...
        },
        sizeSmall: {
          fontSize: 13,    // Customize small size
          padding: '6px 16px',
        },
        sizeMedium: {
          fontSize: 14,    // Customize medium size
          padding: '8px 22px',
        },
        sizeLarge: {
          fontSize: 16,    // Customize large size
          padding: '11px 24px',
        },
      },
    },

    // Customize other components...
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,  // Pill-shaped chips
        },
      },
    },
  },
};
```

### Step 2: Common Customizations

#### Change Button Styles

```typescript
MuiButton: {
  styleOverrides: {
    root: {
      borderRadius: 8,              // Less rounded corners
      textTransform: 'uppercase',   // Uppercase text
      letterSpacing: '0.5px',       // Add letter spacing
      boxShadow: 'none',            // Remove shadow
      '&:hover': {
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',  // Add hover shadow
      },
    },
  },
  defaultProps: {
    disableElevation: true,         // No elevation by default
  },
},
```

#### Change Card Styles

```typescript
MuiCard: {
  styleOverrides: {
    root: {
      borderRadius: 16,             // More rounded cards
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',  // Custom shadow
    },
  },
},
```

#### Change Typography Styles

```typescript
MuiTypography: {
  styleOverrides: {
    h1: {
      fontWeight: 700,              // Bolder headings
      letterSpacing: '-0.5px',      // Tighter spacing
    },
  },
},
```

### Step 3: Test Changes

```bash
# Preview in Storybook
npm run storybook

# Navigate to the component you changed
# Verify the customization looks correct

# Run tests
npm run test:run

# Build
npm run build
```

### Step 4: Commit Changes

```bash
git add src/theme/theme.ts
git commit -m "style: Customize Button component appearance

- Changed border radius to 8px
- Added uppercase text transform
- Updated hover shadow"
git push origin main
```

---

## Quick Reference: What to Update Where

| What You Want to Change | Where to Edit | Tier |
|------------------------|---------------|------|
| **Brand Colors** | `src/theme/designTokens.ts` → `primitiveColors` | Tier 1 |
| **Font Family** | `src/theme/designTokens.ts` → `primitiveTypography.fontFamily` | Tier 1 |
| **Font Sizes** | `src/theme/designTokens.ts` → `primitiveTypography.fontSize` | Tier 1 |
| **Spacing Scale** | `src/theme/designTokens.ts` → `primitiveSpacing` | Tier 1 |
| **Semantic Colors** (e.g., primary, secondary) | `src/theme/designTokens.ts` → `semanticColors` | Tier 2 |
| **Typography Variants** (H1-H6, body, etc.) | `src/theme/designTokens.ts` → `typographyVariants` | Tier 2 |
| **Component-Specific Styles** | `src/theme/theme.ts` → `components.MuiComponentName` | Tier 3 |
| **Global MUI Settings** | `src/theme/theme.ts` → `themeOptions` | Theme |

---

## Tips for Updating Styles

### ✅ Best Practices

1. **Start with Primitives** (Tier 1)
   - Change base colors, fonts, spacing first
   - These cascade to all components

2. **Then Semantic Tokens** (Tier 2)
   - Update contextual colors (primary, secondary, error)
   - Refine typography variants

3. **Finally Component Overrides** (Tier 3)
   - Fine-tune specific component styles
   - Only when global tokens aren't enough

4. **Always Test in Storybook**
   - Visual verification before committing
   - Check all variants and states

5. **Document Your Changes**
   - Update design-tokens.json
   - Add comments explaining why
   - Link to Figma source

### ❌ Common Mistakes to Avoid

1. ❌ Hardcoding colors in components
   ```typescript
   // Bad
   <Button sx={{ color: '#00686f' }}>Click</Button>

   // Good
   <Button color="primary">Click</Button>
   ```

2. ❌ Skipping the token hierarchy
   ```typescript
   // Bad - skipping primitives
   semanticColors.primary.main = '#00686f'

   // Good - using primitives
   semanticColors.primary.main = primitiveColors.verones
   ```

3. ❌ Not testing after changes
   - Always run `npm run storybook` to preview
   - Always run `npm run build` to verify

---

# Audit & Cleanup Routine

Regular maintenance to keep your design system healthy and optimized.

---

## Monthly Audit Checklist

### 1. Check for Outdated Dependencies

```bash
cd /Users/mader/mrs-design-system

# Check what's outdated
npm outdated

# Review the output
# Look for packages with newer versions available
```

**What to look for**:
- Security updates (patch versions)
- Bug fixes (minor versions)
- Major version updates (breaking changes)

**Action**:
```bash
# Update safe packages (patches and minors)
npm update

# For major updates, check changelog first
npm info package-name versions
npm info package-name@latest
```

### 2. Security Audit

```bash
# Check for vulnerabilities
npm audit

# Review the report
# Focus on HIGH and CRITICAL vulnerabilities
```

**Understanding the output**:
- **Production vulnerabilities**: Fix immediately
- **Development vulnerabilities**: Lower priority
- **No fix available**: Document and monitor

**Action**:
```bash
# Fix automatically if possible
npm audit fix

# For breaking changes (careful!)
npm audit fix --force  # Only if you understand the impact
```

### 3. Check Package Size

```bash
# Check what will be published
npm pack --dry-run

# Look at the package size
# Target: Keep under 200 KB
```

**If too large**:
1. Review `.npmignore`
2. Check for unnecessary files in `dist/`
3. Remove unused dependencies

### 4. Clean Build Artifacts

```bash
# Remove build outputs
rm -rf dist/
rm -rf storybook-static/
rm -rf coverage/
rm -rf node_modules/

# Clean reinstall
npm install

# Rebuild
npm run build
npm run build-storybook

# Verify everything works
npm run test:run
```

### 5. Documentation Review

**Check for**:
- Outdated information in README.md
- Broken links in documentation
- Missing documentation for new components
- Obsolete screenshots or examples

**Action**:
```bash
# Update README if needed
# Update CHANGELOG.md with recent changes
# Clean up old documentation files
```

---

## Quarterly Deep Clean

### 1. Dependency Deep Dive

```bash
# See full dependency tree
npm ls

# Check for duplicates
npm dedupe

# Remove unused dependencies
npm prune
```

### 2. Code Quality Check

```bash
# Run linter
npm run lint

# Fix auto-fixable issues
npm run lint:fix

# Check TypeScript strictness
npm run type-check

# Review and fix any warnings
```

### 3. Test Coverage Review

```bash
# Generate coverage report
npm run test:coverage

# Review coverage report in browser
open coverage/index.html

# Target: Maintain or improve coverage
```

**Action**:
- Add tests for uncovered components
- Remove obsolete test files

### 4. Storybook Optimization

```bash
# Build Storybook
npm run build-storybook

# Check build size
du -sh storybook-static/

# Optimize if > 5 MB:
# - Remove unused addons
# - Optimize images
# - Check for duplicate dependencies
```

### 5. Git Repository Cleanup

```bash
# Check repository size
du -sh .git/

# List large files
git ls-files | xargs ls -lh | sort -k5 -hr | head -20

# Remove obsolete branches
git branch --merged | grep -v main | xargs git branch -d
```

---

## Cleanup Script

Save this as `scripts/cleanup.sh`:

```bash
#!/bin/bash

echo "🧹 Starting MRS Design System Cleanup..."

# 1. Remove build artifacts
echo "📦 Removing build artifacts..."
rm -rf dist/
rm -rf storybook-static/
rm -rf coverage/
rm -rf .nyc_output/
rm -rf *.tgz

# 2. Clean node_modules
echo "🗑️  Cleaning node_modules..."
rm -rf node_modules/
rm -rf package-lock.json

# 3. Fresh install
echo "📥 Fresh install..."
npm install

# 4. Run quality checks
echo "✅ Running quality checks..."
npm run type-check
npm run lint
npm run test:run

# 5. Build
echo "🏗️  Building..."
npm run build

# 6. Report
echo ""
echo "✅ Cleanup complete!"
echo "📊 Package size:"
npm pack --dry-run 2>&1 | grep "package size"
echo ""
echo "🔐 Security status:"
npm audit --summary
```

**Usage**:
```bash
chmod +x scripts/cleanup.sh
./scripts/cleanup.sh
```

---

## Documentation Cleanup

### What to Remove

```bash
# Remove temporary/obsolete docs
rm -f *-SUMMARY.md
rm -f *-REPORT.md
rm -f TIMELINE-*.md
rm -f GIT-*.md

# Keep essential docs:
# - README.md
# - CHANGELOG.md
# - CLAUDE.md
# - QUICK_START.md
# - LICENSE
# - docs/
```

### What to Keep

**Root directory**:
- README.md
- CHANGELOG.md
- CLAUDE.md
- QUICK_START.md
- DESIGN_SYSTEM_RULES.md
- DESIGN_TOKENS_BY_TIER.md
- design-tokens-structure.md
- LICENSE

**docs/ directory**:
- Component templates
- Deployment guides
- Publishing guides
- Architecture docs

---

# Package Updates & Releases

How to version, publish, and maintain your design system package.

---

## Release Process

### 1. Prepare for Release

#### Review Changes

```bash
# See what changed since last release
git log v1.0.0-beta.1..HEAD --oneline

# Review the diff
git diff v1.0.0-beta.1..HEAD
```

#### Update Version

**Follow Semantic Versioning**:
- **Patch** (1.0.0 → 1.0.1): Bug fixes
- **Minor** (1.0.0 → 1.1.0): New features (backward compatible)
- **Major** (1.0.0 → 2.0.0): Breaking changes

```bash
# For patch release (bug fixes)
npm version patch

# For minor release (new features)
npm version minor

# For major release (breaking changes)
npm version major

# For pre-release
npm version prerelease --preid=beta
```

**What this does**:
1. Updates version in package.json
2. Creates a git commit
3. Creates a git tag

### 2. Update CHANGELOG.md

**Format** (follow Keep a Changelog):

```markdown
# Changelog

## [1.1.0] - 2025-12-15

### Added
- New Timeline component
- Dark mode support for all components
- Accessibility improvements

### Changed
- Updated Button hover states
- Improved Card shadows

### Fixed
- Fixed Select dropdown positioning
- Corrected Typography line heights

### Security
- Updated dependencies with security patches

## [1.0.0-beta.1] - 2025-12-11
...
```

### 3. Run Pre-Release Checks

```bash
# All checks must pass before release

# 1. Type check
npm run type-check

# 2. Lint
npm run lint

# 3. Tests
npm run test:run

# 4. Build
npm run build

# 5. Build Storybook
npm run build-storybook

# 6. Verify package contents
npm pack --dry-run

# 7. Check package size
npm pack 2>&1 | grep "package size"
```

**All must succeed** ✅

### 4. Publish to npm

#### First Time Setup

```bash
# Login to npm
npm login
# Enter username, password, email

# Enable 2FA (if not already)
# Visit: https://www.npmjs.com/settings/[username]/two-factor-authentication
```

#### Publish

```bash
# For beta releases
npm publish --tag beta --otp=<6-digit-code>

# For stable releases
npm publish --otp=<6-digit-code>

# For testing (doesn't actually publish)
npm publish --dry-run
```

**Get OTP code** from your authenticator app (Google Authenticator, Authy, etc.)

### 5. Create GitHub Release

```bash
# Push tags
git push --tags

# Create release using GitHub CLI
gh release create v1.1.0 \
  --title "v1.1.0 - Feature Release" \
  --notes-file CHANGELOG.md

# Or create manually on GitHub
# Visit: https://github.com/madergk/mrs-design-system/releases/new
```

### 6. Update Storybook Deployment

```bash
# Storybook auto-deploys on git push
# Just verify it deployed correctly
# Visit: https://mrs-design-system.vercel.app

# If manual deploy needed:
npx vercel --prod
```

### 7. Announce Release

**Update README.md** with new version:
```markdown
## Installation

\`\`\`bash
npm install mrs-design-system@1.1.0
\`\`\`
```

**Notify users**:
- Update project documentation
- Send announcement to team
- Post in Slack/Teams channel

---

## Version Management

### Choosing Version Numbers

| Change Type | Example | Version Bump | Command |
|-------------|---------|--------------|---------|
| **Bug fix** | Fixed button padding | 1.0.0 → 1.0.1 | `npm version patch` |
| **New component** | Added Timeline | 1.0.0 → 1.1.0 | `npm version minor` |
| **Breaking change** | Renamed props | 1.0.0 → 2.0.0 | `npm version major` |
| **Beta release** | Testing new feature | 1.1.0-beta.1 → 1.1.0-beta.2 | `npm version prerelease --preid=beta` |

### Pre-release Tags

```bash
# Beta release (testing)
npm publish --tag beta

# Alpha release (very early)
npm publish --tag alpha

# Next release (upcoming major)
npm publish --tag next

# Latest (stable - default)
npm publish
```

**Users install with**:
```bash
# Stable
npm install mrs-design-system

# Beta
npm install mrs-design-system@beta

# Specific version
npm install mrs-design-system@1.1.0
```

---

## Update Strategy

### Safe Update Process

#### 1. Update Dependencies Safely

```bash
# Check what's outdated
npm outdated

# Update patch versions only (safe)
npm update

# Update minor versions (usually safe)
# Review changelogs first
npm update --depth 2
```

#### 2. Test Major Updates

```bash
# For major version updates, test first

# Example: Updating Storybook 8 → 10
# 1. Check compatibility
npm info @storybook/react@10 peerDependencies

# 2. Create test branch
git checkout -b test/storybook-10

# 3. Update
npm install @storybook/react@10

# 4. Test thoroughly
npm run type-check
npm run lint
npm run test:run
npm run build
npm run storybook

# 5. If all works, merge
git checkout main
git merge test/storybook-10

# 6. If issues, stay on current version
git checkout main
git branch -D test/storybook-10
```

### Dependency Update Schedule

**Weekly**:
- Security patches
- Critical bug fixes

**Monthly**:
- Minor version updates
- Development dependencies

**Quarterly**:
- Major version updates (with testing)
- Framework updates

**As Needed**:
- Breaking changes (coordinate with team)

---

## Rollback Process

### If Release Has Issues

#### 1. Unpublish (within 72 hours)

```bash
# Unpublish specific version
npm unpublish mrs-design-system@1.1.0

# Note: Can only unpublish within 72 hours
```

#### 2. Deprecate Version (after 72 hours)

```bash
# Deprecate broken version
npm deprecate mrs-design-system@1.1.0 "This version has issues. Use 1.0.1 instead."
```

#### 3. Publish Fix Version

```bash
# Fix the issue
# ... make fixes ...

# Bump version
npm version patch  # 1.1.0 → 1.1.1

# Publish fix
npm publish --otp=<code>
```

#### 4. Update GitHub Release

```bash
# Update release notes
gh release edit v1.1.0 \
  --notes "⚠️ This version has been deprecated. Use v1.1.1 instead."
```

---

## Release Checklist Template

Copy this checklist for each release:

```markdown
## Release Checklist - v1.x.x

### Pre-Release
- [ ] All features complete
- [ ] All bugs fixed
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Version bumped (`npm version [type]`)

### Quality Checks
- [ ] `npm run type-check` - 0 errors
- [ ] `npm run lint` - 0 warnings
- [ ] `npm run test:run` - All passing
- [ ] `npm run build` - Successful
- [ ] `npm run build-storybook` - Successful
- [ ] `npm pack --dry-run` - Verified contents

### Publish
- [ ] npm login verified
- [ ] OTP code ready
- [ ] `npm publish --tag [tag] --otp=<code>` - Published
- [ ] Verified on npmjs.com
- [ ] Git tags pushed
- [ ] GitHub release created

### Post-Release
- [ ] Storybook deployed
- [ ] README.md updated
- [ ] Team notified
- [ ] Documentation site updated

### Rollback Plan
- [ ] Previous version tested: v1.x.x
- [ ] Rollback command ready: `npm deprecate ...`
```

---

## Troubleshooting

### Common Issues

#### "Cannot publish over previously published version"

**Solution**: Bump version first
```bash
npm version patch
npm publish --otp=<code>
```

#### "Need OTP for publishing"

**Solution**: Use authenticator app
```bash
# Get 6-digit code from Google Authenticator/Authy
npm publish --tag beta --otp=123456
```

#### "Build fails on npm install"

**Solution**: Check peer dependencies
```bash
npm info mrs-design-system@latest peerDependencies
# Ensure users have correct React/MUI versions
```

#### "Package too large"

**Solution**: Check `.npmignore`
```bash
# Ensure these are excluded:
# src/, .storybook/, *.test.tsx, *.stories.tsx, docs/, scripts/
```

---

## Quick Commands Reference

### Daily Development
```bash
npm run storybook      # Preview components
npm run build          # Build package
npm run test          # Run tests (watch mode)
npm run type-check    # Check TypeScript
npm run lint          # Check code quality
```

### Before Commit
```bash
npm run lint:fix       # Auto-fix lint issues
npm run format         # Format code with Prettier
npm run test:run       # Run all tests once
```

### Before Release
```bash
npm outdated           # Check for updates
npm audit              # Check security
npm run build          # Build package
npm pack --dry-run     # Verify package contents
```

### Release
```bash
npm version [type]     # Bump version
npm publish --otp=<code>  # Publish to npm
git push --tags        # Push tags to GitHub
gh release create      # Create GitHub release
```

### Cleanup
```bash
npm run build          # Clean build
npm audit fix          # Fix vulnerabilities
./scripts/cleanup.sh   # Full cleanup routine
```

---

## Support & Resources

### Documentation
- **Complete Workflow**: CLAUDE.md
- **Quick Start**: QUICK_START.md
- **Component Templates**: docs/COMPONENT_TEMPLATE.md
- **Publishing Guide**: docs/PUBLISHING.md
- **Deployment Guide**: docs/DEPLOYMENT_GUIDE.md

### Tools
- **Storybook**: https://mrs-design-system.vercel.app
- **npm Package**: https://www.npmjs.com/package/mrs-design-system
- **GitHub Repo**: https://github.com/madergk/mrs-design-system

### Getting Help
- Review CLAUDE.md for detailed workflow
- Check GitHub issues for known problems
- Refer to Material UI docs for component customization

---

**Last Updated**: December 11, 2025
**Version**: 1.0.0-beta.1
