/**
 * Design Tokens
 *
 * Este archivo es generado automáticamente desde Tokens Studio (Figma)
 * NO editar manualmente - los cambios se perderán al sincronizar
 *
 * Última sincronización: 2025-12-03T07:13:36.525Z
 * Fuente: tokens/tokens.json
 */

// ============================================================================
// PRIMITIVE TOKENS
// ============================================================================

export const primitiveColors = {
  verones: '#00686f',
  teal: '#009999',
  black: '#000000',
  white: '#ffffff',
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
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type PrimitiveColors = typeof primitiveColors;
export type SemanticColors = typeof semanticColors;
