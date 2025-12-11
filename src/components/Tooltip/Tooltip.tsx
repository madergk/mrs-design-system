/**
 * Tooltip Component
 *
 * A Material UI Tooltip component customized with design tokens from Figma.
 * Supports arrow directions: none, top, bottom, left, right
 * Supports all placement options from Material UI
 */

import React from 'react';
import MuiTooltip, { type TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

export interface TooltipProps extends MuiTooltipProps {
  /**
   * The content of the tooltip
   */
  title: React.ReactNode;
  /**
   * The placement of the tooltip
   * @default 'bottom'
   */
  placement?: MuiTooltipProps['placement'];
  /**
   * If true, adds an arrow pointing to the target element
   * @default false
   */
  arrow?: boolean;
}

/**
 * Tooltip component
 *
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 * Typography: Nunito Medium, 10px, lineHeight 14px
 * Background: Dark (rgba(0,0,0,0.87))
 * Text: White
 *
 * @example
 * ```tsx
 * <Tooltip title="My Tooltip" arrow>
 *   <Button>Hover me</Button>
 * </Tooltip>
 * <Tooltip title="My Tooltip" placement="top" arrow>
 *   <Button>Top arrow</Button>
 * </Tooltip>
 * ```
 */
export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, arrow = false, placement = 'bottom', ...props }, ref) => {
    return (
      <MuiTooltip ref={ref} arrow={arrow} placement={placement} {...props}>
        {children}
      </MuiTooltip>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
