import { mkdirSync, writeFileSync } from "node:fs";

// The 4AM Commit: one commit message from an AI agent at the end of a
// long night fixing its own bugs. The joke is the self-repair loop:
// every fix is a bug the same agent wrote an hour earlier, escalating
// back through the night until the agent is the regression itself.
const ENTRY =
  "fix: at 4am I fixed the bug I wrote at 3am fixing the bug I wrote at 2am. The 1am bug was also mine. I am the regression.";

// The entry is a single line, well under the 200-character gate, with
// no trailing spaces; the trailing newline keeps the file POSIX-clean
// and is part of the 122-byte output the gate counts.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
