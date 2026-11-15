import { mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const dir = "public/images";
await mkdir(dir, { recursive: true });

const images = {
  "architecture-tower": "1486406146926-c627a92ad1ab",
  "construction-site": "1541888946425-d81bb19240f5",
  "construction-crew": "1504307651254-35680f356dfd",
  "architecture-white": "1503387762-592deb58ef4e",
  "architecture-facade": "1518005020951-eccb494ad742",
  "concrete-facade": "1517089596392-fb9a9033e05b",
  "concrete-texture": "1517581177682-a085bb7ffb15",
  "concrete-structure": "1533154683836-84ea7a0bc310",
  "architecture-blue": "1494891848038-7bd202a2afeb",
  "architecture-dusk": "1431576901776-e539bd916ba2",
  "infrastructure-bridge": "1531835551805-16d864c8d311",
  "industrial-port": "1508450859948-4e04fabaa4ea",
  "road-asphalt": "1516216628859-9bccecab13ca",
  "engineer-site": "1581094794329-c8112a89af12",
  "engineer-industrial": "1581092918056-0c4c3acd3789",
  "industrial-plant": "1541976590-713941681591",
  "industrial-pipes": "1523413651479-597eb2da0ad6",
  "industrial-machinery": "1587293852726-70cdb56c2866",
  "industrial-facility": "1565043666747-69f6646db940",
  welding: "1504917595217-d4dc5ebe6122",
  electrical: "1621905251189-08b45d6a269e",
  "electrical-2": "1621905252507-b35492cc74b4",
  "flooring-1": "1590856029826-c7a73142bbf1",
  "flooring-2": "1607400201889-565b1ee75f8e",
  painting: "1503328427499-d92d1ac3d174",
  "paint-tools": "1562259949-e8e7689d7828",
  worker: "1589939705384-5185137a7f0f",
  meeting: "1531973576160-7125cd663d86",
  office: "1497366216548-37526070297c",
  "concrete-wall": "1479839672679-a46483c0e7c8",
  "city-skyline": "1512453979798-5ea266f8880c",
  "steel-infrastructure": "1513828583688-c52646db42da",
  "industrial-steel": "1518709268805-4e9042af9f23",
  refinery: "1530124566582-a618bc2615dc",
  "interior-floor": "1600585154340-be6161a56a0c",
  "interior-living": "1513694203232-719a280e022f",
  "architecture-monolith": "1524230572899-a752b3835840",
  "modern-house": "1494526585095-c41746248156",
  "road-highway": "1565008447742-97f6f38c985c",
  "interior-gypsum": "1600566753086-00f18fb6b3ea",
  "interior-ceiling": "1600210492486-724fe5c67fb0",
  "roof-coating": "1674485169641-bcb2bf6f1df9",
  "concrete-surface": "1769323959573-97b1e1264588",
  excavation: "1785484267832-55ca462c2ecd",
  "steel-work": "1681812508281-7589b75b2e46",
  blockwork: "1680699231780-ed1966cb70bd",
  tools: "1783587616539-39bdab1a608f",
  "wood-texture": "1586774839818-40c7e1cd1243",
  "water-droplets": "1767607657840-638e329506b8",
  "marine-work": "1681812490689-2bb9ab7ca660",
};

let ok = 0;
let failed = [];
for (const [name, id] of Object.entries(images)) {
  const file = path.join(dir, `${name}.jpg`);
  try {
    const existing = await stat(file).catch(() => null);
    if (existing && existing.size > 20000) {
      ok++;
      continue;
    }
    const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2000&q=78`;
    const res = await fetch(url, { signal: AbortSignal.timeout(90000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 20000) throw new Error(`too small (${buf.length}b)`);
    await writeFile(file, buf);
    ok++;
    console.log(`ok  ${name}.jpg  ${(buf.length / 1024).toFixed(0)}kB`);
  } catch (err) {
    failed.push(`${name}: ${err.message}`);
    console.log(`ERR ${name}: ${err.message}`);
  }
}
console.log(`\n${ok}/${Object.keys(images).length} downloaded`);
if (failed.length) console.log(failed.join("\n"));
