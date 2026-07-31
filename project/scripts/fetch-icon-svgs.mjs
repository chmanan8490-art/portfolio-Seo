import fs from 'fs/promises';
import path from 'path';

const icons = {
  'chatgpt': 'https://cdn.simpleicons.org/chatgpt',
  'grammarly': 'https://cdn.simpleicons.org/grammarly',
  'quillbot': 'https://cdn.simpleicons.org/quillbot',
  'originality-ai': 'https://cdn.simpleicons.org/originalityai',
  'zerogpt': 'https://cdn.simpleicons.org/zerogpt',
  'jasper-ai': 'https://cdn.simpleicons.org/jasper',
};

const dir = path.resolve('./public/tool-logos');
await fs.mkdir(dir, { recursive: true });
for (const [name, url] of Object.entries(icons)) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed to download ${name}: ${res.status} ${res.statusText}`);
      continue;
    }
    const text = await res.text();
    if (!text.trim().startsWith('<svg')) {
      console.error(`Invalid SVG for ${name} from ${url}`);
      continue;
    }
    await fs.writeFile(path.join(dir, `${name}.svg`), text, 'utf8');
    console.log(`Saved ${name}.svg`);
  } catch (error) {
    console.error(`Error fetching ${name}:`, error.message);
  }
}
