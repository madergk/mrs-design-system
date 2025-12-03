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
import { execSync } from 'child_process';

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
 * Lee el archivo designTokens.ts del commit original como base
 * Esto preserva todos los tokens no relacionados con colores
 */
function readBaseDesignTokens() {
  // Primero intentar leer el backup local
  const backupPath = join(process.cwd(), 'src', 'theme', 'designTokens.ts.backup');
  if (existsSync(backupPath)) {
    const content = readFileSync(backupPath, 'utf-8');
    if (content.includes('export const typographyVariants')) {
      return content;
    }
  }
  
  // Si no hay backup válido, intentar obtener del git
  try {
    const baseContent = execSync(
      'git show 3d0c42e:src/theme/designTokens.ts 2>/dev/null || git show HEAD~10:src/theme/designTokens.ts 2>/dev/null || echo ""',
      { encoding: 'utf-8', cwd: process.cwd(), shell: true }
    );
    if (baseContent && baseContent.includes('export const typographyVariants')) {
      return baseContent;
    }
  } catch (error) {
    // Continuar sin error
  }
  
  // Si todo falla, intentar leer el archivo actual
  const existingPath = join(process.cwd(), 'src', 'theme', 'designTokens.ts');
  if (existsSync(existingPath)) {
    const content = readFileSync(existingPath, 'utf-8');
    if (content.includes('export const typographyVariants')) {
      return content;
    }
  }
  
  return null;
}

/**
 * Extrae secciones no relacionadas con colores del archivo existente
 */
function extractNonColorSections(existingContent) {
  if (!existingContent) return null;
  
  const sections = {
    primitiveTypography: null,
    primitiveSpacing: null,
    primitiveRadius: null,
    primitiveBreakpoints: null,
    primitiveZIndex: null,
    primitiveTransitions: null,
    typographyVariants: null,
    componentTokens: null,
    libraryTokens: null,
    tokenConnections: null,
    typeExports: null,
  };
  
  // Extraer primitiveTypography
  const typographyMatch = existingContent.match(/export const primitiveTypography = \{[\s\S]*?\} as const;/);
  if (typographyMatch) sections.primitiveTypography = typographyMatch[0];
  
  // Extraer primitiveSpacing
  const spacingMatch = existingContent.match(/export const primitiveSpacing = \{[\s\S]*?\} as const;/);
  if (spacingMatch) sections.primitiveSpacing = spacingMatch[0];
  
  // Extraer primitiveRadius
  const radiusMatch = existingContent.match(/export const primitiveRadius = \{[\s\S]*?\} as const;/);
  if (radiusMatch) sections.primitiveRadius = radiusMatch[0];
  
  // Extraer primitiveBreakpoints
  const breakpointsMatch = existingContent.match(/export const primitiveBreakpoints = \{[\s\S]*?\} as const;/);
  if (breakpointsMatch) sections.primitiveBreakpoints = breakpointsMatch[0];
  
  // Extraer primitiveZIndex
  const zIndexMatch = existingContent.match(/export const primitiveZIndex = \{[\s\S]*?\} as const;/);
  if (zIndexMatch) sections.primitiveZIndex = zIndexMatch[0];
  
  // Extraer primitiveTransitions
  const transitionsMatch = existingContent.match(/export const primitiveTransitions = \{[\s\S]*?\} as const;/);
  if (transitionsMatch) sections.primitiveTransitions = transitionsMatch[0];
  
  // Extraer typographyVariants (puede ser largo, usar match más flexible)
  const typographyVariantsMatch = existingContent.match(/export const typographyVariants = \{[\s\S]*?\} as const;/);
  if (typographyVariantsMatch) sections.typographyVariants = typographyVariantsMatch[0];
  
  // Extraer componentTokens
  const componentTokensMatch = existingContent.match(/export const componentTokens = \{[\s\S]*?\} as const;/);
  if (componentTokensMatch) sections.componentTokens = componentTokensMatch[0];
  
  // Extraer libraryTokens si existe
  const libraryTokensMatch = existingContent.match(/export const libraryTokens = \{[\s\S]*?\} as const;/);
  if (libraryTokensMatch) sections.libraryTokens = libraryTokensMatch[0];
  
  // Extraer tokenConnections si existe
  const tokenConnectionsMatch = existingContent.match(/export const tokenConnections = \{[\s\S]*?\} as const;/);
  if (tokenConnectionsMatch) sections.tokenConnections = tokenConnectionsMatch[0];
  
  // Extraer type exports
  const typeExportsMatch = existingContent.match(/export type .* = typeof .*;/g);
  if (typeExportsMatch) {
    sections.typeExports = typeExportsMatch.join('\n');
  }
  
  return sections;
}

/**
 * Genera el contenido completo de designTokens.ts con merge inteligente
 */
function generateDesignTokensTS(tokens) {
  const primitiveColors = extractPrimitiveColors(tokens);
  const semanticColors = extractSemanticColors(tokens);
  
  // Leer archivo base para preservar tokens no relacionados con colores
  const baseContent = readBaseDesignTokens();
  const preservedSections = extractNonColorSections(baseContent);
  
  // Si no hay secciones preservadas, usar valores por defecto del commit original
  const useDefaults = !preservedSections || !preservedSections.primitiveTypography;
  
  let output = `/**
 * Design Tokens
 *
 * Este archivo es generado automáticamente desde Tokens Studio (Figma)
 * ⚠️ IMPORTANTE: Solo las secciones de COLORES se actualizan automáticamente
 * Los demás tokens (typography, spacing, radius, etc.) se preservan del archivo original
 *
 * Última sincronización: ${new Date().toISOString()}
 * Fuente colores: tokens/tokens.json (Tokens Studio)
 */

// ============================================================================
// PRIMITIVE TOKENS
// ============================================================================

/**
 * Primitive Color Tokens
 * Base color values from Tokens Studio (Figma)
 * These are referenced by semantic color tokens
 */
export const primitiveColors = {
${Object.entries(primitiveColors)
  .map(([key, value]) => `  ${key}: '${value}',`)
  .join('\n')}
  // Preservado del archivo original (no está en Tokens Studio)
  // Usado por componente Avatar para fondo de avatares de texto/icono
  deepPurple: {
    500: '#673ab7',
  },
} as const;

`;

  // Agregar secciones preservadas o valores por defecto
  if (preservedSections && preservedSections.primitiveTypography) {
    output += preservedSections.primitiveTypography + '\n\n';
  } else if (useDefaults) {
    // Valores por defecto del archivo original
    output += `/**
 * Primitive Typography Tokens
 * Base typography values used to compose typography variants
 */
export const primitiveTypography = {
  fontFamily: {
    brand: 'Nunito',
    base: 'Nunito',
  },
  fontSize: {
    '0.625rem': 10,
    '0.75rem': 12,
    '0.8125rem': 13,
    '0.875rem': 14,
    '1rem': 16,
    '1.25rem': 20,
    '1.5rem': 24,
    '2.125rem': 34,
    '3rem': 48,
    '3.75rem': 60,
    '6rem': 96,
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
} as const;

`;
  }
  
  if (preservedSections && preservedSections.primitiveSpacing) {
    output += preservedSections.primitiveSpacing + '\n\n';
  } else if (useDefaults) {
    output += `export const primitiveSpacing = {
  1: 8,
  2: 16,
  3: 24,
  8: 64,
} as const;

`;
  }
  
  if (preservedSections && preservedSections.primitiveRadius) {
    output += preservedSections.primitiveRadius + '\n\n';
  } else if (useDefaults) {
    output += `export const primitiveRadius = {
  none: 0,
  md: 12,
  rounded: 999,
} as const;

`;
  }
  
  if (preservedSections && preservedSections.primitiveBreakpoints) {
    output += preservedSections.primitiveBreakpoints + '\n\n';
  } else if (useDefaults) {
    output += `export const primitiveBreakpoints = {
  xs: 444,
  sm: 600,
} as const;

`;
  }
  
  if (preservedSections && preservedSections.primitiveZIndex) {
    output += preservedSections.primitiveZIndex + '\n\n';
  } else if (useDefaults) {
    output += `export const primitiveZIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
} as const;

`;
  }
  
  if (preservedSections && preservedSections.primitiveTransitions) {
    output += preservedSections.primitiveTransitions + '\n\n';
  } else if (useDefaults) {
    output += `export const primitiveTransitions = {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
} as const;

`;
  }
  
  // Extraer semanticColors completo del archivo original para merge
  let originalSemanticColors = null;
  if (baseContent) {
    const originalSemanticMatch = baseContent.match(/export const semanticColors = \{[\s\S]*?\} as const;/);
    if (originalSemanticMatch) {
      originalSemanticColors = originalSemanticMatch[0];
    }
  }
  
  // Generar semanticColors con merge: actualizar desde Tokens Studio, preservar el resto
  output += `// ============================================================================
// SEMANTIC COLOR TOKENS
// ============================================================================

/**
 * Semantic Color Tokens
 * ⚠️ IMPORTANTE: Solo primary, secondary, error se actualizan desde Tokens Studio
 * Las demás propiedades (warning, info, success, background, text, action, divider)
 * se preservan del archivo original
 */
export const semanticColors = {
  // Actualizados desde Tokens Studio
  primary: {
    main: primitiveColors.verones, // #00686f - aliased from material/colors/verones
    dark: '${semanticColors.primary?.dark || '#004e53'}',
    contrastText: '${semanticColors.primary?.contrastText || '#ffffff'}',
    states: {
      selected: '#00999929', // rgba with opacity
      hover: '#0099991f', // rgba with opacity
    },
  },
  secondary: {
    main: '${semanticColors.secondary?.main || '#99cc00'}',
    contrastText: '${semanticColors.secondary?.contrastText || '#000000de'}',
  },
  error: {
    main: '${semanticColors.error?.main || '#ab1a1a'}',
    contrastText: '${semanticColors.error?.contrastText || '#ffffff'}',
  },
  // Preservados del archivo original (no están en Tokens Studio)
  warning: {
    main: '#dfa00a',
  },
  info: {
    main: '#2481b8',
    contrastText: '#ffffff',
  },
  success: {
    // Note: Success color not explicitly defined in Figma variables
    // Using Material Design default or can be added
    main: '#2e7d32',
    contrastText: '#ffffff',
  },
  background: {
    default: '#ffffff',
    paper: {
      elevation0: '#ffffff',
      elevation1: '#ffffff',
    },
  },
  text: {
    primary: '#000000de', // rgba with opacity
    secondary: '#00000099', // rgba with opacity
  },
  action: {
    active: '#0000008f', // rgba with opacity
    selected: '#0000001f', // rgba with opacity
  },
  divider: '#0000001f', // rgba with opacity
} as const;

`;

  // Agregar typographyVariants preservado
  if (preservedSections && preservedSections.typographyVariants) {
    output += `// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

${preservedSections.typographyVariants}

`;
  } else if (useDefaults) {
    // Typography variants básicos (simplificado, debería venir del archivo original)
    output += `// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

// ⚠️ Typography variants deben ser agregados manualmente o desde archivo original
// Esta sección requiere el archivo completo del commit original

`;
  }
  
  // Agregar componentTokens preservado
  if (preservedSections && preservedSections.componentTokens) {
    output += `// ============================================================================
// COMPONENT-SPECIFIC TOKENS
// ============================================================================

${preservedSections.componentTokens}

`;
  }
  
  // Agregar libraryTokens si existe
  if (preservedSections && preservedSections.libraryTokens) {
    output += preservedSections.libraryTokens + '\n\n';
  }
  
  // Agregar tokenConnections si existe
  if (preservedSections && preservedSections.tokenConnections) {
    output += preservedSections.tokenConnections + '\n\n';
  }
  
  // Agregar type exports
  output += `// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type PrimitiveColors = typeof primitiveColors;
export type SemanticColors = typeof semanticColors;
`;
  
  if (preservedSections && preservedSections.typeExports) {
    // Agregar otros tipos preservados, excluyendo los que ya agregamos
    const additionalTypes = preservedSections.typeExports
      .split('\n')
      .filter(line => 
        !line.includes('PrimitiveColors') && 
        !line.includes('SemanticColors')
      );
    if (additionalTypes.length > 0) {
      output += '\n' + additionalTypes.join('\n');
    }
  }
  
  return output;
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
  // Preservado del archivo original (no está en Tokens Studio)
  deepPurple: {
    500: '#673ab7',
  },
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

