/**
 * TimelineItem Component
 *
 * Individual item in a timeline.
 * Contains a dot indicator, connector, label, description, and optional action.
 */

import React from 'react';
import { Box, useTheme } from '@mui/material';
import { Typography } from '../Typography';
import { TimelineDot } from './TimelineDot';
import { TimelineConnector } from './TimelineConnector';
import type { TimelineItemProps } from './Timeline.types';

export type { TimelineItemProps };

/**
 * TimelineItem component
 *
 * Renders a single timeline item with:
 * - Dot indicator (with variant support)
 * - Connector line (hidden if isLast)
 * - Label (Typography subtitle1)
 * - Description (Typography body2)
 * - Optional action button
 *
 * @example
 * ```tsx
 * <TimelineItem
 *   label="Item Label"
 *   description="Item description"
 *   dotVariant="filled"
 * />
 * <TimelineItem
 *   label="Item Label"
 *   description="Item description"
 *   dotVariant="current"
 *   action={<Button>Action</Button>}
 * />
 * ```
 */
export const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ label, description, action, dotVariant = 'filled', isLast = false, sx, ...props }, ref) => {
    const theme = useTheme();

    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          flexShrink: 0,
          width: '100%',
          ...sx,
        }}
        {...props}
      >
        {/* Dot Container (horizontal) */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: 35, // From design tokens
            flexShrink: 0,
            position: 'relative',
          }}
        >
          <TimelineDot variant={dotVariant} />
          {/* Connector Container */}
          <Box
            sx={{
              width: 16, // From design tokens
              height: 35,
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TimelineConnector hide={isLast} />
          </Box>
          {/* Label Container */}
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              height: 29, // From design tokens
              minWidth: 0,
              minHeight: 0,
            }}
          >
            <Typography variant="subtitle1" gutterBottom={false}>
              {label}
            </Typography>
          </Box>
        </Box>

        {/* Description Container */}
        {(description || action) && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              width: '100%',
              flexShrink: 0,
            }}
          >
            {/* Connector placeholder for alignment */}
            <Box
              sx={{
                width: 12, // Dot width
                flexShrink: 0,
              }}
            />
            {/* Connector Container */}
            <Box
              sx={{
                width: 16, // Connector container width
                height: 35,
                flexShrink: 0,
              }}
            />
            {/* Content Container */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                flexGrow: 1,
                paddingLeft: theme.spacing(2), // 16px spacing
                minWidth: 0,
              }}
            >
              {description && (
                <Typography
                  variant="body2"
                  gutterBottom={false}
                  sx={{
                    color: theme.palette.text.secondary,
                    marginBottom: action ? theme.spacing(1) : 0,
                  }}
                >
                  {description}
                </Typography>
              )}
              {action && (
                <Box
                  sx={{
                    marginTop: description ? 0 : theme.spacing(1),
                  }}
                >
                  {action}
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Box>
    );
  }
);

TimelineItem.displayName = 'TimelineItem';

export default TimelineItem;
