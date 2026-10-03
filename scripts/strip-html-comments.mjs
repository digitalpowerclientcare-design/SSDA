// Remove HTML comments (internal TODO/INTERVIEW notes) from every built page so they never reach the public site.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
let files = 0, removed = 0;
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (!p.endsWith('.html')) continue;
    const before = readFileSync(p, 'utf8');
    const after = before.replace(/<!--[\s\S]*?-->/g, '');
    if (after !== before) { writeFileSync(p, after); files++; removed += (before.match(/<!--[\s\S]*?-->/g) || []).length; }
  }
};
walk(root);
console.log(`strip-html-comments: removed ${removed} comment(s) from ${files} file(s)`);
