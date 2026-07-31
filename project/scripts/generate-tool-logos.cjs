const fs = require('fs');
const path = require('path');
const simpleIcons = require('simple-icons');
const icons = {
  'chatgpt': 'chatgpt',
  'grammarly': 'grammarly',
  'quillbot': 'quillbot',
  'originality-ai': 'originalityai',
  'zerogpt': 'zerogpt',
  'jasper-ai': 'jasper',
};
const dir = path.join(process.cwd(), 'public', 'tool-logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
for (const [filename, iconKey] of Object.entries(icons)) {
  const icon = simpleIcons.Get ? simpleIcons.Get(iconKey) : simpleIcons[iconKey];
  if (!icon) {
    console.error('Missing icon', iconKey);
    continue;
  }
  fs.writeFileSync(path.join(dir, `${filename}.svg`), icon.svg);
  console.log('Wrote', `${filename}.svg`);
}
