/**
 * Badge Component
 *
 * A Badge component customized with design tokens from Figma.
 * Supports two variants: Standard (with text content) and Dot (dot only)
 * Uses error/main color by default
 */

import React from 'react';
import { Box } from '@mui/material';
import { semanticColors, primitiveTypography } from '../../theme/designTokens';

export interface BadgeProps {
  /**
   * The content to display in the badge (for Standard variant)
   * @default '1'
   */
  content?: string;
  /**
   * The variant of the badge
   * @default 'Standard'
   */
  variant?: 'Standard' | 'Dot';
}

/**
 * Badge component
 *
 * All styling is handled via design tokens
 *
 * @example
 * ```tsx
 * <Badge content="1" variant="Standard" />
 * <Badge variant="Dot" />
 * ```
 */
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ content = '1', variant = 'Standard' }, ref) => {
    if (variant === 'Dot') {
      return (
        <Box
          ref={ref}
          sx={{
            backgroundColor: semanticColors.error.main,
            borderRadius: '100px',
            width: 8,
            height: 8,
            minWidth: 8,
          }}
        />
      );
    }

    return (
      <Box
        ref={ref}
        sx={{
          backgroundColor: semanticColors.error.main,
          borderRadius: '100px',
          minWidth: 16,
          height: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingX: '5px',
          paddingY: 0,
        }}
      >
        <Box
          sx={{
            fontFamily: primitiveTypography.fontFamily.brand,
            fontSize: primitiveTypography.fontSize['0.75rem'], // 12px
            fontWeight: primitiveTypography.fontWeight.semiBold, // 600
            lineHeight: '17px',
            color: semanticColors.error.contrastText, // white
            textAlign: 'center',
            letterSpacing: '0.14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {content}
        </Box>
      </Box>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
