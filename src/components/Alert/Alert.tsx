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
import { primitiveRadius, typographyVariants, semanticColors } from '@/theme';

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
    const getIconName = ():
      | 'ErrorRounded'
      | 'ErrorRounded'
      | 'InfoRounded'
      | 'CheckCircleRounded' => {
      switch (severity) {
        case 'error':
          return 'ErrorRounded';
        case 'warning':
          return 'ErrorRounded';
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
              backgroundColor: semanticColors.error.main, // #ab1a1a
              textColor: semanticColors.error.contrastText, // #ffffff
              iconColor: semanticColors.error.contrastText,
              closeColor: semanticColors.error.contrastText,
              borderColor: undefined,
            };
          case 'warning':
            return {
              backgroundColor: semanticColors.warning.main, // #dfa00a
              textColor: semanticColors.text.primary, // rgba(0, 0, 0, 0.87)
              iconColor: semanticColors.text.primary,
              closeColor: semanticColors.text.primary, // Bkack X for filled warning (per Figma design)
              borderColor: undefined,
            };
          case 'info':
            return {
              backgroundColor: '#125c87', // info/dark (from Figma, not in semanticColors)
              textColor: semanticColors.info.contrastText, // #ffffff
              iconColor: semanticColors.info.contrastText,
              closeColor: semanticColors.info.contrastText,
              borderColor: undefined,
            };
          case 'success':
            return {
              backgroundColor: '#1e5b21', // success/dark (from Figma, not in semanticColors)
              textColor: semanticColors.success.contrastText, // #ffffff
              iconColor: semanticColors.success.contrastText,
              closeColor: semanticColors.success.contrastText,
              borderColor: undefined,
            };
          default:
            return {
              backgroundColor: semanticColors.error.main,
              textColor: semanticColors.error.contrastText,
              iconColor: semanticColors.error.contrastText,
              closeColor: semanticColors.error.contrastText,
              borderColor: undefined,
            };
        }
      }

      // Outlined and Standard variants - colors from colorVariables.json
      const variantColors: Record<
        'error' | 'warning' | 'info' | 'success',
        { background: string; color: string; border: string }
      > = {
        error: {
          background: '#fdeded', // alert/error/background
          color: '#5f2120', // alert/error/color
          border: '#ab1a1a', // alert/error/border
        },
        warning: {
          background: '#fff3e0', // alert/warning/background
          color: '#3e2410', // alert/warning/color
          border: '#dfa00a', // alert/warning/border
        },
        info: {
          background: '#e5f6fd', // alert/info/background
          color: '#014361', // alert/info/color
          border: '#2481b8', // alert/info/border
        },
        success: {
          background: '#edf7ed', // alert/success/background
          color: '#1e4620', // alert/success/color
          border: '#2e7d32', // alert/success/border
        },
      };

      const severityKey = severity as keyof typeof variantColors;
      const colorConfig = variantColors[severityKey] || variantColors.error;
      return {
        backgroundColor: colorConfig.background,
        textColor: colorConfig.color,
        iconColor: colorConfig.color,
        closeColor: colorConfig.color,
        borderColor: variant === 'outlined' ? colorConfig.border : undefined,
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
          borderRadius: primitiveRadius.md,
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
                fontFamily: typographyVariants.alert.title.fontFamily,
                fontSize: typographyVariants.alert.title.fontSize,
                fontWeight: typographyVariants.alert.title.fontWeight,
                lineHeight: typographyVariants.alert.title.lineHeight,
                letterSpacing: '0.15px',
                color: colors.textColor,
                width: '100%',
              }}
            >
              {title}
            </Typography>
          )}

          {/* Description */}
          {description && (
            <Typography
              sx={{
                fontFamily: typographyVariants.alert.description.fontFamily,
                fontSize: typographyVariants.alert.description.fontSize,
                fontWeight: typographyVariants.alert.description.fontWeight,
                lineHeight: typographyVariants.alert.description.lineHeight,
                letterSpacing: '0.15px',
                color: colors.textColor,
                width: '100%',
                marginTop: title ? theme.spacing(0.5) : 0, // 4px gap between title and description
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
                borderColor:
                  variant === 'filled'
                    ? severity === 'warning'
                      ? '#212121'
                      : colors.textColor
                    : '#212121',
                color:
                  variant === 'filled' && severity !== 'warning'
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
              borderRadius: primitiveRadius.rounded,
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
