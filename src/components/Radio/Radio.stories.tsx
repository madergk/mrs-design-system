/**
 * Radio Stories
 *
 * Storybook stories for the Radio component.
 * Displays all variants, sizes, colors, and states from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Radio } from './Radio';
import {
  Box,
  Stack,
  Typography,
  FormControlLabel,
  FormGroup,
  RadioGroup,
  FormControl,
  FormLabel,
} from '@mui/material';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Radio component customized with design tokens. Supports small, medium, and large sizes with multiple colors and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'The color of the radio button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the radio button',
    },
    checked: {
      control: 'boolean',
      description: 'If true, the radio button is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the radio button is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

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
          <Radio size="small" />
          <Radio size="small" checked />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Medium (default)
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <Radio size="medium" />
          <Radio size="medium" checked />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Large
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <Radio size="large" />
          <Radio size="large" checked />
        </Stack>
      </Box>
    </Stack>
  ),
};

// Colors showcase - Unchecked
export const ColorsUnchecked: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Radio color="default" />
      <Radio color="primary" />
      <Radio color="secondary" />
      <Radio color="error" />
      <Radio color="warning" />
      <Radio color="info" />
      <Radio color="success" />
    </Stack>
  ),
};

// Colors showcase - Checked
export const ColorsChecked: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Radio color="default" checked />
      <Radio color="primary" checked />
      <Radio color="secondary" checked />
      <Radio color="error" checked />
      <Radio color="warning" checked />
      <Radio color="info" checked />
      <Radio color="success" checked />
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
          <Radio />
          <Radio color="secondary" />
          <Radio color="error" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Checked
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Radio checked />
          <Radio checked color="secondary" />
          <Radio checked color="error" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Disabled
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Radio disabled />
          <Radio disabled checked />
        </Stack>
      </Box>
    </Stack>
  ),
};

// With Labels
export const WithLabels: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Radio />} label="Unchecked" />
      <FormControlLabel control={<Radio checked />} label="Checked" />
      <FormControlLabel control={<Radio disabled />} label="Disabled" />
      <FormControlLabel control={<Radio disabled checked />} label="Disabled Checked" />
    </FormGroup>
  ),
};

// Radio Group example component
function RadioGroupExampleComponent() {
  const [value, setValue] = React.useState('option1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Options</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
      </RadioGroup>
    </FormControl>
  );
}

export const RadioGroupExample: Story = {
  render: () => <RadioGroupExampleComponent />,
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1400 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Radio Component Showcase
      </Typography>

      {/* Medium Size - Unchecked */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Medium Size - Unchecked
        </Typography>
        <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Radio size="medium" color="default" />
            <Typography variant="caption">Default</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Radio size="medium" color="primary" />
            <Typography variant="caption">Primary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Radio size="medium" color="secondary" />
            <Typography variant="caption">Secondary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Radio size="medium" color="error" />
            <Typography variant="caption">Error</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Radio size="medium" color="warning" />
            <Typography variant="caption">Warning</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Radio size="medium" color="info" />
            <Typography variant="caption">Info</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Radio size="medium" color="success" />
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
            <Radio size="medium" color="default" checked />
            <Typography variant="caption">Default</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Radio size="medium" color="primary" checked />
            <Typography variant="caption">Primary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Radio size="medium" color="secondary" checked />
            <Typography variant="caption">Secondary</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Radio size="medium" color="error" checked />
            <Typography variant="caption">Error</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Radio size="medium" color="warning" checked />
            <Typography variant="caption">Warning</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Radio size="medium" color="info" checked />
            <Typography variant="caption">Info</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Radio size="medium" color="success" checked />
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
              <Radio size="small" color="default" />
              <Radio size="small" color="primary" />
              <Radio size="small" color="secondary" />
              <Radio size="small" color="error" />
              <Radio size="small" color="warning" />
              <Radio size="small" color="info" />
              <Radio size="small" color="success" />
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Checked
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Radio size="small" color="default" checked />
              <Radio size="small" color="primary" checked />
              <Radio size="small" color="secondary" checked />
              <Radio size="small" color="error" checked />
              <Radio size="small" color="warning" checked />
              <Radio size="small" color="info" checked />
              <Radio size="small" color="success" checked />
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
              <Radio size="large" color="default" />
              <Radio size="large" color="primary" />
              <Radio size="large" color="secondary" />
              <Radio size="large" color="error" />
              <Radio size="large" color="warning" />
              <Radio size="large" color="info" />
              <Radio size="large" color="success" />
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Checked
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Radio size="large" color="default" checked />
              <Radio size="large" color="primary" checked />
              <Radio size="large" color="secondary" checked />
              <Radio size="large" color="error" checked />
              <Radio size="large" color="warning" checked />
              <Radio size="large" color="info" checked />
              <Radio size="large" color="success" checked />
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
              <Radio size="medium" disabled />
              <Radio size="small" disabled />
              <Radio size="large" disabled />
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Checked Disabled
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Radio size="medium" checked disabled />
              <Radio size="small" checked disabled />
              <Radio size="large" checked disabled />
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
