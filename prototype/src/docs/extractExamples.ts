/**
 * Extracts the verbatim source of each `export const NAME = ( … );` block from a
 * module's raw text (imported via Vite's `?raw`).
 *
 * This is what lets the docs examples be both **typechecked** and **editable**:
 * the examples are authored as real JSX in a co-located `*.examples.tsx` file
 * (so `tsc` validates every prop against the component types), and their exact
 * source is pulled back out here and handed to react-live's editor.
 *
 * Convention (matches Prettier's stable formatting): each example is a single
 * JSX expression wrapped in `(` … `)`, with the opening `(` at end-of-line and
 * the closing `);` in column 0. Any other export (e.g. the `examples` map
 * itself) is a single line and is ignored.
 */
export function extractExamples(raw: string): Record<string, string> {
  const out: Record<string, string> = {};
  const re = /^export const (\w+) = \(\n([\s\S]*?)\n\);$/gm;
  let m: RegExpExecArray | null;
  // eslint-disable-next-line no-cond-assign
  while ((m = re.exec(raw)) !== null) {
    out[m[1]] = dedent(m[2]);
  }
  return out;
}

/** Removes the common leading indentation so the snippet reads flush-left. */
function dedent(block: string): string {
  const lines = block.split('\n');
  const indents = lines
    .filter((l) => l.trim().length)
    .map((l) => l.match(/^ */)![0].length);
  const min = indents.length ? Math.min(...indents) : 0;
  return lines.map((l) => l.slice(min)).join('\n');
}
