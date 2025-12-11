# Quick Start Guide

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start Storybook to view and test components:**
   ```bash
   npm run storybook
   ```
   This will open Storybook at `http://localhost:6006`

## Button Component

The Button component has been created based on the Figma design. It includes:

### Variants
- ✅ **Contained** - Filled button with background color
- ✅ **Outlined** - Button with border
- ✅ **Text** - Text-only button

### Sizes
- ✅ **Small** - 32px height
- ✅ **Medium** - 40px height  
- ✅ **Large** - 48px height

### Colors
- ✅ **Primary** - Uses `theme.palette.primary` (verones color)
- ✅ **Secondary** - Uses `theme.palette.secondary`
- ✅ **Error** - Uses `theme.palette.error`
- ✅ **Inherit** - Inherits color from parent

### States
- ✅ **Enabled** - Default state
- ✅ **Hovered** - On hover (handled by MUI)
- ✅ **Focused** - On focus (handled by MUI)
- ✅ **Pressed** - On click (handled by MUI)
- ✅ **Disabled** - Disabled state

## Viewing in Storybook

Once Storybook is running, you'll see:

1. **Default** - Basic button example
2. **Variants** - All three variants side by side
3. **Colors** - All color options for each variant
4. **Sizes** - All size options
5. **States** - Enabled and disabled states
6. **Complete Showcase** - Full display matching Figma design

## Component Usage

```tsx
import { Button } from '@/components/Button';

// Basic usage
<Button variant="contained" color="primary" size="medium">
  Click me
</Button>

// All props
<Button
  variant="contained"  // 'contained' | 'outlined' | 'text'
  color="primary"      // 'primary' | 'secondary' | 'error' | 'inherit'
  size="medium"        // 'small' | 'medium' | 'large'
  disabled={false}
  fullWidth={false}
  onClick={() => console.log('clicked')}
>
  Button Text
</Button>
```

## Next Steps

1. Run `npm install` to install dependencies
2. Run `npm run storybook` to start Storybook
3. View the Button component in Storybook
4. Test all variants, sizes, colors, and states
5. Compare with Figma design to ensure visual match

## Notes

- All styling is handled via the theme configuration in `src/theme/theme.ts`
- The Button uses Material UI's Button component with our design tokens
- Typography, spacing, and colors all come from our design tokens
- The component is fully typed with TypeScript

