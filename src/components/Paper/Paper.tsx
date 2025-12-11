/**
 * Paper Component
 *
 * A Material UI Paper component customized with design tokens from Figma.
 * Supports all variants: Elevation, Outlined
 * Supports all elevations: 0-24
 * Supports square corners option
 */

import React from 'react';
import MuiPaper, { type PaperProps as MuiPaperProps } from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { semanticColors } from '../../theme/designTokens';

export interface PaperProps extends Omit<MuiPaperProps, 'variant' | 'elevation'> {
  /**
   * The variant to use
   * @default 'Elevation'
   */
  variant?: 'Elevation' | 'Outlined';
  /**
   * The elevation level (0-24)
   * Only applies when variant is 'Elevation'
   * @default '1'
   */
  elevation?:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '21'
    | '22'
    | '23'
    | '24';
  /**
   * If true, the component will have square corners
   * @default false
   */
  square?: boolean;
}

/**
 * Styled Paper component that uses design tokens from theme
 * All styling is handled via the theme configuration and design tokens
 */
const StyledPaper = styled(MuiPaper)(() => ({
  backgroundColor: semanticColors.background.paper.elevation0,
  // Border radius will be handled by the square prop and theme
  // Material-UI Paper automatically uses theme.shape.borderRadius when square is false
}));

/**
 * Paper component
 *
 * @example
 * ```tsx
 * <Paper variant="Elevation" elevation="1" />
 * <Paper variant="Outlined" square />
 * <Paper variant="Elevation" elevation="24" />
 * ```
 */
export const Paper = React.forwardRef<HTMLDivElement, PaperProps>(
  ({ variant = 'Elevation', elevation = '1', square = false, sx, ...props }, ref) => {
    // Convert elevation string to number for MUI
    const elevationNumber = parseInt(elevation, 10) as
      | 0
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | 14
      | 15
      | 16
      | 17
      | 18
      | 19
      | 20
      | 21
      | 22
      | 23
      | 24;

    // Map variant to MUI variant
    const muiVariant = variant === 'Outlined' ? 'outlined' : 'elevation';

    return (
      <StyledPaper
        ref={ref}
        variant={muiVariant}
        elevation={muiVariant === 'elevation' ? elevationNumber : 0}
        square={square}
        {...(sx !== undefined ? { sx } : {})}
        {...props}
      />
    );
  }
);

Paper.displayName = 'Paper';

export default Paper;
