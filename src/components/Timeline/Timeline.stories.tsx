/**
 * Timeline Stories
 *
 * Storybook stories for the Timeline component.
 * Displays all variants, dot types, and use cases from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './Timeline';
import { TimelineItem } from './TimelineItem';
import { Button } from '../Button';
import { Box, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A vertical timeline component for displaying a sequence of events or items. Each item can have a label, description, dot variant, and optional action.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'The orientation of the timeline',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

// Default story - matches Figma design
export const Default: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <Timeline>
        <TimelineItem label="Item Label" description="Item description" dotVariant="filled" />
        <TimelineItem label="Item Label" description="Item description" dotVariant="filled" />
        <TimelineItem label="Item Label" description="Item description" dotVariant="filled" />
      </Timeline>
    </Box>
  ),
};

// With actions - matches Figma design with button
export const WithActions: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <Timeline>
        <TimelineItem label="Item Label" description="Item description" dotVariant="filled" />
        <TimelineItem
          label="Item Label"
          description="Item description"
          dotVariant="filled"
          action={
            <Button variant="text" size="small" color="primary" endIcon={<ArrowForwardIcon />}>
              Button
            </Button>
          }
        />
        <TimelineItem label="Item Label" description="Item description" dotVariant="filled" />
      </Timeline>
    </Box>
  ),
};

// All dot variants
export const DotVariants: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <Timeline>
        <TimelineItem label="Filled" description="Default filled dot variant" dotVariant="filled" />
        <TimelineItem label="Outlined" description="Outlined dot variant" dotVariant="outlined" />
        <TimelineItem label="Check" description="Check icon dot variant" dotVariant="check" />
        <TimelineItem
          label="Current"
          description="Current/active state (primary color)"
          dotVariant="current"
        />
        <TimelineItem label="Danger" description="Error/danger state" dotVariant="danger" />
        <TimelineItem label="Warning" description="Warning state" dotVariant="warning" />
        <TimelineItem label="Info" description="Info state" dotVariant="info" />
        <TimelineItem label="Success" description="Success state" dotVariant="success" />
      </Timeline>
    </Box>
  ),
};

// Single item
export const SingleItem: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <Timeline>
        <TimelineItem
          label="Single Item"
          description="Timeline with only one item"
          dotVariant="current"
        />
      </Timeline>
    </Box>
  ),
};

// Long content
export const LongContent: Story = {
  render: () => (
    <Box sx={{ width: 500 }}>
      <Timeline>
        <TimelineItem
          label="Item with Long Label Text That Might Wrap"
          description="This is a longer description that contains more text and might wrap to multiple lines. It demonstrates how the timeline handles longer content gracefully."
          dotVariant="filled"
        />
        <TimelineItem
          label="Another Item"
          description="This item also has a longer description to show how multiple items with long content look together in the timeline."
          dotVariant="current"
          action={
            <Button variant="text" size="small" color="primary" endIcon={<ArrowForwardIcon />}>
              View Details
            </Button>
          }
        />
        <TimelineItem label="Short Item" description="Short description" dotVariant="filled" />
      </Timeline>
    </Box>
  ),
};

// Many items (scrollable)
export const ManyItems: Story = {
  render: () => (
    <Box sx={{ width: 400, maxHeight: 400, overflow: 'auto' }}>
      <Timeline>
        {Array.from({ length: 10 }, (_, i) => (
          <TimelineItem
            key={i}
            label={`Item ${i + 1}`}
            description={`Description for item ${i + 1}`}
            dotVariant={i === 2 ? 'current' : i < 2 ? 'check' : 'filled'}
            action={
              i === 3 ? (
                <Button variant="text" size="small" color="primary" endIcon={<ArrowForwardIcon />}>
                  Action
                </Button>
              ) : undefined
            }
          />
        ))}
      </Timeline>
    </Box>
  ),
};

// Without descriptions
export const LabelsOnly: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <Timeline>
        <TimelineItem label="Item Label 1" dotVariant="filled" />
        <TimelineItem label="Item Label 2" dotVariant="current" />
        <TimelineItem label="Item Label 3" dotVariant="filled" />
      </Timeline>
    </Box>
  ),
};

// Mixed variants with actions
export const MixedVariants: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <Timeline>
        <TimelineItem label="Completed" description="This step is completed" dotVariant="check" />
        <TimelineItem
          label="Current"
          description="This is the current step"
          dotVariant="current"
          action={
            <Button variant="text" size="small" color="primary" endIcon={<ArrowForwardIcon />}>
              Continue
            </Button>
          }
        />
        <TimelineItem label="Pending" description="This step is pending" dotVariant="filled" />
        <TimelineItem label="Warning" description="This step has a warning" dotVariant="warning" />
      </Timeline>
    </Box>
  ),
};

// Different backgrounds
export const DifferentBackgrounds: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          White Background
        </Typography>
        <Box sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: 1 }}>
          <Timeline>
            <TimelineItem label="Item Label" description="Item description" dotVariant="filled" />
            <TimelineItem label="Item Label" description="Item description" dotVariant="current" />
          </Timeline>
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Light Gray Background
        </Typography>
        <Box sx={{ p: 3, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
          <Timeline>
            <TimelineItem label="Item Label" description="Item description" dotVariant="filled" />
            <TimelineItem label="Item Label" description="Item description" dotVariant="current" />
          </Timeline>
        </Box>
      </Box>
    </Stack>
  ),
};
