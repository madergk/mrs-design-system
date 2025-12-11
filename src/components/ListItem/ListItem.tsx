/**
 * ListItem Component
 *
 * A Material UI ListItem component customized with design tokens from Figma.
 * Supports all variants: dense, disGutters
 * Supports all states: Enabled, Hovered, Selected, Focused, Pressed, Disabled
 * Supports leftSlot, rightSlot, secondText, and divider
 */

import React from 'react';
import type { ListItemProps as MuiListItemProps } from '@mui/material/ListItem';
import MuiListItem from '@mui/material/ListItem';
import MuiListItemText from '@mui/material/ListItemText';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import MuiListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import MuiDivider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import type { IconName } from '../Icon';
import { Icon } from '../Icon';

export interface ListItemProps extends Omit<MuiListItemProps, 'dense' | 'disableGutters'> {
  /**
   * The primary text content
   */
  label?: string;
  /**
   * If true, shows secondary text below the primary text
   * @default false
   */
  secondText?: boolean;
  /**
   * The secondary text content (only shown if secondText is true)
   */
  secondaryText?: string;
  /**
   * If true, uses dense padding and smaller typography
   * @default false
   */
  dense?: boolean;
  /**
   * If true, removes horizontal padding (gutters)
   * @default false
   */
  disGutters?: boolean;
  /**
   * If true, shows a divider at the bottom
   * @default false
   */
  divider?: boolean;
  /**
   * If true, shows left slot (icon)
   * @default true
   */
  leftSlot?: boolean;
  /**
   * The icon name for the left slot
   */
  leftIcon?: IconName;
  /**
   * If true, shows right slot (icon)
   * @default false
   */
  rightSlot?: boolean;
  /**
   * The icon name for the right slot
   */
  rightIcon?: IconName;
  /**
   * Custom content for the right slot (overrides rightIcon if provided)
   */
  rightSlotContent?: React.ReactNode;
  /**
   * The state of the list item
   * @default 'Enabled'
   */
  state?: 'Enabled' | 'Hovered' | 'Selected' | 'Focused' | 'Pressed' | 'Disabled';
}

const StyledListItem = styled(MuiListItem, {
  shouldForwardProp: (prop) =>
    prop !== 'dense' &&
    prop !== 'disGutters' &&
    prop !== 'state' &&
    prop !== 'isSelected' &&
    prop !== 'isDisabled',
})<{
  dense?: boolean;
  disGutters?: boolean;
  state?: ListItemProps['state'];
  isSelected?: boolean;
  isDisabled?: boolean;
}>(({ theme, dense, disGutters, state, isSelected, isDisabled }) => {
  const isDense = dense ?? false;
  const paddingX = disGutters ? 0 : theme.spacing(2); // 16px
  const paddingY = isDense ? theme.spacing(0.5) : theme.spacing(1); // 4px or 8px

  // Get state colors from theme
  const getBackgroundColor = () => {
    if (isDisabled) return 'transparent';
    if (isSelected || state === 'Selected') {
      return 'rgba(0, 153, 153, 0.16)'; // From Figma design
    }
    if (state === 'Hovered' || state === 'Focused' || state === 'Pressed') {
      return 'rgba(0, 153, 153, 0.12)'; // From Figma design
    }
    return 'transparent';
  };

  const getTextColor = () => {
    if (isDisabled) return 'rgba(0, 0, 0, 0.38)'; // From Figma design
    if (isSelected || state === 'Selected') {
      return theme.palette.primary.dark; // #004e53
    }
    return theme.palette.text.secondary; // rgba(0, 0, 0, 0.6)
  };

  return {
    paddingLeft: paddingX,
    paddingRight: paddingX,
    paddingTop: paddingY,
    paddingBottom: paddingY,
    backgroundColor: getBackgroundColor(),
    color: getTextColor(),
    cursor: isDisabled ? 'default' : 'pointer',
    position: 'relative',
    '&:hover': {
      backgroundColor:
        !isDisabled && !isSelected && state === 'Enabled'
          ? theme.palette.primary.main + '1f'
          : getBackgroundColor(),
    },
    '&:focus-visible': {
      backgroundColor: !isDisabled ? theme.palette.primary.main + '1f' : getBackgroundColor(),
      outline: 'none',
    },
    '&:active': {
      backgroundColor: !isDisabled ? theme.palette.primary.main + '1f' : getBackgroundColor(),
    },
  };
});

const StyledListItemIcon = styled(MuiListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'dense' && prop !== 'disGutters',
})<{ dense?: boolean; disGutters?: boolean }>(({ theme, dense, disGutters: _disGutters }) => {
  void _disGutters; // disGutters is passed but not used in this styled component
  const isDense = dense ?? false;
  return {
    minWidth: isDense ? 'auto' : theme.spacing(4), // 32px for normal, auto for dense
    marginRight: isDense ? theme.spacing(1) : 0, // 8px gap for dense
    color: 'inherit',
  };
});

const StyledListItemText = styled(MuiListItemText, {
  shouldForwardProp: (prop) => prop !== 'dense' && prop !== 'isSelected' && prop !== 'isDisabled',
})<{ dense?: boolean; isSelected?: boolean; isDisabled?: boolean }>(({
  theme,
  dense,
  isSelected,
  isDisabled,
}) => {
  const isDense = dense ?? false;
  const textColor = () => {
    if (isDisabled) return 'rgba(0, 0, 0, 0.38)'; // From Figma design
    if (isSelected) return theme.palette.primary.dark;
    return theme.palette.text.secondary;
  };

  return {
    paddingTop: theme.spacing(0.5), // 4px
    paddingBottom: theme.spacing(0.5), // 4px
    '& .MuiListItemText-primary': {
      color: textColor(),
      fontFamily: theme.typography.body1.fontFamily,
      fontSize: isDense ? theme.typography.body2.fontSize : theme.typography.body1.fontSize,
      fontWeight: theme.typography.body1.fontWeight,
      lineHeight: isDense ? theme.typography.body2.lineHeight : theme.typography.body1.lineHeight,
      letterSpacing: isDense ? '0.17px' : '0.15px',
    },
    '& .MuiListItemText-secondary': {
      color: isSelected ? theme.palette.text.secondary : theme.palette.text.secondary,
      fontFamily: theme.typography.body2.fontFamily,
      fontSize: theme.typography.body2.fontSize,
      fontWeight: theme.typography.body2.fontWeight,
      lineHeight: theme.typography.body2.lineHeight,
      letterSpacing: '0.17px',
    },
  };
});

const StyledIcon = styled(Icon, {
  shouldForwardProp: (prop) => prop !== 'isSelected' && prop !== 'isDisabled',
})<{ isSelected?: boolean; isDisabled?: boolean }>(({ theme, isSelected, isDisabled }) => {
  if (isDisabled) {
    return {
      color: 'rgba(0, 0, 0, 0.38)', // From Figma design
    };
  }
  if (isSelected) {
    return {
      color: theme.palette.primary.dark, // #004e53
    };
  }
  return {
    color: 'inherit',
  };
});

/**
 * ListItem component
 *
 * @example
 * ```tsx
 * <ListItem label="List item" leftIcon="AddRounded" />
 * <ListItem label="List item" secondText secondaryText="Secondary" dense />
 * <ListItem label="List item" state="Selected" divider />
 * ```
 */
export const ListItem = React.forwardRef<React.ElementRef<typeof MuiListItem>, ListItemProps>(
  (
    {
      label = 'List item',
      secondText = false,
      secondaryText = 'Secondary',
      dense = false,
      disGutters = false,
      divider = false,
      leftSlot = true,
      leftIcon = 'AddRounded',
      rightSlot = false,
      rightIcon = 'ChevronLeftRounded',
      rightSlotContent,
      state = 'Enabled',
      ...props
    },
    ref
  ) => {
    const isSelected = state === 'Selected';
    const isDisabled = state === 'Disabled';

    return (
      <>
        <StyledListItem
          ref={ref}
          dense={dense}
          disGutters={disGutters}
          state={state}
          isSelected={isSelected}
          isDisabled={isDisabled}
          {...props}
        >
          {leftSlot && (
            <StyledListItemIcon dense={dense} disGutters={disGutters}>
              <StyledIcon
                name={leftIcon}
                fontSize="small"
                isSelected={isSelected}
                isDisabled={isDisabled}
              />
            </StyledListItemIcon>
          )}
          <StyledListItemText
            dense={dense}
            isSelected={isSelected}
            isDisabled={isDisabled}
            primary={label}
            secondary={secondText ? secondaryText : undefined}
          />
          {rightSlot && (
            <MuiListItemSecondaryAction>
              {rightSlotContent || (
                <StyledIcon
                  name={rightIcon}
                  fontSize="small"
                  isSelected={isSelected}
                  isDisabled={isDisabled}
                />
              )}
            </MuiListItemSecondaryAction>
          )}
        </StyledListItem>
        {divider && <MuiDivider />}
      </>
    );
  }
);

ListItem.displayName = 'ListItem';

export default ListItem;
