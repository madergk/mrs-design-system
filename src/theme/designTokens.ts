/**
 * Design Tokens
 *
 * Este archivo es generado automáticamente desde Tokens Studio (Figma)
 * ⚠️ IMPORTANTE: Solo las secciones de COLORES se actualizan automáticamente
 * Los demás tokens (typography, spacing, radius, etc.) se preservan del archivo original
 *
 * Última sincronización: 2025-12-03T08:32:47.027Z
 * Fuente colores: tokens/tokens.json (Tokens Studio)
 *
 * NOTA: Este archivo incluye exports adicionales requeridos por el código
 * que no están presentes en tokens.json. Estos deben ser agregados a Tokens Studio.
 */

// ============================================================================
// PRIMITIVE TOKENS
// ============================================================================

/**
 * Primitive Color Tokens
 * Base color values from Tokens Studio (Figma)
 * These are referenced by semantic color tokens
 */
export const primitiveColors = {
  verones: '#00686f',
  white: '#ffffff',
  // Preservado del archivo original (no está en Tokens Studio)
  deepPurple: {
    500: '#673ab7',
  },
} as const;

export const primitiveTypography = {
  fontFamily: {
    brand: 'Nunito',
    base: 'Nunito',
  },
  fontSize: {
    '0.625rem': 10,
    '0.75rem': 12,
    '0.8125rem': 13,
    '0.875rem': 14,
    '1rem': 16,
    '1.25rem': 20,
    '1.5rem': 24,
    '2.125rem': 34,
    '3rem': 48,
    '3.75rem': 60,
    '6rem': 96,
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
} as const;

export const primitiveSpacing = {
  1: 8,
  2: 16,
  3: 24,
  8: 64,
} as const;

export const primitiveRadius = {
  none: 0,
  md: 4,
  rounded: 999,
} as const;

export const primitiveBreakpoints = {
  xs: 444,
  sm: 600,
} as const;

export const primitiveZIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
} as const;

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
 * ⚠️ IMPORTANTE: Solo primary, secondary, error se actualizan desde Tokens Studio
 * Las demás propiedades (warning, info, success, background, text, action, divider)
 * se preservan del archivo original
 */
export const semanticColors = {
  // Actualizados desde Tokens Studio
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
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  error: {
    main: '#ab1a1a',
    contrastText: '#ffffff',
  },
  // Preservados del archivo original (no están en Tokens Studio)
  warning: {
    main: '#dfa00a',
    contrastText: '#ffffff',
  },
  info: {
    main: '#2481b8',
    contrastText: '#ffffff',
  },
  success: {
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
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['6rem'], // 96px from Figma
    fontWeight: primitiveTypography.fontWeight.semiBold,
    lineHeight: 1.167,
  },
  h2: {
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['3.75rem'], // 60px from Figma
    fontWeight: primitiveTypography.fontWeight.semiBold,
    lineHeight: 1.2,
  },
  h3: {
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['3rem'], // 48px from Figma
    fontWeight: primitiveTypography.fontWeight.semiBold,
    lineHeight: 1.167,
  },
  h4: {
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['2.125rem'], // 34px from Figma
    fontWeight: primitiveTypography.fontWeight.semiBold,
    lineHeight: 1.235,
  },
  h5: {
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['1.5rem'], // 24px from Figma
    fontWeight: primitiveTypography.fontWeight.semiBold,
    lineHeight: 1.334,
  },
  h6: {
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['1.25rem'], // 20px from Figma
    fontWeight: primitiveTypography.fontWeight.semiBold,
    lineHeight: 1.6,
  },
  subtitle1: {
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['1rem'], // 16px from Figma
    fontWeight: primitiveTypography.fontWeight.regular,
    lineHeight: 1.75,
  },
  subtitle2: {
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['0.875rem'], // 14px from Figma
    fontWeight: primitiveTypography.fontWeight.medium,
    lineHeight: 1.57,
  },
  overline: {
    fontFamily: primitiveTypography.fontFamily.base,
    fontSize: primitiveTypography.fontSize['0.75rem'], // 12px from Figma
    fontWeight: primitiveTypography.fontWeight.bold, // 700 from Figma
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
    initialsSm: {
      fontFamily: primitiveTypography.fontFamily.base,
      fontSize: primitiveTypography.fontSize['0.625rem'],
      fontWeight: primitiveTypography.fontWeight.regular,
      lineHeight: 10,
    },
  },
  tooltip: {
    label: {
      fontFamily: primitiveTypography.fontFamily.base,
      fontSize: primitiveTypography.fontSize['0.625rem'], // 10px
      fontWeight: primitiveTypography.fontWeight.medium, // 500
      lineHeight: 14,
    },
  },
} as const;

// ============================================================================
// COMPONENT-SPECIFIC TOKENS
// ============================================================================

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
  stepper: {
    connector: '#bdbdbd',
    completedStep: {
      backgroundColor: '#00686f', // Using primary.main
    },
  },
} as const;

export const libraryTokens = {
  colorHighlight: '#9747FF',
  fillHighlight: '#9747FF',
  clickableLayer: '#000000',
} as const;

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
export type PrimitiveTypography = typeof primitiveTypography;
export type PrimitiveSpacing = typeof primitiveSpacing;
export type PrimitiveRadius = typeof primitiveRadius;
export type PrimitiveBreakpoints = typeof primitiveBreakpoints;
export type PrimitiveZIndex = typeof primitiveZIndex;
export type PrimitiveTransitions = typeof primitiveTransitions;
export type SemanticColors = typeof semanticColors;
export type TypographyVariants = typeof typographyVariants;
export type ComponentTokens = typeof componentTokens;
export type LibraryTokens = typeof libraryTokens;
export type TokenConnections = typeof tokenConnections;
