/**
 * Tag Stories
 *
 * Storybook stories for the Tag component.
 * Displays all variants from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';
import { Box, Stack, Typography, Paper } from '@mui/material';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Tag component customized with design tokens. Supports filled and outlined variants, multiple sizes, and colors.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
      description: 'The variant of the tag',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'The color of the tag',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the tag',
    },
    label: {
      control: 'text',
      description: 'The label text of the tag',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

// Default story
export const Default: Story = {
  args: {
    label: 'Tag',
    variant: 'filled',
    color: 'default',
    size: 'medium',
  },
};

// Variants showcase
export const Variants: Story = {
  render: () => (
    <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap" gap={3}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Tag label="Tag" variant="filled" />
        <Typography variant="caption">Filled</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Tag label="Tag" variant="outlined" />
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
        <Tag label="Small" size="small" />
        <Typography variant="caption">Small (24px)</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Tag label="Medium" size="medium" />
        <Typography variant="caption">Medium (24px)</Typography>
      </Box>
    </Stack>
  ),
};

// Colors showcase - Filled
export const ColorsFilled: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
      <Tag label="Tag" variant="filled" color="default" />
      <Tag label="Tag" variant="filled" color="primary" />
      <Tag label="Tag" variant="filled" color="secondary" />
      <Tag label="Tag" variant="filled" color="error" />
      <Tag label="Tag" variant="filled" color="warning" />
      <Tag label="Tag" variant="filled" color="info" />
      <Tag label="Tag" variant="filled" color="success" />
    </Stack>
  ),
};

// Colors showcase - Outlined
export const ColorsOutlined: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
      <Tag label="Tag" variant="outlined" color="default" />
      <Tag label="Tag" variant="outlined" color="primary" />
      <Tag label="Tag" variant="outlined" color="secondary" />
      <Tag label="Tag" variant="outlined" color="error" />
      <Tag label="Tag" variant="outlined" color="warning" />
      <Tag label="Tag" variant="outlined" color="info" />
      <Tag label="Tag" variant="outlined" color="success" />
    </Stack>
  ),
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1400 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Tag Component Showcase
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
                <Tag label="Tag" variant="filled" color="default" size="medium" />
                <Tag label="Tag" variant="filled" color="primary" size="medium" />
                <Tag label="Tag" variant="filled" color="secondary" size="medium" />
                <Tag label="Tag" variant="filled" color="error" size="medium" />
                <Tag label="Tag" variant="filled" color="warning" size="medium" />
                <Tag label="Tag" variant="filled" color="info" size="medium" />
                <Tag label="Tag" variant="filled" color="success" size="medium" />
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
                <Tag label="Tag" variant="outlined" color="default" size="medium" />
                <Tag label="Tag" variant="outlined" color="primary" size="medium" />
                <Tag label="Tag" variant="outlined" color="secondary" size="medium" />
                <Tag label="Tag" variant="outlined" color="error" size="medium" />
                <Tag label="Tag" variant="outlined" color="warning" size="medium" />
                <Tag label="Tag" variant="outlined" color="info" size="medium" />
                <Tag label="Tag" variant="outlined" color="success" size="medium" />
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
                <Tag label="Tag" variant="filled" color="default" size="small" />
                <Tag label="Tag" variant="filled" color="primary" size="small" />
                <Tag label="Tag" variant="filled" color="secondary" size="small" />
                <Tag label="Tag" variant="filled" color="error" size="small" />
                <Tag label="Tag" variant="filled" color="warning" size="small" />
                <Tag label="Tag" variant="filled" color="info" size="small" />
                <Tag label="Tag" variant="filled" color="success" size="small" />
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
                <Tag label="Tag" variant="outlined" color="default" size="small" />
                <Tag label="Tag" variant="outlined" color="primary" size="small" />
                <Tag label="Tag" variant="outlined" color="secondary" size="small" />
                <Tag label="Tag" variant="outlined" color="error" size="small" />
                <Tag label="Tag" variant="outlined" color="warning" size="small" />
                <Tag label="Tag" variant="outlined" color="info" size="small" />
                <Tag label="Tag" variant="outlined" color="success" size="small" />
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Box>
  ),
};
