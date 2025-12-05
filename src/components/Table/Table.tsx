/**
 * Table Component
 *
 * A Material UI Table component customized with design tokens from Figma.
 * Combines TableHeadRow, TableRow, and TableFooter to create a complete table.
 *
 * Based on Figma design: node-id=6594-46634
 */

import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { TableHeadRow } from '../TableHeadRow';
import { TableRow } from '../TableRow';
import { TableFooter } from '../TableFooter';

export interface TableRowData {
  /**
   * Array of cell content for this row
   */
  cells: React.ReactNode[];
  /**
   * Unique identifier for this row
   */
  id?: string | number;
  /**
   * Whether this row is selected
   */
  selected?: boolean;
}

export interface TableProps {
  /**
   * Array of header labels
   */
  headers?: string[];
  /**
   * Array of row data
   */
  rows?: TableRowData[];
  /**
   * Number of columns
   * @default 5
   */
  columns?: number;
  /**
   * Whether this is a small size variant
   * @default false
   */
  small?: boolean;
  /**
   * Whether to show checkboxes
   * @default false
   */
  checkbox?: boolean;
  /**
   * Array of selected row indices
   */
  selectedRows?: number[];
  /**
   * Callback fired when row selection changes
   */
  onSelectionChange?: (selectedIndices: number[]) => void;
  /**
   * Whether to show the footer with pagination
   * @default true
   */
  showFooter?: boolean;
  /**
   * Current page number (1-based)
   * @default 1
   */
  page?: number;
  /**
   * Number of rows per page
   * @default 10
   */
  rowsPerPage?: number;
  /**
   * Total number of rows (for pagination)
   */
  count?: number;
  /**
   * Callback fired when the page is changed
   */
  onPageChange?: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  /**
   * Callback fired when the number of rows per page is changed
   */
  onRowsPerPageChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /**
   * Array of sort configurations for each column
   */
  sortConfig?: Array<'none' | 'left' | 'right'>;
  /**
   * Custom sx prop
   */
  sx?: object;
}

/**
 * Table component
 *
 * @example
 * ```tsx
 * <Table 
 *   headers={['Name', 'Status', 'Date']}
 *   rows={[
 *     { cells: ['John', 'Active', '2024-01-01'] },
 *     { cells: ['Jane', 'Inactive', '2024-01-02'] }
 *   ]}
 * />
 * ```
 */
export const Table = React.forwardRef<HTMLDivElement, TableProps>(
  (
    {
      headers = [],
      rows = [],
      columns = 5,
      small = false,
      checkbox = false,
      selectedRows: controlledSelectedRows,
      onSelectionChange,
      showFooter = true,
      page: controlledPage,
      rowsPerPage: controlledRowsPerPage = 10,
      count,
      onPageChange,
      onRowsPerPageChange,
      sortConfig,
      sx,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    // Internal state for uncontrolled mode
    const [internalSelectedRows, setInternalSelectedRows] = useState<number[]>([]);
    const [internalPage, setInternalPage] = useState(1);
    const [internalRowsPerPage, setInternalRowsPerPage] = useState(controlledRowsPerPage);

    // Use controlled or internal state
    const selectedRows = controlledSelectedRows !== undefined ? controlledSelectedRows : internalSelectedRows;
    const page = controlledPage !== undefined ? controlledPage : internalPage;
    const rowsPerPage = controlledRowsPerPage !== undefined ? controlledRowsPerPage : internalRowsPerPage;

    // Calculate total count
    const totalCount = count !== undefined ? count : rows.length;

    // Handle checkbox change in header (select all)
    const handleHeaderCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      if (checked) {
        const allIndices = rows.map((_, index) => index);
        if (onSelectionChange) {
          onSelectionChange(allIndices);
        } else {
          setInternalSelectedRows(allIndices);
        }
      } else {
        if (onSelectionChange) {
          onSelectionChange([]);
        } else {
          setInternalSelectedRows([]);
        }
      }
    };

    // Handle checkbox change in row
    const handleRowCheckboxChange = (rowIndex: number) => (
      event: React.ChangeEvent<HTMLInputElement>,
      checked: boolean
    ) => {
      const newSelected = checked
        ? [...selectedRows, rowIndex]
        : selectedRows.filter((idx) => idx !== rowIndex);

      if (onSelectionChange) {
        onSelectionChange(newSelected);
      } else {
        setInternalSelectedRows(newSelected);
      }
    };

    // Handle page change
    const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      if (onPageChange) {
        onPageChange(event, newPage);
      } else {
        setInternalPage(newPage);
      }
    };

    // Calculate pagination
    // Page is 1-based in props, but 0-based internally for calculations
    const currentPage = page - 1; // Convert to 0-based
    const startIndex = currentPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    // Generate headers if not provided
    const headersToRender = headers.length > 0
      ? headers
      : Array.from({ length: columns }, (_, i) => `Head ${i + 1}`);

    // Generate rows if not provided
    const allRows = rows.length > 0
      ? rows
      : Array.from({ length: 5 }, (_, i) => ({
          cells: Array.from({ length: columns }, (_, j) => `Cell ${j + 1}`),
        }));

    // Get paginated rows (rows for current page only)
    const paginatedRows = allRows.slice(startIndex, endIndex);

    // Check if all rows are selected (across all pages)
    const allSelected = allRows.length > 0 && selectedRows.length === allRows.length;
    const someSelected = selectedRows.length > 0 && selectedRows.length < allRows.length;

    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          ...sx,
        }}
        {...props}
      >
        {/* Header Row */}
        <TableHeadRow
          labels={headersToRender}
          columns={columns}
          small={small}
          checkbox={checkbox}
          checked={allSelected}
          indeterminate={someSelected}
          onCheckboxChange={handleHeaderCheckboxChange}
          selected={false}
          divider
          sortConfig={sortConfig}
        />

        {/* Data Rows - Only render rows for current page */}
        {paginatedRows.map((row, localIndex) => {
          // Calculate global index: startIndex (first row of current page) + localIndex (position within page)
          const globalIndex = startIndex + localIndex;
          return (
            <TableRow
              key={row.id || globalIndex}
              cells={row.cells}
              columns={columns}
              small={small}
              checkbox={checkbox}
              checked={selectedRows.includes(globalIndex)}
              onCheckboxChange={handleRowCheckboxChange(globalIndex)}
              selected={row.selected !== undefined ? row.selected : selectedRows.includes(globalIndex)}
              divider
            />
          );
        })}

        {/* Footer */}
        {showFooter && (
          <TableFooter
            page={page}
            rowsPerPage={rowsPerPage}
            count={totalCount}
            onPageChange={handlePageChange}
            onRowsPerPageChange={onRowsPerPageChange}
          />
        )}
      </Box>
    );
  }
);

Table.displayName = 'Table';

export default Table;

