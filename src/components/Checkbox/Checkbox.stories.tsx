/**
 * Checkbox Stories
 *
 * Storybook stories for the Checkbox component.
 * Displays all variants, sizes, colors, and states from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Box, Stack, Typography, FormControlLabel, FormGroup } from '@mui/material';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Checkbox component customized with design tokens. Supports small, medium, and large sizes with multiple colors and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'The color of the checkbox',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'If true, the checkbox is checked',
    },
    indeterminate: {
      control: 'boolean',
      description: 'If true, the checkbox appears indeterminate',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the checkbox is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Default story
export const Default: Story = {
  args: {
    checked: false,
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
          Small
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <Checkbox size="small" />
          <Checkbox size="small" checked />
          <Checkbox size="small" indeterminate />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Medium (default)
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <Checkbox size="medium" />
          <Checkbox size="medium" checked />
          <Checkbox size="medium" indeterminate />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Large
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <Checkbox size="large" />
          <Checkbox size="large" checked />
          <Checkbox size="large" indeterminate />
        </Stack>
      </Box>
    </Stack>
  ),
};

// Colors showcase - Unchecked
export const ColorsUnchecked: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Checkbox color="default" />
      <Checkbox color="primary" />
      <Checkbox color="secondary" />
      <Checkbox color="error" />
      <Checkbox color="warning" />
      <Checkbox color="info" />
      <Checkbox color="success" />
    </Stack>
  ),
};

// Colors showcase - Checked
export const ColorsChecked: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Checkbox color="default" checked />
      <Checkbox color="primary" checked />
      <Checkbox color="secondary" checked />
      <Checkbox color="error" checked />
      <Checkbox color="warning" checked />
      <Checkbox color="info" checked />
      <Checkbox color="success" checked />
    </Stack>
  ),
};

// Colors showcase - Indeterminate
export const ColorsIndeterminate: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Checkbox color="default" indeterminate />
      <Checkbox color="primary" indeterminate />
      <Checkbox color="secondary" indeterminate />
      <Checkbox color="error" indeterminate />
      <Checkbox color="warning" indeterminate />
      <Checkbox color="info" indeterminate />
      <Checkbox color="success" indeterminate />
    </Stack>
  ),
};

// States showcase
export const States: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Unchecked
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Checkbox />
          <Checkbox color="secondary" />
          <Checkbox color="error" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Checked
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Checkbox checked />
          <Checkbox checked color="secondary" />
          <Checkbox checked color="error" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Indeterminate
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Checkbox indeterminate />
          <Checkbox indeterminate color="secondary" />
          <Checkbox indeterminate color="error" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Disabled
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Checkbox disabled />
          <Checkbox disabled checked />
          <Checkbox disabled indeterminate />
        </Stack>
      </Box>
    </Stack>
  ),
};

// With Labels
export const WithLabels: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Unchecked" />
      <FormControlLabel control={<Checkbox checked />} label="Checked" />
      <FormControlLabel control={<Checkbox indeterminate />} label="Indeterminate" />
      <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
      <FormControlLabel control={<Checkbox disabled checked />} label="Disabled Checked" />
    </FormGroup>
  ),
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1400 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Checkbox Component Showcase
      </Typography>

      {/* Medium Size - Unchecked */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Medium Size - Unchecked
        </Typography>
        <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="default" />
            <Typography variant="caption">Default</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="primary" />
            <Typography variant="caption">Primary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="secondary" />
            <Typography variant="caption">Secondary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="error" />
            <Typography variant="caption">Error</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="warning" />
            <Typography variant="caption">Warning</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="info" />
            <Typography variant="caption">Info</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="success" />
            <Typography variant="caption">Success</Typography>
          </Box>
        </Stack>
      </Box>

      {/* Medium Size - Checked */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Medium Size - Checked
        </Typography>
        <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="default" checked />
            <Typography variant="caption">Default</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="primary" checked />
            <Typography variant="caption">Primary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="secondary" checked />
            <Typography variant="caption">Secondary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="error" checked />
            <Typography variant="caption">Error</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="warning" checked />
            <Typography variant="caption">Warning</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="info" checked />
            <Typography variant="caption">Info</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="success" checked />
            <Typography variant="caption">Success</Typography>
          </Box>
        </Stack>
      </Box>

      {/* Medium Size - Indeterminate */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Medium Size - Indeterminate
        </Typography>
        <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="default" indeterminate />
            <Typography variant="caption">Default</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="primary" indeterminate />
            <Typography variant="caption">Primary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="secondary" indeterminate />
            <Typography variant="caption">Secondary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="error" indeterminate />
            <Typography variant="caption">Error</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="warning" indeterminate />
            <Typography variant="caption">Warning</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="info" indeterminate />
            <Typography variant="caption">Info</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Checkbox size="medium" color="success" indeterminate />
            <Typography variant="caption">Success</Typography>
          </Box>
        </Stack>
      </Box>

      {/* Small Size */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Small Size
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Unchecked
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Checkbox size="small" color="default" />
              <Checkbox size="small" color="primary" />
              <Checkbox size="small" color="secondary" />
              <Checkbox size="small" color="error" />
              <Checkbox size="small" color="warning" />
              <Checkbox size="small" color="info" />
              <Checkbox size="small" color="success" />
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Checked
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Checkbox size="small" color="default" checked />
              <Checkbox size="small" color="primary" checked />
              <Checkbox size="small" color="secondary" checked />
              <Checkbox size="small" color="error" checked />
              <Checkbox size="small" color="warning" checked />
              <Checkbox size="small" color="info" checked />
              <Checkbox size="small" color="success" checked />
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Indeterminate
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Checkbox size="small" color="default" indeterminate />
              <Checkbox size="small" color="primary" indeterminate />
              <Checkbox size="small" color="secondary" indeterminate />
              <Checkbox size="small" color="error" indeterminate />
              <Checkbox size="small" color="warning" indeterminate />
              <Checkbox size="small" color="info" indeterminate />
              <Checkbox size="small" color="success" indeterminate />
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Large Size */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Large Size
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Unchecked
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Checkbox size="large" color="default" />
              <Checkbox size="large" color="primary" />
              <Checkbox size="large" color="secondary" />
              <Checkbox size="large" color="error" />
              <Checkbox size="large" color="warning" />
              <Checkbox size="large" color="info" />
              <Checkbox size="large" color="success" />
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Checked
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Checkbox size="large" color="default" checked />
              <Checkbox size="large" color="primary" checked />
              <Checkbox size="large" color="secondary" checked />
              <Checkbox size="large" color="error" checked />
              <Checkbox size="large" color="warning" checked />
              <Checkbox size="large" color="info" checked />
              <Checkbox size="large" color="success" checked />
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Indeterminate
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Checkbox size="large" color="default" indeterminate />
              <Checkbox size="large" color="primary" indeterminate />
              <Checkbox size="large" color="secondary" indeterminate />
              <Checkbox size="large" color="error" indeterminate />
              <Checkbox size="large" color="warning" indeterminate />
              <Checkbox size="large" color="info" indeterminate />
              <Checkbox size="large" color="success" indeterminate />
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Disabled States */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Disabled States
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Unchecked Disabled
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Checkbox size="medium" disabled />
              <Checkbox size="small" disabled />
              <Checkbox size="large" disabled />
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Checked Disabled
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Checkbox size="medium" checked disabled />
              <Checkbox size="small" checked disabled />
              <Checkbox size="large" checked disabled />
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
