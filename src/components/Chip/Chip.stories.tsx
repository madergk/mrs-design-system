/**
 * Chip Stories
 *
 * Storybook stories for the Chip component.
 * Displays all variants from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';
import { Avatar } from '../Avatar';
import { Box, Stack, Typography, Paper } from '@mui/material';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Chip component customized with design tokens. Supports filled and outlined variants, multiple sizes, colors, and optional avatar/icon.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
      description: 'The variant of the chip',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'The color of the chip',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the chip',
    },
    label: {
      control: 'text',
      description: 'The label text of the chip',
    },
    avatar: {
      control: false,
      description: 'Avatar element to display before the label',
    },
    icon: {
      control: false,
      description: 'Icon name or element to display before the label',
    },
    onDelete: {
      control: false,
      description: 'Callback fired when the delete icon is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

// Default story
export const Default: Story = {
  args: {
    label: 'Chip',
    variant: 'outlined',
    color: 'secondary',
    size: 'small',
  },
};

// Variants showcase
export const Variants: Story = {
  render: () => (
    <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap" gap={3}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Chip label="Chip" variant="filled" />
        <Typography variant="caption">Filled</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Chip label="Chip" variant="outlined" />
        <Typography variant="caption">Outlined</Typography>
      </Box>
    </Stack>
  ),
};

// Sizes showcase
export const Sizes: Story = {
  render: () => (
    <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap" gap={3}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Chip label="Small" size="small" />
        <Typography variant="caption">Small (24px)</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Chip label="Medium" size="medium" />
        <Typography variant="caption">Medium (32px)</Typography>
      </Box>
    </Stack>
  ),
};

// Colors showcase - Filled
export const ColorsFilled: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
      <Chip label="Default" variant="filled" color="default" />
      <Chip label="Primary" variant="filled" color="primary" />
      <Chip label="Secondary" variant="filled" color="secondary" />
      <Chip label="Error" variant="filled" color="error" />
      <Chip label="Warning" variant="filled" color="warning" />
      <Chip label="Info" variant="filled" color="info" />
      <Chip label="Success" variant="filled" color="success" />
    </Stack>
  ),
};

// Colors showcase - Outlined
export const ColorsOutlined: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
      <Chip label="Default" variant="outlined" color="default" />
      <Chip label="Primary" variant="outlined" color="primary" />
      <Chip label="Secondary" variant="outlined" color="secondary" />
      <Chip label="Error" variant="outlined" color="error" />
      <Chip label="Warning" variant="outlined" color="warning" />
      <Chip label="Info" variant="outlined" color="info" />
      <Chip label="Success" variant="outlined" color="success" />
    </Stack>
  ),
};

// With Avatar
export const WithAvatar: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
      <Chip
        label="Chip"
        variant="filled"
        avatar={<Avatar size="24px" content="text" initials="OP" />}
      />
      <Chip
        label="Chip"
        variant="outlined"
        avatar={<Avatar size="24px" content="text" initials="OP" />}
      />
      <Chip
        label="Chip"
        variant="filled"
        color="primary"
        avatar={<Avatar size="24px" content="text" initials="OP" />}
      />
    </Stack>
  ),
};

// With Icon
export const WithIcon: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
      <Chip label="Chip" variant="filled" icon="PersonRounded" />
      <Chip label="Chip" variant="outlined" icon="PersonRounded" />
      <Chip label="Chip" variant="filled" color="primary" icon="PersonRounded" />
    </Stack>
  ),
};

// With Delete
export const WithDelete: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
      <Chip label="Chip" variant="filled" onDelete={() => {}} />
      <Chip label="Chip" variant="outlined" onDelete={() => {}} />
      <Chip label="Chip" variant="filled" color="primary" onDelete={() => {}} />
    </Stack>
  ),
};

// Disabled state
export const Disabled: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
      <Chip label="Disabled" variant="filled" disabled />
      <Chip label="Disabled" variant="outlined" disabled />
      <Chip label="Disabled" variant="filled" color="primary" disabled />
      <Chip
        label="Disabled"
        variant="filled"
        avatar={<Avatar size="24px" content="text" initials="OP" />}
        disabled
      />
      <Chip label="Disabled" variant="filled" icon="PersonRounded" disabled />
      <Chip label="Disabled" variant="filled" onDelete={() => {}} disabled />
    </Stack>
  ),
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1400 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Chip Component Showcase
      </Typography>

      {/* Medium Size - Filled Variant */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Size=Medium, Variant=Filled
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: '#f5f5f5' }}>
          <Stack spacing={4}>
            {/* Enabled State */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                State=Enabled
              </Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
                <Chip label="Chip" variant="filled" color="default" size="medium" />
                <Chip label="Chip" variant="filled" color="primary" size="medium" />
                <Chip label="Chip" variant="filled" color="secondary" size="medium" />
                <Chip label="Chip" variant="filled" color="error" size="medium" />
                <Chip label="Chip" variant="filled" color="warning" size="medium" />
                <Chip label="Chip" variant="filled" color="info" size="medium" />
                <Chip label="Chip" variant="filled" color="success" size="medium" />
              </Stack>
            </Box>

            {/* With Avatar */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                With Avatar
              </Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
                <Chip
                  label="Chip"
                  variant="filled"
                  color="default"
                  size="medium"
                  avatar={<Avatar size="24px" content="text" initials="OP" />}
                />
                <Chip
                  label="Chip"
                  variant="filled"
                  color="primary"
                  size="medium"
                  avatar={<Avatar size="24px" content="text" initials="OP" />}
                />
                <Chip
                  label="Chip"
                  variant="filled"
                  color="secondary"
                  size="medium"
                  avatar={<Avatar size="24px" content="text" initials="OP" />}
                />
              </Stack>
            </Box>

            {/* With Icon */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                With Icon
              </Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
                <Chip
                  label="Chip"
                  variant="filled"
                  color="default"
                  size="medium"
                  icon="PersonRounded"
                />
                <Chip
                  label="Chip"
                  variant="filled"
                  color="primary"
                  size="medium"
                  icon="PersonRounded"
                />
                <Chip
                  label="Chip"
                  variant="filled"
                  color="secondary"
                  size="medium"
                  icon="PersonRounded"
                />
              </Stack>
            </Box>

            {/* With Delete */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                With Delete
              </Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
                <Chip
                  label="Chip"
                  variant="filled"
                  color="default"
                  size="medium"
                  onDelete={() => {}}
                />
                <Chip
                  label="Chip"
                  variant="filled"
                  color="primary"
                  size="medium"
                  onDelete={() => {}}
                />
                <Chip
                  label="Chip"
                  variant="filled"
                  color="secondary"
                  size="medium"
                  onDelete={() => {}}
                />
              </Stack>
            </Box>

            {/* Disabled State */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                State=Disabled
              </Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
                <Chip label="Chip" variant="filled" color="default" size="medium" disabled />
                <Chip label="Chip" variant="filled" color="primary" size="medium" disabled />
                <Chip label="Chip" variant="filled" color="secondary" size="medium" disabled />
                <Chip label="Chip" variant="filled" color="error" size="medium" disabled />
                <Chip label="Chip" variant="filled" color="warning" size="medium" disabled />
                <Chip label="Chip" variant="filled" color="info" size="medium" disabled />
                <Chip label="Chip" variant="filled" color="success" size="medium" disabled />
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Box>

      {/* Medium Size - Outlined Variant */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Size=Medium, Variant=Outlined
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: '#f5f5f5' }}>
          <Stack spacing={4}>
            {/* Enabled State */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                State=Enabled
              </Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
                <Chip label="Chip" variant="outlined" color="default" size="medium" />
                <Chip label="Chip" variant="outlined" color="primary" size="medium" />
                <Chip label="Chip" variant="outlined" color="secondary" size="medium" />
                <Chip label="Chip" variant="outlined" color="error" size="medium" />
                <Chip label="Chip" variant="outlined" color="warning" size="medium" />
                <Chip label="Chip" variant="outlined" color="info" size="medium" />
                <Chip label="Chip" variant="outlined" color="success" size="medium" />
              </Stack>
            </Box>

            {/* With Avatar */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                With Avatar
              </Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
                <Chip
                  label="Chip"
                  variant="outlined"
                  color="default"
                  size="medium"
                  avatar={<Avatar size="24px" content="text" initials="OP" />}
                />
                <Chip
                  label="Chip"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  avatar={<Avatar size="24px" content="text" initials="OP" />}
                />
                <Chip
                  label="Chip"
                  variant="outlined"
                  color="secondary"
                  size="medium"
                  avatar={<Avatar size="24px" content="text" initials="OP" />}
                />
              </Stack>
            </Box>

            {/* With Icon */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                With Icon
              </Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
                <Chip
                  label="Chip"
                  variant="outlined"
                  color="default"
                  size="medium"
                  icon="PersonRounded"
                />
                <Chip
                  label="Chip"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  icon="PersonRounded"
                />
                <Chip
                  label="Chip"
                  variant="outlined"
                  color="secondary"
                  size="medium"
                  icon="PersonRounded"
                />
              </Stack>
            </Box>

            {/* With Delete */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                With Delete
              </Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
                <Chip
                  label="Chip"
                  variant="outlined"
                  color="default"
                  size="medium"
                  onDelete={() => {}}
                />
                <Chip
                  label="Chip"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  onDelete={() => {}}
                />
                <Chip
                  label="Chip"
                  variant="outlined"
                  color="secondary"
                  size="medium"
                  onDelete={() => {}}
                />
              </Stack>
            </Box>

            {/* Disabled State */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                State=Disabled
              </Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
                <Chip label="Chip" variant="outlined" color="default" size="medium" disabled />
                <Chip label="Chip" variant="outlined" color="primary" size="medium" disabled />
                <Chip label="Chip" variant="outlined" color="secondary" size="medium" disabled />
                <Chip label="Chip" variant="outlined" color="error" size="medium" disabled />
                <Chip label="Chip" variant="outlined" color="warning" size="medium" disabled />
                <Chip label="Chip" variant="outlined" color="info" size="medium" disabled />
                <Chip label="Chip" variant="outlined" color="success" size="medium" disabled />
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Box>

      {/* Small Size - Filled Variant */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Size=Small, Variant=Filled
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: '#f5f5f5' }}>
          <Stack spacing={4}>
            {/* Enabled State */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                State=Enabled
              </Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
                <Chip label="Chip" variant="filled" color="default" size="small" />
                <Chip label="Chip" variant="filled" color="primary" size="small" />
                <Chip label="Chip" variant="filled" color="secondary" size="small" />
                <Chip label="Chip" variant="filled" color="error" size="small" />
                <Chip label="Chip" variant="filled" color="warning" size="small" />
                <Chip label="Chip" variant="filled" color="info" size="small" />
                <Chip label="Chip" variant="filled" color="success" size="small" />
              </Stack>
            </Box>

            {/* Disabled State */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                State=Disabled
              </Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
                <Chip label="Chip" variant="filled" color="default" size="small" disabled />
                <Chip label="Chip" variant="filled" color="primary" size="small" disabled />
                <Chip label="Chip" variant="filled" color="secondary" size="small" disabled />
                <Chip label="Chip" variant="filled" color="error" size="small" disabled />
                <Chip label="Chip" variant="filled" color="warning" size="small" disabled />
                <Chip label="Chip" variant="filled" color="info" size="small" disabled />
                <Chip label="Chip" variant="filled" color="success" size="small" disabled />
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Box>

      {/* Small Size - Outlined Variant */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Size=Small, Variant=Outlined
        </Typography>
        <Paper sx={{ p: 3, backgroundColor: '#f5f5f5' }}>
          <Stack spacing={4}>
            {/* Enabled State */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                State=Enabled
              </Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
                <Chip label="Chip" variant="outlined" color="default" size="small" />
                <Chip label="Chip" variant="outlined" color="primary" size="small" />
                <Chip label="Chip" variant="outlined" color="secondary" size="small" />
                <Chip label="Chip" variant="outlined" color="error" size="small" />
                <Chip label="Chip" variant="outlined" color="warning" size="small" />
                <Chip label="Chip" variant="outlined" color="info" size="small" />
                <Chip label="Chip" variant="outlined" color="success" size="small" />
              </Stack>
            </Box>

            {/* Disabled State */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                State=Disabled
              </Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
                <Chip label="Chip" variant="outlined" color="default" size="small" disabled />
                <Chip label="Chip" variant="outlined" color="primary" size="small" disabled />
                <Chip label="Chip" variant="outlined" color="secondary" size="small" disabled />
                <Chip label="Chip" variant="outlined" color="error" size="small" disabled />
                <Chip label="Chip" variant="outlined" color="warning" size="small" disabled />
                <Chip label="Chip" variant="outlined" color="info" size="small" disabled />
                <Chip label="Chip" variant="outlined" color="success" size="small" disabled />
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Box>
  ),
};
