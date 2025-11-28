# Design Tokens Architecture

## Overview

This design system architecture is built to align with Material UI's ThemeProvider structure, ensuring comprehensive coverage of all theme properties while maintaining a clear token hierarchy.

## Architecture Alignment with Material UI

### ✅ Complete Theme Properties

Our design tokens architecture now includes all critical Material UI theme properties:

| MUI Theme Property | Status | Implementation |
|-------------------|--------|----------------|
| `palette` | ✅ Complete | Full color system with semantic tokens |
| `typography` | ✅ Complete | All 13 default variants + component-specific |
| `spacing` | ✅ Complete | 8px base unit with scale |
| `breakpoints` | ✅ Complete | Custom values + MUI defaults |
| `shape` | ✅ Complete | Border radius configuration |
| `zIndex` | ✅ Complete | Component layering tokens |
| `transitions` | ✅ Complete | Duration and easing tokens |
| `components` | ✅ Complete | Component-level customizations |

## Token Hierarchy

```
┌─────────────────────────────────────────┐
│         PRIMITIVE TOKENS                 │
│  (Base values from Figma)                │
│  - Colors (verones, etc.)                │
│  - Typography (fontFamily, fontSize)    │
│  - Spacing (8px base unit)              │
│  - Radius, Breakpoints, zIndex, Transitions│
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│         SEMANTIC TOKENS                  │
│  (Contextual, references primitives)     │
│  - Colors (primary, secondary, etc.)    │
│  - Typography variants                 │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│         COMPONENT TOKENS                 │
│  (Component-specific styling)         │
│  - Rating, Chip, Input, Alert, etc.     │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│         MUI THEME                        │
│  (Material UI ThemeProvider)           │
│  - Maps all tokens to MUI structure     │
└─────────────────────────────────────────┘
```

## Key Design Decisions

### 1. Primitive → Semantic → Component Flow

This three-tier hierarchy ensures:
- **Single source of truth**: Primitive tokens define base values
- **Semantic meaning**: Semantic tokens provide context
- **Component flexibility**: Component tokens allow overrides

### 2. Material UI Alignment

All tokens map directly to Material UI's theme API:
- `semanticColors` → `theme.palette`
- `typographyVariants` → `theme.typography`
- `primitiveSpacing` → `theme.spacing()`
- `primitiveZIndex` → `theme.zIndex`
- `primitiveTransitions` → `theme.transitions`

### 3. Type Safety

Full TypeScript support:
- All tokens are `as const` for literal types
- Exported types for each token category
- Theme type exported for component usage

### 4. Extensibility

The architecture supports:
- Custom theme variables via module augmentation
- Dark mode support (ready to add)
- CSS variables (can be enabled)
- Theme composition and nesting

## Material UI Theme Structure Coverage

### Core Properties ✅

```typescript
theme = {
  palette: { ... },        // ✅ Complete
  typography: { ... },     // ✅ Complete (all 13 variants)
  spacing: 8,              // ✅ Complete
  breakpoints: { ... },    // ✅ Complete
  shape: { ... },         // ✅ Complete
  zIndex: { ... },        // ✅ Complete
  transitions: { ... },   // ✅ Complete
  components: { ... },    // ✅ Complete
}
```

### Typography Variants ✅

All 13 Material UI default typography variants:
- ✅ h1, h2, h3, h4, h5, h6
- ✅ subtitle1, subtitle2
- ✅ body1, body2
- ✅ button
- ✅ caption
- ✅ overline

### Component Customization ✅

Components configured via `theme.components`:
- ✅ MuiButton
- ✅ MuiChip
- ✅ MuiInputLabel, MuiInputBase, MuiFormHelperText
- ✅ MuiTableHead
- ✅ MuiAlert
- ✅ MuiAvatar
- ✅ MuiRating

## Connection Points

### Primary Color Alias

The critical connection between Figma variables and our tokens:

```
Figma: material/colors/verones (#00686f)
  ↓
primitiveColors.verones
  ↓
semanticColors.primary.main
  ↓
theme.palette.primary.main
```

This connection is documented in `tokenConnections` for maintainability.

## Usage Patterns

### 1. Direct Token Access

```typescript
import { semanticColors, primitiveColors } from './theme';

const primaryColor = semanticColors.primary.main;
const veronesColor = primitiveColors.verones;
```

### 2. Theme Access (Recommended)

```typescript
import { useTheme } from '@mui/material/styles';

function Component() {
  const theme = useTheme();
  return <Box sx={{ color: theme.palette.primary.main }} />;
}
```

### 3. Component Customization

```typescript
// Tokens automatically applied via theme.components
<Button>Uses typographyVariants.button.medium</Button>
```

## Future Enhancements

### Ready to Add

1. **Dark Mode**: Structure supports adding `colorSchemes`
2. **CSS Variables**: Can enable with `cssVariables: true`
3. **Custom Variables**: Module augmentation pattern ready
4. **Theme Composition**: Supports theme nesting/extending

### When Syncing from Figma

1. Update primitive tokens with new Figma values
2. Verify semantic token references
3. Update component tokens as needed
4. Test theme consistency

## References

- [Material UI Theming](https://mui.com/material-ui/customization/theming/)
- [Material UI Default Theme](https://mui.com/material-ui/customization/default-theme/)
- [Material UI z-index](https://mui.com/material-ui/customization/z-index/)
- [Material UI Transitions](https://mui.com/material-ui/customization/transitions/)

