// Derives a clean, consistent SEASON and OCCASION for perfume rows whose
// season/occasion cells are empty, from the fragrance notes (top/heart/base),
// existing scent profile, and "inspired by" text. Idempotent: only empty cells
// are written, so re-running never clobbers hand-written values.
//
// Season vocabulary (comma list, matches capList() rendering in DiscoverySetDetail):
//   "Autumn, Winter" | "Spring, Summer" | "All Seasons"
// Occasion vocabulary:
//   "Daytime, Office" | "Evening, Formal" | "Date Night, Evening" |
//   "Daytime, Casual" | "Daytime, Evening"
//
// Usage:
//   node scripts/derive-season-occasion.mjs --dry     # preview, write nothing
//   node scripts/derive-season-occasion.mjs           # write to empty cells
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { config } from 'dotenv';
import { google } from 'googleapis';
config();

const DRY = process.argv.includes('--dry');

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const TAB = process.env.PERFUME_TAB ?? 'Perfumes';
const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });
const res = await sheets.spreadsheets.values.get({
  spreadsheetId: SHEET_ID,
  range: `'${TAB.replace(/'/g, "''")}'`,
  valueRenderOption: 'FORMATTED_VALUE',
});
const all = res.data.values ?? [];
const headers = (all[0] ?? []).map((h) => String(h ?? '').trim().toLowerCase());
const idx = {};
headers.forEach((h, i) => { if (h) idx[h] = i; });
const col = (k) => idx[k] ?? -1;
const NAME = col('perfume name'), BRAND = col('brand'), SP = col('scent profile');
const TOP = col('top notes'), HEART = col('heart notes'), BASE = col('base notes');
const SEASON = col('season'), OCC = col('occasion'), INSP = col('inspired by');

// Warm/cool signal families. A note match adds its weight to the warm or cool
// score. Neutral families (e.g. musk) move neither.
const SIGNALS = [
  // warm
  { side: 'warm', w: 3, re: /\boud\b|agarwood|agar wood|aoud|gaharu/i },
  { side: 'warm', w: 3, re: /amber|ambergris|ambroxan|benzoin|labdanum|myrrh|incense|frankincense|resin|balsam|styrax/i },
  { side: 'warm', w: 2, re: /pepper|peppercorn|cinnamon|cardamom|clove|saffron|ginger|nutmeg|cumin|anise|pimento|chili|cayenne/i },
  { side: 'warm', w: 3, re: /tobacco|leather|suede/i },
  { side: 'warm', w: 2, re: /vanilla|vanille|tonka|praline|caramel|toffee|honey|chocolate|cocoa|coffee|marshmallow|sugar|cream|almond|pistachio/i },
  { side: 'warm', w: 1, re: /sandalwood|cedar|vetiver|patchouli|oakmoss|woods|wood|guaiac|cashmere wood|driftwood|pine|cypress|juniper/i },
  // cool
  { side: 'cool', w: 3, re: /bergamot|lemon|orange|mandarin|tangerine|grapefruit|neroli|lime|yuzu|citrus|petitgrain|blood orange/i },
  { side: 'cool', w: 3, re: /aquatic|marine|seaweed|calone|ozonic|water|ocean|salt/i },
  { side: 'cool', w: 2, re: /green|galbanum|leaf|tea|mint|basil|rosemary|sage|thyme|grass|herbal/i },
  { side: 'cool', w: 2, re: /apple|peach|pear|plum|berry|berries|raspberry|strawberry|cherry|pineapple|melon|watermelon|mango|lychee|fig|grape|blackcurrant|currant|apricot/i },
  { side: 'cool', w: 2, re: /floral|flower|tuberose|ylang|gardenia|magnolia|freesia|peony|iris|orris|lily|violet|lotus|narcissus|mimosa|heliotrope|blossom|bouquet|carnation|geranium|rose|jasmine|sambac/i },
];

function score(texts) {
  let warm = 0, cool = 0;
  for (const s of SIGNALS) {
    const re = new RegExp(s.re.source, 'gi');
    for (const t of texts) {
      if (!t) continue;
      const n = (t.match(re) || []).length;
      if (n > 0) s.side === 'warm' ? (warm += n * s.w) : (cool += n * s.w);
    }
  }
  return { warm, cool };
}

function deriveSeason({ warm, cool }) {
  if (warm === 0 && cool === 0) return 'All Seasons';
  if (warm >= cool * 2) return 'Autumn, Winter';
  if (cool >= warm * 2) return 'Spring, Summer';
  return 'All Seasons';
}

function deriveOccasion({ warm, cool }) {
  // Warm/formal-heavy -> evening; fresh-heavy -> daytime; sweet -> date night.
  if (warm === 0 && cool === 0) return 'Daytime, Evening';
  if (warm >= cool * 2) return 'Evening, Formal';
  if (cool >= warm * 2) return 'Daytime, Office';
  if (warm > cool) return 'Date Night, Evening';
  return 'Daytime, Casual';
}

const rows = [];
for (let r = 1; r < all.length; r++) {
  const row = all[r];
  const name = String(row[NAME] ?? '').trim();
  const brand = String(row[BRAND] ?? '').trim();
  if (!name || !brand) continue;
  const seasonEmpty = SEASON >= 0 && !String(row[SEASON] ?? '').trim();
  const occEmpty = OCC >= 0 && !String(row[OCC] ?? '').trim();
  if (!seasonEmpty && !occEmpty) continue;
  const texts = [row[TOP], row[HEART], row[BASE], row[INSP], row[SP], name].map((x) => String(x ?? ''));
  const s = score(texts);
  const season = deriveSeason(s);
  const occasion = deriveOccasion(s);
  const entry = { sheetRow: r + 1, brand, name };
  if (seasonEmpty) entry.season = season;
  if (occEmpty) entry.occasion = occasion;
  rows.push(entry);
}

const nSeason = rows.filter((x) => x.season).length;
const nOcc = rows.filter((x) => x.occasion).length;
console.log(`Rows with empty season/occasion: ${rows.length} (season ${nSeason}, occasion ${nOcc})`);

writeFileSync(join(process.cwd(), 'data', 'derived-season-occasion.json'), JSON.stringify(rows, null, 2));

// sample preview
const tally = {};
for (const x of rows) {
  if (x.season) tally[`season:${x.season}`] = (tally[`season:${x.season}`] ?? 0) + 1;
  if (x.occasion) tally[`occ:${x.occasion}`] = (tally[`occ:${x.occasion}`] ?? 0) + 1;
}
console.log('\nDistribution:');
for (const [k, v] of Object.entries(tally).sort()) console.log(`  ${v}\t${k}`);

if (DRY) {
  console.log('\n(dry run, nothing written)');
  process.exit(0);
}

const updates = [];
for (const x of rows) {
  if (x.season) updates.push({ range: `'${TAB.replace(/'/g, "''")}'!${String.fromCharCode(65 + SEASON)}${x.sheetRow}`, values: [[x.season]] });
  if (x.occasion) updates.push({ range: `'${TAB.replace(/'/g, "''")}'!${String.fromCharCode(65 + OCC)}${x.sheetRow}`, values: [[x.occasion]] });
}
for (let i = 0; i < updates.length; i += 200) {
  await sheets.spreadsheets.values.batchUpdate({
    spreadsheetId: SHEET_ID,
    requestBody: { valueInputOption: 'USER_ENTERED', data: updates.slice(i, i + 200) },
  });
}
console.log(`\n>>> Wrote ${updates.length} cells (season + occasion).`);
