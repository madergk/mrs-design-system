/**
 * Typography Component
 *
 * A Material UI Typography component customized with design tokens from Figma.
 * Supports all variants: h1, h2, h3, h4, h5, h6, body1, body2, subtitle1, subtitle2, caption, overline
 * Supports gutterBottom prop for adding margin bottom
 */

import React from 'react';
import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import MuiTypography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export interface TypographyProps extends Omit<MuiTypographyProps, 'variant'> {
  /**
   * The typography variant to use
   * @default 'body1'
   */
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline';
  /**
   * If true, the text will have a bottom margin
   * @default false
   */
  gutterBottom?: boolean;
}

/**
 * Styled Typography component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/theme.ts
 */
const StyledTypography = styled(MuiTypography)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.typography
}));

/**
 * Typography component
 *
 * @example
 * ```tsx
 * <Typography variant="h1" gutterBottom>
 *   Heading 1
 * </Typography>
 * <Typography variant="body1">
 *   Body text
 * </Typography>
 * ```
 */
export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, variant = 'body1', gutterBottom = false, ...props }, ref) => {
    return (
      <StyledTypography ref={ref} variant={variant} gutterBottom={gutterBottom} {...props}>
        {children}
      </StyledTypography>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
