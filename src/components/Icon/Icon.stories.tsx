/**
 * Icon Stories
 *
 * Storybook stories for the Icon component.
 * Displays all icon variants, sizes, colors, and states from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Icon, type IconName } from './Icon';
import { Box, Stack, Typography, Paper } from '@mui/material';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Icon component that wraps SvgIcon and provides a convenient way to use Material Icons by name. Based on MUI Icon API documentation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        'AccountCircleRounded',
        'AddRounded',
        'ArrowBackRounded',
        'ArrowDownwardRounded',
        'ArrowDropDownRounded',
        'ArrowDropUpRounded',
        'ArrowForwardRounded',
        'ArrowUpwardRounded',
        'CheckBoxOutlineBlankRounded',
        'CheckBoxRounded',
        'CheckCircleOutlineRounded',
        'CheckCircleRounded',
        'CheckRounded',
        'ChevronLeftRounded',
        'ChevronRightRounded',
        'CloseRounded',
        'ContentCopyRounded',
        'ContentPasteRounded',
        'DeleteOutlineRounded',
        'DeleteRounded',
        'DownloadRounded',
        'EditRounded',
        'ErrorOutlineRounded',
        'ErrorRounded',
        'ExpandLessRounded',
        'ExpandMoreRounded',
        'GroupRounded',
        'HelpOutlineRounded',
        'IndeterminateCheckBoxRounded',
        'InfoOutlineRounded',
        'InfoRounded',
        'LockRounded',
        'LoginRounded',
        'LogoutRounded',
        'MenuRounded',
        'MoreHorizRounded',
        'MoreVertRounded',
        'NotificationsNoneRounded',
        'NotificationsRounded',
        'PersonAddRounded',
        'PersonOutlineRounded',
        'PersonRounded',
        'RadioButtonCheckedRounded',
        'RadioButtonUncheckedRounded',
        'RemoveRedEyeRounded',
        'ReportProblemRounded',
        'SaveAltRounded',
        'SearchRounded',
        'SendRounded',
        'SettingsRounded',
        'SupervisorAccountRounded',
        'TimelapseRounded',
        'UploadRounded',
        'VisibilityOffRounded',
        'WarningAmberRounded',
      ],
      description: 'The name of the icon to display',
    },
    color: {
      control: 'select',
      options: [
        'inherit',
        'action',
        'disabled',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      description: 'The color of the icon',
    },
    fontSize: {
      control: 'select',
      options: ['inherit', 'small', 'medium', 'large'],
      description: 'The size of the icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// Default story
export const Default: Story = {
  args: {
    name: 'ChevronLeftRounded',
    color: 'inherit',
    fontSize: 'medium',
  },
};

// All Icons showcase
export const AllIcons: Story = {
  render: () => {
    const iconNames: Array<{ name: string; category: string }> = [
      { name: 'AccountCircleRounded', category: 'User' },
      { name: 'AddRounded', category: 'Action' },
      { name: 'ArrowBackRounded', category: 'Navigation' },
      { name: 'ArrowDownwardRounded', category: 'Navigation' },
      { name: 'ArrowDropDownRounded', category: 'Navigation' },
      { name: 'ArrowDropUpRounded', category: 'Navigation' },
      { name: 'ArrowForwardRounded', category: 'Navigation' },
      { name: 'ArrowUpwardRounded', category: 'Navigation' },
      { name: 'CheckBoxOutlineBlankRounded', category: 'Form' },
      { name: 'CheckBoxRounded', category: 'Form' },
      { name: 'CheckCircleOutlineRounded', category: 'Status' },
      { name: 'CheckCircleRounded', category: 'Status' },
      { name: 'CheckRounded', category: 'Status' },
      { name: 'ChevronLeftRounded', category: 'Navigation' },
      { name: 'ChevronRightRounded', category: 'Navigation' },
      { name: 'CloseRounded', category: 'Action' },
      { name: 'ContentCopyRounded', category: 'Action' },
      { name: 'ContentPasteRounded', category: 'Action' },
      { name: 'DeleteOutlineRounded', category: 'Action' },
      { name: 'DeleteRounded', category: 'Action' },
      { name: 'DownloadRounded', category: 'Action' },
      { name: 'EditRounded', category: 'Action' },
      { name: 'ErrorOutlineRounded', category: 'Status' },
      { name: 'ErrorRounded', category: 'Status' },
      { name: 'ExpandLessRounded', category: 'Navigation' },
      { name: 'ExpandMoreRounded', category: 'Navigation' },
      { name: 'GroupRounded', category: 'User' },
      { name: 'HelpOutlineRounded', category: 'Info' },
      { name: 'IndeterminateCheckBoxRounded', category: 'Form' },
      { name: 'InfoOutlineRounded', category: 'Info' },
      { name: 'InfoRounded', category: 'Info' },
      { name: 'LockRounded', category: 'Security' },
      { name: 'LoginRounded', category: 'User' },
      { name: 'LogoutRounded', category: 'User' },
      { name: 'MenuRounded', category: 'Navigation' },
      { name: 'MoreHorizRounded', category: 'Action' },
      { name: 'MoreVertRounded', category: 'Action' },
      { name: 'NotificationsNoneRounded', category: 'Notification' },
      { name: 'NotificationsRounded', category: 'Notification' },
      { name: 'PersonAddRounded', category: 'User' },
      { name: 'PersonOutlineRounded', category: 'User' },
      { name: 'PersonRounded', category: 'User' },
      { name: 'RadioButtonCheckedRounded', category: 'Form' },
      { name: 'RadioButtonUncheckedRounded', category: 'Form' },
      { name: 'RemoveRedEyeRounded', category: 'Action' },
      { name: 'ReportProblemRounded', category: 'Status' },
      { name: 'SaveAltRounded', category: 'Action' },
      { name: 'SearchRounded', category: 'Action' },
      { name: 'SendRounded', category: 'Action' },
      { name: 'SettingsRounded', category: 'Action' },
      { name: 'SupervisorAccountRounded', category: 'User' },
      { name: 'TimelapseRounded', category: 'Time' },
      { name: 'UploadRounded', category: 'Action' },
      { name: 'VisibilityOffRounded', category: 'Action' },
      { name: 'WarningAmberRounded', category: 'Status' },
    ];

    const categories = Array.from(new Set(iconNames.map((icon) => icon.category)));

    return (
      <Box sx={{ p: 4, maxWidth: 1200 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          All Icons
        </Typography>
        {categories.map((category) => (
          <Box key={category} sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, textTransform: 'capitalize' }}>
              {category}
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              {iconNames
                .filter((icon) => icon.category === category)
                .map((icon) => (
                  <Paper
                    key={icon.name}
                    elevation={0}
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 1,
                      minWidth: 100,
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Icon name={icon.name as IconName} fontSize="large" />
                    <Typography variant="caption" sx={{ textAlign: 'center', fontSize: '0.7rem' }}>
                      {icon.name.replace('Rounded', '')}
                    </Typography>
                  </Paper>
                ))}
            </Stack>
          </Box>
        ))}
      </Box>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
};

// Colors showcase
export const Colors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Default (inherit)
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Icon name="AddRounded" />
          <Icon name="CheckRounded" />
          <Icon name="DeleteRounded" />
          <Icon name="EditRounded" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Primary
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Icon name="AddRounded" color="primary" />
          <Icon name="CheckRounded" color="primary" />
          <Icon name="DeleteRounded" color="primary" />
          <Icon name="EditRounded" color="primary" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Secondary
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Icon name="AddRounded" color="secondary" />
          <Icon name="CheckRounded" color="secondary" />
          <Icon name="DeleteRounded" color="secondary" />
          <Icon name="EditRounded" color="secondary" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Error
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Icon name="ErrorRounded" color="error" />
          <Icon name="DeleteRounded" color="error" />
          <Icon name="CloseRounded" color="error" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Success
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Icon name="CheckRounded" color="success" />
          <Icon name="CheckCircleRounded" color="success" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Warning
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Icon name="WarningAmberRounded" color="warning" />
          <Icon name="ReportProblemRounded" color="warning" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Info
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Icon name="InfoRounded" color="info" />
          <Icon name="InfoOutlineRounded" color="info" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Action
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Icon name="MoreVertRounded" color="action" />
          <Icon name="MoreHorizRounded" color="action" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Disabled
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Icon name="AddRounded" color="disabled" />
          <Icon name="CheckRounded" color="disabled" />
          <Icon name="DeleteRounded" color="disabled" />
        </Stack>
      </Box>
    </Stack>
  ),
};

// Sizes showcase
export const Sizes: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Small
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <Icon name="AddRounded" fontSize="small" />
          <Icon name="CheckRounded" fontSize="small" />
          <Icon name="DeleteRounded" fontSize="small" />
          <Icon name="EditRounded" fontSize="small" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Medium (default)
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <Icon name="AddRounded" fontSize="medium" />
          <Icon name="CheckRounded" fontSize="medium" />
          <Icon name="DeleteRounded" fontSize="medium" />
          <Icon name="EditRounded" fontSize="medium" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Large
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <Icon name="AddRounded" fontSize="large" />
          <Icon name="CheckRounded" fontSize="large" />
          <Icon name="DeleteRounded" fontSize="large" />
          <Icon name="EditRounded" fontSize="large" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Custom Size (via sx prop)
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" gap={2}>
          <Icon name="AddRounded" sx={{ fontSize: 16 }} />
          <Icon name="AddRounded" sx={{ fontSize: 24 }} />
          <Icon name="AddRounded" sx={{ fontSize: 32 }} />
          <Icon name="AddRounded" sx={{ fontSize: 48 }} />
        </Stack>
      </Box>
    </Stack>
  ),
};

// Navigation Icons
export const NavigationIcons: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Icon name="ArrowBackRounded" />
      <Icon name="ArrowForwardRounded" />
      <Icon name="ArrowUpwardRounded" />
      <Icon name="ArrowDownwardRounded" />
      <Icon name="ChevronLeftRounded" />
      <Icon name="ChevronRightRounded" />
      <Icon name="ArrowDropUpRounded" />
      <Icon name="ArrowDropDownRounded" />
      <Icon name="ExpandMoreRounded" />
      <Icon name="ExpandLessRounded" />
      <Icon name="MenuRounded" />
    </Stack>
  ),
};

// Action Icons
export const ActionIcons: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Icon name="AddRounded" />
      <Icon name="EditRounded" />
      <Icon name="DeleteRounded" />
      <Icon name="CloseRounded" />
      <Icon name="ContentCopyRounded" />
      <Icon name="ContentPasteRounded" />
      <Icon name="DownloadRounded" />
      <Icon name="UploadRounded" />
      <Icon name="SearchRounded" />
      <Icon name="SaveAltRounded" />
      <Icon name="SendRounded" />
      <Icon name="SettingsRounded" />
      <Icon name="MoreHorizRounded" />
      <Icon name="MoreVertRounded" />
    </Stack>
  ),
};

// Status Icons
export const StatusIcons: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Success
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Icon name="CheckRounded" color="success" />
          <Icon name="CheckCircleRounded" color="success" />
          <Icon name="CheckCircleOutlineRounded" color="success" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Error
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Icon name="ErrorRounded" color="error" />
          <Icon name="ErrorOutlineRounded" color="error" />
          <Icon name="CloseRounded" color="error" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Warning
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Icon name="WarningAmberRounded" color="warning" />
          <Icon name="ReportProblemRounded" color="warning" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Info
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Icon name="InfoRounded" color="info" />
          <Icon name="InfoOutlineRounded" color="info" />
          <Icon name="HelpOutlineRounded" color="info" />
        </Stack>
      </Box>
    </Stack>
  ),
};

// Form Icons
export const FormIcons: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Icon name="CheckBoxRounded" />
      <Icon name="CheckBoxOutlineBlankRounded" />
      <Icon name="IndeterminateCheckBoxRounded" />
      <Icon name="RadioButtonCheckedRounded" />
      <Icon name="RadioButtonUncheckedRounded" />
    </Stack>
  ),
};

// User Icons
export const UserIcons: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Icon name="PersonRounded" />
      <Icon name="PersonOutlineRounded" />
      <Icon name="PersonAddRounded" />
      <Icon name="AccountCircleRounded" />
      <Icon name="GroupRounded" />
      <Icon name="SupervisorAccountRounded" />
      <Icon name="LoginRounded" />
      <Icon name="LogoutRounded" />
    </Stack>
  ),
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1200 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Icon Component Showcase
      </Typography>

      {/* All Icons Grid */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          All Available Icons
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {[
            'AccountCircleRounded',
            'AddRounded',
            'ArrowBackRounded',
            'ArrowDownwardRounded',
            'ArrowDropDownRounded',
            'ArrowDropUpRounded',
            'ArrowForwardRounded',
            'ArrowUpwardRounded',
            'CheckBoxOutlineBlankRounded',
            'CheckBoxRounded',
            'CheckCircleOutlineRounded',
            'CheckCircleRounded',
            'CheckRounded',
            'ChevronLeftRounded',
            'ChevronRightRounded',
            'CloseRounded',
            'ContentCopyRounded',
            'ContentPasteRounded',
            'DeleteOutlineRounded',
            'DeleteRounded',
            'DownloadRounded',
            'EditRounded',
            'ErrorOutlineRounded',
            'ErrorRounded',
            'ExpandLessRounded',
            'ExpandMoreRounded',
            'GroupRounded',
            'HelpOutlineRounded',
            'IndeterminateCheckBoxRounded',
            'InfoOutlineRounded',
            'InfoRounded',
            'LockRounded',
            'LoginRounded',
            'LogoutRounded',
            'MenuRounded',
            'MoreHorizRounded',
            'MoreVertRounded',
            'NotificationsNoneRounded',
            'NotificationsRounded',
            'PersonAddRounded',
            'PersonOutlineRounded',
            'PersonRounded',
            'RadioButtonCheckedRounded',
            'RadioButtonUncheckedRounded',
            'RemoveRedEyeRounded',
            'ReportProblemRounded',
            'SaveAltRounded',
            'SearchRounded',
            'SendRounded',
            'SettingsRounded',
            'SupervisorAccountRounded',
            'TimelapseRounded',
            'UploadRounded',
            'VisibilityOffRounded',
            'WarningAmberRounded',
          ].map((iconName) => (
            <Paper
              key={iconName}
              elevation={0}
              sx={{
                p: 1.5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0.5,
                minWidth: 80,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Icon name={iconName as IconName} />
            </Paper>
          ))}
        </Stack>
      </Box>

      {/* Sizes */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Sizes
        </Typography>
        <Stack spacing={2}>
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Small
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Icon name="AddRounded" fontSize="small" />
              <Icon name="CheckRounded" fontSize="small" />
              <Icon name="DeleteRounded" fontSize="small" />
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Medium
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Icon name="AddRounded" fontSize="medium" />
              <Icon name="CheckRounded" fontSize="medium" />
              <Icon name="DeleteRounded" fontSize="medium" />
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Large
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Icon name="AddRounded" fontSize="large" />
              <Icon name="CheckRounded" fontSize="large" />
              <Icon name="DeleteRounded" fontSize="large" />
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Colors */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Colors
        </Typography>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
            <Icon name="AddRounded" color="primary" />
            <Icon name="CheckRounded" color="secondary" />
            <Icon name="ErrorRounded" color="error" />
            <Icon name="InfoRounded" color="info" />
            <Icon name="CheckCircleRounded" color="success" />
            <Icon name="WarningAmberRounded" color="warning" />
            <Icon name="MoreVertRounded" color="action" />
            <Icon name="AddRounded" color="disabled" />
          </Stack>
        </Stack>
      </Box>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
