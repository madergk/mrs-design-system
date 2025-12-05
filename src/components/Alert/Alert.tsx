/**
 * Alert Component
 *
 * A Material UI Alert component customized with design tokens from Figma.
 * Supports all severities: error, warning, info, success
 * Supports all variants: filled, outlined, standard
 * Supports optional icon, title, description, action button, and close button
 *
 * Based on Figma design: node-id=6595-48211
 */

import React from 'react';
import { Box, useTheme } from '@mui/material';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Button } from '../Button';
import { Typography } from '../Typography';

export interface AlertProps {
  /**
   * The severity of the alert
   * @default 'error'
   */
  severity?: 'error' | 'warning' | 'info' | 'success';
  /**
   * The variant to use
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined' | 'standard';
  /**
   * The title text to display
   */
  title?: string;
  /**
   * The description text to display
   */
  description?: string;
  /**
   * Whether to show the icon
   * @default true
   */
  icon?: boolean;
  /**
   * Whether to show the close button
   * @default true
   */
  close?: boolean;
  /**
   * Callback fired when the close button is clicked
   */
  onClose?: () => void;
  /**
   * Whether to show the action button
   * @default false
   */
  action?: boolean;
  /**
   * Action button label
   * @default 'Action'
   */
  actionLabel?: string;
  /**
   * Callback fired when the action button is clicked
   */
  onActionClick?: () => void;
  /**
   * Custom sx prop
   */
  sx?: object;
}

/**
 * Alert component
 *
 * @example
 * ```tsx
 * <Alert 
 *   severity="error" 
 *   variant="filled"
 *   title="Error Title"
 *   description="Error description"
 * />
 * <Alert 
 *   severity="success" 
 *   variant="outlined"
 *   title="Success"
 *   description="Operation completed"
 *   action
 *   actionLabel="View Details"
 * />
 * ```
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      severity = 'error',
      variant = 'filled',
      title,
      description,
      icon = true,
      close = true,
      onClose,
      action = false,
      actionLabel = 'Action',
      onActionClick,
      sx,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    // Get icon name based on severity
    const getIconName = (): 'ErrorRounded' | 'WarningAmberRounded' | 'InfoRounded' | 'CheckCircleRounded' => {
      switch (severity) {
        case 'error':
          return 'ErrorRounded';
        case 'warning':
          return 'WarningAmberRounded';
        case 'info':
          return 'InfoRounded';
        case 'success':
          return 'CheckCircleRounded';
        default:
          return 'ErrorRounded';
      }
    };

    // Get colors based on severity and variant
    // Colors match Figma design exactly
    type AlertColors = {
      backgroundColor: string;
      textColor: string;
      iconColor: string;
      closeColor: string;
      borderColor: string | undefined;
    };

    const getColors = (): AlertColors => {
      if (variant === 'filled') {
        switch (severity) {
          case 'error':
            return {
              backgroundColor: '#ab1a1a', // error/main
              textColor: '#ffffff', // error/contrastText
              iconColor: '#ffffff',
              closeColor: '#ffffff',
              borderColor: undefined,
            };
          case 'warning':
            return {
              backgroundColor: '#dfa00a', // warning/main
              textColor: 'rgba(0, 0, 0, 0.87)', // text/primary
              iconColor: 'rgba(0, 0, 0, 0.87)',
              closeColor: '#ffffff', // White X for filled warning
              borderColor: undefined,
            };
          case 'info':
            return {
              backgroundColor: '#125c87', // info/dark
              textColor: '#ffffff', // info/contrastText
              iconColor: '#ffffff',
              closeColor: '#ffffff',
              borderColor: undefined,
            };
          case 'success':
            return {
              backgroundColor: '#1e5b21', // success/dark
              textColor: '#ffffff', // success/contrastText
              iconColor: '#ffffff',
              closeColor: '#ffffff',
              borderColor: undefined,
            };
          default:
            return {
              backgroundColor: '#ab1a1a',
              textColor: '#ffffff',
              iconColor: '#ffffff',
              closeColor: '#ffffff',
              borderColor: undefined,
            };
        }
      }

      // Outlined and Standard variants
      const variantColors: Record<'error' | 'warning' | 'info' | 'success', { light: string; dark: string }> = {
        error: {
          light: '#fef2f4', // error/light
          dark: '#620f0f', // error/dark (for border and text)
        },
        warning: {
          light: '#fffadf', // warning/light
          dark: '#5e2902', // warning/dark (for border and text)
        },
        info: {
          light: '#e3ecf2', // info/light
          dark: '#125c87', // info/dark (for border and text)
        },
        success: {
          light: '#e0ebe7', // success/light
          dark: '#1e5b21', // success/dark (for border and text)
        },
      };

      const severityKey = severity as keyof typeof variantColors;
      const colorConfig = variantColors[severityKey] || variantColors.error;
      return {
        backgroundColor: colorConfig.light,
        textColor: colorConfig.dark,
        iconColor: colorConfig.dark,
        closeColor: colorConfig.dark,
        borderColor: variant === 'outlined' ? colorConfig.dark : undefined,
      };
    };

    const colors: AlertColors = getColors();

    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          gap: theme.spacing(1), // 8px
          alignItems: 'flex-start',
          backgroundColor: colors.backgroundColor,
          border: colors.borderColor ? `1px solid ${colors.borderColor}` : 'none',
          borderRadius: theme.shape.borderRadius || 12, // 12px
          padding: theme.spacing(1), // 8px
          minWidth: 320,
          maxWidth: 640,
          width: 320,
          ...sx,
        }}
        {...props}
      >
        {/* Icon */}
        {icon && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 24,
              height: 24,
              flexShrink: 0,
            }}
          >
            <Icon
              name={getIconName()}
              sx={{
                fontSize: 24,
                color: colors.iconColor,
              }}
            />
          </Box>
        )}

        {/* Content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 0',
            minWidth: 0,
            alignItems: 'flex-start',
            gap: 0,
          }}
        >
          {/* Title */}
          {title && (
            <Typography
              sx={{
                fontFamily: theme.typography.fontFamily,
                fontSize: '16px', // 1rem
                fontWeight: 500, // Medium
                lineHeight: 1.5,
                letterSpacing: '0.15px',
                color: colors.textColor,
                width: '100%',
                height: 26,
              }}
            >
              {title}
            </Typography>
          )}

          {/* Description */}
          {description && (
            <Typography
              sx={{
                fontFamily: theme.typography.fontFamily,
                fontSize: '14px', // 0.875rem
                fontWeight: 400, // Regular
                lineHeight: 1.43,
                letterSpacing: '0.15px',
                color: colors.textColor,
                width: '100%',
                height: 26,
              }}
            >
              {description}
            </Typography>
          )}

          {/* Action Button */}
          {action && (
            <Button
              variant="outlined"
              size="small"
              color="inherit"
              onClick={onActionClick}
              sx={{
                minWidth: 80,
                marginTop: theme.spacing(0.5),
                borderColor: variant === 'filled' 
                  ? (severity === 'warning' ? '#212121' : colors.textColor)
                  : '#212121',
                color: variant === 'filled' && severity !== 'warning'
                  ? colors.textColor
                  : theme.palette.text.primary,
                textTransform: 'uppercase',
                fontSize: '13px', // 0.8125rem
                fontWeight: 600, // SemiBold
                letterSpacing: '0.46px',
                paddingX: theme.spacing(1), // 8px
                paddingY: theme.spacing(0.5), // 4px
              }}
            >
              {actionLabel}
            </Button>
          )}
        </Box>

        {/* Close Button */}
        {close && (
          <IconButton
            size="small"
            color="default"
            onClick={onClose}
            sx={{
              padding: theme.spacing(1), // 8px
              borderRadius: '100px',
              width: 32,
              height: 32,
              flexShrink: 0,
              '& .MuiSvgIcon-root': {
                color: colors.closeColor,
              },
            }}
          >
            <Icon name="CloseRounded" />
          </IconButton>
        )}
      </Box>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;

