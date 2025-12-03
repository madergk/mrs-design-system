/**
 * Transform Tokens Studio JSON to TypeScript Files
 *
 * Este script transforma el JSON exportado por Tokens Studio
 * a los archivos TypeScript: designTokens.ts y colorVariables.ts
 *
 * Uso:
 *   npm run tokens:transform
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ============================================================================
// CONFIGURACIÓN
// ============================================================================

const TOKENS_JSON_PATH = join(process.cwd(), 'tokens', 'tokens.json');
const DESIGN_TOKENS_PATH = join(process.cwd(), 'src', 'theme', 'designTokens.ts');
const COLOR_VARIABLES_PATH = join(process.cwd(), 'src', 'theme', 'colorVariables.ts');

// ============================================================================
// FUNCIONES DE LECTURA
// ============================================================================

/**
 * Lee el archivo tokens.json de Tokens Studio
 */
function readTokensJSON() {
  if (!existsSync(TOKENS_JSON_PATH)) {
    const examplePath = join(process.cwd(), 'tokens', 'tokens.example.json');
    if (existsSync(examplePath)) {
      console.log('⚠️  No se encontró tokens.json, usando tokens.example.json como referencia\n');
      const content = readFileSync(examplePath, 'utf-8');
      return JSON.parse(content);
    }
    
    throw new Error(
      `❌ No se encontró el archivo tokens.json en ${TOKENS_JSON_PATH}\n` +
      `   Asegúrate de haber sincronizado los tokens desde Tokens Studio.\n` +
      `   Ver: docs/TOKENS_STUDIO_SETUP.md`
    );
  }

  const content = readFileSync(TOKENS_JSON_PATH, 'utf-8');
  return JSON.parse(content);
}

// ============================================================================
// FUNCIONES DE TRANSFORMACIÓN
// ============================================================================

/**
 * Convierte valor de token a formato TypeScript
 */
function formatTokenValue(value, type) {
  if (typeof value === 'string') {
    // Si es una referencia a otro token
    if (value.startsWith('{') && value.endsWith('}')) {
      return value; // Mantener referencia
    }
    // Si es un color hex o string
    return `'${value}'`;
  }
  
  if (typeof value === 'number') {
    return value.toString();
  }
  
  if (typeof value === 'object' && value !== null) {
    if (Array.isArray(value)) {
      return `[${value.map(v => formatTokenValue(v, type)).join(', ')}]`;
    }
    // Objeto anidado
    const entries = Object.entries(value)
      .map(([k, v]) => `  ${k}: ${formatTokenValue(v, type)}`)
      .join(',\n');
    return `{\n${entries}\n}`;
  }
  
  return JSON.stringify(value);
}

/**
 * Resuelve referencias de tokens (aliases)
 */
function resolveTokenReference(value, tokens) {
  if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
    // Formato: {Primitives.Colors.verones}
    const path = value.slice(1, -1).split('.');
    let current = tokens;
    
    for (const key of path) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return value; // No se pudo resolver, devolver original
      }
    }
    
    // Si el valor resuelto tiene $value, extraerlo y resolver recursivamente
    if (current && typeof current === 'object' && '$value' in current) {
      return resolveTokenReference(current.$value, tokens);
    }
    
    // Si es un string directo, devolverlo
    if (typeof current === 'string') {
      return current;
    }
    
    // Si es un objeto con $value, extraer el valor
    if (current && typeof current === 'object' && '$value' in current) {
      return current.$value;
    }
    
    return current;
  }
  
  return value;
}

/**
 * Extrae colores primitivos del JSON
 */
function extractPrimitiveColors(tokens) {
  const colors = {};
  
  // Buscar en la estructura de Tokens Studio (soporta múltiples formatos)
  const primitiveColors = 
    tokens.Primitives?.Colors || 
    tokens.primitives?.colors ||
    tokens.Primitive?.Colors ||
    tokens.primitive?.colors ||
    {};
  
  Object.entries(primitiveColors).forEach(([key, value]) => {
    if (value && typeof value === 'object') {
      // Formato Tokens Studio: { $type: "color", $value: "#..." }
      if ('$value' in value) {
        colors[key] = value.$value;
      } else if ('value' in value) {
        colors[key] = value.value;
      }
    } else if (typeof value === 'string') {
      colors[key] = value;
    }
  });
  
  return colors;
}

/**
 * Extrae colores semánticos del JSON
 */
function extractSemanticColors(tokens) {
  const semantic = {};
  
  const semanticColors = 
    tokens.Semantic?.Colors || 
    tokens.semantic?.colors ||
    tokens.Semantic?.Color ||
    tokens.semantic?.color ||
    {};
  
  Object.entries(semanticColors).forEach(([key, value]) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      // Si es un objeto con propiedades anidadas
      const nested = {};
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        if (nestedValue && typeof nestedValue === 'object' && !Array.isArray(nestedValue)) {
          // Formato Tokens Studio: { $type: "color", $value: "..." }
          if ('$value' in nestedValue) {
            const resolved = resolveTokenReference(nestedValue.$value, tokens);
            nested[nestedKey] = resolved;
          } else if ('value' in nestedValue) {
            const resolved = resolveTokenReference(nestedValue.value, tokens);
            nested[nestedKey] = resolved;
          } else {
            nested[nestedKey] = nestedValue;
          }
        } else if (typeof nestedValue === 'string') {
          nested[nestedKey] = resolveTokenReference(nestedValue, tokens);
        } else {
          nested[nestedKey] = nestedValue;
        }
      });
      semantic[key] = Object.keys(nested).length > 0 ? nested : value;
    } else if (typeof value === 'string') {
      semantic[key] = resolveTokenReference(value, tokens);
    } else {
      semantic[key] = value;
    }
  });
  
  return semantic;
}

/**
 * Genera el contenido de designTokens.ts
 */
function generateDesignTokensTS(tokens) {
  const primitiveColors = extractPrimitiveColors(tokens);
  const semanticColors = extractSemanticColors(tokens);
  
  return `/**
 * Design Tokens
 *
 * Este archivo es generado automáticamente desde Tokens Studio (Figma)
 * NO editar manualmente - los cambios se perderán al sincronizar
 *
 * Última sincronización: ${new Date().toISOString()}
 * Fuente: tokens/tokens.json
 */

// ============================================================================
// PRIMITIVE TOKENS
// ============================================================================

export const primitiveColors = {
${Object.entries(primitiveColors)
  .map(([key, value]) => `  ${key}: '${value}',`)
  .join('\n')}
} as const;

// ============================================================================
// SEMANTIC COLOR TOKENS
// ============================================================================

export const semanticColors = {
${Object.entries(semanticColors)
  .map(([key, value]) => {
    if (typeof value === 'string') {
      return `  ${key}: '${value}',`;
    }
    if (typeof value === 'object' && value !== null) {
      // Objeto anidado
      const nested = Object.entries(value)
        .map(([k, v]) => {
          const val = typeof v === 'string' ? `'${v}'` : JSON.stringify(v);
          return `    ${k}: ${val},`;
        })
        .join('\n');
      return `  ${key}: {\n${nested}\n  },`;
    }
    return `  ${key}: ${JSON.stringify(value)},`;
  })
  .join('\n')}
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type PrimitiveColors = typeof primitiveColors;
export type SemanticColors = typeof semanticColors;
`;
}

/**
 * Genera el contenido de colorVariables.ts
 */
function generateColorVariablesTS(tokens) {
  const primitiveColors = extractPrimitiveColors(tokens);
  const semanticColors = extractSemanticColors(tokens);
  
  return `/**
 * Color Variables - Global Color System
 *
 * Este archivo es generado automáticamente desde Tokens Studio (Figma)
 * NO editar manualmente - los cambios se perderán al sincronizar
 *
 * Última sincronización: ${new Date().toISOString()}
 * Fuente: tokens/tokens.json
 */

// ============================================================================
// PRIMITIVE COLOR VALUES
// ============================================================================

export const primitiveColors = {
${Object.entries(primitiveColors)
  .map(([key, value]) => `  ${key}: '${value}',`)
  .join('\n')}
} as const;

// ============================================================================
// SEMANTIC COLOR VALUES
// ============================================================================

export const semanticColors = {
${Object.entries(semanticColors)
  .map(([key, value]) => {
    if (typeof value === 'string') {
      return `  ${key}: '${value}',`;
    }
    if (typeof value === 'object' && value !== null) {
      const nested = Object.entries(value)
        .map(([k, v]) => {
          const val = typeof v === 'string' ? `'${v}'` : JSON.stringify(v);
          return `    ${k}: ${val},`;
        })
        .join('\n');
      return `  ${key}: {\n${nested}\n  },`;
    }
    return `  ${key}: ${JSON.stringify(value)},`;
  })
  .join('\n')}
} as const;

// ============================================================================
// COLOR VARIABLES OBJECT
// ============================================================================

export const colorVariables = {
  primitive: primitiveColors,
  semantic: semanticColors,
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type PrimitiveColors = typeof primitiveColors;
export type SemanticColors = typeof semanticColors;
export type ColorVariables = typeof colorVariables;
`;
}

// ============================================================================
// FUNCIÓN PRINCIPAL
// ============================================================================

function transformTokens() {
  console.log('🔄 Transformando tokens de Tokens Studio...\n');

  try {
    // 1. Leer tokens.json
    console.log('📥 Leyendo tokens.json...');
    const tokens = readTokensJSON();
    console.log('✅ Tokens cargados correctamente\n');

    // 2. Generar designTokens.ts
    console.log('📝 Generando designTokens.ts...');
    const designTokensContent = generateDesignTokensTS(tokens);
    writeFileSync(DESIGN_TOKENS_PATH, designTokensContent, 'utf-8');
    console.log(`✅ ${DESIGN_TOKENS_PATH} generado\n`);

    // 3. Generar colorVariables.ts
    console.log('📝 Generando colorVariables.ts...');
    const colorVariablesContent = generateColorVariablesTS(tokens);
    writeFileSync(COLOR_VARIABLES_PATH, colorVariablesContent, 'utf-8');
    console.log(`✅ ${COLOR_VARIABLES_PATH} generado\n`);

    console.log('✅ Transformación completada exitosamente!');
    console.log('\n📋 Archivos generados:');
    console.log(`   - ${DESIGN_TOKENS_PATH}`);
    console.log(`   - ${COLOR_VARIABLES_PATH}`);

  } catch (error) {
    console.error('❌ Error durante la transformación:', error.message);
    if (error.stack) {
      console.error('   Stack:', error.stack);
    }
    process.exit(1);
  }
}

// ============================================================================
// EJECUCIÓN
// ============================================================================

transformTokens();

