/**
 * Table Stories
 *
 * Storybook stories for the Table component.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Table component customized with design tokens. Combines TableHeadRow, TableRow, and TableFooter to create a complete table.',
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
      description: 'Whether to show checkboxes',
    },
    showFooter: {
      control: 'boolean',
      description: 'Whether to show the footer with pagination',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data
const sampleHeaders = ['Name', 'Email', 'Role', 'Status', 'Actions'];
const sampleRows = [
  { id: 1, cells: ['John Doe', 'john@example.com', 'Admin', 'Active', 'Edit'] },
  { id: 2, cells: ['Jane Smith', 'jane@example.com', 'User', 'Active', 'Edit'] },
  { id: 3, cells: ['Bob Johnson', 'bob@example.com', 'User', 'Inactive', 'Edit'] },
  { id: 4, cells: ['Alice Brown', 'alice@example.com', 'Manager', 'Active', 'Edit'] },
  { id: 5, cells: ['Charlie Wilson', 'charlie@example.com', 'User', 'Active', 'Edit'] },
];

// Default story
export const Default: Story = {
  args: {
    headers: sampleHeaders,
    rows: sampleRows,
    columns: 5,
  },
};

// With checkboxes
export const WithCheckboxes: Story = {
  args: {
    headers: sampleHeaders,
    rows: sampleRows,
    columns: 5,
    checkbox: true,
  },
};

// Small variant
export const Small: Story = {
  args: {
    headers: sampleHeaders,
    rows: sampleRows,
    columns: 5,
    small: true,
  },
};

// With pagination
export const WithPagination: Story = {
  args: {
    headers: sampleHeaders,
    rows: Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      cells: [`User ${i + 1}`, `user${i + 1}@example.com`, 'User', 'Active', 'Edit'],
    })),
    columns: 5,
    rowsPerPage: 5,
  },
};

// Complete showcase
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1400 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Table Component Showcase
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Regular Table
        </Typography>
        <Table
          headers={sampleHeaders}
          rows={sampleRows}
          columns={5}
        />
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Small Table
        </Typography>
        <Table
          headers={sampleHeaders}
          rows={sampleRows}
          columns={5}
          small
        />
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          With Checkboxes
        </Typography>
        <Table
          headers={sampleHeaders}
          rows={sampleRows}
          columns={5}
          checkbox
        />
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          With Pagination
        </Typography>
        <Table
          headers={sampleHeaders}
          rows={Array.from({ length: 25 }, (_, i) => ({
            id: i + 1,
            cells: [`User ${i + 1}`, `user${i + 1}@example.com`, 'User', 'Active', 'Edit'],
          }))}
          columns={5}
          rowsPerPage={5}
        />
      </Box>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

