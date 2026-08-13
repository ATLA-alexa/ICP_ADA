#!/usr/bin/env node
/**
 * Build @car-ibiza/ui.
 *
 * Three outputs, all under dist/:
 *   dist/index.js    ESM bundle, react left external
 *   dist/index.d.ts  type declarations (mirrors src/ tree)
 *   dist/styles.css  the whole stylesheet, @imports inlined
 *
 * CSS is deliberately NOT imported from the .tsx files: the package ships one
 * stylesheet that consumers import once, which keeps the components free of
 * bundler-specific CSS handling and lets tsc read the sources without shims.
 */
import { build } from 'esbuild';
import { execFileSync } from 'node:child_process';
import { rmSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'dist');

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

console.log('• bundling js');
await build({
  entryPoints: [resolve(root, 'src/index.ts')],
  outfile: resolve(out, 'index.js'),
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: ['es2020'],
  jsx: 'automatic',
  sourcemap: true,
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  logLevel: 'warning',
});

console.log('• bundling css');
await build({
  entryPoints: [resolve(root, 'src/styles/index.css')],
  outfile: resolve(out, 'styles.css'),
  bundle: true,
  loader: { '.woff2': 'file', '.woff': 'file' },
  logLevel: 'warning',
});

console.log('• emitting types');
execFileSync(
  process.execPath,
  [resolve(root, 'node_modules/typescript/lib/tsc.js'), '-p', resolve(root, 'tsconfig.json')],
  { stdio: 'inherit', cwd: root },
);

console.log('✓ build complete → dist/');
