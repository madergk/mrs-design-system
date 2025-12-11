/**
 * Paper Stories
 *
 * Storybook stories for the Paper component.
 * Displays all variants, elevations, and square options from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Paper } from './Paper';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
  component: Paper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Paper component customized with design tokens. Supports Elevation and Outlined variants with elevation levels 0-24.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['Elevation', 'Outlined'],
      description: 'The variant of the paper',
    },
    elevation: {
      control: 'select',
      options: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
      ],
      description: 'The elevation level (only applies to Elevation variant)',
    },
    square: {
      control: 'boolean',
      description: 'If true, the component will have square corners',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

// Default story
export const Default: Story = {
  args: {
    variant: 'Elevation',
    elevation: '1',
    square: false,
    children: (
      <Box sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
        <Typography variant="body1">Paper Content</Typography>
      </Box>
    ),
  },
};

// Variants showcase
export const Variants: Story = {
  render: () => (
    <Stack spacing={3} direction="row" flexWrap="wrap" gap={2}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Elevation (elevation 1)
        </Typography>
        <Paper variant="Elevation" elevation="1" sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Elevation Variant</Typography>
        </Paper>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Outlined
        </Typography>
        <Paper variant="Outlined" sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Outlined Variant</Typography>
        </Paper>
      </Box>
    </Stack>
  ),
};

// Elevations showcase
export const Elevations: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Elevation 0
        </Typography>
        <Paper variant="Elevation" elevation="0" sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">No shadow</Typography>
        </Paper>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Elevation 1 (default)
        </Typography>
        <Paper variant="Elevation" elevation="1" sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Light shadow</Typography>
        </Paper>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Elevation 4
        </Typography>
        <Paper variant="Elevation" elevation="4" sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Medium shadow</Typography>
        </Paper>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Elevation 8
        </Typography>
        <Paper variant="Elevation" elevation="8" sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Strong shadow</Typography>
        </Paper>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Elevation 16
        </Typography>
        <Paper variant="Elevation" elevation="16" sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Very strong shadow</Typography>
        </Paper>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Elevation 24 (maximum)
        </Typography>
        <Paper variant="Elevation" elevation="24" sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Maximum shadow</Typography>
        </Paper>
      </Box>
    </Stack>
  ),
};

// Square corners showcase
export const SquareCorners: Story = {
  render: () => (
    <Stack spacing={3} direction="row" flexWrap="wrap" gap={2}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Rounded (default)
        </Typography>
        <Paper variant="Elevation" elevation="1" sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Rounded corners</Typography>
        </Paper>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Square
        </Typography>
        <Paper
          variant="Elevation"
          elevation="1"
          square
          sx={{ p: 3, minWidth: 200, minHeight: 100 }}
        >
          <Typography variant="body1">Square corners</Typography>
        </Paper>
      </Box>
    </Stack>
  ),
};

// All elevations grid
export const AllElevations: Story = {
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: 2,
        maxWidth: 800,
      }}
    >
      {(
        [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
        ] as const
      ).map((elevation) => (
        <Box key={elevation}>
          <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
            Elevation {elevation}
          </Typography>
          <Paper variant="Elevation" elevation={elevation} sx={{ p: 2, minHeight: 80 }}>
            <Typography variant="caption">Content</Typography>
          </Paper>
        </Box>
      ))}
    </Box>
  ),
};
