/**
 * TimelineDot Component
 *
 * Circular indicator for timeline items.
 * Supports multiple variants: filled, outlined, check, current, danger, warning, info, success.
 */

import React from 'react';
import { Box, useTheme } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { semanticColors, componentTokens } from '../../theme/designTokens';
import type { TimelineDotProps } from './Timeline.types';

export type { TimelineDotProps };

/**
 * Get styles for a specific dot variant
 */
const getDotStyles = (
  variant: TimelineDotProps['variant'],
  size: number,
  _theme: ReturnType<typeof useTheme>
) => {
  const baseStyles = {
    width: size,
    height: size,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  switch (variant) {
    case 'filled':
      return {
        ...baseStyles,
        backgroundColor: componentTokens.stepper.connector, // #bdbdbd
      };
    case 'outlined':
      return {
        ...baseStyles,
        border: `1px solid ${componentTokens.stepper.connector}`,
        backgroundColor: 'transparent',
      };
    case 'check':
      return {
        ...baseStyles,
        backgroundColor: componentTokens.stepper.connector, // #bdbdbd
      };
    case 'current':
      return {
        ...baseStyles,
        backgroundColor: semanticColors.primary.main, // #00686f
      };
    case 'danger':
      return {
        ...baseStyles,
        backgroundColor: semanticColors.error.main, // #ab1a1a
      };
    case 'warning':
      return {
        ...baseStyles,
        backgroundColor: semanticColors.warning.main, // #ed6c02
      };
    case 'info':
      return {
        ...baseStyles,
        backgroundColor: semanticColors.info.main, // #0288d1
      };
    case 'success':
      return {
        ...baseStyles,
        backgroundColor: semanticColors.success.main, // #2e7d32
      };
    default:
      return {
        ...baseStyles,
        backgroundColor: componentTokens.stepper.connector, // #bdbdbd
      };
  }
};

/**
 * TimelineDot component
 *
 * Renders a circular indicator for timeline items.
 * Supports 8 variants: filled, outlined, check, current, danger, warning, info, success.
 *
 * @example
 * ```tsx
 * <TimelineDot variant="filled" />
 * <TimelineDot variant="current" size={12} />
 * <TimelineDot variant="check" />
 * ```
 */
export const TimelineDot = React.forwardRef<HTMLDivElement, TimelineDotProps>(
  ({ variant = 'filled', size = 12, sx, ...props }, ref) => {
    const theme = useTheme();
    const dotStyles = getDotStyles(variant, size, theme);

    return (
      <Box
        ref={ref}
        sx={{
          position: 'absolute',
          left: 0,
          top: '11.5px', // Centered vertically in 35px container
          ...dotStyles,
          ...sx,
        }}
        {...props}
      >
        {variant === 'check' && (
          <CheckRoundedIcon
            sx={{
              fontSize: size * 0.75, // 75% of dot size
              color: theme.palette.common.white,
            }}
          />
        )}
      </Box>
    );
  }
);

TimelineDot.displayName = 'TimelineDot';

export default TimelineDot;
