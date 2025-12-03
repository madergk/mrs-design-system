# Guía de Sincronización Figma ↔ Código

## 🎯 Objetivo

Esta guía explica cómo sincronizar el archivo `colorVariables.ts` (y otros tokens de diseño) con las variables de Figma, manteniendo una fuente de verdad única y actualizada automáticamente.

## 📊 Opciones Disponibles

### 1. **Tokens Studio for Figma** ⭐ (Recomendado)

**¿Qué es?** Plugin de Figma que permite definir tokens directamente en Figma y sincronizarlos con GitHub/repositorio.

**Ventajas:**
- ✅ Sincronización bidireccional (Figma ↔ Código)
- ✅ Integración con GitHub (automático)
- ✅ Soporta múltiples formatos de salida (JSON, CSS, TypeScript)
- ✅ Comunidad activa y bien mantenido
- ✅ Gratuito y open source

**Desventajas:**
- ⚠️ Requiere configuración inicial
- ⚠️ Necesita estructura específica en Figma

**Instalación:**
1. Instalar plugin en Figma: [Tokens Studio](https://www.figma.com/community/plugin/843461159747178946)
2. Configurar repositorio GitHub
3. Conectar con tu proyecto

**Flujo de trabajo:**
```
Figma Variables → Tokens Studio → GitHub → Tu código
```

---

### 2. **Figma API + Scripts Personalizados**

**¿Qué es?** Usar la API REST de Figma para extraer variables programáticamente.

**Ventajas:**
- ✅ Control total sobre el proceso
- ✅ Personalizable según tus necesidades
- ✅ Puede ejecutarse en CI/CD

**Desventajas:**
- ⚠️ Requiere desarrollo de scripts
- ⚠️ Necesita token de API de Figma
- ⚠️ Más complejo de mantener

**Requisitos:**
- Token de API de Figma
- Script Node.js para extraer variables
- Configuración de mapeo entre Figma y código

---

### 3. **Figma Token Exporter**

**¿Qué es?** Plugin que extrae variables de Figma y las exporta en múltiples formatos.

**Ventajas:**
- ✅ Fácil de usar
- ✅ Múltiples formatos de exportación
- ✅ No requiere configuración compleja

**Desventajas:**
- ⚠️ Sincronización manual (no automática)
- ⚠️ Unidireccional (Figma → Código)

**Instalación:**
1. Instalar plugin: [Figma Token Exporter](https://www.figma.com/community/plugin/888356466658405508)
2. Exportar variables manualmente cuando cambien

---

### 4. **TokensBrücke**

**¿Qué es?** Plugin que convierte variables de Figma en JSON de tokens compatible con W3C Design Tokens.

**Ventajas:**
- ✅ Compatible con estándar W3C
- ✅ Exporta a JSON estructurado
- ✅ Gratuito

**Desventajas:**
- ⚠️ Sincronización manual
- ⚠️ Requiere procesamiento adicional para TypeScript

---

## 🚀 Implementación Recomendada: Tokens Studio

### Paso 1: Preparar Estructura en Figma

1. **Organizar Variables en Figma:**
   ```
   Collections:
   ├── Primitives
   │   ├── Colors
   │   │   ├── verones: #00686f
   │   │   ├── teal: #009999
   │   │   └── ...
   │   └── Typography
   ├── Semantic
   │   ├── Colors
   │   │   ├── primary/main → alias(primitives/colors/verones)
   │   │   └── ...
   └── Component
       └── Colors
   ```

2. **Usar Aliases (Referencias):**
   - En lugar de valores hardcodeados, usa aliases
   - Ejemplo: `primary/main` → alias de `primitives/colors/verones`

### Paso 2: Configurar Tokens Studio

1. **Instalar Plugin:**
   - Abrir Figma
   - Plugins → Browse plugins
   - Buscar "Tokens Studio for Figma"
   - Instalar

2. **Configurar GitHub Sync:**
   - En el plugin, ir a "Settings"
   - Conectar con GitHub
   - Seleccionar repositorio: `mrs-design-system`
   - Configurar ruta: `src/theme/tokens.json`

### Paso 3: Configurar Transformación en el Proyecto

Crear script que transforme el JSON de Tokens Studio a `colorVariables.ts`:

```typescript
// scripts/sync-figma-tokens.ts
// Este script leerá tokens.json y generará colorVariables.ts
```

---

## 🔧 Opción Alternativa: Script con Figma API

Si prefieres más control, puedes crear un script que use la API de Figma directamente.

### Requisitos Previos

1. **Obtener Token de API:**
   - Figma → Settings → Account → Personal Access Tokens
   - Crear nuevo token
   - Guardar en variable de entorno: `FIGMA_ACCESS_TOKEN`

2. **Obtener File Key:**
   - De la URL de Figma: `https://figma.com/file/{FILE_KEY}/...`
   - Tu file key: `pWR8HIewAt87ZioeOSMoWM`

### Script de Sincronización

```typescript
// scripts/sync-figma-colors.ts
// Este script extraerá variables de color de Figma
// y actualizará colorVariables.ts
```

---

## 📋 Comparación de Opciones

| Opción | Automatización | Bidireccional | Complejidad | Costo |
|--------|----------------|---------------|-------------|-------|
| **Tokens Studio** | ✅ Automático | ✅ Sí | Media | Gratis |
| **Figma API** | ✅ Automático | ⚠️ Solo lectura | Alta | Gratis |
| **Token Exporter** | ❌ Manual | ❌ No | Baja | Gratis |
| **TokensBrücke** | ❌ Manual | ❌ No | Baja | Gratis |

---

## 🎯 Recomendación para tu Proyecto

**Para `colorVariables.ts` específicamente, recomiendo:**

1. **Corto plazo:** Usar **Figma Token Exporter** para exportar manualmente cuando cambien los colores
2. **Mediano plazo:** Configurar **Tokens Studio** para sincronización automática
3. **Largo plazo:** Implementar script con **Figma API** para control total

---

## 📝 Próximos Pasos

1. **Decidir qué opción usar** (recomiendo Tokens Studio)
2. **Configurar la herramienta elegida**
3. **Crear script de transformación** (si es necesario)
4. **Documentar el proceso** en el README del proyecto

---

## 🔗 Recursos

- [Tokens Studio Documentation](https://docs.tokens.studio/)
- [Figma API Documentation](https://www.figma.com/developers/api)
- [Design Tokens W3C Spec](https://tr.designtokens.org/format/)
- [Figma Variables Guide](https://help.figma.com/hc/en-us/articles/15339657135383)

---

## ❓ Preguntas Frecuentes

**P: ¿Puedo sincronizar solo colores o también otros tokens?**
R: Sí, puedes sincronizar todos los tokens (colores, tipografía, spacing, etc.)

**P: ¿Qué pasa si cambio un color en el código?**
R: Depende de la herramienta. Tokens Studio permite sincronización bidireccional, pero la mayoría son unidireccionales (Figma → Código).

**P: ¿Necesito cambiar la estructura de mi archivo `colorVariables.ts`?**
R: No necesariamente. Puedes crear un script de transformación que convierta el formato de Figma a tu estructura actual.

**P: ¿Funciona con dark mode?**
R: Sí, Figma soporta modes (light/dark) y puedes sincronizar ambos.

---

¿Quieres que configure alguna de estas opciones para tu proyecto?

