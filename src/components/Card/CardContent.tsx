/**
 * CardContent Component
 *
 * A sub-component of Card for displaying main content
 */

import React from 'react';
import { Box, type BoxProps } from '@mui/material';

export interface CardContentProps extends BoxProps {
  /**
   * The content to display
   */
  children?: React.ReactNode;
}

/**
 * CardContent component
 *
 * @example
 * ```tsx
 * <CardContent>
 *   <Typography>Content here</Typography>
 * </CardContent>
 * ```
 */
export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, sx, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
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

CardContent.displayName = 'CardContent';

export default CardContent;
