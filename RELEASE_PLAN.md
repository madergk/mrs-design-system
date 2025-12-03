# 🚀 Plan de Publicación - Primera Versión (v1.0.0)

## 🎯 OBJETIVO

Publicar la primera versión estable del MRS Design System, asegurando que todo esté listo para consumo en producción y estableciendo las bases para futuras versiones.

---

## 💭 RAZONAMIENTO

### ¿Por qué publicar ahora?

Tu design system ha alcanzado un nivel de madurez suficiente:
- ✅ **23 componentes** implementados y funcionales
- ✅ **Sistema de tokens** completo (3 niveles: Primitivos → Semánticos → Componentes)
- ✅ **Build funcional** que genera bundles optimizados
- ✅ **TypeScript** con tipos completos
- ✅ **Tests** pasando (39 tests)
- ✅ **Storybook** configurado para documentación

### ¿Qué significa "v1.0.0"?

Según versionado semántico:
- **v0.x.x** = Versión en desarrollo, cambios breaking permitidos
- **v1.0.0** = Primera versión estable, compromiso con API pública

**Decisión importante**: ¿Quieres publicar como `v1.0.0` (estable) o `v0.1.0` (aún en desarrollo)?

**Recomendación**: Si estás seguro de que la API actual es estable, ve a `v1.0.0`. Si esperas cambios significativos, mantén `v0.x.x`.

---

## 📋 CHECKLIST PRE-PUBLICACIÓN

### ✅ Estado Actual del Proyecto

- [x] Build funciona correctamente (`npm run build`)
- [x] Tests pasan (39 tests, 2 archivos)
- [ ] **Linting sin errores** ⚠️ (Hay errores que corregir)
- [ ] TypeScript compila sin errores
- [ ] README.md actualizado y completo
- [ ] **LICENSE** creado
- [ ] **CHANGELOG.md** creado
- [ ] Versión actualizada en `package.json`
- [ ] Campo `files` en `package.json` verificado
- [ ] Scripts de publicación configurados

### ⚠️ Tareas Pendientes

1. **Corregir errores de linting** (scripts/sync-figma-colors.js y .ts)
2. **Crear LICENSE** (MIT recomendado)
3. **Crear CHANGELOG.md** con primera versión
4. **Decidir versión inicial** (1.0.0 vs 0.1.0)
5. **Configurar scripts de publicación** (prepublishOnly, version, etc.)

---

## 📦 ESTRUCTURA DE ARCHIVOS PARA PUBLICACIÓN

### Archivos que se publicarán (según `package.json`)

```json
{
  "files": [
    "dist",        // ✅ Build compilado
    "README.md",   // ✅ Documentación principal
    "LICENSE"      // ⚠️ FALTA - Necesita crearse
  ]
}
```

### Archivos que NO se publicarán (correcto)

- `src/` - Código fuente (no necesario para consumo)
- `node_modules/` - Dependencias (npm las instala automáticamente)
- `storybook-static/` - Documentación estática (no necesaria en npm)
- `coverage/` - Reportes de tests
- `scripts/` - Scripts de desarrollo
- `.git/` - Control de versiones

**✅ Esto está bien configurado**

---

## 🔧 PASOS DE PREPARACIÓN

### Paso 1: Corregir Linting

**Problema**: Hay errores de linting en scripts que no afectan el build, pero es buena práctica corregirlos.

**Acción**: 
- Corregir errores en `scripts/sync-figma-colors.js` y `scripts/sync-figma-colors.ts`
- O excluir estos archivos del linting (son scripts de desarrollo)

### Paso 2: Crear LICENSE

**Razón**: npm requiere un archivo LICENSE para paquetes públicos. MIT es el más común y permisivo.

**Acción**: Crear `LICENSE` con licencia MIT

### Paso 3: Crear CHANGELOG.md

**Razón**: Documenta cambios entre versiones. Esencial para usuarios que actualizan.

**Formato recomendado**: [Keep a Changelog](https://keepachangelog.com/)

### Paso 4: Actualizar package.json

**Cambios necesarios**:

1. **Decidir versión inicial**:
   - `1.0.0` = Primera versión estable
   - `0.1.0` = Aún en desarrollo (actual)

2. **Configurar scripts de publicación**:
   ```json
   {
     "scripts": {
       "prepublishOnly": "npm run build && npm run test && npm run lint",
       "version": "npm run build && git add -A dist",
       "postversion": "git push && git push --tags"
     }
   }
   ```

3. **Decidir visibilidad**:
   - Si es **público**: Quitar `"private": true` y agregar `"publishConfig": { "access": "public" }`
   - Si es **privado**: Mantener `"private": true` y usar GitHub Packages o npm privado

### Paso 5: Verificar Build Final

```bash
# Limpiar build anterior
rm -rf dist

# Build nuevo
npm run build

# Verificar que dist/ contiene todo lo necesario
ls -la dist/
```

---

## 🚀 OPCIONES DE PUBLICACIÓN

### Opción A: npm Público (Recomendado para open source)

**Para qué**: Si quieres que cualquiera pueda instalar tu design system

**Pasos**:
1. Crear cuenta en npm: `npm adduser`
2. Verificar nombre disponible: `npm view mrs-design-system`
3. Quitar `"private": true` de package.json
4. Agregar `"publishConfig": { "access": "public" }`
5. Publicar: `npm publish`

**Ventajas**:
- ✅ Instalación simple: `npm install mrs-design-system`
- ✅ Disponible globalmente
- ✅ Versionado automático

**Desventajas**:
- ⚠️ Código público (cualquiera puede verlo)
- ⚠️ Requiere nombre único en npm

---

### Opción B: GitHub Packages (Recomendado para privado)

**Para qué**: Si quieres mantener el código privado pero distribuible

**Pasos**:
1. Cambiar nombre a scope: `@tu-org/mrs-design-system`
2. Agregar en package.json:
   ```json
   {
     "publishConfig": {
       "registry": "https://npm.pkg.github.com"
     }
   }
   ```
3. Configurar autenticación (token de GitHub)
4. Publicar: `npm publish`

**Ventajas**:
- ✅ Privado (solo tu organización)
- ✅ Integrado con GitHub
- ✅ Gratis para repos privados

---

### Opción C: Uso Local (Desarrollo)

**Para qué**: Si solo necesitas usar en proyectos locales

**Pasos**:
```bash
# En el design system
npm run build
npm link

# En el proyecto consumidor
npm link mrs-design-system
```

**Ventajas**:
- ✅ No requiere publicación
- ✅ Cambios inmediatos
- ✅ Perfecto para desarrollo

---

## 📝 VERSIONADO SEMÁNTICO

### ¿Qué es?

Sistema de numeración que comunica el tipo de cambios:
- **MAJOR** (1.0.0 → 2.0.0): Cambios que rompen compatibilidad
- **MINOR** (1.0.0 → 1.1.0): Nuevas features, backward compatible
- **PATCH** (1.0.0 → 1.0.1): Bug fixes, backward compatible

### Comandos

```bash
# Incrementar versión
npm version patch   # 0.1.0 → 0.1.1
npm version minor   # 0.1.0 → 0.2.0
npm version major   # 0.1.0 → 1.0.0

# Esto automáticamente:
# 1. Actualiza package.json
# 2. Crea git tag
# 3. Hace commit
```

### Workflow Recomendado

```bash
# 1. Hacer cambios
git checkout -b release/v1.0.0

# 2. Actualizar CHANGELOG.md
# 3. Corregir todos los errores
npm run lint
npm run test
npm run build

# 4. Incrementar versión
npm version major  # o minor, patch

# 5. Publicar
npm publish

# 6. Push tags
git push && git push --tags
```

---

## ✅ VALIDACIÓN FINAL

Antes de publicar, ejecuta este checklist:

```bash
# 1. Build exitoso
npm run build
# ✅ Debe generar dist/ sin errores

# 2. Tests pasan
npm run test
# ✅ Todos los tests deben pasar

# 3. Linting sin errores
npm run lint
# ✅ Sin errores ni warnings

# 4. TypeScript compila
npm run type-check
# ✅ Sin errores de tipos

# 5. Verificar tamaño del bundle
ls -lh dist/
# ✅ Verificar que los tamaños sean razonables

# 6. Dry run de publicación
npm publish --dry-run
# ✅ Verificar qué archivos se publicarán
```

---

## 🎯 DECISIONES A TOMAR

Antes de proceder, necesitas decidir:

1. **Versión inicial**: ¿1.0.0 (estable) o 0.1.0 (desarrollo)?
2. **Visibilidad**: ¿Público (npm) o Privado (GitHub Packages)?
3. **Nombre del paquete**: ¿`mrs-design-system` o `@tu-org/mrs-design-system`?
4. **Licencia**: ¿MIT (recomendado) u otra?

---

## 📚 RECURSOS

- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [GitHub Packages](https://docs.github.com/en/packages)

---

## ➡️ SIGUIENTE PASO

Una vez que hayas tomado las decisiones, ejecuta el comando `/prepare-release` para que el agente:
1. Cree el LICENSE
2. Cree el CHANGELOG.md
3. Actualice package.json con scripts de publicación
4. Corrija errores de linting
5. Prepare todo para la publicación

---

**Última actualización**: Diciembre 2025  
**Estado**: Plan listo para ejecución

