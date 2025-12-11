/**
 * Logo Component
 *
 * Displays the MiREDSALUD logo with green/primary styling.
 * "Mi" is displayed in secondary/main (bright green) color.
 * "REDSALUD" is displayed in primary/main (verones) color.
 */

import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '../Typography';
import { semanticColors, typographyVariants } from '../../theme/designTokens';

export interface LogoProps {
  /**
   * Custom className
   */
  className?: string;
  /**
   * Custom sx prop
   */
  sx?: object;
}

/**
 * Logo component
 *
 * @example
 * ```tsx
 * <Logo />
 * ```
 */
export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, sx, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={className}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '24px',
          width: '172px',
          ...sx,
        }}
        {...props}
      >
        <Typography
          sx={{
            fontFamily: typographyVariants.h6.fontFamily,
            fontSize: `${typographyVariants.h6.fontSize}px`,
            fontWeight: typographyVariants.h6.fontWeight,
            lineHeight: typographyVariants.h6.lineHeight,
            color: semanticColors.secondary.main, // Bright green for "Mi"
          }}
        >
          Mi
        </Typography>
        <Typography
          sx={{
            fontFamily: typographyVariants.h6.fontFamily,
            fontSize: `${typographyVariants.h6.fontSize}px`,
            fontWeight: typographyVariants.h6.fontWeight,
            lineHeight: typographyVariants.h6.lineHeight,
            color: semanticColors.primary.main, // Primary color (verones) for "REDSALUD"
          }}
        >
          REDSALUD
        </Typography>
      </Box>
    );
  }
);

Logo.displayName = 'Logo';

export default Logo;
