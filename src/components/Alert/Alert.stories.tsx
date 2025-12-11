/**
 * Alert Stories
 *
 * Storybook stories for the Alert component.
 * Displays all severities, variants, and optional elements from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Alert component customized with design tokens. Supports error, warning, info, and success severities with filled, outlined, and standard variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
      description: 'The severity of the alert',
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'standard'],
      description: 'The variant of the alert',
    },
    title: {
      control: 'text',
      description: 'The title text to display',
    },
    description: {
      control: 'text',
      description: 'The description text to display',
    },
    icon: {
      control: 'boolean',
      description: 'Whether to show the icon',
    },
    close: {
      control: 'boolean',
      description: 'Whether to show the close button',
    },
    action: {
      control: 'boolean',
      description: 'Whether to show the action button',
    },
    actionLabel: {
      control: 'text',
      description: 'Action button label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

// Default story
export const Default: Story = {
  args: {
    severity: 'error',
    variant: 'filled',
    title: 'Error Title',
    description: 'Error description',
    icon: true,
    close: true,
  },
};

// Severities showcase
export const Severities: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      <Alert severity="error" variant="filled" title="Error" description="This is an error alert" />
      <Alert
        severity="warning"
        variant="filled"
        title="Warning"
        description="This is a warning alert"
      />
      <Alert severity="info" variant="filled" title="Info" description="This is an info alert" />
      <Alert
        severity="success"
        variant="filled"
        title="Success"
        description="This is a success alert"
      />
    </Stack>
  ),
};

// Variants showcase
export const Variants: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
          Error - Filled
        </Typography>
        <Alert severity="error" variant="filled" title="Error" description="Filled variant" />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
          Error - Outlined
        </Typography>
        <Alert severity="error" variant="outlined" title="Error" description="Outlined variant" />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
          Error - Standard
        </Typography>
        <Alert severity="error" variant="standard" title="Error" description="Standard variant" />
      </Box>
    </Stack>
  ),
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  args: {
    severity: 'error',
    variant: 'filled',
  },

  render: () => (
    <Box sx={{ p: 4, maxWidth: 1400 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Alert Component Showcase
      </Typography>

      {/* Error Alerts */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Error Alerts
        </Typography>
        <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
          <Alert
            severity="error"
            variant="filled"
            title="Error"
            description="This is an error alert"
          />
          <Alert
            severity="error"
            variant="outlined"
            title="Error"
            description="This is an error alert"
          />
          <Alert
            severity="error"
            variant="standard"
            title="Error"
            description="This is an error alert"
          />
        </Stack>
      </Box>

      {/* Warning Alerts */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Warning Alerts
        </Typography>
        <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
          <Alert
            severity="warning"
            variant="filled"
            title="Warning"
            description="This is a warning alert"
          />
          <Alert
            severity="warning"
            variant="outlined"
            title="Warning"
            description="This is a warning alert"
          />
          <Alert
            severity="warning"
            variant="standard"
            title="Warning"
            description="This is a warning alert"
          />
        </Stack>
      </Box>

      {/* Info Alerts */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Info Alerts
        </Typography>
        <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
          <Alert
            severity="info"
            variant="filled"
            title="Info"
            description="This is an info alert"
          />
          <Alert
            severity="info"
            variant="outlined"
            title="Info"
            description="This is an info alert"
          />
          <Alert
            severity="info"
            variant="standard"
            title="Info"
            description="This is an info alert"
          />
        </Stack>
      </Box>

      {/* Success Alerts */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Success Alerts
        </Typography>
        <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
          <Alert
            severity="success"
            variant="filled"
            title="Success"
            description="This is a success alert"
          />
          <Alert
            severity="success"
            variant="outlined"
            title="Success"
            description="This is a success alert"
          />
          <Alert
            severity="success"
            variant="standard"
            title="Success"
            description="This is a success alert"
          />
        </Stack>
      </Box>

      {/* With Action Button */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          With Action Button
        </Typography>
        <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
          <Alert
            severity="error"
            variant="filled"
            title="Error"
            description="This alert has an action button"
            action
            actionLabel="Action"
          />
          <Alert
            severity="success"
            variant="outlined"
            title="Success"
            description="This alert has an action button"
            action
            actionLabel="View Details"
          />
        </Stack>
      </Box>

      {/* Without Icon */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Without Icon
        </Typography>
        <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
          <Alert
            severity="error"
            variant="filled"
            title="Error"
            description="This alert has no icon"
            icon={false}
          />
          <Alert
            severity="info"
            variant="outlined"
            title="Info"
            description="This alert has no icon"
            icon={false}
          />
        </Stack>
      </Box>

      {/* Without Close Button */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Without Close Button
        </Typography>
        <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
          <Alert
            severity="warning"
            variant="filled"
            title="Warning"
            description="This alert has no close button"
            close={false}
          />
          <Alert
            severity="success"
            variant="outlined"
            title="Success"
            description="This alert has no close button"
            close={false}
          />
        </Stack>
      </Box>
    </Box>
  ),

  parameters: {
    layout: 'fullscreen',
  },
};
