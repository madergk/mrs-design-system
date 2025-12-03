# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial release of MRS Design System
- Complete three-tier design token system (Primitives → Semantic → Component)
- 23 React components built on Material UI:
  - **Form Controls**: Button, Checkbox, Radio, Switch, Select
  - **Navigation & Progress**: Stepper
  - **Typography & Content**: Typography
  - **Layout Components**: Paper, Card (with CardMedia, CardHeader, CardContent, CardActions), Divider, List, ListItem
  - **Data Display**: Avatar, Badge, Chip, Tag
  - **Feedback & Overlay**: Tooltip, Accordion, AccordionGroup
  - **App Structure**: AppBar
  - **Icons & Actions**: Icon, IconButton
- Full TypeScript support with comprehensive type definitions
- Dark mode support via `createAppTheme()` function
- Design tokens exported for programmatic access
- Color utilities (`hexToRgba`, `opacityValues`)
- Storybook documentation with interactive examples
- Comprehensive test suite (39 tests)
- Build system configured with Vite
- ESLint and Prettier for code quality

### Technical Details
- Built on Material UI v7.2.0
- React 18.3.1 compatible
- TypeScript 5.5.4
- Vite 6.0.0 for bundling
- Vitest for testing
- Storybook 8.3.0 for documentation

## [0.1.0] - 2025-12-03

### Added
- Initial development version
- Core architecture and component structure
- Design token system integration with Figma
- **Published to npm**: First public release

---

## Version History

- **v0.1.0**: Development version (current)
- **v1.0.0**: Planned first stable release

---

## How to Read This Changelog

- **Added**: New features
- **Changed**: Changes in existing functionality
- **Deprecated**: Soon-to-be removed features
- **Removed**: Removed features
- **Fixed**: Bug fixes
- **Security**: Vulnerability fixes

