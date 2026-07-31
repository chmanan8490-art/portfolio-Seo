import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { Buffer } from 'buffer';

const outDir = path.resolve('public', 'tool-logos');
await mkdir(outDir, { recursive: true });

const assets = [
  { name: 'chatgpt', url: 'https://openai.com/favicon.svg', type: 'svg' },
  { name: 'grammarly', url: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/grammarly.svg', type: 'svg' },
  { name: 'quillbot', url: 'https://quillbot.com/rebrand/icon.svg', type: 'svg' },
  { name: 'originality-ai', url: 'https://cdn.prod.website-files.com/63ee996e404f6475c7b177b3/6935d898db83103ce647e9a4_Originality%20Icon.svg', type: 'svg' },
  { name: 'zerogpt', url: 'https://www.zerogpt.com/favicon.png', type: 'png' },
  { name: 'jasper-ai', url: 'https://cdn.prod.website-files.com/6807ee8d73c233fb82842313/69b01c3c86cb380964db0daa_Jasper%20Logo%20(2025).png', type: 'png' },
];

for (const asset of assets) {
  try {
    const res = await fetch(asset.url);
    if (!res.ok) {
      console.error(`FAILED ${asset.name} ${asset.url} ${res.status}`);
      continue;
    }
    if (asset.type === 'svg') {
      const text = await res.text();
      await writeFile(path.join(outDir, `${asset.name}.svg`), text, 'utf8');
      console.log(`saved ${asset.name}.svg`);
    } else {
      const array = new Uint8Array(await res.arrayBuffer());
      const base64 = Buffer.from(array).toString('base64');
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><image href="data:image/png;base64,${base64}" width="120" height="120" preserveAspectRatio="xMidYMid meet"/></svg>`;
      await writeFile(path.join(outDir, `${asset.name}.svg`), svg, 'utf8');
      console.log(`saved ${asset.name}.svg (wrapped PNG)`);
    }
  } catch (error) {
    console.error(`ERROR ${asset.name}: ${error.message}`);
  }
}
