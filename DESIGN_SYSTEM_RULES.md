# MRS Design System Rules

**Versión**: 1.0  
**Última actualización**: Diciembre 2024  
**Propósito**: Guía completa para integrar diseños de Figma al código usando Model Context Protocol (MCP)

---

## 📋 Tabla de Contenidos

1. [Token Definitions](#1-token-definitions)
2. [Component Library](#2-component-library)
3. [Frameworks & Libraries](#3-frameworks--libraries)
4. [Asset Management](#4-asset-management)
5. [Icon System](#5-icon-system)
6. [Styling Approach](#6-styling-approach)
7. [Project Structure](#7-project-structure)
8. [Figma Integration Patterns](#8-figma-integration-patterns)

---

## 1. Token Definitions

### 📍 Ubicación

**Archivo principal**: `src/theme/designTokens.ts`  
**Fuente de verdad**: `tokens/tokens.json` (sincronizado desde Tokens Studio/Figma)  
**Documentación**: `src/theme/ARCHITECTURE.md`

### 📐 Estructura de Tokens

El sistema usa una jerarquía de tres niveles:

```
Primitive Tokens (Base Values)
    ↓
Semantic Tokens (Contextual Aliases)
    ↓
Component Tokens (Component-Specific)
```

#### 1.1 Primitive Tokens

**Ubicación**: `src/theme/designTokens.ts` (líneas 18-94)

```typescript
// Colores primitivos
export const primitiveColors = {
  verones: '#00686f', // Color primario único
  white: '#ffffff',
} as const;

// Tipografía primitiva
export const primitiveTypography = {
  fontFamily: {
    brand: 'Nunito',
    base: 'Nunito',
  },
  fontSize: {
    '0.75rem': 12,
    '0.8125rem': 13,
    // ... más tamaños
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
} as const;

// Espaciado primitivo
export const primitiveSpacing = {
  1: 8,
  2: 16,
  3: 24,
  8: 64,
} as const;

// Radio de borde
export const primitiveRadius = {
  none: 0,
  md: 12,
  rounded: 999,
} as const;

// Breakpoints
export const primitiveBreakpoints = {
  xs: 444,
  sm: 600,
} as const;

// Z-index layers
export const primitiveZIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
} as const;

// Transiciones
export const primitiveTransitions = {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
} as const;
```

**Convenciones de nomenclatura**:
- Tokens primitivos usan prefijo `_` en Figma (e.g., `_fontSize`, `_fontFamily`)
- En código, se exportan sin prefijo como `primitiveColors`, `primitiveTypography`, etc.
- Valores son `as const` para preservar tipos literales

#### 1.2 Semantic Tokens

**Ubicación**: `src/theme/designTokens.ts` (líneas 100-126)

```typescript
export const semanticColors = {
  primary: {
    main: '#00686f',
    dark: '#004e53',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#99cc00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  error: {
    main: '#ab1a1a',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#ed6c02',
    contrastText: '#ffffff',
  },
  info: {
    main: '#0288d1',
    contrastText: '#ffffff',
  },
  success: {
    main: '#2e7d32',
    contrastText: '#ffffff',
  },
} as const;
```

**Mapeo a Material UI**:
- `semanticColors.primary` → `theme.palette.primary`
- `semanticColors.text.primary` → `theme.palette.text.primary`
- `semanticColors.background` → `theme.palette.background`

#### 1.3 Typography Variants

**Ubicación**: `src/theme/designTokens.ts` (líneas 132-284)

```typescript
export const typographyVariants = {
  h1: {
    fontFamily: 'Nunito',
    fontSize: 96,
    fontWeight: 400,
    lineHeight: 1.167,
  },
  // ... h2, h3, h4, h5, h6
  subtitle1: {
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.75,
  },
  body1: {
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
  },
  body2: {
    fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.43,
  },
  // Variantes específicas de componentes
  chip: {
    label: {
      fontFamily: 'Nunito',
      fontSize: 0.8125,
      fontWeight: 400,
      lineHeight: 18,
    },
  },
  input: {
    label: { /* ... */ },
    value: { /* ... */ },
    helperText: { /* ... */ },
  },
  // ... más variantes
} as const;
```

**Mapeo a Material UI**:
- `typographyVariants.h1` → `theme.typography.h1`
- `typographyVariants.body1` → `theme.typography.body1`
- Variantes de componentes se mapean en `createTheme.ts` vía `styleOverrides`

#### 1.4 Component Tokens

**Ubicación**: `src/theme/designTokens.ts` (líneas 290-334)

```typescript
export const componentTokens = {
  chip: {
    defaultCloseFill: '#000000',
    defaultEnabledBorder: '#bdbdbd',
  },
  input: {
    standard: {
      enabledBorder: '#0000006b',
    },
    filled: {
      enabledFill: '#0000000f',
    },
    outlined: {
      enabledBorder: '#0000003b',
    },
  },
  stepper: {
    completedStep: {
      backgroundColor: '#00686f',
    },
    connector: '#bdbdbd',
  },
  alert: {
    error: {
      color: '#5f2120',
      background: '#fdeded',
    },
    // ... más variantes
  },
} as const;
```

**Uso**: Estos tokens se aplican directamente en `createTheme.ts` vía `MuiComponent.styleOverrides`

### 🔄 Transformación de Tokens

**Script de transformación**: `scripts/transform-tokens.js`  
**Comando**: `npm run tokens:transform`

El proceso:
1. Lee `tokens/tokens.json` (sincronizado desde Figma/Tokens Studio)
2. Transforma a estructura TypeScript
3. Genera `src/theme/designTokens.ts`

**⚠️ IMPORTANTE**: `designTokens.ts` es generado automáticamente. NO editar manualmente.

---

## 2. Component Library

### 📁 Estructura de Componentes

Cada componente sigue esta estructura estándar:

```
ComponentName/
├── ComponentName.tsx          # Componente principal
├── ComponentName.stories.tsx  # Stories de Storybook
├── ComponentName.test.tsx     # Tests (opcional)
├── ComponentName.types.ts     # Tipos adicionales (si aplica)
└── index.ts                   # Exports
```

**Ejemplo real**: `src/components/Button/`

### 🏗️ Patrones de Componentes

#### 2.1 Estructura Base

Todos los componentes siguen este patrón:

```typescript
/**
 * ComponentName Component
 *
 * Descripción del componente, variantes, tamaños, estados
 */

import React from 'react';
import type { MuiComponentProps } from '@mui/material/Component';
import MuiComponent from '@mui/material/Component';

export interface ComponentNameProps extends Omit<MuiComponentProps, 'prop'> {
  /**
   * Descripción de la prop
   * @default 'defaultValue'
   */
  propName?: string;
}

export const ComponentName = React.forwardRef<HTMLElement, ComponentNameProps>(
  ({ propName = 'defaultValue', ...props }, ref) => {
    return (
      <MuiComponent ref={ref} {...props}>
        {/* contenido */}
      </MuiComponent>
    );
  }
);

ComponentName.displayName = 'ComponentName';

export default ComponentName;
```

#### 2.2 Convenciones Requeridas

✅ **Obligatorias**:
- Usar `React.forwardRef` para todos los componentes
- Definir `displayName` explícitamente
- Exportar default export
- Extender props de Material UI cuando sea posible
- Documentar props con JSDoc
- Usar TypeScript interfaces bien definidas

✅ **Recomendadas**:
- Crear archivo `.types.ts` si hay tipos complejos
- Agregar tests en `.test.tsx`
- Documentar en Storybook con `.stories.tsx`

#### 2.3 Estilos de Componentes

**Regla fundamental**: Los estilos se aplican vía **Material UI Theme**, NO directamente en componentes.

**✅ Correcto**:
```typescript
// Componente simple que delega estilos al theme
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return <MuiButton ref={ref} {...props}>{children}</MuiButton>;
  }
);
```

**❌ Incorrecto**:
```typescript
// NO hacer esto - estilos hardcodeados
export const Button = ({ children }) => {
  return (
    <button style={{ color: '#00686f', padding: '8px' }}>
      {children}
    </button>
  );
};
```

**Configuración de estilos**: `src/theme/createTheme.ts` (líneas 240-657)

```typescript
components: {
  MuiButton: {
    styleOverrides: {
      root: {
        fontFamily: typographyVariants.button.medium.fontFamily,
        fontSize: `${typographyVariants.button.medium.fontSize}rem`,
        // ... más estilos
      },
    },
  },
  // ... más componentes
}
```

### 📚 Componentes Disponibles

**Total**: 26 componentes

**Átomos**:
- Avatar, Badge, Button, Chip, Divider, Icon, IconButton, Logo, Paper, Tag, Typography

**Moléculas**:
- Alert, Checkbox, Radio, Select, Switch, Tooltip

**Organismos**:
- Accordion, AccordionGroup, AppBar, Card (con sub-componentes), List, ListItem, Stepper, Table (con sub-componentes), AccountStack

**Ubicación**: `src/components/`

---

## 3. Frameworks & Libraries

### 🎯 Stack Principal

#### 3.1 UI Framework

**React 18.3.1**
- Versión mínima: 18.0.0
- Patrón: Functional Components + Hooks
- TypeScript: Sí (tipado estricto)

#### 3.2 Component Library Base

**Material UI (MUI) 7.2.0**
- Base para todos los componentes
- Sistema de theming completo
- Accesibilidad integrada
- Documentación: https://mui.com

**Dependencias**:
```json
{
  "@mui/material": "^7.2.0",
  "@mui/icons-material": "^7.2.0"
}
```

#### 3.3 Styling System

**Emotion 11.13.0**
- CSS-in-JS usado por Material UI
- No se usa directamente en componentes
- Se accede vía `sx` prop de MUI

**Dependencias**:
```json
{
  "@emotion/react": "^11.13.0",
  "@emotion/styled": "^11.13.0"
}
```

**Uso en componentes**:
```typescript
<Box
  sx={{
    padding: (theme) => theme.spacing(2),
    color: (theme) => theme.palette.primary.main,
  }}
>
```

#### 3.4 Build System

**Vite 6.0.0**
- Bundler y dev server
- Configuración: `vite.config.ts`
- Build output: `dist/`

**Configuración clave**:
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@mui/material',
        '@mui/icons-material',
        '@emotion/react',
        '@emotion/styled',
      ],
    },
  },
});
```

#### 3.5 TypeScript

**TypeScript 5.5.4**
- Configuración: `tsconfig.json`
- Build config: `tsconfig.build.json`
- Tipos estrictos habilitados

**Configuración clave**:
- `strict: true`
- `module: "ESNext"`
- `target: "ES2020"`

### 📦 Otras Dependencias Importantes

**Testing**:
- Vitest 4.0.14
- Testing Library 16.3.0
- Jest DOM 6.9.1

**Documentación**:
- Storybook 8.3.0
- Configuración: `.storybook/`

**Linting & Formatting**:
- ESLint 9.39.1
- Prettier 3.7.3
- TypeScript ESLint 8.48.0

---

## 4. Asset Management

### 🖼️ Imágenes y SVGs

**Estado actual**: No hay sistema de assets centralizado

**Recomendación para Figma MCP**:
- Assets de Figma se sirven desde `localhost:3845` (según documentación de Figma MCP)
- Formato esperado: `const image = 'http://localhost:3845/assets/{hash}.png'`

**Ejemplo de uso**:
```typescript
const image = 'http://localhost:3845/assets/10c13ac1a228a365cb98a0064b1d5afbc84887b2.png';

<img src={image} alt="Description" />
```

### 📁 Estructura de Assets (Futuro)

**Recomendación**:
```
src/
├── assets/
│   ├── images/
│   ├── icons/ (si no se usan MUI icons)
│   └── fonts/
```

**Nota**: Actualmente se usan fuentes web (Nunito) cargadas vía CSS.

### 🎨 Optimización de Assets

**No implementado actualmente**, pero recomendado:
- Usar formatos modernos (WebP, AVIF)
- Lazy loading para imágenes grandes
- CDN para producción (si aplica)

---

## 5. Icon System

### 🎯 Sistema Actual

**Material Icons** (`@mui/icons-material`)

**Uso**:
```typescript
import { Add, Delete, Edit } from '@mui/icons-material';

<IconButton>
  <Add />
</IconButton>
```

### 📐 Convenciones

- **Tamaño**: Siempre 24px (definido en theme)
- **Color**: Hereda del componente padre o se define vía `color` prop
- **Accesibilidad**: Incluir `aria-label` cuando sea necesario

**Ejemplo completo**:
```typescript
<IconButton aria-label="Add item" color="primary">
  <Add />
</IconButton>
```

### 🔄 Integración con Figma

**Cuando Figma exporta SVGs**:
1. Verificar si existe equivalente en `@mui/icons-material`
2. Si no existe, considerar crear componente custom en `src/components/Icon/`
3. Mantener tamaño consistente (24px)

**Componente Icon existente**: `src/components/Icon/Icon.tsx`

---

## 6. Styling Approach

### 🎨 Metodología

**Material UI Theme System** (NO CSS Modules, NO Styled Components directos)

### 📐 Flujo de Estilos

```
Figma Design
    ↓
Design Tokens (tokens.json)
    ↓
designTokens.ts (TypeScript)
    ↓
createTheme.ts (MUI Theme)
    ↓
Component (usa theme vía sx prop o styleOverrides)
```

### 🛠️ Cómo Aplicar Estilos

#### 6.1 En Componentes Individuales

**Opción 1: `sx` prop (recomendado para estilos dinámicos)**
```typescript
<Box
  sx={{
    padding: (theme) => theme.spacing(2),
    color: (theme) => theme.palette.primary.main,
    '&:hover': {
      backgroundColor: (theme) => theme.palette.action.hover,
    },
  }}
>
```

**Opción 2: `styleOverrides` en theme (recomendado para estilos globales del componente)**
```typescript
// En createTheme.ts
components: {
  MuiButton: {
    styleOverrides: {
      root: {
        fontFamily: typographyVariants.button.medium.fontFamily,
        // ...
      },
    },
  },
}
```

#### 6.2 Consumir Design Tokens

**✅ Correcto**:
```typescript
import { semanticColors, typographyVariants } from '../../theme/designTokens';

<Box
  sx={{
    color: semanticColors.text.primary,
    fontFamily: typographyVariants.body1.fontFamily,
    fontSize: `${typographyVariants.body1.fontSize}rem`,
  }}
>
```

**❌ Incorrecto**:
```typescript
// NO hardcodear valores
<Box sx={{ color: '#000000', fontSize: '16px' }}>
```

#### 6.3 Responsive Design

**Breakpoints disponibles**:
```typescript
// En createTheme.ts
breakpoints: {
  values: {
    xs: 444,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
}
```

**Uso**:
```typescript
<Box
  sx={{
    padding: { xs: 1, sm: 2, md: 3 },
    fontSize: { xs: '0.875rem', md: '1rem' },
  }}
>
```

### 🎭 Dark Mode

**Estado**: Preparado pero no completamente implementado

**Estructura**:
```typescript
// En createTheme.ts
export function createAppTheme(mode: PaletteMode = 'light') {
  const palette = getPaletteForMode(mode);
  // ...
}
```

**Uso futuro**:
```typescript
const theme = createAppTheme('dark');
```

### 🌐 Global Styles

**No hay estilos globales custom** - Material UI maneja los estilos base.

**Fuentes**: Cargadas vía CSS (Nunito)

---

## 7. Project Structure

### 📂 Estructura General

```
mrs/
├── src/
│   ├── components/          # Componentes del design system
│   │   └── ComponentName/
│   │       ├── ComponentName.tsx
│   │       ├── ComponentName.stories.tsx
│   │       ├── ComponentName.test.tsx (opcional)
│   │       └── index.ts
│   ├── theme/               # Sistema de tokens y theme
│   │   ├── designTokens.ts  # Tokens generados
│   │   ├── createTheme.ts   # Factory de theme
│   │   ├── colorUtils.ts    # Utilidades de color
│   │   └── index.ts
│   ├── test/                # Utilidades de testing
│   │   ├── setup.ts
│   │   └── test-utils.tsx
│   └── index.ts             # Export principal
├── tokens/                  # Tokens fuente (JSON)
│   └── tokens.json          # Sincronizado desde Figma
├── dist/                    # Build output
├── docs/                    # Documentación
├── scripts/                 # Scripts de utilidad
│   ├── sync-figma-colors.js
│   └── transform-tokens.js
├── .storybook/              # Configuración Storybook
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### 📁 Convenciones de Carpetas

**Componentes**:
- PascalCase para nombres de carpetas: `Button/`, `CardHeader/`
- Un componente por carpeta
- `index.ts` siempre exporta el componente

**Theme**:
- camelCase para archivos: `designTokens.ts`, `createTheme.ts`
- `index.ts` exporta todo lo necesario

**Tests**:
- Mismo nombre que el componente: `Button.test.tsx`
- Ubicación: misma carpeta del componente

**Stories**:
- Mismo nombre que el componente: `Button.stories.tsx`
- Ubicación: misma carpeta del componente

### 🔗 Imports

**Alias configurado**:
```typescript
// vite.config.ts
resolve: {
  alias: {
    '@': resolve(__dirname, './src'),
  },
}
```

**Uso** (opcional, no usado actualmente):
```typescript
import { Button } from '@/components/Button';
```

**Patrón actual**:
```typescript
import { Button } from '../../components/Button';
```

---

## 8. Figma Integration Patterns

### 🔄 Flujo de Sincronización

```
Figma Design
    ↓
Tokens Studio (plugin)
    ↓
tokens/tokens.json
    ↓
npm run tokens:transform
    ↓
src/theme/designTokens.ts
    ↓
src/theme/createTheme.ts
    ↓
Componentes (vía theme)
```

### 🎨 Convertir Diseños de Figma a Código

#### 8.1 Análisis del Diseño

**Pasos**:
1. Identificar componentes Material UI base
2. Identificar variantes (size, color, variant)
3. Identificar design tokens usados
4. Verificar si existe componente en el sistema
5. Si no existe, crear siguiendo patrón estándar

#### 8.2 Mapeo Figma → Código

**Colores**:
```
Figma: #00686f
Código: semanticColors.primary.main
Theme: theme.palette.primary.main
```

**Tipografía**:
```
Figma: Nunito, 16px, Regular, 1.5 line-height
Código: typographyVariants.body1
Theme: theme.typography.body1
```

**Espaciado**:
```
Figma: 16px
Código: primitiveSpacing[2] o theme.spacing(2)
```

**Border Radius**:
```
Figma: 12px
Código: primitiveRadius.md o theme.shape.borderRadius
```

#### 8.3 Componentes de Figma MCP

**Cuando Figma MCP genera código**:

1. **Revisar imports**:
   - Eliminar imports de Tailwind (si aparecen)
   - Usar imports de Material UI
   - Usar imports de design tokens

2. **Convertir estilos**:
   - Tailwind classes → `sx` prop con theme
   - Valores hardcodeados → design tokens
   - Estilos inline → `styleOverrides` en theme (si es global)

3. **Estructura de componente**:
   - Seguir patrón `React.forwardRef`
   - Agregar `displayName`
   - Documentar props con JSDoc
   - Exportar default

**Ejemplo de conversión**:

**Figma MCP genera** (Tailwind):
```tsx
<div className="flex items-center p-4 bg-primary text-white">
  <span className="text-lg font-semibold">Title</span>
</div>
```

**Convertir a** (Material UI + Tokens):
```tsx
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Component = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Typography variant="h6">Title</Typography>
    </Box>
  );
};
```

#### 8.4 Code Connect (Figma → Código)

**Estado**: Parcialmente implementado

**Componentes con Code Connect**:
- `Typography` → `src/components/Typography/Typography.tsx`
- `Button` → `src/components/Button/Button.tsx`

**Uso**:
- Figma puede mostrar código conectado
- Componentes deben seguir naming exacto
- Props deben mapear correctamente

#### 8.5 Sincronización de Colores

**Script**: `scripts/sync-figma-colors.js`  
**Comando**: `npm run sync:figma-colors`

**Proceso**:
1. Conecta a Figma API
2. Extrae colores del archivo
3. Actualiza `tokens/tokens.json`
4. Ejecuta transformación de tokens

**Requisitos**:
- Token de acceso de Figma
- File key del diseño
- Configuración en script

---

## 9. Guías de Implementación

### ✅ Checklist para Nuevo Componente desde Figma

- [ ] Identificar componente base de Material UI
- [ ] Extraer design tokens del diseño
- [ ] Verificar si tokens existen en `designTokens.ts`
- [ ] Si no existen, agregar a `tokens.json` y regenerar
- [ ] Crear componente siguiendo patrón estándar
- [ ] Configurar estilos en `createTheme.ts` vía `styleOverrides`
- [ ] Crear stories en Storybook
- [ ] Agregar tests (opcional pero recomendado)
- [ ] Documentar props y uso
- [ ] Verificar accesibilidad (ARIA, keyboard navigation)
- [ ] Verificar responsive behavior

### ✅ Checklist para Actualizar Tokens

- [ ] Actualizar `tokens/tokens.json` (desde Figma/Tokens Studio)
- [ ] Ejecutar `npm run tokens:transform`
- [ ] Verificar que `designTokens.ts` se actualizó correctamente
- [ ] Revisar `createTheme.ts` para mapeos necesarios
- [ ] Probar componentes afectados
- [ ] Actualizar documentación si hay cambios significativos

### ✅ Checklist para Integrar Diseño de Figma MCP

- [ ] Obtener código generado por Figma MCP
- [ ] Identificar componentes Material UI equivalentes
- [ ] Reemplazar Tailwind classes con `sx` prop
- [ ] Reemplazar valores hardcodeados con design tokens
- [ ] Verificar estructura de componente (forwardRef, displayName)
- [ ] Agregar TypeScript types
- [ ] Probar componente
- [ ] Agregar a Storybook
- [ ] Documentar

---

## 10. Recursos y Referencias

### 📚 Documentación Interna

- `docs/COMPONENT_TEMPLATE.md` - Template para nuevos componentes
- `docs/DOCUMENTATION_GUIDE.md` - Guía de documentación
- `src/theme/ARCHITECTURE.md` - Arquitectura de tokens
- `ARCHITECTURE_REVIEW.md` - Revisión de arquitectura

### 🔗 Enlaces Externos

- [Material UI Docs](https://mui.com)
- [Emotion Docs](https://emotion.sh)
- [Figma Tokens Studio](https://tokens.studio)
- [Storybook Docs](https://storybook.js.org)

### 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev              # Inicia Vite dev server
npm run storybook        # Inicia Storybook

# Build
npm run build            # Build del design system
npm run build-storybook  # Build de Storybook

# Testing
npm run test             # Ejecuta tests
npm run test:ui          # Tests con UI
npm run test:coverage    # Coverage report

# Linting & Formatting
npm run lint             # ESLint
npm run lint:fix         # Fix ESLint issues
npm run format           # Prettier format
npm run format:check     # Check formatting

# Tokens
npm run tokens:transform # Transforma tokens.json a TypeScript
npm run sync:figma-colors # Sincroniza colores desde Figma
```

---

## 11. Notas Importantes

### ⚠️ Advertencias

1. **NO editar `designTokens.ts` manualmente** - Se regenera desde `tokens.json`
2. **NO usar Tailwind** - El proyecto usa Material UI Theme System
3. **NO hardcodear valores** - Siempre usar design tokens
4. **NO crear componentes sin seguir el patrón estándar** - Mantener consistencia

### ✅ Mejores Prácticas

1. **Siempre usar design tokens** para colores, tipografía, espaciado
2. **Configurar estilos en theme** cuando son globales al componente
3. **Usar `sx` prop** para estilos dinámicos o específicos
4. **Documentar props** con JSDoc
5. **Agregar stories** para todos los componentes
6. **Mantener consistencia** en estructura y naming

### 🔮 Futuras Mejoras

- [ ] Sistema de assets centralizado
- [ ] Dark mode completo
- [ ] CSS Variables como alternativa
- [ ] Mejor integración con Figma Code Connect
- [ ] Automatización completa de sincronización Figma → Código

---

**Última revisión**: Diciembre 2024  
**Mantenido por**: MRS Design System Team  
**Versión del sistema**: 0.1.0

