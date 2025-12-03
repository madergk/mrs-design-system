/**
 * Figma Colors Sync Script
 *
 * Este script sincroniza las variables de color de Figma con colorVariables.ts
 * 
 * Requisitos:
 * 1. Token de API de Figma (FIGMA_ACCESS_TOKEN)
 * 2. File Key de Figma (FIGMA_FILE_KEY)
 * 
 * Uso:
 *   npm run sync:figma-colors
 *   o
 *   npx tsx scripts/sync-figma-colors.ts
 */

import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

// ============================================================================
// CONFIGURACIÓN
// ============================================================================

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY || 'pWR8HIewAt87ZioeOSMoWM';

if (!FIGMA_ACCESS_TOKEN) {
  console.error('❌ Error: FIGMA_ACCESS_TOKEN no está configurado');
  console.log('💡 Cómo obtener el token:');
  console.log('   1. Ve a Figma → Settings → Account');
  console.log('   2. Personal Access Tokens → Create new token');
  console.log('   3. Copia el token y configúralo como variable de entorno:');
  console.log('      export FIGMA_ACCESS_TOKEN="tu-token-aqui"');
  process.exit(1);
}

// ============================================================================
// TIPOS
// ============================================================================

interface FigmaVariable {
  id: string;
  name: string;
  key: string;
  variableCollectionId: string;
  resolvedType: 'COLOR' | 'FLOAT' | 'STRING';
  valuesByMode: Record<string, string | number>;
  remote?: boolean;
}

interface FigmaVariableCollection {
  id: string;
  name: string;
  modes: Array<{ modeId: string; name: string }>;
  defaultModeId: string;
}

interface FigmaVariablesResponse {
  meta: {
    variables: Record<string, FigmaVariable>;
    variableCollections: Record<string, FigmaVariableCollection>;
  };
}

// ============================================================================
// FUNCIONES DE EXTRACCIÓN
// ============================================================================

/**
 * Obtiene todas las variables de un archivo de Figma
 */
async function fetchFigmaVariables(): Promise<FigmaVariablesResponse> {
  const url = `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`;
  
  const response = await fetch(url, {
    headers: {
      'X-Figma-Token': FIGMA_ACCESS_TOKEN,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Error al obtener variables de Figma: ${response.status} - ${error}`);
  }

  return response.json();
}

/**
 * Filtra solo las variables de color
 */
function filterColorVariables(
  variables: Record<string, FigmaVariable>,
  collections: Record<string, FigmaVariableCollection>
): Array<FigmaVariable & { collectionName: string }> {
  return Object.values(variables)
    .filter((variable) => variable.resolvedType === 'COLOR')
    .map((variable) => ({
      ...variable,
      collectionName: collections[variable.variableCollectionId]?.name || 'Unknown',
    }));
}

/**
 * Convierte valor de color de Figma a formato hexadecimal
 * Figma devuelve colores en formato { r: 0-1, g: 0-1, b: 0-1, a: 0-1 }
 */
function figmaColorToHex(colorValue: any): string {
  if (typeof colorValue === 'string') {
    // Si ya es un string (hex), devolverlo
    if (colorValue.startsWith('#')) {
      return colorValue;
    }
    // Si es rgba string, convertir
    return colorValue;
  }

  if (typeof colorValue === 'object' && colorValue !== null) {
    const { r, g, b, a } = colorValue;
    
    // Convertir de 0-1 a 0-255
    const to255 = (value: number) => Math.round(value * 255);
    
    const red = to255(r);
    const green = to255(g);
    const blue = to255(b);
    
    // Si tiene alpha, usar rgba
    if (a !== undefined && a < 1) {
      return `rgba(${red}, ${green}, ${blue}, ${a})`;
    }
    
    // Si no tiene alpha o es 1, usar hex
    const toHex = (value: number) => value.toString(16).padStart(2, '0');
    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
  }

  return '#000000'; // Fallback
}

/**
 * Organiza variables por colección y jerarquía
 */
function organizeVariablesByCollection(
  colorVariables: Array<FigmaVariable & { collectionName: string }>
): Record<string, Record<string, string>> {
  const organized: Record<string, Record<string, string>> = {};

  for (const variable of colorVariables) {
    const collectionName = variable.collectionName;
    const variableName = variable.name;

    if (!organized[collectionName]) {
      organized[collectionName] = {};
    }

    // Obtener el valor del modo por defecto
    const defaultModeId = Object.keys(variable.valuesByMode)[0];
    const colorValue = variable.valuesByMode[defaultModeId];
    const hexColor = figmaColorToHex(colorValue);

    organized[collectionName][variableName] = hexColor;
  }

  return organized;
}

/**
 * Genera el contenido TypeScript para colorVariables.ts
 */
function generateColorVariablesTS(organizedVars: Record<string, Record<string, string>>): string {
  const sections: string[] = [];

  // Sección de primitivos
  if (organizedVars['Primitives'] || organizedVars['material/colors']) {
    const primitives = organizedVars['Primitives'] || organizedVars['material/colors'];
    sections.push(`export const primitiveColors = {`);
    for (const [name, value] of Object.entries(primitives)) {
      sections.push(`  ${name}: '${value}',`);
    }
    sections.push(`} as const;`);
  }

  // Sección semántica
  if (organizedVars['Semantic'] || organizedVars['semantic']) {
    const semantic = organizedVars['Semantic'] || organizedVars['semantic'];
    sections.push(`
export const semanticColors = {
  primary: {
    main: primitiveColors.verones || '${semantic['primary/main'] || '#00686f'}',
    // ... otros colores semánticos
  },
} as const;`);
  }

  return sections.join('\n');
}

// ============================================================================
// FUNCIÓN PRINCIPAL
// ============================================================================

async function syncFigmaColors() {
  console.log('🔄 Sincronizando colores de Figma...\n');

  try {
    // 1. Obtener variables de Figma
    console.log('📥 Obteniendo variables de Figma...');
    const data = await fetchFigmaVariables();
    
    const { variables, variableCollections } = data.meta;
    console.log(`✅ Encontradas ${Object.keys(variables).length} variables`);
    console.log(`✅ Encontradas ${Object.keys(variableCollections).length} colecciones\n`);

    // 2. Filtrar solo colores
    console.log('🎨 Filtrando variables de color...');
    const colorVariables = filterColorVariables(variables, variableCollections);
    console.log(`✅ Encontrados ${colorVariables.length} colores\n`);

    // 3. Organizar por colección
    console.log('📊 Organizando variables...');
    const organized = organizeVariablesByCollection(colorVariables);
    console.log(`✅ Organizadas en ${Object.keys(organized).length} colecciones:\n`);
    for (const [collection, vars] of Object.entries(organized)) {
      console.log(`   - ${collection}: ${Object.keys(vars).length} colores`);
    }
    console.log('');

    // 4. Generar archivo TypeScript
    console.log('📝 Generando colorVariables.ts...');
    const tsContent = generateColorVariablesTS(organized);
    
    // 5. Leer archivo actual para preservar estructura
    const currentFilePath = join(process.cwd(), 'src/theme/colorVariables.ts');
    const currentContent = readFileSync(currentFilePath, 'utf-8');
    
    // TODO: Implementar merge inteligente en lugar de reemplazar todo
    // Por ahora, solo mostramos lo que se generaría
    console.log('\n📋 Preview de cambios:');
    console.log('─'.repeat(50));
    console.log(tsContent.substring(0, 500) + '...');
    console.log('─'.repeat(50));

    console.log('\n✅ Sincronización completada');
    console.log('\n⚠️  Nota: Este script muestra un preview.');
    console.log('   Para aplicar los cambios, descomenta la línea de writeFileSync');

    // Descomentar para aplicar cambios:
    // writeFileSync(currentFilePath, tsContent, 'utf-8');
    // console.log('✅ Archivo colorVariables.ts actualizado');

  } catch (error) {
    console.error('❌ Error durante la sincronización:', error);
    if (error instanceof Error) {
      console.error('   Mensaje:', error.message);
    }
    process.exit(1);
  }
}

// ============================================================================
// EJECUCIÓN
// ============================================================================

if (import.meta.url === `file://${process.argv[1]}`) {
  syncFigmaColors();
}

export { syncFigmaColors };

