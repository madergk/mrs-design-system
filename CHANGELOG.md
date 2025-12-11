# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0-beta.1] - 2025-12-11

### Added

#### Core Components (22 total)
- **Form Controls**: Button, Checkbox, Radio, Switch, Select
- **Navigation & Progress**: Stepper
- **Typography & Content**: Typography
- **Layout Components**: Paper, Card (with CardMedia, CardHeader, CardContent, CardActions), Divider, List, ListItem
- **Data Display**: Avatar, Badge, Chip, Tag
- **Feedback & Overlay**: Tooltip, Accordion, AccordionGroup
- **App Structure**: AppBar
- **Icons & Actions**: Icon, IconButton

#### Design Token System
- Three-tier token hierarchy (Primitives → Semantic → Component)
- Complete design tokens extracted from Figma
- Structured token file (`design-tokens.json`) following W3C spec
- TypeScript token implementation with full type safety

#### Theme System
- Material UI v7.2.0 integration
- Custom theme with design tokens
- Support for all MUI customization points
- Nunito font family integration
- 8px spacing base unit system
- Responsive breakpoints configuration
- Z-index layering system
- Transition and animation tokens

#### Development Tools
- **Build System**: Vite v7.2.6 for fast builds
- **TypeScript**: Strict mode configuration
- **Testing**: Vitest with React Testing Library
- **Linting**: ESLint with TypeScript plugin
- **Formatting**: Prettier with pre-commit hooks
- **Git Hooks**: lint-staged for quality enforcement

#### Documentation
- **Storybook v8.3.0**: Interactive component documentation
- **MDX Pages**: Introduction, Design Tokens, Best Practices, Contributing
- **Component Stories**: All 22 components with variants
- **Architecture Docs**: Design token structure, system architecture
- **Development Guides**: Component template, deployment guide, publishing guide

#### CI/CD
- GitHub Actions workflows for:
  - Linting and formatting checks
  - TypeScript type checking
  - Unit tests with coverage
  - Package build verification
  - Storybook build
- Codecov integration for coverage tracking
- Chromatic integration for visual testing

#### Quality Features
- Full TypeScript support with strict mode
- React 18.3.1 with forwardRef pattern for all components
- Comprehensive prop types and interfaces
- Accessibility attributes on components
- Zero npm security vulnerabilities

### Technical Specifications
- **React**: ^18.3.1
- **Material UI**: ^7.2.0
- **TypeScript**: ^5.5.4
- **Vite**: ^7.2.6
- **Storybook**: ^8.3.0
- **Vitest**: ^4.0.14
- **Build Output**: ES modules, tree-shakeable
- **Bundle Size**: ~586KB (with MUI dependencies external)

### Package Configuration
- ES module format
- Dual exports: main package and theme subpath
- TypeScript definitions included
- Proper externalization of peer dependencies
- MIT License

### Known Limitations
- Test coverage at 2.1% (Button and colorUtils only)
- Using `--legacy-peer-deps` for Vite 7 compatibility with Storybook
- Dark mode tokens defined but theme switching not implemented

### Notes
This is a beta release for early testing and feedback. The package is functional and production-ready for core use cases, but test coverage will be improved in subsequent releases.

---

## Release Notes

### What's New in v1.0.0-beta.1?

This is the initial beta release of the MRS Design System! 🎉

**Highlights**:
- 22 production-ready React components
- Complete Figma design token integration
- Comprehensive Storybook documentation
- Professional build and deployment infrastructure
- Zero security vulnerabilities

**Try it out**:
```bash
npm install mrs-design-system@beta
```

**Example Usage**:
```tsx
import { ThemeProvider } from '@mui/material';
import { theme, Button, Card } from 'mrs-design-system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Card>
    </ThemeProvider>
  );
}
```

**Feedback**: Please report issues at https://github.com/madergk/mrs-design-system/issues

---

[Unreleased]: https://github.com/madergk/mrs-design-system/compare/v1.0.0-beta.1...HEAD
[1.0.0-beta.1]: https://github.com/madergk/mrs-design-system/releases/tag/v1.0.0-beta.1
