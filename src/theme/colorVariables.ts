/**
 * Color Variables - Global Color System
 *
 * Este archivo es generado automáticamente desde Tokens Studio (Figma)
 * NO editar manualmente - los cambios se perderán al sincronizar
 *
 * Última sincronización: 2025-12-03T07:13:36.526Z
 * Fuente: tokens/tokens.json
 */

// ============================================================================
// PRIMITIVE COLOR VALUES
// ============================================================================

export const primitiveColors = {
  verones: '#00686f',
  white: '#ffffff',
} as const;

// ============================================================================
// SEMANTIC COLOR VALUES
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
} as const;

// ============================================================================
// COLOR VARIABLES OBJECT
// ============================================================================

export const colorVariables = {
  primitive: primitiveColors,
  semantic: semanticColors,
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type PrimitiveColors = typeof primitiveColors;
export type SemanticColors = typeof semanticColors;
export type ColorVariables = typeof colorVariables;
