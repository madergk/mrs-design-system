/**
 * AccountStack Stories
 *
 * Storybook stories for the AccountStack component.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { AccountStack } from './AccountStack';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof AccountStack> = {
  title: 'Components/AccountStack',
  component: AccountStack,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A component that displays user account information including notification bell, user name, account type, and avatar.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showNotifications: {
      control: 'boolean',
      description: 'Whether to show the notification icon',
    },
    showUserAccount: {
      control: 'boolean',
      description: 'Whether to show user account information',
    },
    showUser: {
      control: 'boolean',
      description: 'Whether to show the user avatar',
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
type Story = StoryObj<typeof AccountStack>;

// Default story
export const Default: Story = {
  args: {
    userName: 'Paula Sapúlveda',
    accountType: 'Cuenta principal',
    userInitials: 'P',
  },
};

// All elements
export const AllElements: Story = {
  args: {
    showNotifications: true,
    showUserAccount: true,
    showUser: true,
    userName: 'John Doe',
    accountType: 'Admin Account',
    userInitials: 'JD',
  },
};

// Only notifications
export const OnlyNotifications: Story = {
  args: {
    showNotifications: true,
    showUserAccount: false,
    showUser: false,
  },
};

// Only user info
export const OnlyUserInfo: Story = {
  args: {
    showNotifications: false,
    showUserAccount: true,
    showUser: true,
    userName: 'Jane Smith',
    accountType: 'Regular User',
    userInitials: 'JS',
  },
};

// Different users
export const DifferentUsers: Story = {
  render: () => (
    <Stack spacing={4} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Default User
        </Typography>
        <AccountStack />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Admin User
        </Typography>
        <AccountStack userName="Admin User" accountType="Administrator" userInitials="AU" />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Long Name
        </Typography>
        <AccountStack
          userName="Very Long User Name Example"
          accountType="Premium Account"
          userInitials="VL"
        />
      </Box>
    </Stack>
  ),
};
