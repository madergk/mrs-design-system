# Timeline Component - Variables y Estilos Extraídos

**Fuente**: Figma Design  
**Node ID**: `6602:51706`  
**Componente**: Timeline (Filled variant)  
**Fecha de extracción**: Diciembre 2024

---

## 📋 Resumen del Diseño

Componente Timeline vertical con:
- **TimelineDot**: Círculo indicador (12px) con variantes
- **Connector**: Línea vertical conectora (2px width)
- **Item Label**: Typography subtitle1
- **Item Description**: Typography body2
- **Button**: Opcional, variant Text, size Small, color Primary

---

## 🎨 Variables Extraídas de Figma

### Colores

| Variable Figma | Valor | Mapeo a Tokens | Uso |
|---------------|-------|----------------|-----|
| `primary/main` | `#00686f` | `semanticColors.primary.main` | Color primario (verones) |
| `_components/stepper/connector` | `#bdbdbd` | `componentTokens.stepper.connector` | Color de línea conectora |
| `text/secondary` | `#00000099` (rgba(0,0,0,0.6)) | `semanticColors.text.secondary` | Texto secundario |
| `0` (fill-0) | `rgba(189, 189, 189, 1)` | `#bdbdbd` | Color del dot (Filled variant) |

### Tipografía

| Variable Figma | Valor | Mapeo a Tokens | Uso |
|---------------|-------|----------------|-----|
| `typography/h6` | Font(family: "Nunito", style: SemiBold, size: 20px, weight: 600, lineHeight: 1.6, letterSpacing: 0.15) | `typographyVariants.h6` | Item Label |
| `typography/body2` | Font(family: "Nunito", style: Regular, size: 14px, weight: 400, lineHeight: 1.43, letterSpacing: 0.17) | `typographyVariants.body2` | Item Description |
| `button/small` | Font(family: "Nunito", style: SemiBold, size: 13px, weight: 600, lineHeight: 24px, letterSpacing: 0.46) | `typographyVariants.button.small` | Button text |

### Espaciado

| Variable Figma | Valor | Mapeo a Tokens | Uso |
|---------------|-------|----------------|-----|
| `0` | `0px` | `0` | Sin espaciado |
| `1` | `8px` | `primitiveSpacing[1]` o `theme.spacing(1)` | Espaciado base |
| `0,5` | `4px` | `theme.spacing(0.5)` | Espaciado pequeño |

### Dimensiones

| Elemento | Valor | Descripción |
|----------|-------|-------------|
| TimelineDot size | `12px × 12px` | Tamaño del círculo indicador |
| Connector width | `2px` | Ancho de la línea conectora |
| Connector Container width | `16px` | Espacio horizontal para el conector |
| Dot Container height | `35px` | Altura del contenedor del dot |
| Item Label height | `29px` | Altura del label |
| Item Description width | `172px` | Ancho del texto de descripción |

### Border Radius

| Variable Figma | Valor | Mapeo a Tokens | Uso |
|---------------|-------|----------------|-----|
| `radius/borderRadius-rounded` | `999px` | `primitiveRadius.rounded` | Border radius completamente redondeado |

---

## 📐 Estilos Específicos del Componente

### TimelineDot Component

**Variantes disponibles**:
- `Filled*` (default)
- `Outlined`
- `Check`
- `Current`
- `Danger`
- `Warning`
- `Info`
- `Success`

**Estilos base**:
```typescript
{
  position: 'absolute',
  left: 0,
  top: '11.5px', // 23px / 2 = 11.5px (centrado verticalmente)
  width: '12px',
  height: '12px',
  borderRadius: '50%', // Círculo completo
}
```

**Filled variant (default)**:
```typescript
{
  backgroundColor: 'rgba(189, 189, 189, 1)', // #bdbdbd
  // Usa imagen SVG para el fill
}
```

### Connector Component

**Estilos**:
```typescript
{
  width: '2px',
  backgroundColor: '#bdbdbd', // componentTokens.stepper.connector
  minHeight: '1px',
  flexGrow: 1, // Se expande para conectar items
}
```

**Container**:
```typescript
{
  width: '16px',
  height: '35px',
  flexShrink: 0,
}
```

### Item Label

**Estilos**:
```typescript
{
  fontFamily: 'Nunito', // typographyVariants.h6.fontFamily
  fontSize: '20px', // typographyVariants.h6.fontSize (1.25rem)
  fontWeight: 600, // typographyVariants.h6.fontWeight (semiBold)
  lineHeight: 1.6, // typographyVariants.h6.lineHeight
  letterSpacing: '0.15px', // typographyVariants.h6.letterSpacing
  variant: 'subtitle1', // Mapea a Typography component
}
```

### Item Description

**Estilos**:
```typescript
{
  fontFamily: 'Nunito', // typographyVariants.body2.fontFamily
  fontSize: '14px', // typographyVariants.body2.fontSize (0.875rem)
  fontWeight: 400, // typographyVariants.body2.fontWeight (regular)
  lineHeight: 1.43, // typographyVariants.body2.lineHeight
  letterSpacing: '0.17px', // typographyVariants.body2.letterSpacing
  variant: 'body2', // Mapea a Typography component
  color: 'rgba(0, 0, 0, 0.6)', // semanticColors.text.secondary
}
```

### Button (Opcional)

**Props**:
```typescript
{
  variant: 'text',
  size: 'small',
  color: 'primary',
  endIcon: true, // Arrow icon
  startIcon: false,
  label: 'Button',
}
```

**Estilos**:
```typescript
{
  fontFamily: 'Nunito', // typographyVariants.button.small.fontFamily
  fontSize: '13px', // typographyVariants.button.small.fontSize (0.8125rem)
  fontWeight: 600, // typographyVariants.button.small.fontWeight (semiBold)
  lineHeight: '24px', // typographyVariants.button.small.lineHeight (1.5rem)
  letterSpacing: '0.46px', // typographyVariants.button.small.letterSpacing
  color: '#00686f', // semanticColors.primary.main
}
```

---

## 🏗️ Estructura del Componente

### Layout Principal

```typescript
<Timeline>
  <TimelineItem>
    <DotContainer>
      <TimelineDot variant="Filled" />
      <ConnectorContainer />
    </DotContainer>
    <ContentContainer>
      <ItemLabel>
        <Typography variant="subtitle1">Item Label</Typography>
      </ItemLabel>
      <ItemDescription>
        <Typography variant="body2">Item description</Typography>
        {/* Opcional: Button */}
      </ItemDescription>
    </ContentContainer>
  </TimelineItem>
  {/* Más items... */}
</Timeline>
```

### Flexbox Layout

**Timeline Container**:
```typescript
{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start', // items-start
  position: 'relative',
}
```

**TimelineItem**:
```typescript
{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end', // items-end
  flexShrink: 0,
}
```

**Dot Container (horizontal)**:
```typescript
{
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '35px',
  flexShrink: 0,
}
```

**Content Container**:
```typescript
{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flexGrow: 1,
  minWidth: 0,
  minHeight: 0,
}
```

---

## 🔄 Mapeo a Tokens Existentes

### Colores

```typescript
// ✅ Ya existen en designTokens.ts
import { 
  semanticColors, 
  componentTokens,
  typographyVariants 
} from '../../theme/designTokens';

// Uso en componente
const connectorColor = componentTokens.stepper.connector; // '#bdbdbd'
const primaryColor = semanticColors.primary.main; // '#00686f'
const textSecondary = semanticColors.text.secondary; // 'rgba(0, 0, 0, 0.6)'
```

### Tipografía

```typescript
// ✅ Ya existen en designTokens.ts
const labelTypography = typographyVariants.h6;
const descriptionTypography = typographyVariants.body2;
const buttonTypography = typographyVariants.button.small;
```

### Espaciado

```typescript
// ✅ Ya existen en designTokens.ts
import { primitiveSpacing } from '../../theme/designTokens';
// O usar theme.spacing()
const spacing = theme.spacing(1); // 8px
const smallSpacing = theme.spacing(0.5); // 4px
```

---

## 📝 Tokens que Faltan (si se necesita crear componente)

### Component Tokens para Timeline

Si se crea un componente Timeline dedicado, estos tokens podrían agregarse:

```typescript
// En designTokens.ts - componentTokens
export const componentTokens = {
  // ... existentes
  timeline: {
    dot: {
      size: 12, // px
      filled: {
        backgroundColor: '#bdbdbd', // Ya existe en stepper.connector
      },
      outlined: {
        borderColor: '#bdbdbd',
        borderWidth: 1,
      },
      // Variantes de color
      current: {
        backgroundColor: semanticColors.primary.main, // '#00686f'
      },
      danger: {
        backgroundColor: semanticColors.error.main, // '#ab1a1a'
      },
      warning: {
        backgroundColor: semanticColors.warning.main, // '#ed6c02'
      },
      info: {
        backgroundColor: semanticColors.info.main, // '#0288d1'
      },
      success: {
        backgroundColor: semanticColors.success.main, // '#2e7d32'
      },
    },
    connector: {
      width: 2, // px
      color: '#bdbdbd', // Ya existe en stepper.connector
      containerWidth: 16, // px
    },
    item: {
      dotContainerHeight: 35, // px
      labelHeight: 29, // px
      descriptionWidth: 172, // px (puede ser flexible)
    },
  },
} as const;
```

---

## 💻 Implementación Sugerida

### Estructura de Archivos

```
src/components/Timeline/
├── Timeline.tsx
├── TimelineItem.tsx
├── TimelineDot.tsx
├── TimelineConnector.tsx
├── Timeline.stories.tsx
├── Timeline.test.tsx (opcional)
└── index.ts
```

### Ejemplo de Uso

```typescript
import { Timeline, TimelineItem } from 'mrs-design-system';

<Timeline>
  <TimelineItem
    label="Item Label"
    description="Item description"
  />
  <TimelineItem
    label="Item Label"
    description="Item description"
    action={
      <Button variant="text" size="small" color="primary" endIcon>
        Button
      </Button>
    }
  />
  <TimelineItem
    label="Item Label"
    description="Item description"
  />
</Timeline>
```

---

## 🎯 Comparación con Stepper Existente

| Aspecto | Stepper | Timeline (Diseño) |
|---------|---------|-------------------|
| **Orientación** | Horizontal/Vertical | Vertical (principalmente) |
| **Dot Size** | 24px | 12px |
| **Dot Variants** | Completed, Active, Inactive | Filled, Outlined, Check, Current, Danger, Warning, Info, Success |
| **Connector** | Horizontal/Vertical line | Vertical line (2px) |
| **Label** | Step label | Item label (subtitle1) |
| **Description** | Optional text | Item description (body2) |
| **Actions** | No | Sí (Button opcional) |
| **Uso** | Proceso paso a paso | Timeline de eventos |

---

## ✅ Checklist de Implementación

- [ ] Crear estructura de archivos del componente Timeline
- [ ] Implementar TimelineDot con todas las variantes
- [ ] Implementar TimelineConnector
- [ ] Implementar TimelineItem con label y description
- [ ] Agregar soporte para acciones (Button opcional)
- [ ] Crear stories en Storybook
- [ ] Agregar tests (opcional)
- [ ] Documentar props y uso
- [ ] Verificar accesibilidad (ARIA labels)
- [ ] Verificar responsive behavior

---

## 📚 Referencias

- **Figma Node**: `6602:51706`
- **Componente Similar**: `src/components/Stepper/Stepper.tsx`
- **Design Tokens**: `src/theme/designTokens.ts`
- **Typography Component**: `src/components/Typography/Typography.tsx`
- **Button Component**: `src/components/Button/Button.tsx`

---

**Nota**: Este documento extrae las variables y estilos directamente del diseño de Figma. Al implementar el componente, se deben seguir los patrones establecidos en el design system y usar los tokens existentes cuando sea posible.

