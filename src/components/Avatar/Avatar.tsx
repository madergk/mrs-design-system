/**
 * Avatar Component
 *
 * A Material UI Avatar component customized with design tokens from Figma.
 * Supports all variants: circular, rounded, square
 * Supports all sizes: 40px, 32px, 24px, 18px
 * Supports all content types: text (initials), icon, image
 * Supports optional badge
 */

import React from 'react';
import type { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
import MuiAvatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { useTheme } from '@mui/material/styles';
import { Icon, type IconName } from '../Icon';
import { typographyVariants, semanticColors, primitiveColors } from '../../theme/designTokens';

export interface AvatarProps extends Omit<MuiAvatarProps, 'variant' | 'children'> {
  /**
   * The variant of the avatar
   * @default 'circular'
   */
  variant?: 'circular' | 'rounded' | 'square';
  /**
   * The size of the avatar
   * @default '40px'
   */
  size?: '40px' | '32px' | '24px' | '18px';
  /**
   * The content type of the avatar
   * @default 'text'
   */
  content?: 'text' | 'icon' | 'image';
  /**
   * Text content (initials) - used when content is 'text'
   * @default 'P'
   */
  initials?: string;
  /**
   * Icon name - used when content is 'icon'
   */
  iconName?: IconName;
  /**
   * Image source - used when content is 'image'
   */
  src?: string;
  /**
   * Image alt text - used when content is 'image'
   */
  alt?: string;
  /**
   * Whether to show a badge
   * @default false
   */
  badge?: boolean;
  /**
   * Badge color
   * @default 'success'
   */
  badgeColor?: 'success' | 'error' | 'warning' | 'info' | 'primary' | 'secondary';
}

/**
 * Avatar component
 *
 * All styling is handled via the theme configuration and design tokens
 *
 * @example
 * ```tsx
 * <Avatar variant="circular" size="40px" content="text" initials="P" />
 * <Avatar variant="rounded" size="32px" content="icon" iconName="PersonRounded" />
 * <Avatar variant="square" size="24px" content="image" src="/avatar.jpg" badge />
 * ```
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      variant = 'circular',
      size = '40px',
      content = 'text',
      initials = 'P',
      iconName,
      src,
      alt,
      badge = false,
      badgeColor = 'success',
      sx,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    // Size mapping
    const sizeMap = {
      '40px': 40,
      '32px': 32,
      '24px': 24,
      '18px': 18,
    };

    const avatarSize = sizeMap[size];

    // Typography based on size
    const getTypographyStyle = () => {
      if (size === '40px' || size === '32px') {
        return {
          fontFamily: typographyVariants.avatar.initialsLg.fontFamily,
          fontSize: `${typographyVariants.avatar.initialsLg.fontSize}px`,
          fontWeight: typographyVariants.avatar.initialsLg.fontWeight,
          lineHeight: `${typographyVariants.avatar.initialsLg.lineHeight}px`,
        };
      } else if (size === '24px') {
        return {
          fontFamily: typographyVariants.avatar.initialsMd.fontFamily,
          fontSize: `${typographyVariants.avatar.initialsMd.fontSize}px`,
          fontWeight: typographyVariants.avatar.initialsMd.fontWeight,
          lineHeight: `${typographyVariants.avatar.initialsMd.lineHeight}px`,
        };
      } else {
        // 18px
        return {
          fontFamily: typographyVariants.avatar.initialsSm.fontFamily,
          fontSize: `${typographyVariants.avatar.initialsSm.fontSize}px`,
          fontWeight: typographyVariants.avatar.initialsSm.fontWeight,
          lineHeight: `${typographyVariants.avatar.initialsSm.lineHeight}px`,
        };
      }
    };

    // Icon size based on avatar size
    const getIconSize = (): 'small' | 'medium' | 'large' | undefined => {
      if (size === '40px' || size === '32px') {
        return 'medium'; // 24px icon
      } else if (size === '24px') {
        return 'small'; // 20px icon
      } else {
        return undefined; // 18px - will use custom size
      }
    };

    // Border radius based on variant
    const getBorderRadius = () => {
      if (variant === 'circular') {
        return '50%';
      } else if (variant === 'rounded') {
        return theme.shape.borderRadius;
      } else {
        return 0;
      }
    };

    // Background color for text/icon avatars
    const backgroundColor = primitiveColors.deepPurple[500];

    // Avatar content
    let avatarChildren: React.ReactNode;

    if (content === 'image' && src) {
      avatarChildren = undefined; // MUI Avatar will handle image via src prop
    } else if (content === 'icon' && iconName) {
      const iconSize = getIconSize();
      if (size === '18px') {
        avatarChildren = (
          <Icon
            name={iconName}
            sx={{
              fontSize: 16,
              color: 'inherit',
            }}
          />
        );
      } else {
        avatarChildren = (
          <Icon
            name={iconName}
            fontSize={iconSize}
            sx={{
              color: 'inherit',
            }}
          />
        );
      }
    } else {
      // Text content
      avatarChildren = initials;
    }

    // Badge configuration
    const badgeSx = {
      '& .MuiBadge-badge': {
        width: 12,
        height: 12,
        borderRadius: '50%',
        border: `2px solid ${semanticColors.background.paper.elevation0}`,
        padding: 0,
        minWidth: 12,
        ...(size === '24px' || size === '18px'
          ? {
              bottom: -6,
              right: -6,
            }
          : {
              bottom: -2,
              right: -2,
            }),
      },
      '& .MuiBadge-dot': {
        width: 8,
        height: 8,
        borderRadius: '50%',
      },
    };

    const avatar = (
      <MuiAvatar
        ref={ref}
        variant={variant}
        {...(content === 'image' && src !== undefined ? { src } : {})}
        {...(content === 'image' && alt !== undefined ? { alt } : {})}
        sx={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: getBorderRadius(),
          backgroundColor: content !== 'image' ? backgroundColor : undefined,
          color: content !== 'image' ? semanticColors.background.paper.elevation0 : undefined,
          ...getTypographyStyle(),
          ...sx,
        }}
        {...props}
      >
        {avatarChildren}
      </MuiAvatar>
    );

    if (badge) {
      return (
        <Badge
          overlap="circular"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          variant="dot"
          color={badgeColor}
          sx={badgeSx}
        >
          {avatar}
        </Badge>
      );
    }

    return avatar;
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
