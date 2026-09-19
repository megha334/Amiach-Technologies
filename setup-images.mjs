import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const artifactDir = "C:/Users/ASUS/.gemini/antigravity-ide/brain/f24a8672-3745-4d8d-97c1-481ddb3f3740";
const currentDir = path.dirname(fileURLToPath(import.meta.url));
const targetDir = path.join(currentDir, "public", "images");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(artifactDir).filter((file) => file.endsWith(".jpg"));
console.log("Found generated files:", files);

const imageMap = {
  hero_touch_table: ["hero-1.jpg", "product-table.jpg", "hero-6.jpg"],
  hero_touch_podium: ["hero-2.jpg", "product-podium.jpg", "hero-7.jpg"],
  hero_kiosk: ["hero-3.jpg", "product-kiosk.jpg", "hero-8.jpg"],
  hero_outdoor: ["hero-4.jpg", "product-outdoor.jpg", "hero-9.jpg"],
  hero_custom: ["hero-5.jpg", "product-custom.jpg", "hero-10.jpg"],
};

for (const [prefix, targets] of Object.entries(imageMap)) {
  const match = files.find((file) => file.startsWith(prefix));

  if (match) {
    const source = path.join(artifactDir, match);
    for (const target of targets) {
      fs.copyFileSync(source, path.join(targetDir, target));
      console.log(`Copied ${match} -> ${target}`);
    }
  }
}

console.log("Images setup completed successfully.");
