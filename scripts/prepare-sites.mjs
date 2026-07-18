import { copyFile, mkdir, readdir, rename } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(projectRoot, 'dist');
const clientDir = join(distDir, 'client');
const serverDir = join(distDir, 'server');
const staticEntries = await readdir(distDir, { withFileTypes: true });

await mkdir(clientDir, { recursive: true });
await mkdir(serverDir, { recursive: true });

for (const entry of staticEntries) {
  if (entry.name === 'client' || entry.name === 'server') continue;
  await rename(join(distDir, entry.name), join(clientDir, entry.name));
}

await copyFile(join(projectRoot, 'sites-worker.mjs'), join(serverDir, 'index.js'));
