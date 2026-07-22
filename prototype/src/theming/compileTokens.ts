/**
 * Runs a real Style Dictionary instance **in the browser** over the in-memory
 * brand/primary token tree (`tokenTree.ts`) and returns the compiled CSS custom
 * properties, so the Theming playground can recompile the whole derivation graph
 * live as the user edits a token.
 *
 * The colour maths (`mix`, `color-yiq`, `darken`, `lighten`) is ported verbatim
 * from the repo's `tokens/style-dictionary.js` + `tokens/sass-helpers.js` (chroma
 * -js), with the `color-yiq` constants (threshold / light / dark) inlined from
 * the repo's `other.json` token files. Style Dictionary v4 is browser-safe: its core only
 * touches the filesystem through the swappable `style-dictionary/fs` entry, which
 * defaults to an in-memory implementation, and we build entirely from an
 * in-memory `tokens` object with no file sources or file output.
 */
import StyleDictionary from 'style-dictionary';
import type { DesignTokens } from 'style-dictionary/types';
import chroma from 'chroma-js';

import { buildTokenTree, type Variant } from './tokenTree';

// color-yiq constants, inlined from tokens/src/**/global/other.json (light theme).
const YIQ_THRESHOLD = 128;
const YIQ_TEXT_DARK = '#454545';
const YIQ_TEXT_LIGHT = '#FFFFFF';

const RESERVED = ['inherit', 'initial', 'revert', 'unset', 'currentColor', 'none', 'transparent'];

/** Bootstrap's `color-yiq`: pick the dark or light text colour for a background. */
function colorYiq(background: chroma.Color): chroma.Color {
  const [r, g, b] = background.rgb();
  const yiq = ((r * 299) + (g * 587) + (b * 114)) * 0.001;
  let result = yiq >= YIQ_THRESHOLD ? chroma(YIQ_TEXT_DARK) : chroma(YIQ_TEXT_LIGHT);

  // Nudge toward the required 4.5:1 contrast, exactly as sass-helpers.js does.
  const maxAttempts = 10;
  const brightening = yiq < YIQ_THRESHOLD;
  let attempts = 1;
  while (chroma.contrast(background, result) < 4.5 && attempts <= maxAttempts) {
    result = brightening ? result.brighten(0.1) : result.darken(0.1);
    attempts += 1;
  }
  return result;
}

// SASS-compatible darken/lighten (operate on HSL lightness), from sass-helpers.js.
const lighten = (color: chroma.Color, amount: number) => color.set('hsl.l', (color.get('hsl.l') as number) + amount);
const darken = (color: chroma.Color, amount: number) => lighten(color, -amount);

interface ModifyStep { type: string; amount?: number; otherColor?: string; }

/** Applies a token's `modify` chain and returns an 8-digit hex, like colorTransform. */
function colorTransform(value: string, originalValue: string, modify?: ModifyStep[]): string {
  if (RESERVED.includes(originalValue)) return originalValue;
  if (RESERVED.includes(value)) return value;
  if (!chroma.valid(value)) return value;

  let color = chroma(value);
  for (const step of modify ?? []) {
    switch (step.type) {
      case 'mix':
        color = chroma.mix(color, step.otherColor as string, step.amount, 'rgb');
        break;
      case 'color-yiq':
        color = colorYiq(color);
        break;
      case 'darken':
        color = darken(color, step.amount as number);
        break;
      case 'lighten':
        color = lighten(color, step.amount as number);
        break;
      default:
        break;
    }
  }
  return color.hex('rgba').toUpperCase();
}

let registered = false;
function ensureRegistered() {
  if (registered) return;
  StyleDictionary.registerTransform({
    name: 'color/pgn-modify',
    type: 'value',
    transitive: true, // re-run after references resolve, so color-yiq sees the resolved bg
    filter: (token) => token.$type === 'color' || String(token.$value).startsWith('#'),
    transform: (token) => colorTransform(
      String(token.$value),
      String(token.original?.$value ?? token.$value),
      (token as { modify?: ModifyStep[] }).modify,
    ),
  });
  registered = true;
}

export interface CompiledToken {
  /** Dotted DTCG path, e.g. `color.btn.bg.brand`. */
  path: string;
  /** CSS custom property name incl. prefix, e.g. `--pgn-color-btn-bg-brand`. */
  cssVar: string;
  /** Final computed value, e.g. `#9D0054FF`. */
  value: string;
}

export interface CompileResult {
  /** `--pgn-*` → value, ready to apply to an element's style. */
  vars: Record<string, string>;
  /** Every compiled token, for driving the derived-tokens tree. */
  tokens: CompiledToken[];
}

/**
 * Compiles the token tree with the given overrides.
 *
 * @param baseOverrides  new base colour per variant (the `$brand` / `$primary` pickers)
 * @param tokenOverrides literal pins for individually-edited derived tokens
 */
export async function compileTokens(
  baseOverrides: Partial<Record<Variant, string>> = {},
  tokenOverrides: Record<string, string> = {},
): Promise<CompileResult> {
  ensureRegistered();
  const tokens = buildTokenTree(baseOverrides, tokenOverrides);

  const sd = new StyleDictionary({
    tokens: tokens as unknown as DesignTokens,
    platforms: {
      css: {
        transforms: ['attribute/cti', 'name/kebab', 'color/pgn-modify'],
        prefix: 'pgn',
      },
    },
    log: { verbosity: 'silent', warnings: 'disabled' },
  });

  const dictionary = await sd.getPlatformTokens('css', { cache: false });

  const vars: Record<string, string> = {};
  const compiled: CompiledToken[] = [];
  for (const token of dictionary.allTokens) {
    const cssVar = `--${token.name}`;
    const value = String(token.$value);
    vars[cssVar] = value;
    compiled.push({ path: token.path.join('.'), cssVar, value });
  }
  return { vars, tokens: compiled };
}
