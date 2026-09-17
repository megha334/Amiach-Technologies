const fs = require('fs');
const path = require('path');

const artifactDir = 'C:/Users/ASUS/.gemini/antigravity-ide/brain/f24a8672-3745-4d8d-97c1-481ddb3f3740';
const targetDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(artifactDir).filter(f => f.endsWith('.jpg'));
console.log('Found generated files:', files);

const map = {
  'hero_touch_table': ['hero-1.jpg', 'product-table.jpg', 'hero-6.jpg'],
  'hero_touch_podium': ['hero-2.jpg', 'product-podium.jpg', 'hero-7.jpg'],
  'hero_kiosk': ['hero-3.jpg', 'product-kiosk.jpg', 'hero-8.jpg'],
  'hero_outdoor': ['hero-4.jpg', 'product-outdoor.jpg', 'hero-9.jpg'],
  'hero_custom': ['hero-5.jpg', 'product-custom.jpg', 'hero-10.jpg']
};

for (const [prefix, targets] of Object.entries(map)) {
  const match = files.find(f => f.startsWith(prefix));
  if (match) {
    const src = path.join(artifactDir, match);
    for (const tgt of targets) {
      fs.copyFileSync(src, path.join(targetDir, tgt));
      console.log('Copied ' + match + ' -> ' + tgt);
    }
  }
}

console.log('Images setup completed successfully.');
