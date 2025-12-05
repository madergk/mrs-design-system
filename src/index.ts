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

// ============================================================================
// Component Exports
// ============================================================================

// Form Controls
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Checkbox } from './components/Checkbox';
export type { CheckboxProps } from './components/Checkbox';

export { Radio } from './components/Radio';
export type { RadioProps } from './components/Radio';

export { Switch } from './components/Switch';
export type { SwitchProps } from './components/Switch';

export { Select } from './components/Select';
export type { SelectProps } from './components/Select';

// Navigation & Progress
export { Stepper } from './components/Stepper';
export type { StepperProps, StepperStep } from './components/Stepper';

// Typography & Content
export { Typography } from './components/Typography';
export type { TypographyProps } from './components/Typography';

// Layout Components
export { Paper } from './components/Paper';
export type { PaperProps } from './components/Paper';

export { Card, CardMedia, CardHeader, CardContent, CardActions } from './components/Card';
export type {
  CardProps,
  CardDataLine,
  CardMediaProps,
  CardHeaderProps,
  CardContentProps,
  CardActionsProps,
} from './components/Card';

export { Divider } from './components/Divider';
export type { DividerProps } from './components/Divider';

export { List } from './components/List';
export type { ListProps } from './components/List';

export { ListItem } from './components/ListItem';
export type { ListItemProps } from './components/ListItem';

// Data Display
export { Avatar } from './components/Avatar';
export type { AvatarProps } from './components/Avatar';

export { Badge } from './components/Badge';
export type { BadgeProps } from './components/Badge';

export { Chip } from './components/Chip';
export type { ChipProps } from './components/Chip';

export { Tag } from './components/Tag';
export type { TagProps } from './components/Tag';

// Feedback & Overlay
export { Tooltip } from './components/Tooltip';
export type { TooltipProps } from './components/Tooltip';

export { Accordion } from './components/Accordion';
export type { AccordionProps } from './components/Accordion';

export { AccordionGroup } from './components/AccordionGroup';
export type { AccordionGroupProps, AccordionItem } from './components/AccordionGroup';

// App Structure
export { AppBar } from './components/AppBar';
export type { AppBarProps } from './components/AppBar';

export { AccountStack } from './components/AccountStack';
export type { AccountStackProps } from './components/AccountStack';

export { Logo } from './components/Logo';
export type { LogoProps } from './components/Logo';

// Icons & Actions
export { Icon } from './components/Icon';
export type { IconProps, IconName } from './components/Icon';

export { IconButton } from './components/IconButton';
export type { IconButtonProps } from './components/IconButton';
