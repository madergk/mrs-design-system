/**
 * TableCell Stories
 *
 * Storybook stories for the TableCell component.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './TableCell';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI TableCell component customized with design tokens. Supports small and regular sizes, optional checkbox, and optional secondary text.',
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
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

// Default story
export const Default: Story = {
  args: {
    children: 'Cell Content',
  },
};

// With checkbox
export const WithCheckbox: Story = {
  args: {
    children: 'Cell with Checkbox',
    checkbox: true,
    checked: false,
  },
};

// With secondary text
export const WithSecondaryText: Story = {
  args: {
    children: 'Main Text',
    secondaryText: 'Secondary text below',
  },
};

// Small variant
export const Small: Story = {
  args: {
    children: 'Small Cell',
    small: true,
  },
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Regular Cell
        </Typography>
        <Box sx={{ display: 'flex', border: '1px solid #e0e0e0' }}>
          <TableCell>Regular Cell</TableCell>
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Small Cell
        </Typography>
        <Box sx={{ display: 'flex', border: '1px solid #e0e0e0' }}>
          <TableCell small>Small Cell</TableCell>
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          With Checkbox
        </Typography>
        <Box sx={{ display: 'flex', border: '1px solid #e0e0e0' }}>
          <TableCell checkbox checked={false}>
            Cell with Checkbox
          </TableCell>
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          With Secondary Text
        </Typography>
        <Box sx={{ display: 'flex', border: '1px solid #e0e0e0' }}>
          <TableCell secondaryText="Secondary information">Main Content</TableCell>
        </Box>
      </Box>
    </Stack>
  ),
};
