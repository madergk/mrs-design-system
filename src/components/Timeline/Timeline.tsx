/**
 * Timeline Component
 *
 * A vertical timeline component for displaying a sequence of events or items.
 * Each item can have a label, description, dot variant, and optional action.
 *
 * Supports composition pattern: use TimelineItem as children.
 */

import React from 'react';
import { Box } from '@mui/material';
import type { TimelineProps } from './Timeline.types';

export type { TimelineProps };

/**
 * Timeline component
 *
 * Container component for timeline items.
 * Automatically handles the last item connector visibility.
 *
 * @example
 * ```tsx
 * <Timeline>
 *   <TimelineItem
 *     label="Item Label"
 *     description="Item description"
 *     dotVariant="filled"
 *   />
 *   <TimelineItem
 *     label="Item Label"
 *     description="Item description"
 *     dotVariant="current"
 *     action={<Button>Action</Button>}
 *   />
 * </Timeline>
 * ```
 */
export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ children, orientation = 'vertical', sx, ...props }, ref) => {
    // Clone children and mark the last one
    const childrenArray = React.Children.toArray(children);
    const childrenWithProps = React.Children.map(childrenArray, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          // @ts-expect-error - TimelineItem accepts isLast prop
          isLast: index === childrenArray.length - 1,
        });
      }
      return child;
    });

    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          flexDirection: orientation === 'vertical' ? 'column' : 'row',
          alignItems: 'flex-start',
          position: 'relative',
          width: '100%',
          ...sx,
        }}
        {...props}
      >
        {childrenWithProps}
      </Box>
    );
  }
);

Timeline.displayName = 'Timeline';

export default Timeline;

