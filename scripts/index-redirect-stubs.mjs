// Astro's static redirect stubs ship with <meta name="robots" content="noindex">. GitHub Pages cannot send real 301s,
// so the instant meta-refresh + canonical is the redirect signal; noindex would tell Google to drop the old URL
// instead of moving its ranking to the new one. Remove it from the stubs only.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
let fixed = 0;
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (!p.endsWith('.html')) continue;
    const before = readFileSync(p, 'utf8');
    if (!/<meta http-equiv="refresh"/.test(before)) continue;
    const after = before.replace(/<meta name="robots" content="noindex">/, '');
    if (after !== before) { writeFileSync(p, after); fixed++; }
  }
};
walk(root);
console.log(`index-redirect-stubs: removed noindex from ${fixed} redirect stub(s)`);
