# MRS Design System

A comprehensive design system built with Material UI and React, using design tokens extracted from Figma.

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

### Storybook

View and test components in Storybook:

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006`

### Build

Build the project:

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   └── Button/         # Button component
│       ├── Button.tsx
│       ├── Button.stories.tsx
│       └── index.ts
└── theme/              # Design tokens and theme
    ├── designTokens.ts
    ├── theme.ts
    └── index.ts
```

## Components

### Button

A Material UI Button component customized with design tokens.

**Variants**: `contained`, `outlined`, `text`  
**Sizes**: `small`, `medium`, `large`  
**Colors**: `primary`, `secondary`, `error`, `inherit`  
**States**: `enabled`, `hovered`, `focused`, `pressed`, `disabled`

## Design Tokens

All design tokens are defined in `src/theme/designTokens.ts` and mapped to Material UI's theme in `src/theme/theme.ts`.

See `src/theme/README.md` for more information about the design tokens architecture.

## Storybook

Storybook is configured to automatically wrap all stories with the Material UI ThemeProvider, so components will use the design tokens automatically.

## License

Private project

