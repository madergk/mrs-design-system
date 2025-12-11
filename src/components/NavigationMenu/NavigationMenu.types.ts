/**
 * NavigationMenu Types
 *
 * Type definitions for the NavigationMenu component
 */

import type { IconName } from '../Icon';

/**
 * Navigation item configuration
 */
export interface NavigationItem {
  /**
   * Unique identifier for the item
   */
  id: string;
  /**
   * Label text to display
   */
  label: string;
  /**
   * Icon name to display on the left
   */
  icon?: IconName;
  /**
   * Whether this item is selected/active
   * @default false
   */
  selected?: boolean;
  /**
   * Whether this item is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional badge or indicator (e.g., notification count)
   */
  badge?: string | number;
  /**
   * Callback fired when the item is clicked
   */
  onClick?: (item: NavigationItem) => void;
}

/**
 * Navigation section configuration
 */
export interface NavigationSection {
  /**
   * Unique identifier for the section
   */
  id: string;
  /**
   * Section header text (optional - if not provided, section has no header)
   * If header is provided, the section becomes expandable/collapsible
   */
  header?: string;
  /**
   * Navigation items in this section
   */
  items: NavigationItem[];
  /**
   * Whether this section is expanded (only applies if header is provided)
   * @default false
   */
  expanded?: boolean;
  /**
   * Whether this section is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Callback fired when the section header is clicked (for expandable sections)
   */
  onHeaderClick?: (section: NavigationSection) => void;
}

/**
 * CTA Button configuration
 */
export interface NavigationCTA {
  /**
   * Button label text
   */
  label: string;
  /**
   * Callback fired when the button is clicked
   */
  onClick?: () => void;
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
}
