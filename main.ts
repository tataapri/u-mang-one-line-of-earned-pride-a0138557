import fs from "node:fs";

const ENTRY =
  "For six months he hauled bricks up the hill one wheelbarrow at a time; today his daughter set the last one in the wall, stepped back, and saw their house standing.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");
