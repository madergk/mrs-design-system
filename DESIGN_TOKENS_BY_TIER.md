# Design Tokens by Tier

This document provides a comprehensive extraction of all design tokens from the design system, organized by their hierarchical tiers.

## Token Hierarchy

```
Tier 1 (Primitives) → Tier 2 (Semantic) → Tier 3 (Component-Specific) → Tier 4 (Library/Utility)
     Base Values    →   Contextual     →    Component Overrides     →   Development Tools
```

---

## Tier 1: Primitive Tokens

Primitive tokens are the foundational design values extracted from Figma. These are the base values that are referenced by higher-tier tokens.

### 1.1 Primitive Colors

**Source:** `primitiveColors` in `src/theme/designTokens.ts:23-36`

| Token | Value | Description |
|-------|-------|-------------|
| `primitiveColors.verones` | `#00686f` | Primary teal color (referenced by semantic primary.main) |
| `primitiveColors.teal` | `#009999` | Alternative teal shade |
| `primitiveColors.deepPurple[500]` | `#673ab7` | Deep purple variant |
| `primitiveColors.black` | `#000000` | Pure black |
| `primitiveColors.white` | `#ffffff` | Pure white |

### 1.2 Primitive Typography

**Source:** `primitiveTypography` in `src/theme/designTokens.ts:42-65`

#### Font Family
| Token | Value |
|-------|-------|
| `primitiveTypography.fontFamily.brand` | `Nunito` |
| `primitiveTypography.fontFamily.base` | `Nunito` |

#### Font Sizes
| Token | Pixels | Rem | Usage Context |
|-------|--------|-----|---------------|
| `primitiveTypography.fontSize['0.75rem']` | 12 | 0.75rem | Caption, small text |
| `primitiveTypography.fontSize['0.8125rem']` | 13 | 0.8125rem | Small buttons, chips |
| `primitiveTypography.fontSize['0.875rem']` | 14 | 0.875rem | Body2, small UI text |
| `primitiveTypography.fontSize['1rem']` | 16 | 1rem | Body1, base text |
| `primitiveTypography.fontSize['1.25rem']` | 20 | 1.25rem | H6 |
| `primitiveTypography.fontSize['1.5rem']` | 24 | 1.5rem | H5 |
| `primitiveTypography.fontSize['2.125rem']` | 34 | 2.125rem | H4 |
| `primitiveTypography.fontSize['3rem']` | 48 | 3rem | H3 |
| `primitiveTypography.fontSize['3.75rem']` | 60 | 3.75rem | H2 |
| `primitiveTypography.fontSize['6rem']` | 96 | 6rem | H1 |

#### Font Weights
| Token | Value | Name |
|-------|-------|------|
| `primitiveTypography.fontWeight.regular` | 400 | Regular |
| `primitiveTypography.fontWeight.medium` | 500 | Medium |
| `primitiveTypography.fontWeight.semiBold` | 600 | Semi-Bold |
| `primitiveTypography.fontWeight.bold` | 700 | Bold |

### 1.3 Primitive Spacing

**Source:** `primitiveSpacing` in `src/theme/designTokens.ts:71-76`

**Base Unit:** 8px

| Token | Pixels | Multiplier |
|-------|--------|------------|
| `primitiveSpacing[1]` | 8 | 1× |
| `primitiveSpacing[2]` | 16 | 2× |
| `primitiveSpacing[3]` | 24 | 3× |
| `primitiveSpacing[8]` | 64 | 8× |

### 1.4 Primitive Border Radius

**Source:** `primitiveRadius` in `src/theme/designTokens.ts:81-85`

| Token | Value | Usage |
|-------|-------|-------|
| `primitiveRadius.none` | 0 | No rounding |
| `primitiveRadius.md` | 12 | Medium rounded corners |
| `primitiveRadius.rounded` | 999 | Pill/fully rounded |

### 1.5 Primitive Breakpoints

**Source:** `primitiveBreakpoints` in `src/theme/designTokens.ts:90-93`

| Token | Pixels | Description |
|-------|--------|-------------|
| `primitiveBreakpoints.xs` | 444 | Extra small devices |
| `primitiveBreakpoints.sm` | 600 | Small devices |

**Note:** Material UI provides additional default breakpoints:
- `md`: 900px
- `lg`: 1200px
- `xl`: 1536px

### 1.6 Primitive Z-Index

**Source:** `primitiveZIndex` in `src/theme/designTokens.ts:100-108`

| Token | Value | Purpose |
|-------|-------|---------|
| `primitiveZIndex.mobileStepper` | 1000 | Mobile stepper component |
| `primitiveZIndex.speedDial` | 1050 | Speed dial FAB |
| `primitiveZIndex.appBar` | 1100 | App bar/header |
| `primitiveZIndex.drawer` | 1200 | Drawer/sidebar |
| `primitiveZIndex.modal` | 1300 | Modal dialogs |
| `primitiveZIndex.snackbar` | 1400 | Snackbar notifications |
| `primitiveZIndex.tooltip` | 1500 | Tooltips (highest) |

### 1.7 Primitive Transitions

**Source:** `primitiveTransitions` in `src/theme/designTokens.ts:115-131`

#### Duration (milliseconds)
| Token | Value (ms) | Usage |
|-------|-----------|-------|
| `primitiveTransitions.duration.shortest` | 150 | Very quick transitions |
| `primitiveTransitions.duration.shorter` | 200 | Quick transitions |
| `primitiveTransitions.duration.short` | 250 | Short transitions |
| `primitiveTransitions.duration.standard` | 300 | Standard transitions |
| `primitiveTransitions.duration.complex` | 375 | Complex transitions |
| `primitiveTransitions.duration.enteringScreen` | 225 | Elements entering screen |
| `primitiveTransitions.duration.leavingScreen` | 195 | Elements leaving screen |

#### Easing Functions
| Token | Value | Usage |
|-------|-------|-------|
| `primitiveTransitions.easing.easeInOut` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard easing |
| `primitiveTransitions.easing.easeOut` | `cubic-bezier(0.0, 0, 0.2, 1)` | Deceleration |
| `primitiveTransitions.easing.easeIn` | `cubic-bezier(0.4, 0, 1, 1)` | Acceleration |
| `primitiveTransitions.easing.sharp` | `cubic-bezier(0.4, 0, 0.6, 1)` | Sharp transitions |

### 1.8 Opacity Values

**Source:** `opacityValues` in `src/theme/colorUtils.ts:32-57`

| Token | Value | Percentage | Usage |
|-------|-------|------------|-------|
| `opacityValues.full` | 1.00 | 100% | Full opacity |
| `opacityValues.highEmphasis` | 0.87 | 87% | Primary text |
| `opacityValues.mediumEmphasis` | 0.60 | 60% | Secondary text |
| `opacityValues.active` | 0.56 | 56% | Active state |
| `opacityValues.standardUnderline` | 0.42 | 42% | Input underlines |
| `opacityValues.disabled` | 0.38 | 38% | Disabled elements |
| `opacityValues.outlinedBorder` | 0.23 | 23% | Outlined borders |
| `opacityValues.hover` | 0.16 | 16% | Hover state |
| `opacityValues.divider` | 0.12 | 12% | Dividers |
| `opacityValues.selected` | 0.12 | 12% | Selected state |
| `opacityValues.focus` | 0.12 | 12% | Focus state |
| `opacityValues.filledInput` | 0.06 | 6% | Filled input background |

---

## Tier 2: Semantic Tokens

Semantic tokens provide contextual meaning by referencing primitive tokens. They map directly to Material UI's theme structure.

### 2.1 Semantic Color Palette

**Source:** `semanticColors` in `src/theme/designTokens.ts:142-189`

#### Primary
| Token | Value | References |
|-------|-------|------------|
| `semanticColors.primary.main` | `#00686f` | `primitiveColors.verones` |
| `semanticColors.primary.dark` | `#004e53` | Calculated darker shade |
| `semanticColors.primary.contrastText` | `#ffffff` | White text on primary |
| `semanticColors.primary.states.selected` | `#00999929` | Primary @ 16% opacity |
| `semanticColors.primary.states.hover` | `#0099991f` | Primary @ 12% opacity |

#### Secondary
| Token | Value | Description |
|-------|-------|-------------|
| `semanticColors.secondary.main` | `#99cc00` | Lime green |
| `semanticColors.secondary.contrastText` | `#000000de` | Black @ 87% opacity |

#### Error
| Token | Value | Description |
|-------|-------|-------------|
| `semanticColors.error.main` | `#ab1a1a` | Red error color |
| `semanticColors.error.contrastText` | `#ffffff` | White text on error |

#### Warning
| Token | Value | Description |
|-------|-------|-------------|
| `semanticColors.warning.main` | `#dfa00a` | Orange warning color |

#### Info
| Token | Value | Description |
|-------|-------|-------------|
| `semanticColors.info.main` | `#2481b8` | Blue info color |
| `semanticColors.info.contrastText` | `#ffffff` | White text on info |

#### Success
| Token | Value | Description |
|-------|-------|-------------|
| `semanticColors.success.main` | `#2e7d32` | Green success color |
| `semanticColors.success.contrastText` | `#ffffff` | White text on success |

#### Background
| Token | Value | Description |
|-------|-------|-------------|
| `semanticColors.background.default` | `#ffffff` | Default page background |
| `semanticColors.background.paper.elevation0` | `#ffffff` | Paper at elevation 0 |
| `semanticColors.background.paper.elevation1` | `#ffffff` | Paper at elevation 1 |

#### Text
| Token | Value | Description |
|-------|-------|-------------|
| `semanticColors.text.primary` | `#000000de` | Black @ 87% opacity (high emphasis) |
| `semanticColors.text.secondary` | `#00000099` | Black @ 60% opacity (medium emphasis) |

#### Action
| Token | Value | Description |
|-------|-------|-------------|
| `semanticColors.action.active` | `#0000008f` | Black @ 56% opacity |
| `semanticColors.action.selected` | `#0000001f` | Black @ 12% opacity |

#### Divider
| Token | Value | Description |
|-------|-------|-------------|
| `semanticColors.divider` | `#0000001f` | Black @ 12% opacity |

### 2.2 Typography Variants

**Source:** `typographyVariants` in `src/theme/designTokens.ts:200-360`

#### Headings

##### H1
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 96,      // primitiveTypography.fontSize['6rem']
  fontWeight: 600,   // primitiveTypography.fontWeight.semiBold
  lineHeight: 1.167
}
```

##### H2
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 60,      // primitiveTypography.fontSize['3.75rem']
  fontWeight: 600,   // primitiveTypography.fontWeight.semiBold
  lineHeight: 1.2
}
```

##### H3
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 48,      // primitiveTypography.fontSize['3rem']
  fontWeight: 600,   // primitiveTypography.fontWeight.semiBold
  lineHeight: 1.167
}
```

##### H4
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 34,      // primitiveTypography.fontSize['2.125rem']
  fontWeight: 600,   // primitiveTypography.fontWeight.semiBold
  lineHeight: 1.235
}
```

##### H5
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 24,      // primitiveTypography.fontSize['1.5rem']
  fontWeight: 600,   // primitiveTypography.fontWeight.semiBold
  lineHeight: 1.334
}
```

##### H6
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 20,      // primitiveTypography.fontSize['1.25rem']
  fontWeight: 600,   // primitiveTypography.fontWeight.semiBold
  lineHeight: 1.6
}
```

#### Body & Supporting Text

##### Body1
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 16,      // primitiveTypography.fontSize['1rem']
  fontWeight: 400,   // primitiveTypography.fontWeight.regular
  lineHeight: 1.5
}
```

##### Body2
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 14,      // primitiveTypography.fontSize['0.875rem']
  fontWeight: 400,   // primitiveTypography.fontWeight.regular
  lineHeight: 1.429
}
```

##### Caption
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 12,      // primitiveTypography.fontSize['0.75rem']
  fontWeight: 400,   // primitiveTypography.fontWeight.regular
  lineHeight: 1.2
}
```

##### Subtitle1
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 16,      // primitiveTypography.fontSize['1rem']
  fontWeight: 400,   // primitiveTypography.fontWeight.regular
  lineHeight: 1.75
}
```

##### Subtitle2
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 14,      // primitiveTypography.fontSize['0.875rem']
  fontWeight: 500,   // primitiveTypography.fontWeight.medium
  lineHeight: 1.57
}
```

##### Overline
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 12,      // primitiveTypography.fontSize['0.75rem']
  fontWeight: 700,   // primitiveTypography.fontWeight.bold
  lineHeight: 2.66,
  textTransform: 'uppercase'
}
```

---

## Tier 3: Component-Specific Tokens

Component tokens provide specialized styling for specific UI components.

### 3.1 Button Typography

**Source:** `typographyVariants.button` in `src/theme/designTokens.ts:276-295`

#### Small Button
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 13,      // primitiveTypography.fontSize['0.8125rem']
  fontWeight: 600,   // primitiveTypography.fontWeight.semiBold
  lineHeight: 24
}
```

#### Medium Button
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 14,      // primitiveTypography.fontSize['0.875rem']
  fontWeight: 600,   // primitiveTypography.fontWeight.semiBold
  lineHeight: 24
}
```

#### Large Button
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 16,      // primitiveTypography.fontSize['1rem']
  fontWeight: 600,   // primitiveTypography.fontWeight.semiBold
  lineHeight: 24
}
```

### 3.2 Chip Tokens

**Source:** `typographyVariants.chip` and `componentTokens.chip` in `src/theme/designTokens.ts:296-303, 375-378`

#### Typography
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 13,      // primitiveTypography.fontSize['0.8125rem']
  fontWeight: 400,   // primitiveTypography.fontWeight.regular
  lineHeight: 18
}
```

#### Colors
| Token | Value | Description |
|-------|-------|-------------|
| `componentTokens.chip.defaultCloseFill` | `#000000` | Close icon color |
| `componentTokens.chip.defaultEnabledBorder` | `#bdbdbd` | Border color when enabled |

### 3.3 Input/TextField Tokens

**Source:** `typographyVariants.input` and `componentTokens.input` in `src/theme/designTokens.ts:304-323, 379-389`

#### Label Typography
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 12,      // primitiveTypography.fontSize['0.75rem']
  fontWeight: 400,   // primitiveTypography.fontWeight.regular
  lineHeight: 12
}
```

#### Value Typography
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 16,      // primitiveTypography.fontSize['1rem']
  fontWeight: 400,   // primitiveTypography.fontWeight.regular
  lineHeight: 24
}
```

#### Helper Text Typography
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 12,      // primitiveTypography.fontSize['0.75rem']
  fontWeight: 400,   // primitiveTypography.fontWeight.regular
  lineHeight: 1.66
}
```

#### Variant Colors

**Standard Input**
| Token | Value | Description |
|-------|-------|-------------|
| `componentTokens.input.standard.enabledBorder` | `#0000006b` | Black @ 42% opacity |

**Filled Input**
| Token | Value | Description |
|-------|-------|-------------|
| `componentTokens.input.filled.enabledFill` | `#0000000f` | Black @ 6% opacity |

**Outlined Input**
| Token | Value | Description |
|-------|-------|-------------|
| `componentTokens.input.outlined.enabledBorder` | `#0000003b` | Black @ 23% opacity |

### 3.4 Table Tokens

**Source:** `typographyVariants.table` in `src/theme/designTokens.ts:324-331`

#### Header Typography
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 14,      // primitiveTypography.fontSize['0.875rem']
  fontWeight: 500,   // primitiveTypography.fontWeight.medium
  lineHeight: 24
}
```

### 3.5 Alert Tokens

**Source:** `typographyVariants.alert` and `componentTokens.alert` in `src/theme/designTokens.ts:332-345, 390-407`

#### Title Typography
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 16,      // primitiveTypography.fontSize['1rem']
  fontWeight: 500,   // primitiveTypography.fontWeight.medium
  lineHeight: 1.5
}
```

#### Description Typography
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 14,      // primitiveTypography.fontSize['0.875rem']
  fontWeight: 400,   // primitiveTypography.fontWeight.regular
  lineHeight: 1.429
}
```

#### Alert Colors

**Error Alert**
| Token | Value | Description |
|-------|-------|-------------|
| `componentTokens.alert.error.color` | `#5f2120` | Dark red text |
| `componentTokens.alert.error.background` | `#fdeded` | Light red background |

**Info Alert**
| Token | Value | Description |
|-------|-------|-------------|
| `componentTokens.alert.info.color` | `#014361` | Dark blue text |
| `componentTokens.alert.info.background` | `#e5f6fd` | Light blue background |

**Success Alert**
| Token | Value | Description |
|-------|-------|-------------|
| `componentTokens.alert.success.color` | `#1e4620` | Dark green text |
| `componentTokens.alert.success.background` | `#edf7ed` | Light green background |

**Warning Alert**
| Token | Value | Description |
|-------|-------|-------------|
| `componentTokens.alert.warning.color` | `#3e2410` | Dark orange text |

### 3.6 Avatar Tokens

**Source:** `typographyVariants.avatar` in `src/theme/designTokens.ts:346-359`

#### Large Avatar Initials
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 20,      // primitiveTypography.fontSize['1.25rem']
  fontWeight: 600,   // primitiveTypography.fontWeight.semiBold
  lineHeight: 20
}
```

#### Medium Avatar Initials
```typescript
{
  fontFamily: 'Nunito',
  fontSize: 12,      // primitiveTypography.fontSize['0.75rem']
  fontWeight: 400,   // primitiveTypography.fontWeight.regular
  lineHeight: 12
}
```

### 3.7 Rating Tokens

**Source:** `componentTokens.rating` in `src/theme/designTokens.ts:371-374`

| Token | Value | Description |
|-------|-------|-------------|
| `componentTokens.rating.activeFill` | `#ffb400` | Gold/yellow for filled stars |
| `componentTokens.rating.enabledBorder` | `#0000003b` | Black @ 23% for unfilled stars |

---

## Tier 4: Library/Utility Tokens

Library tokens are used for development, debugging, or special purposes.

**Source:** `libraryTokens` in `src/theme/designTokens.ts:418-422`

| Token | Value | Description |
|-------|-------|-------------|
| `libraryTokens.colorHighlight` | `#9747FF` | Purple highlight color |
| `libraryTokens.fillHighlight` | `#9747FF` | Purple fill for highlights |
| `libraryTokens.clickableLayer` | `#000000` | Clickable layer indicator |

---

## Token Connection Mapping

**Source:** `tokenConnections` in `src/theme/designTokens.ts:437-445`

The design system explicitly documents how tokens flow through the hierarchy:

```
Figma: material/colors/verones
    ↓
primitiveColors.verones (#00686f)
    ↓
semanticColors.primary.main
    ↓
theme.palette.primary.main
```

### Example Connection
```typescript
{
  primary: {
    main: {
      primitive: 'primitiveColors.verones',
      value: '#00686f',
      description: 'Primary main color aliased from material/colors/verones primitive'
    }
  }
}
```

---

## Usage Guidelines

### Importing Tokens

```typescript
import {
  primitiveColors,
  primitiveTypography,
  primitiveSpacing,
  primitiveRadius,
  primitiveBreakpoints,
  primitiveZIndex,
  primitiveTransitions,
  semanticColors,
  typographyVariants,
  componentTokens,
  libraryTokens,
} from '@mrs-design-system/theme/designTokens';

import { opacityValues, hexToRgba } from '@mrs-design-system/theme/colorUtils';
```

### Best Practices

1. **Always use semantic tokens when available** - They provide contextual meaning and maintain consistency
2. **Reference primitive tokens only when creating new semantic tokens** - Don't skip the semantic layer
3. **Use component tokens for component-specific styling** - They ensure consistency across component instances
4. **Leverage opacity values for state variations** - Use the predefined opacity values instead of hardcoding
5. **Follow the token hierarchy** - Primitives → Semantic → Component-Specific

### Example: Creating a Custom Component

```typescript
import { semanticColors, primitiveSpacing, opacityValues } from '@mrs-design-system/theme';

const CustomCard = styled('div')({
  backgroundColor: semanticColors.background.paper.elevation1,
  color: semanticColors.text.primary,
  padding: primitiveSpacing[2], // 16px
  borderRadius: primitiveRadius.md, // 12px
  '&:hover': {
    backgroundColor: hexToRgba(semanticColors.primary.main, opacityValues.hover),
  },
});
```

---

## Token Statistics

- **Tier 1 Primitive Tokens:** 69 tokens
  - Colors: 5
  - Typography: 14 (2 families + 10 sizes + 4 weights)
  - Spacing: 4
  - Border Radius: 3
  - Breakpoints: 2
  - Z-Index: 7
  - Transitions: 11 (7 durations + 4 easings)
  - Opacity: 12

- **Tier 2 Semantic Tokens:** 40+ tokens
  - Color Palette: 22 (primary, secondary, error, warning, info, success, background, text, action, divider)
  - Typography Variants: 15 (h1-h6, body1-2, subtitle1-2, caption, overline)

- **Tier 3 Component Tokens:** 30+ tokens
  - Button: 3 typography variants
  - Chip: 1 typography + 2 colors
  - Input: 3 typography + 3 variant colors
  - Table: 1 typography
  - Alert: 2 typography + 7 colors
  - Avatar: 2 typography
  - Rating: 2 colors

- **Tier 4 Library Tokens:** 3 tokens

**Total:** 140+ design tokens

---

## File Locations

- **Main Token Definition:** `/src/theme/designTokens.ts` (458 lines)
- **Color Utilities:** `/src/theme/colorUtils.ts` (60 lines)
- **Theme Configuration:** `/src/theme/theme.ts` (421 lines)
- **Theme Factory:** `/src/theme/createTheme.ts` (356 lines)
- **Type Augmentation:** `/src/theme/theme.augmentation.d.ts`

---

## Version Information

- **Design System:** MRS Design System
- **Material UI Version:** 7.2.0
- **Last Updated:** 2025-12-01
- **Token Source:** Figma Design Variables

---

## Additional Resources

- [Design Tokens Structure](./design-tokens-structure.md)
- [Design Tokens Review Summary](./DESIGN_TOKENS_REVIEW_SUMMARY.md)
- [Material UI Theme Documentation](https://mui.com/material-ui/customization/theming/)
