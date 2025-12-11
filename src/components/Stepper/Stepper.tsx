/**
 * Stepper Component
 *
 * A Material UI Stepper component customized with design tokens from Figma.
 * Supports horizontal and vertical orientations, optional text, and text alignment.
 * Step states: completed (with checkmark), active (with number), inactive (with number).
 */

import React from 'react';
import type { StepperProps as MuiStepperProps } from '@mui/material/Stepper';
import MuiStepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { componentTokens } from '../../theme/designTokens';

export interface StepperStep {
  /**
   * The label text for the step
   */
  label: string;
  /**
   * Optional text to display below the label
   */
  optional?: string;
  /**
   * Whether the step is completed
   */
  completed?: boolean;
  /**
   * Whether the step is active
   */
  active?: boolean;
  /**
   * Whether the step is disabled
   */
  disabled?: boolean;
}

export interface StepperProps extends Omit<MuiStepperProps, 'orientation'> {
  /**
   * The steps to display
   */
  steps: StepperStep[];
  /**
   * The orientation of the stepper
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The alignment of the text labels
   * @default 'left'
   */
  textAlignment?: 'left' | 'center';
  /**
   * Whether to show optional text
   * @default false
   */
  showOptional?: boolean;
}

/**
 * Custom StepIcon component that matches Figma design
 */
const StepIcon: React.FC<{
  active?: boolean;
  completed?: boolean;
  icon?: React.ReactNode;
}> = ({ active, completed, icon }) => {
  const theme = useTheme();

  if (completed) {
    return (
      <Box
        sx={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          backgroundColor: componentTokens.stepper.completedStep.backgroundColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.palette.common.white,
        }}
      >
        <CheckRoundedIcon sx={{ fontSize: 20, color: 'inherit' }} />
      </Box>
    );
  }

  if (active) {
    return (
      <Box
        sx={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          backgroundColor: theme.palette.primary.main,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.palette.common.white,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: '0.75rem',
            lineHeight: 1.66,
            ...(theme.typography.fontWeightRegular !== undefined
              ? { fontWeight: theme.typography.fontWeightRegular }
              : {}),
          }}
        >
          {icon}
        </Typography>
      </Box>
    );
  }

  // Inactive step
  return (
    <Box
      sx={{
        width: 24,
        height: 24,
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.38)', // text.disabled from Figma
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          fontSize: '0.75rem',
          lineHeight: 1.66,
          ...(theme.typography.fontWeightRegular !== undefined
            ? { fontWeight: theme.typography.fontWeightRegular }
            : {}),
        }}
      >
        {icon}
      </Typography>
    </Box>
  );
};

/**
 * Stepper component
 *
 * All styling is handled via the theme configuration and design tokens.
 *
 * @example
 * ```tsx
 * <Stepper
 *   steps={[
 *     { label: 'Step 1', completed: true },
 *     { label: 'Step 2', active: true },
 *     { label: 'Step 3' },
 *   ]}
 *   orientation="horizontal"
 * />
 * ```
 */
export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    { steps, orientation = 'horizontal', textAlignment = 'left', showOptional = false, ...props },
    ref
  ) => {
    const theme = useTheme();
    const activeStep = steps.findIndex((step) => step.active);

    return (
      <MuiStepper
        ref={ref}
        {...(activeStep >= 0 ? { activeStep } : {})}
        orientation={orientation}
        sx={{
          '& .MuiStepConnector-root': {
            '& .MuiStepConnector-line': {
              borderColor: componentTokens.stepper.connector,
              borderWidth: 1,
            },
          },
          '& .MuiStepLabel-root': {
            padding: 0,
            '& .MuiStepLabel-label': {
              marginTop: orientation === 'horizontal' ? 0 : 1,
              textAlign: textAlignment,
            },
          },
        }}
        {...props}
      >
        {steps.map((step, index) => (
          <Step
            key={index}
            {...(step.completed !== undefined ? { completed: step.completed } : {})}
            {...(step.active !== undefined ? { active: step.active } : {})}
            {...(step.disabled !== undefined ? { disabled: step.disabled } : {})}
          >
            <StepLabel
              StepIconComponent={StepIcon}
              StepIconProps={{
                ...(step.active !== undefined ? { active: step.active } : {}),
                ...(step.completed !== undefined ? { completed: step.completed } : {}),
                icon: index + 1,
              }}
              optional={
                showOptional && step.optional ? (
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: '0.75rem',
                      lineHeight: 1.66,
                      color:
                        step.active || step.completed
                          ? theme.palette.text.primary
                          : theme.palette.text.secondary,
                      textAlign: textAlignment,
                    }}
                  >
                    {step.optional}
                  </Typography>
                ) : null
              }
              sx={{
                '& .MuiStepLabel-label': {
                  fontSize: '0.875rem',
                  lineHeight: step.active || step.completed ? 1.57 : 1.43,
                  ...(step.active || step.completed
                    ? theme.typography.fontWeightMedium !== undefined
                      ? { fontWeight: theme.typography.fontWeightMedium }
                      : {}
                    : theme.typography.fontWeightRegular !== undefined
                      ? { fontWeight: theme.typography.fontWeightRegular }
                      : {}),
                  color:
                    step.active || step.completed
                      ? theme.palette.text.primary
                      : theme.palette.text.secondary,
                  letterSpacing: step.active || step.completed ? 0.1 : 0.17,
                  textAlign: textAlignment,
                },
                '& .MuiStepLabel-labelContainer': {
                  textAlign: textAlignment,
                },
              }}
            >
              {step.label}
            </StepLabel>
            {orientation === 'vertical' && (
              <StepContent>
                {/* Vertical stepper content can be added here if needed */}
              </StepContent>
            )}
          </Step>
        ))}
      </MuiStepper>
    );
  }
);

Stepper.displayName = 'Stepper';

export default Stepper;
