/**
 * Switch Component
 *
 * A Material UI Switch component customized with design tokens from Figma.
 * Supports all sizes: small, medium
 * Supports all colors: default, primary, secondary, error, warning, info, success
 * Supports all states: unchecked, checked
 * Supports all interaction states: enabled, hovered, focused, pressed, disabled
 */

import React from 'react';
import MuiSwitch, { type SwitchProps as MuiSwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

export interface SwitchProps extends Omit<MuiSwitchProps, 'color' | 'size'> {
  /**
   * The color of the component
   * @default 'primary'
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  /**
   * The size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * If true, the component is checked
   */
  checked?: boolean;
  /**
   * If true, the component is disabled
   */
  disabled?: boolean;
}

/**
 * Styled Switch component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/theme.ts
 */
const StyledSwitch = styled(MuiSwitch)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiSwitch
}));

/**
 * Switch component
 *
 * @example
 * ```tsx
 * <Switch checked={true} color="primary" size="medium" />
 * <Switch color="secondary" />
 * <Switch disabled />
 * ```
 */
export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ size = 'medium', color = 'primary', sx, ...props }, ref) => {
    return <StyledSwitch ref={ref} color={color} size={size} {...(sx ? { sx } : {})} {...props} />;
  }
);

Switch.displayName = 'Switch';

export default Switch;
