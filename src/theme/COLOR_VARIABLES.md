# Color Variables - Guía de Uso

## 🎯 Objetivo

Este archivo (`colorVariables.ts`) proporciona un sistema centralizado y optimizado para manejar todas las variables de color del design system. Está diseñado siguiendo las mejores prácticas de Material UI y organiza los colores de forma jerárquica.

## 📊 Estructura

El sistema de colores está organizado en tres niveles:

```
Primitivos → Semánticos → Componentes
```

### 1. **Colores Primitivos** (`primitiveColors`)
Valores base extraídos de Figma. Son los "ladrillos" fundamentales:
- `verones`: `#00686f` (color primario de marca)
- `teal`: `#009999`
- `black`, `white`
- Escala de grises (`gray.50` a `gray.900`)

### 2. **Colores Semánticos** (`semanticColors`)
Colores con significado contextual que referencian los primitivos:
- `primary`, `secondary`, `error`, `warning`, `info`, `success`
- `background`, `text`, `action`, `divider`
- Incluyen estados: `hover`, `selected`, `focus`, `active`

### 3. **Colores de Componente** (`componentColors`)
Colores específicos para componentes individuales:
- `rating`, `chip`, `input`, `alert`, `stepper`, `button`

## 💻 Uso

### Importación Básica

```typescript
import { colorVariables } from './theme/colorVariables';

// Acceder a colores semánticos
const primaryColor = colorVariables.semantic.primary.main; // '#00686f'
const errorColor = colorVariables.semantic.error.main; // '#ab1a1a'

// Acceder a colores de componente
const ratingColor = colorVariables.component.rating.activeFill; // '#ffb400'
```

### Uso en Theme de Material UI

```typescript
import { createTheme } from '@mui/material/styles';
import { colorVariables } from './theme/colorVariables';

const theme = createTheme({
  palette: {
    primary: {
      main: colorVariables.semantic.primary.main,
      dark: colorVariables.semantic.primary.dark,
      contrastText: colorVariables.semantic.primary.contrastText,
    },
    error: {
      main: colorVariables.semantic.error.main,
      contrastText: colorVariables.semantic.error.contrastText,
    },
  },
});
```

### Generar CSS Variables

Si quieres usar CSS variables (recomendado para temas dinámicos):

```typescript
import { generateColorCSSVariables, generateColorCSSString } from './theme/colorVariables';

// Generar objeto de variables CSS
const cssVars = generateColorCSSVariables();
// Resultado: { '--mui-palette-semantic-primary-main': '#00686f', ... }

// Generar string CSS completo
const cssString = generateColorCSSString(':root');
// Resultado: ':root { --mui-palette-semantic-primary-main: #00686f; ... }'
```

### Uso con Material UI CSS Variables

Material UI soporta CSS variables nativamente. Puedes habilitarlas así:

```typescript
import { createTheme } from '@mui/material/styles';
import { generateColorCSSVariables } from './theme/colorVariables';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-mui-color-scheme',
  },
  palette: {
    primary: {
      main: 'var(--mui-palette-primary-main)',
    },
  },
});

// Inyectar las variables CSS
const cssVars = generateColorCSSVariables();
// Aplicar en tu aplicación (ej: con GlobalStyles o en un <style> tag)
```

### Acceso Dinámico a Colores

```typescript
import { getColorValue } from './theme/colorVariables';

// Obtener color por path
const primaryMain = getColorValue('semantic.primary.main'); // '#00686f'
const ratingFill = getColorValue('component.rating.activeFill'); // '#ffb400'
```

### Validación de Colores

```typescript
import { isValidColor } from './theme/colorVariables';

isValidColor('#00686f'); // true
isValidColor('rgba(0, 104, 111, 0.5)'); // true
isValidColor('invalid'); // false
```

## 🔄 Migración desde `designTokens.ts`

Si ya estás usando `designTokens.ts`, puedes migrar gradualmente:

### Antes (designTokens.ts)
```typescript
import { semanticColors } from './theme/designTokens';

const primaryColor = semanticColors.primary.main;
```

### Después (colorVariables.ts)
```typescript
import { colorVariables } from './theme/colorVariables';

const primaryColor = colorVariables.semantic.primary.main;
```

**Nota**: `colorVariables.ts` es una versión optimizada y expandida de los colores en `designTokens.ts`. Ambos archivos pueden coexistir durante la migración.

## 📁 Archivos Relacionados

- **`colorVariables.ts`**: Archivo principal con todas las variables de color (TypeScript)
- **`colorVariables.json`**: Versión JSON para herramientas externas o generación de CSS
- **`designTokens.ts`**: Archivo original con todos los tokens (incluye tipografía, spacing, etc.)
- **`theme.ts`**: Configuración del tema de Material UI que usa los tokens

## 🎨 Ejemplos de Uso por Caso

### 1. Botón con Color Primario
```typescript
import { Button } from '@mui/material';
import { colorVariables } from './theme/colorVariables';

<Button
  sx={{
    backgroundColor: colorVariables.semantic.primary.main,
    color: colorVariables.semantic.primary.contrastText,
    '&:hover': {
      backgroundColor: colorVariables.semantic.primary.dark,
    },
  }}
>
  Click me
</Button>
```

### 2. Input con Estados
```typescript
import { TextField } from '@mui/material';
import { colorVariables } from './theme/colorVariables';

<TextField
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: colorVariables.component.input.outlined.enabledBorder,
      },
      '&:hover fieldset': {
        borderColor: colorVariables.component.input.outlined.hoverBorder,
      },
      '&.Mui-focused fieldset': {
        borderColor: colorVariables.component.input.outlined.focusedBorder,
      },
    },
  }}
/>
```

### 3. Alert con Variantes
```typescript
import { Alert } from '@mui/material';
import { colorVariables } from './theme/colorVariables';

<Alert
  severity="error"
  sx={{
    backgroundColor: colorVariables.component.alert.error.background,
    color: colorVariables.component.alert.error.color,
    borderLeft: `4px solid ${colorVariables.component.alert.error.border}`,
  }}
>
  Error message
</Alert>
```

## ⚠️ Mejores Prácticas

1. **Usa colores semánticos cuando sea posible**: Son más mantenibles y tienen significado claro
   ```typescript
   // ✅ Bien
   color: colorVariables.semantic.error.main
   
   // ❌ Evitar
   color: '#ab1a1a'
   ```

2. **Usa colores de componente solo cuando sea necesario**: Para estilos muy específicos
   ```typescript
   // ✅ Bien - para estilos específicos de componente
   borderColor: colorVariables.component.input.outlined.focusedBorder
   
   // ✅ Mejor - para casos generales
   borderColor: colorVariables.semantic.primary.main
   ```

3. **No hardcodees valores de color**: Siempre referencia las variables
   ```typescript
   // ❌ Evitar
   color: '#00686f'
   
   // ✅ Bien
   color: colorVariables.semantic.primary.main
   ```

4. **Usa estados cuando estén disponibles**: Los estados (hover, focus, etc.) ya están calculados
   ```typescript
   // ✅ Bien
   '&:hover': {
     backgroundColor: colorVariables.semantic.primary.states.hover,
   }
   ```

## 🔗 Referencias

- [Material UI - CSS Variables](https://mui.com/material-ui/customization/css-variables/)
- [Material UI - How to Customize](https://mui.com/material-ui/customization/how-to-customize/)
- [Material Design - Color System](https://m2.material.io/design/color/the-color-system.html)

## 📝 Notas Técnicas

- Todos los valores están tipados con TypeScript para autocompletado y validación
- Los colores con opacidad usan formato `rgba()` para mejor control
- El archivo JSON puede ser usado con herramientas como Style Dictionary para generar outputs adicionales
- Las funciones de generación de CSS variables siguen el formato de Material UI

