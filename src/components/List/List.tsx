/**
 * List Component
 *
 * A Material UI List component customized with design tokens from Figma.
 * Supports all variants: disPadding, dense
 */

import React from 'react';
import type { ListProps as MuiListProps } from '@mui/material/List';
import MuiList from '@mui/material/List';
import { styled } from '@mui/material/styles';

export interface ListProps extends Omit<MuiListProps, 'dense' | 'disablePadding'> {
  /**
   * If true, removes padding from the list
   * @default false
   */
  disPadding?: boolean;
  /**
   * If true, uses dense spacing for list items
   * @default false
   */
  dense?: boolean;
}

const StyledList = styled(MuiList, {
  shouldForwardProp: (prop) => prop !== 'dense' && prop !== 'disPadding',
})<{ dense?: boolean; disPadding?: boolean }>(({
  theme,
  disPadding: _disPadding,
  dense: _dense,
}) => {
  void _dense; // dense is passed to MuiList but not used in styling
  return {
    paddingTop: _disPadding ? 0 : theme.spacing(1), // 8px or 0
    paddingBottom: _disPadding ? 0 : theme.spacing(1), // 8px or 0
    paddingLeft: 0,
    paddingRight: 0,
  };
});

/**
 * List component
 *
 * @example
 * ```tsx
 * <List>
 *   <ListItem label="Item 1" />
 *   <ListItem label="Item 2" />
 * </List>
 * <List dense disPadding>
 *   <ListItem label="Item 1" dense />
 * </List>
 * ```
 */
export const List = React.forwardRef<React.ElementRef<typeof MuiList>, ListProps>(
  ({ dense = false, disPadding = false, children, ...props }, ref) => {
    return (
      <StyledList ref={ref} dense={dense} disPadding={disPadding} {...props}>
        {children}
      </StyledList>
    );
  }
);

List.displayName = 'List';

export default List;
