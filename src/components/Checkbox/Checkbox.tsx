/**
 * Checkbox Component
 *
 * A Material UI Checkbox component customized with design tokens from Figma.
 * Supports all sizes: small, medium, large
 * Supports all colors: default, primary, secondary, error, warning, info, success
 * Supports all states: unchecked, checked, indeterminate
 * Supports all interaction states: enabled, hovered, focused, pressed, disabled
 */

import React from 'react';
import MuiCheckbox, { type CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

export interface CheckboxProps extends Omit<MuiCheckboxProps, 'color' | 'size'> {
  /**
   * The color of the component
   * @default 'primary'
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  /**
   * The size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the component is checked
   */
  checked?: boolean;
  /**
   * If true, the component appears indeterminate
   */
  indeterminate?: boolean;
  /**
   * If true, the component is disabled
   */
  disabled?: boolean;
}

/**
 * Styled Checkbox component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/theme.ts
 */
const StyledCheckbox = styled(MuiCheckbox)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiCheckbox
}));

/**
 * Checkbox component
 *
 * @example
 * ```tsx
 * <Checkbox checked={true} color="primary" size="large" />
 * <Checkbox indeterminate={true} color="secondary" />
 * <Checkbox disabled />
 * ```
 */
export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ size = 'medium', color = 'primary', sx, ...props }, ref) => {
    // Map large size to custom fontSize via sx prop since MUI only supports 'small' and 'medium'
    const sizeProps =
      size === 'large'
        ? {
            sx: {
              '& .MuiSvgIcon-root': { fontSize: 28 },
              ...(sx || {}),
            },
          }
        : { size, ...(sx ? { sx } : {}) };

    return <StyledCheckbox ref={ref} color={color} {...sizeProps} {...props} />;
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
