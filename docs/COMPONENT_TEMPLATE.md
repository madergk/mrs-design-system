# Template para Nuevos Componentes

Este template te guía paso a paso para crear un nuevo componente siguiendo las convenciones del MRS Design System.

## 📁 Estructura de Archivos

```
src/components/ComponentName/
├── ComponentName.tsx          # Componente principal
├── ComponentName.stories.tsx   # Stories de Storybook
├── ComponentName.test.tsx      # Tests (opcional)
└── index.ts                    # Exports
```

## 1️⃣ Componente Principal (ComponentName.tsx)

```tsx
/**
 * ComponentName Component
 *
 * Descripción breve del componente y su propósito.
 * Menciona las variantes, tamaños, y estados que soporta.
 */

import React from 'react';
import { Box, type BoxProps } from '@mui/material';
import { semanticColors, typographyVariants } from '../../theme/designTokens';

export interface ComponentNameProps extends BoxProps {
  /**
   * Descripción de la prop
   * @default 'defaultValue'
   */
  propName?: string;
  
  /**
   * Los children del componente
   */
  children?: React.ReactNode;
}

/**
 * ComponentName component
 *
 * Descripción más detallada del componente.
 * Menciona cómo se usa y qué design tokens consume.
 *
 * @example
 * ```tsx
 * <ComponentName propName="value">
 *   Content
 * </ComponentName>
 * ```
 */
export const ComponentName = React.forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ propName = 'defaultValue', children, sx, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        sx={{
          // Usa design tokens aquí
          color: semanticColors.text.primary,
          fontFamily: typographyVariants.body1.fontFamily,
          fontSize: typographyVariants.body1.fontSize,
          ...sx,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

ComponentName.displayName = 'ComponentName';

export default ComponentName;
```

## 2️⃣ Stories (ComponentName.stories.tsx)

```tsx
/**
 * ComponentName Stories
 *
 * Storybook stories para el componente ComponentName.
 * Muestra todas las variantes, tamaños, colores y estados.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Descripción del componente. Menciona variantes, tamaños, y características principales.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    propName: {
      control: 'text',
      description: 'Descripción de la prop',
    },
    children: {
      control: 'text',
      description: 'El contenido del componente',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

// Default story
export const Default: Story = {
  args: {
    propName: 'value',
    children: 'Content',
  },
};

// Variants showcase
export const Variants: Story = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <ComponentName propName="variant1">Variant 1</ComponentName>
      <ComponentName propName="variant2">Variant 2</ComponentName>
    </Stack>
  ),
};

// Sizes showcase
export const Sizes: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
      <ComponentName propName="small">Small</ComponentName>
      <ComponentName propName="medium">Medium</ComponentName>
      <ComponentName propName="large">Large</ComponentName>
    </Stack>
  ),
};

// States showcase
export const States: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Enabled
        </Typography>
        <ComponentName propName="enabled">Enabled State</ComponentName>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Disabled
        </Typography>
        <ComponentName propName="disabled" sx={{ opacity: 0.5 }}>
          Disabled State
        </ComponentName>
      </Box>
    </Stack>
  ),
};

// Complete showcase
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1200 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        ComponentName Showcase
      </Typography>
      {/* Agrega ejemplos completos aquí */}
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
```

## 3️⃣ Exports (index.ts)

```tsx
export { ComponentName, type ComponentNameProps } from './ComponentName';
export { default } from './ComponentName';
```

## 4️⃣ Exportar en src/index.ts

Agrega al archivo principal de exports:

```tsx
export { ComponentName } from './components/ComponentName';
export type { ComponentNameProps } from './components/ComponentName';
```

## 5️⃣ Agregar Design Tokens (si es necesario)

Si el componente necesita tokens específicos, agrégalos en `src/theme/designTokens.ts`:

```typescript
export const componentTokens = {
  // ... existentes
  componentName: {
    backgroundColor: semanticColors.background.paper,
    padding: spacing[2], // 16px
  },
} as const;
```

## 6️⃣ Personalizar en Theme (si es necesario)

Si necesitas personalizar el componente en el theme, agrégalo en `src/theme/createTheme.ts`:

```typescript
components: {
  // ... existentes
  MuiComponentName: {
    styleOverrides: {
      root: {
        // Estilos personalizados usando design tokens
      },
    },
  },
}
```

## ✅ Checklist

Antes de considerar el componente completo:

- [ ] Componente implementado con TypeScript
- [ ] Props documentadas con JSDoc
- [ ] Usa design tokens (no valores hardcodeados)
- [ ] Stories creadas mostrando todas las variantes
- [ ] Exportado en `index.ts` del componente
- [ ] Exportado en `src/index.ts` principal
- [ ] Linter pasa sin errores
- [ ] Formato correcto (Prettier)
- [ ] Tests creados (opcional pero recomendado)

## 📚 Ejemplos de Referencia

Revisa estos componentes como referencia:
- `Button` - Componente básico con variantes
- `Card` - Componente compuesto con sub-componentes
- `Stepper` - Componente complejo con lógica

## 🎯 Siguiente Paso

Una vez que el componente esté listo:
1. Ejecuta `npm run storybook` para verlo en acción
2. Verifica que todas las stories se vean correctamente
3. Revisa la documentación generada automáticamente
4. Crea un PR siguiendo la [Guía de Contribución](../.storybook/contributing.mdx)

---

¡Buena suerte creando tu componente! 🚀

