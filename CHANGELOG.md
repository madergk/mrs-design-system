# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Comprehensive test framework with Vitest, @testing-library/react, and coverage support
- Sample test file for Button component
- Pre-commit hooks with Husky for linting and type-checking
- Enhanced README with comprehensive documentation
- CHANGELOG.md for tracking project changes
- Bundle optimization with `sideEffects: false` for better tree-shaking
- Node.js and npm engine requirements (>=18.0.0 and >=9.0.0)

### Changed
- Moved React, ReactDOM, MUI, and Emotion dependencies to peerDependencies
- Fixed TypeScript compilation errors in Table, TableHeadRow, AccountStack, and Timeline components
- Fixed CI workflow Storybook artifact path (`.storybook-static/` → `storybook-static/`)
- AccountStack component now uses MUI's Avatar directly instead of custom Avatar component

### Fixed
- TypeScript `exactOptionalPropertyTypes` compatibility issues across multiple components
- Unused variable warnings in Table component event handlers
- Type narrowing issues with TableRowData properties
- Timeline component TypeScript error with child prop cloning

## [0.1.4] - Previous Release

### Components
- Accordion / AccordionGroup
- AccountStack
- Alert
- AppBar
- Badge
- Button
- Checkbox
- Divider
- Icon / IconButton
- List / ListItem
- Logo
- Paper
- Radio
- Select
- Stepper
- Switch
- Table (with TableCell, TableHead, TableRow, TableHeadRow, TableFooter)
- Timeline (with TimelineItem, TimelineDot, TimelineConnector)
- Tooltip
- Typography

### Features
- Design token system (primitive, semantic, component tokens)
- Figma integration for design token synchronization
- Theme system based on Material UI
- TypeScript support with strict mode
- Storybook documentation
- ESLint and Prettier configuration
- CI/CD pipeline with GitHub Actions

---

## Release Guidelines

### Version Types

- **Major (x.0.0)** - Breaking changes, API changes, major features
- **Minor (0.x.0)** - New features, new components, non-breaking changes
- **Patch (0.0.x)** - Bug fixes, documentation updates, minor improvements

### Change Categories

- **Added** - New features, components, or capabilities
- **Changed** - Changes to existing functionality
- **Deprecated** - Features marked for removal in future releases
- **Removed** - Features removed in this release
- **Fixed** - Bug fixes
- **Security** - Security-related changes

[Unreleased]: https://github.com/madergk/mrs-design-system/compare/v0.1.4...HEAD
[0.1.4]: https://github.com/madergk/mrs-design-system/releases/tag/v0.1.4
