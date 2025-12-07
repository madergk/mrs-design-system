/**
 * AccountStack Component
 *
 * A component that displays user account information including:
 * - Notification bell icon with badge
 * - User name and account type
 * - User avatar
 *
 * Based on Figma design: node-id=12341:52734
 */

import React from 'react';
import { Box, useTheme, Avatar } from '@mui/material';
import { IconButton } from '../IconButton';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

export interface AccountStackProps {
  /**
   * Whether to show the notification icon with badge
   * @default true
   */
  showNotifications?: boolean;
  /**
   * Callback fired when the notification icon is clicked
   */
  onNotificationClick?: () => void;
  /**
   * Whether to show user account information (name and account type)
   * @default true
   */
  showUserAccount?: boolean;
  /**
   * User name to display
   * @default 'Paula Sapúlveda'
   */
  userName?: string;
  /**
   * Account type/description to display
   * @default 'Cuenta principal'
   */
  accountType?: string;
  /**
   * Whether to show the user avatar
   * @default true
   */
  showUser?: boolean;
  /**
   * User avatar initials
   * @default 'P'
   */
  userInitials?: string;
  /**
   * User avatar image source
   */
  userAvatarSrc?: string;
  /**
   * User avatar alt text
   */
  userAvatarAlt?: string;
}

/**
 * AccountStack component
 *
 * Displays notification bell, user info, and avatar in a horizontal stack
 *
 * @example
 * ```tsx
 * <AccountStack />
 * <AccountStack
 *   userName="John Doe"
 *   accountType="Admin Account"
 *   onNotificationClick={() => console.log('Notification clicked')}
 * />
 * ```
 */
export const AccountStack = React.forwardRef<HTMLDivElement, AccountStackProps>(
  (
    {
      showNotifications = true,
      onNotificationClick,
      showUserAccount = true,
      userName = 'Paula Sapúlveda',
      accountType = 'Cuenta principal',
      showUser = true,
      userInitials = 'P',
      userAvatarSrc,
      userAvatarAlt,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(2), // 16px
          height: '40px',
          justifyContent: 'flex-end',
        }}
        {...props}
      >
        {/* Notification Bell with Badge */}
        {showNotifications && (
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
            }}
          >
            <IconButton
              size="medium"
              color="default"
              onClick={onNotificationClick}
              badge
              badgeVariant="Dot"
              sx={{
                borderRadius: '999px',
                width: '40px',
                height: '40px',
              }}
            >
              <Icon name="NotificationsNoneRounded" />
            </IconButton>
          </Box>
        )}

        {/* User Account Info */}
        {showUserAccount && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.text.primary,
                letterSpacing: '0.15px',
                whiteSpace: 'nowrap',
                textAlign: 'right',
              }}
            >
              {userName}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.secondary,
                letterSpacing: '0.4px',
                whiteSpace: 'nowrap',
                textAlign: 'right',
              }}
            >
              {accountType}
            </Typography>
          </Box>
        )}

        {/* User Avatar */}
        {showUser && (
          <Avatar
            variant="circular"
            {...(userAvatarSrc ? { src: userAvatarSrc } : {})}
            {...(userAvatarAlt ? { alt: userAvatarAlt } : {})}
            sx={{
              width: '40px',
              height: '40px',
              fontSize: '1rem',
            }}
          >
            {!userAvatarSrc && userInitials}
          </Avatar>
        )}
      </Box>
    );
  }
);

AccountStack.displayName = 'AccountStack';

export default AccountStack;
