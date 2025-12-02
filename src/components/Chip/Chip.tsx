/**
 * Chip Component
 *
 * A Material UI Chip component customized with design tokens from Figma.
 * Supports all variants: filled, outlined
 * Supports all sizes: small, medium
 * Supports all colors: default, primary, secondary, error, warning, info, success
 * Supports optional avatar and icon
 * Supports optional delete functionality
 */

import React from 'react';
import type { ChipProps as MuiChipProps } from '@mui/material/Chip';
import MuiChip from '@mui/material/Chip';
import type { AvatarProps } from '../Avatar';
import { Icon, type IconName } from '../Icon';
import {
  semanticColors,
  componentTokens,
  typographyVariants,
  primitiveRadius,
} from '../../theme/designTokens';

export interface ChipProps extends Omit<
  MuiChipProps,
  'color' | 'variant' | 'size' | 'avatar' | 'icon' | 'deleteIcon'
> {
  /**
   * The color of the component
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  /**
   * The variant to use
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined';
  /**
   * The size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * Avatar to display before the label
   */
  avatar?: React.ReactElement<AvatarProps>;
  /**
   * Icon to display before the label
   */
  icon?: React.ReactElement | IconName;
  /**
   * Callback fired when the delete icon is clicked
   */
  onDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Custom delete icon element
   */
  deleteIcon?: React.ReactElement;
}

/**
 * Chip component
 *
 * All styling is handled via design tokens and theme configuration
 *
 * @example
 * ```tsx
 * <Chip label="Chip" variant="filled" color="primary" size="medium" />
 * <Chip label="Chip" variant="outlined" color="default" size="small" />
 * <Chip
 *   label="Chip"
 *   avatar={<Avatar size="24px" content="text" initials="OP" />}
 *   icon="Close"
 *   onDelete={() => {}}
 * />
 * ```
 */
export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      color = 'default',
      variant = 'filled',
      size = 'medium',
      avatar,
      icon,
      onDelete,
      deleteIcon,
      label,
      sx,
      ...props
    },
    ref
  ) => {
    // Get background color for filled variant
    const getFilledBackgroundColor = () => {
      if (color === 'default') {
        return semanticColors.action.selected; // #0000001f
      }
      return semanticColors[color]?.main || semanticColors.primary.main;
    };

    // Get text color for filled variant
    const getFilledTextColor = () => {
      if (color === 'default') {
        return semanticColors.text.primary; // #000000de
      }
      const colorToken = semanticColors[color];
      if (colorToken && 'contrastText' in colorToken) {
        return colorToken.contrastText;
      }
      return semanticColors.primary.contrastText;
    };

    // Get border color for outlined variant
    const getOutlinedBorderColor = () => {
      if (color === 'default') {
        return componentTokens.chip.defaultEnabledBorder; // #bdbdbd
      }
      return semanticColors[color]?.main || semanticColors.primary.main;
    };

    // Get text color for outlined variant
    const getOutlinedTextColor = () => {
      if (color === 'default') {
        return semanticColors.text.primary; // #000000de
      }
      return semanticColors[color]?.main || semanticColors.primary.main;
    };

    // Get icon opacity based on color
    const getIconOpacity = () => {
      if (color === 'default') {
        return 0.26;
      }
      return 0.7;
    };

    // Size configuration
    const sizeConfig = {
      small: {
        height: 24,
        avatarSize: '24px' as const,
        iconSize: 20,
        paddingX: 6,
        paddingY: 0,
      },
      medium: {
        height: 32,
        avatarSize: '24px' as const,
        iconSize: 24,
        paddingX: 6,
        paddingY: 0,
      },
    };

    const config = sizeConfig[size];

    // Process avatar prop
    let processedAvatar: React.ReactElement | undefined;
    if (avatar) {
      processedAvatar = React.cloneElement(avatar, {
        size: config.avatarSize,
        ...avatar.props,
      });
    }

    // Process icon prop
    let processedIcon: React.ReactElement | undefined;
    if (icon) {
      if (typeof icon === 'string') {
        // IconName provided
        processedIcon = (
          <Icon
            name={icon}
            sx={{
              fontSize: config.iconSize,
              opacity: getIconOpacity(),
            }}
          />
        );
      } else {
        // React element provided
        const iconProps = icon.props as { sx?: Record<string, unknown> };
        processedIcon = React.cloneElement(icon, {
          sx: {
            fontSize: config.iconSize,
            opacity: getIconOpacity(),
            ...iconProps?.sx,
          },
        });
      }
    }

    // Process delete icon
    let processedDeleteIcon: React.ReactElement | undefined;
    if (deleteIcon) {
      const deleteIconProps = deleteIcon.props as { sx?: Record<string, unknown> };
      processedDeleteIcon = React.cloneElement(deleteIcon, {
        sx: {
          fontSize: config.iconSize,
          opacity: getIconOpacity(),
          ...deleteIconProps?.sx,
        },
      });
    }

    // Base styles
    const baseStyles = {
      borderRadius: primitiveRadius.rounded, // 100px (fully rounded)
      fontFamily: typographyVariants.chip.label.fontFamily,
      fontSize: `${typographyVariants.chip.label.fontSize}rem`, // 0.8125rem (13px)
      fontWeight: typographyVariants.chip.label.fontWeight,
      lineHeight: typographyVariants.chip.label.lineHeight, // 18px
      letterSpacing: '0.16px',
      height: config.height,
      padding: '4px',
      paddingLeft: avatar || processedIcon ? undefined : `${config.paddingX}px`,
      paddingRight: onDelete ? undefined : `${config.paddingX}px`,
      minHeight: config.height,
      '& .MuiChip-label': {
        paddingLeft: avatar || processedIcon ? `${config.paddingX}px` : 0,
        paddingRight: onDelete ? `${config.paddingX}px` : 0,
        paddingTop: config.paddingY,
        paddingBottom: config.paddingY,
      },
      '& .MuiChip-icon': {
        marginLeft: '4px',
        marginRight: 0,
      },
      '& .MuiChip-avatar': {
        marginLeft: '4px',
        marginRight: 0,
      },
      '& .MuiChip-deleteIcon': {
        marginLeft: 0,
        marginRight: '4px',
        fontSize: config.iconSize,
        opacity: getIconOpacity(),
      },
    };

    // Variant-specific styles
    const variantStyles =
      variant === 'filled'
        ? {
            backgroundColor: getFilledBackgroundColor(),
            color: getFilledTextColor(),
            border: 'none',
          }
        : {
            backgroundColor: 'transparent',
            color: getOutlinedTextColor(),
            border: `1px solid ${getOutlinedBorderColor()}`,
          };

    // Build MUI Chip props with conditional optional props
    return (
      <MuiChip
        ref={ref}
        label={label}
        variant={variant === 'filled' ? 'filled' : 'outlined'}
        color={color === 'default' ? 'default' : color}
        size={size}
        {...(processedAvatar && { avatar: processedAvatar })}
        {...(processedIcon && { icon: processedIcon })}
        {...(onDelete && { onDelete })}
        {...(processedDeleteIcon && { deleteIcon: processedDeleteIcon })}
        sx={{
          ...baseStyles,
          ...variantStyles,
          ...sx,
        }}
        {...props}
      />
    );
  }
);

Chip.displayName = 'Chip';

export default Chip;
