/**
 * Select Component
 *
 * A Material UI Select component customized with design tokens from Figma.
 * Supports all variants: standard, filled, outlined
 * Supports all sizes: small, medium
 * Supports all colors: default, primary, secondary, error, warning, info, success
 * Supports all states: enabled, disabled, error, focused, hovered
 */

import React from 'react';
import MuiSelect, { type SelectProps as MuiSelectProps } from '@mui/material/Select';
import { styled } from '@mui/material/styles';

export interface SelectProps extends Omit<MuiSelectProps, 'color' | 'size'> {
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
   * The variant to use
   * @default 'outlined'
   */
  variant?: 'standard' | 'filled' | 'outlined';
}

/**
 * Styled Select component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 */
const StyledSelect = styled(MuiSelect)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiSelect
}));

/**
 * Select component
 *
 * @example
 * ```tsx
 * <Select value="option1" variant="outlined" color="primary" size="medium">
 *   <MenuItem value="option1">Option 1</MenuItem>
 *   <MenuItem value="option2">Option 2</MenuItem>
 * </Select>
 * <Select variant="filled" color="secondary" />
 * <Select variant="standard" disabled />
 * ```
 */
export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ size = 'medium', color = 'primary', variant = 'outlined', sx, ...props }, ref) => {
    // Map 'default' to 'primary' if needed (for backward compatibility)
    const muiColor = color === 'default' ? 'primary' : color;
    return (
      <StyledSelect
        ref={ref}
        color={muiColor}
        size={size}
        variant={variant}
        {...(sx ? { sx } : {})}
        {...props}
      />
    );
  }
);

Select.displayName = 'Select';

export default Select;
