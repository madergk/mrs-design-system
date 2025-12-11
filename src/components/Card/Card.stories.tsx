/**
 * Card Stories
 *
 * Storybook stories for the Card component.
 * Displays all variants from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Box, Stack, Typography } from '@mui/material';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Card component customized with design tokens. Supports smallScreen and blank variants, with sub-components: CardMedia, CardHeader, CardContent, CardActions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    smallScreen: {
      control: 'boolean',
      description: 'If true, uses small screen layout and typography',
    },
    blank: {
      control: 'boolean',
      description: 'If true, shows only instance slot (blank state)',
    },
    header: {
      control: 'text',
      description: 'The header title text',
    },
    title: {
      control: 'text',
      description: 'The card title text',
    },
    status: {
      control: 'text',
      description: 'The status chip label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Default story - matches Figma design
export const Default: Story = {
  args: {
    smallScreen: false,
    blank: false,
    header: 'Header',
    title: 'Card Title',
    status: 'En proceso',
    dataLines: [
      { icon: 'CheckRounded', text: 'Data display line 1' },
      { icon: 'CheckRounded', text: 'Data display line 2' },
    ],
    children: (
      <Box
        sx={{
          backgroundColor: 'rgba(151, 71, 255, 0.04)',
          border: '1px dashed #9747ff',
          borderRadius: '12px',
          padding: '4px 24px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="caption" sx={{ color: '#9747ff' }}>
          Instance Slot
        </Typography>
      </Box>
    ),
    actions: (
      <>
        <Button variant="text" size="small">
          Action
        </Button>
        <Button variant="text" size="small">
          Action
        </Button>
      </>
    ),
  },
};

// Small screen variant
export const SmallScreen: Story = {
  args: {
    smallScreen: true,
    blank: false,
    header: 'Header',
    title: 'Card Title',
    status: 'En proceso',
    dataLines: [
      { icon: 'CheckRounded', text: 'Data display line 1' },
      { icon: 'CheckRounded', text: 'Data display line 2' },
    ],
    children: (
      <Box
        sx={{
          backgroundColor: 'rgba(151, 71, 255, 0.04)',
          border: '1px dashed #9747ff',
          borderRadius: '12px',
          padding: '4px 24px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="caption" sx={{ color: '#9747ff' }}>
          Instance Slot
        </Typography>
      </Box>
    ),
    actions: (
      <>
        <Button variant="text" size="small">
          Action
        </Button>
        <Button variant="text" size="small">
          Action
        </Button>
      </>
    ),
  },
};

// Blank state - small screen
export const BlankSmallScreen: Story = {
  args: {
    smallScreen: true,
    blank: true,
  },
};

// Blank state - regular screen
export const BlankRegularScreen: Story = {
  args: {
    smallScreen: false,
    blank: true,
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <Stack spacing={4} alignItems="flex-start">
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Regular Screen, Not Blank
        </Typography>
        <Card
          header="Header"
          title="Card Title"
          status="En proceso"
          dataLines={[
            { icon: 'CheckRounded', text: 'Data display line 1' },
            { icon: 'CheckRounded', text: 'Data display line 2' },
          ]}
          actions={
            <>
              <Button variant="text" size="small">
                Action
              </Button>
              <Button variant="text" size="small">
                Action
              </Button>
            </>
          }
        />
      </Box>

      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Small Screen, Not Blank
        </Typography>
        <Card
          smallScreen
          header="Header"
          title="Card Title"
          status="En proceso"
          dataLines={[
            { icon: 'CheckRounded', text: 'Data display line 1' },
            { icon: 'CheckRounded', text: 'Data display line 2' },
          ]}
          actions={
            <>
              <Button variant="text" size="small">
                Action
              </Button>
              <Button variant="text" size="small">
                Action
              </Button>
            </>
          }
        ></Card>
      </Box>

      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Regular Screen, Blank
        </Typography>
        <Card smallScreen={false} blank></Card>
      </Box>

      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Small Screen, Blank
        </Typography>
        <Card smallScreen blank />
      </Box>
    </Stack>
  ),
};

// Card with image
export const WithImage: Story = {
  args: {
    header: 'Header',
    title: 'Card Title',
    status: 'En proceso',
    dataLines: [
      { icon: 'CheckRounded', text: 'Data display line 1' },
      { icon: 'CheckRounded', text: 'Data display line 2' },
    ],
    image: 'https://via.placeholder.com/320x240',
    imageAlt: 'Card image',
    children: (
      <Box
        sx={{
          backgroundColor: 'rgba(151, 71, 255, 0.04)',
          border: '1px dashed #9747ff',
          borderRadius: '12px',
          padding: '4px 24px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="caption" sx={{ color: '#9747ff' }}>
          Instance Slot
        </Typography>
      </Box>
    ),
    actions: (
      <>
        <Button variant="text" size="small">
          Action
        </Button>
        <Button variant="text" size="small">
          Action
        </Button>
      </>
    ),
  },
};

// Card without status
export const WithoutStatus: Story = {
  args: {
    header: 'Header',
    title: 'Card Title',
    dataLines: [
      { icon: 'CheckRounded', text: 'Data display line 1' },
      { icon: 'CheckRounded', text: 'Data display line 2' },
    ],
    children: (
      <Box
        sx={{
          backgroundColor: 'rgba(151, 71, 255, 0.04)',
          border: '1px dashed #9747ff',
          borderRadius: '12px',
          padding: '4px 24px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="caption" sx={{ color: '#9747ff' }}>
          Instance Slot
        </Typography>
      </Box>
    ),
    actions: (
      <>
        <Button variant="text" size="small">
          Action
        </Button>
        <Button variant="text" size="small">
          Action
        </Button>
      </>
    ),
  },
};

// Card without data lines
export const WithoutDataLines: Story = {
  args: {
    header: 'Header',
    title: 'Card Title',
    status: 'En proceso',
    children: (
      <Box
        sx={{
          backgroundColor: 'rgba(151, 71, 255, 0.04)',
          border: '1px dashed #9747ff',
          borderRadius: '12px',
          padding: '4px 24px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="caption" sx={{ color: '#9747ff' }}>
          Instance Slot
        </Typography>
      </Box>
    ),
    actions: (
      <>
        <Button variant="text" size="small">
          Action
        </Button>
        <Button variant="text" size="small">
          Action
        </Button>
      </>
    ),
  },
};
