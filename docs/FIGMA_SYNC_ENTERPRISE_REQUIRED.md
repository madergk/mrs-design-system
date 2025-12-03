# ⚠️ API de Variables de Figma - Requisitos Enterprise

## Problema Detectado

El script `sync-figma-colors.js` está configurado para usar la API REST de Variables de Figma, pero esta API **requiere plan Enterprise**.

### Síntomas

Si ves este error:
```
Error 403: Invalid scope(s)... This endpoint requires the file_variables:read scope
```

Y al crear un token no ves la opción `file_variables:read` en los scopes disponibles, significa que tu cuenta **no tiene plan Enterprise**.

## Requisitos de la API de Variables REST

Según la [documentación oficial de Figma](https://developers.figma.com/docs/rest-api/variables/):

1. ✅ **Plan Enterprise**: Tu organización debe tener plan Enterprise
2. ✅ **Miembro completo**: Debes ser miembro completo (no invitado)
3. ✅ **Scope del token**: `file_variables:read` (solo disponible en Enterprise)

## Soluciones Alternativas (NO requieren Enterprise)

### 1. Tokens Studio for Figma ⭐ (Recomendado)

**Ventajas:**
- ✅ NO requiere Enterprise
- ✅ Sincronización automática bidireccional
- ✅ Integración con GitHub
- ✅ Gratuito

**Configuración:**
1. Instalar plugin: [Tokens Studio](https://www.figma.com/community/plugin/843461159747178946)
2. Configurar GitHub sync en el plugin
3. Crear script de transformación JSON → TypeScript

**Ver guía completa:** `docs/FIGMA_SYNC_GUIDE.md`

---

### 2. Figma Token Exporter

**Ventajas:**
- ✅ NO requiere Enterprise
- ✅ Fácil de usar
- ✅ Exporta a múltiples formatos

**Desventajas:**
- ⚠️ Sincronización manual
- ⚠️ Unidireccional (Figma → Código)

**Instalación:**
1. Plugin: [Figma Token Exporter](https://www.figma.com/community/plugin/888356466658405508)
2. Exportar variables manualmente cuando cambien

---

### 3. Exportación Manual

**Proceso:**
1. Abrir Figma
2. Variables panel → Export
3. Copiar valores manualmente a `colorVariables.ts`

**Cuándo usar:**
- Cambios infrecuentes
- Proyectos pequeños
- Sin acceso a plugins

---

## ¿Cómo verificar si tienes Enterprise?

1. Ve a Figma → Settings → Account
2. Personal Access Tokens → Create new token
3. Revisa los scopes disponibles
4. Si ves `file_variables:read` → Tienes Enterprise ✅
5. Si NO lo ves → No tienes Enterprise ❌

## Recomendación

**Para tu caso (sin Enterprise):**

1. **Usa Tokens Studio** para sincronización automática
2. O **Figma Token Exporter** para exportación manual
3. El script con API REST solo funcionará si tu organización actualiza a Enterprise

---

## Próximos Pasos

1. ✅ El script ya está configurado (funcionará cuando tengas Enterprise)
2. ⭐ Configura Tokens Studio para usar ahora mismo
3. 📝 Documenta el proceso elegido en tu proyecto

---

**Referencias:**
- [Figma Variables API Docs](https://developers.figma.com/docs/rest-api/variables/)
- [Tokens Studio Docs](https://docs.tokens.studio/)
- [Figma Plans Comparison](https://www.figma.com/pricing/)

