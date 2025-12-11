/**
 * NavigationMenu Stories
 *
 * Storybook stories for the NavigationMenu component.
 * Displays all variants and configurations from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { NavigationMenu } from './NavigationMenu';
import type { NavigationSection } from './NavigationMenu.types';
import { Box } from '@mui/material';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A navigation menu/sidebar component with CTA button, expandable sections, and navigation items. Supports all states: enabled, hovered, selected, focused, pressed, disabled. Based on Figma design: node-id=9177-91957 (OrganismSidenav)',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    cta: {
      control: 'object',
      description: 'CTA button configuration (optional)',
    },
    sections: {
      control: 'object',
      description: 'Navigation sections to display',
    },
    sectionSpacing: {
      control: 'number',
      description: 'Spacing between sections',
    },
    showDividers: {
      control: 'boolean',
      description: 'Whether to show dividers between sections',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

// Sample navigation data matching Figma design
const defaultSections: NavigationSection[] = [
  {
    id: 'main',
    items: [
      {
        id: 'home',
        label: 'Inicio',
        icon: 'MenuRounded', // Using available icon as placeholder
      },
      {
        id: 'appointments',
        label: 'Citas',
        icon: 'TimelapseRounded', // Using available icon as placeholder
      },
    ],
  },
  {
    id: 'health',
    header: 'Mi salud',
    expanded: true, // Default expanded
    items: [
      {
        id: 'orders',
        label: 'Órdenes',
        icon: 'InfoRounded', // Using available icon
      },
      {
        id: 'prescriptions',
        label: 'Recetas',
        icon: 'InfoRounded', // Using available icon
      },
      {
        id: 'results',
        label: 'Resultados',
        icon: 'SearchRounded', // Using available icon
      },
      {
        id: 'surgeries',
        label: 'Cirugías',
        icon: 'AddRounded', // Using available icon
      },
      {
        id: 'medical-history',
        label: 'Historial médico',
        icon: 'DeleteRounded', // Using available icon
      },
      {
        id: 'preventive-health',
        label: 'Salud preventiva',
        icon: 'CheckCircleRounded', // Using available icon
      },
    ],
  },
  {
    id: 'pricing',
    header: 'Precios y coberturas',
    expanded: false, // Default collapsed
    items: [
      {
        id: 'quoter',
        label: 'Cotizador',
        icon: 'InfoRounded', // Using available icon
      },
      {
        id: 'plans-insurance',
        label: 'Planes y seguros',
        icon: 'LockRounded', // Using available icon
      },
    ],
  },
  {
    id: 'account',
    header: 'Cuenta',
    expanded: false, // Default collapsed
    items: [
      {
        id: 'my-data',
        label: 'Mis datos',
        icon: 'PersonRounded', // Using available icon
      },
    ],
  },
];

// Default story - matches Figma design with expandable sections
export const Default: Story = {
  args: {
    sectionSpacing: 0,
    showDividers: true,
  },

  render: () => (
    <Box sx={{ height: '800px', backgroundColor: '#f5f5f5' }}>
      <NavigationMenu
        cta={{
          label: 'Reservar una hora',
          onClick: () => console.warn('CTA clicked'),
        }}
        sections={defaultSections}
        width={256}
        device="desktop"
        smallScreen={false}
      />
    </Box>
  ),
};

// Without CTA
export const WithoutCTA: Story = {
  render: () => (
    <Box sx={{ height: '800px', backgroundColor: '#f5f5f5' }}>
      <NavigationMenu sections={defaultSections} width={256} />
    </Box>
  ),
};

// With expandable sections (default behavior)
export const ExpandableSections: Story = {
  args: {
    sectionSpacing: 0,
  },

  render: () => (
    <Box sx={{ height: '800px', backgroundColor: '#f5f5f5' }}>
      <NavigationMenu
        cta={{
          label: 'Reservar una hora',
          onClick: () => console.warn('CTA clicked'),
        }}
        sections={defaultSections}
        width={256}
        expandable={true}
        onSectionChange={(sectionId, expanded) => {
          console.warn(`Section ${sectionId} ${expanded ? 'expanded' : 'collapsed'}`);
        }}
      />
    </Box>
  ),
};

// Non-expandable sections
export const NonExpandable: Story = {
  render: () => (
    <Box sx={{ height: '800px', backgroundColor: '#f5f5f5' }}>
      <NavigationMenu
        cta={{
          label: 'Reservar una hora',
          onClick: () => console.warn('CTA clicked'),
        }}
        sections={defaultSections}
        width={256}
        expandable={false}
      />
    </Box>
  ),
};

// With selected item
export const WithSelectedItem: Story = {
  render: () => {
    const sectionsWithSelection: NavigationSection[] = [
      {
        id: 'main',
        items: [
          {
            id: 'home',
            label: 'Inicio',
            icon: 'MenuRounded',
            selected: true, // Selected state
          },
          {
            id: 'appointments',
            label: 'Citas',
            icon: 'TimelapseRounded',
          },
        ],
      },
      {
        id: 'health',
        header: 'Mi salud',
        items: [
          {
            id: 'orders',
            label: 'Órdenes',
            icon: 'SearchRounded',
          },
        ],
      },
    ];

    return (
      <Box sx={{ width: 280, backgroundColor: '#ffffff' }}>
        <NavigationMenu
          cta={{
            label: 'Reservar una hora',
            onClick: () => console.warn('CTA clicked'),
          }}
          sections={sectionsWithSelection}
        />
      </Box>
    );
  },
};

// With disabled items
export const WithDisabledItems: Story = {
  render: () => {
    const sectionsWithDisabled: NavigationSection[] = [
      {
        id: 'main',
        items: [
          {
            id: 'home',
            label: 'Inicio',
            icon: 'MenuRounded',
          },
          {
            id: 'appointments',
            label: 'Citas',
            icon: 'TimelapseRounded',
            disabled: true, // Disabled state
          },
        ],
      },
      {
        id: 'health',
        header: 'Mi salud',
        items: [
          {
            id: 'orders',
            label: 'Órdenes',
            icon: 'SearchRounded',
            disabled: true, // Disabled state
          },
        ],
      },
    ];

    return (
      <Box sx={{ width: 280, backgroundColor: '#ffffff' }}>
        <NavigationMenu
          cta={{
            label: 'Reservar una hora',
            onClick: () => console.warn('CTA clicked'),
          }}
          sections={sectionsWithDisabled}
        />
      </Box>
    );
  },
};

// With dividers
export const WithDividers: Story = {
  render: () => (
    <Box sx={{ width: 280, backgroundColor: '#ffffff' }}>
      <NavigationMenu
        cta={{
          label: 'Reservar una hora',
          onClick: () => console.warn('CTA clicked'),
        }}
        sections={defaultSections}
        showDividers
      />
    </Box>
  ),
};

// Custom spacing
export const CustomSpacing: Story = {
  args: {
    sectionSpacing: 2,
  },

  render: () => (
    <Box sx={{ width: 280, backgroundColor: '#ffffff' }}>
      <NavigationMenu
        cta={{
          label: 'Reservar una hora',
          onClick: () => console.warn('CTA clicked'),
        }}
        sections={defaultSections}
        sectionSpacing={4}
      />
    </Box>
  ),
};

// Minimal - single section, no header
export const Minimal: Story = {
  render: () => {
    const minimalSections: NavigationSection[] = [
      {
        id: 'main',
        items: [
          {
            id: 'home',
            label: 'Inicio',
            icon: 'MenuRounded',
          },
          {
            id: 'appointments',
            label: 'Citas',
            icon: 'TimelapseRounded',
          },
        ],
      },
    ];

    return (
      <Box sx={{ width: 280, backgroundColor: '#ffffff' }}>
        <NavigationMenu sections={minimalSections} />
      </Box>
    );
  },
};

// With click handlers
export const WithClickHandlers: Story = {
  render: () => {
    const sectionsWithHandlers: NavigationSection[] = [
      {
        id: 'main',
        items: [
          {
            id: 'home',
            label: 'Inicio',
            icon: 'MenuRounded',
            onClick: (item) => alert(`Clicked: ${item.label}`),
          },
          {
            id: 'appointments',
            label: 'Citas',
            icon: 'TimelapseRounded',
            onClick: (item) => alert(`Clicked: ${item.label}`),
          },
        ],
      },
      {
        id: 'health',
        header: 'Mi salud',
        items: [
          {
            id: 'orders',
            label: 'Órdenes',
            icon: 'SearchRounded',
            onClick: (item) => alert(`Clicked: ${item.label}`),
          },
        ],
      },
    ];

    return (
      <Box sx={{ width: 280, backgroundColor: '#ffffff' }}>
        <NavigationMenu
          cta={{
            label: 'Reservar una hora',
            onClick: () => alert('CTA button clicked!'),
          }}
          sections={sectionsWithHandlers}
        />
      </Box>
    );
  },
};
