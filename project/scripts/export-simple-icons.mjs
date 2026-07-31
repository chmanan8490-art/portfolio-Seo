import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';
const dir = path.resolve('node_modules', 'simple-icons', 'icons');
const out = path.resolve('public', 'tool-logos');
await mkdir(out, { recursive: true });
const files = [
  { src: 'grammarly.svg', dest: 'grammarly.svg' },
  { src: 'openaigym.svg', dest: 'chatgpt.svg' },
];
for (const { src, dest } of files) {
  const content = await readFile(path.join(dir, src), 'utf8');
  await writeFile(path.join(out, dest), content, 'utf8');
  console.log(`Exported ${dest}`);
}
