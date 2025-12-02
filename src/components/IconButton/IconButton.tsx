/**
 * IconButton Component
 *
 * A Material UI IconButton component customized with design tokens from Figma.
 * Supports all sizes: small, medium, large
 * Supports all colors: default, primary, secondary, error, warning, info, success, inherit
 * Supports all states: enabled, hovered, focused, pressed, disabled
 * Supports optional badge overlay
 *
 * Based on MUI IconButton API: https://v6.mui.com/material-ui/api/icon-button/
 */

import React from 'react';
import type { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';
import MuiIconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import { Badge } from '../Badge';

export interface IconButtonProps extends Omit<MuiIconButtonProps, 'color' | 'size'> {
  /**
   * The color of the component
   * @default 'primary'
   */
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
    | 'inherit';
  /**
   * The size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the component is disabled
   */
  disabled?: boolean;
  /**
   * If true, the ripple effect is disabled
   */
  disableRipple?: boolean;
  /**
   * If true, the keyboard focus ripple is disabled
   */
  disableFocusRipple?: boolean;
  /**
   * If given, uses a negative margin to counteract the padding on one side
   */
  edge?: 'start' | 'end' | false;
  /**
   * Whether to show a badge
   * @default false
   */
  badge?: boolean;
  /**
   * Badge variant
   * @default 'Standard'
   */
  badgeVariant?: 'Standard' | 'Dot';
  /**
   * Badge content (for Standard variant)
   * @default '1'
   */
  badgeContent?: string;
}

/**
 * IconButton component
 *
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 *
 * @example
 * ```tsx
 * <IconButton color="primary" size="medium">
 *   <AddRounded />
 * </IconButton>
 * <IconButton color="error" size="small" disabled>
 *   <DeleteRounded />
 * </IconButton>
 * <IconButton badge badgeVariant="Standard" badgeContent="1">
 *   <NotificationsNoneRounded />
 * </IconButton>
 * <IconButton badge badgeVariant="Dot">
 *   <NotificationsNoneRounded />
 * </IconButton>
 * ```
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      size = 'medium',
      color = 'primary',
      badge = false,
      badgeVariant = 'Standard',
      badgeContent = '1',
      sx,
      children,
      ...props
    },
    ref
  ) => {
    const iconButton = (
      <MuiIconButton ref={ref} color={color} size={size} {...(sx ? { sx } : {})} {...props}>
        {children}
      </MuiIconButton>
    );

    if (badge) {
      return (
        <Box
          sx={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {iconButton}
          <Box
            sx={{
              position: 'absolute',
              ...(badgeVariant === 'Dot'
                ? {
                    right: '6px',
                    top: '2.5px',
                  }
                : {
                    right: 0,
                    top: 0,
                  }),
            }}
          >
            <Badge variant={badgeVariant} content={badgeContent} />
          </Box>
        </Box>
      );
    }

    return iconButton;
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
