/**
 * Accordion Component
 *
 * A Material UI Accordion component customized with design tokens from Figma.
 * Supports expanded/collapsed states, disabled state, and position variants
 * (first-of-type, last-of-type) for proper styling in groups.
 */

import React from 'react';
import type { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Box, useTheme } from '@mui/material';
import { Typography } from '../Typography';
import { IconButton } from '../IconButton';
import { Icon } from '../Icon';
import { Divider } from '../Divider';
import { primitiveRadius } from '../../theme/designTokens';

export interface AccordionProps extends Omit<MuiAccordionProps, 'children'> {
  /**
   * The content to display in the accordion summary (header)
   * Can be a string or React node
   */
  summary?: React.ReactNode;
  /**
   * The content to display in the accordion details (body)
   * Can be a React node
   */
  children?: React.ReactNode;
  /**
   * If true, the accordion is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * If true, the accordion is expanded
   * @default false
   */
  expanded?: boolean;
  /**
   * Callback fired when the expand/collapse state is changed
   */
  onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
  /**
   * If true, this is the first accordion in a group
   * Used for styling (rounded top corners)
   * @default false
   */
  firstOfType?: boolean;
  /**
   * If true, this is the last accordion in a group
   * Used for styling (rounded bottom corners, no divider)
   * @default false
   */
  lastOfType?: boolean;
  /**
   * Custom content to display in the accordion details
   * This is an alias for children for better semantic clarity
   */
  instance?: React.ReactNode;
}

/**
 * Accordion component
 *
 * All styling is handled via design tokens and theme configuration
 *
 * @example
 * ```tsx
 * <Accordion summary="Typography" expanded={true}>
 *   <Typography>Content here</Typography>
 * </Accordion>
 * ```
 */
export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      summary = 'Typography',
      children,
      disabled = false,
      expanded = false,
      onChange,
      firstOfType = false,
      lastOfType = false,
      instance,
      sx,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    const content = instance || children;

    // Determine border radius based on position
    const borderRadius = firstOfType
      ? `${primitiveRadius.md}px ${primitiveRadius.md}px 0 0`
      : lastOfType
        ? `0 0 ${primitiveRadius.md}px ${primitiveRadius.md}px`
        : '0';

    const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
      if (!disabled && onChange) {
        onChange(event, isExpanded);
      }
    };

    return (
      <Box sx={{ width: '100%' }}>
        <MuiAccordion
          ref={ref}
          expanded={expanded}
          onChange={handleChange}
          disabled={disabled}
          sx={{
            boxShadow:
              '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 1px -1px rgba(0, 0, 0, 0.04)',
            backgroundColor: theme.palette.background.paper,
            borderRadius: borderRadius,
            '&:before': {
              display: 'none',
            },
            ...(disabled && {
              boxShadow:
                '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 1px -1px rgba(0, 0, 0, 0.04)',
              backgroundColor: theme.palette.background.paper,
            }),
            ...sx,
          }}
          {...props}
        >
          <MuiAccordionSummary
            sx={{
              px: 2,
              minHeight: 49,
              '&.Mui-expanded': {
                minHeight: 49,
              },
              '& .MuiAccordionSummary-content': {
                my: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                flex: 1,
              },
              ...(disabled && {
                backgroundColor: theme.palette.action?.disabledBackground || 'rgba(0, 0, 0, 0.12)',
              }),
            }}
            expandIcon={
              <IconButton
                size="small"
                disabled={disabled}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: `${primitiveRadius.rounded}px`,
                }}
              >
                <Icon
                  name={expanded ? 'ExpandLessRounded' : 'ExpandMoreRounded'}
                  fontSize="small"
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                />
              </IconButton>
            }
          >
            {typeof summary === 'string' ? (
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {summary}
              </Typography>
            ) : (
              summary
            )}
          </MuiAccordionSummary>
          {expanded && (
            <MuiAccordionDetails
              sx={{
                px: 2,
                pt: 1,
                pb: 2,
              }}
            >
              {content || (
                <Box
                  sx={{
                    backgroundColor: 'rgba(151, 71, 255, 0.04)',
                    border: '1px dashed #9747ff',
                    borderRadius: `${primitiveRadius.md}px`,
                    px: 3,
                    py: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#9747ff',
                      fontSize: '0.75rem',
                      lineHeight: 1.66,
                    }}
                  >
                    Instance Slot
                  </Typography>
                </Box>
              )}
            </MuiAccordionDetails>
          )}
        </MuiAccordion>
        {!lastOfType && (
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Divider />
          </Box>
        )}
      </Box>
    );
  }
);

Accordion.displayName = 'Accordion';

export default Accordion;
