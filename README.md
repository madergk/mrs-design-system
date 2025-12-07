# MRS Design System

React components built on Material UI with TypeScript support.

## Installation

```bash
npm install mrs-design-system
```

## Usage

```tsx
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
```

## License

MIT © MRS Team
