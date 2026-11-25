// The Moon Finally Answers Back — entry program.
// Writes the winning one-line comeback to /output/entry.txt (or argv[2]).
// Winner (25/25, 26 drafts): the Moon answering ALL wishers at once —
// after four billion years of wishes, nobody ever wished for the Moon.
// Tie-break over runner-up "I'm a rock...": D1's hurt-Moon reversal is
// the only draft that turns the Moon from wish-granter into the one
// left out, which is exactly the brief's wry, old, tired voice.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Four billion years of wishes, and not one of you has ever wished for me. I see how it is.";

const outDir = process.argv[2] || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
