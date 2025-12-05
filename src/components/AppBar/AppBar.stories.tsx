/**
 * AppBar Stories
 *
 * Storybook stories for the AppBar component.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { AppBar } from './AppBar';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof AppBar> = {
  title: 'Components/AppBar',
  component: AppBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A Material UI AppBar wrapped in a Paper component. Displays menu icon, logo, notifications, and user account information.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showMenu: {
      control: 'boolean',
      description: 'Whether to show the menu icon',
    },
    showNotifications: {
      control: 'boolean',
      description: 'Whether to show the notification icon',
    },
    showUserAccount: {
      control: 'boolean',
      description: 'Whether to show user account information',
    },
    userName: {
      control: 'text',
      description: 'User name to display',
    },
    accountType: {
      control: 'text',
      description: 'Account type/description to display',
    },
    userInitials: {
      control: 'text',
      description: 'User avatar initials',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppBar>;

// Default story
export const Default: Story = {
  args: {
    showMenu: true,
    showNotifications: true,
    showUserAccount: true,
    userName: 'Paula Sapúlveda',
    accountType: 'Cuenta principal',
    userInitials: 'P',
  },
};

// All elements
export const AllElements: Story = {
  args: {
    showMenu: true,
    showNotifications: true,
    showUserAccount: true,
    userName: 'John Doe',
    accountType: 'Admin Account',
    userInitials: 'JD',
  },
};

// Only menu and logo
export const MenuAndLogo: Story = {
  args: {
    showMenu: true,
    showNotifications: false,
    showUserAccount: false,
  },
};

// Only notifications
export const OnlyNotifications: Story = {
  args: {
    showMenu: true,
    showNotifications: true,
    showUserAccount: false,
  },
};

// Different configurations
export const DifferentConfigurations: Story = {
  render: () => (
    <Stack spacing={4} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Full AppBar
        </Typography>
        <AppBar />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Without Menu
        </Typography>
        <AppBar showMenu={false} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Only Notifications
        </Typography>
        <AppBar showUserAccount={false} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Custom User
        </Typography>
        <AppBar
          userName="Admin User"
          accountType="Administrator"
          userInitials="AU"
        />
      </Box>
    </Stack>
  ),
};

