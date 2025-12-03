/**
 * Script de verificación del sistema de tokens
 * Verifica que todos los tokens se importan y usan correctamente
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SERVER_ENDPOINT = 'http://127.0.0.1:7242/ingest/74190a05-7013-45f1-a1a7-161c465546f0';

function log(hypothesisId, location, message, data) {
  const payload = {
    sessionId: 'debug-session',
    runId: 'verify-run',
    hypothesisId,
    location,
    message,
    data,
    timestamp: Date.now(),
  };

  fetch(SERVER_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).catch(() => {});
}

// #region agent log
log('A', 'verify-tokens.js:start', 'Iniciando verificación del sistema de tokens', {});
// #endregion

// Hipótesis A: Verificar que designTokens.ts tiene todas las exportaciones necesarias
function verifyDesignTokensExports() {
  const designTokensPath = join(__dirname, '../src/theme/designTokens.ts');
  const content = readFileSync(designTokensPath, 'utf-8');

  const requiredExports = [
    'primitiveColors',
    'primitiveTypography',
    'primitiveSpacing',
    'primitiveRadius',
    'semanticColors',
    'typographyVariants',
    'componentTokens',
  ];

  const foundExports = [];
  const missingExports = [];

  requiredExports.forEach(exportName => {
    const regex = new RegExp(`export (const|type) ${exportName}`, 'g');
    if (regex.test(content)) {
      foundExports.push(exportName);
    } else {
      missingExports.push(exportName);
    }
  });

  // #region agent log
  log('A', 'verify-tokens.js:exports', 'Verificación de exportaciones en designTokens.ts', {
    found: foundExports,
    missing: missingExports,
    totalRequired: requiredExports.length,
  });
  // #endregion

  return { foundExports, missingExports };
}

// Hipótesis B: Verificar que transform-tokens.js puede ejecutarse correctamente
function verifyTransformScript() {
  const tokensPath = join(__dirname, '../tokens/tokens.json');
  const transformScriptPath = join(__dirname, 'transform-tokens.js');

  const tokensExists = existsSync(tokensPath);
  const transformExists = existsSync(transformScriptPath);

  let tokensContent = null;
  if (tokensExists) {
    tokensContent = JSON.parse(readFileSync(tokensPath, 'utf-8'));
  }

  // #region agent log
  log('B', 'verify-tokens.js:transform', 'Verificación del script transform-tokens.js', {
    tokensExists,
    transformExists,
    hasPrimitives: tokensContent?.Primitives?.Colors ? true : false,
    hasSemantic: tokensContent?.Semantic?.Colors ? true : false,
    primitiveCount: tokensContent?.Primitives?.Colors ? Object.keys(tokensContent.Primitives.Colors).length : 0,
    semanticCount: tokensContent?.Semantic?.Colors ? Object.keys(tokensContent.Semantic.Colors).length : 0,
  });
  // #endregion

  return { tokensExists, transformExists, tokensContent };
}

// Hipótesis C: Verificar que los colores se resuelven correctamente
function verifyColorResolution() {
  const designTokensPath = join(__dirname, '../src/theme/designTokens.ts');
  const content = readFileSync(designTokensPath, 'utf-8');

  // Verificar que primitiveColors tiene los valores esperados
  const veronesMatch = content.match(/verones:\s*['"]([^'"]+)['"]/);
  const tealMatch = content.match(/teal:\s*['"]([^'"]+)['"]/);
  const deepPurpleMatch = content.match(/deepPurple:\s*\{[^}]*500:\s*['"]([^'"]+)['"]/);

  // Verificar que semanticColors.primary.main referencia verones
  const primaryMainMatch = content.match(/primary:\s*\{[^}]*main:\s*([^,}]+)/);

  // #region agent log
  log('C', 'verify-tokens.js:colors', 'Verificación de resolución de colores', {
    verones: veronesMatch ? veronesMatch[1] : null,
    teal: tealMatch ? tealMatch[1] : null,
    deepPurple: deepPurpleMatch ? deepPurpleMatch[1] : null,
    primaryMain: primaryMainMatch ? primaryMainMatch[1].trim() : null,
    hasAlias: primaryMainMatch && primaryMainMatch[1].includes('verones'),
  });
  // #endregion

  return {
    verones: veronesMatch ? veronesMatch[1] : null,
    teal: tealMatch ? tealMatch[1] : null,
    deepPurple: deepPurpleMatch ? deepPurpleMatch[1] : null,
    primaryMain: primaryMainMatch ? primaryMainMatch[1].trim() : null,
  };
}

// Hipótesis D: Verificar que los componentes pueden importar tokens
function verifyComponentImports() {
  const componentsDir = join(__dirname, '../src/components');
  const componentFiles = [];

  function findComponentFiles(dir) {
    const files = readdirSync(dir);
    files.forEach(file => {
      const filePath = join(dir, file);
      const stat = statSync(filePath);
      if (stat.isDirectory()) {
        findComponentFiles(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        componentFiles.push(filePath);
      }
    });
  }

  findComponentFiles(componentsDir);

  const imports = {
    designTokens: [],
    colorVariables: [],
    theme: [],
    none: [],
  };

  componentFiles.forEach(filePath => {
    const content = readFileSync(filePath, 'utf-8');
    const relativePath = relative(join(__dirname, '..'), filePath);

    if (content.includes("from '") || content.includes('from "')) {
      if (content.includes('designTokens') || content.includes("from '../../theme/designTokens'") || content.includes('from "../theme/designTokens"')) {
        imports.designTokens.push(relativePath);
      } else if (content.includes('colorVariables')) {
        imports.colorVariables.push(relativePath);
      } else if (content.includes("from '../../theme'") || content.includes('from "../theme"') || content.includes("from './theme'")) {
        imports.theme.push(relativePath);
      } else {
        // Verificar si usa tokens pero no los importa directamente
        const usesTokens = content.includes('semanticColors') || content.includes('primitiveColors') || content.includes('typographyVariants');
        if (!usesTokens) {
          imports.none.push(relativePath);
        }
      }
    }
  });

  // #region agent log
  log('D', 'verify-tokens.js:imports', 'Verificación de importaciones en componentes', {
    totalComponents: componentFiles.length,
    importsDesignTokens: imports.designTokens.length,
    importsColorVariables: imports.colorVariables.length,
    importsTheme: imports.theme.length,
    components: imports.designTokens.slice(0, 5), // Primeros 5
  });
  // #endregion

  return imports;
}

// Hipótesis E: Verificar estructura completa de tokens
function verifyTokenStructure() {
  const designTokensPath = join(__dirname, '../src/theme/designTokens.ts');
  const content = readFileSync(designTokensPath, 'utf-8');

  // Contar exportaciones
  const exportMatches = content.match(/export (const|type) \w+/g);
  const exportCount = exportMatches ? exportMatches.length : 0;

  // Verificar secciones principales
  const sections = {
    primitiveColors: content.includes('// PRIMITIVE TOKENS') || content.includes('primitiveColors'),
    semanticColors: content.includes('// SEMANTIC COLOR TOKENS') || content.includes('semanticColors'),
    typography: content.includes('typographyVariants'),
    spacing: content.includes('primitiveSpacing'),
    componentTokens: content.includes('componentTokens'),
  };

  // #region agent log
  log('E', 'verify-tokens.js:structure', 'Verificación de estructura de tokens', {
    exportCount,
    sections,
    fileLength: content.length,
    hasPreservedTokens: content.includes('Preservado del archivo original'),
  });
  // #endregion

  return { exportCount, sections };
}

// Ejecutar todas las verificaciones
async function runVerifications() {
  console.log('🔍 Verificando sistema de tokens...\n');

  const results = {
    exports: verifyDesignTokensExports(),
    transform: verifyTransformScript(),
    colors: verifyColorResolution(),
    imports: verifyComponentImports(),
    structure: verifyTokenStructure(),
  };

  // #region agent log
  log('ALL', 'verify-tokens.js:complete', 'Verificación completa finalizada', {
    summary: {
      exportsFound: results.exports.foundExports.length,
      exportsMissing: results.exports.missingExports.length,
      tokensValid: results.transform.tokensExists,
      componentsChecked: results.imports.totalComponents || 0,
    },
  });
  // #endregion

  // Mostrar resumen
  console.log('📊 Resumen de verificación:');
  console.log(`  ✅ Exportaciones encontradas: ${results.exports.foundExports.length}/${results.exports.foundExports.length + results.exports.missingExports.length}`);
  console.log(`  ${results.exports.missingExports.length > 0 ? '❌' : '✅'} Exportaciones faltantes: ${results.exports.missingExports.length}`);
  console.log(`  ${results.transform.tokensExists ? '✅' : '❌'} tokens.json existe: ${results.transform.tokensExists}`);
  console.log(`  ${results.transform.transformExists ? '✅' : '❌'} transform-tokens.js existe: ${results.transform.transformExists}`);
  console.log(`  ✅ Componentes verificados: ${results.imports.designTokens.length + results.imports.colorVariables.length + results.imports.theme.length}`);
  console.log(`  ✅ Exportaciones totales: ${results.structure.exportCount}`);

  if (results.exports.missingExports.length > 0) {
    console.log(`\n⚠️  Exportaciones faltantes: ${results.exports.missingExports.join(', ')}`);
    process.exit(1);
  }

  console.log('\n✅ Verificación completada exitosamente');
}

runVerifications().catch(err => {
  console.error('❌ Error durante la verificación:', err);
  process.exit(1);
});

