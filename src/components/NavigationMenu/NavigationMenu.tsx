/**
 * NavigationMenu Component
 *
 * A navigation menu/sidebar component with CTA button, expandable sections, and navigation items.
 * Supports all states: enabled, hovered, selected, focused, pressed, disabled
 * Based on Figma design: node-id=9177-91957 (OrganismSidenav)
 */

import React, { useMemo, useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button } from '../Button';
import { List } from '../List';
import { ListItem } from '../ListItem';
import { Icon } from '../Icon';
import { Paper } from '../Paper';
import { Divider } from '../Divider';
import { semanticColors, primitiveTypography } from '../../theme/designTokens';
import type { NavigationItem, NavigationSection, NavigationCTA } from './NavigationMenu.types';

export interface NavigationMenuProps {
  /**
   * CTA button configuration (optional)
   * If provided, displays a button at the top of the menu
   */
  cta?: NavigationCTA;
  /**
   * Navigation sections to display
   * Each section can have a header and multiple items
   * Sections with headers are expandable/collapsible
   */
  sections: NavigationSection[];
  /**
   * Spacing between sections
   * @default 2 (16px)
   */
  sectionSpacing?: number;
  /**
   * Whether to show dividers between sections
   * @default false
   */
  showDividers?: boolean;
  /**
   * Device type
   * @default 'desktop'
   */
  device?: 'desktop' | 'mobile' | 'tablet';
  /**
   * Whether this is a small screen
   * @default false
   */
  smallScreen?: boolean;
  /**
   * Fixed width of the sidebar
   * @default 256
   */
  width?: number;
  /**
   * Whether sections with headers are expandable
   * @default true
   */
  expandable?: boolean;
  /**
   * Callback fired when a section expansion state changes
   */
  onSectionChange?: (sectionId: string, expanded: boolean) => void;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Custom sx prop for styling
   */
  sx?: React.ComponentProps<typeof Box>['sx'];
}

/**
 * Styled container for the navigation menu
 * Fixed width of 256px with elevation shadow
 */
const StyledNavigationMenuWrapper = styled(Box)<{ width?: number; smallScreen?: boolean }>(
  ({ width = 256, smallScreen }) => ({
    width: smallScreen ? '100%' : `${width}px`,
    minWidth: smallScreen ? '100%' : `${width}px`,
    height: '100%',
  })
);

/**
 * Styled container for the CTA button
 */
const CTAContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  paddingLeft: theme.spacing(2), // 16px
  paddingRight: theme.spacing(2), // 16px
  paddingBottom: theme.spacing(2), // 16px
}));

/**
 * Styled section header button (clickable for expandable sections)
 * Uses list/subheader typography from design tokens
 * From Figma: Font(family: "_fontFamily/brand", style: Bold, size: _fontSize/0,9375rem, weight: fontWeightBold, lineHeight: 48, letterSpacing: 0.10000000149011612)
 */
const SectionHeaderButton = styled('button')<{ disabled?: boolean }>(({ theme, disabled }) => ({
  fontFamily: primitiveTypography.fontFamily.brand, // Nunito brand
  fontSize: '15px', // 0.9375rem = 15px
  fontWeight: primitiveTypography.fontWeight.bold, // 700 (bold)
  lineHeight: 48, // From Figma: list/subheader lineHeight
  letterSpacing: 0.1, // From Figma: list/subheader letterSpacing
  color: semanticColors.text.secondary, // rgba(0, 0, 0, 0.6)
  backgroundColor: semanticColors.background.default,
  border: 'none',
  cursor: disabled ? 'default' : 'pointer',
  paddingLeft: theme.spacing(2), // 16px
  paddingRight: theme.spacing(3), // 24px
  paddingTop: theme.spacing(1), // 8px
  paddingBottom: theme.spacing(1), // 8px
  width: '100%',
  textAlign: 'left',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: 48,
  '&:hover': {
    backgroundColor: disabled ? 'transparent' : 'rgba(0, 0, 0, 0.04)',
  },
  '&:focus-visible': {
    outline: 'none',
    backgroundColor: disabled ? 'transparent' : 'rgba(0, 0, 0, 0.04)',
  },
}));

/**
 * Styled section container
 */
const SectionContainer = styled(Box)<{ spacing?: number }>(({ theme, spacing = 2 }) => ({
  marginTop: spacing > 0 ? theme.spacing(spacing) : 0,
}));

/**
 * Styled expandable section items container
 */
const ExpandableItemsContainer = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(2), // 16px - indented for nested items
  paddingRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
}));

/**
 * NavigationMenu component
 *
 * Displays a navigation menu with optional CTA button, sections with headers,
 * and navigation items with icons and labels.
 *
 * @example
 * ```tsx
 * <NavigationMenu
 *   cta={{
 *     label: "Reservar una hora",
 *     onClick: () => console.log("CTA clicked")
 *   }}
 *   sections={[
 *     {
 *       id: "main",
 *       items: [
 *         { id: "home", label: "Inicio", icon: "HomeRounded" },
 *         { id: "appointments", label: "Citas", icon: "CalendarRounded" }
 *       ]
 *     },
 *     {
 *       id: "health",
 *       header: "Mi salud",
 *       items: [
 *         { id: "orders", label: "Órdenes", icon: "DescriptionRounded" }
 *       ]
 *     }
 *   ]}
 * />
 * ```
 */
export const NavigationMenu = React.forwardRef<HTMLDivElement, NavigationMenuProps>(
  (
    {
      cta,
      sections,
      sectionSpacing = 2,
      showDividers = false,
      device = 'desktop',
      smallScreen = false,
      width = 256,
      expandable = true,
      onSectionChange,
      className,
      sx,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    // Calculate initial expanded sections from props
    const initialExpandedSections = useMemo(
      () => new Set(sections.filter((s) => s.expanded && s.header).map((s) => s.id)),
      [sections]
    );
    const [expandedSections, setExpandedSections] = useState<Set<string>>(initialExpandedSections);

    const handleItemClick = (item: NavigationItem) => {
      if (!item.disabled && item.onClick) {
        item.onClick(item);
      }
    };

    const handleSectionHeaderClick = (section: NavigationSection) => {
      if (section.disabled || !expandable || !section.header) return;

      const isExpanded = expandedSections.has(section.id);
      const newExpanded = new Set(expandedSections);

      if (isExpanded) {
        newExpanded.delete(section.id);
      } else {
        newExpanded.add(section.id);
      }

      setExpandedSections(newExpanded);

      if (onSectionChange) {
        onSectionChange(section.id, !isExpanded);
      }

      if (section.onHeaderClick) {
        section.onHeaderClick({ ...section, expanded: !isExpanded });
      }
    };

    const isSectionExpanded = (sectionId: string): boolean => {
      return expandedSections.has(sectionId);
    };

    return (
      <StyledNavigationMenuWrapper
        ref={ref}
        className={className}
        width={width}
        smallScreen={smallScreen}
        data-device={device}
        data-small-screen={smallScreen}
        {...(sx && { sx })}
        {...props}
      >
        <Paper
          variant="Elevation"
          elevation="1"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            width: '100%',
            backgroundColor: semanticColors.background.paper.elevation1,
            paddingTop: theme.spacing(4), // 32px
            paddingBottom: theme.spacing(4), // 32px
            paddingLeft: 0,
            paddingRight: 0,
            height: '100%',
            overflowY: 'auto',
          }}
        >
          {/* CTA Button */}
          {cta && (
            <CTAContainer>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                onClick={cta.onClick}
                disabled={cta.disabled ?? false}
                sx={{
                  borderRadius:
                    typeof theme.shape.borderRadius === 'number'
                      ? theme.shape.borderRadius * 10
                      : 999, // Very rounded (pill shape)
                  width: '100%',
                  maxWidth: '100%',
                }}
              >
                {cta.label}
              </Button>
            </CTAContainer>
          )}

          {/* Navigation Sections */}
          {sections.map((section, sectionIndex) => {
            const hasHeader = !!section.header;
            const isExpandable = expandable && hasHeader;
            const isExpanded = isSectionExpanded(section.id);

            return (
              <SectionContainer key={section.id} spacing={sectionIndex > 0 ? sectionSpacing : 0}>
                {/* Section Header (clickable if expandable) */}
                {hasHeader && (
                  <SectionHeaderButton
                    onClick={() => handleSectionHeaderClick(section)}
                    disabled={section.disabled ?? false}
                    type="button"
                  >
                    <span>{section.header}</span>
                    {isExpandable && (
                      <Icon
                        name={isExpanded ? 'ExpandLessRounded' : 'ExpandMoreRounded'}
                        fontSize="small"
                        sx={{
                          color: section.disabled
                            ? 'rgba(0, 0, 0, 0.38)'
                            : semanticColors.text.secondary,
                        }}
                      />
                    )}
                  </SectionHeaderButton>
                )}

                {/* Section Items */}
                {(!hasHeader || isExpanded || !isExpandable) && (
                  <ExpandableItemsContainer>
                    <List disPadding>
                      {section.items.map((item, itemIndex) => (
                        <React.Fragment key={item.id}>
                          <ListItem
                            label={item.label}
                            leftIcon={item.icon ?? 'MenuRounded'}
                            leftSlot={!!item.icon}
                            state={
                              item.disabled ? 'Disabled' : item.selected ? 'Selected' : 'Enabled'
                            }
                            onClick={() => handleItemClick(item)}
                            sx={{
                              cursor: item.disabled ? 'default' : 'pointer',
                            }}
                          />
                          {showDividers && itemIndex < section.items.length - 1 && (
                            <Divider
                              variant="inset"
                              sx={{
                                marginLeft: theme.spacing(2),
                                marginRight: theme.spacing(0),
                              }}
                            />
                          )}
                        </React.Fragment>
                      ))}
                    </List>
                  </ExpandableItemsContainer>
                )}
              </SectionContainer>
            );
          })}
        </Paper>
      </StyledNavigationMenuWrapper>
    );
  }
);

NavigationMenu.displayName = 'NavigationMenu';

export default NavigationMenu;
