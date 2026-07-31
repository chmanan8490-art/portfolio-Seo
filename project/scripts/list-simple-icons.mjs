import { readdir } from 'fs/promises';
import path from 'path';
const dir = path.resolve('node_modules', 'simple-icons', 'icons');
const files = await readdir(dir);
const filtered = files.filter(f => /chat|openai|gpt|grammarly|quill|original|zero|jasper/i.test(f));
console.log(filtered.sort().join('\n'));
