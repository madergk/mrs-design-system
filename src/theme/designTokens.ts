/**
 * Design Tokens
 *
 * Este archivo es generado automáticamente desde Tokens Studio (Figma)
 * NO editar manualmente - los cambios se perderán al sincronizar
 *
 * Última sincronización: 2025-12-03T07:13:36.525Z
 * Fuente: tokens/tokens.json
 *
 * NOTA: Este archivo incluye exports adicionales requeridos por el código
 * que no están presentes en tokens.json. Estos deben ser agregados a Tokens Studio.
 */

// ============================================================================
// PRIMITIVE TOKENS
// ============================================================================

export const primitiveColors = {
  verones: '#00686f',
  white: '#ffffff',
} as const;

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
  md: 12,
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

export const semanticColors = {
  primary: {
    main: '#00686f',
    dark: '#004e53',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#99cc00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  error: {
    main: '#ab1a1a',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#ed6c02',
    contrastText: '#ffffff',
  },
  info: {
    main: '#0288d1',
    contrastText: '#ffffff',
  },
  success: {
    main: '#2e7d32',
    contrastText: '#ffffff',
  },
} as const;

// ============================================================================
// TYPOGRAPHY VARIANTS
// ============================================================================

export const typographyVariants = {
  h1: {
    fontFamily: 'Nunito',
    fontSize: 96,
    fontWeight: 400,
    lineHeight: 1.167,
  },
  h2: {
    fontFamily: 'Nunito',
    fontSize: 60,
    fontWeight: 400,
    lineHeight: 1.2,
  },
  h3: {
    fontFamily: 'Nunito',
    fontSize: 48,
    fontWeight: 400,
    lineHeight: 1.167,
  },
  h4: {
    fontFamily: 'Nunito',
    fontSize: 34,
    fontWeight: 400,
    lineHeight: 1.235,
  },
  h5: {
    fontFamily: 'Nunito',
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 1.334,
  },
  h6: {
    fontFamily: 'Nunito',
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.6,
  },
  subtitle1: {
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.75,
  },
  subtitle2: {
    fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.57,
  },
  body1: {
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
  },
  body2: {
    fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.43,
  },
  button: {
    fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.75,
    textTransform: 'uppercase' as const,
  },
  caption: {
    fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.66,
  },
  overline: {
    fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 2.66,
    textTransform: 'uppercase' as const,
  },
  // Component-specific typography variants
  chip: {
    label: {
      fontFamily: 'Nunito',
      fontSize: 0.8125,
      fontWeight: 400,
      lineHeight: 18,
    },
  },
  input: {
    label: {
      fontFamily: 'Nunito',
      fontSize: 0.75,
      fontWeight: 400,
      lineHeight: 12,
    },
    value: {
      fontFamily: 'Nunito',
      fontSize: 1,
      fontWeight: 400,
      lineHeight: 24,
    },
    helperText: {
      fontFamily: 'Nunito',
      fontSize: 0.75,
      fontWeight: 400,
      lineHeight: 1.66,
    },
  },
  table: {
    header: {
      fontFamily: 'Nunito',
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 24,
    },
  },
  alert: {
    title: {
      fontFamily: 'Nunito',
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 24,
    },
    message: {
      fontFamily: 'Nunito',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 20,
    },
  },
  avatar: {
    initialsSm: {
      fontFamily: 'Nunito',
      fontSize: 10,
      fontWeight: 500,
      lineHeight: 14,
    },
    initialsMd: {
      fontFamily: 'Nunito',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 16,
    },
    initialsLg: {
      fontFamily: 'Nunito',
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 22,
    },
  },
} as const;

// ============================================================================
// COMPONENT TOKENS
// ============================================================================

export const componentTokens = {
  chip: {
    defaultCloseFill: '#000000',
    defaultEnabledBorder: '#bdbdbd',
  },
  input: {
    standard: {
      enabledBorder: '#0000006b',
    },
    filled: {
      enabledFill: '#0000000f',
    },
    outlined: {
      enabledBorder: '#0000003b',
    },
  },
  rating: {
    activeFill: '#ffb400',
    enabledBorder: '#0000003b',
  },
  stepper: {
    completedStep: {
      backgroundColor: '#00686f', // Using primary.main
    },
    connector: '#bdbdbd', // Using default border color
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
      background: '#fff4e5',
    },
  },
} as const;

// ============================================================================
// LIBRARY TOKENS
// ============================================================================

export const libraryTokens = {} as const;

// ============================================================================
// TOKEN CONNECTIONS
// ============================================================================

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
