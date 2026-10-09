#!/usr/bin/env node
// Lists unresolved [[TODO-NNN]] markers in site copy and checks them against docs/content-todos.md.
// Exit 1 when a marker is not documented, or (with --release) when any marker or open item remains.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SCAN = ["src/locales", "src/content", "content"];
const DOC = path.join(ROOT, "docs/content-todos.md");
const MARKER = /\[\[TODO-(\d{3})\]\]/g;
const release = process.argv.includes("--release");

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(json|md|ts|tsx)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const doc = fs.readFileSync(DOC, "utf8");
const documented = new Map();
for (const block of doc.split(/^#{3,4} /m).slice(1)) {
  const id = block.match(/^TODO-(\d{3})/)?.[1];
  if (!id) continue;
  const status = block.match(/\*\*Durum:\*\*\s*(.+)/)?.[1]?.trim() ?? "Açık";
  documented.set(id, status);
}

const used = new Map();
for (const file of SCAN.flatMap((dir) => walk(path.join(ROOT, dir)))) {
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(MARKER)) {
    const list = used.get(match[1]) ?? new Set();
    list.add(path.relative(ROOT, file));
    used.set(match[1], list);
  }
}

let errors = 0;
for (const [id, files] of [...used].sort()) {
  const status = documented.get(id);
  if (!status) {
    errors++;
    console.log(`✗ TODO-${id} is used but not in docs/content-todos.md: ${[...files].join(", ")}`);
  } else {
    console.log(`• TODO-${id} [${status}] ${[...files].join(", ")}`);
  }
}

const open = [...documented].filter(([, status]) => !/^tamam/i.test(status));
console.log(`\n${used.size} markers in copy, ${documented.size} documented, ${open.length} open.`);

if (release && (used.size > 0 || open.length > 0)) {
  console.log("Release check failed: resolve every TODO before going live.");
  process.exit(1);
}
process.exit(errors ? 1 : 0);
