# Sincronización Rápida: Figma → colorVariables.ts

## ✅ Respuesta Rápida

**Sí, puedes sincronizar `colorVariables.ts` con Figma.** He creado dos opciones para ti:

1. **Script con Figma API** (ya configurado) - Para sincronización programática
2. **Guía completa** con todas las opciones disponibles

## 🚀 Opción 1: Script con Figma API (Recomendado para empezar)

### Configuración Rápida

1. **Obtener Token de API de Figma:**
   ```
   1. Ve a Figma → Settings → Account
   2. Personal Access Tokens → Create new token
   3. Copia el token
   ```

2. **Configurar variable de entorno:**
   ```bash
   export FIGMA_ACCESS_TOKEN="tu-token-aqui"
   ```

3. **Ejecutar sincronización:**
   ```bash
   npm run sync:figma-colors
   ```

### ¿Qué hace el script?

- ✅ Conecta con la API de Figma
- ✅ Extrae todas las variables de color
- ✅ Las organiza por colección (Primitives, Semantic, Component)
- ✅ Genera un preview de los cambios
- ⚠️ Por seguridad, NO modifica el archivo automáticamente (muestra preview)

### Próximos Pasos

Para que el script actualice automáticamente `colorVariables.ts`, necesitas:
1. Revisar el preview generado
2. Descomentar la línea de `writeFileSync` en el script
3. Ejecutar nuevamente

---

## 🎨 Opción 2: Tokens Studio (Recomendado para producción)

### Ventajas
- ✅ Sincronización automática bidireccional
- ✅ Integración con GitHub
- ✅ No requiere scripts manuales

### Configuración

1. **Instalar plugin en Figma:**
   - Buscar "Tokens Studio for Figma" en la comunidad
   - Instalar

2. **Configurar GitHub Sync:**
   - En el plugin → Settings
   - Conectar con tu repositorio
   - Configurar ruta: `src/theme/tokens.json`

3. **Crear script de transformación:**
   - Tokens Studio exporta JSON
   - Necesitas transformarlo a `colorVariables.ts`

**Ver guía completa:** `docs/FIGMA_SYNC_GUIDE.md`

---

## 📊 Comparación

| Característica | Script API | Tokens Studio |
|----------------|-----------|---------------|
| **Automatización** | Manual (npm run) | Automática (GitHub) |
| **Bidireccional** | ❌ Solo lectura | ✅ Sí |
| **Configuración** | Media | Alta |
| **Control** | ✅ Total | ⚠️ Limitado |
| **Recomendado para** | Pruebas/Desarrollo | Producción |

---

## 🔧 Archivos Creados

1. **`scripts/sync-figma-colors.ts`** - Script de sincronización
2. **`docs/FIGMA_SYNC_GUIDE.md`** - Guía completa con todas las opciones
3. **`docs/FIGMA_SYNC_QUICKSTART.md`** - Este archivo (guía rápida)

---

## ❓ Preguntas Frecuentes

**P: ¿El script modifica mi archivo automáticamente?**
R: No, por seguridad solo muestra un preview. Debes descomentar la línea de `writeFileSync` para aplicar cambios.

**P: ¿Necesito instalar algo adicional?**
R: El script usa Node.js nativo. Si tienes problemas, puedes instalar `tsx`:
```bash
npm install -D tsx
```

**P: ¿Puedo sincronizar otros tokens además de colores?**
R: Sí, el script puede extenderse para incluir tipografía, spacing, etc.

**P: ¿Funciona con dark mode?**
R: Sí, Figma soporta modes. El script puede extenderse para manejar múltiples modes.

---

## 🎯 Recomendación

**Para empezar ahora mismo:**
1. Usa el script con Figma API (`npm run sync:figma-colors`)
2. Revisa el preview
3. Si te funciona, descomenta `writeFileSync` para aplicar cambios

**Para producción a largo plazo:**
1. Configura Tokens Studio
2. Crea script de transformación JSON → TypeScript
3. Automatiza con GitHub Actions

---

¿Necesitas ayuda configurando alguna de estas opciones?

