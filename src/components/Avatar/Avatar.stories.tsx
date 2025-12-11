/**
 * Avatar Stories
 *
 * Storybook stories for the Avatar component.
 * Displays all variants, sizes, content types, and badge options from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Avatar component customized with design tokens. Supports circular, rounded, and square variants with multiple sizes and content types (text, icon, image).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
      description: 'The variant of the avatar',
    },
    size: {
      control: 'select',
      options: ['40px', '32px', '24px', '18px'],
      description: 'The size of the avatar',
    },
    content: {
      control: 'select',
      options: ['text', 'icon', 'image'],
      description: 'The content type of the avatar',
    },
    initials: {
      control: 'text',
      description: 'Text content (initials) - used when content is "text"',
    },
    iconName: {
      control: 'select',
      options: ['PersonRounded', 'PersonOutlineRounded', 'AddRounded', 'AccountCircleRounded'],
      description: 'Icon name - used when content is "icon"',
    },
    src: {
      control: 'text',
      description: 'Image source - used when content is "image"',
    },
    alt: {
      control: 'text',
      description: 'Image alt text - used when content is "image"',
    },
    badge: {
      control: 'boolean',
      description: 'Whether to show a badge',
    },
    badgeColor: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info', 'primary', 'secondary'],
      description: 'Badge color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// Default story
export const Default: Story = {
  args: {
    variant: 'circular',
    size: '40px',
    content: 'text',
    initials: 'P',
    badge: false,
  },
};

// All variants showcase - matches Figma design grid
export const AllVariants: Story = {
  render: () => {
    // Sample image URL - replace with actual image in production
    const sampleImageUrl =
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face';

    return (
      <Box sx={{ p: 4 }}>
        <Stack spacing={4}>
          {/* Row 1-3: Text Avatars (Initials) */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Text Avatars (Initials)
            </Typography>
            <Stack spacing={3}>
              {/* 40px */}
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  40px
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Avatar variant="circular" size="40px" content="text" initials="P" />
                  <Avatar variant="rounded" size="40px" content="text" initials="P" />
                  <Avatar variant="square" size="40px" content="text" initials="P" />
                </Stack>
              </Box>
              {/* 32px */}
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  32px
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Avatar variant="circular" size="32px" content="text" initials="P" />
                  <Avatar variant="rounded" size="32px" content="text" initials="P" />
                  <Avatar variant="square" size="32px" content="text" initials="P" />
                </Stack>
              </Box>
              {/* 24px */}
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  24px
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Avatar variant="circular" size="24px" content="text" initials="P" />
                  <Avatar variant="rounded" size="24px" content="text" initials="P" />
                  <Avatar variant="square" size="24px" content="text" initials="P" />
                </Stack>
              </Box>
              {/* 18px */}
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  18px
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Avatar variant="circular" size="18px" content="text" initials="P" />
                  <Avatar variant="rounded" size="18px" content="text" initials="P" />
                  <Avatar variant="square" size="18px" content="text" initials="P" />
                </Stack>
              </Box>
            </Stack>
          </Box>

          {/* Row 4-7: Icon Avatars */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Icon Avatars
            </Typography>
            <Stack spacing={3}>
              {/* 40px */}
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  40px
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Avatar variant="circular" size="40px" content="icon" iconName="PersonRounded" />
                  <Avatar variant="rounded" size="40px" content="icon" iconName="PersonRounded" />
                  <Avatar variant="square" size="40px" content="icon" iconName="PersonRounded" />
                </Stack>
              </Box>
              {/* 32px */}
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  32px
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Avatar variant="circular" size="32px" content="icon" iconName="PersonRounded" />
                  <Avatar variant="rounded" size="32px" content="icon" iconName="PersonRounded" />
                  <Avatar variant="square" size="32px" content="icon" iconName="PersonRounded" />
                </Stack>
              </Box>
              {/* 24px */}
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  24px
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Avatar variant="circular" size="24px" content="icon" iconName="PersonRounded" />
                  <Avatar variant="rounded" size="24px" content="icon" iconName="PersonRounded" />
                  <Avatar variant="square" size="24px" content="icon" iconName="PersonRounded" />
                </Stack>
              </Box>
              {/* 18px */}
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  18px
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Avatar variant="circular" size="18px" content="icon" iconName="PersonRounded" />
                  <Avatar variant="rounded" size="18px" content="icon" iconName="AddRounded" />
                  <Avatar variant="square" size="18px" content="icon" iconName="AddRounded" />
                </Stack>
              </Box>
            </Stack>
          </Box>

          {/* Row 8-12: Image Avatars */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Image Avatars
            </Typography>
            <Stack spacing={3}>
              {/* 40px */}
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  40px
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Avatar
                    variant="circular"
                    size="40px"
                    content="image"
                    src={sampleImageUrl}
                    alt="Avatar"
                  />
                  <Avatar
                    variant="rounded"
                    size="40px"
                    content="image"
                    src={sampleImageUrl}
                    alt="Avatar"
                  />
                  <Avatar
                    variant="square"
                    size="40px"
                    content="image"
                    src={sampleImageUrl}
                    alt="Avatar"
                  />
                </Stack>
              </Box>
              {/* 32px */}
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  32px
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Avatar
                    variant="circular"
                    size="32px"
                    content="image"
                    src={sampleImageUrl}
                    alt="Avatar"
                  />
                  <Avatar
                    variant="rounded"
                    size="32px"
                    content="image"
                    src={sampleImageUrl}
                    alt="Avatar"
                  />
                  <Avatar
                    variant="square"
                    size="32px"
                    content="image"
                    src={sampleImageUrl}
                    alt="Avatar"
                  />
                </Stack>
              </Box>
              {/* 24px */}
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  24px
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Avatar
                    variant="circular"
                    size="24px"
                    content="image"
                    src={sampleImageUrl}
                    alt="Avatar"
                  />
                  <Avatar
                    variant="rounded"
                    size="24px"
                    content="image"
                    src={sampleImageUrl}
                    alt="Avatar"
                  />
                  <Avatar
                    variant="square"
                    size="24px"
                    content="image"
                    src={sampleImageUrl}
                    alt="Avatar"
                  />
                </Stack>
              </Box>
              {/* 18px */}
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  18px
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Avatar
                    variant="circular"
                    size="18px"
                    content="image"
                    src={sampleImageUrl}
                    alt="Avatar"
                  />
                  <Avatar
                    variant="rounded"
                    size="18px"
                    content="image"
                    src={sampleImageUrl}
                    alt="Avatar"
                  />
                  <Avatar
                    variant="square"
                    size="18px"
                    content="image"
                    src={sampleImageUrl}
                    alt="Avatar"
                  />
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    );
  },
};

// Variants showcase
export const Variants: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Avatar variant="circular" size="40px" content="text" initials="P" />
      <Avatar variant="rounded" size="40px" content="text" initials="P" />
      <Avatar variant="square" size="40px" content="text" initials="P" />
    </Stack>
  ),
};

// Sizes showcase
export const Sizes: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
      <Avatar size="40px" content="text" initials="P" />
      <Avatar size="32px" content="text" initials="P" />
      <Avatar size="24px" content="text" initials="P" />
      <Avatar size="18px" content="text" initials="P" />
    </Stack>
  ),
};

// Content types showcase
export const ContentTypes: Story = {
  render: () => {
    const sampleImageUrl =
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face';

    return (
      <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
        <Avatar content="text" initials="P" size="40px" />
        <Avatar content="icon" iconName="PersonRounded" size="40px" />
        <Avatar content="image" src={sampleImageUrl} alt="Avatar" size="40px" />
      </Stack>
    );
  },
};

// Badge showcase
export const WithBadge: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Avatar size="40px" content="text" initials="P" badge />
      <Avatar size="32px" content="text" initials="P" badge />
      <Avatar size="24px" content="text" initials="P" badge />
      <Avatar size="18px" content="text" initials="P" badge />
    </Stack>
  ),
};

// Badge colors showcase
export const BadgeColors: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Avatar size="40px" content="text" initials="P" badge badgeColor="success" />
      <Avatar size="40px" content="text" initials="P" badge badgeColor="error" />
      <Avatar size="40px" content="text" initials="P" badge badgeColor="warning" />
      <Avatar size="40px" content="text" initials="P" badge badgeColor="info" />
      <Avatar size="40px" content="text" initials="P" badge badgeColor="primary" />
      <Avatar size="40px" content="text" initials="P" badge badgeColor="secondary" />
    </Stack>
  ),
};
