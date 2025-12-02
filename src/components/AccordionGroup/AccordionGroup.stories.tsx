/**
 * AccordionGroup Stories
 *
 * Storybook stories for the AccordionGroup component.
 * Displays accordion groups with various configurations.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { AccordionGroup } from './AccordionGroup';
import { Typography } from '../Typography';
import { Box } from '@mui/material';

const meta: Meta<typeof AccordionGroup> = {
  title: 'Components/AccordionGroup',
  component: AccordionGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A container component that manages multiple Accordion components. Handles first-of-type and last-of-type styling automatically.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    exclusive: {
      control: 'boolean',
      description: 'If true, only one accordion can be expanded at a time',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccordionGroup>;

/**
 * Default accordion group (from Figma design)
 */
export const Default: Story = {
  args: {
    items: [
      {
        id: '1',
        summary: 'Typography',
      },
      {
        id: '2',
        summary: 'Typography',
      },
      {
        id: '3',
        summary: 'Typography',
      },
    ],
    exclusive: false,
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <AccordionGroup {...args} />
    </Box>
  ),
};

/**
 * Accordion group with content
 */
export const WithContent: Story = {
  args: {
    items: [
      {
        id: '1',
        summary: 'General Settings',
        content: (
          <Typography variant="body1">
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        ),
      },
      {
        id: '2',
        summary: 'Users',
        content: (
          <Typography variant="body1">
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit.
          </Typography>
        ),
      },
      {
        id: '3',
        summary: 'Advanced Settings',
        content: (
          <Typography variant="body1">
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue.
          </Typography>
        ),
      },
    ],
    exclusive: false,
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <AccordionGroup {...args} />
    </Box>
  ),
};

/**
 * Exclusive accordion group (only one expanded at a time)
 */
export const Exclusive: Story = {
  args: {
    items: [
      {
        id: '1',
        summary: 'Item 1',
        content: <Typography variant="body1">Content for item 1</Typography>,
      },
      {
        id: '2',
        summary: 'Item 2',
        content: <Typography variant="body1">Content for item 2</Typography>,
      },
      {
        id: '3',
        summary: 'Item 3',
        content: <Typography variant="body1">Content for item 3</Typography>,
      },
    ],
    exclusive: true,
    defaultExpanded: '1',
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <AccordionGroup {...args} />
    </Box>
  ),
};

/**
 * Accordion group with disabled item
 */
export const WithDisabled: Story = {
  args: {
    items: [
      {
        id: '1',
        summary: 'Enabled Item',
        content: <Typography variant="body1">This item is enabled</Typography>,
      },
      {
        id: '2',
        summary: 'Disabled Item',
        disabled: true,
      },
      {
        id: '3',
        summary: 'Another Enabled Item',
        content: <Typography variant="body1">This item is also enabled</Typography>,
      },
    ],
    exclusive: false,
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <AccordionGroup {...args} />
    </Box>
  ),
};

/**
 * Accordion group with default expanded
 */
export const WithDefaultExpanded: Story = {
  args: {
    items: [
      {
        id: '1',
        summary: 'Collapsed Item',
        content: <Typography variant="body1">This item is collapsed by default</Typography>,
      },
      {
        id: '2',
        summary: 'Expanded Item',
        defaultExpanded: true,
        content: <Typography variant="body1">This item is expanded by default</Typography>,
      },
      {
        id: '3',
        summary: 'Another Collapsed Item',
        content: <Typography variant="body1">This item is also collapsed by default</Typography>,
      },
    ],
    exclusive: false,
    defaultExpanded: '2',
  },
  render: (args) => (
    <Box sx={{ width: 600 }}>
      <AccordionGroup {...args} />
    </Box>
  ),
};
