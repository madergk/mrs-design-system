# Guía de Documentación del Design System

Esta guía explica cómo está estructurada la documentación del MRS Design System y cómo usarla efectivamente.

## 📚 Estructura de Documentación

### 1. Introducción (`Introduction/`)

Documentación general del sistema:

- **Getting Started**: Bienvenida y conceptos básicos
- **Design Tokens**: Explicación completa del sistema de tokens
- **Best Practices**: Mejores prácticas para usar el sistema
- **Contributing**: Guía para contribuir al proyecto

### 2. Componentes (`Components/`)

Cada componente tiene su propia sección con:

- **Overview**: Descripción general del componente
- **Props**: Documentación completa de todas las props
- **Stories**: Ejemplos interactivos de uso
  - Default: Ejemplo básico
  - Variants: Todas las variantes
  - Sizes: Todos los tamaños
  - States: Todos los estados
  - Complete Showcase: Vista completa

## 🎯 Cómo Usar la Documentación

### Para Desarrolladores

1. **Explorar Componentes**: Navega por el menú lateral
2. **Ver Ejemplos**: Cada story muestra un caso de uso
3. **Copiar Código**: Usa "Show code" para ver el código
4. **Ajustar Props**: Usa los controles para probar configuraciones
5. **Leer la API**: Revisa la pestaña "Docs" para ver todas las props

### Para Diseñadores

1. **Ver Variantes**: Revisa todas las variantes visuales
2. **Verificar Tokens**: Confirma que los tokens se aplican correctamente
3. **Comparar con Figma**: Usa las stories para comparar con el diseño
4. **Probar Estados**: Interactúa con los componentes para ver estados

## 📝 Crear Documentación para un Componente

### Template Básico

Cada componente debe tener un archivo `.stories.tsx` con esta estructura:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './YourComponent';

const meta: Meta<typeof YourComponent> = {
  title: 'Components/YourComponent',
  component: YourComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Descripción del componente',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

export const Default: Story = {
  args: {
    // props por defecto
  },
};
```

### Stories Recomendadas

1. **Default**: Estado por defecto del componente
2. **Variants**: Todas las variantes disponibles
3. **Sizes**: Todos los tamaños
4. **Colors**: Todos los colores (si aplica)
5. **States**: Estados (enabled, disabled, loading, etc.)
6. **Complete Showcase**: Vista completa con todos los casos

### Documentar Props

Usa JSDoc en las interfaces:

```tsx
export interface ComponentProps {
  /**
   * Descripción clara de la prop
   * @default 'defaultValue'
   */
  propName?: string;
}
```

## 🎨 Mejores Prácticas de Documentación

### 1. Descripciones Claras

```tsx
// ✅ Bueno
/**
 * The variant of the button
 * @default 'contained'
 */
variant?: 'contained' | 'outlined' | 'text';

// ❌ Evitar
variant?: string; // Sin descripción
```

### 2. Ejemplos Reales

```tsx
// ✅ Bueno - ejemplo realista
export const WithForm: Story = {
  render: () => (
    <form>
      <TextField label="Email" />
      <Button type="submit">Submit</Button>
    </form>
  ),
};

// ❌ Evitar - ejemplo demasiado simple
export const Example: Story = {
  args: {
    children: 'Example',
  },
};
```

### 3. Mostrar Todos los Casos

Incluye stories para:
- Casos de uso comunes
- Casos edge
- Estados de error
- Estados de carga
- Estados vacíos

### 4. Usar Controles Interactivos

```tsx
argTypes: {
  variant: {
    control: 'select',
    options: ['contained', 'outlined', 'text'],
    description: 'The variant of the button',
  },
}
```

## 📖 Recursos Adicionales

- [Component Template](./COMPONENT_TEMPLATE.md) - Template completo para nuevos componentes
- [Deployment Guide](./DEPLOYMENT.md) - Cómo desplegar la documentación
- [Storybook Docs](https://storybook.js.org/docs) - Documentación oficial de Storybook

## 🔍 Navegación Rápida

### Por Tipo de Componente

- **Formularios**: Button, Checkbox, Radio, Switch, Select
- **Contenido**: Card, Typography, List, Accordion
- **Navegación**: AppBar, Stepper
- **Feedback**: Badge, Chip, Tag, Tooltip
- **Layout**: Paper, Divider

### Por Categoría (Atomic Design)

- **Atoms**: Componentes básicos
- **Molecules**: Componentes compuestos
- **Organisms**: Componentes complejos

## ✅ Checklist de Documentación

Antes de considerar un componente completamente documentado:

- [ ] Tiene descripción clara en el meta
- [ ] Todas las props están documentadas con JSDoc
- [ ] Tiene story "Default"
- [ ] Tiene stories para todas las variantes
- [ ] Tiene stories para todos los tamaños
- [ ] Tiene stories para todos los estados
- [ ] Tiene "Complete Showcase"
- [ ] Los controles funcionan correctamente
- [ ] Los ejemplos son realistas
- [ ] El código es copiable y funcional

---

**¿Necesitas ayuda?** Revisa los componentes existentes como referencia o consulta la [Guía de Contribución](../.storybook/contributing.mdx).

