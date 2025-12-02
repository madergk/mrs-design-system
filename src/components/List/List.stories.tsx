/**
 * List Stories
 *
 * Storybook stories for the List component.
 * Displays all variants and configurations from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';
import { ListItem } from '../ListItem';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A Material UI List component customized with design tokens. Supports disPadding and dense variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disPadding: {
      control: 'boolean',
      description: 'If true, removes padding from the list',
    },
    dense: {
      control: 'boolean',
      description: 'If true, uses dense spacing for list items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

// Default story
export const Default: Story = {
  render: () => (
    <Box sx={{ width: 260 }}>
      <List>
        <ListItem label="List item" leftIcon="AddRounded" />
        <ListItem label="List item" leftIcon="AddRounded" />
        <ListItem label="List item" leftIcon="AddRounded" />
      </List>
    </Box>
  ),
};

// Variants showcase
export const Variants: Story = {
  render: () => (
    <Stack spacing={4} direction="row" flexWrap="wrap">
      <Box sx={{ width: 260 }}>
        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
          Dis. Padding=False, Dense=False
        </Typography>
        <List>
          <ListItem label="List item" leftIcon="AddRounded" />
          <ListItem label="List item" leftIcon="AddRounded" />
          <ListItem label="List item" leftIcon="AddRounded" />
        </List>
      </Box>
      <Box sx={{ width: 260 }}>
        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
          Dis. Padding=True, Dense=False
        </Typography>
        <List disPadding>
          <ListItem label="List item" leftIcon="AddRounded" />
          <ListItem label="List item" leftIcon="AddRounded" />
          <ListItem label="List item" leftIcon="AddRounded" />
        </List>
      </Box>
      <Box sx={{ width: 260 }}>
        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
          Dis. Padding=False, Dense=True
        </Typography>
        <List dense>
          <ListItem label="List item" dense leftIcon="AddRounded" />
          <ListItem label="List item" dense leftIcon="AddRounded" />
          <ListItem label="List item" dense leftIcon="AddRounded" />
        </List>
      </Box>
      <Box sx={{ width: 260 }}>
        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
          Dis. Padding=True, Dense=True
        </Typography>
        <List disPadding dense>
          <ListItem label="List item" dense leftIcon="AddRounded" />
          <ListItem label="List item" dense leftIcon="AddRounded" />
          <ListItem label="List item" dense leftIcon="AddRounded" />
        </List>
      </Box>
    </Stack>
  ),
};

// With different states
export const WithStates: Story = {
  render: () => (
    <Box sx={{ width: 260 }}>
      <List>
        <ListItem label="List item" state="Enabled" leftIcon="AddRounded" />
        <ListItem label="List item" state="Hovered" leftIcon="AddRounded" />
        <ListItem label="List item" state="Selected" leftIcon="AddRounded" />
        <ListItem label="List item" state="Focused" leftIcon="AddRounded" />
        <ListItem label="List item" state="Pressed" leftIcon="AddRounded" />
        <ListItem label="List item" state="Disabled" leftIcon="AddRounded" />
      </List>
    </Box>
  ),
};

// With secondary text
export const WithSecondaryText: Story = {
  render: () => (
    <Box sx={{ width: 260 }}>
      <List>
        <ListItem label="List item" secondText secondaryText="Secondary" leftIcon="AddRounded" />
        <ListItem label="List item" secondText secondaryText="Secondary" leftIcon="AddRounded" />
        <ListItem label="List item" secondText secondaryText="Secondary" leftIcon="AddRounded" />
      </List>
    </Box>
  ),
};

// With right slot
export const WithRightSlot: Story = {
  render: () => (
    <Box sx={{ width: 260 }}>
      <List>
        <ListItem
          label="List item"
          leftIcon="AddRounded"
          rightSlot
          rightIcon="ChevronLeftRounded"
        />
        <ListItem
          label="List item"
          leftIcon="AddRounded"
          rightSlot
          rightIcon="ChevronLeftRounded"
        />
        <ListItem
          label="List item"
          leftIcon="AddRounded"
          rightSlot
          rightIcon="ChevronLeftRounded"
        />
      </List>
    </Box>
  ),
};

// With dividers
export const WithDividers: Story = {
  render: () => (
    <Box sx={{ width: 260 }}>
      <List>
        <ListItem label="List item" divider leftIcon="AddRounded" />
        <ListItem label="List item" divider leftIcon="AddRounded" />
        <ListItem label="List item" leftIcon="AddRounded" />
      </List>
    </Box>
  ),
};
