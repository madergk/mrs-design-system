/**
 * Tooltip Stories
 *
 * Storybook stories for the Tooltip component.
 * Displays all arrow directions and placements from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Box, Stack, Button, Typography } from '@mui/material';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Tooltip component customized with design tokens. Supports arrow directions and various placements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The content of the tooltip',
    },
    arrow: {
      control: 'boolean',
      description: 'If true, adds an arrow pointing to the target element',
    },
    placement: {
      control: 'select',
      options: [
        'bottom',
        'bottom-end',
        'bottom-start',
        'left',
        'left-end',
        'left-start',
        'right',
        'right-end',
        'right-start',
        'top',
        'top-end',
        'top-start',
      ],
      description: 'The placement of the tooltip',
    },
    disableHoverListener: {
      control: 'boolean',
      description: 'If true, the tooltip will not respond to hover events',
    },
    disableFocusListener: {
      control: 'boolean',
      description: 'If true, the tooltip will not respond to focus events',
    },
    disableTouchListener: {
      control: 'boolean',
      description: 'If true, the tooltip will not respond to touch events',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// Default story
export const Default: Story = {
  args: {
    title: 'My Tooltip',
    arrow: false,
    placement: 'bottom',
    children: <Button>Hover me</Button>,
  },
};

// Arrow directions showcase (matching Figma design)
export const ArrowDirections: Story = {
  render: () => (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Tooltip Arrow Directions
      </Typography>
      <Stack spacing={3} alignItems="center">
        {/* No arrow */}
        <Tooltip title="My Tooltip" arrow={false} placement="bottom">
          <Button>No Arrow</Button>
        </Tooltip>

        {/* Arrow pointing down (bottom) */}
        <Tooltip title="My Tooltip" arrow placement="top">
          <Button>Arrow Down (Top)</Button>
        </Tooltip>

        {/* Arrow pointing up (top) */}
        <Tooltip title="My Tooltip" arrow placement="bottom">
          <Button>Arrow Up (Bottom)</Button>
        </Tooltip>

        {/* Arrow pointing right (left side) */}
        <Tooltip title="My Tooltip" arrow placement="left">
          <Button>Arrow Right (Left)</Button>
        </Tooltip>

        {/* Arrow pointing left (right side) */}
        <Tooltip title="My Tooltip" arrow placement="right">
          <Button>Arrow Left (Right)</Button>
        </Tooltip>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// All placements showcase
export const Placements: Story = {
  render: () => (
    <Box sx={{ p: 4, width: '100%', maxWidth: 800 }}>
      <Typography variant="h6" sx={{ mb: 4, textAlign: 'center' }}>
        Tooltip Placements
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        <Tooltip title="top-start" placement="top-start" arrow>
          <Button>top-start</Button>
        </Tooltip>
        <Tooltip title="top" placement="top" arrow>
          <Button>top</Button>
        </Tooltip>
        <Tooltip title="top-end" placement="top-end" arrow>
          <Button>top-end</Button>
        </Tooltip>

        <Tooltip title="left-start" placement="left-start" arrow>
          <Button>left-start</Button>
        </Tooltip>
        <Box />
        <Tooltip title="right-start" placement="right-start" arrow>
          <Button>right-start</Button>
        </Tooltip>

        <Tooltip title="left" placement="left" arrow>
          <Button>left</Button>
        </Tooltip>
        <Box />
        <Tooltip title="right" placement="right" arrow>
          <Button>right</Button>
        </Tooltip>

        <Tooltip title="left-end" placement="left-end" arrow>
          <Button>left-end</Button>
        </Tooltip>
        <Box />
        <Tooltip title="right-end" placement="right-end" arrow>
          <Button>right-end</Button>
        </Tooltip>

        <Tooltip title="bottom-start" placement="bottom-start" arrow>
          <Button>bottom-start</Button>
        </Tooltip>
        <Tooltip title="bottom" placement="bottom" arrow>
          <Button>bottom</Button>
        </Tooltip>
        <Tooltip title="bottom-end" placement="bottom-end" arrow>
          <Button>bottom-end</Button>
        </Tooltip>
      </Box>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// With and without arrow comparison
export const WithWithoutArrow: Story = {
  render: () => (
    <Stack spacing={3} direction="row" sx={{ p: 4 }}>
      <Tooltip title="My Tooltip" arrow={false}>
        <Button>Without Arrow</Button>
      </Tooltip>
      <Tooltip title="My Tooltip" arrow>
        <Button>With Arrow</Button>
      </Tooltip>
    </Stack>
  ),
};

// Long text tooltip
export const LongText: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Tooltip
        title="This is a longer tooltip text that demonstrates how the tooltip handles multiple lines of content. It should wrap appropriately."
        arrow
      >
        <Button>Long Tooltip</Button>
      </Tooltip>
    </Box>
  ),
};

// Interactive tooltip
export const Interactive: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Tooltip
        title="This tooltip is interactive - you can hover over it without it disappearing"
        arrow
      >
        <Button>Interactive Tooltip</Button>
      </Tooltip>
    </Box>
  ),
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1200 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Tooltip Component Showcase
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Arrow Directions (Matching Figma Design)
        </Typography>
        <Stack spacing={3} alignItems="center">
          {/* No arrow */}
          <Tooltip title="My Tooltip" arrow={false} placement="bottom">
            <Button>No Arrow</Button>
          </Tooltip>

          {/* Arrow pointing down */}
          <Tooltip title="My Tooltip" arrow placement="top">
            <Button>Arrow Down</Button>
          </Tooltip>

          {/* Arrow pointing up */}
          <Tooltip title="My Tooltip" arrow placement="bottom">
            <Button>Arrow Up</Button>
          </Tooltip>

          {/* Arrow pointing right */}
          <Tooltip title="My Tooltip" arrow placement="left">
            <Button>Arrow Right</Button>
          </Tooltip>

          {/* Arrow pointing left */}
          <Tooltip title="My Tooltip" arrow placement="right">
            <Button>Arrow Left</Button>
          </Tooltip>
        </Stack>
      </Box>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
