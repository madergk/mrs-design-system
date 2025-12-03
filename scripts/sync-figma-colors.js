/**
 * Figma Colors Sync Script (JavaScript version)
 *
 * Este script sincroniza las variables de color de Figma con colorVariables.ts
 * 
 * Requisitos:
 * 1. Token de API de Figma (FIGMA_ACCESS_TOKEN)
 * 2. File Key de Figma (FIGMA_FILE_KEY) - opcional, tiene valor por defecto
 * 
 * Uso:
 *   npm run sync:figma-colors
 */

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ============================================================================
// CARGAR VARIABLES DE ENTORNO DESDE .env
// ============================================================================

/**
 * Carga variables de entorno desde archivo .env
 */
function loadEnvFile() {
  const envPath = join(process.cwd(), '.env');
  
  if (existsSync(envPath)) {
    const envContent = readFileSync(envPath, 'utf-8');
    const lines = envContent.split('\n');
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      // Ignorar comentarios y líneas vacías
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=').trim();
          // No sobrescribir si ya existe en process.env
          if (!process.env[key.trim()]) {
            process.env[key.trim()] = value;
          }
        }
      }
    }
  }
}

// Cargar .env al inicio
loadEnvFile();

// ============================================================================
// CONFIGURACIÓN
// ============================================================================

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY || 'pWR8HIewAt87ZioeOSMoWM';

if (!FIGMA_ACCESS_TOKEN) {
  console.error('❌ Error: FIGMA_ACCESS_TOKEN no está configurado');
  console.log('\n💡 Cómo obtener el token:');
  console.log('   1. Ve a Figma → Settings → Account');
  console.log('   2. Personal Access Tokens → Create new token');
  console.log('   3. IMPORTANTE: Selecciona el scope "file_variables:read"');
  console.log('   4. Copia el token y guárdalo en el archivo .env:');
  console.log('      FIGMA_ACCESS_TOKEN=tu-token-aqui');
  console.log('\n   El archivo .env se carga automáticamente.');
  process.exit(1);
}

// ============================================================================
// FUNCIONES DE EXTRACCIÓN
// ============================================================================

/**
 * Verifica el plan y permisos del usuario
 */
async function checkUserPlan() {
  const url = 'https://api.figma.com/v1/me';
  
  try {
    const response = await fetch(url, {
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN,
      },
    });

    if (response.ok) {
      const user = await response.json();
      return user;
    }
  } catch (error) {
    console.warn('⚠️  No se pudo verificar el plan del usuario');
  }
  return null;
}

/**
 * Obtiene todas las variables de un archivo de Figma
 * NOTA: Requiere plan Enterprise de Figma
 */
async function fetchFigmaVariables() {
  // Primero verificar el plan
  const user = await checkUserPlan();
  if (user) {
    console.log(`👤 Usuario: ${user.email || user.handle || 'Desconocido'}`);
  }

  // Intentar endpoint de variables (requiere Enterprise)
  const url = `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`;
  
  const response = await fetch(url, {
    headers: {
      'X-Figma-Token': FIGMA_ACCESS_TOKEN,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    let errorMessage = `Error ${response.status}`;
    
    try {
      const error = JSON.parse(errorText);
      errorMessage = error.message || errorMessage;
      
      // Mensaje más claro sobre el plan Enterprise
      if (response.status === 403 && errorMessage.includes('file_variables:read')) {
        errorMessage += '\n\n⚠️  IMPORTANTE: La API de Variables requiere:';
        errorMessage += '\n   1. Plan Enterprise de Figma';
        errorMessage += '\n   2. Ser miembro completo (no invitado) de la organización';
        errorMessage += '\n   3. Token con scope file_variables:read';
        errorMessage += '\n\n💡 Alternativas:';
        errorMessage += '\n   - Usar Tokens Studio plugin (no requiere Enterprise)';
        errorMessage += '\n   - Exportar variables manualmente desde Figma';
        errorMessage += '\n   - Usar Figma Token Exporter plugin';
      }
    } catch (e) {
      errorMessage = errorText;
    }
    
    throw new Error(`Error al obtener variables de Figma: ${errorMessage}`);
  }

  return response.json();
}

/**
 * Filtra solo las variables de color
 */
function filterColorVariables(variables, collections) {
  return Object.values(variables)
    .filter((variable) => variable.resolvedType === 'COLOR')
    .map((variable) => ({
      ...variable,
      collectionName: collections[variable.variableCollectionId]?.name || 'Unknown',
    }));
}

/**
 * Convierte valor de color de Figma a formato hexadecimal
 */
function figmaColorToHex(colorValue) {
  if (typeof colorValue === 'string') {
    if (colorValue.startsWith('#')) {
      return colorValue;
    }
    return colorValue;
  }

  if (typeof colorValue === 'object' && colorValue !== null) {
    const { r, g, b, a } = colorValue;
    
    const to255 = (value) => Math.round(value * 255);
    
    const red = to255(r);
    const green = to255(g);
    const blue = to255(b);
    
    if (a !== undefined && a < 1) {
      return `rgba(${red}, ${green}, ${blue}, ${a})`;
    }
    
    const toHex = (value) => value.toString(16).padStart(2, '0');
    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
  }

  return '#000000';
}

/**
 * Organiza variables por colección
 */
function organizeVariablesByCollection(colorVariables) {
  const organized = {};

  for (const variable of colorVariables) {
    const collectionName = variable.collectionName;
    const variableName = variable.name;

    if (!organized[collectionName]) {
      organized[collectionName] = {};
    }

    const defaultModeId = Object.keys(variable.valuesByMode)[0];
    const colorValue = variable.valuesByMode[defaultModeId];
    const hexColor = figmaColorToHex(colorValue);

    organized[collectionName][variableName] = hexColor;
  }

  return organized;
}

// ============================================================================
// FUNCIÓN PRINCIPAL
// ============================================================================

async function syncFigmaColors() {
  console.log('🔄 Sincronizando colores de Figma...\n');

  try {
    console.log('📥 Obteniendo variables de Figma...');
    const data = await fetchFigmaVariables();
    
    const { variables, variableCollections } = data.meta;
    console.log(`✅ Encontradas ${Object.keys(variables).length} variables`);
    console.log(`✅ Encontradas ${Object.keys(variableCollections).length} colecciones\n`);

    console.log('🎨 Filtrando variables de color...');
    const colorVariables = filterColorVariables(variables, variableCollections);
    console.log(`✅ Encontrados ${colorVariables.length} colores\n`);

    console.log('📊 Organizando variables...');
    const organized = organizeVariablesByCollection(colorVariables);
    console.log(`✅ Organizadas en ${Object.keys(organized).length} colecciones:\n`);
    for (const [collection, vars] of Object.entries(organized)) {
      console.log(`   - ${collection}: ${Object.keys(vars).length} colores`);
    }
    console.log('');

    console.log('📋 Preview de variables organizadas:');
    console.log('─'.repeat(50));
    console.log(JSON.stringify(organized, null, 2).substring(0, 500) + '...');
    console.log('─'.repeat(50));

    console.log('\n✅ Sincronización completada');
    console.log('\n⚠️  Nota: Este script muestra un preview de las variables.');
    console.log('   Para aplicar los cambios a colorVariables.ts,');
    console.log('   necesitas implementar la lógica de merge con el archivo existente.');

  } catch (error) {
    console.error('❌ Error durante la sincronización:', error.message);
    if (error.stack) {
      console.error('   Stack:', error.stack);
    }
    process.exit(1);
  }
}

// ============================================================================
// EJECUCIÓN
// ============================================================================

syncFigmaColors();

