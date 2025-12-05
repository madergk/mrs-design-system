/**
 * TableHead Component
 *
 * A Material UI TableHead cell component customized with design tokens from Figma.
 * Supports small and regular sizes, optional checkbox, and optional sort icons.
 *
 * Based on Figma design: node-id=6594-46364
 */

import React from 'react';
import { Box, useTheme } from '@mui/material';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';

export interface TableHeadProps {
  /**
   * The label text to display
   * @default 'Head'
   */
  label?: string;
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
   * Whether the checkbox is indeterminate
   * @default false
   */
  indeterminate?: boolean;
  /**
   * Callback fired when the checkbox is clicked
   */
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  /**
   * Whether to show a sort icon on the left
   * @default false
   */
  leftSort?: boolean;
  /**
   * Whether to show a sort icon on the right
   * @default false
   */
  rightSort?: boolean;
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
 * TableHead component
 *
 * @example
 * ```tsx
 * <TableHead label="Name" />
 * <TableHead label="Status" checkbox checked={true} />
 * <TableHead label="Date" small leftSort rightSort />
 * ```
 */
export const TableHead = React.forwardRef<HTMLDivElement, TableHeadProps>(
  (
    {
      label = 'Head',
      small = false,
      checkbox = false,
      checked = false,
      indeterminate = false,
      onCheckboxChange,
      leftSort = false,
      rightSort = false,
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
          paddingTop: theme.spacing(0.875), // 7px
          paddingBottom: theme.spacing(0.875), // 7px
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
          gap: checkbox ? (small ? theme.spacing(1.5) : 0) : 0, // 12px gap when checkbox is present in small variant
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
              flexShrink: 0,
            }}
          >
            <Checkbox
              checked={checked}
              indeterminate={indeterminate}
              onChange={onCheckboxChange}
              {...getCheckboxProps()}
            />
          </Box>
        )}

        {leftSort && (
          <Box
            sx={{
              display: 'flex',
              gap: theme.spacing(1.25), // 10px
              paddingX: theme.spacing(0.5), // 4px
              paddingY: 0,
              flexShrink: 0,
            }}
          >
            <Icon
              name="ArrowDownwardRounded"
              sx={{
                fontSize: 18,
                color: theme.palette.text.primary,
              }}
            />
          </Box>
        )}

        <Box
          component="p"
          sx={{
            // Table header typography: Nunito Medium, 14px, lineHeight 24px
            fontFamily: theme.typography.fontFamily,
            fontSize: '14px', // 0.875rem
            fontWeight: 500, // Medium
            lineHeight: '24px',
            letterSpacing: '0.17px',
            color: theme.palette.text.primary,
            whiteSpace: 'nowrap',
            margin: 0,
            flex: checkbox && small ? 0 : '1 1 0',
            minWidth: 0,
          }}
        >
          {label}
        </Box>

        {rightSort && (
          <Box
            sx={{
              display: 'flex',
              gap: theme.spacing(1.25), // 10px
              paddingX: theme.spacing(0.5), // 4px
              paddingY: 0,
              flexShrink: 0,
            }}
          >
            <Icon
              name="ArrowDownwardRounded"
              sx={{
                fontSize: 18,
                color: theme.palette.text.primary,
              }}
            />
          </Box>
        )}
      </Box>
    );
  }
);

TableHead.displayName = 'TableHead';

export default TableHead;

