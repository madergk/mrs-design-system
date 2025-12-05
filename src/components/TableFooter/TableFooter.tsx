/**
 * TableFooter Component
 *
 * A Material UI TableFooter component customized with design tokens from Figma.
 * Displays pagination controls including rows per page selector and navigation.
 *
 * Based on Figma design: node-id=11621-1820530
 */

import React from 'react';
import { Box, useTheme } from '@mui/material';
import { IconButton } from '../IconButton';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

export interface TableFooterProps {
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
   * Total number of rows
   * @default 0
   */
  count?: number;
  /**
   * Available rows per page options
   * @default [5, 10, 25, 50, 100]
   */
  rowsPerPageOptions?: number[];
  /**
   * Callback fired when the page is changed
   */
  onPageChange?: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  /**
   * Callback fired when the number of rows per page is changed
   */
  onRowsPerPageChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /**
   * Custom sx prop
   */
  sx?: object;
}

/**
 * TableFooter component
 *
 * @example
 * ```tsx
 * <TableFooter 
 *   page={1}
 *   rowsPerPage={10}
 *   count={100}
 *   onPageChange={(e, page) => console.log(page)}
 * />
 * ```
 */
export const TableFooter = React.forwardRef<HTMLDivElement, TableFooterProps>(
  (
    {
      page = 1,
      rowsPerPage = 10,
      count = 0,
      rowsPerPageOptions = [5, 10, 25, 50, 100],
      onPageChange,
      onRowsPerPageChange,
      sx,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    // Calculate pagination info
    const startRow = count === 0 ? 0 : (page - 1) * rowsPerPage + 1;
    const endRow = Math.min(page * rowsPerPage, count);
    const totalPages = Math.ceil(count / rowsPerPage);

    // Navigation handlers
    const handlePreviousPage = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange?.(event, page - 1);
    };

    const handleNextPage = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange?.(event, page + 1);
    };

    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: theme.spacing(3.25), // 26px
          paddingX: 0,
          paddingY: theme.spacing(0.25), // 2px
          ...sx,
        }}
        {...props}
      >
        {/* Rows per page selector */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(1), // 8px
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.text.secondary,
              letterSpacing: '0.4px',
            }}
          >
            Rows per page:
          </Typography>
          <Box
            sx={{
              display: 'inline-grid',
              gridTemplateColumns: 'max-content',
              gridTemplateRows: 'max-content',
              placeItems: 'start',
              position: 'relative',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.primary,
                letterSpacing: '0.4px',
                marginTop: theme.spacing(0.375), // 3px
              }}
            >
              {rowsPerPage}
            </Typography>
            <IconButton
              size="small"
              color="default"
              onClick={() => {
                // TODO: Implement dropdown for rows per page selection
                // This would typically open a Select component
              }}
              sx={{
                position: 'absolute',
                left: theme.spacing(1.75), // 14px
                top: 0,
                width: '24px',
                height: '24px',
                padding: 0,
              }}
            >
              <Icon name="ArrowDropDownRounded" />
            </IconButton>
          </Box>
        </Box>

        {/* Page info */}
        <Typography
          variant="caption"
          sx={{
            color: theme.palette.text.primary,
            letterSpacing: '0.4px',
          }}
        >
          {count === 0 ? '0-0 of 0' : `${startRow}-${endRow} of ${count}`}
        </Typography>

        {/* Navigation buttons */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 0,
          }}
        >
          <IconButton
            size="medium"
            color="default"
            onClick={handlePreviousPage}
            disabled={page <= 1}
            sx={{
              padding: theme.spacing(1), // 8px
              borderRadius: '100px',
            }}
          >
            <Icon name="ChevronLeftRounded" />
          </IconButton>
          <IconButton
            size="medium"
            color="default"
            onClick={handleNextPage}
            disabled={page >= totalPages}
            sx={{
              padding: theme.spacing(1), // 8px
              borderRadius: '100px',
            }}
          >
            <Icon name="ChevronRightRounded" />
          </IconButton>
        </Box>
      </Box>
    );
  }
);

TableFooter.displayName = 'TableFooter';

export default TableFooter;

