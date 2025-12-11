/**
 * Accordion Stories
 *
 * Storybook stories for the Accordion component.
 * Displays all variants and states from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { Typography } from '../Typography';
import { Box } from '@mui/material';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Accordion component customized with design tokens. Supports expanded/collapsed states, disabled state, and position variants for proper styling in groups.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    summary: {
      control: 'text',
      description: 'The content to display in the accordion summary (header)',
    },
    expanded: {
      control: 'boolean',
      description: 'If true, the accordion is expanded',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the accordion is disabled',
    },
    firstOfType: {
      control: 'boolean',
      description: 'If true, this is the first accordion in a group (rounded top corners)',
    },
    lastOfType: {
      control: 'boolean',
      description:
        'If true, this is the last accordion in a group (rounded bottom corners, no divider)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

/**
 * Default accordion (collapsed)
 */
export const Default: Story = {
  args: {
    summary: 'Typography',
    expanded: false,
    disabled: false,
    firstOfType: false,
    lastOfType: false,
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <Accordion {...args} />
    </Box>
  ),
};

/**
 * Expanded accordion
 */
export const Expanded: Story = {
  args: {
    summary: 'Typography',
    expanded: true,
    disabled: false,
    firstOfType: false,
    lastOfType: false,
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <Accordion {...args}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
      </Accordion>
    </Box>
  ),
};

/**
 * First of type (rounded top corners)
 */
export const FirstOfType: Story = {
  args: {
    summary: 'Typography',
    expanded: false,
    disabled: false,
    firstOfType: true,
    lastOfType: false,
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <Accordion {...args} />
    </Box>
  ),
};

/**
 * Last of type (rounded bottom corners, no divider)
 */
export const LastOfType: Story = {
  args: {
    summary: 'Typography',
    expanded: false,
    disabled: false,
    firstOfType: false,
    lastOfType: true,
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <Accordion {...args} />
    </Box>
  ),
};

/**
 * First of type and expanded
 */
export const FirstOfTypeExpanded: Story = {
  args: {
    summary: 'Typography',
    expanded: true,
    disabled: false,
    firstOfType: true,
    lastOfType: false,
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <Accordion {...args}>
        <Typography variant="body1">Content here</Typography>
      </Accordion>
    </Box>
  ),
};

/**
 * Last of type and expanded
 */
export const LastOfTypeExpanded: Story = {
  args: {
    summary: 'Typography',
    expanded: true,
    disabled: false,
    firstOfType: false,
    lastOfType: true,
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <Accordion {...args}>
        <Typography variant="body1">Content here</Typography>
      </Accordion>
    </Box>
  ),
};

/**
 * Disabled accordion
 */
export const Disabled: Story = {
  args: {
    summary: 'Typography',
    expanded: false,
    disabled: true,
    firstOfType: false,
    lastOfType: false,
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <Accordion {...args} />
    </Box>
  ),
};

/**
 * Disabled first of type
 */
export const DisabledFirstOfType: Story = {
  args: {
    summary: 'Typography',
    expanded: false,
    disabled: true,
    firstOfType: true,
    lastOfType: false,
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <Accordion {...args} />
    </Box>
  ),
};

/**
 * Disabled last of type
 */
export const DisabledLastOfType: Story = {
  args: {
    summary: 'Typography',
    expanded: false,
    disabled: true,
    firstOfType: false,
    lastOfType: true,
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <Accordion {...args} />
    </Box>
  ),
};

/**
 * With custom content
 */
export const WithCustomContent: Story = {
  args: {
    summary: 'Typography',
    expanded: true,
    disabled: false,
    firstOfType: false,
    lastOfType: false,
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <Accordion {...args}>
        <Box sx={{ p: 2 }}>
          <Typography variant="body1" gutterBottom>
            Custom content can be any React node
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is an example of custom content inside an accordion.
          </Typography>
        </Box>
      </Accordion>
    </Box>
  ),
};

/**
 * With instance slot (default placeholder)
 */
export const WithInstanceSlot: Story = {
  args: {
    summary: 'Typography',
    expanded: true,
    disabled: false,
    firstOfType: false,
    lastOfType: false,
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <Accordion {...args} />
    </Box>
  ),
};
