#!/usr/bin/env node
/**
 * Build a cPanel-deployable package for Namecheap shared hosting
 * (Setup Node.js App / Node.js Selector).
 *
 * Produces `deploy-cpanel.tar.gz` in the project root containing the
 * standalone server + traced dependencies + static assets + public files.
 *
 * Upload that archive via cPanel → File Manager into your Node.js app's
 * root folder, extract it, then in Setup Node.js App set the startup file
 * to `server.js`. Do NOT click "Run NPM Install" — the standalone output
 * ships its own node_modules.
 *
 * ⚠️  Run this on LINUX (WSL or GitHub Actions `ubuntu-latest`), NOT Windows.
 * A Windows build bakes Windows-native `sharp` binaries into the standalone
 * output, which crash on the Linux server.
 *
 * Usage:
 *   node scripts/deploy-cpanel.mjs
 * or:
 *   npm run deploy:cpanel
 */
import { execSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const distDir = process.env.NEXT_DIST_DIR || '.next';
const standalone = join(root, distDir, 'standalone');
const out = join(root, 'deploy-cpanel.tar.gz');

console.log('> Building production bundle…');
execSync('npm run build', { stdio: 'inherit' });

if (!existsSync(standalone)) {
  console.error(`✗ ${distDir}/standalone not found — is "output: 'standalone'" set in next.config?`);
  process.exit(1);
}

// `public/` and the static assets are not traced into standalone output,
// so copy them in or the site ships without images/CSS/JS chunks.
console.log('> Copying public/ and static assets…');
if (existsSync(join(root, 'public'))) {
  cpSync(join(root, 'public'), join(standalone, 'public'), { recursive: true });
}
if (existsSync(join(root, distDir, 'static'))) {
  mkdirSync(join(standalone, '.next'), { recursive: true });
  cpSync(join(root, distDir, 'static'), join(standalone, '.next', 'static'), { recursive: true });
}

console.log('> Archiving standalone output…');
rmSync(out, { force: true });
execSync(`tar -czf "${out}" -C "${standalone}" .`, { stdio: 'inherit' });

console.log(`\n✓ ${out} ready.`);
console.log('  cPanel: Setup Node.js App → Create Application (Node 20.x/22.x, startup file `server.js`).');
console.log('  Then File Manager → upload this archive → extract into the app root.');
