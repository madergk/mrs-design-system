/**
 * Color Variables - Global Color System
 *
 * This file provides a centralized, optimized system for managing color variables
 * across the design system. It follows Material UI's CSS variables pattern and
 * organizes colors in a hierarchical structure: Primitives → Semantic → Component.
 *
 * Based on:
 * - Material UI CSS Variables documentation: https://mui.com/material-ui/customization/css-variables/
 * - Figma design tokens from MRS Design System
 * - Material Design color system principles
 *
 * Usage:
 * 1. Import color values directly: `import { colorVariables } from './colorVariables'`
 * 2. Use in theme configuration: `palette: { primary: { main: colorVariables.semantic.primary.main } }`
 * 3. Generate CSS variables: Use `generateColorCSSVariables()` for CSS-in-JS or static CSS
 */

// ============================================================================
// PRIMITIVE COLOR VALUES
// ============================================================================

/**
 * Primitive Colors
 * Base color values extracted from Figma variables.
 * These are the foundation colors that semantic colors reference.
 */
export const primitiveColors = {
  // Primary brand colors
  verones: '#00686f', // Primary teal - source: material/colors/verones
  teal: '#009999', // Alternative teal shade

  // Extended palette
  deepPurple: {
    500: '#673ab7',
  },

  // Neutral colors
  black: '#000000',
  white: '#ffffff',
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
} as const;

// ============================================================================
// SEMANTIC COLOR VALUES
// ============================================================================

/**
 * Semantic Colors
 * Contextual colors that reference primitive colors.
 * These map directly to Material UI's palette structure and provide
 * meaning-based color tokens (primary, error, warning, etc.)
 */
export const semanticColors = {
  // Primary color palette
  primary: {
    main: primitiveColors.verones, // #00686f - aliased from primitive
    dark: '#004e53',
    light: '#009999', // Calculated from teal primitive
    contrastText: primitiveColors.white,
    // State colors with opacity
    states: {
      hover: 'rgba(0, 153, 153, 0.12)', // #0099991f
      selected: 'rgba(0, 153, 153, 0.16)', // #00999929
      focus: 'rgba(0, 153, 153, 0.12)',
      active: 'rgba(0, 153, 153, 0.24)',
    },
  },

  // Secondary color palette
  secondary: {
    main: '#99cc00',
    contrastText: 'rgba(0, 0, 0, 0.87)', // #000000de
    states: {
      hover: 'rgba(153, 204, 0, 0.12)',
      selected: 'rgba(153, 204, 0, 0.16)',
      focus: 'rgba(153, 204, 0, 0.12)',
    },
  },

  // Error color palette
  error: {
    main: '#ab1a1a',
    contrastText: primitiveColors.white,
    light: '#e57373',
    dark: '#c62828',
    states: {
      hover: 'rgba(171, 26, 26, 0.12)',
      focus: 'rgba(171, 26, 26, 0.3)',
    },
  },

  // Warning color palette
  warning: {
    main: '#dfa00a',
    contrastText: 'rgba(0, 0, 0, 0.87)',
    light: '#ffb74d',
    dark: '#f57c00',
    states: {
      hover: 'rgba(223, 160, 10, 0.12)',
    },
  },

  // Info color palette
  info: {
    main: '#2481b8',
    contrastText: primitiveColors.white,
    light: '#64b5f6',
    dark: '#1976d2',
    states: {
      hover: 'rgba(36, 129, 184, 0.12)',
    },
  },

  // Success color palette
  success: {
    main: '#2e7d32',
    contrastText: primitiveColors.white,
    light: '#81c784',
    dark: '#388e3c',
    states: {
      hover: 'rgba(46, 125, 50, 0.12)',
    },
  },

  // Background colors
  background: {
    default: primitiveColors.white,
    paper: {
      elevation0: primitiveColors.white,
      elevation1: primitiveColors.white,
      elevation2: primitiveColors.gray[50],
      elevation4: primitiveColors.gray[100],
    },
  },

  // Text colors
  text: {
    primary: 'rgba(0, 0, 0, 0.87)', // #000000de - high emphasis
    secondary: 'rgba(0, 0, 0, 0.6)', // #00000099 - medium emphasis
    disabled: 'rgba(0, 0, 0, 0.38)', // #00000061 - disabled
    hint: 'rgba(0, 0, 0, 0.38)',
  },

  // Action colors (for interactive elements)
  action: {
    active: 'rgba(0, 0, 0, 0.56)', // #0000008f
    hover: 'rgba(0, 0, 0, 0.08)', // #00000014
    selected: 'rgba(0, 0, 0, 0.12)', // #0000001f
    disabled: 'rgba(0, 0, 0, 0.38)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    focus: 'rgba(0, 0, 0, 0.12)',
  },

  // Divider color
  divider: 'rgba(0, 0, 0, 0.12)', // #0000001f
} as const;

// ============================================================================
// COMPONENT-SPECIFIC COLOR VALUES
// ============================================================================

/**
 * Component Colors
 * Colors specific to individual components.
 * These override or extend semantic colors for particular use cases.
 */
export const componentColors = {
  // Rating component
  rating: {
    activeFill: '#ffb400',
    enabledBorder: 'rgba(0, 0, 0, 0.23)', // #0000003b
    disabled: 'rgba(0, 0, 0, 0.12)',
  },

  // Chip component
  chip: {
    defaultCloseFill: primitiveColors.black,
    defaultEnabledBorder: primitiveColors.gray[400], // #bdbdbd
    outlinedBorder: 'rgba(0, 0, 0, 0.23)',
  },

  // Input component variants
  input: {
    standard: {
      enabledBorder: 'rgba(0, 0, 0, 0.42)', // #0000006b
      disabledBorder: 'rgba(0, 0, 0, 0.12)',
      focusedBorder: primitiveColors.verones,
    },
    filled: {
      enabledFill: 'rgba(0, 0, 0, 0.06)', // #0000000f
      hoverFill: 'rgba(0, 0, 0, 0.08)',
      focusedFill: 'rgba(0, 0, 0, 0.06)',
    },
    outlined: {
      enabledBorder: 'rgba(0, 0, 0, 0.23)', // #0000003b
      hoverBorder: 'rgba(0, 0, 0, 0.87)',
      focusedBorder: primitiveColors.verones,
      errorBorder: semanticColors.error.main,
    },
  },

  // Alert component variants
  alert: {
    error: {
      color: '#5f2120',
      background: '#fdeded',
      border: semanticColors.error.main,
    },
    warning: {
      color: '#3e2410',
      background: '#fff3e0',
      border: semanticColors.warning.main,
    },
    info: {
      color: '#014361',
      background: '#e5f6fd',
      border: semanticColors.info.main,
    },
    success: {
      color: '#1e4620',
      background: '#edf7ed',
      border: semanticColors.success.main,
    },
  },

  // Stepper component
  stepper: {
    connector: primitiveColors.gray[500], // #9e9e9d
    completedStep: {
      backgroundColor: '#00796b',
      textColor: primitiveColors.white,
    },
    activeStep: {
      backgroundColor: semanticColors.primary.main,
      textColor: primitiveColors.white,
    },
    inactiveStep: {
      backgroundColor: primitiveColors.gray[300],
      textColor: semanticColors.text.secondary,
    },
  },

  // Button component states
  button: {
    contained: {
      default: semanticColors.primary.main,
      hover: '#005a61', // Darker shade
      active: '#004e53',
      disabled: 'rgba(0, 0, 0, 0.12)',
    },
    outlined: {
      border: semanticColors.primary.main,
      hoverBackground: semanticColors.primary.states.hover,
    },
    text: {
      hoverBackground: 'rgba(0, 0, 0, 0.08)',
    },
  },
} as const;

// ============================================================================
// COLOR VARIABLES OBJECT
// ============================================================================

/**
 * Complete color variables object
 * Provides a single source of truth for all color values
 */
export const colorVariables = {
  primitive: primitiveColors,
  semantic: semanticColors,
  component: componentColors,
} as const;

// ============================================================================
// CSS VARIABLES GENERATION
// ============================================================================

/**
 * Generates CSS variable names in Material UI format
 * Format: --mui-palette-{category}-{property}
 *
 * @param category - Color category (primary, secondary, error, etc.)
 * @param property - Color property (main, dark, light, etc.)
 * @returns CSS variable name string
 *
 * @example
 * getCSSVariableName('primary', 'main') // Returns '--mui-palette-primary-main'
 */
export function getCSSVariableName(
  category: string,
  property: string,
  subProperty?: string
): string {
  const base = `--mui-palette-${category}`;
  if (subProperty) {
    return `${base}-${property}-${subProperty}`;
  }
  return `${base}-${property}`;
}

/**
 * Flattens nested color object into CSS variables format
 * Recursively processes nested objects to create flat key-value pairs
 *
 * @param obj - Color object to flatten
 * @param prefix - Prefix for CSS variable names
 * @returns Object with CSS variable names as keys and color values as values
 */
function flattenColorObject(
  obj: Record<string, any>,
  prefix = ''
): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}-${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Check if it's a color value (starts with # or rgba/rgb)
      if (
        typeof value === 'string' &&
        (value.startsWith('#') ||
          value.startsWith('rgba') ||
          value.startsWith('rgb'))
      ) {
        result[newKey] = value;
      } else {
        // Recursively flatten nested objects
        Object.assign(result, flattenColorObject(value, newKey));
      }
    } else if (typeof value === 'string') {
      result[newKey] = value;
    }
  }

  return result;
}

/**
 * Generates CSS variables object for use in Material UI theme
 * Compatible with MUI's cssVariables configuration
 *
 * @returns Object with CSS variable names and values
 *
 * @example
 * const cssVars = generateColorCSSVariables();
 * // Returns: { '--mui-palette-primary-main': '#00686f', ... }
 */
export function generateColorCSSVariables(): Record<string, string> {
  const variables: Record<string, string> = {};

  // Generate semantic color variables (most commonly used)
  const semantic = flattenColorObject(semanticColors, 'semantic');
  Object.entries(semantic).forEach(([key, value]) => {
    variables[`--mui-palette-${key}`] = value;
  });

  // Generate component color variables
  const component = flattenColorObject(componentColors, 'component');
  Object.entries(component).forEach(([key, value]) => {
    variables[`--mui-component-${key}`] = value;
  });

  return variables;
}

/**
 * Generates CSS string with all color variables
 * Can be injected into a <style> tag or CSS file
 *
 * @param selector - CSS selector where variables will be applied (default: ':root')
 * @returns CSS string with variable declarations
 *
 * @example
 * const css = generateColorCSSString(':root');
 * // Returns: ':root { --mui-palette-primary-main: #00686f; ... }'
 */
export function generateColorCSSString(selector = ':root'): string {
  const variables = generateColorCSSVariables();
  const declarations = Object.entries(variables)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n');

  return `${selector} {\n${declarations}\n}`;
}

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type PrimitiveColors = typeof primitiveColors;
export type SemanticColors = typeof semanticColors;
export type ComponentColors = typeof componentColors;
export type ColorVariables = typeof colorVariables;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Gets a color value from the color variables system
 * Provides type-safe access to nested color values
 *
 * @param path - Dot-separated path to color (e.g., 'semantic.primary.main')
 * @returns Color value string or undefined if not found
 *
 * @example
 * getColorValue('semantic.primary.main') // Returns '#00686f'
 * getColorValue('component.rating.activeFill') // Returns '#ffb400'
 */
export function getColorValue(path: string): string | undefined {
  const keys = path.split('.');
  let current: any = colorVariables;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }

  return typeof current === 'string' ? current : undefined;
}

/**
 * Validates if a color value is a valid CSS color
 * Supports hex, rgb, rgba, hsl, hsla, and named colors
 *
 * @param color - Color string to validate
 * @returns True if valid CSS color, false otherwise
 */
export function isValidColor(color: string): boolean {
  // Hex color
  if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
    return true;
  }

  // RGB/RGBA
  if (/^rgba?\(/.test(color)) {
    return true;
  }

  // HSL/HSLA
  if (/^hsla?\(/.test(color)) {
    return true;
  }

  // Named colors (basic check)
  const namedColors = [
    'transparent',
    'currentColor',
    'inherit',
    'initial',
    'unset',
  ];
  if (namedColors.includes(color.toLowerCase())) {
    return true;
  }

  return false;
}

