/**
 * Badge Stories
 *
 * Storybook stories for the Badge component.
 * Displays all variants from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Badge component customized with design tokens. Supports Standard (with text content) and Dot variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['Standard', 'Dot'],
      description: 'The variant of the badge',
    },
    content: {
      control: 'text',
      description: 'The content to display in the badge (for Standard variant)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Default story
export const Default: Story = {
  args: {
    content: '1',
    variant: 'Standard',
  },
};

// Variants showcase
export const Variants: Story = {
  render: () => (
    <Stack spacing={3} direction="row" alignItems="center">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Badge content="1" variant="Standard" />
        <Typography variant="caption">Standard</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Badge variant="Dot" />
        <Typography variant="caption">Dot</Typography>
      </Box>
    </Stack>
  ),
};

// Standard variant with different content
export const StandardContent: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
      <Badge content="1" variant="Standard" />
      <Badge content="5" variant="Standard" />
      <Badge content="99" variant="Standard" />
      <Badge content="999" variant="Standard" />
      <Badge content="12" variant="Standard" />
    </Stack>
  ),
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 800 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Badge Component Showcase
      </Typography>

      {/* Variants */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Variants
        </Typography>
        <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap" gap={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Badge content="1" variant="Standard" />
            <Typography variant="body2">Standard</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Badge variant="Dot" />
            <Typography variant="body2">Dot</Typography>
          </Box>
        </Stack>
      </Box>

      {/* Standard variant with different content */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Standard Variant - Different Content
        </Typography>
        <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Badge content="1" variant="Standard" />
            <Typography variant="caption">1</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Badge content="5" variant="Standard" />
            <Typography variant="caption">5</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Badge content="12" variant="Standard" />
            <Typography variant="caption">12</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Badge content="99" variant="Standard" />
            <Typography variant="caption">99</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Badge content="999" variant="Standard" />
            <Typography variant="caption">999</Typography>
          </Box>
        </Stack>
      </Box>

      {/* Dot variant */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Dot Variant
        </Typography>
        <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
          <Badge variant="Dot" />
          <Badge variant="Dot" />
          <Badge variant="Dot" />
        </Stack>
      </Box>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
