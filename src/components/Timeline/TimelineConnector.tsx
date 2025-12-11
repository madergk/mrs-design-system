/**
 * TimelineConnector Component
 *
 * Vertical line that connects timeline items.
 * Uses design tokens from the stepper component for consistency.
 */

import React from 'react';
import { Box } from '@mui/material';
import { componentTokens } from '../../theme/designTokens';
import type { TimelineConnectorProps } from './Timeline.types';

export type { TimelineConnectorProps };

/**
 * TimelineConnector component
 *
 * Renders a vertical line that connects timeline items.
 * The connector is hidden when `hide` prop is true (typically for the last item).
 *
 * @example
 * ```tsx
 * <TimelineConnector />
 * <TimelineConnector hide /> // For last item
 * ```
 */
export const TimelineConnector = React.forwardRef<HTMLDivElement, TimelineConnectorProps>(
  ({ hide = false, sx, ...props }, ref) => {
    if (hide) {
      return null;
    }

    return (
      <Box
        ref={ref}
        sx={{
          width: '2px',
          backgroundColor: componentTokens.stepper.connector, // #bdbdbd
          minHeight: '1px',
          flexGrow: 1,
          flexShrink: 0,
          ...sx,
        }}
        {...props}
      />
    );
  }
);

TimelineConnector.displayName = 'TimelineConnector';

export default TimelineConnector;
