/**
 * TableHead Stories
 *
 * Storybook stories for the TableHead component.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { TableHead } from './TableHead';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof TableHead> = {
  title: 'Components/TableHead',
  component: TableHead,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI TableHead component customized with design tokens. Supports small and regular sizes, optional checkbox, and optional sort icons.',
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
    leftSort: {
      control: 'boolean',
      description: 'Whether to show sort icon on the left',
    },
    rightSort: {
      control: 'boolean',
      description: 'Whether to show sort icon on the right',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableHead>;

// Default story
export const Default: Story = {
  args: {
    label: 'Header',
  },
};

// With checkbox
export const WithCheckbox: Story = {
  args: {
    label: 'Header with Checkbox',
    checkbox: true,
    checked: false,
  },
};

// With sort icon
export const WithSort: Story = {
  args: {
    label: 'Sortable Header',
    rightSort: true,
  },
};

// Small variant
export const Small: Story = {
  args: {
    label: 'Small Header',
    small: true,
  },
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Regular Header
        </Typography>
        <Box sx={{ display: 'flex', border: '1px solid #e0e0e0' }}>
          <TableHead label="Regular Header" />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Small Header
        </Typography>
        <Box sx={{ display: 'flex', border: '1px solid #e0e0e0' }}>
          <TableHead label="Small Header" small />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          With Checkbox
        </Typography>
        <Box sx={{ display: 'flex', border: '1px solid #e0e0e0' }}>
          <TableHead label="Header with Checkbox" checkbox checked={false} />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          With Sort Icon
        </Typography>
        <Box sx={{ display: 'flex', border: '1px solid #e0e0e0' }}>
          <TableHead label="Sortable Header" rightSort />
        </Box>
      </Box>
    </Stack>
  ),
};

