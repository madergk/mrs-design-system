/**
 * Timeline Component Types
 *
 * TypeScript interfaces and types for Timeline components
 */

import type { SxProps, Theme } from '@mui/material/styles';

export type TimelineDotVariant =
  | 'filled'
  | 'outlined'
  | 'check'
  | 'current'
  | 'danger'
  | 'warning'
  | 'info'
  | 'success';

export interface TimelineDotProps {
  /**
   * The variant of the dot
   * @default 'filled'
   */
  variant?: TimelineDotVariant;
  /**
   * The size of the dot in pixels
   * @default 12
   */
  size?: number;
  /**
   * Custom sx prop
   */
  sx?: SxProps<Theme>;
}

export interface TimelineConnectorProps {
  /**
   * If true, the connector will be hidden
   * @default false
   */
  hide?: boolean;
  /**
   * Custom sx prop
   */
  sx?: SxProps<Theme>;
}

export interface TimelineItemProps {
  /**
   * The label text for the item
   */
  label: string;
  /**
   * The description text for the item
   */
  description?: string;
  /**
   * Optional action element (e.g., Button)
   */
  action?: React.ReactNode;
  /**
   * The variant of the dot
   * @default 'filled'
   */
  dotVariant?: TimelineDotVariant;
  /**
   * If true, hides the connector (for last item)
   * @default false
   */
  isLast?: boolean;
  /**
   * Custom sx prop
   */
  sx?: SxProps<Theme>;
}

export interface TimelineProps {
  /**
   * The timeline items
   */
  children: React.ReactNode;
  /**
   * The orientation of the timeline
   * @default 'vertical'
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * Custom sx prop
   */
  sx?: SxProps<Theme>;
}
