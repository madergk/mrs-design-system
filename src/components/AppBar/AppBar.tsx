/**
 * AppBar Component
 *
 * A Material UI AppBar component customized with design tokens from Figma.
 * Displays navigation, logo, notifications, and user account information.
 */

import React from 'react';
import { Box, useTheme } from '@mui/material';
import { Paper } from '../Paper';
import { IconButton } from '../IconButton';
import { Icon } from '../Icon';
import { Logo } from '../Logo';
import { AccountStack } from '../AccountStack';
import {
  semanticColors,
} from '../../theme/designTokens';

export interface AppBarProps {
  /**
   * Whether to show the menu icon button
   * @default true
   */
  showMenu?: boolean;
  /**
   * Callback fired when the menu icon is clicked
   */
  onMenuClick?: () => void;
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
   * Whether to show user account information
   * @default true
   */
  showUserAccount?: boolean;
  /**
   * User name to display
   * @default 'Pablo Salved'
   */
  userName?: string;
  /**
   * Account type/description to display
   * @default 'Cuenta principal'
   */
  accountType?: string;
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
 * AppBar component
 *
 * A Material UI AppBar wrapped in a Paper component.
 * Displays menu icon, logo, notifications, and user account information.
 *
 * Based on Figma design: node-id=11501:186167
 *
 * @example
 * ```tsx
 * <AppBar />
 * <AppBar
 *   userName="John Doe"
 *   accountType="Admin Account"
 *   onMenuClick={() => console.log('Menu clicked')}
 * />
 * ```
 */
export const AppBar = React.forwardRef<HTMLDivElement, AppBarProps>(
  (
    {
      showMenu = true,
      onMenuClick,
      showNotifications = true,
      onNotificationClick,
      showUserAccount = true,
      userName = 'Paula Sapúlveda',
      accountType = 'Cuenta principal',
      userInitials = 'P',
      userAvatarSrc,
      userAvatarAlt,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    
    return (
      <Paper
        ref={ref}
        variant="Elevation"
        elevation="1"
        sx={{
          width: '100%',
          backgroundColor: semanticColors.primary.contrastText, // White background
        }}
        {...props}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: theme.spacing(3), // 24px
            paddingRight: theme.spacing(3), // 24px
            paddingY: 0,
            minHeight: 64,
          }}
        >
          {/* Left Side: Menu + Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing(2), // 16px
              minHeight: 64,
            }}
          >
            {showMenu && (
              <IconButton
                size="medium"
                color="default"
                onClick={onMenuClick}
                sx={{
                  padding: theme.spacing(1), // 8px
                  borderRadius: '999px',
                }}
              >
                <Icon name="MenuRounded" />
              </IconButton>
            )}
            <Logo />
          </Box>

          {/* Right Side: Notifications and/or Account Stack */}
          {(showNotifications || showUserAccount) && (
            <AccountStack
              showNotifications={showNotifications}
              {...(onNotificationClick && { onNotificationClick })}
              showUserAccount={showUserAccount}
              userName={userName}
              accountType={accountType}
              userInitials={userInitials}
              {...(userAvatarSrc && { userAvatarSrc })}
              {...(userAvatarAlt && { userAvatarAlt })}
            />
          )}
        </Box>
      </Paper>
    );
  }
);

AppBar.displayName = 'AppBar';

export default AppBar;
