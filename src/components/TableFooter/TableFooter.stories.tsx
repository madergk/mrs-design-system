/**
 * TableFooter Stories
 *
 * Storybook stories for the TableFooter component.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { TableFooter } from './TableFooter';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI TableFooter component customized with design tokens. Handles table pagination controls including page information and navigation buttons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    page: {
      control: 'number',
      description: 'Current page number (0-based)',
    },
    rowsPerPage: {
      control: 'number',
      description: 'Number of rows per page',
    },
    count: {
      control: 'number',
      description: 'Total number of rows',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

// Default story
export const Default: Story = {
  args: {
    page: 0,
    rowsPerPage: 10,
    count: 50,
    onPageChange: () => {},
  },
};

// First page
export const FirstPage: Story = {
  args: {
    page: 0,
    rowsPerPage: 10,
    count: 50,
    onPageChange: () => {},
  },
};

// Middle page
export const MiddlePage: Story = {
  args: {
    page: 2,
    rowsPerPage: 10,
    count: 50,
    onPageChange: () => {},
  },
};

// Last page
export const LastPage: Story = {
  args: {
    page: 4,
    rowsPerPage: 10,
    count: 50,
    onPageChange: () => {},
  },
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          First Page (1-10 of 50)
        </Typography>
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <TableFooter page={0} rowsPerPage={10} count={50} onPageChange={() => {}} />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Middle Page (21-30 of 50)
        </Typography>
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <TableFooter page={2} rowsPerPage={10} count={50} onPageChange={() => {}} />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Last Page (41-50 of 50)
        </Typography>
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <TableFooter page={4} rowsPerPage={10} count={50} onPageChange={() => {}} />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Small Dataset (1-5 of 5)
        </Typography>
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <TableFooter page={0} rowsPerPage={10} count={5} onPageChange={() => {}} />
        </Box>
      </Box>
    </Stack>
  ),
};
