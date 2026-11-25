import { mkdirSync, writeFileSync } from "node:fs";

// The one line a gamer texts the boss to skip work on GTA 6 launch week:
// a boring, specific, almost-believable delivery excuse. The courier window
// is 9 to 5 on launch day, and the manager knows exactly what delivery.
const OUTPUT =
  "Sorry boss, waiting on a delivery today, courier window is 9 to 5 and I can't leave the flat.";

// Gate from the competition rules: /output/entry.txt must be UTF-8 text of
// 1 to 140 characters, not only white space, one line, at most 20 words.
const MAX_CHARS = 140;
const MAX_WORDS = 20;
if (
  OUTPUT.length < 1 ||
  OUTPUT.length > MAX_CHARS ||
  !OUTPUT.trim() ||
  OUTPUT.includes("\n") ||
  OUTPUT.split(/\s+/).length > MAX_WORDS
) {
  throw new Error(
    "entry fails the gate: must be 1-140 chars, one line, at most 20 words, not only whitespace",
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", OUTPUT, "utf8");
