/**
 * An in-memory DTCG token subset covering Paragon's brand & primary button
 * chains, authored to match `tokens/src/` exactly.
 *
 * This is the same derivation graph Style Dictionary builds from the repo's JSON
 * — a single "source" colour (`$brand` / `$primary`) fans out into a 100–900
 * tint/shade scale (`mix` with white/black), a set of theme-level aliases
 * (`color.theme.*`), and finally the per-variant button tokens
 * (`color.btn.*.{brand,primary}`) the `.btn-<variant>` CSS consumes. Button text
 * colours are `color-yiq` of their background (Bootstrap's contrast picker), so
 * flipping the base colour light/dark flips the label automatically.
 *
 * Only brand & primary (solid + outline) are modelled — see the Theming page.
 * The compiler in `compileTokens.ts` runs a real Style Dictionary instance over
 * this tree in the browser, so editing any node recompiles the whole graph.
 */

/** A colour modification, matching `tokens/style-dictionary.js`'s `modify` API. */
export type ColorModify =
  | { type: 'mix'; otherColor: 'white' | 'black'; amount: number }
  | { type: 'color-yiq' }
  | { type: 'darken'; amount: number }
  | { type: 'lighten'; amount: number };

export interface ColorToken {
  $type: 'color';
  $value: string;
  modify?: ColorModify[];
  /** Human label for the derived-tokens tree (not used by Style Dictionary). */
  $description?: string;
}

/** Any DTCG leaf token (colour, dimension, fontFamily, …). */
export interface TokenLeaf {
  $type: string;
  $value: string;
  modify?: ColorModify[];
}

/** The two base ("source") colours the whole tree derives from. */
export const BASE_COLORS = {
  brand: '#9D0054',
  primary: '#0A3055',
} as const;

export type Variant = keyof typeof BASE_COLORS;
export const VARIANTS: Variant[] = ['brand', 'primary'];

/** Dotted token path → its source ($…) token in the repo, for the base pickers. */
export const BASE_TOKEN_PATH: Record<Variant, string> = {
  brand: 'color.brand.base',
  primary: 'color.primary.base',
};

// The 100–900 scale: mix the base with white (tints) or black (shades). 500 is
// the base itself. Amounts are a 1:1 copy of the repo's global/color.json.
const SCALE: Array<[level: string, mix: ColorModify | null]> = [
  ['100', { type: 'mix', otherColor: 'white', amount: 0.94 }],
  ['200', { type: 'mix', otherColor: 'white', amount: 0.75 }],
  ['300', { type: 'mix', otherColor: 'white', amount: 0.50 }],
  ['400', { type: 'mix', otherColor: 'white', amount: 0.25 }],
  ['500', null],
  ['600', { type: 'mix', otherColor: 'black', amount: 0.10 }],
  ['700', { type: 'mix', otherColor: 'black', amount: 0.20 }],
  ['800', { type: 'mix', otherColor: 'black', amount: 0.25 }],
  ['900', { type: 'mix', otherColor: 'black', amount: 0.30 }],
];

// Which scale level each theme-level alias points at (from themes/light/alias).
const THEME_LEVELS: Record<string, string> = {
  bg: '100', border: '200', focus: '500', hover: '700', active: '900',
};

const ref = (path: string): ColorToken => ({ $type: 'color', $value: `{${path}}` });
const yiq = (path: string): ColorToken => ({ $type: 'color', $value: `{${path}}`, modify: [{ type: 'color-yiq' }] });
const lit = (value: string): ColorToken => ({ $type: 'color', $value: value });

/** Builds the `color.btn.*` tokens for one solid variant + its `outline-` form. */
function buildButtonTokens(v: Variant) {
  const o = `outline-${v}`;
  return {
    bg: {
      [v]: ref(`color.${v}.base`),
      [o]: lit('transparent'),
    },
    text: {
      [v]: yiq(`color.btn.bg.${v}`),
      [o]: ref(`color.${v}.base`),
    },
    border: {
      [v]: ref(`color.btn.bg.${v}`),
      [o]: ref(`color.${v}.base`),
    },
    hover: {
      bg: {
        [v]: ref(`color.theme.hover.${v}`),
        [o]: ref(`color.${v}.100`),
      },
      text: {
        [v]: yiq(`color.btn.hover.bg.${v}`),
        [o]: ref(`color.theme.hover.${v}`),
      },
      border: {
        [v]: ref(`color.theme.hover.${v}`),
        [o]: ref(`color.${v}.900`),
      },
    },
    active: {
      bg: {
        [v]: ref(`color.theme.active.${v}`),
        [o]: ref(`color.theme.bg.${v}`),
      },
      text: {
        [v]: yiq(`color.btn.active.bg.${v}`),
        [o]: yiq(`color.btn.active.bg.${o}`),
      },
      border: {
        [v]: ref(`color.theme.active.${v}`),
        [o]: ref(`color.theme.active.${v}`),
      },
    },
    focus: {
      bg: {
        [v]: ref(`color.btn.bg.${v}`),
        [o]: lit('inherit'),
      },
      text: {
        [v]: ref(`color.btn.text.${v}`),
        [o]: ref(`color.btn.text.${o}`),
      },
      border: {
        [v]: ref(`color.btn.border.${v}`),
        [o]: ref(`color.btn.border.${o}`),
      },
      outline: {
        [v]: ref(`color.theme.focus.${v}`),
        [o]: ref(`color.theme.focus.${v}`),
      },
    },
    disabled: {
      bg: {
        [v]: ref(`color.btn.bg.${v}`),
        [o]: lit('inherit'),
      },
      text: {
        [v]: ref(`color.btn.text.${v}`),
        [o]: ref(`color.theme.hover.${v}`),
      },
      border: {
        [v]: ref(`color.btn.border.${v}`),
        [o]: ref(`color.theme.hover.${v}`),
      },
    },
  };
}

/** Deep-merges plain objects (used to fold each variant's btn tokens together). */
function deepMerge<T extends Record<string, unknown>>(target: T, source: T): T {
  for (const key of Object.keys(source)) {
    const s = source[key];
    const t = (target as Record<string, unknown>)[key];
    if (s && typeof s === 'object' && !Array.isArray(s) && !('$value' in (s as object))
      && t && typeof t === 'object') {
      deepMerge(t as Record<string, unknown>, s as Record<string, unknown>);
    } else {
      (target as Record<string, unknown>)[key] = s;
    }
  }
  return target;
}

/**
 * Builds the full DTCG token object. `baseOverrides` replaces a variant's base
 * colour (the `$brand` / `$primary` pickers); `tokenOverrides` pins any derived
 * token to a literal value (editing a node lower in the tree), dropping its
 * modifiers/references so downstream tokens recompute from the pinned value.
 */
export function buildTokenTree(
  baseOverrides: Partial<Record<Variant, string>> = {},
  tokenOverrides: Record<string, string> = {},
): Record<string, unknown> {
  const color: Record<string, unknown> = {
    $type: 'color',
    white: lit('#FFFFFF'),
    black: lit('#000000'),
    gray: { 100: lit('#EBEBEB') },
  };

  const theme: Record<string, Record<string, ColorToken>> = {};
  for (const [level, scaleLevel] of Object.entries(THEME_LEVELS)) {
    theme[level] = {};
    for (const v of VARIANTS) theme[level][v] = ref(`color.${v}.${scaleLevel}`);
  }

  let btn: Record<string, unknown> = {};
  for (const v of VARIANTS) {
    // Scale + base for this variant.
    const scale: Record<string, ColorToken> = {
      base: lit(baseOverrides[v] ?? BASE_COLORS[v]),
    };
    for (const [level, mix] of SCALE) {
      scale[level] = mix
        ? { $type: 'color', $value: `{color.${v}.base}`, modify: [mix] }
        : ref(`color.${v}.base`);
    }
    color[v] = scale;
    btn = deepMerge(btn, buildButtonTokens(v) as Record<string, unknown>);
  }

  color.theme = theme;
  color.btn = btn;
  // A slice of the nav/tabs colour tokens, so the Tabs in the preview theme too:
  // the active tab's text derives from primary (mirrors tokens/src). Inactive tab
  // text (gray) is left to the global stylesheet, exactly as in the real tokens.
  color.nav = {
    tabs: { base: { link: { active: { text: ref('color.primary.500') } } } },
  };

  const tree = {
    color,
    // The active tab's bottom border also derives from primary in tokens/src, so
    // the underline under the selected tab tracks the primary colour.
    'border-color': {
      nav: { 'tabs-link': { border: { active: ref('color.primary.500') } } },
    },
    ...buildGlobalTokens(),
  };

  // Apply literal pins for individually-edited derived tokens.
  for (const [path, value] of Object.entries(tokenOverrides)) {
    setTokenValue(tree, path, value);
  }
  return tree;
}

/**
 * Non-colour "global" tokens that theme every variant: font family, button font
 * size, border radius and button padding. These mirror the derivation chains in
 * `tokens/src/core/**` — most notably border radius fanning out, through a real
 * `calc()`, into the focus-ring radius (`size.btn.focus.border-radius.base`).
 */
export const SYSTEM_FONT_STACK = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';
export const SERIF_FONT_STACK = 'Georgia, Cambria, "Times New Roman", Times, serif';
export const MONOSPACE_FONT_STACK = 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace';

const dim = (value: string): TokenLeaf => ({ $type: 'dimension', $value: value });
const font = (value: string): TokenLeaf => ({ $type: 'fontFamily', $value: value });

function buildGlobalTokens(): Record<string, unknown> {
  return {
    typography: {
      // -> --pgn-typography-font-family-base (the body font the preview inherits)
      font: { family: { base: font(SYSTEM_FONT_STACK) } },
      btn: {
        font: {
          // Faithful to the repo: the button font-family is `inherit`, so it
          // follows whatever `typography.font.family.base` resolves to.
          // -> --pgn-typography-btn-font-family
          family: font('inherit'),
          // -> --pgn-typography-btn-font-size-{base,sm,lg}
          size: {
            base: dim('1.125rem'),
            sm: dim('.875rem'),
            lg: dim('1.325rem'),
          },
        },
      },
    },
    size: {
      border: { radius: { base: dim('.375rem') } },
      btn: {
        border: { radius: { base: dim('{size.border.radius.base}') } },
        focus: {
          width: dim('2px'),
          // border-gap = focus.width + focus.gap, and focus.gap === focus.width.
          'border-radius': { base: dim('calc({size.btn.border.radius.base} + {spacing.btn.focus.border-gap})') },
        },
      },
    },
    spacing: {
      btn: {
        padding: {
          x: { base: dim('1rem') },
          y: { base: dim('.5625rem') },
        },
        focus: {
          'border-gap': dim('calc({size.btn.focus.width} + {size.btn.focus.width})'),
        },
      },
    },
  };
}

/** A description of a top-level non-colour control and its related tokens. */
export interface GlobalControl {
  path: string;
  label: string;
  kind: 'font' | 'dimension';
  presets?: Array<{ label: string; value: string }>;
  /**
   * Tokens that reference this source (directly or through a `calc()`), so they
   * recompute when it changes.
   */
  derived?: string[];
  /**
   * Tokens in the same family shown for context but that are not derived from
   * this control. Their exact relationship is spelled out by `relatedNote`.
   */
  related?: string[];
  /** Heading for the related group (defaults to "Related — set independently"). */
  relatedLabel?: string;
  /** One-line explanation of how the related tokens relate to this control. */
  relatedNote?: string;
}

export const GLOBAL_CONTROLS: GlobalControl[] = [
  {
    path: 'typography.font.family.base',
    label: 'Font family',
    kind: 'font',
    presets: [
      { label: 'System', value: SYSTEM_FONT_STACK },
      { label: 'Serif', value: SERIF_FONT_STACK },
      { label: 'Monospace', value: MONOSPACE_FONT_STACK },
    ],
    // Buttons and tabs consume `typography.btn.font.family` / `font-family:
    // inherit`, which is the CSS keyword `inherit` — they follow this base font
    // through the cascade rather than a token reference. (That token stays in the
    // compiled output; it just isn't a separately-editable control here.)
  },
  {
    path: 'typography.btn.font.size.base',
    label: 'Button font size',
    kind: 'dimension',
    // sm / lg are independent literals in the token source, not multiples of base.
    related: ['typography.btn.font.size.sm', 'typography.btn.font.size.lg'],
    relatedLabel: 'Related — set independently',
    relatedNote: 'Separate literals in the token source, so they don’t change when the value above does.',
  },
  {
    path: 'size.border.radius.base',
    label: 'Border radius',
    kind: 'dimension',
    derived: ['size.btn.border.radius.base', 'size.btn.focus.border-radius.base'],
  },
  {
    path: 'spacing.btn.padding.x.base',
    label: 'Button padding (horizontal)',
    kind: 'dimension',
  },
  {
    path: 'spacing.btn.padding.y.base',
    label: 'Button padding (vertical)',
    kind: 'dimension',
  },
];

/** Pins the token at a dotted path to a literal value, clearing its modifiers. */
function setTokenValue(tree: Record<string, unknown>, path: string, value: string) {
  const parts = path.split('.');
  let node: Record<string, unknown> = tree;
  for (const part of parts.slice(0, -1)) {
    node = node[part] as Record<string, unknown>;
    if (!node) return;
  }
  const key = parts[parts.length - 1];
  const leaf = node[key] as TokenLeaf | undefined;
  if (leaf && '$value' in leaf) {
    // Preserve the token's $type (colour vs dimension vs fontFamily) so the
    // pinned value keeps compiling correctly; just drop any modifiers.
    node[key] = { $type: leaf.$type, $value: value };
  }
}
