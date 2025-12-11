/**
 * TableRow Stories
 *
 * Storybook stories for the TableRow component.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { TableRow } from './TableRow';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI TableRow component customized with design tokens. Supports hover, selected states, checkbox, and bottom divider.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    small: {
      control: 'boolean',
      description: 'Whether this is a small size variant',
    },
    checkbox: {
      control: 'boolean',
      description: 'Whether to show a checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    hover: {
      control: 'boolean',
      description: 'Whether to show hover state',
    },
    selected: {
      control: 'boolean',
      description: 'Whether this row is selected',
    },
    divider: {
      control: 'boolean',
      description: 'Whether to show bottom divider',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableRow>;

// Default story
export const Default: Story = {
  args: {
    cells: ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
    columns: 5,
  },
};

// With checkbox
export const WithCheckbox: Story = {
  args: {
    cells: ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
    columns: 5,
    checkbox: true,
    checked: false,
  },
};

// Selected state
export const Selected: Story = {
  args: {
    cells: ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
    columns: 5,
    selected: true,
  },
};

// Small variant
export const Small: Story = {
  args: {
    cells: ['Cell 1', 'Cell 2', 'Cell 3'],
    columns: 3,
    small: true,
  },
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Regular Row
        </Typography>
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <TableRow cells={['Cell 1', 'Cell 2', 'Cell 3']} columns={3} divider />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Small Row
        </Typography>
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <TableRow cells={['Cell 1', 'Cell 2', 'Cell 3']} columns={3} small divider />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          With Checkbox
        </Typography>
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <TableRow
            cells={['Cell 1', 'Cell 2', 'Cell 3']}
            columns={3}
            checkbox
            checked={false}
            divider
          />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Selected Row
        </Typography>
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <TableRow cells={['Cell 1', 'Cell 2', 'Cell 3']} columns={3} selected divider />
        </Box>
      </Box>
    </Stack>
  ),
};
