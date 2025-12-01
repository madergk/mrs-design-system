/**
 * MRS Design System
 *
 * Main entry point for the MRS Design System library
 * This file exports all public APIs including theme, components, and utilities
 */

// Theme exports
export { theme } from './theme';
export type { AppTheme } from './theme';

// Design token exports
export {
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
  tokenConnections,
} from './theme/designTokens';

// Color utility exports
export { hexToRgba, opacityValues } from './theme/colorUtils';
export type { OpacityValue } from './theme/colorUtils';

// Token type exports
export type {
  PrimitiveColors,
  SemanticColors,
  TypographyVariants,
  ComponentTokens,
  LibraryTokens,
  PrimitiveZIndex,
  PrimitiveTransitions,
} from './theme/designTokens';

// Component exports
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Checkbox } from './components/Checkbox';
export type { CheckboxProps } from './components/Checkbox';

export { Icon } from './components/Icon';
export type { IconProps, IconName } from './components/Icon';

export { Radio } from './components/Radio';
export type { RadioProps } from './components/Radio';

export { Typography } from './components/Typography';
export type { TypographyProps } from './components/Typography';
