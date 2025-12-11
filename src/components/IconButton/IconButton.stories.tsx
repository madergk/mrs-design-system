/**
 * IconButton Stories
 *
 * Storybook stories for the IconButton component.
 * Displays all variants, sizes, colors, and states from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { Box, Stack, Typography } from '@mui/material';
import { Icon } from '../Icon';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI IconButton component customized with design tokens. Supports small, medium, and large sizes with multiple colors and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'error',
        'warning',
        'info',
        'success',
        'inherit',
      ],
      description: 'The color of the icon button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the icon button',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the icon button is disabled',
    },
    disableRipple: {
      control: 'boolean',
      description: 'If true, the ripple effect is disabled',
    },
    disableFocusRipple: {
      control: 'boolean',
      description: 'If true, the keyboard focus ripple is disabled',
    },
    edge: {
      control: 'select',
      options: ['start', 'end', false],
      description: 'If given, uses a negative margin to counteract the padding on one side',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// Default story
export const Default: Story = {
  args: {
    children: <Icon name="AddRounded" />,
    color: 'primary',
    size: 'medium',
  },
};

// Sizes showcase
export const Sizes: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Small (32px)
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <IconButton size="small" color="default">
            <Icon name="AddRounded" />
          </IconButton>
          <IconButton size="small" color="primary">
            <Icon name="AddRounded" />
          </IconButton>
          <IconButton size="small" color="error">
            <Icon name="AddRounded" />
          </IconButton>
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Medium (40px) - Default
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <IconButton size="medium" color="default">
            <Icon name="AddRounded" />
          </IconButton>
          <IconButton size="medium" color="primary">
            <Icon name="AddRounded" />
          </IconButton>
          <IconButton size="medium" color="error">
            <Icon name="AddRounded" />
          </IconButton>
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Large (48px)
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <IconButton size="large" color="default">
            <Icon name="AddRounded" />
          </IconButton>
          <IconButton size="large" color="primary">
            <Icon name="AddRounded" />
          </IconButton>
          <IconButton size="large" color="error">
            <Icon name="AddRounded" />
          </IconButton>
        </Stack>
      </Box>
    </Stack>
  ),
};

// Colors showcase
export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Small Size
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="small" color="default">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Default</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="small" color="primary">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Primary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="small" color="error">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Error</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="small" color="inherit">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Inherit</Typography>
          </Box>
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Medium Size
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="medium" color="default">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Default</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="medium" color="primary">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Primary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="medium" color="secondary">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Secondary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="medium" color="error">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Error</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="medium" color="warning">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Warning</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="medium" color="info">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Info</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="medium" color="success">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Success</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="medium" color="inherit">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Inherit</Typography>
          </Box>
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Large Size
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="large" color="default">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Default</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="large" color="primary">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Primary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="large" color="error">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Error</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <IconButton size="large" color="inherit">
              <Icon name="AddRounded" />
            </IconButton>
            <Typography variant="caption">Inherit</Typography>
          </Box>
        </Stack>
      </Box>
    </Stack>
  ),
};

// States showcase
export const States: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Enabled
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <IconButton color="default">
            <Icon name="AddRounded" />
          </IconButton>
          <IconButton color="primary">
            <Icon name="AddRounded" />
          </IconButton>
          <IconButton color="error">
            <Icon name="AddRounded" />
          </IconButton>
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Disabled
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <IconButton disabled color="default">
            <Icon name="AddRounded" />
          </IconButton>
          <IconButton disabled color="primary">
            <Icon name="AddRounded" />
          </IconButton>
          <IconButton disabled color="error">
            <Icon name="AddRounded" />
          </IconButton>
          <IconButton disabled color="secondary">
            <Icon name="AddRounded" />
          </IconButton>
          <IconButton disabled color="warning">
            <Icon name="AddRounded" />
          </IconButton>
          <IconButton disabled color="info">
            <Icon name="AddRounded" />
          </IconButton>
          <IconButton disabled color="success">
            <Icon name="AddRounded" />
          </IconButton>
          <IconButton disabled color="inherit">
            <Icon name="AddRounded" />
          </IconButton>
        </Stack>
      </Box>
    </Stack>
  ),
};

// Different icons showcase
export const DifferentIcons: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <IconButton color="primary">
        <Icon name="AddRounded" />
      </IconButton>
      <IconButton color="primary">
        <Icon name="DeleteRounded" />
      </IconButton>
      <IconButton color="primary">
        <Icon name="EditRounded" />
      </IconButton>
      <IconButton color="primary">
        <Icon name="SearchRounded" />
      </IconButton>
      <IconButton color="primary">
        <Icon name="SettingsRounded" />
      </IconButton>
      <IconButton color="primary">
        <Icon name="MoreVertRounded" />
      </IconButton>
    </Stack>
  ),
};

// Badge showcase
export const WithBadge: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Standard Badge
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <IconButton badge badgeVariant="Standard" badgeContent="1">
            <Icon name="NotificationsNoneRounded" />
          </IconButton>
          <IconButton badge badgeVariant="Standard" badgeContent="5">
            <Icon name="NotificationsNoneRounded" />
          </IconButton>
          <IconButton badge badgeVariant="Standard" badgeContent="99">
            <Icon name="NotificationsNoneRounded" />
          </IconButton>
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Dot Badge
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <IconButton badge badgeVariant="Dot">
            <Icon name="NotificationsNoneRounded" />
          </IconButton>
          <IconButton badge badgeVariant="Dot" color="primary">
            <Icon name="NotificationsNoneRounded" />
          </IconButton>
          <IconButton badge badgeVariant="Dot" color="secondary">
            <Icon name="NotificationsNoneRounded" />
          </IconButton>
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Badge with Different Sizes
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <IconButton size="small" badge badgeVariant="Standard" badgeContent="1">
            <Icon name="NotificationsNoneRounded" />
          </IconButton>
          <IconButton size="medium" badge badgeVariant="Standard" badgeContent="1">
            <Icon name="NotificationsNoneRounded" />
          </IconButton>
          <IconButton size="large" badge badgeVariant="Standard" badgeContent="1">
            <Icon name="NotificationsNoneRounded" />
          </IconButton>
        </Stack>
      </Box>
    </Stack>
  ),
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1400 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        IconButton Component Showcase
      </Typography>

      {/* Small Size */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Small Size (32px)
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Enabled
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton size="small" color="default">
                  <Icon name="AddRounded" />
                </IconButton>
                <Typography variant="caption">Default</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton size="small" color="primary">
                  <Icon name="AddRounded" />
                </IconButton>
                <Typography variant="caption">Primary</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton size="small" color="error">
                  <Icon name="AddRounded" />
                </IconButton>
                <Typography variant="caption">Error</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton size="small" color="inherit">
                  <Icon name="AddRounded" />
                </IconButton>
                <Typography variant="caption">Inherit</Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Disabled
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <IconButton size="small" disabled color="default">
                <Icon name="AddRounded" />
              </IconButton>
              <IconButton size="small" disabled color="primary">
                <Icon name="AddRounded" />
              </IconButton>
              <IconButton size="small" disabled color="error">
                <Icon name="AddRounded" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Medium Size */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Medium Size (40px) - Default
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Enabled
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton size="medium" color="default">
                  <Icon name="AddRounded" />
                </IconButton>
                <Typography variant="caption">Default</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton size="medium" color="primary">
                  <Icon name="AddRounded" />
                </IconButton>
                <Typography variant="caption">Primary</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton size="medium" color="error">
                  <Icon name="AddRounded" />
                </IconButton>
                <Typography variant="caption">Error</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton size="medium" color="inherit">
                  <Icon name="AddRounded" />
                </IconButton>
                <Typography variant="caption">Inherit</Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Disabled
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <IconButton size="medium" disabled color="default">
                <Icon name="AddRounded" />
              </IconButton>
              <IconButton size="medium" disabled color="primary">
                <Icon name="AddRounded" />
              </IconButton>
              <IconButton size="medium" disabled color="error">
                <Icon name="AddRounded" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Large Size */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Large Size (48px)
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Enabled
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton size="large" color="default">
                  <Icon name="AddRounded" />
                </IconButton>
                <Typography variant="caption">Default</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton size="large" color="primary">
                  <Icon name="AddRounded" />
                </IconButton>
                <Typography variant="caption">Primary</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton size="large" color="error">
                  <Icon name="AddRounded" />
                </IconButton>
                <Typography variant="caption">Error</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton size="large" color="inherit">
                  <Icon name="AddRounded" />
                </IconButton>
                <Typography variant="caption">Inherit</Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Disabled
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <IconButton size="large" disabled color="default">
                <Icon name="AddRounded" />
              </IconButton>
              <IconButton size="large" disabled color="primary">
                <Icon name="AddRounded" />
              </IconButton>
              <IconButton size="large" disabled color="error">
                <Icon name="AddRounded" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Badge Showcase */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          With Badge
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Standard Badge
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton badge badgeVariant="Standard" badgeContent="1">
                  <Icon name="NotificationsNoneRounded" />
                </IconButton>
                <Typography variant="caption">Standard</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton badge badgeVariant="Standard" badgeContent="5" color="primary">
                  <Icon name="NotificationsNoneRounded" />
                </IconButton>
                <Typography variant="caption">Content: 5</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton badge badgeVariant="Standard" badgeContent="99" color="primary">
                  <Icon name="NotificationsNoneRounded" />
                </IconButton>
                <Typography variant="caption">Content: 99</Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Dot Badge
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton badge badgeVariant="Dot">
                  <Icon name="NotificationsNoneRounded" />
                </IconButton>
                <Typography variant="caption">Dot</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton badge badgeVariant="Dot" color="primary">
                  <Icon name="NotificationsNoneRounded" />
                </IconButton>
                <Typography variant="caption">Primary</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <IconButton badge badgeVariant="Dot" color="secondary">
                  <Icon name="NotificationsNoneRounded" />
                </IconButton>
                <Typography variant="caption">Secondary</Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
