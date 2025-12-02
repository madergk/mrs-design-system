/**
 * ListItem Stories
 *
 * Storybook stories for the ListItem component.
 * Displays all variants, states, and configurations from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from './ListItem';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof ListItem> = {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A Material UI ListItem component customized with design tokens. Supports dense, disGutters, multiple states, and slots for icons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The primary text content',
    },
    secondText: {
      control: 'boolean',
      description: 'If true, shows secondary text below the primary text',
    },
    secondaryText: {
      control: 'text',
      description: 'The secondary text content',
    },
    dense: {
      control: 'boolean',
      description: 'If true, uses dense padding and smaller typography',
    },
    disGutters: {
      control: 'boolean',
      description: 'If true, removes horizontal padding (gutters)',
    },
    divider: {
      control: 'boolean',
      description: 'If true, shows a divider at the bottom',
    },
    leftSlot: {
      control: 'boolean',
      description: 'If true, shows left slot (icon)',
    },
    leftIcon: {
      control: 'text',
      description: 'The icon name for the left slot',
    },
    rightSlot: {
      control: 'boolean',
      description: 'If true, shows right slot (icon)',
    },
    rightIcon: {
      control: 'text',
      description: 'The icon name for the right slot',
    },
    state: {
      control: 'select',
      options: ['Enabled', 'Hovered', 'Selected', 'Focused', 'Pressed', 'Disabled'],
      description: 'The state of the list item',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

// Default story
export const Default: Story = {
  args: {
    label: 'List item',
    leftSlot: true,
    leftIcon: 'AddRounded',
  },
};

// States showcase
export const States: Story = {
  render: () => (
    <Box sx={{ width: 260 }}>
      <Stack spacing={1}>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          States
        </Typography>
        <ListItem label="List item" state="Enabled" leftIcon="AddRounded" />
        <ListItem label="List item" state="Hovered" leftIcon="AddRounded" />
        <ListItem label="List item" state="Selected" leftIcon="AddRounded" />
        <ListItem label="List item" state="Focused" leftIcon="AddRounded" />
        <ListItem label="List item" state="Pressed" leftIcon="AddRounded" />
        <ListItem label="List item" state="Disabled" leftIcon="AddRounded" />
      </Stack>
    </Box>
  ),
};

// Dense variants
export const DenseVariants: Story = {
  render: () => (
    <Box sx={{ width: 260 }}>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Normal (Dense=False, Dis. Gutters=False)
          </Typography>
          <ListItem label="List item" state="Enabled" leftIcon="AddRounded" />
          <ListItem label="List item" state="Hovered" leftIcon="AddRounded" />
          <ListItem label="List item" state="Selected" leftIcon="AddRounded" />
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Dense (Dense=True, Dis. Gutters=False)
          </Typography>
          <ListItem label="List item" dense state="Enabled" leftIcon="AddRounded" />
          <ListItem label="List item" dense state="Hovered" leftIcon="AddRounded" />
          <ListItem label="List item" dense state="Selected" leftIcon="AddRounded" />
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            No Gutters (Dense=False, Dis. Gutters=True)
          </Typography>
          <ListItem label="List item" disGutters state="Enabled" leftIcon="AddRounded" />
          <ListItem label="List item" disGutters state="Hovered" leftIcon="AddRounded" />
          <ListItem label="List item" disGutters state="Selected" leftIcon="AddRounded" />
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Dense + No Gutters (Dense=True, Dis. Gutters=True)
          </Typography>
          <ListItem label="List item" dense disGutters state="Enabled" leftIcon="AddRounded" />
          <ListItem label="List item" dense disGutters state="Hovered" leftIcon="AddRounded" />
          <ListItem label="List item" dense disGutters state="Selected" leftIcon="AddRounded" />
        </Stack>
      </Stack>
    </Box>
  ),
};

// With secondary text
export const WithSecondaryText: Story = {
  render: () => (
    <Box sx={{ width: 260 }}>
      <Stack spacing={1}>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          With Secondary Text
        </Typography>
        <ListItem
          label="List item"
          secondText
          secondaryText="Secondary"
          state="Enabled"
          leftIcon="AddRounded"
        />
        <ListItem
          label="List item"
          secondText
          secondaryText="Secondary"
          state="Selected"
          leftIcon="AddRounded"
        />
        <ListItem
          label="List item"
          secondText
          secondaryText="Secondary"
          dense
          state="Enabled"
          leftIcon="AddRounded"
        />
      </Stack>
    </Box>
  ),
};

// With right slot
export const WithRightSlot: Story = {
  render: () => (
    <Box sx={{ width: 260 }}>
      <Stack spacing={1}>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          With Right Slot
        </Typography>
        <ListItem
          label="List item"
          leftIcon="AddRounded"
          rightSlot
          rightIcon="ChevronLeftRounded"
          state="Enabled"
        />
        <ListItem
          label="List item"
          leftIcon="AddRounded"
          rightSlot
          rightIcon="ChevronLeftRounded"
          state="Selected"
        />
        <ListItem
          label="List item"
          leftIcon="AddRounded"
          rightSlot
          rightIcon="ChevronLeftRounded"
          dense
          state="Enabled"
        />
      </Stack>
    </Box>
  ),
};

// With divider
export const WithDivider: Story = {
  render: () => (
    <Box sx={{ width: 260 }}>
      <Stack spacing={0}>
        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
          With Dividers
        </Typography>
        <ListItem label="List item" divider leftIcon="AddRounded" state="Enabled" />
        <ListItem label="List item" divider leftIcon="AddRounded" state="Enabled" />
        <ListItem label="List item" leftIcon="AddRounded" state="Enabled" />
      </Stack>
    </Box>
  ),
};

// All combinations
export const AllCombinations: Story = {
  render: () => (
    <Box sx={{ width: 260 }}>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Dense=False, Dis. Gutters=False
          </Typography>
          <ListItem label="List item" state="Enabled" leftIcon="AddRounded" />
          <ListItem label="List item" state="Hovered" leftIcon="AddRounded" />
          <ListItem label="List item" state="Selected" leftIcon="AddRounded" />
          <ListItem label="List item" state="Focused" leftIcon="AddRounded" />
          <ListItem label="List item" state="Pressed" leftIcon="AddRounded" />
          <ListItem label="List item" state="Disabled" leftIcon="AddRounded" />
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Dense=False, Dis. Gutters=True
          </Typography>
          <ListItem label="List item" disGutters state="Enabled" leftIcon="AddRounded" />
          <ListItem label="List item" disGutters state="Hovered" leftIcon="AddRounded" />
          <ListItem label="List item" disGutters state="Selected" leftIcon="AddRounded" />
          <ListItem label="List item" disGutters state="Focused" leftIcon="AddRounded" />
          <ListItem label="List item" disGutters state="Pressed" leftIcon="AddRounded" />
          <ListItem label="List item" disGutters state="Disabled" leftIcon="AddRounded" />
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Dense=True, Dis. Gutters=False
          </Typography>
          <ListItem label="List item" dense state="Enabled" leftIcon="AddRounded" />
          <ListItem label="List item" dense state="Hovered" leftIcon="AddRounded" />
          <ListItem label="List item" dense state="Selected" leftIcon="AddRounded" />
          <ListItem label="List item" dense state="Focused" leftIcon="AddRounded" />
          <ListItem label="List item" dense state="Pressed" leftIcon="AddRounded" />
          <ListItem label="List item" dense state="Disabled" leftIcon="AddRounded" />
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Dense=True, Dis. Gutters=True
          </Typography>
          <ListItem label="List item" dense disGutters state="Enabled" leftIcon="AddRounded" />
          <ListItem label="List item" dense disGutters state="Hovered" leftIcon="AddRounded" />
          <ListItem label="List item" dense disGutters state="Selected" leftIcon="AddRounded" />
          <ListItem label="List item" dense disGutters state="Focused" leftIcon="AddRounded" />
          <ListItem label="List item" dense disGutters state="Pressed" leftIcon="AddRounded" />
          <ListItem label="List item" dense disGutters state="Disabled" leftIcon="AddRounded" />
        </Stack>
      </Stack>
    </Box>
  ),
};
