/**
 * AccordionGroup Component
 *
 * A container component that manages multiple Accordion components.
 * Handles first-of-type and last-of-type styling automatically.
 */

import React, { useState } from 'react';
import { Box } from '@mui/material';
import type { AccordionProps } from '../Accordion';
import { Accordion } from '../Accordion';

export interface AccordionItem {
  /**
   * Unique identifier for the accordion item
   */
  id: string;
  /**
   * The content to display in the accordion summary (header)
   */
  summary?: React.ReactNode;
  /**
   * The content to display in the accordion details (body)
   */
  content?: React.ReactNode;
  /**
   * If true, the accordion is disabled
   */
  disabled?: boolean;
  /**
   * If true, the accordion is expanded by default
   */
  defaultExpanded?: boolean;
  /**
   * Additional props to pass to the Accordion component
   */
  accordionProps?: Omit<
    AccordionProps,
    'summary' | 'children' | 'expanded' | 'disabled' | 'firstOfType' | 'lastOfType'
  >;
}

export interface AccordionGroupProps {
  /**
   * Array of accordion items to display
   */
  items: AccordionItem[];
  /**
   * If true, only one accordion can be expanded at a time
   * @default false
   */
  exclusive?: boolean;
  /**
   * Callback fired when an accordion's expand state changes
   */
  onChange?: (itemId: string, expanded: boolean) => void;
  /**
   * Controlled expanded state
   * For exclusive mode: string | false (single ID)
   * For non-exclusive mode: string[] (array of IDs)
   * If provided, the component becomes controlled
   */
  expanded?: string | false | string[];
  /**
   * Default expanded accordion ID(s) (uncontrolled)
   * For exclusive mode: string | false
   * For non-exclusive mode: string[]
   */
  defaultExpanded?: string | false | string[];
}

/**
 * AccordionGroup component
 *
 * Manages multiple Accordion components with automatic styling
 *
 * @example
 * ```tsx
 * <AccordionGroup
 *   items={[
 *     { id: '1', summary: 'Item 1', content: 'Content 1' },
 *     { id: '2', summary: 'Item 2', content: 'Content 2' },
 *   ]}
 * />
 * ```
 */
export const AccordionGroup = React.forwardRef<HTMLDivElement, AccordionGroupProps>(
  ({ items, exclusive = false, onChange, expanded: controlledExpanded, defaultExpanded }, ref) => {
    // Initialize default expanded state
    const getDefaultExpanded = (): string | false | string[] => {
      if (exclusive) {
        // In exclusive mode, we need string | false
        if (typeof defaultExpanded === 'string') {
          return defaultExpanded;
        }
        if (Array.isArray(defaultExpanded)) {
          // If an array is passed in exclusive mode, take the first element
          const firstId = defaultExpanded[0];
          return firstId !== undefined ? firstId : false;
        }
        return false;
      } else {
        if (Array.isArray(defaultExpanded)) {
          return defaultExpanded;
        }
        // Check items for defaultExpanded flag
        return items.filter((item) => item.defaultExpanded).map((item) => item.id);
      }
    };

    const [uncontrolledExpanded, setUncontrolledExpanded] = useState<string | false | string[]>(
      getDefaultExpanded()
    );

    const isControlled = controlledExpanded !== undefined;
    // Normalize controlledExpanded in exclusive mode (handle edge case where array is passed)
    const normalizedControlledExpanded =
      isControlled && exclusive && Array.isArray(controlledExpanded)
        ? controlledExpanded.length > 0
          ? controlledExpanded[0]
          : false
        : controlledExpanded;
    const expanded = isControlled ? normalizedControlledExpanded : uncontrolledExpanded;

    const handleChange =
      (itemId: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        if (!isControlled) {
          if (exclusive) {
            setUncontrolledExpanded(isExpanded ? itemId : false);
          } else {
            const currentExpanded = Array.isArray(uncontrolledExpanded)
              ? uncontrolledExpanded
              : uncontrolledExpanded
                ? [uncontrolledExpanded]
                : [];
            if (isExpanded) {
              setUncontrolledExpanded([...currentExpanded, itemId]);
            } else {
              setUncontrolledExpanded(currentExpanded.filter((id) => id !== itemId));
            }
          }
        }

        if (onChange) {
          onChange(itemId, isExpanded);
        }
      };

    const isItemExpanded = (itemId: string): boolean => {
      if (exclusive) {
        // In exclusive mode, expanded should be string | false
        // Handle edge case where it might be an array (defensive programming)
        if (Array.isArray(expanded)) {
          return expanded.length > 0 && expanded[0] === itemId;
        }
        return expanded === itemId;
      } else {
        return Array.isArray(expanded) ? expanded.includes(itemId) : false;
      }
    };

    return (
      <Box ref={ref} sx={{ width: '100%' }}>
        {items.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === items.length - 1;
          const isExpanded = isItemExpanded(item.id);

          return (
            <Accordion
              key={item.id}
              summary={item.summary}
              expanded={isExpanded}
              {...(item.disabled !== undefined ? { disabled: item.disabled } : {})}
              firstOfType={isFirst}
              lastOfType={isLast}
              onChange={handleChange(item.id)}
              {...item.accordionProps}
            >
              {item.content}
            </Accordion>
          );
        })}
      </Box>
    );
  }
);

AccordionGroup.displayName = 'AccordionGroup';

export default AccordionGroup;
