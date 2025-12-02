#!/usr/bin/env node
/**
 * Setup Git Hooks
 * 
 * This script installs git hooks to run lint-staged before commits.
 * It replaces Husky with a simpler, lightweight solution.
 */

import { writeFileSync, mkdirSync, chmodSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const gitHooksDir = join(rootDir, '.git', 'hooks');
const preCommitHook = join(gitHooksDir, 'pre-commit');

// Create .git/hooks directory if it doesn't exist
try {
  mkdirSync(gitHooksDir, { recursive: true });
} catch (error) {
  if (error.code !== 'EEXIST') {
    console.error('Error creating .git/hooks directory:', error);
    process.exit(1);
  }
}

// Create pre-commit hook
const preCommitScript = `#!/usr/bin/env sh
# Pre-commit hook to run lint-staged
# This ensures code quality checks run before commits

npx lint-staged
`;

try {
  writeFileSync(preCommitHook, preCommitScript, 'utf8');
  chmodSync(preCommitHook, '755');
  console.log('✅ Git hooks installed successfully!');
  console.log('   Pre-commit hook will now run lint-staged before each commit.');
} catch (error) {
  console.error('Error installing git hooks:', error);
  process.exit(1);
}

