/**
 * Stepper Stories
 *
 * Storybook stories for the Stepper component.
 * Displays all variants, orientations, and states from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Stepper component customized with design tokens. Supports horizontal and vertical orientations, optional text, and text alignment.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the stepper',
    },
    textAlignment: {
      control: 'select',
      options: ['left', 'center'],
      description: 'The alignment of the text labels',
    },
    showOptional: {
      control: 'boolean',
      description: 'Whether to show optional text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

// Default story
export const Default: Story = {
  args: {
    steps: [
      { label: 'Step title', completed: true },
      { label: 'Step title', active: true },
      { label: 'Step title' },
    ],
    orientation: 'horizontal',
    textAlignment: 'left',
    showOptional: false,
  },
};

// Horizontal with optional text
export const HorizontalWithOptional: Story = {
  args: {
    steps: [
      { label: 'Step title', optional: 'Optional', completed: true },
      { label: 'Step title', optional: 'Optional', active: true },
      { label: 'Step title', optional: 'Optional' },
    ],
    orientation: 'horizontal',
    textAlignment: 'left',
    showOptional: true,
  },
};

// Horizontal centered text
export const HorizontalCentered: Story = {
  args: {
    steps: [
      { label: 'Step title', completed: true },
      { label: 'Step title', active: true },
      { label: 'Step title' },
    ],
    orientation: 'horizontal',
    textAlignment: 'center',
    showOptional: false,
  },
};

// Horizontal centered with optional
export const HorizontalCenteredWithOptional: Story = {
  args: {
    steps: [
      { label: 'Step title', optional: 'Optional', completed: true },
      { label: 'Step title', optional: 'Optional', active: true },
      { label: 'Step title', optional: 'Optional' },
    ],
    orientation: 'horizontal',
    textAlignment: 'center',
    showOptional: true,
  },
};

// Vertical
export const Vertical: Story = {
  args: {
    steps: [
      { label: 'Step title', completed: true },
      { label: 'Step title', active: true },
      { label: 'Step title' },
    ],
    orientation: 'vertical',
    textAlignment: 'left',
    showOptional: false,
  },
  parameters: {
    layout: 'padded',
  },
};

// Vertical with optional text
export const VerticalWithOptional: Story = {
  args: {
    steps: [
      { label: 'Step title', optional: 'Optional', completed: true },
      { label: 'Step title', optional: 'Optional', active: true },
      { label: 'Step title', optional: 'Optional' },
    ],
    orientation: 'vertical',
    textAlignment: 'left',
    showOptional: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// Vertical centered
export const VerticalCentered: Story = {
  args: {
    steps: [
      { label: 'Step title', completed: true },
      { label: 'Step title', active: true },
      { label: 'Step title' },
    ],
    orientation: 'vertical',
    textAlignment: 'center',
    showOptional: false,
  },
  parameters: {
    layout: 'padded',
  },
};

// Vertical centered with optional
export const VerticalCenteredWithOptional: Story = {
  args: {
    steps: [
      { label: 'Step title', optional: 'Optional', completed: true },
      { label: 'Step title', optional: 'Optional', active: true },
      { label: 'Step title', optional: 'Optional' },
    ],
    orientation: 'vertical',
    textAlignment: 'center',
    showOptional: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1200 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Stepper Component Showcase
      </Typography>

      {/* Horizontal Steppers */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Horizontal Orientation
        </Typography>
        <Stack spacing={4}>
          {/* Horizontal Left Aligned */}
          <Box>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Left Aligned
            </Typography>
            <Stepper
              steps={[
                { label: 'Step title', completed: true },
                { label: 'Step title', active: true },
                { label: 'Step title' },
              ]}
              orientation="horizontal"
              textAlignment="left"
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Left Aligned with Optional
            </Typography>
            <Stepper
              steps={[
                { label: 'Step title', optional: 'Optional', completed: true },
                { label: 'Step title', optional: 'Optional', active: true },
                { label: 'Step title', optional: 'Optional' },
              ]}
              orientation="horizontal"
              textAlignment="left"
              showOptional={true}
            />
          </Box>
          {/* Horizontal Center Aligned */}
          <Box>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Center Aligned
            </Typography>
            <Stepper
              steps={[
                { label: 'Step title', completed: true },
                { label: 'Step title', active: true },
                { label: 'Step title' },
              ]}
              orientation="horizontal"
              textAlignment="center"
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Center Aligned with Optional
            </Typography>
            <Stepper
              steps={[
                { label: 'Step title', optional: 'Optional', completed: true },
                { label: 'Step title', optional: 'Optional', active: true },
                { label: 'Step title', optional: 'Optional' },
              ]}
              orientation="horizontal"
              textAlignment="center"
              showOptional={true}
            />
          </Box>
        </Stack>
      </Box>

      {/* Vertical Steppers */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Vertical Orientation
        </Typography>
        <Stack spacing={4} direction="row" flexWrap="wrap">
          <Box sx={{ width: '45%', minWidth: 300 }}>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Left Aligned
            </Typography>
            <Stepper
              steps={[
                { label: 'Step title', completed: true },
                { label: 'Step title', active: true },
                { label: 'Step title' },
              ]}
              orientation="vertical"
              textAlignment="left"
            />
          </Box>
          <Box sx={{ width: '45%', minWidth: 300 }}>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Left Aligned with Optional
            </Typography>
            <Stepper
              steps={[
                { label: 'Step title', optional: 'Optional', completed: true },
                { label: 'Step title', optional: 'Optional', active: true },
                { label: 'Step title', optional: 'Optional' },
              ]}
              orientation="vertical"
              textAlignment="left"
              showOptional={true}
            />
          </Box>
          <Box sx={{ width: '45%', minWidth: 300 }}>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Center Aligned
            </Typography>
            <Stepper
              steps={[
                { label: 'Step title', completed: true },
                { label: 'Step title', active: true },
                { label: 'Step title' },
              ]}
              orientation="vertical"
              textAlignment="center"
            />
          </Box>
          <Box sx={{ width: '45%', minWidth: 300 }}>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
              Center Aligned with Optional
            </Typography>
            <Stepper
              steps={[
                { label: 'Step title', optional: 'Optional', completed: true },
                { label: 'Step title', optional: 'Optional', active: true },
                { label: 'Step title', optional: 'Optional' },
              ]}
              orientation="vertical"
              textAlignment="center"
              showOptional={true}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
