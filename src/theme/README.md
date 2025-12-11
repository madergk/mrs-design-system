# Design Tokens & Theme

This directory contains the design tokens extracted from Figma and the Material UI theme configuration.

## Structure

```
src/theme/
├── designTokens.ts    # All design tokens (primitives, semantic, component)
├── theme.ts          # Material UI theme configuration
├── index.ts          # Exports
└── README.md         # This file
```

## Design Tokens Structure

The design tokens follow a three-tier hierarchy:

### 1. Primitive Tokens
Base values that serve as the foundation:
- **Colors**: Base color values (e.g., `verones: '#00686f'`)
- **Typography**: Font families, sizes, weights
- **Spacing**: Base spacing scale (8px unit)
- **Radius**: Border radius values
- **Breakpoints**: Screen size breakpoints

### 2. Semantic Tokens
Contextual tokens that reference primitives:
- **Colors**: `primary`, `secondary`, `error`, `warning`, `info`, `success`
- **Typography**: Composed typography variants
- These map directly to Material UI's theme structure

### 3. Component Tokens
Component-specific styling tokens:
- Rating, Chip, Input, Alert, etc.
- Used for component-level customizations

## Key Connection: Primary Color Alias

The `primary/main` color (`#00686f`) is aliased from the primitive color `verones` in the `material/colors` collection. This connection is documented in `tokenConnections`:

```typescript
primary: {
  main: {
    primitive: 'primitiveColors.verones',
    value: primitiveColors.verones,
    description: 'Primary main color aliased from material/colors/verones primitive',
  },
}
```

## Usage

### Using the Theme

```typescript
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

### Accessing Design Tokens Directly

```typescript
import { semanticColors, typographyVariants, primitiveColors } from './theme';

// Use semantic colors
const primaryColor = semanticColors.primary.main; // '#00686f'

// Use typography variants
const body1Style = typographyVariants.body1;

// Use primitive colors
const veronesColor = primitiveColors.verones;
```

### Using Theme in Components

```typescript
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <Box sx={{ 
      color: theme.palette.primary.main,
      fontSize: theme.typography.body1.fontSize,
      padding: theme.spacing(2), // 16px (2 * 8px)
    }}>
      Content
    </Box>
  );
}
```

## Token Mapping to MUI

| Figma Token | MUI Theme Path | Example |
|------------|----------------|---------|
| `primary/main` | `theme.palette.primary.main` | `#00686f` |
| `text/primary` | `theme.palette.text.primary` | `#000000de` |
| `typography/body1` | `theme.typography.body1` | Font config |
| `1` (spacing) | `theme.spacing(1)` | `8px` |
| `radius/borderRadius-md` | `theme.shape.borderRadius` | `12` |
| `breakpoint-sm` | `theme.breakpoints.values.sm` | `600` |

## Extending the Theme

To add custom theme variables:

1. Add to `designTokens.ts`:
```typescript
export const customTokens = {
  myCustomColor: '#ff0000',
} as const;
```

2. Extend the theme in `theme.ts`:
```typescript
const themeOptions: ThemeOptions = {
  // ... existing config
  custom: {
    myColor: customTokens.myCustomColor,
  },
};
```

3. Add TypeScript types (if using TypeScript):
```typescript
declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      myColor: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      myColor?: string;
    };
  }
}
```

## Component Customization

Component-specific tokens are applied via the `components` section in the theme. For example:

```typescript
components: {
  MuiButton: {
    styleOverrides: {
      root: {
        // Uses typographyVariants.button.medium
      },
    },
  },
}
```

## Notes

- All color values with opacity (e.g., `#000000de`) are RGBA hex values
- Spacing uses an 8px base unit (Material Design standard)
- Typography uses rem units for accessibility
- The theme follows Material UI v7 conventions

## Future Sync with Figma

When syncing components from Figma:
1. Verify design tokens match Figma variables
2. Update `designTokens.ts` with any new tokens
3. Update `theme.ts` to apply new tokens
4. Test components to ensure visual consistency

