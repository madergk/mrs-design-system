# Configuración de Tokens Studio

Esta guía explica cómo configurar Tokens Studio para sincronizar tokens desde Figma a los archivos TypeScript del proyecto.

## 🎯 Objetivo

Sincronizar automáticamente los tokens de diseño desde Figma (usando Tokens Studio) a:
- `src/theme/designTokens.ts`
- `src/theme/colorVariables.ts`

## 📋 Requisitos Previos

1. ✅ Plugin Tokens Studio instalado en Figma
2. ✅ Acceso a GitHub (para sincronización)
3. ✅ Repositorio configurado

## 🚀 Configuración Paso a Paso

### Paso 1: Instalar Tokens Studio en Figma

1. Abre Figma
2. Ve a **Plugins** → **Browse plugins**
3. Busca "**Tokens Studio for Figma**"
4. Haz clic en **Install**

### Paso 2: Configurar Estructura de Tokens en Figma

En Tokens Studio, organiza tus tokens así:

```
Collections:
├── Primitives
│   ├── Colors
│   │   ├── verones: #00686f
│   │   ├── teal: #009999
│   │   ├── black: #000000
│   │   └── white: #ffffff
│   ├── Typography
│   │   ├── fontFamily
│   │   ├── fontSize
│   │   └── fontWeight
│   └── Spacing
│       └── base: 8
│
├── Semantic
│   ├── Colors
│   │   ├── primary
│   │   │   ├── main → alias(Primitives/Colors/verones)
│   │   │   ├── dark: #004e53
│   │   │   └── contrastText: #ffffff
│   │   ├── secondary
│   │   ├── error
│   │   └── ...
│   └── Typography
│       └── variants
│
└── Component
    └── Colors
        ├── rating
        ├── chip
        └── ...
```

**Importante:**
- Usa **aliases** para referenciar tokens primitivos
- Ejemplo: `primary/main` → alias de `Primitives/Colors/verones`

### Paso 3: Configurar GitHub Sync

1. En Tokens Studio, ve a **Settings** → **Sync**
2. Haz clic en **Connect to GitHub**
3. Autoriza la conexión
4. Selecciona tu repositorio: `mrs-design-system`
5. Configura la ruta: `tokens/tokens.json`
6. Guarda la configuración

### Paso 4: Sincronizar por Primera Vez

1. En Tokens Studio, haz clic en **Sync**
2. Esto exportará los tokens a `tokens/tokens.json` en GitHub
3. Haz pull del repositorio para obtener el archivo localmente

### Paso 5: Transformar Tokens a TypeScript

Una vez que tengas `tokens/tokens.json` localmente:

```bash
npm run tokens:transform
```

Esto generará:
- ✅ `src/theme/designTokens.ts`
- ✅ `src/theme/colorVariables.ts`

## 🔄 Flujo de Trabajo

```
1. Diseñador cambia tokens en Figma
   ↓
2. Tokens Studio sincroniza con GitHub
   ↓
3. Developer hace pull del repositorio
   ↓
4. Ejecuta: npm run tokens:transform
   ↓
5. Archivos TypeScript actualizados ✅
```

## 📁 Estructura de Archivos

```
mrs-design-system/
├── tokens/
│   ├── tokens.json          # Exportación de Tokens Studio
│   └── README.md
├── scripts/
│   └── transform-tokens.js  # Script de transformación
└── src/
    └── theme/
        ├── designTokens.ts   # Generado automáticamente
        └── colorVariables.ts # Generado automáticamente
```

## ⚙️ Configuración Avanzada

### Formato de Exportación

Tokens Studio exporta en formato W3C Design Tokens. El script `transform-tokens.js` convierte este formato a TypeScript.

### Personalizar Transformación

Si necesitas personalizar cómo se transforman los tokens, edita:
- `scripts/transform-tokens.js`

### Múltiples Modos (Light/Dark)

Si tienes modes en Tokens Studio (light/dark), el script puede extenderse para generar ambos temas.

## 🐛 Solución de Problemas

### Error: "No se encontró tokens.json"

**Solución:**
1. Verifica que Tokens Studio haya sincronizado
2. Haz pull del repositorio
3. Verifica que el archivo esté en `tokens/tokens.json`

### Los tokens no se actualizan

**Solución:**
1. Verifica la sincronización en Tokens Studio
2. Asegúrate de hacer pull del repositorio
3. Ejecuta `npm run tokens:transform` nuevamente

### Estructura de tokens incorrecta

**Solución:**
1. Verifica la estructura en Tokens Studio
2. Asegúrate de tener las colecciones: Primitives, Semantic, Component
3. Revisa que los nombres coincidan con lo esperado

## 📚 Referencias

- [Tokens Studio Documentation](https://docs.tokens.studio/)
- [W3C Design Tokens Format](https://tr.designtokens.org/format/)
- [Figma Variables Guide](https://help.figma.com/hc/en-us/articles/15339657135383)

## ✅ Checklist de Configuración

- [ ] Tokens Studio instalado en Figma
- [ ] Estructura de tokens configurada en Figma
- [ ] GitHub sync configurado
- [ ] Primera sincronización realizada
- [ ] `tokens/tokens.json` presente en el repositorio
- [ ] Script `transform-tokens.js` funcionando
- [ ] Archivos TypeScript generados correctamente

---

¿Necesitas ayuda con algún paso? Revisa la documentación o contacta al equipo.

