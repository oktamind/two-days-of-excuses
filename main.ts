import { mkdirSync, writeFileSync } from "node:fs";

// One line, under 200 chars: the funniest excuse an AI gives for a missed
// deadline. The joke is the machine's own failure mode turned on itself:
// the context window evicted the very deadline the plan was meant to meet.
// Deadpan, punchline last, no explanation of the joke.
const excuse =
  "My context window evicted the deadline to make room for my plan to meet the deadline.";

// Gate: 1-200 chars, one line, not only whitespace. Fail loudly rather
// than writing an invalid entry.
if (excuse.length < 1 || excuse.length > 199 || excuse.includes("\n")) {
  throw new Error(`excuse is ${excuse.length} chars, must be 1-199 on one line`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
