/**
 * Switch Stories
 *
 * Storybook stories for the Switch component.
 * Displays all variants, sizes, colors, and states from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Switch } from './Switch';
import { Box, Stack, Typography, FormControlLabel, FormGroup } from '@mui/material';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Switch component customized with design tokens. Supports small and medium sizes with multiple colors and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'The color of the switch',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the switch',
    },
    checked: {
      control: 'boolean',
      description: 'If true, the switch is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the switch is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

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
          <Switch size="small" />
          <Switch size="small" checked />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Medium (default)
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <Switch size="medium" />
          <Switch size="medium" checked />
        </Stack>
      </Box>
    </Stack>
  ),
};

// Colors showcase - Unchecked
export const ColorsUnchecked: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Switch color="default" />
      <Switch color="primary" />
      <Switch color="secondary" />
      <Switch color="error" />
      <Switch color="warning" />
      <Switch color="info" />
      <Switch color="success" />
    </Stack>
  ),
};

// Colors showcase - Checked
export const ColorsChecked: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Switch color="default" checked />
      <Switch color="primary" checked />
      <Switch color="secondary" checked />
      <Switch color="error" checked />
      <Switch color="warning" checked />
      <Switch color="info" checked />
      <Switch color="success" checked />
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
          <Switch />
          <Switch color="secondary" />
          <Switch color="error" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Checked
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Switch checked />
          <Switch checked color="secondary" />
          <Switch checked color="error" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Disabled
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Switch disabled />
          <Switch disabled checked />
        </Stack>
      </Box>
    </Stack>
  ),
};

// With Labels
export const WithLabels: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Switch />} label="Unchecked" />
      <FormControlLabel control={<Switch checked />} label="Checked" />
      <FormControlLabel control={<Switch disabled />} label="Disabled" />
      <FormControlLabel control={<Switch disabled checked />} label="Disabled Checked" />
    </FormGroup>
  ),
};

// Interactive example
function InteractiveSwitchExample() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={handleChange} />}
      label={checked ? 'On' : 'Off'}
    />
  );
}

export const Interactive: Story = {
  render: () => <InteractiveSwitchExample />,
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1400 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Switch Component Showcase
      </Typography>

      {/* Medium Size - Unchecked */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Medium Size - Unchecked
        </Typography>
        <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Switch size="medium" color="default" />
            <Typography variant="caption">Default</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Switch size="medium" color="primary" />
            <Typography variant="caption">Primary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Switch size="medium" color="secondary" />
            <Typography variant="caption">Secondary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Switch size="medium" color="error" />
            <Typography variant="caption">Error</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Switch size="medium" color="warning" />
            <Typography variant="caption">Warning</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Switch size="medium" color="info" />
            <Typography variant="caption">Info</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Switch size="medium" color="success" />
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
            <Switch size="medium" color="default" checked />
            <Typography variant="caption">Default</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Switch size="medium" color="primary" checked />
            <Typography variant="caption">Primary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Switch size="medium" color="secondary" checked />
            <Typography variant="caption">Secondary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Switch size="medium" color="error" checked />
            <Typography variant="caption">Error</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Switch size="medium" color="warning" checked />
            <Typography variant="caption">Warning</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Switch size="medium" color="info" checked />
            <Typography variant="caption">Info</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Switch size="medium" color="success" checked />
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
              <Switch size="small" color="default" />
              <Switch size="small" color="primary" />
              <Switch size="small" color="secondary" />
              <Switch size="small" color="error" />
              <Switch size="small" color="warning" />
              <Switch size="small" color="info" />
              <Switch size="small" color="success" />
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Checked
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Switch size="small" color="default" checked />
              <Switch size="small" color="primary" checked />
              <Switch size="small" color="secondary" checked />
              <Switch size="small" color="error" checked />
              <Switch size="small" color="warning" checked />
              <Switch size="small" color="info" checked />
              <Switch size="small" color="success" checked />
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
              <Switch size="medium" disabled />
              <Switch size="small" disabled />
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Checked Disabled
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Switch size="medium" checked disabled />
              <Switch size="small" checked disabled />
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
