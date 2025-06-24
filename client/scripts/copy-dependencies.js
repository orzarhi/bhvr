import { existsSync, mkdirSync, copyFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CLIENT_ROOT = join(__dirname, '..');
const REPO_ROOT = join(CLIENT_ROOT, '..');
const VENDOR_DIR = join(CLIENT_ROOT, 'vendor');

function copyDirectory(src, dest) {
  if (!existsSync(src)) {
    console.warn(`⚠️  Directory ${src} does not exist, skipping...`);
    return;
  }

  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }

  const entries = readdirSync(src);

  for (const entry of entries) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);

    if (statSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

function copyFile(src, dest) {
  if (!existsSync(src)) {
    console.warn(`⚠️  File ${src} does not exist, skipping...`);
    return;
  }

  const destDir = dirname(dest);
  if (!existsSync(destDir)) {
    mkdirSync(destDir, { recursive: true });
  }

  copyFileSync(src, dest);
  console.log(`✅ Copied: ${src} → ${dest}`);
}

console.log('📦 Copying server and shared dependencies...');

if (!existsSync(VENDOR_DIR)) {
  mkdirSync(VENDOR_DIR, { recursive: true });
}

const serverDistPath = join(REPO_ROOT, 'server', 'dist');
const serverVendorPath = join(VENDOR_DIR, 'server');

console.log('🔄 Copying server types...');
copyFile(
  join(serverDistPath, 'client.js'), 
  join(serverVendorPath, 'client.js')
);
copyFile(
  join(serverDistPath, 'client.d.ts'), 
  join(serverVendorPath, 'client.d.ts')
);

const sharedSrcPath = join(REPO_ROOT, 'shared', 'src');
const sharedVendorPath = join(VENDOR_DIR, 'shared');

console.log('🔄 Copying shared types...');
copyDirectory(sharedSrcPath, sharedVendorPath);

console.log('✨ Dependencies copied successfully!'); 