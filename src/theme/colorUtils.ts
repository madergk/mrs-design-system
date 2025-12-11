/**
 * Color Utilities
 *
 * Helper functions for working with colors in the design system
 */

/**
 * Converts a hex color and opacity value to rgba format
 * @param hex - Hex color code (e.g., '#00686f')
 * @param opacity - Opacity value between 0 and 1 (e.g., 0.16)
 * @returns RGBA color string
 *
 * @example
 * hexToRgba('#00686f', 0.16) // Returns 'rgba(0, 104, 111, 0.16)'
 */
export function hexToRgba(hex: string, opacity: number): string {
  // Remove # if present
  const cleanHex = hex.replace('#', '');

  // Parse hex values
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Opacity values used throughout the design system
 * Following Material Design opacity standards
 */
export const opacityValues = {
  /** Full opacity */
  full: 1,
  /** High emphasis (87%) */
  highEmphasis: 0.87,
  /** Medium emphasis (60%) */
  mediumEmphasis: 0.6,
  /** Disabled (38%) */
  disabled: 0.38,
  /** Divider (12%) */
  divider: 0.12,
  /** Hover state (16%) */
  hover: 0.16,
  /** Selected state (12%) */
  selected: 0.12,
  /** Focus state (12%) */
  focus: 0.12,
  /** Active state (56%) */
  active: 0.56,
  /** Filled input background (6%) */
  filledInput: 0.06,
  /** Outlined border (23%) */
  outlinedBorder: 0.23,
  /** Standard underline (42%) */
  standardUnderline: 0.42,
} as const;

export type OpacityValue = (typeof opacityValues)[keyof typeof opacityValues];
