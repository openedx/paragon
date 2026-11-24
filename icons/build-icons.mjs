#!/usr/bin/env node
/**
 * Generates `icons/index.js` and `icons/index.d.ts` from the source SVG files in `icons/svg/`.
 *
 * Every icon becomes one line of `index.js`:
 *
 *   export const Add = /*#__PURE__*\/ icon("Add", ["M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"]);
 *
 * Each icon is its own top-level export marked as pure, so bundlers can drop the icons an app doesn't use.
 * (All icons in one object would make every app bundle every icon.)
 *
 * The child-element encoding is compact:
 *   - a string is a `<path d="..." fill="currentColor" />`, which is what nearly every icon is made of;
 *   - anything else is `[tagName, attributes, ...children]`.
 * An optional third argument holds the `<svg>` attributes that differ from the defaults (e.g. `viewBox`).
 *
 * The generated markup matches what the previous SVGR + Babel pipeline produced:
 *   - `<svg>` always gets width/height 24 and `fill="none"`;
 *   - `fill="#000"` anywhere becomes `fill="currentColor"`;
 *   - `<path>` and `<circle>` always get `fill="currentColor"`;
 *   - props passed to an icon are spread onto the `<svg>` element last, so they override the defaults.
 *
 * Usage: node build-icons.mjs   (run from any directory; run `npm run build` to also copy new MUI/brand icons)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { optimize } from 'svgo';

const ICONS_DIR = path.dirname(fileURLToPath(import.meta.url));
const SVG_DIR = path.join(ICONS_DIR, 'svg');

/** Attributes every icon's `<svg>` gets unless the SVG source says otherwise (only `viewBox` can differ). */
const SVG_DEFAULTS = {
  xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none',
};
/** These `<svg>` attributes are always set to the default value, whatever the SVG source says. */
const FORCED_SVG_ATTRS = new Set(['width', 'height', 'fill']);
/** These elements always get `fill="currentColor"`, so the generated data omits it. */
const FILL_CURRENT_COLOR = new Set(['path', 'circle']);

/**
 * Converts an SVG file name to the icon's PascalCase name, e.g. 'arrow_back' => 'ArrowBack', 'bs-google' => 'BsGoogle',
 * '10k' => '10K'.
 */
function pascalCase(basename) {
  return basename
    .split(/[-_.\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
    .replace(/\d([a-z])/g, (match) => match.toUpperCase());
}

/**
 * JS identifiers can't start with a digit, so names like '5G' are exported as 'Pgn5G'.
 */
function exportNameFor(name) {
  return /^\d/.test(name) ? `Pgn${name}` : name;
}

/** Converts an SVG attribute to its React prop name and value, e.g. `fill-rule="evenodd"` => `fillRule: "evenodd"`. */
function reactAttribute(name, value) {
  let reactName = name === 'class' ? 'className' : name.replace(/[-:](.)/g, (_, chr) => chr.toUpperCase());
  if (name.startsWith('aria-') || name.startsWith('data-')) { reactName = name; }
  let reactValue = value === '#000' ? 'currentColor' : value.replace(/[\t\r\n]+/g, ' ');
  if (!Number.isNaN(value - parseFloat(value))) { reactValue = Number(value); }
  return [reactName, reactValue];
}

function reactAttributes(node, iconFile) {
  return Object.fromEntries(Object.entries(node.attributes).map(([name, value]) => {
    if (name === 'style') {
      throw new Error(`${iconFile}: <${node.name} style="..."> is not supported; use presentation attributes instead.`);
    }
    return reactAttribute(name, value);
  }));
}

/** Encodes one child element of `<svg>` in the compact format described at the top of this file. */
function encodeElement(node, iconFile) {
  const attrs = reactAttributes(node, iconFile);
  if (FILL_CURRENT_COLOR.has(node.name)) { delete attrs.fill; }
  const children = encodeChildren(node, iconFile);
  if (node.name === 'path' && children.length === 0 && Object.keys(attrs).length === 1 && attrs.d) {
    return attrs.d;
  }
  return [node.name, attrs, ...children];
}

function encodeChildren(node, iconFile) {
  return node.children.flatMap((child) => {
    if (child.type === 'element') { return [encodeElement(child, iconFile)]; }
    if (child.type === 'text' && !child.value.trim()) { return []; }
    if (child.type === 'comment') { return []; }
    throw new Error(`${iconFile}: unsupported ${child.type} node inside <${node.name}>.`);
  });
}

/** Optimizes an SVG file with SVGO and returns its root `<svg>` element as an SVGO syntax tree. */
function parseSvg(iconFile) {
  let root;
  optimize(fs.readFileSync(path.join(SVG_DIR, iconFile), 'utf8'), {
    path: iconFile,
    plugins: [
      { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
      // Runs last: grab the optimized syntax tree instead of re-parsing SVGO's string output.
      {
        name: 'captureTree', type: 'full', fn: (tree) => { root = tree; return tree; },
      },
    ],
  });
  const svgElements = root.children.filter((node) => node.type === 'element');
  if (svgElements.length !== 1 || svgElements[0].name !== 'svg') {
    throw new Error(`${iconFile}: expected a single root <svg> element.`);
  }
  return svgElements[0];
}

function buildIcon(iconFile) {
  const name = pascalCase(path.basename(iconFile, '.svg'));
  const svg = parseSvg(iconFile);
  const svgAttrs = {};
  for (const [attr, value] of Object.entries(reactAttributes(svg, iconFile))) {
    if (!FORCED_SVG_ATTRS.has(attr) && SVG_DEFAULTS[attr] !== value) { svgAttrs[attr] = value; }
  }
  const args = [JSON.stringify(name), JSON.stringify(encodeChildren(svg, iconFile))];
  if (Object.keys(svgAttrs).length) { args.push(JSON.stringify(svgAttrs)); }
  return { name, exportName: exportNameFor(name), args };
}

const icons = fs.readdirSync(SVG_DIR)
  .filter((file) => file.endsWith('.svg'))
  .map(buildIcon)
  .sort((a, b) => (a.exportName < b.exportName ? -1 : 1));

const seen = new Map();
for (const { exportName, name } of icons) {
  if (seen.has(exportName)) { throw new Error(`Two SVG files both produce the icon name "${exportName}".`); }
  seen.set(exportName, name);
}

const GENERATED_NOTICE = '// This file is generated by build-icons.mjs from the files in svg/. Do not edit it by hand.';

const js = `${GENERATED_NOTICE}
import { createElement } from 'react';

const SVG_DEFAULTS = ${JSON.stringify(SVG_DEFAULTS)};

/** Creates a React element from the compact format: a string is a <path>, otherwise [tagName, attributes, ...children] */
function el(child) {
  if (typeof child === 'string') {
    return createElement('path', { d: child, fill: 'currentColor' });
  }
  const [type, attrs, ...children] = child;
  const props = (type === 'path' || type === 'circle') ? { ...attrs, fill: 'currentColor' } : attrs;
  return createElement(type, props, ...children.map(el));
}

/** Creates an icon component. Props are spread onto the <svg> element, overriding the defaults. */
function icon(name, children, svgAttrs) {
  const Icon = (props) => createElement('svg', { ...SVG_DEFAULTS, ...svgAttrs, ...props }, ...children.map(el));
  Icon.displayName = \`Svg\${name}\`;
  Object.defineProperty(Icon, 'name', { value: Icon.displayName });
  return Icon;
}

${icons.map(({ exportName, args }) => `export const ${exportName} = /*#__PURE__*/ icon(${args.join(', ')});`).join('\n')}
`;

const dts = `${GENERATED_NOTICE}
import type { FC } from 'react';
import type * as allIcons from './index';

/** A Paragon icon: a React component rendering an inline <svg>. Props are passed through to the <svg> element. */
type Icon = FC<any>;

${icons.map(({ exportName }) => `export declare const ${exportName}: Icon;`).join('\n')}

/** The name of any Paragon icon, e.g. 'ArrowBack' */
export type IconName = keyof typeof allIcons;

// Only the declarations above marked \`export\` are exported (e.g. not \`Icon\`).
export {};
`;

fs.writeFileSync(path.join(ICONS_DIR, 'index.js'), js);
fs.writeFileSync(path.join(ICONS_DIR, 'index.d.ts'), dts);
console.log(`Generated ${icons.length} icons in ${path.relative(process.cwd(), ICONS_DIR) || '.'}/index.js`);
