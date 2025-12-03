# ✅ Checklist de Publicación - v1.0.0

Usa este checklist antes de publicar la primera versión del design system.

## 📋 Pre-Publicación

### Preparación de Archivos

- [ ] **LICENSE** creado y verificado
- [ ] **CHANGELOG.md** actualizado con primera versión
- [ ] **README.md** revisado y actualizado
- [ ] **package.json** actualizado con scripts de publicación
- [ ] Versión decidida: `1.0.0` (estable) o `0.1.0` (desarrollo)

### Calidad de Código

- [ ] **Build exitoso**: `npm run build`
  ```bash
  npm run build
  # ✅ Debe generar dist/ sin errores
  ```

- [ ] **Tests pasan**: `npm run test:run`
  ```bash
  npm run test:run
  # ✅ Todos los tests deben pasar
  ```

- [ ] **Linting sin errores**: `npm run lint`
  ```bash
  npm run lint
  # ✅ Sin errores ni warnings críticos
  ```

- [ ] **TypeScript compila**: `npm run type-check`
  ```bash
  npm run type-check
  # ✅ Sin errores de tipos
  ```

### Verificación de Build

- [ ] **Dist contiene archivos necesarios**:
  ```bash
  ls -la dist/
  # ✅ Debe contener:
  #   - index.js
  #   - index.d.ts
  #   - theme/
  #   - components/
  ```

- [ ] **Tamaño del bundle verificado**:
  ```bash
  ls -lh dist/
  # ✅ Verificar que los tamaños sean razonables
  #   - index.js debería ser < 1MB
  ```

- [ ] **Dry run de publicación**:
  ```bash
  npm publish --dry-run
  # ✅ Verificar qué archivos se publicarán
  # ✅ Verificar que no se incluyan archivos innecesarios
  ```

### Configuración de package.json

- [ ] **Campo `files` verificado**:
  ```json
  {
    "files": [
      "dist",
      "README.md",
      "LICENSE"
    ]
  }
  ```
  ✅ Solo incluye lo necesario

- [ ] **Versión actualizada**:
  ```json
  {
    "version": "1.0.0"  // o "0.1.0"
  }
  ```

- [ ] **Scripts de publicación configurados**:
  ```json
  {
    "scripts": {
      "prepublishOnly": "npm run build && npm run test:run && npm run lint",
      "version": "npm run build && git add -A dist",
      "postversion": "git push && git push --tags"
    }
  }
  ```

### Decisión de Visibilidad

- [ ] **Decidido método de publicación**:
  - [ ] npm Público
  - [ ] GitHub Packages (privado)
  - [ ] npm Privado
  - [ ] Solo uso local

- [ ] **Si es público**:
  - [ ] Quitado `"private": true` de package.json
  - [ ] Agregado `"publishConfig": { "access": "public" }`
  - [ ] Verificado que el nombre esté disponible: `npm view mrs-design-system`

- [ ] **Si es privado (GitHub Packages)**:
  - [ ] Nombre cambiado a scope: `@tu-org/mrs-design-system`
  - [ ] Agregado `"publishConfig": { "registry": "https://npm.pkg.github.com" }`
  - [ ] Token de GitHub configurado

### Git y Versionado

- [ ] **Todos los cambios commiteados**:
  ```bash
  git status
  # ✅ No debe haber cambios sin commitear
  ```

- [ ] **Branch de release creado** (opcional pero recomendado):
  ```bash
  git checkout -b release/v1.0.0
  ```

- [ ] **CHANGELOG.md actualizado** con fecha de release

---

## 🚀 Proceso de Publicación

### Paso 1: Preparación Final

```bash
# 1. Asegurarse de estar en la rama correcta
git checkout main  # o release/v1.0.0

# 2. Pull últimos cambios
git pull origin main

# 3. Ejecutar todos los checks
npm run build
npm run test:run
npm run lint
npm run type-check
```

### Paso 2: Incrementar Versión

```bash
# Opción A: Versión automática (recomendado)
npm version major   # Para 1.0.0
# o
npm version minor   # Para 0.2.0
# o
npm version patch   # Para 0.1.1

# Opción B: Versión manual
# Editar package.json manualmente y luego:
git add package.json
git commit -m "chore: bump version to 1.0.0"
git tag v1.0.0
```

### Paso 3: Publicar

```bash
# Dry run primero (verificar sin publicar)
npm publish --dry-run

# Si todo se ve bien, publicar
npm publish
```

### Paso 4: Verificar Publicación

```bash
# Verificar que se publicó correctamente
npm view mrs-design-system

# O si es privado (GitHub Packages)
npm view @tu-org/mrs-design-system
```

### Paso 5: Push Tags

```bash
# Si usaste npm version, los tags ya están creados
# Solo necesitas hacer push:
git push && git push --tags

# Si creaste tags manualmente:
git push origin v1.0.0
```

---

## ✅ Post-Publicación

### Verificación

- [ ] **Paquete visible en npm/GitHub Packages**
- [ ] **Instalación funciona en proyecto de prueba**:
  ```bash
  # En un proyecto nuevo
  npm install mrs-design-system
  # o
  npm install @tu-org/mrs-design-system
  ```

- [ ] **Import funciona correctamente**:
  ```tsx
  import { Button, theme } from 'mrs-design-system';
  // ✅ Sin errores
  ```

### Documentación

- [ ] **README.md actualizado** con instrucciones de instalación
- [ ] **CHANGELOG.md** actualizado con fecha de release
- [ ] **Storybook** desplegado (si aplica)
- [ ] **Documentación** actualizada en repositorio

### Comunicación

- [ ] **Anuncio** a equipo/usuarios (si aplica)
- [ ] **Release notes** creados en GitHub (si aplica)
- [ ] **Documentación** actualizada en wiki/docs (si aplica)

---

## 🔄 Para Futuras Versiones

Después de la primera publicación, el proceso será más simple:

```bash
# 1. Hacer cambios
# 2. Actualizar CHANGELOG.md
# 3. Incrementar versión
npm version patch  # o minor, major
# 4. Publicar
npm publish
# 5. Push
git push && git push --tags
```

---

## ⚠️ Errores Comunes

### Error: "Package name already exists"
**Solución**: Cambiar nombre o usar scope: `@tu-org/mrs-design-system`

### Error: "You must be logged in"
**Solución**: `npm login` o configurar autenticación para GitHub Packages

### Error: "Private package cannot be published"
**Solución**: Quitar `"private": true` o usar GitHub Packages

### Error: "Missing LICENSE file"
**Solución**: Crear archivo LICENSE (ya creado ✅)

### Error: Build falla en prepublishOnly
**Solución**: Corregir errores antes de publicar

---

**Última actualización**: Diciembre 2025  
**Versión objetivo**: v1.0.0

