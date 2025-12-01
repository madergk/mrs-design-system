/**
 * Button Component
 *
 * A Material UI Button component customized with design tokens from Figma.
 * Supports all variants: contained, outlined, text
 * Supports all sizes: small, medium, large
 * Supports all colors: primary, secondary, error, inherit
 * Supports all states: enabled, hovered, focused, pressed, disabled
 */

import React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  /**
   * The color of the component
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'inherit';
  /**
   * The variant to use
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'text';
  /**
   * The size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Button component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Button variant="contained" color="primary" size="large">
 *   Click me
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiButton ref={ref} {...props}>
        {children}
      </MuiButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;

