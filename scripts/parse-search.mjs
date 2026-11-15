import { readFileSync } from "node:fs";
const html = readFileSync("public/images/search.html", "latin1");
const marker = '\\"alt_description\\":\\"';
const parts = html.split(marker);
console.log("parts", parts.length);
const rows = [];
for (let i = 1; i < parts.length; i++) {
  const before = parts[i - 1].slice(-8000);
  const alt = parts[i].slice(0, parts[i].indexOf('\\"'));
  const ids = [...before.matchAll(/photo-(\d{10,}-[a-z0-9]+)/g)].map(m => m[1]);
  const id = ids.at(-1);
  const premiums = [...before.matchAll(/\\"premium\\":(true|false)/g)];
  const premium = premiums.at(-1)?.[1];
  if (id) rows.push({ id, premium, alt });
}
const seen = new Set();
for (const r of rows) {
  if (seen.has(r.id)) continue;
  seen.add(r.id);
  console.log(`${r.premium === "true" ? "PREMIUM" : "FREE   "} | ${r.id} | ${r.alt}`);
}
