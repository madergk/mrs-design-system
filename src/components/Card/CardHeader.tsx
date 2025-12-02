/**
 * CardHeader Component
 *
 * A sub-component of Card for displaying header content
 */

import React from 'react';
import { Box, type BoxProps } from '@mui/material';
import { Typography } from '../Typography';
import { semanticColors, typographyVariants } from '../../theme/designTokens';

export interface CardHeaderProps extends Omit<BoxProps, 'title'> {
  /**
   * The header title text
   */
  title?: React.ReactNode;
  /**
   * If true, uses smaller typography for small screens
   * @default false
   */
  smallScreen?: boolean;
  /**
   * Custom content to display
   */
  children?: React.ReactNode;
}

/**
 * CardHeader component
 *
 * @example
 * ```tsx
 * <CardHeader title="Card Title" />
 * <CardHeader title="Card Title" smallScreen />
 * ```
 */
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, smallScreen = false, children, sx, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 2, // 16px
          width: '100%',
          ...sx,
        }}
        {...props}
      >
        {children || (
          <Box
            sx={{
              flex: '1 1 0',
              minWidth: 0,
              minHeight: 0,
            }}
          >
            <Typography
              variant={smallScreen ? 'h6' : 'h5'}
              sx={{
                fontFamily: typographyVariants.h5.fontFamily,
                fontSize: smallScreen
                  ? `${typographyVariants.h6.fontSize}rem` // 1.25rem (20px)
                  : `${typographyVariants.h5.fontSize}rem`, // 1.5rem (24px)
                fontWeight: typographyVariants.h5.fontWeight,
                lineHeight: smallScreen
                  ? typographyVariants.h6.lineHeight // 1.6
                  : typographyVariants.h5.lineHeight, // 1.334
                color: semanticColors.text.primary,
                letterSpacing: smallScreen ? '0.15px' : undefined,
                width: '100%',
              }}
            >
              {title}
            </Typography>
          </Box>
        )}
      </Box>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export default CardHeader;
