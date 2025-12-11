/**
 * Divider Stories
 *
 * Storybook stories for the Divider component.
 * Displays all variants and orientations from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import { Box, Typography } from '@mui/material';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Divider component customized with design tokens. Supports horizontal and vertical orientations with multiple variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the divider',
    },
    variant: {
      control: 'select',
      options: ['fullWidth', 'inset', 'middle'],
      description: 'The variant of the divider',
    },
    flexItem: {
      control: 'boolean',
      description: 'If true, the divider will be a flex item',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

/**
 * Horizontal Divider (default)
 * This is the standard horizontal divider used to separate content vertically.
 */
export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'fullWidth',
  },
  render: (args) => (
    <Box sx={{ width: 220 }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Content above
      </Typography>
      <Divider {...args} />
      <Typography variant="body2" sx={{ mt: 2 }}>
        Content below
      </Typography>
    </Box>
  ),
};

/**
 * Vertical Divider
 * Used to separate content horizontally, typically in toolbars or button groups.
 */
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    flexItem: true,
  },
  render: (args) => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 220,
        gap: 2,
      }}
    >
      <Typography variant="body2">Left</Typography>
      <Divider {...args} />
      <Typography variant="body2">Right</Typography>
    </Box>
  ),
};

/**
 * Full Width Variant (default)
 * The divider spans the full width of its container.
 */
export const FullWidth: Story = {
  args: {
    variant: 'fullWidth',
  },
  render: (args) => (
    <Box sx={{ width: 220 }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Content above
      </Typography>
      <Divider {...args} />
      <Typography variant="body2" sx={{ mt: 2 }}>
        Content below
      </Typography>
    </Box>
  ),
};

/**
 * Inset Variant
 * The divider has left padding, typically used in lists with avatars or icons.
 */
export const Inset: Story = {
  args: {
    variant: 'inset',
  },
  render: (args) => (
    <Box sx={{ width: 220 }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Content above
      </Typography>
      <Divider {...args} />
      <Typography variant="body2" sx={{ mt: 2 }}>
        Content below
      </Typography>
    </Box>
  ),
};

/**
 * Middle Variant
 * The divider has padding on both sides, centering it in the container.
 */
export const Middle: Story = {
  args: {
    variant: 'middle',
  },
  render: (args) => (
    <Box sx={{ width: 220 }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Content above
      </Typography>
      <Divider {...args} />
      <Typography variant="body2" sx={{ mt: 2 }}>
        Content below
      </Typography>
    </Box>
  ),
};

/**
 * Vertical Middle Variant
 * A vertical divider with padding on top and bottom.
 */
export const VerticalMiddle: Story = {
  args: {
    orientation: 'vertical',
    variant: 'middle',
    flexItem: true,
  },
  render: (args) => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 220,
        gap: 2,
      }}
    >
      <Typography variant="body2">Left</Typography>
      <Divider {...args} />
      <Typography variant="body2">Right</Typography>
    </Box>
  ),
};

/**
 * In Lists
 * Example of using dividers in a list to separate items.
 */
export const InList: Story = {
  render: () => (
    <Box
      sx={{
        width: 220,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="body2">Item 1</Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography variant="body2">Item 2</Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography variant="body2">Item 3</Typography>
      </Box>
    </Box>
  ),
};

/**
 * With Text
 * Divider with text content in the middle.
 */
export const WithText: Story = {
  render: () => (
    <Box sx={{ width: 220 }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Content above
      </Typography>
      <Divider>
        <Typography variant="caption" sx={{ px: 1 }}>
          OR
        </Typography>
      </Divider>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Content below
      </Typography>
    </Box>
  ),
};

/**
 * In Toolbar
 * Example of vertical dividers in a toolbar-like interface.
 */
export const InToolbar: Story = {
  render: () => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        p: 1,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        width: 'fit-content',
      }}
    >
      <Typography variant="body2">Bold</Typography>
      <Typography variant="body2">Italic</Typography>
      <Typography variant="body2">Underline</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography variant="body2">Align Left</Typography>
      <Typography variant="body2">Align Center</Typography>
      <Typography variant="body2">Align Right</Typography>
    </Box>
  ),
};
