/**
 * TableRow Component
 *
 * A Material UI TableRow component customized with design tokens from Figma.
 * Displays multiple table cells in a row with support for hover, selected states,
 * divider, checkbox, and different sizes.
 *
 * Based on Figma design: node-id=6594-46473
 */

import React from 'react';
import { Box, useTheme } from '@mui/material';
import { TableCell } from '../TableCell';

export interface TableRowProps {
  /**
   * Array of cell content to display
   */
  cells?: React.ReactNode[];
  /**
   * Number of columns/cells to display
   * @default 10
   */
  columns?: number;
  /**
   * Whether this is a small size variant
   * @default false
   */
  small?: boolean;
  /**
   * Whether to show a checkbox
   * @default false
   */
  checkbox?: boolean;
  /**
   * Whether the checkbox is checked
   * @default false
   */
  checked?: boolean;
  /**
   * Callback fired when the checkbox is clicked
   */
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  /**
   * Whether the row is in hover state
   * @default false
   */
  hover?: boolean;
  /**
   * Whether the row is selected
   * @default false
   */
  selected?: boolean;
  /**
   * Whether to show a divider at the bottom
   * @default false
   */
  divider?: boolean;
  /**
   * Callback fired when the row is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Custom sx prop
   */
  sx?: object;
}

/**
 * TableRow component
 *
 * @example
 * ```tsx
 * <TableRow cells={['Cell 1', 'Cell 2', 'Cell 3']} />
 * <TableRow
 *   cells={['Cell 1', 'Cell 2']}
 *   checkbox
 *   checked={true}
 *   selected
 *   divider
 * />
 * <TableRow small columns={5} hover />
 * ```
 */
export const TableRow = React.forwardRef<HTMLDivElement, TableRowProps>(
  (
    {
      cells = [],
      columns = 10,
      small = false,
      checkbox = false,
      checked = false,
      onCheckboxChange,
      hover = false,
      selected = false,
      divider = false,
      onClick,
      sx,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    // Background color based on state
    const getBackgroundColor = () => {
      if (selected) {
        return theme.palette.action.selected; // rgba(0, 0, 0, 0.12)
      }
      if (hover) {
        // Material UI default hover color if not in theme
        return theme.palette.action.hover || 'rgba(0, 0, 0, 0.04)';
      }
      return 'transparent';
    };

    // Height based on size
    const height = small ? 32 : 52;

    // Generate cells array if not provided
    const cellsToRender =
      cells.length > 0 ? cells : Array.from({ length: columns }, (_, i) => `Cell ${i + 1}`);

    return (
      <Box
        ref={ref}
        onClick={onClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: divider ? `1px solid ${theme.palette.divider}` : 'none',
          backgroundColor: getBackgroundColor(),
          height: height,
          width: '100%',
          cursor: onClick ? 'pointer' : 'default',
          transition: 'background-color 0.2s ease',
          ...sx,
        }}
        {...props}
      >
        {cellsToRender.map((cell, index) => {
          // First cell gets checkbox if enabled
          const isFirstCell = index === 0;
          const showCheckbox = checkbox && isFirstCell;

          const cellProps: React.ComponentProps<typeof TableCell> = {
            small,
            checkbox: showCheckbox,
            checked,
            sx: {
              flex: '1 1 0',
              minWidth: 0,
            },
          };

          if (showCheckbox && onCheckboxChange) {
            cellProps.onCheckboxChange = onCheckboxChange;
          }

          return (
            <TableCell key={index} {...cellProps}>
              {typeof cell === 'string' ? cell : cell}
            </TableCell>
          );
        })}
      </Box>
    );
  }
);

TableRow.displayName = 'TableRow';

export default TableRow;
