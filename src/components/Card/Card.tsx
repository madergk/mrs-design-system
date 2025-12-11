/**
 * Card Component
 *
 * A Material UI Card component customized with design tokens from Figma.
 * Supports smallScreen and blank variants.
 * Includes sub-components: CardMedia, CardHeader, CardContent, CardActions
 */

import React from 'react';
import { Box, type BoxProps } from '@mui/material';
import { Paper } from '../Paper';
import { CardMedia } from './CardMedia';
import { CardHeader } from './CardHeader';
import { CardContent } from './CardContent';
import { CardActions } from './CardActions';
import { Chip } from '../Chip';
import { Typography } from '../Typography';
import { Icon, type IconName } from '../Icon';
import { semanticColors, typographyVariants, primitiveRadius } from '../../theme/designTokens';

export interface CardDataLine {
  /**
   * Icon name to display
   */
  icon?: IconName;
  /**
   * Text to display
   */
  text: string;
}

export interface CardProps extends Omit<BoxProps, 'children' | 'title'> {
  /**
   * If true, uses small screen layout and typography
   * @default false
   */
  smallScreen?: boolean;
  /**
   * If true, shows only instance slot (blank state)
   * @default false
   */
  blank?: boolean;
  /**
   * The header title text
   */
  header?: React.ReactNode;
  /**
   * The card title text
   */
  title?: React.ReactNode;
  /**
   * The status chip label (e.g., "En proceso")
   */
  status?: string;
  /**
   * Data display lines with icons
   */
  dataLines?: CardDataLine[];
  /**
   * Custom content to display in CardContent
   */
  children?: React.ReactNode;
  /**
   * Custom actions to display in CardActions
   */
  actions?: React.ReactNode;
  /**
   * Image source for CardMedia
   */
  image?: string;
  /**
   * Alt text for CardMedia image
   */
  imageAlt?: string;
}

/**
 * Instance Slot component for placeholder content
 */
const InstanceSlot: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Box
      className={className}
      sx={{
        backgroundColor: 'rgba(151, 71, 255, 0.04)',
        border: '1px dashed #9747ff',
        borderRadius: `${primitiveRadius.md}px`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingX: 3, // 24px
        paddingY: 0.5, // 4px
        width: '100%',
      }}
    >
      <Typography
        variant="caption"
        sx={{
          fontFamily: typographyVariants.caption.fontFamily,
          fontSize: `${typographyVariants.caption.fontSize}rem`, // 0.75rem (12px)
          fontWeight: typographyVariants.caption.fontWeight,
          lineHeight: 1.66,
          letterSpacing: '0.4px',
          color: '#9747ff',
          textAlign: 'center',
          whiteSpace: 'pre',
        }}
      >
        Instance Slot
      </Typography>
    </Box>
  );
};

/**
 * Card component
 *
 * @example
 * ```tsx
 * <Card
 *   header="Header"
 *   title="Card Title"
 *   status="En proceso"
 *   dataLines={[
 *     { icon: 'CheckRounded', text: 'Data display line 1' },
 *     { icon: 'CheckRounded', text: 'Data display line 2' },
 *   ]}
 * />
 * <Card smallScreen blank />
 * ```
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      smallScreen = false,
      blank = false,
      header,
      title,
      status,
      dataLines = [],
      children,
      actions,
      image,
      imageAlt,
      sx,
      ...props
    },
    ref
  ) => {
    // Blank state - shows only instance slot
    if (blank) {
      return (
        <Box
          ref={ref}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: smallScreen ? 444 : 600,
            ...sx,
          }}
          {...props}
        >
          <Paper variant="Elevation" elevation="1" sx={{ width: '100%' }}>
            <InstanceSlot />
          </Paper>
        </Box>
      );
    }

    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: smallScreen ? 444 : 600,
          ...sx,
        }}
        {...props}
      >
        <Paper variant="Elevation" elevation="1" sx={{ width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              borderRadius: '4px',
              width: '100%',
            }}
          >
            {/* CardMedia */}
            <CardMedia
              {...(image !== undefined ? { image } : {})}
              {...(imageAlt !== undefined ? { alt: imageAlt } : {})}
            />

            {/* CardHeader */}
            {header && <CardHeader title={header} smallScreen={smallScreen} />}

            {/* Custom CardHeader section with status and data lines */}
            {(status || title || dataLines.length > 0) && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1, // 8px
                  alignItems: 'flex-start',
                  paddingX: 2, // 16px
                  paddingY: 0,
                  width: '100%',
                }}
              >
                {/* Status Chip */}
                {status && (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-end',
                      paddingTop: 0.5, // 4px
                      paddingBottom: 0,
                      paddingX: 0,
                      width: '100%',
                    }}
                  >
                    <Chip
                      label={status}
                      variant="outlined"
                      color="info"
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(227, 236, 242, 0.5)',
                        borderColor: '#125c87', // info/dark from Figma
                        maxHeight: 24,
                        minHeight: 24,
                        height: 24,
                        padding: '3px 4px',
                        '& .MuiChip-label': {
                          paddingX: 0.75, // 6px
                          paddingY: 0,
                          minHeight: 24,
                          fontFamily: typographyVariants.chip.label.fontFamily,
                          fontSize: `${typographyVariants.chip.label.fontSize}rem`, // 0.8125rem (13px)
                          fontWeight: typographyVariants.chip.label.fontWeight,
                          lineHeight: `${typographyVariants.chip.label.lineHeight}px`, // 18px
                          letterSpacing: '0.16px',
                          color: '#125c87', // info/dark from Figma
                          whiteSpace: 'pre',
                        },
                      }}
                    />
                  </Box>
                )}

                {/* Title and Data Lines */}
                {(title || dataLines.length > 0) && (
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1, // 8px
                      alignItems: 'flex-start',
                      width: '100%',
                    }}
                  >
                    {/* Card Title */}
                    {title && (
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: typographyVariants.h6.fontFamily,
                          fontSize: `${typographyVariants.h6.fontSize}rem`, // 1.25rem (20px)
                          fontWeight: typographyVariants.h6.fontWeight,
                          lineHeight: typographyVariants.h6.lineHeight, // 1.6
                          letterSpacing: '0.15px',
                          color: semanticColors.text.primary,
                          width: '100%',
                        }}
                      >
                        {title}
                      </Typography>
                    )}

                    {/* Data Display Lines */}
                    {dataLines.map((line, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          gap: 1, // 8px
                          alignItems: 'center',
                          height: '17.141px',
                          width: '100%',
                        }}
                      >
                        {line.icon && (
                          <Box
                            sx={{
                              position: 'relative',
                              width: 14,
                              height: 14,
                              flexShrink: 0,
                            }}
                          >
                            <Icon
                              name={line.icon}
                              sx={{
                                fontSize: 14,
                                color: '#4a5565',
                              }}
                            />
                          </Box>
                        )}
                        <Box
                          sx={{
                            height: '17.141px',
                            display: 'flex',
                            alignItems: 'flex-start',
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: typographyVariants.body2.fontFamily,
                              fontSize: `${typographyVariants.body2.fontSize}rem`, // 0.875rem (14px)
                              fontWeight: typographyVariants.body2.fontWeight,
                              lineHeight: 1.43,
                              letterSpacing: '0.17px',
                              color: '#4a5565',
                              whiteSpace: 'pre',
                            }}
                          >
                            {line.text}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            )}

            {/* CardContent */}
            {children && <CardContent>{children}</CardContent>}

            {/* CardActions */}
            {actions && <CardActions>{actions}</CardActions>}
          </Box>
        </Paper>
      </Box>
    );
  }
);

Card.displayName = 'Card';

export default Card;
