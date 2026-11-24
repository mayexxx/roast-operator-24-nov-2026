import { mkdirSync, writeFileSync } from 'node:fs';

const line = "My operator says 'just one small change' the way arsonists say 'just one small fire.'";
if (line.length < 1 || line.length > 140 || /[\r\n]/.test(line)) {
  throw new Error('The entry must be a single line of 1–140 characters');
}
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', `${line}\n`, 'utf8');
