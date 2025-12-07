/**
 * TableHeadRow Stories
 *
 * Storybook stories for the TableHeadRow component.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { TableHeadRow } from './TableHeadRow';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof TableHeadRow> = {
  title: 'Components/TableHeadRow',
  component: TableHeadRow,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI TableHeadRow component customized with design tokens. Represents a header row in a table, composed of multiple TableHead components.',
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
type Story = StoryObj<typeof TableHeadRow>;

// Default story
export const Default: Story = {
  args: {
    labels: ['Name', 'Email', 'Role', 'Status', 'Actions'],
    columns: 5,
  },
};

// With checkbox
export const WithCheckbox: Story = {
  args: {
    labels: ['Name', 'Email', 'Role', 'Status', 'Actions'],
    columns: 5,
    checkbox: true,
    checked: false,
  },
};

// With sort
export const WithSort: Story = {
  args: {
    labels: ['Name', 'Email', 'Role', 'Status', 'Actions'],
    columns: 5,
    sortConfig: ['right', 'none', 'none', 'none', 'none'],
  },
};

// Small variant
export const Small: Story = {
  args: {
    labels: ['Name', 'Email', 'Role'],
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
          Regular Header Row
        </Typography>
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <TableHeadRow labels={['Name', 'Email', 'Role']} columns={3} divider />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Small Header Row
        </Typography>
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <TableHeadRow labels={['Name', 'Email', 'Role']} columns={3} small divider />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          With Checkbox
        </Typography>
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <TableHeadRow
            labels={['Name', 'Email', 'Role']}
            columns={3}
            checkbox
            checked={false}
            divider
          />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          With Sort Icons
        </Typography>
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <TableHeadRow
            labels={['Name', 'Email', 'Role']}
            columns={3}
            sortConfig={['right', 'none', 'none']}
            divider
          />
        </Box>
      </Box>
    </Stack>
  ),
};
