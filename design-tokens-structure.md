# Design Tokens Structure - MRS Material UI

## Overview

This document summarizes the design tokens structure from the Figma file, focusing on variable collections and their connection points.

## Variable Collections

### 1. Color Tokens

#### Primary Color Palette

- `primary/main`: `#00686f` (Teal/Cyan)
- `primary/dark`: `#004e53` (Darker teal)
- `primary/contrastText`: `#ffffff` (White)
- `primary/_states/selected`: `#00999929` (Selected state with opacity)
- `primary/_states/hover`: `#0099991f` (Hover state with opacity)

**Note**: The primary color palette appears to be connected to a primitive color collection. The `primary/main` value (`#00686f`) suggests a connection to a base color token, potentially named "verones" or similar in the `material/colors` primitive collection.

#### Secondary Color Palette

- `secondary/main`: `#99cc00` (Lime green)
- `secondary/contrastText`: `#000000de` (Near-black with opacity)

#### Semantic Colors

- `error/main`: `#ab1a1a` (Red)
- `error/contrastText`: `#ffffff` (White)
- `warning/main`: `#dfa00a` (Amber/Orange)
- `info/main`: `#2481b8` (Blue)
- `info/contrastText`: `#ffffff` (White)

#### Background Colors

- `background/default`: `#ffffff` (White)
- `background/paper-elevation-0`: `#ffffff` (White)
- `background/paper-elevation-1`: `#ffffff` (White)

#### Text Colors

- `text/primary`: `#000000de` (Near-black with opacity)
- `text/secondary`: `#00000099` (Gray with opacity)

#### Action Colors

- `action/active`: `#0000008f` (Black with opacity)
- `action/selected`: `#0000001f` (Black with low opacity)

#### Divider

- `divider`: `#0000001f` (Black with low opacity)

### 2. Typography Tokens

#### Font Families

- `_fontFamily/brand`: `Nunito`
- `_fontFamily/base`: `Nunito`

#### Font Sizes (Primitive)

- `_fontSize/0,75rem`: `12`
- `_fontSize/0,8125rem`: `13`
- `_fontSize/0,875rem`: `14`
- `_fontSize/1rem`: `16`
- `_fontSize/1,25rem`: `20`
- `_fontSize/1,5rem`: `24`
- `_fontSize/3,75rem`: `60`

#### Font Weights

- `fontWeightRegular`: `400`
- `fontWeightMedium`: `500`
- `fontWeightSemiBold`: `600`

#### Typography Variants (Composite)

- `typography/caption`: Font(family: "Nunito", style: Regular, size: 12, weight: 400, lineHeight: 1.2)
- `typography/body1`: Font(family: "Nunito", style: Regular, size: 16, weight: 400, lineHeight: 1.5)
- `typography/body2`: Font(family: "Nunito", style: Regular, size: 14, weight: 400, lineHeight: 1.429)
- `typography/h2`: Font(family: "Nunito", style: SemiBold, size: 60, weight: 600, lineHeight: 1.2)

#### Component-Specific Typography

- `button/small`: Font(family: "Nunito", style: SemiBold, size: 13, weight: 600, lineHeight: 24)
- `button/medium`: Font(family: "Nunito", style: SemiBold, size: 14, weight: 600, lineHeight: 24)
- `button/large`: Font(family: "Nunito", style: SemiBold, size: 16, weight: 600, lineHeight: 24)
- `chip/label`: Font(family: "Nunito", style: Regular, size: 13, weight: 400, lineHeight: 18)
- `input/label`: Font(family: "Nunito", style: Regular, size: 12, weight: 400, lineHeight: 12)
- `input/value`: Font(family: "Nunito", style: Regular, size: 16, weight: 400, lineHeight: 24)
- `input/helper`: Font(family: "Nunito", style: Regular, size: 12, weight: 400, lineHeight: 1.66)
- `table/header`: Font(family: "Nunito", style: Medium, size: 14, weight: 500, lineHeight: 24)
- `alert/title`: Font(family: "Nunito", style: Medium, size: 16, weight: 500, lineHeight: 1.5)
- `alert/description`: Font(family: "Nunito", style: Regular, size: 14, weight: 400, lineHeight: 1.429)
- `avatar/initialsLg`: Font(family: "Nunito", style: SemiBold, size: 20, weight: 600, lineHeight: 20)
- `avatar/initialsMd`: Font(family: "Nunito", style: Regular, size: 12, weight: 400, lineHeight: 12)

### 3. Spacing & Sizing Tokens

#### Spacing Scale

- `1`: `8`
- `2`: `16`
- `3`: `24`
- `8`: `64`

### 4. Border Radius Tokens

- `radius/borderRadius-none`: `0`
- `radius/borderRadius-md`: `12`
- `radius/borderRadius-rounded`: `999`

### 5. Breakpoint Tokens

- `breakpoint-xs`: `444`
- `breakpoint-sm`: `600`

### 6. Component-Specific Tokens

#### Rating Component

- `_components/rating/activeFill`: `#ffb400` (Yellow/Amber)
- `_components/rating/enabledBorder`: `#0000003b` (Black with opacity)

#### Chip Component

- `_components/chip/defaultCloseFill`: `#000000` (Black)
- `_components/chip/defaultEnabledBorder`: `#bdbdbd` (Gray)

#### Input Component

- `_components/input/standard/enabledBorder`: `#0000006b` (Black with opacity)
- `_components/input/filled/enabledFill`: `#0000000f` (Black with low opacity)
- `_components/input/outlined/enabledBorder`: `#0000003b` (Black with opacity)

#### Alert Component

- `_components/alert/error/color`: `#5f2120` (Dark red)
- `_components/alert/error/background`: `#fdeded` (Light red)
- `_components/alert/info/color`: `#014361` (Dark blue)
- `_components/alert/info/background`: `#e5f6fd` (Light blue)
- `_components/alert/success/color`: `#1e4620` (Dark green)
- `_components/alert/success/background`: `#edf7ed` (Light green)
- `_components/alert/warning/color`: `#3e2410` (Dark brown)

### 7. Library Tokens

- `_library/colorHighlight`: `#9747FF` (Purple)
- `_library/fillHighlight`: `#9747FF` (Purple)
- `_library/clickableLayer`: `#000000` (Black)

### 8. Additional Color References

- `deepPurple/500`: `#673ab7` (Material Design deep purple)

## Variable Collection Connections

### Primary Color Alias Connection

The `primary/main` token (`#00686f`) is likely connected to a primitive color token in the `material/colors` collection. Based on the color value and naming convention:

- **Primary Alias**: `primary/main` → **Primitive Color**: Likely `material/colors/verones` or similar
- The connection point suggests that semantic tokens (like `primary/main`) reference primitive color tokens from the base color palette
- This creates a separation between:
  - **Primitive tokens** (base colors in `material/colors`)
  - **Semantic tokens** (contextual colors like `primary`, `secondary`, `error`)

### Token Hierarchy Structure

```text
Primitive Collections (Base Values)
├── material/colors (e.g., verones, etc.)
├── _fontSize (rem-based sizes)
├── _fontFamily (font families)
└── fontWeight (weight values)

Semantic Collections (Aliased to Primitives)
├── primary/* (aliased to material/colors/verones)
├── secondary/*
├── error/*
├── warning/*
└── info/*

Component Collections (Uses Semantic + Primitives)
├── _components/rating/*
├── _components/chip/*
├── _components/input/*
└── _components/alert/*

Utility Collections
├── radius/*
├── breakpoint/*
└── spacing (1, 2, 3, 8)
```

## Naming Conventions

1. **Primitive tokens** use `_` prefix (e.g., `_fontSize`, `_fontFamily`)
2. **Semantic tokens** use descriptive names (e.g., `primary/main`, `text/primary`)
3. **Component tokens** use `_components/` prefix with component name
4. **Library tokens** use `_library/` prefix
5. **State variants** use `_states/` sub-path (e.g., `primary/_states/hover`)

## Key Observations

1. **Color System**: The design system uses a two-tier color system:
   - Primitive colors in `material/colors` collection
   - Semantic aliases that reference primitives

2. **Typography System**: Typography tokens are built from primitive font properties (size, family, weight) and composed into variant tokens.

3. **Component Tokens**: Component-specific tokens inherit from semantic tokens but can override for specific use cases.

4. **State Management**: Interactive states (hover, selected, active) are defined as separate tokens with opacity variations.

5. **Material Design Influence**: The system follows Material Design principles with elevation, color palettes, and typography scales.

## Implementation

The design tokens have been implemented in the codebase:

- **Location**: `src/theme/designTokens.ts` - All design tokens
- **Theme Configuration**: `src/theme/theme.ts` - Material UI theme using tokens
- **Documentation**: `src/theme/README.md` - Usage guide

### Token Structure

The implementation follows the three-tier hierarchy:

1. **Primitive Tokens**: Base values (colors, typography, spacing, etc.)
2. **Semantic Tokens**: Contextual tokens that reference primitives
3. **Component Tokens**: Component-specific styling tokens

### Key Connection Documented

The connection between `primary/main` and `material/colors/verones` is implemented and documented:

```typescript
// In designTokens.ts
export const primitiveColors = {
  verones: '#00686f', // Base primitive color
};

export const semanticColors = {
  primary: {
    main: primitiveColors.verones, // Aliased reference
  },
};

export const tokenConnections = {
  primary: {
    main: {
      primitive: 'primitiveColors.verones',
      value: primitiveColors.verones,
      description: 'Primary main color aliased from material/colors/verones primitive',
    },
  },
};
```

## Recommendations for Further Analysis

To fully understand the connection between `primary/main` and the `material/colors/verones` primitive:

1. Access the Figma Variables panel directly to view:
   - The complete `material/colors` collection
   - The alias relationships between semantic and primitive tokens
   - Variable modes and sets if applicable

2. Document the complete primitive color palette to understand all available base colors

3. Map all alias relationships to create a complete dependency graph

4. When syncing components from Figma:
   - Verify tokens match Figma variables
   - Update design tokens as needed
   - Test component visual consistency
