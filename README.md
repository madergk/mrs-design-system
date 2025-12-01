# MRS Design System

A comprehensive React design system built on Material UI with design tokens extracted from Figma. The system follows a three-tier token hierarchy (Primitives → Semantic → Component) that maps directly to Material UI's theme system.

## ✨ Features

- 🎨 **Design Tokens**: Complete three-tier hierarchy aligned with Figma
- ⚛️ **React Components**: Built on Material UI with full TypeScript support
- 🌗 **Dark Mode**: Built-in support for light and dark themes
- ♿ **Accessible**: WCAG compliant components
- 📱 **Responsive**: Mobile-first design approach
- 🧪 **Well-Tested**: Comprehensive test coverage with Vitest
- 📚 **Storybook**: Interactive component documentation
- 🔧 **TypeScript**: Full type safety and intellisense

## 📦 Installation

\`\`\`bash
npm install mrs-design-system
\`\`\`

## 🚀 Quick Start

### Basic Usage

\`\`\`tsx
import { ThemeProvider } from '@mui/material';
import { theme, Button } from 'mrs-design-system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </ThemeProvider>
  );
}
\`\`\`

### With Dark Mode

\`\`\`tsx
import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { createAppTheme, Button } from 'mrs-design-system';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = createAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
    </ThemeProvider>
  );
}
\`\`\`

## 🛠️ Development

\`\`\`bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm test
\`\`\`

## 📝 License

MIT © MRS Team
