# MRS Design System

A comprehensive React component library built on Material UI with TypeScript support, design tokens from Figma, and production-ready components.

[![npm version](https://img.shields.io/npm/v/mrs-design-system.svg)](https://www.npmjs.com/package/mrs-design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎨 **Design Token System** - Synchronized from Figma with primitive, semantic, and component tokens
- 💪 **TypeScript First** - Full type safety with strict compiler options
- 📦 **Tree-shakeable** - Optimized bundle size with ES modules
- ♿ **Accessible** - Built with accessibility best practices (jsx-a11y)
- 📚 **Storybook** - Interactive component documentation
- 🧪 **Tested** - Comprehensive test coverage with Vitest
- 🎭 **Themeable** - Customizable theme based on Material UI

## Installation

```bash
npm install mrs-design-system
```

### Peer Dependencies

This library requires the following peer dependencies:

```bash
npm install @emotion/react @emotion/styled @mui/material @mui/icons-material react react-dom
```

## Quick Start

### Basic Usage

```tsx
import { ThemeProvider } from '@mui/material';
import { theme, Button, Typography } from 'mrs-design-system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Welcome to MRS Design System</Typography>
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </ThemeProvider>
  );
}
```

### Importing Theme Only

```tsx
import { theme } from 'mrs-design-system/theme';
```

## Available Components

### Form Controls
- **Button** - Customizable buttons with multiple variants
- **Checkbox** - Checkbox input control
- **Radio** - Radio button control
- **Switch** - Toggle switch
- **Select** - Dropdown/select input

### Navigation & Progress
- **Stepper** - Multi-step process indicator
- **Timeline** - Visual timeline with items and connectors
- **AppBar** - Top navigation bar

### Content Display
- **Typography** - Text rendering with predefined variants
- **Badge** - Small notification/count indicators
- **Paper** - Container with elevation
- **Alert** - Alert and notification messages

### Layout & Structure
- **Divider** - Visual separators
- **List** / **ListItem** - List components
- **Accordion** / **AccordionGroup** - Collapsible content
- **Logo** - Branding logo component
- **AccountStack** - User account display with avatar

### Data Display
- **Table** - Complete table with sorting, pagination, and selection
- **TableCell** / **TableHead** / **TableRow** / **TableHeadRow** / **TableFooter** - Table sub-components

### Feedback & Overlay
- **Tooltip** - Hover information display
- **Icon** / **IconButton** - Icon rendering and icon buttons

## Component Examples

### Button

```tsx
import { Button } from 'mrs-design-system';

<Button variant="contained" color="primary" size="large">
  Primary Button
</Button>

<Button variant="outlined" color="secondary">
  Secondary Button
</Button>

<Button variant="text" disabled>
  Disabled Button
</Button>
```

### Table

```tsx
import { Table } from 'mrs-design-system';

<Table
  headers={['Name', 'Status', 'Date', 'Actions']}
  rows={[
    { cells: ['John Doe', 'Active', '2024-01-01', 'View'], id: 1 },
    { cells: ['Jane Smith', 'Inactive', '2024-01-02', 'Edit'], id: 2 },
  ]}
  checkbox
  showFooter
  page={1}
  rowsPerPage={10}
  count={100}
  onPageChange={(event, newPage) => console.log(newPage)}
/>
```

### Timeline

```tsx
import { Timeline, TimelineItem } from 'mrs-design-system';

<Timeline>
  <TimelineItem
    label="Step 1"
    description="Completed successfully"
    dotVariant="filled"
  />
  <TimelineItem
    label="Step 2"
    description="In progress"
    dotVariant="current"
  />
  <TimelineItem
    label="Step 3"
    description="Pending"
    dotVariant="outlined"
  />
</Timeline>
```

## Design Tokens

The design system uses a three-level token architecture:

1. **Primitive Tokens** - Base values (colors, typography, spacing, etc.)
2. **Semantic Tokens** - Contextual usage (primary, secondary, error, etc.)
3. **Component Tokens** - Component-specific styling

### Using Design Tokens

```tsx
import {
  primitiveColors,
  semanticColors,
  typographyVariants,
  primitiveSpacing,
} from 'mrs-design-system';

const myStyles = {
  color: semanticColors.primary.main,
  padding: primitiveSpacing[2], // 16px
  fontFamily: typographyVariants.h1.fontFamily,
};
```

## Theme Customization

### Using the Default Theme

```tsx
import { theme } from 'mrs-design-system';
import { ThemeProvider } from '@mui/material';

<ThemeProvider theme={theme}>
  {/* Your app */}
</ThemeProvider>
```

### Extending the Theme

```tsx
import { theme } from 'mrs-design-system';
import { createTheme, ThemeProvider } from '@mui/material';

const customTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      ...theme.palette.primary,
      main: '#custom-color',
    },
  },
});

<ThemeProvider theme={customTheme}>
  {/* Your app */}
</ThemeProvider>
```

## Development

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Setup

```bash
# Clone the repository
git clone https://github.com/madergk/mrs-design-system.git
cd mrs-design-system

# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Build the library
npm run build
```

### Available Scripts

- `npm run build` - Build the library for production
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Lint code with ESLint
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Generate test coverage report
- `npm run test:ui` - Open Vitest UI
- `npm run storybook` - Start Storybook dev server
- `npm run build-storybook` - Build Storybook for production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please read our contributing guidelines and code of conduct.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and ensure they pass (`npm test`)
5. Run linting (`npm run lint`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to your branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## Documentation

- [Storybook Documentation](https://madergk.github.io/mrs-design-system) (Coming soon)
- [Design System Rules](./DESIGN_SYSTEM_RULES.md)
- [Timeline Implementation](./TIMELINE_IMPLEMENTATION_PLAN.md)

## License

MIT © MRS Team

## Links

- [npm Package](https://www.npmjs.com/package/mrs-design-system)
- [GitHub Repository](https://github.com/madergk/mrs-design-system)
- [Issues](https://github.com/madergk/mrs-design-system/issues)

## Acknowledgments

- Built with [Material UI](https://mui.com/)
- Powered by [Vite](https://vitejs.dev/)
- Documented with [Storybook](https://storybook.js.org/)
- Tested with [Vitest](https://vitest.dev/)
