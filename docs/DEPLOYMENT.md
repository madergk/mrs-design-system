# Guía de Despliegue de Documentación

Esta guía explica cómo desplegar la documentación de Storybook en diferentes plataformas.

## 🎯 Opciones de Despliegue

### 1. Netlify (Recomendado para proyectos simples)

Netlify es la opción más simple para desplegar Storybook automáticamente.

#### Configuración

1. **Crea un archivo `netlify.toml`** en la raíz del proyecto:

```toml
[build]
  command = "npm run build-storybook"
  publish = "storybook-static"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. **Conecta tu repositorio a Netlify**:
   - Ve a [Netlify](https://www.netlify.com/)
   - Conecta tu repositorio de GitHub/GitLab
   - Netlify detectará automáticamente la configuración

3. **Build settings**:
   - Build command: `npm run build-storybook`
   - Publish directory: `storybook-static`

#### Ventajas
- ✅ Despliegue automático en cada push
- ✅ HTTPS gratuito
- ✅ CDN global
- ✅ Preview deployments para PRs

### 2. Vercel

Vercel es otra excelente opción, especialmente si ya usas Vercel para otros proyectos.

#### Configuración

1. **Crea un archivo `vercel.json`**:

```json
{
  "buildCommand": "npm run build-storybook",
  "outputDirectory": "storybook-static",
  "devCommand": "npm run storybook",
  "installCommand": "npm install"
}
```

2. **Despliega**:
   - Instala Vercel CLI: `npm i -g vercel`
   - Ejecuta: `vercel`
   - O conecta tu repositorio en [vercel.com](https://vercel.com)

#### Ventajas
- ✅ Despliegue automático
- ✅ Preview deployments
- ✅ Integración con GitHub

### 3. GitHub Pages

Ideal si quieres alojar la documentación directamente en GitHub.

#### Configuración

1. **Instala `gh-pages`**:
```bash
npm install --save-dev gh-pages
```

2. **Agrega scripts a `package.json`**:
```json
{
  "scripts": {
    "deploy-storybook": "npm run build-storybook && gh-pages -d storybook-static"
  }
}
```

3. **Configura la base path en Storybook**:

Actualiza `.storybook/main.ts`:
```typescript
const config: StorybookConfig = {
  // ... configuración existente
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

// Para GitHub Pages, agrega esto si tu repo está en una subcarpeta
// export default {
//   ...config,
//   base: '/nombre-del-repo/',
// };
```

4. **Despliega**:
```bash
npm run deploy-storybook
```

#### Ventajas
- ✅ Gratis
- ✅ Integrado con GitHub
- ⚠️ Requiere configuración manual de base path

### 4. AWS S3 + CloudFront

Para proyectos empresariales que necesitan más control.

#### Configuración

1. **Crea un bucket S3**:
```bash
aws s3 mb s3://mrs-design-system-docs
```

2. **Configura el bucket para hosting estático**:
```bash
aws s3 website s3://mrs-design-system-docs \
  --index-document index.html \
  --error-document index.html
```

3. **Sube los archivos**:
```bash
npm run build-storybook
aws s3 sync storybook-static/ s3://mrs-design-system-docs
```

4. **Configura CloudFront** (opcional, para CDN):
   - Crea una distribución CloudFront
   - Apunta al bucket S3
   - Configura certificado SSL

#### Ventajas
- ✅ Control total
- ✅ Escalable
- ⚠️ Requiere más configuración

## 🚀 Despliegue Automático con CI/CD

### GitHub Actions

Crea `.github/workflows/deploy-storybook.yml`:

```yaml
name: Deploy Storybook

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build Storybook
        run: npm run build-storybook
      
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --dir=storybook-static --prod
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### GitLab CI

Crea `.gitlab-ci.yml`:

```yaml
stages:
  - build
  - deploy

build-storybook:
  stage: build
  image: node:18
  script:
    - npm ci
    - npm run build-storybook
  artifacts:
    paths:
      - storybook-static
    expire_in: 1 hour

deploy-storybook:
  stage: deploy
  image: node:18
  script:
    - npm install -g netlify-cli
    - netlify deploy --dir=storybook-static --prod
  only:
    - main
  dependencies:
    - build-storybook
```

## 📝 Scripts de Despliegue

Agrega estos scripts a `package.json`:

```json
{
  "scripts": {
    "build-storybook": "storybook build",
    "deploy-storybook:netlify": "npm run build-storybook && netlify deploy --dir=storybook-static --prod",
    "deploy-storybook:gh-pages": "npm run build-storybook && gh-pages -d storybook-static",
    "deploy-storybook:vercel": "npm run build-storybook && vercel --prod"
  }
}
```

## 🔒 Variables de Entorno

Para despliegues automatizados, necesitarás estas variables:

### Netlify
- `NETLIFY_AUTH_TOKEN`: Token de autenticación
- `NETLIFY_SITE_ID`: ID del sitio

### Vercel
- `VERCEL_TOKEN`: Token de autenticación
- `VERCEL_ORG_ID`: ID de la organización
- `VERCEL_PROJECT_ID`: ID del proyecto

## ✅ Checklist de Despliegue

Antes de desplegar:

- [ ] Storybook se construye correctamente: `npm run build-storybook`
- [ ] Todos los componentes se muestran correctamente
- [ ] La documentación es accesible
- [ ] Los enlaces funcionan
- [ ] Las imágenes y assets se cargan
- [ ] El tema se aplica correctamente
- [ ] No hay errores en la consola

## 🐛 Troubleshooting

### Problema: Assets no se cargan

**Solución**: Verifica que el `base` path esté configurado correctamente en `.storybook/main.ts` si estás desplegando en una subcarpeta.

### Problema: 404 en rutas directas

**Solución**: Configura redirects para que todas las rutas apunten a `index.html` (ver ejemplos arriba).

### Problema: Estilos no se aplican

**Solución**: Verifica que `staticDirs` esté configurado correctamente y que las fuentes se carguen desde una URL absoluta.

## 📚 Recursos

- [Storybook Deployment Docs](https://storybook.js.org/docs/react/sharing/publish-storybook)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

**Siguiente**: Una vez desplegado, comparte el link con tu equipo! 🎉

