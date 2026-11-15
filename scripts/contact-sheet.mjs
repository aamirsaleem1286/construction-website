import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";

const dir = "public/images/candidates";
const files = (await readdir(dir)).filter((f) => f.startsWith("c") && f.endsWith(".jpg")).sort();
const cellW = 300;
const cellH = 200;
const labelH = 28;
const cols = 6;
const rows = Math.ceil(files.length / cols);
const width = cols * cellW;
const height = rows * (cellH + labelH);

const composites = [];
for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const label = file.replace(".jpg", "");
  const x = (i % cols) * cellW;
  const y = Math.floor(i / cols) * (cellH + labelH);
  const buf = await sharp(path.join(dir, file))
    .resize(cellW, cellH, { fit: "cover", position: "attention" })
    .jpeg({ quality: 72 })
    .toBuffer();
  const labelSvg = Buffer.from(
    `<svg width="${cellW}" height="${labelH}"><rect width="100%" height="100%" fill="#101C2C"/><text x="12" y="19" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#E9A23B">${label}</text></svg>`
  );
  composites.push({ input: buf, left: x, top: y });
  composites.push({ input: labelSvg, left: x, top: y + cellH });
}

await sharp({
  create: { width, height, channels: 3, background: "#171C24" },
})
  .composite(composites)
  .jpeg({ quality: 82 })
  .toFile("public/images/contact-sheet.jpg");

console.log(`Wrote contact sheet ${width}x${height} with ${files.length} images`);
