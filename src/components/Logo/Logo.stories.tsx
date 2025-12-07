/**
 * Logo Stories
 *
 * Storybook stories for the Logo component.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Displays the MiREDSALUD logo with green/primary styling. "Mi" is displayed in secondary/main (bright green) color. "REDSALUD" is displayed in primary/main (verones) color.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Logo>;

// Default story
export const Default: Story = {
  args: {},
};

// Different backgrounds
export const DifferentBackgrounds: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          White Background
        </Typography>
        <Box sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: 1 }}>
          <Logo />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Light Gray Background
        </Typography>
        <Box sx={{ p: 3, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
          <Logo />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Dark Background
        </Typography>
        <Box sx={{ p: 3, backgroundColor: '#212121', borderRadius: 1 }}>
          <Logo />
        </Box>
      </Box>
    </Stack>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Default Size (172px × 24px)
        </Typography>
        <Logo />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Scaled Up (2x)
        </Typography>
        <Logo sx={{ transform: 'scale(2)', transformOrigin: 'left center' }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Scaled Down (0.5x)
        </Typography>
        <Logo sx={{ transform: 'scale(0.5)', transformOrigin: 'left center' }} />
      </Box>
    </Stack>
  ),
};
