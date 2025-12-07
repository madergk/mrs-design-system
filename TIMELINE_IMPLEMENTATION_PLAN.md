# Timeline Component - Plan de Implementación

**Componente**: Timeline  
**Figma Node**: `6602:51706`  
**Fecha**: Diciembre 2024  
**Estado**: Planificación

---

## 📊 Análisis de Estructura

### Estructura Jerárquica del Diseño

```
Timeline (Container)
└── TimelineItem[] (Items repetidos)
    ├── DotContainer (Contenedor horizontal)
    │   ├── TimelineDot (12px circle)
    │   └── ConnectorContainer (16px width)
    │       └── TimelineConnector (2px vertical line)
    └── ContentContainer (Contenido del item)
        ├── ItemLabel (Typography subtitle1)
        └── ItemDescription (Typography body2)
            └── [Opcional] ActionButton (Button text/small/primary)
```

### Componentes Identificados

1. **Timeline** (Container principal)
   - Responsable de: Layout vertical, espaciado entre items
   - Props: `children`, `sx`, `orientation` (futuro)

2. **TimelineItem** (Item individual)
   - Responsable de: Layout de un item, manejo de dot y contenido
   - Props: `label`, `description`, `action`, `dotVariant`, `isLast`

3. **TimelineDot** (Círculo indicador)
   - Responsable de: Visualización del estado/variante
   - Props: `variant`, `size`

4. **TimelineConnector** (Línea conectora)
   - Responsable de: Línea vertical entre items
   - Props: `hide` (para último item), `color`

---

## 🏗️ Arquitectura Propuesta

### Estructura de Archivos

```
src/components/Timeline/
├── Timeline.tsx              # Componente principal (container)
├── TimelineItem.tsx           # Item individual
├── TimelineDot.tsx           # Círculo indicador
├── TimelineConnector.tsx     # Línea conectora
├── Timeline.types.ts         # TypeScript interfaces
├── Timeline.stories.tsx      # Storybook stories
├── Timeline.test.tsx         # Tests (opcional)
└── index.ts                  # Exports
```

### Patrón de Composición

Siguiendo el patrón de `Card` (Card, CardHeader, CardContent, etc.):

```typescript
// Opción 1: Composición explícita (recomendada)
<Timeline>
  <TimelineItem
    label="Item Label"
    description="Item description"
    dotVariant="filled"
  />
  <TimelineItem
    label="Item Label"
    description="Item description"
    dotVariant="current"
    action={<Button>Action</Button>}
  />
</Timeline>

// Opción 2: API simplificada (alternativa)
<Timeline
  items={[
    { label: "Item 1", description: "Desc 1" },
    { label: "Item 2", description: "Desc 2", action: <Button>Action</Button> },
  ]}
/>
```

**Decisión**: Usar **Opción 1** (composición) para mantener flexibilidad y seguir patrones del design system.

---

## 📋 Plan de Implementación

### Fase 1: Preparación y Tokens (30 min)

#### 1.1 Agregar Tokens de Timeline

**Archivo**: `tokens/tokens.json` (luego se transforma a `designTokens.ts`)

```json
{
  "Component": {
    "Colors": {
      "timeline": {
        "dot": {
          "size": {
            "$type": "dimension",
            "$value": "12px"
          },
          "filled": {
            "backgroundColor": {
              "$type": "color",
              "$value": "{Component.Colors.stepper.connector}"
            }
          },
          "outlined": {
            "borderColor": {
              "$type": "color",
              "$value": "{Component.Colors.stepper.connector}"
            },
            "borderWidth": {
              "$type": "dimension",
              "$value": "1px"
            }
          }
        },
        "connector": {
          "width": {
            "$type": "dimension",
            "$value": "2px"
          },
          "color": {
            "$type": "color",
            "$value": "{Component.Colors.stepper.connector}"
          },
          "containerWidth": {
            "$type": "dimension",
            "$value": "16px"
          }
        },
        "item": {
          "dotContainerHeight": {
            "$type": "dimension",
            "$value": "35px"
          }
        }
      }
    }
  }
}
```

**Acciones**:
- [ ] Agregar tokens a `tokens/tokens.json`
- [ ] Ejecutar `npm run tokens:transform`
- [ ] Verificar que `designTokens.ts` se actualizó correctamente

**Nota**: Los colores de variantes (current, danger, warning, info, success) usarán `semanticColors` existentes.

---

### Fase 2: Componentes Base (2-3 horas)

#### 2.1 TimelineConnector

**Prioridad**: Alta (más simple, se usa en TimelineItem)

**Archivo**: `src/components/Timeline/TimelineConnector.tsx`

**Props**:
```typescript
interface TimelineConnectorProps {
  hide?: boolean;
  sx?: SxProps<Theme>;
}
```

**Implementación**:
- Usar `Box` de MUI
- Ancho: 2px (desde tokens)
- Color: `componentTokens.stepper.connector`
- Altura: flexible (flexGrow: 1)
- Ocultar si `hide === true`

**Tiempo estimado**: 30 min

---

#### 2.2 TimelineDot

**Prioridad**: Alta (componente visual clave)

**Archivo**: `src/components/Timeline/TimelineDot.tsx`

**Props**:
```typescript
interface TimelineDotProps {
  variant?: 'filled' | 'outlined' | 'check' | 'current' | 'danger' | 'warning' | 'info' | 'success';
  size?: number; // default: 12
  sx?: SxProps<Theme>;
}
```

**Variantes**:
- `filled`: Background gris (#bdbdbd)
- `outlined`: Borde gris, sin fill
- `check`: Background + icono check
- `current`: Background primary (#00686f)
- `danger`: Background error (#ab1a1a)
- `warning`: Background warning (#ed6c02)
- `info`: Background info (#0288d1)
- `success`: Background success (#2e7d32)

**Implementación**:
- Usar `Box` de MUI
- Tamaño: 12px × 12px (desde tokens)
- Border radius: 50% (círculo)
- Posicionamiento: absolute (para alineación)
- Iconos: `CheckRoundedIcon` de `@mui/icons-material` para variant `check`

**Tiempo estimado**: 1 hora

---

#### 2.3 TimelineItem

**Prioridad**: Alta (componente principal)

**Archivo**: `src/components/Timeline/TimelineItem.tsx`

**Props**:
```typescript
interface TimelineItemProps {
  label: string;
  description?: string;
  action?: React.ReactNode; // Button u otro componente
  dotVariant?: TimelineDotProps['variant'];
  isLast?: boolean; // Para ocultar connector
  sx?: SxProps<Theme>;
}
```

**Estructura interna**:
```typescript
<TimelineItem>
  <DotContainer>
    <TimelineDot variant={dotVariant} />
    <ConnectorContainer>
      {!isLast && <TimelineConnector />}
    </ConnectorContainer>
  </DotContainer>
  <ContentContainer>
    <Typography variant="subtitle1">{label}</Typography>
    {description && (
      <Typography variant="body2">{description}</Typography>
    )}
    {action && <ActionContainer>{action}</ActionContainer>}
  </ContentContainer>
</TimelineItem>
```

**Layout**:
- Flexbox vertical para el item
- Flexbox horizontal para dotContainer
- Espaciado: `theme.spacing(1)` (8px) entre elementos

**Tiempo estimado**: 1.5 horas

---

#### 2.4 Timeline (Container)

**Prioridad**: Alta (componente raíz)

**Archivo**: `src/components/Timeline/Timeline.tsx`

**Props**:
```typescript
interface TimelineProps extends BoxProps {
  children: React.ReactNode; // TimelineItem[]
  orientation?: 'vertical' | 'horizontal'; // default: 'vertical'
}
```

**Implementación**:
- Usar `Box` de MUI
- Layout: flex column
- Alineación: flex-start
- Detectar `isLast` automáticamente en children

**Tiempo estimado**: 45 min

---

### Fase 3: Integración y Refinamiento (1-2 horas)

#### 3.1 Types Consolidados

**Archivo**: `src/components/Timeline/Timeline.types.ts`

```typescript
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
  variant?: TimelineDotVariant;
  size?: number;
  sx?: SxProps<Theme>;
}

export interface TimelineConnectorProps {
  hide?: boolean;
  sx?: SxProps<Theme>;
}

export interface TimelineItemProps {
  label: string;
  description?: string;
  action?: React.ReactNode;
  dotVariant?: TimelineDotVariant;
  isLast?: boolean;
  sx?: SxProps<Theme>;
}

export interface TimelineProps extends BoxProps {
  children: React.ReactNode;
  orientation?: 'vertical' | 'horizontal';
}
```

**Tiempo estimado**: 15 min

---

#### 3.2 Exports

**Archivo**: `src/components/Timeline/index.ts`

```typescript
export { Timeline, type TimelineProps } from './Timeline';
export { TimelineItem, type TimelineItemProps } from './TimelineItem';
export { TimelineDot, type TimelineDotProps } from './TimelineDot';
export { TimelineConnector, type TimelineConnectorProps } from './TimelineConnector';
export type { TimelineDotVariant } from './Timeline.types';
```

**Tiempo estimado**: 10 min

---

#### 3.3 Export en Index Principal

**Archivo**: `src/index.ts`

```typescript
// Agregar:
export { Timeline, TimelineItem, TimelineDot, TimelineConnector } from './components/Timeline';
export type { 
  TimelineProps, 
  TimelineItemProps, 
  TimelineDotProps, 
  TimelineConnectorProps,
  TimelineDotVariant 
} from './components/Timeline';
```

**Tiempo estimado**: 5 min

---

### Fase 4: Documentación (1-2 horas)

#### 4.1 Storybook Stories

**Archivo**: `src/components/Timeline/Timeline.stories.tsx`

**Stories a crear**:
1. **Default**: Timeline básico con 3 items
2. **With Actions**: Timeline con botones de acción
3. **Dot Variants**: Mostrar todas las variantes de dot
4. **Long Content**: Items con descripciones largas
5. **Single Item**: Timeline con un solo item
6. **Many Items**: Timeline con muchos items (scroll)

**Tiempo estimado**: 1 hora

---

#### 4.2 Tests (Opcional pero recomendado)

**Archivo**: `src/components/Timeline/Timeline.test.tsx`

**Tests a crear**:
- Renderizado básico
- Props de variantes
- Ocultar connector en último item
- Renderizado de action button

**Tiempo estimado**: 45 min

---

### Fase 5: Validación y Ajustes (1 hora)

#### 5.1 Validación Visual

- [ ] Comparar con diseño de Figma
- [ ] Verificar espaciados y dimensiones
- [ ] Validar todas las variantes de dot
- [ ] Verificar responsive behavior

#### 5.2 Validación Técnica

- [ ] Linting sin errores
- [ ] TypeScript sin errores
- [ ] Tests pasando (si se crearon)
- [ ] Storybook renderizando correctamente

#### 5.3 Ajustes Finales

- [ ] Ajustar espaciados si es necesario
- [ ] Optimizar código
- [ ] Agregar comentarios JSDoc faltantes

---

## 🎨 Detalles de Implementación

### TimelineDot - Mapeo de Variantes

```typescript
const getDotStyles = (variant: TimelineDotVariant, theme: Theme) => {
  const baseSize = 12; // desde tokens
  
  switch (variant) {
    case 'filled':
      return {
        width: baseSize,
        height: baseSize,
        backgroundColor: componentTokens.stepper.connector, // #bdbdbd
        borderRadius: '50%',
      };
    case 'outlined':
      return {
        width: baseSize,
        height: baseSize,
        border: `1px solid ${componentTokens.stepper.connector}`,
        borderRadius: '50%',
        backgroundColor: 'transparent',
      };
    case 'check':
      return {
        width: baseSize,
        height: baseSize,
        backgroundColor: componentTokens.stepper.connector,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
    case 'current':
      return {
        width: baseSize,
        height: baseSize,
        backgroundColor: semanticColors.primary.main, // #00686f
        borderRadius: '50%',
      };
    case 'danger':
      return {
        width: baseSize,
        height: baseSize,
        backgroundColor: semanticColors.error.main, // #ab1a1a
        borderRadius: '50%',
      };
    case 'warning':
      return {
        width: baseSize,
        height: baseSize,
        backgroundColor: semanticColors.warning.main, // #ed6c02
        borderRadius: '50%',
      };
    case 'info':
      return {
        width: baseSize,
        height: baseSize,
        backgroundColor: semanticColors.info.main, // #0288d1
        borderRadius: '50%',
      };
    case 'success':
      return {
        width: baseSize,
        height: baseSize,
        backgroundColor: semanticColors.success.main, // #2e7d32
        borderRadius: '50%',
      };
    default:
      return {
        width: baseSize,
        height: baseSize,
        backgroundColor: componentTokens.stepper.connector,
        borderRadius: '50%',
      };
  }
};
```

### TimelineItem - Layout Detallado

```typescript
// DotContainer (horizontal)
const dotContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 35, // desde tokens: componentTokens.timeline.item.dotContainerHeight
  flexShrink: 0,
  position: 'relative',
};

// ConnectorContainer
const connectorContainerStyles = {
  width: 16, // desde tokens: componentTokens.timeline.connector.containerWidth
  height: 35,
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

// ContentContainer
const contentContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flexGrow: 1,
  minWidth: 0,
  minHeight: 0,
  paddingLeft: (theme: Theme) => theme.spacing(2), // 16px
};
```

---

## 🔄 Dependencias y Tokens

### Tokens a Usar (Existentes)

```typescript
import {
  semanticColors,
  componentTokens,
  typographyVariants,
} from '../../theme/designTokens';
```

**Colores**:
- `semanticColors.primary.main` → Dot variant "current"
- `semanticColors.error.main` → Dot variant "danger"
- `semanticColors.warning.main` → Dot variant "warning"
- `semanticColors.info.main` → Dot variant "info"
- `semanticColors.success.main` → Dot variant "success"
- `semanticColors.text.secondary` → Description text
- `componentTokens.stepper.connector` → Connector y dot "filled"

**Tipografía**:
- `typographyVariants.h6` → Item Label (subtitle1)
- `typographyVariants.body2` → Item Description

**Espaciado**:
- `theme.spacing(1)` → 8px (espaciado base)
- `theme.spacing(2)` → 16px (padding entre dot y contenido)

### Tokens a Agregar

Ver **Fase 1.1** para tokens específicos de Timeline.

---

## ✅ Checklist de Implementación

### Preparación
- [ ] Agregar tokens a `tokens/tokens.json`
- [ ] Ejecutar `npm run tokens:transform`
- [ ] Verificar tokens en `designTokens.ts`

### Componentes Base
- [ ] Crear `TimelineConnector.tsx`
- [ ] Crear `TimelineDot.tsx` con todas las variantes
- [ ] Crear `TimelineItem.tsx`
- [ ] Crear `Timeline.tsx` (container)

### Integración
- [ ] Crear `Timeline.types.ts`
- [ ] Crear `index.ts` con exports
- [ ] Agregar exports en `src/index.ts`

### Documentación
- [ ] Crear `Timeline.stories.tsx` con todas las variantes
- [ ] Agregar JSDoc a todos los componentes
- [ ] Crear `Timeline.test.tsx` (opcional)

### Validación
- [ ] Linting sin errores
- [ ] TypeScript sin errores
- [ ] Comparar visualmente con Figma
- [ ] Verificar responsive behavior
- [ ] Probar todas las variantes

---

## 📊 Estimación de Tiempo Total

| Fase | Tiempo Estimado |
|------|----------------|
| Fase 1: Preparación y Tokens | 30 min |
| Fase 2: Componentes Base | 2-3 horas |
| Fase 3: Integración | 1-2 horas |
| Fase 4: Documentación | 1-2 horas |
| Fase 5: Validación | 1 hora |
| **TOTAL** | **5.5 - 8.5 horas** |

---

## 🎯 Prioridades

### Must Have (MVP)
1. ✅ TimelineDot con variantes: filled, current
2. ✅ TimelineConnector
3. ✅ TimelineItem básico (label + description)
4. ✅ Timeline container
5. ✅ Storybook básico

### Should Have
1. ✅ Todas las variantes de TimelineDot
2. ✅ Soporte para action button
3. ✅ Storybook completo
4. ✅ Tests básicos

### Nice to Have
1. ⚪ Orientación horizontal (futuro)
2. ⚪ Animaciones
3. ⚪ Variantes de tamaño
4. ⚪ Customización avanzada de estilos

---

## 🔗 Referencias

- **Diseño Figma**: Node `6602:51706`
- **Componente Similar**: `src/components/Stepper/Stepper.tsx`
- **Patrón de Composición**: `src/components/Card/`
- **Design Tokens**: `src/theme/designTokens.ts`
- **Template**: `docs/COMPONENT_TEMPLATE.md`
- **Reglas**: `DESIGN_SYSTEM_RULES.md`

---

## 📝 Notas de Implementación

### Decisiones Técnicas

1. **No usar Material UI Timeline**: El diseño es diferente al Timeline de MUI, así que se construye desde cero con `Box`.

2. **Reutilizar Tokens de Stepper**: El connector usa el mismo color que `stepper.connector` para mantener consistencia.

3. **Composición sobre Configuración**: Usar `TimelineItem` como componente separado permite mayor flexibilidad.

4. **Variantes de Dot**: Usar colores semánticos existentes en lugar de crear nuevos tokens.

5. **Posicionamiento**: TimelineDot usa `position: absolute` para alineación precisa según el diseño.

---

**Última actualización**: Diciembre 2024  
**Estado**: Listo para implementación

