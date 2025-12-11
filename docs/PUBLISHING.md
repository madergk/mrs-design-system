# 📦 Guía de Publicación del Design System

Esta guía explica cómo publicar y distribuir el paquete `mrs-design-system` en diferentes escenarios.

---

## 🎯 Estado Actual

El paquete está configurado como **privado** en `package.json`:
```json
{
  "private": true,
  "name": "mrs-design-system",
  "version": "0.1.0"
}
```

Esto significa que:
- ✅ No se puede publicar accidentalmente en npm público
- ✅ No aparecerá en búsquedas de npm
- ⚠️ No se puede instalar con `npm install mrs-design-system`

---

## 📋 Opciones de Distribución

### 1. **Uso Local (Desarrollo)** 🏠

Para usar el design system en proyectos locales sin publicarlo:

#### Opción A: Link Local (npm link)

```bash
# En el directorio del design system
cd /Users/mader/mrs
npm run build
npm link

# En el proyecto que lo consume
cd /ruta/a/tu/proyecto
npm link mrs-design-system
```

**Ventajas**:
- ✅ Cambios inmediatos (sin reinstalar)
- ✅ Perfecto para desarrollo
- ✅ No requiere publicación

**Desventajas**:
- ⚠️ Solo funciona localmente
- ⚠️ Requiere ejecutar `npm link` en cada máquina

#### Opción B: Instalación desde Carpeta Local

```bash
# En el proyecto que consume el design system
npm install /Users/mader/mrs/mrs-design-system
# O con ruta relativa:
npm install ../mrs-design-system
```

**Ventajas**:
- ✅ Simple y directo
- ✅ No requiere publicación

**Desventajas**:
- ⚠️ Ruta absoluta en `package.json` (no portable)
- ⚠️ Requiere rebuild manual cuando cambia el código

#### Opción C: Monorepo (pnpm/yarn workspaces)

Si tienes múltiples proyectos, considera un monorepo:

```json
// En el package.json raíz del monorepo
{
  "workspaces": [
    "packages/*",
    "apps/*"
  ]
}
```

**Ventajas**:
- ✅ Gestión centralizada de dependencias
- ✅ Cambios inmediatos
- ✅ Mejor para equipos grandes

---

### 2. **Publicación en npm Público** 🌐

Si quieres publicar el paquete públicamente en npm:

#### Paso 1: Preparar el Paquete

1. **Quitar `"private": true`** de `package.json`:
```json
{
  "name": "mrs-design-system",
  "version": "0.1.0",
  // "private": true,  ← ELIMINAR ESTA LÍNEA
  "publishConfig": {
    "access": "public"
  }
}
```

2. **Verificar que el build funciona**:
```bash
npm run build
```

3. **Verificar que los archivos correctos se incluyen**:
El campo `files` en `package.json` controla qué se publica:
```json
{
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ]
}
```

#### Paso 2: Crear Cuenta en npm

```bash
npm adduser
# O si ya tienes cuenta:
npm login
```

#### Paso 3: Verificar el Nombre del Paquete

**⚠️ IMPORTANTE**: Verifica que el nombre `mrs-design-system` esté disponible:

```bash
npm view mrs-design-system
```

Si obtienes un 404, el nombre está disponible. Si no, necesitarás:
- Usar un scope: `@tu-org/mrs-design-system`
- Cambiar el nombre: `mrs-design-system-ui`

#### Paso 4: Publicar

```bash
# Versión de prueba (opcional)
npm publish --dry-run

# Publicar
npm publish
```

#### Paso 5: Instalar en Proyectos

```bash
npm install mrs-design-system
```

**Ventajas**:
- ✅ Instalación simple: `npm install mrs-design-system`
- ✅ Versionado semántico automático
- ✅ Disponible para cualquier proyecto

**Desventajas**:
- ⚠️ Público (cualquiera puede verlo)
- ⚠️ Requiere cuenta de npm
- ⚠️ No recomendado para código propietario

---

### 3. **Publicación en GitHub Packages** 🔒

Ideal para paquetes privados o internos de la organización.

#### Paso 1: Configurar package.json

```json
{
  "name": "@tu-org/mrs-design-system",
  "version": "0.1.0",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/tu-org/mrs-design-system.git"
  }
}
```

#### Paso 2: Configurar Autenticación

Crea un archivo `.npmrc` en tu home directory (`~/.npmrc`):

```
@tu-org:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TU_TOKEN_AQUI
```

Para obtener el token:
1. Ve a GitHub → Settings → Developer settings → Personal access tokens
2. Crea un token con permisos `read:packages` y `write:packages`

#### Paso 3: Publicar

```bash
npm publish
```

#### Paso 4: Instalar en Proyectos

```bash
# Configurar .npmrc en el proyecto consumidor
echo "@tu-org:registry=https://npm.pkg.github.com" >> .npmrc
echo "//npm.pkg.github.com/:_authToken=TU_TOKEN" >> .npmrc

# Instalar
npm install @tu-org/mrs-design-system
```

**Ventajas**:
- ✅ Privado (solo tu organización puede acceder)
- ✅ Integrado con GitHub
- ✅ Gratis para repositorios privados

**Desventajas**:
- ⚠️ Requiere configuración de autenticación
- ⚠️ Cada desarrollador necesita token

---

### 4. **Publicación en npm Privado (npm Enterprise)** 🏢

Para organizaciones que usan npm Enterprise o similar:

```json
{
  "name": "@tu-org/mrs-design-system",
  "publishConfig": {
    "registry": "https://npm.tu-empresa.com"
  }
}
```

**Ventajas**:
- ✅ Control total
- ✅ Integración con infraestructura empresarial
- ✅ Políticas de seguridad personalizadas

---

## 🔄 Versionado Semántico

Independientemente del método de publicación, usa versionado semántico:

```bash
# Patch (0.1.0 → 0.1.1) - Bug fixes
npm version patch

# Minor (0.1.0 → 0.2.0) - Nuevas features, backward compatible
npm version minor

# Major (0.1.0 → 1.0.0) - Breaking changes
npm version major
```

Luego publica:
```bash
npm publish
```

---

## 📝 Checklist Antes de Publicar

- [ ] Build exitoso: `npm run build`
- [ ] Tests pasan: `npm test`
- [ ] Lint sin errores: `npm run lint`
- [ ] TypeScript compila: `npm run type-check`
- [ ] README.md actualizado
- [ ] LICENSE presente
- [ ] Versión actualizada en `package.json`
- [ ] CHANGELOG.md actualizado (si lo usas)
- [ ] `files` en `package.json` incluye solo lo necesario
- [ ] Dependencias correctas (no incluir devDependencies en producción)

---

## 🚀 Scripts Útiles

Agrega estos scripts a `package.json`:

```json
{
  "scripts": {
    "prepublishOnly": "npm run build && npm run test && npm run lint",
    "version": "npm run build && git add -A dist",
    "postversion": "git push && git push --tags"
  }
}
```

Esto asegura que:
- ✅ Se ejecuta build antes de publicar
- ✅ Se ejecutan tests antes de publicar
- ✅ Se actualiza git automáticamente al versionar

---

## 🔒 Seguridad

### Para Paquetes Públicos

- ✅ No incluir secrets o API keys
- ✅ Revisar `files` en `package.json` (no incluir `.env`, etc.)
- ✅ Usar `.npmignore` si es necesario
- ✅ Revisar dependencias por vulnerabilidades: `npm audit`

### Para Paquetes Privados

- ✅ Usar scopes: `@tu-org/package-name`
- ✅ Configurar autenticación correctamente
- ✅ Limitar acceso a miembros autorizados

---

## 📚 Recursos

- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [GitHub Packages](https://docs.github.com/en/packages)
- [Semantic Versioning](https://semver.org/)
- [npm Scopes](https://docs.npmjs.com/about-scoped-packages)

---

## ❓ Preguntas Frecuentes

### ¿Puedo mantener el paquete privado y aún así distribuirlo?

Sí, usa GitHub Packages o npm privado. El campo `"private": true` solo previene publicación accidental en npm público.

### ¿Cómo actualizo el paquete después de publicarlo?

```bash
# 1. Hacer cambios
# 2. Actualizar versión
npm version patch  # o minor, major
# 3. Publicar
npm publish
```

### ¿Puedo despublicar un paquete?

Sí, pero con limitaciones:
- Solo en las primeras 72 horas
- Requiere `npm unpublish --force`
- ⚠️ No recomendado para paquetes con usuarios

Mejor: publicar una versión nueva que marque la anterior como deprecated.

---

**Nota**: Para desarrollo local, usa `npm link` o instalación desde carpeta. Para producción, elige el método que mejor se adapte a tus necesidades de seguridad y distribución.


