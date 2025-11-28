/**
 * Design Tokens
 * 
 * This file contains all design tokens extracted from Figma variables.
 * These tokens are structured to align with Material UI's theme system
 * and follow the hierarchy: Primitives → Semantic → Component tokens.
 * 
 * Token Structure:
 * - Primitives: Base values (colors, typography, spacing)
 * - Semantic: Contextual tokens that reference primitives
 * - Component: Component-specific overrides
 */

// ============================================================================
// PRIMITIVE TOKENS
// ============================================================================

/**
 * Primitive Color Tokens
 * Base color values from material/colors collection
 * These are referenced by semantic color tokens
 */
export const primitiveColors = {
  // Primary color (verones) - referenced by primary/main
  verones: '#00686f',
  
  // Additional primitive colors
  deepPurple: {
    500: '#673ab7',
  },
} as const;

/**
 * Primitive Typography Tokens
 * Base typography values used to compose typography variants
 */
export const primitiveTypography = {
  fontFamily: {
    brand: 'Nunito',
    base: 'Nunito',
  },
  fontSize: {
    '0.75rem': 12,
    '0.8125rem': 13,
    '0.875rem': 14,
    '1rem': 16,
    '1.25rem': 20,
    '1.5rem': 24,
    '3.75rem': 60,
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },
} as const;

/**
 * Primitive Spacing Tokens
 * Base spacing scale (8px base unit)
 */
export const primitiveSpacing = {
  1: 8,
  2: 16,
  3: 24,
  8: 64,
} as const;

/**
 * Primitive Border Radius Tokens
 */
export const primitiveRadius = {
  none: 0,
  md: 12,
  rounded: 999,
} as const;

/**
 * Primitive Breakpoint Tokens
 */
export const primitiveBreakpoints = {
  xs: 444,
  sm: 600,
} as const;

/**
 * Primitive zIndex Tokens
 * Material UI uses zIndex for component layering
 * These values ensure proper stacking order
 */
export const primitiveZIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
} as const;

/**
 * Primitive Transition Tokens
 * Material UI uses transitions for component animations
 * Duration in milliseconds, easing as CSS cubic-bezier functions
 */
export const primitiveTransitions = {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
} as const;

// ============================================================================
// SEMANTIC COLOR TOKENS
// ============================================================================

/**
 * Semantic Color Tokens
 * Contextual colors that reference primitive colors
 * These map directly to MUI's palette structure
 */
export const semanticColors = {
  primary: {
    main: primitiveColors.verones, // #00686f - aliased from material/colors/verones
    dark: '#004e53',
    contrastText: '#ffffff',
    states: {
      selected: '#00999929', // rgba with opacity
      hover: '#0099991f', // rgba with opacity
    },
  },
  secondary: {
    main: '#99cc00',
    contrastText: '#000000de', // rgba with opacity
  },
  error: {
    main: '#ab1a1a',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#dfa00a',
  },
  info: {
    main: '#2481b8',
    contrastText: '#ffffff',
  },
  success: {
    // Note: Success color not explicitly defined in Figma variables
    // Using Material Design default or can be added
    main: '#2e7d32',
    contrastText: '#ffffff',
  },
  background: {
    default: '#ffffff',
    paper: {
      elevation0: '#ffffff',
      elevation1: '#ffffff',
    },
  },
  text: {
    primary: '#000000de', // rgba with opacity
    secondary: '#00000099', // rgba with opacity
  },
  action: {
    active: '#0000008f', // rgba with opacity
    selected: '#0000001f', // rgba with opacity
  },
  divider: '#0000001f', // rgba with opacity
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

/**
 * Typography Variant Tokens
 * Composed from primitive typography tokens
 * These map to MUI's typography variants
 */
export const typographyVariants = {
  // Base typography variants
  caption: {
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['0.75rem'],
    fontWeight: primitiveTypography.fontWeight.regular,
    lineHeight: 1.2,
  },
  body1: {
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['1rem'],
    fontWeight: primitiveTypography.fontWeight.regular,
    lineHeight: 1.5,
  },
  body2: {
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['0.875rem'],
    fontWeight: primitiveTypography.fontWeight.regular,
    lineHeight: 1.429,
  },
  h1: {
    // Note: h1 not explicitly defined in Figma, using Material Design defaults
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['3.75rem'], // Using h2 size as base
    fontWeight: primitiveTypography.fontWeight.semiBold,
    lineHeight: 1.2,
  },
  h2: {
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['3.75rem'],
    fontWeight: primitiveTypography.fontWeight.semiBold,
    lineHeight: 1.2,
  },
  h3: {
    // Note: h3 not explicitly defined in Figma, using Material Design defaults
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['1.5rem'],
    fontWeight: primitiveTypography.fontWeight.regular,
    lineHeight: 1.334,
  },
  h4: {
    // Note: h4 not explicitly defined in Figma, using Material Design defaults
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['1.25rem'],
    fontWeight: primitiveTypography.fontWeight.regular,
    lineHeight: 1.4,
  },
  h5: {
    // Note: h5 not explicitly defined in Figma, using Material Design defaults
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['1.25rem'],
    fontWeight: primitiveTypography.fontWeight.regular,
    lineHeight: 1.5,
  },
  h6: {
    // Note: h6 not explicitly defined in Figma, using Material Design defaults
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['1rem'],
    fontWeight: primitiveTypography.fontWeight.medium,
    lineHeight: 1.6,
  },
  subtitle1: {
    // Note: subtitle1 not explicitly defined in Figma, using Material Design defaults
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['1rem'],
    fontWeight: primitiveTypography.fontWeight.regular,
    lineHeight: 1.75,
  },
  subtitle2: {
    // Note: subtitle2 not explicitly defined in Figma, using Material Design defaults
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['0.875rem'],
    fontWeight: primitiveTypography.fontWeight.medium,
    lineHeight: 1.57,
  },
  overline: {
    // Note: overline not explicitly defined in Figma, using Material Design defaults
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['0.75rem'],
    fontWeight: primitiveTypography.fontWeight.medium,
    lineHeight: 2.66,
    textTransform: 'uppercase',
  },
  // Component-specific typography
  button: {
    small: {
      fontFamily: primitiveTypography.fontFamily.base,
      fontSize: primitiveTypography.fontSize['0.8125rem'],
      fontWeight: primitiveTypography.fontWeight.semiBold,
      lineHeight: 24,
    },
    medium: {
      fontFamily: primitiveTypography.fontFamily.base,
      fontSize: primitiveTypography.fontSize['0.875rem'],
      fontWeight: primitiveTypography.fontWeight.semiBold,
      lineHeight: 24,
    },
    large: {
      fontFamily: primitiveTypography.fontFamily.base,
      fontSize: primitiveTypography.fontSize['1rem'],
      fontWeight: primitiveTypography.fontWeight.semiBold,
      lineHeight: 24,
    },
  },
  chip: {
    label: {
      fontFamily: primitiveTypography.fontFamily.base,
      fontSize: primitiveTypography.fontSize['0.8125rem'],
      fontWeight: primitiveTypography.fontWeight.regular,
      lineHeight: 18,
    },
  },
  input: {
    label: {
      fontFamily: primitiveTypography.fontFamily.base,
      fontSize: primitiveTypography.fontSize['0.75rem'],
      fontWeight: primitiveTypography.fontWeight.regular,
      lineHeight: 12,
    },
    value: {
      fontFamily: primitiveTypography.fontFamily.base,
      fontSize: primitiveTypography.fontSize['1rem'],
      fontWeight: primitiveTypography.fontWeight.regular,
      lineHeight: 24,
    },
    helper: {
      fontFamily: primitiveTypography.fontFamily.base,
      fontSize: primitiveTypography.fontSize['0.75rem'],
      fontWeight: primitiveTypography.fontWeight.regular,
      lineHeight: 1.66,
    },
  },
  table: {
    header: {
      fontFamily: primitiveTypography.fontFamily.base,
      fontSize: primitiveTypography.fontSize['0.875rem'],
      fontWeight: primitiveTypography.fontWeight.medium,
      lineHeight: 24,
    },
  },
  alert: {
    title: {
      fontFamily: primitiveTypography.fontFamily.base,
      fontSize: primitiveTypography.fontSize['1rem'],
      fontWeight: primitiveTypography.fontWeight.medium,
      lineHeight: 1.5,
    },
    description: {
      fontFamily: primitiveTypography.fontFamily.base,
      fontSize: primitiveTypography.fontSize['0.875rem'],
      fontWeight: primitiveTypography.fontWeight.regular,
      lineHeight: 1.429,
    },
  },
  avatar: {
    initialsLg: {
      fontFamily: primitiveTypography.fontFamily.base,
      fontSize: primitiveTypography.fontSize['1.25rem'],
      fontWeight: primitiveTypography.fontWeight.semiBold,
      lineHeight: 20,
    },
    initialsMd: {
      fontFamily: primitiveTypography.fontFamily.base,
      fontSize: primitiveTypography.fontSize['0.75rem'],
      fontWeight: primitiveTypography.fontWeight.regular,
      lineHeight: 12,
    },
  },
} as const;

// ============================================================================
// COMPONENT-SPECIFIC TOKENS
// ============================================================================

/**
 * Component-Specific Design Tokens
 * These tokens are used for specific component styling
 */
export const componentTokens = {
  rating: {
    activeFill: '#ffb400',
    enabledBorder: '#0000003b', // rgba with opacity
  },
  chip: {
    defaultCloseFill: '#000000',
    defaultEnabledBorder: '#bdbdbd',
  },
  input: {
    standard: {
      enabledBorder: '#0000006b', // rgba with opacity
    },
    filled: {
      enabledFill: '#0000000f', // rgba with opacity
    },
    outlined: {
      enabledBorder: '#0000003b', // rgba with opacity
    },
  },
  alert: {
    error: {
      color: '#5f2120',
      background: '#fdeded',
    },
    info: {
      color: '#014361',
      background: '#e5f6fd',
    },
    success: {
      color: '#1e4620',
      background: '#edf7ed',
    },
    warning: {
      color: '#3e2410',
      // background not explicitly defined in Figma
    },
  },
} as const;

// ============================================================================
// LIBRARY TOKENS
// ============================================================================

/**
 * Library/Utility Tokens
 * Tokens used for development, debugging, or special purposes
 */
export const libraryTokens = {
  colorHighlight: '#9747FF',
  fillHighlight: '#9747FF',
  clickableLayer: '#000000',
} as const;

// ============================================================================
// TOKEN CONNECTION MAPPING
// ============================================================================

/**
 * Token Connection Map
 * Documents the relationship between semantic tokens and primitive tokens
 * 
 * Key Connections:
 * - primary/main → primitiveColors.verones (material/colors/verones)
 * - All semantic colors reference primitive color values
 * - Typography variants compose from primitive typography tokens
 */
export const tokenConnections = {
  primary: {
    main: {
      primitive: 'primitiveColors.verones',
      value: primitiveColors.verones,
      description: 'Primary main color aliased from material/colors/verones primitive',
    },
  },
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type PrimitiveColors = typeof primitiveColors;
export type SemanticColors = typeof semanticColors;
export type TypographyVariants = typeof typographyVariants;
export type ComponentTokens = typeof componentTokens;
export type LibraryTokens = typeof libraryTokens;
export type PrimitiveZIndex = typeof primitiveZIndex;
export type PrimitiveTransitions = typeof primitiveTransitions;

