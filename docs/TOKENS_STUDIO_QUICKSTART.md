# Tokens Studio - Guía Rápida

## 🚀 Configuración en 5 Pasos

### 1. Instalar Plugin en Figma
- Plugins → Browse plugins → "Tokens Studio for Figma" → Install

### 2. Importar Variables desde Figma
- En Tokens Studio: `Styles & Variables` → `Import Variables`
- Selecciona las variables que quieres importar
- Click en `Import`

### 3. Configurar GitHub Sync
- Tokens Studio → Settings → Sync
- Connect to GitHub
- Repositorio: `mrs-design-system`
- Ruta: `tokens/tokens.json`
- Save

### 4. Sincronizar
- Click en `Sync` en Tokens Studio
- Esto exportará a GitHub automáticamente

### 5. Transformar a TypeScript
```bash
# Hacer pull del repositorio primero
git pull

# Transformar tokens a TypeScript
npm run tokens:transform
```

Esto generará:
- ✅ `src/theme/designTokens.ts`
- ✅ `src/theme/colorVariables.ts`

## 📋 Estructura Recomendada en Tokens Studio

```
Collections:
├── Primitives
│   └── Colors
│       ├── verones: #00686f
│       ├── teal: #009999
│       └── ...
├── Semantic
│   └── Colors
│       ├── primary
│       │   ├── main → alias(Primitives/Colors/verones)
│       │   └── dark: #004e53
│       └── ...
└── Component
    └── Colors
        └── ...
```

## 🔄 Flujo de Trabajo

```
1. Diseñador cambia tokens en Figma
   ↓
2. Tokens Studio → Sync (exporta a GitHub)
   ↓
3. Developer: git pull
   ↓
4. Developer: npm run tokens:transform
   ↓
5. Archivos TypeScript actualizados ✅
```

## ⚠️ Importante

- **NO editar manualmente** `designTokens.ts` o `colorVariables.ts`
- Los cambios se perderán al ejecutar `tokens:transform`
- Edita los tokens en Figma → Tokens Studio

## 📚 Documentación Completa

Ver: `docs/TOKENS_STUDIO_SETUP.md`

