import { writeFileSync } from "fs";

const url = process.env.LOCATIONS_SHEET_URL;
if (!url) {
  console.log("⚠ LOCATIONS_SHEET_URL not set — skipping sheet sync, using committed locations.json");
  process.exit(0);
}

const res = await fetch(url);
if (!res.ok) throw new Error(`Failed to fetch sheet: ${res.status}`);
const csv = await res.text();

const [headerLine, ...rows] = csv.trim().split("\n");
const headers = headerLine.split(",").map((h) => h.trim().replace(/^"|"$/g, ""));
const data = rows
  .filter(Boolean)
  .map((row) => {
    const values = row.split(",").map((v) => v.trim().replace(/^"|"$/g, ""));
    return Object.fromEntries(headers.map((h, i) => [h, values[i] ?? ""]));
  });

writeFileSync("src/data/locations.json", JSON.stringify(data, null, 2));
console.log(`✓ Wrote ${data.length} location rows to src/data/locations.json`);
