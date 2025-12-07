/**
 * TableHeadRow Component
 *
 * A Material UI TableHead row component customized with design tokens from Figma.
 * Displays multiple table head cells in a row with support for selected state,
 * divider, checkbox, and different sizes.
 *
 * Based on Figma design: node-id=6686-36863
 */

import React from 'react';
import { Box, useTheme } from '@mui/material';
import { TableHead } from '../TableHead';

export interface TableHeadRowProps {
  /**
   * Array of head labels to display
   */
  labels?: string[];
  /**
   * Number of columns/heads to display
   * @default 10
   */
  columns?: number;
  /**
   * Whether this is a small size variant
   * @default false
   */
  small?: boolean;
  /**
   * Whether to show a checkbox in the first cell
   * @default false
   */
  checkbox?: boolean;
  /**
   * Whether the checkbox is checked
   * @default false
   */
  checked?: boolean;
  /**
   * Whether the checkbox is indeterminate
   * @default false
   */
  indeterminate?: boolean;
  /**
   * Callback fired when the checkbox is clicked
   */
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
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
   * Array of sort configurations for each column
   * Each item can be: 'none' | 'left' | 'right'
   */
  sortConfig?: Array<'none' | 'left' | 'right'>;
  /**
   * Custom sx prop
   */
  sx?: object;
}

/**
 * TableHeadRow component
 *
 * @example
 * ```tsx
 * <TableHeadRow labels={['Name', 'Status', 'Date']} />
 * <TableHeadRow
 *   labels={['Name', 'Status']}
 *   checkbox
 *   checked={true}
 *   selected
 *   divider
 * />
 * <TableHeadRow small columns={5} sortConfig={['none', 'left', 'right', 'none', 'none']} />
 * ```
 */
export const TableHeadRow = React.forwardRef<HTMLDivElement, TableHeadRowProps>(
  (
    {
      labels = [],
      columns = 10,
      small = false,
      checkbox = false,
      checked = false,
      indeterminate = false,
      onCheckboxChange,
      selected = false,
      divider = false,
      sortConfig,
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
      return 'transparent';
    };

    // Height based on size
    const height = small ? 36 : 56;

    // Generate labels array if not provided
    const labelsToRender =
      labels.length > 0 ? labels : Array.from({ length: columns }, (_, i) => `Head ${i + 1}`);

    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: divider ? `1px solid ${theme.palette.divider}` : 'none',
          backgroundColor: getBackgroundColor(),
          height: height,
          width: '100%',
          ...sx,
        }}
        {...props}
      >
        {labelsToRender.map((label, index) => {
          // First cell gets checkbox if enabled
          const isFirstCell = index === 0;
          const showCheckbox = checkbox && isFirstCell;

          // Get sort configuration for this column
          const sort = sortConfig && sortConfig[index] !== undefined ? sortConfig[index] : 'none';

          const headProps: React.ComponentProps<typeof TableHead> = {
            label,
            small,
            checkbox: showCheckbox,
            checked,
            ...(showCheckbox && indeterminate !== undefined && { indeterminate }),
            leftSort: sort === 'left',
            rightSort: sort === 'right',
            sx: {
              flex: '1 1 0',
              minWidth: 0,
            },
          };

          if (showCheckbox && onCheckboxChange) {
            headProps.onCheckboxChange = onCheckboxChange;
          }

          return <TableHead key={index} {...headProps} />;
        })}
      </Box>
    );
  }
);

TableHeadRow.displayName = 'TableHeadRow';

export default TableHeadRow;
