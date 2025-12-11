/**
 * CardMedia Component
 *
 * A sub-component of Card for displaying media content (images, videos, etc.)
 */

import React from 'react';
import { Box, type BoxProps } from '@mui/material';
import { Icon } from '../Icon';
import { semanticColors } from '../../theme/designTokens';

export interface CardMediaProps extends BoxProps {
  /**
   * The image source URL
   */
  image?: string;
  /**
   * The alt text for the image
   */
  alt?: string;
  /**
   * The height of the media area
   * @default 240
   */
  height?: number;
  /**
   * The width of the media area
   * @default 320
   */
  width?: number;
  /**
   * Custom content to display instead of image
   */
  children?: React.ReactNode;
}

/**
 * CardMedia component
 *
 * @example
 * ```tsx
 * <CardMedia image="/path/to/image.jpg" alt="Card image" />
 * <CardMedia>
 *   <CustomContent />
 * </CardMedia>
 * ```
 */
export const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
  ({ image, alt, height = 240, width: _width = 320, children, sx, ...props }, ref) => {
    // width is intentionally unused - kept for API consistency
    void _width;
    return (
      <Box
        ref={ref}
        sx={{
          position: 'relative',
          width: '100%',
          height,
          backgroundColor: semanticColors.action.active, // rgba(0,0,0,0.56)
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          ...sx,
        }}
        {...props}
      >
        {children ? (
          children
        ) : image ? (
          <Box
            component="img"
            src={image}
            alt={alt}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 64,
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon
              name="AccountCircleRounded"
              sx={{
                fontSize: 64,
                color: semanticColors.background.default, // white
              }}
            />
          </Box>
        )}
      </Box>
    );
  }
);

CardMedia.displayName = 'CardMedia';

export default CardMedia;
