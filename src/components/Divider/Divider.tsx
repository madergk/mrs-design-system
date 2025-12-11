/**
 * Divider Component
 *
 * A Material UI Divider component customized with design tokens from Figma.
 * Supports horizontal and vertical orientations
 * Supports variants: fullWidth, inset, middle
 */

import React from 'react';
import type { DividerProps as MuiDividerProps } from '@mui/material/Divider';
import MuiDivider from '@mui/material/Divider';
import { semanticColors } from '../../theme/designTokens';

export interface DividerProps extends Omit<MuiDividerProps, 'orientation'> {
  /**
   * The orientation of the divider
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The variant to use
   * @default 'fullWidth'
   */
  variant?: 'fullWidth' | 'inset' | 'middle';
  /**
   * If true, the divider will be a flex item
   * Useful when used in a flex container
   */
  flexItem?: boolean;
}

/**
 * Divider component
 *
 * All styling is handled via design tokens and theme configuration
 *
 * @example
 * ```tsx
 * <Divider />
 * <Divider orientation="vertical" flexItem />
 * <Divider variant="middle" />
 * ```
 */
export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = 'horizontal', variant = 'fullWidth', sx, ...props }, ref) => {
    return (
      <MuiDivider
        ref={ref}
        orientation={orientation}
        variant={variant}
        sx={{
          borderColor: semanticColors.divider,
          ...sx,
        }}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

export default Divider;
