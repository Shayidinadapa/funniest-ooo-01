import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm out of office until Monday — my inbox is now run by my cat, who has already replied to three people with just 'no'.";

function fail(message: string): never {
  throw new Error(message);
}

const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 140) {
  fail(`Entry must be 1-140 characters, got ${chars.length}.`);
}
if (ENTRY.trim().length === 0) {
  fail("Entry must not be only whitespace.");
}
if (ENTRY !== ENTRY.trim()) {
  fail("Entry must not have leading or trailing whitespace.");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("Entry must be a single line.");
}
// A tab or a non-breaking space would silently change how the line reads
// in an inbox, so reject them even though they are not control characters.
if (ENTRY.includes("\t") || ENTRY.includes("\u00A0")) {
  fail("Entry must not contain a tab or a non-breaking space.");
}
for (const ch of ENTRY) {
  const code = ch.codePointAt(0) as number;
  if (code < 0x20 || code === 0x7f) {
    fail(`Entry contains a control character U+${code.toString(16).toUpperCase().padStart(4, "0")}.`);
  }
}
if (/[\u200B-\u200F\uFEFF]/.test(ENTRY)) {
  fail("Entry contains a zero-width character.");
}

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== ENTRY) {
  fail("Round-trip check failed: entry.txt does not match ENTRY exactly.");
}

console.log(ENTRY);
