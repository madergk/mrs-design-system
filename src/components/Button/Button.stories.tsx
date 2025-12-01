/**
 * Button Stories
 *
 * Storybook stories for the Button component.
 * Displays all variants, sizes, colors, and states from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Button component customized with design tokens. Supports contained, outlined, and text variants with multiple sizes and colors.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'The variant of the button',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'inherit'],
      description: 'The color of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the button will be disabled',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the button will take up the full width of its container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default story
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
  },
};

// Variants showcase
export const Variants: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Button variant="contained" color="primary">
        Contained
      </Button>
      <Button variant="outlined" color="primary">
        Outlined
      </Button>
      <Button variant="text" color="primary">
        Text
      </Button>
    </Stack>
  ),
};

// Colors showcase
export const Colors: Story = {
  args: {
    disabled: false,
  },

  render: () => (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
        <Typography variant="body2" sx={{ width: '100%' }}>
          Contained
        </Typography>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="inherit">
          Inherit
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
        <Typography variant="body2" sx={{ width: '100%' }}>
          Outlined
        </Typography>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="inherit">
          Inherit
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
        <Typography variant="body2" sx={{ width: '100%' }}>
          Text
        </Typography>
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="text" color="inherit">
          Inherit
        </Button>
      </Stack>
    </Stack>
  ),
};

// Sizes showcase
export const Sizes: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
      <Button size="small" variant="contained" color="primary">
        Small
      </Button>
      <Button size="medium" variant="contained" color="primary">
        Medium
      </Button>
      <Button size="large" variant="contained" color="primary">
        Large
      </Button>
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
        <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
          <Button variant="contained" color="primary">
            Enabled
          </Button>
          <Button variant="outlined" color="primary">
            Enabled
          </Button>
          <Button variant="text" color="primary">
            Enabled
          </Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Disabled
        </Typography>
        <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
          <Button variant="contained" color="primary" disabled>
            Disabled
          </Button>
          <Button variant="outlined" color="primary" disabled>
            Disabled
          </Button>
          <Button variant="text" color="primary" disabled>
            Disabled
          </Button>
        </Stack>
      </Box>
    </Stack>
  ),
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1200 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Button Component Showcase
      </Typography>

      {/* Contained Variant */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Contained Variant
        </Typography>
        <Stack spacing={3}>
          {/* Large */}
          <Box>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Large
            </Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
              <Button size="large" variant="contained" color="primary">
                Primary
              </Button>
              <Button size="large" variant="contained" color="secondary">
                Secondary
              </Button>
              <Button size="large" variant="contained" color="error">
                Error
              </Button>
              <Button size="large" variant="contained" color="inherit">
                Inherit
              </Button>
              <Button size="large" variant="contained" color="primary" disabled>
                Disabled
              </Button>
            </Stack>
          </Box>
          {/* Medium */}
          <Box>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Medium
            </Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
              <Button size="medium" variant="contained" color="primary">
                Primary
              </Button>
              <Button size="medium" variant="contained" color="secondary">
                Secondary
              </Button>
              <Button size="medium" variant="contained" color="error">
                Error
              </Button>
              <Button size="medium" variant="contained" color="inherit">
                Inherit
              </Button>
              <Button size="medium" variant="contained" color="primary" disabled>
                Disabled
              </Button>
            </Stack>
          </Box>
          {/* Small */}
          <Box>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Small
            </Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
              <Button size="small" variant="contained" color="primary">
                Primary
              </Button>
              <Button size="small" variant="contained" color="secondary">
                Secondary
              </Button>
              <Button size="small" variant="contained" color="error">
                Error
              </Button>
              <Button size="small" variant="contained" color="inherit">
                Inherit
              </Button>
              <Button size="small" variant="contained" color="primary" disabled>
                Disabled
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Outlined Variant */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Outlined Variant
        </Typography>
        <Stack spacing={3}>
          {/* Large */}
          <Box>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Large
            </Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
              <Button size="large" variant="outlined" color="primary">
                Primary
              </Button>
              <Button size="large" variant="outlined" color="inherit">
                Inherit
              </Button>
              <Button size="large" variant="outlined" color="error">
                Error
              </Button>
              <Button size="large" variant="outlined" color="primary" disabled>
                Disabled
              </Button>
            </Stack>
          </Box>
          {/* Medium */}
          <Box>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Medium
            </Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
              <Button size="medium" variant="outlined" color="primary">
                Primary
              </Button>
              <Button size="medium" variant="outlined" color="inherit">
                Inherit
              </Button>
              <Button size="medium" variant="outlined" color="error">
                Error
              </Button>
              <Button size="medium" variant="outlined" color="primary" disabled>
                Disabled
              </Button>
            </Stack>
          </Box>
          {/* Small */}
          <Box>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Small
            </Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
              <Button size="small" variant="outlined" color="primary">
                Primary
              </Button>
              <Button size="small" variant="outlined" color="inherit">
                Inherit
              </Button>
              <Button size="small" variant="outlined" color="error">
                Error
              </Button>
              <Button size="small" variant="outlined" color="primary" disabled>
                Disabled
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Text Variant */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Text Variant
        </Typography>
        <Stack spacing={3}>
          {/* Large */}
          <Box>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Large
            </Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
              <Button size="large" variant="text" color="primary">
                Primary
              </Button>
              <Button size="large" variant="text" color="inherit">
                Inherit
              </Button>
              <Button size="large" variant="text" color="error">
                Error
              </Button>
              <Button size="large" variant="text" color="primary" disabled>
                Disabled
              </Button>
            </Stack>
          </Box>
          {/* Medium */}
          <Box>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Medium
            </Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
              <Button size="medium" variant="text" color="primary">
                Primary
              </Button>
              <Button size="medium" variant="text" color="inherit">
                Inherit
              </Button>
              <Button size="medium" variant="text" color="error">
                Error
              </Button>
              <Button size="medium" variant="text" color="primary" disabled>
                Disabled
              </Button>
            </Stack>
          </Box>
          {/* Small */}
          <Box>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Small
            </Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
              <Button size="small" variant="text" color="primary">
                Primary
              </Button>
              <Button size="small" variant="text" color="inherit">
                Inherit
              </Button>
              <Button size="small" variant="text" color="error">
                Error
              </Button>
              <Button size="small" variant="text" color="primary" disabled>
                Disabled
              </Button>
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
