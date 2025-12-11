/**
 * Select Stories
 *
 * Storybook stories for the Select component.
 * Displays all variants, sizes, colors, and states from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import {
  Box,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
} from '@mui/material';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Select component customized with design tokens. Supports standard, filled, and outlined variants with small and medium sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'The color of the select',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the select',
    },
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'outlined'],
      description: 'The variant to use',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the select is disabled',
    },
    error: {
      control: 'boolean',
      description: 'If true, the select will indicate an error',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// Default story
export const Default: Story = {
  render: () => (
    <FormControl variant="outlined" sx={{ minWidth: 220 }}>
      <InputLabel id="select-default-label">Label</InputLabel>
      <Select labelId="select-default-label" label="Label" value="option1">
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </FormControl>
  ),
};

// Variants showcase
export const Variants: Story = {
  render: () => (
    <Stack spacing={4} direction="row" flexWrap="wrap" gap={4}>
      <FormControl variant="standard" sx={{ minWidth: 220 }}>
        <InputLabel id="select-standard-label">Label</InputLabel>
        <Select labelId="select-standard-label" label="Label" value="option1" variant="standard">
          <MenuItem value="option1">Value</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select>
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>
      <FormControl variant="filled" sx={{ minWidth: 220 }}>
        <InputLabel id="select-filled-label">Label</InputLabel>
        <Select labelId="select-filled-label" label="Label" value="option1" variant="filled">
          <MenuItem value="option1">Value</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select>
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: 220 }}>
        <InputLabel id="select-outlined-label">Label</InputLabel>
        <Select labelId="select-outlined-label" label="Label" value="option1" variant="outlined">
          <MenuItem value="option1">Value</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select>
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>
    </Stack>
  ),
};

// Sizes showcase
export const Sizes: Story = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Small
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <FormControl variant="standard" size="small" sx={{ minWidth: 220 }}>
            <InputLabel id="select-small-standard-label">Label</InputLabel>
            <Select
              labelId="select-small-standard-label"
              label="Label"
              value="option1"
              variant="standard"
              size="small"
            >
              <MenuItem value="option1">Value</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" size="small" sx={{ minWidth: 220 }}>
            <InputLabel id="select-small-filled-label">Label</InputLabel>
            <Select
              labelId="select-small-filled-label"
              label="Label"
              value="option1"
              variant="filled"
              size="small"
            >
              <MenuItem value="option1">Value</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" size="small" sx={{ minWidth: 220 }}>
            <InputLabel id="select-small-outlined-label">Label</InputLabel>
            <Select
              labelId="select-small-outlined-label"
              label="Label"
              value="option1"
              variant="outlined"
              size="small"
            >
              <MenuItem value="option1">Value</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Medium (default)
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <FormControl variant="standard" sx={{ minWidth: 220 }}>
            <InputLabel id="select-medium-standard-label">Label</InputLabel>
            <Select
              labelId="select-medium-standard-label"
              label="Label"
              value="option1"
              variant="standard"
            >
              <MenuItem value="option1">Value</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" sx={{ minWidth: 220 }}>
            <InputLabel id="select-medium-filled-label">Label</InputLabel>
            <Select
              labelId="select-medium-filled-label"
              label="Label"
              value="option1"
              variant="filled"
            >
              <MenuItem value="option1">Value</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ minWidth: 220 }}>
            <InputLabel id="select-medium-outlined-label">Label</InputLabel>
            <Select
              labelId="select-medium-outlined-label"
              label="Label"
              value="option1"
              variant="outlined"
            >
              <MenuItem value="option1">Value</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
    </Stack>
  ),
};

// States showcase
export const States: Story = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Enabled
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <FormControl variant="outlined" sx={{ minWidth: 220 }}>
            <InputLabel id="select-enabled-label">Label</InputLabel>
            <Select labelId="select-enabled-label" label="Label" value="option1">
              <MenuItem value="option1">Value</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Disabled
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <FormControl variant="standard" disabled sx={{ minWidth: 220 }}>
            <InputLabel id="select-disabled-standard-label">Label</InputLabel>
            <Select
              labelId="select-disabled-standard-label"
              label="Label"
              value="option1"
              variant="standard"
              disabled
            >
              <MenuItem value="option1">Value</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" disabled sx={{ minWidth: 220 }}>
            <InputLabel id="select-disabled-filled-label">Label</InputLabel>
            <Select
              labelId="select-disabled-filled-label"
              label="Label"
              value="option1"
              variant="filled"
              disabled
            >
              <MenuItem value="option1">Value</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" disabled sx={{ minWidth: 220 }}>
            <InputLabel id="select-disabled-outlined-label">Label</InputLabel>
            <Select
              labelId="select-disabled-outlined-label"
              label="Label"
              value="option1"
              variant="outlined"
              disabled
            >
              <MenuItem value="option1">Value</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Error
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <FormControl variant="standard" error sx={{ minWidth: 220 }}>
            <InputLabel id="select-error-standard-label">Label</InputLabel>
            <Select
              labelId="select-error-standard-label"
              label="Label"
              value="option1"
              variant="standard"
              error
            >
              <MenuItem value="option1">Value</MenuItem>
            </Select>
            <FormHelperText>Error message</FormHelperText>
          </FormControl>
          <FormControl variant="filled" error sx={{ minWidth: 220 }}>
            <InputLabel id="select-error-filled-label">Label</InputLabel>
            <Select
              labelId="select-error-filled-label"
              label="Label"
              value="option1"
              variant="filled"
              error
            >
              <MenuItem value="option1">Value</MenuItem>
            </Select>
            <FormHelperText>Error message</FormHelperText>
          </FormControl>
          <FormControl variant="outlined" error sx={{ minWidth: 220 }}>
            <InputLabel id="select-error-outlined-label">Label</InputLabel>
            <Select
              labelId="select-error-outlined-label"
              label="Label"
              value="option1"
              variant="outlined"
              error
            >
              <MenuItem value="option1">Value</MenuItem>
            </Select>
            <FormHelperText>Error message</FormHelperText>
          </FormControl>
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Empty (No Value)
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <FormControl variant="standard" sx={{ minWidth: 220 }}>
            <InputLabel id="select-empty-standard-label">Label</InputLabel>
            <Select
              labelId="select-empty-standard-label"
              label="Label"
              value=""
              variant="standard"
              displayEmpty
            >
              <MenuItem value="">
                <em>Placeholder</em>
              </MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" sx={{ minWidth: 220 }}>
            <InputLabel id="select-empty-filled-label">Label</InputLabel>
            <Select
              labelId="select-empty-filled-label"
              label="Label"
              value=""
              variant="filled"
              displayEmpty
            >
              <MenuItem value="">
                <em>Placeholder</em>
              </MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ minWidth: 220 }}>
            <InputLabel id="select-empty-outlined-label">Label</InputLabel>
            <Select
              labelId="select-empty-outlined-label"
              label="Label"
              value=""
              variant="outlined"
              displayEmpty
            >
              <MenuItem value="">
                <em>Placeholder</em>
              </MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
    </Stack>
  ),
};

// Colors showcase
export const Colors: Story = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Primary (default)
        </Typography>
        <FormControl variant="outlined" sx={{ minWidth: 220 }}>
          <InputLabel id="select-primary-label">Label</InputLabel>
          <Select labelId="select-primary-label" label="Label" value="option1" color="primary">
            <MenuItem value="option1">Value</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Secondary
        </Typography>
        <FormControl variant="outlined" sx={{ minWidth: 220 }}>
          <InputLabel id="select-secondary-label">Label</InputLabel>
          <Select labelId="select-secondary-label" label="Label" value="option1" color="secondary">
            <MenuItem value="option1">Value</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Error
        </Typography>
        <FormControl variant="outlined" error sx={{ minWidth: 220 }}>
          <InputLabel id="select-error-label">Label</InputLabel>
          <Select labelId="select-error-label" label="Label" value="option1" color="error" error>
            <MenuItem value="option1">Value</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Stack>
  ),
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1400 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Select Component Showcase
      </Typography>

      {/* Standard Variant - Medium Size */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Variant: Standard, Size: Medium
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Enabled, Has Value
            </Typography>
            <FormControl variant="standard" sx={{ minWidth: 220 }}>
              <InputLabel id="showcase-standard-enabled-value-label">Label</InputLabel>
              <Select
                labelId="showcase-standard-enabled-value-label"
                label="Label"
                value="option1"
                variant="standard"
              >
                <MenuItem value="option1">Value</MenuItem>
              </Select>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Enabled, No Value
            </Typography>
            <FormControl variant="standard" sx={{ minWidth: 220 }}>
              <InputLabel id="showcase-standard-enabled-empty-label">Label</InputLabel>
              <Select
                labelId="showcase-standard-enabled-empty-label"
                label="Label"
                value=""
                variant="standard"
                displayEmpty
              >
                <MenuItem value="">
                  <em>Placeholder</em>
                </MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
              </Select>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Disabled, Has Value
            </Typography>
            <FormControl variant="standard" disabled sx={{ minWidth: 220 }}>
              <InputLabel id="showcase-standard-disabled-value-label">Label</InputLabel>
              <Select
                labelId="showcase-standard-disabled-value-label"
                label="Label"
                value="option1"
                variant="standard"
                disabled
              >
                <MenuItem value="option1">Value</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Error, Has Value
            </Typography>
            <FormControl variant="standard" error sx={{ minWidth: 220 }}>
              <InputLabel id="showcase-standard-error-value-label">Label</InputLabel>
              <Select
                labelId="showcase-standard-error-value-label"
                label="Label"
                value="option1"
                variant="standard"
                error
              >
                <MenuItem value="option1">Value</MenuItem>
              </Select>
              <FormHelperText>Error message</FormHelperText>
            </FormControl>
          </Box>
        </Stack>
      </Box>

      {/* Filled Variant - Medium Size */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Variant: Filled, Size: Medium
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Enabled, Has Value
            </Typography>
            <FormControl variant="filled" sx={{ minWidth: 220 }}>
              <InputLabel id="showcase-filled-enabled-value-label">Label</InputLabel>
              <Select
                labelId="showcase-filled-enabled-value-label"
                label="Label"
                value="option1"
                variant="filled"
              >
                <MenuItem value="option1">Value</MenuItem>
              </Select>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Enabled, No Value
            </Typography>
            <FormControl variant="filled" sx={{ minWidth: 220 }}>
              <InputLabel id="showcase-filled-enabled-empty-label">Label</InputLabel>
              <Select
                labelId="showcase-filled-enabled-empty-label"
                label="Label"
                value=""
                variant="filled"
                displayEmpty
              >
                <MenuItem value="">
                  <em>Placeholder</em>
                </MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
              </Select>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Disabled, Has Value
            </Typography>
            <FormControl variant="filled" disabled sx={{ minWidth: 220 }}>
              <InputLabel id="showcase-filled-disabled-value-label">Label</InputLabel>
              <Select
                labelId="showcase-filled-disabled-value-label"
                label="Label"
                value="option1"
                variant="filled"
                disabled
              >
                <MenuItem value="option1">Value</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Error, Has Value
            </Typography>
            <FormControl variant="filled" error sx={{ minWidth: 220 }}>
              <InputLabel id="showcase-filled-error-value-label">Label</InputLabel>
              <Select
                labelId="showcase-filled-error-value-label"
                label="Label"
                value="option1"
                variant="filled"
                error
              >
                <MenuItem value="option1">Value</MenuItem>
              </Select>
              <FormHelperText>Error message</FormHelperText>
            </FormControl>
          </Box>
        </Stack>
      </Box>

      {/* Outlined Variant - Medium Size */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Variant: Outlined, Size: Medium
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Enabled, Has Value
            </Typography>
            <FormControl variant="outlined" sx={{ minWidth: 220 }}>
              <InputLabel id="showcase-outlined-enabled-value-label">Label</InputLabel>
              <Select
                labelId="showcase-outlined-enabled-value-label"
                label="Label"
                value="option1"
                variant="outlined"
              >
                <MenuItem value="option1">Value</MenuItem>
              </Select>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Enabled, No Value
            </Typography>
            <FormControl variant="outlined" sx={{ minWidth: 220 }}>
              <InputLabel id="showcase-outlined-enabled-empty-label">Label</InputLabel>
              <Select
                labelId="showcase-outlined-enabled-empty-label"
                label="Label"
                value=""
                variant="outlined"
                displayEmpty
              >
                <MenuItem value="">
                  <em>Placeholder</em>
                </MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
              </Select>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Disabled, Has Value
            </Typography>
            <FormControl variant="outlined" disabled sx={{ minWidth: 220 }}>
              <InputLabel id="showcase-outlined-disabled-value-label">Label</InputLabel>
              <Select
                labelId="showcase-outlined-disabled-value-label"
                label="Label"
                value="option1"
                variant="outlined"
                disabled
              >
                <MenuItem value="option1">Value</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Error, Has Value
            </Typography>
            <FormControl variant="outlined" error sx={{ minWidth: 220 }}>
              <InputLabel id="showcase-outlined-error-value-label">Label</InputLabel>
              <Select
                labelId="showcase-outlined-error-value-label"
                label="Label"
                value="option1"
                variant="outlined"
                error
              >
                <MenuItem value="option1">Value</MenuItem>
              </Select>
              <FormHelperText>Error message</FormHelperText>
            </FormControl>
          </Box>
        </Stack>
      </Box>

      {/* Small Size - All Variants */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Size: Small
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Standard Variant
            </Typography>
            <FormControl variant="standard" size="small" sx={{ minWidth: 220 }}>
              <InputLabel id="showcase-small-standard-label">Label</InputLabel>
              <Select
                labelId="showcase-small-standard-label"
                label="Label"
                value="option1"
                variant="standard"
                size="small"
              >
                <MenuItem value="option1">Value</MenuItem>
              </Select>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Filled Variant
            </Typography>
            <FormControl variant="filled" size="small" sx={{ minWidth: 220 }}>
              <InputLabel id="showcase-small-filled-label">Label</InputLabel>
              <Select
                labelId="showcase-small-filled-label"
                label="Label"
                value="option1"
                variant="filled"
                size="small"
              >
                <MenuItem value="option1">Value</MenuItem>
              </Select>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Outlined Variant
            </Typography>
            <FormControl variant="outlined" size="small" sx={{ minWidth: 220 }}>
              <InputLabel id="showcase-small-outlined-label">Label</InputLabel>
              <Select
                labelId="showcase-small-outlined-label"
                label="Label"
                value="option1"
                variant="outlined"
                size="small"
              >
                <MenuItem value="option1">Value</MenuItem>
              </Select>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
          </Box>
        </Stack>
      </Box>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
