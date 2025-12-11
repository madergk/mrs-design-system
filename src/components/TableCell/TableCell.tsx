/**
 * TableCell Component
 *
 * A Material UI TableCell component customized with design tokens from Figma.
 * Supports small and regular sizes, optional checkbox, and optional secondary text.
 *
 * Based on Figma design: node-id=6594-46413
 */

import React from 'react';
import { Box, useTheme } from '@mui/material';
import { Checkbox } from '../Checkbox';
import { Typography } from '../Typography';

export interface TableCellProps {
  /**
   * The main content to display
   */
  children?: React.ReactNode;
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
   * Optional secondary text to display below the main content
   */
  secondaryText?: React.ReactNode;
  /**
   * Custom width for the cell
   * @default '140px'
   */
  width?: string | number;
  /**
   * Custom sx prop
   */
  sx?: object;
}

/**
 * TableCell component
 *
 * @example
 * ```tsx
 * <TableCell>Cell</TableCell>
 * <TableCell checkbox checked={true}>Cell</TableCell>
 * <TableCell small checkbox>Cell</TableCell>
 * <TableCell secondaryText="Secondary">Cell</TableCell>
 * ```
 */
export const TableCell = React.forwardRef<HTMLDivElement, TableCellProps>(
  (
    {
      children,
      small = false,
      checkbox = false,
      checked = false,
      onCheckboxChange,
      secondaryText,
      width = '140px',
      sx,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    // Padding based on size and checkbox
    const getPadding = () => {
      if (small && checkbox) {
        return {
          paddingLeft: theme.spacing(2), // 16px
          paddingRight: 0,
          paddingTop: theme.spacing(0.75), // 6px
          paddingBottom: theme.spacing(0.75), // 6px
        };
      }
      if (small && !checkbox) {
        return {
          paddingX: theme.spacing(2), // 16px
          paddingTop: theme.spacing(0.75), // 6px
          paddingBottom: theme.spacing(0.75), // 6px
        };
      }
      if (!small && checkbox) {
        return {
          paddingLeft: theme.spacing(0.5), // 4px
          paddingRight: 0,
          paddingY: theme.spacing(2), // 16px
        };
      }
      // Regular, no checkbox
      return {
        padding: theme.spacing(2), // 16px
      };
    };

    // Checkbox size and positioning
    const getCheckboxProps = () => {
      if (small) {
        return {
          size: 'small' as const,
          sx: {
            padding: theme.spacing(0.25), // 2px
          },
        };
      }
      return {
        size: 'medium' as const,
        sx: {
          padding: theme.spacing(1.125), // 9px
        },
      };
    };

    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: checkbox ? theme.spacing(1.5) : 0, // 12px gap when checkbox is present
          backgroundColor: 'transparent',
          width: width,
          ...getPadding(),
          ...sx,
        }}
        {...props}
      >
        {checkbox && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: small ? '20px' : '20px',
              width: small ? '24px' : '42px',
              flexShrink: 0,
            }}
          >
            <Checkbox checked={checked} onChange={onCheckboxChange} {...getCheckboxProps()} />
          </Box>
        )}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: '1 1 0',
            minWidth: 0,
            minHeight: 0,
          }}
        >
          {children && (
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              {children}
            </Typography>
          )}
          {secondaryText && (
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.secondary,
                marginTop: theme.spacing(0.25),
              }}
            >
              {secondaryText}
            </Typography>
          )}
        </Box>
      </Box>
    );
  }
);

TableCell.displayName = 'TableCell';

export default TableCell;
