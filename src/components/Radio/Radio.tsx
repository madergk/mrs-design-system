/**
 * Radio Component
 *
 * A Material UI Radio component customized with design tokens from Figma.
 * Supports all sizes: small, medium, large
 * Supports all colors: default, primary, secondary, error, warning, info, success
 * Supports all states: unchecked, checked
 * Supports all interaction states: enabled, hovered, focused, pressed, disabled
 */

import React from 'react';
import MuiRadio, { type RadioProps as MuiRadioProps } from '@mui/material/Radio';
import { styled } from '@mui/material/styles';

export interface RadioProps extends Omit<MuiRadioProps, 'color' | 'size'> {
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
   * If true, the component is disabled
   */
  disabled?: boolean;
}

/**
 * Styled Radio component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/theme.ts
 */
const StyledRadio = styled(MuiRadio)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiRadio
}));

/**
 * Radio component
 *
 * @example
 * ```tsx
 * <Radio checked={true} color="primary" size="large" />
 * <Radio color="secondary" />
 * <Radio disabled />
 * ```
 */
export const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(
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

    return <StyledRadio ref={ref} color={color} {...sizeProps} {...props} />;
  }
);

Radio.displayName = 'Radio';

export default Radio;
