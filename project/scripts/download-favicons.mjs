import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
const icons = [
  { name: 'chatgpt', url: 'https://openai.com/favicon.svg' },
  { name: 'grammarly', url: 'https://www.grammarly.com/favicon.svg' },
  { name: 'quillbot', url: 'https://quillbot.com/favicon.ico' },
  { name: 'originality-ai', url: 'https://originality.ai/favicon.ico' },
  { name: 'zerogpt', url: 'https://www.zerogpt.com/favicon.ico' },
  { name: 'jasper-ai', url: 'https://www.jasper.ai/favicon.ico' },
];
const out = path.resolve('public', 'tool-logos');
await mkdir(out, { recursive: true });
for (const { name, url } of icons) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed ${name}: ${res.status} ${res.statusText}`);
      continue;
    }
    const text = await res.text();
    if (!text.trim()) {
      console.error(`Empty response for ${name}`);
      continue;
    }
    let filename = `${name}.svg`;
    if (!text.trim().startsWith('<svg')) {
      filename = `${name}.ico`;
    }
    await writeFile(path.join(out, filename), text, 'utf8');
    console.log(`Saved ${filename}`);
  } catch (error) {
    console.error(`Error fetching ${name}: ${error.message}`);
  }
}
