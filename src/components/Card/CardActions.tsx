/**
 * CardActions Component
 *
 * A sub-component of Card for displaying action buttons
 */

import React from 'react';
import { Box, type BoxProps } from '@mui/material';

export interface CardActionsProps extends BoxProps {
  /**
   * The action buttons or content to display
   */
  children?: React.ReactNode;
}

/**
 * CardActions component
 *
 * @example
 * ```tsx
 * <CardActions>
 *   <Button>Action 1</Button>
 *   <Button>Action 2</Button>
 * </CardActions>
 * ```
 */
export const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
  ({ children, sx, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          gap: 1, // 8px
          alignItems: 'center',
          padding: 2, // 16px
          width: '100%',
          ...sx,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

CardActions.displayName = 'CardActions';

export default CardActions;
