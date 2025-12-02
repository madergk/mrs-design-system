/**
 * Tag Component
 *
 * A Tag component customized with design tokens from Figma.
 * Supports all variants: filled, outlined
 * Supports all sizes: small, medium
 * Supports all colors: default, primary, secondary, error, warning, info, success
 * Note: Both small and medium sizes have height 24px
 */

import React from 'react';
import { Box, type BoxProps } from '@mui/material';
import {
  semanticColors,
  componentTokens,
  typographyVariants,
  primitiveRadius,
} from '../../theme/designTokens';

export interface TagProps extends Omit<BoxProps, 'color'> {
  /**
   * The label text of the tag
   * @default 'Tag'
   */
  label?: string;
  /**
   * The size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The color of the component
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  /**
   * The variant to use
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined';
  /**
   * The state of the component
   * @default 'enabled'
   */
  state?: 'enabled';
}

/**
 * Tag component
 *
 * All styling is handled via design tokens from Figma
 *
 * @example
 * ```tsx
 * <Tag label="Tag" variant="filled" color="primary" size="medium" />
 * <Tag label="Tag" variant="outlined" color="default" size="small" />
 * ```
 */
export const Tag = React.forwardRef<React.ElementRef<typeof Box>, TagProps>(
  (
    {
      label = 'Tag',
      size = 'medium',
      color = 'default',
      variant = 'filled',
      state: _state = 'enabled',
      sx,
      ...props
    },
    ref
  ) => {
    // Get background color based on variant and color
    const getBackgroundColor = () => {
      if (variant === 'outlined' && color === 'default') {
        return 'transparent';
      }
      if (variant === 'outlined') {
        // Outlined variants with colors have light background
        switch (color) {
          case 'primary':
            return '#e0f2f1'; // teal/50
          case 'secondary':
            return '#f4f9e5'; // kelly/50
          case 'error':
            return '#fdeaed'; // red/50
          case 'warning':
            return 'rgba(255,248,225,0.5)'; // amber/50
          case 'info':
            return '#e3f2fd'; // blue/50
          case 'success':
            return '#e8f5e9'; // green/50
          default:
            return 'transparent';
        }
      }
      // Filled variant
      switch (color) {
        case 'default':
          return semanticColors.action.selected; // rgba(0,0,0,0.12)
        case 'primary':
          return '#e0f2f1'; // teal/50
        case 'secondary':
          return '#f4f9e5'; // kelly/50
        case 'error':
          return '#fdeaed'; // red/50
        case 'warning':
          return 'rgba(255,248,225,0.5)'; // amber/50
        case 'info':
          return '#e3f2fd'; // blue/50
        case 'success':
          return '#e8f5e9'; // green/50
        default:
          return semanticColors.action.selected;
      }
    };

    // Get border color based on variant and color
    const getBorderColor = () => {
      // Filled variants should never have borders
      if (variant === 'filled') {
        return 'none';
      }
      // Outlined variant
      if (color === 'default') {
        return componentTokens.chip.defaultEnabledBorder; // #bdbdbd
      }
      switch (color) {
        case 'primary':
          return semanticColors.primary.main; // #00686f
        case 'secondary':
          return '#2e7300'; // kelly/900
        case 'error':
          return '#d50000'; // red/a700
        case 'warning':
          return '#bf360c'; // darkorange/900
        case 'info':
          return '#125c87'; // info/dark
        case 'success':
          return '#1e5b21'; // success/dark
        default:
          return componentTokens.chip.defaultEnabledBorder;
      }
    };

    // Get text color based on variant and color
    const getTextColor = () => {
      if (variant === 'outlined' && color === 'default') {
        return semanticColors.text.secondary; // rgba(0,0,0,0.6)
      }
      switch (color) {
        case 'default':
          return semanticColors.text.primary; // rgba(0,0,0,0.87)
        case 'primary':
          return semanticColors.primary.main; // #00686f
        case 'secondary':
          return '#33691e'; // lightgreen/900
        case 'error':
          return '#d50000'; // red/a700
        case 'warning':
          return '#bf360c'; // darkorange/900
        case 'info':
          return '#125c87'; // info/dark
        case 'success':
          return '#1e5b21'; // success/dark
        default:
          return semanticColors.text.primary;
      }
    };

    const borderColor = getBorderColor();
    const hasBorder = variant === 'outlined';

    return (
      <Box
        ref={ref}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: getBackgroundColor(),
          border: hasBorder ? `1px solid ${borderColor}` : 'none',
          borderRadius: primitiveRadius.rounded, // 100px (fully rounded)
          height: 24, // Both small and medium have height 24px
          ...(size === 'small' && {
            maxHeight: 24,
            minHeight: 24,
          }),
          px: 1, // 8px
          py: 0,
          fontFamily: typographyVariants.chip.label.fontFamily,
          fontSize: `${typographyVariants.chip.label.fontSize}rem`, // 0.8125rem (13px)
          fontWeight: typographyVariants.chip.label.fontWeight,
          lineHeight: `${typographyVariants.chip.label.lineHeight}px`, // 18px
          letterSpacing: '0.16px',
          textTransform: 'uppercase',
          color: getTextColor(),
          ...sx,
        }}
        {...props}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            height: 24,
            minHeight: 24,
            px: 0.75, // 6px
            py: 0,
          }}
        >
          {label}
        </Box>
      </Box>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
