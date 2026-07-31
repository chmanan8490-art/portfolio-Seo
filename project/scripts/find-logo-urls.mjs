import fs from 'fs/promises';
import path from 'path';
const sites = [
  { name: 'chatgpt', url: 'https://openai.com' },
  { name: 'grammarly', url: 'https://www.grammarly.com' },
  { name: 'quillbot', url: 'https://quillbot.com' },
  { name: 'originality-ai', url: 'https://originality.ai' },
  { name: 'zerogpt', url: 'https://www.zerogpt.com' },
  { name: 'jasper-ai', url: 'https://www.jasper.ai' },
];
for (const site of sites) {
  try {
    const res = await fetch(site.url, { redirect: 'follow' });
    const html = await res.text();
    const matches = [...html.matchAll(/(?:href|src)=["']([^"']+\.(?:svg|png|ico|webp))["']/gi)].map(m => m[1]);
    console.log(`--- ${site.name} (${site.url}) ---`);
    for (const m of matches.slice(0, 30)) console.log(m);
    console.log('count', matches.length);
  } catch (e) {
    console.error(`ERROR ${site.name}:`, e.message);
  }
}
