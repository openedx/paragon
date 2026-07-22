import {
  useEffect, useMemo, useRef, useState,
  type CSSProperties,
} from 'react';

import { Button, ButtonGroup } from '../Button';
import {
  BASE_COLORS, VARIANTS, BASE_TOKEN_PATH, GLOBAL_CONTROLS, type Variant,
} from './tokenTree';
import { compileTokens, type CompileResult } from './compileTokens';
import styles from './designTokens.module.css';

const SOURCE_LABEL: Record<Variant, string> = { brand: '$brand', primary: '$primary' };

function isColorValue(value: string): boolean {
  const v = value.trim();
  return /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(v) || /^rgba?\(/i.test(v);
}

function toHex(value: string): string {
  const v = value.trim();
  if (/^#[0-9a-f]{6}([0-9a-f]{2})?$/i.test(v)) return v.slice(0, 7);
  if (/^#[0-9a-f]{3,4}$/i.test(v)) {
    return `#${v.slice(1, 4).split('').map((c) => c + c).join('')}`;
  }
  return '#000000';
}

/** Splits a variant's derived tokens into ordered, labelled groups for the tree. */
function groupsForVariant(paths: string[], v: Variant) {
  const isForVariant = (p: string) => p.endsWith(`.${v}`) || p.endsWith(`.outline-${v}`);
  const scale = paths
    .filter((p) => p.startsWith(`color.${v}.`) && !p.endsWith('.base'))
    .sort();
  const theme = paths
    .filter((p) => p.startsWith('color.theme.') && p.endsWith(`.${v}`))
    .sort();
  const button = paths
    .filter((p) => p.startsWith('color.btn.') && isForVariant(p))
    .sort();
  return [
    { label: 'Palette scale', paths: scale },
    { label: 'Theme aliases', paths: theme },
    { label: 'Button tokens', paths: button },
  ].filter((g) => g.paths.length);
}

/**
 * Design-tokens / theming playground.
 *
 * The two source colours (`$brand`, `$primary`) are the prominent controls; every
 * other token is *derived* from them by Style Dictionary, which recompiles in the
 * browser on every edit (see compileTokens.ts). The derived tokens are listed in a
 * collapsible tree and are themselves editable — pinning one to a literal value
 * cascades to everything downstream. The compiled `--pgn-*` variables are applied
 * to the preview so the buttons and button groups re-theme live.
 */
export function DesignTokensPlayground() {
  const [baseOverrides, setBaseOverrides] = useState<Partial<Record<Variant, string>>>({});
  const [tokenOverrides, setTokenOverrides] = useState<Record<string, string>>({});
  const [result, setResult] = useState<CompileResult | null>(null);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const runId = useRef(0);

  useEffect(() => {
    const id = ++runId.current;
    compileTokens(baseOverrides, tokenOverrides).then((res) => {
      // Ignore results from superseded compiles (keeps the latest edit winning).
      if (id === runId.current) setResult(res);
    });
  }, [baseOverrides, tokenOverrides]);

  const valueByPath = useMemo(() => {
    const map: Record<string, string> = {};
    for (const t of result?.tokens ?? []) map[t.path] = t.value;
    return map;
  }, [result]);

  const previewStyle = (result?.vars ?? {}) as unknown as CSSProperties;
  const hasOverrides = Object.keys(baseOverrides).length > 0 || Object.keys(tokenOverrides).length > 0;

  const setToken = (path: string, value: string) => setTokenOverrides((p) => ({ ...p, [path]: value }));
  const resetToken = (path: string) => setTokenOverrides((p) => {
    const next = { ...p };
    delete next[path];
    return next;
  });
  const resetAll = () => { setBaseOverrides({}); setTokenOverrides({}); };

  const derivedPaths = result?.tokens.map((t) => t.path) ?? [];

  /** One editable derived/sibling token row (colour swatch when the value is a colour). */
  const renderTokenRow = (path: string, label?: string) => {
    const value = tokenOverrides[path] ?? valueByPath[path] ?? '';
    const overridden = path in tokenOverrides;
    const colorish = isColorValue(value);
    return (
      <div key={path} className={`${styles.tokenRow} ${overridden ? styles.overridden : ''}`}>
        {colorish ? (
          <input
            type="color"
            className={styles.tokenSwatch}
            aria-label={`${path} colour`}
            value={toHex(value)}
            onChange={(e) => setToken(path, e.target.value)}
          />
        ) : (
          <span className={styles.tokenSwatchStatic} style={{ background: colorish ? value : 'transparent' }} />
        )}
        <span className={styles.tokenName} title={path}>{label ?? path.replace(/^color\./, '')}</span>
        <input
          type="text"
          className={styles.tokenValue}
          aria-label={path}
          spellCheck={false}
          value={value}
          onChange={(e) => setToken(path, e.target.value)}
        />
        <button
          type="button"
          className={styles.resetRow}
          aria-label={`Reset ${path}`}
          title="Reset to derived value"
          style={{ visibility: overridden ? 'visible' : 'hidden' }}
          onClick={() => resetToken(path)}
        >
          ↺
        </button>
      </div>
    );
  };

  return (
    <div className={styles.root}>
      {/* Live preview — the compiled tokens are applied here. `sb-unstyled` opts
          out of Storybook's docs typography reset, which otherwise forces its own
          font-family onto the buttons and defeats the `font-family: inherit` chain
          the font-family token relies on. */}
      <div className={`${styles.preview} sb-unstyled`} style={previewStyle}>
        <div className={styles.previewSection}>
          <h4>Body text</h4>
          {/* Uses the base font family & size tokens directly, so changing the
              Font family control is immediately visible here. */}
          <div className={styles.proseSample}>
            <h3>Themeable by design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. This heading and
              paragraph render in <code>typography.font.family.base</code> — the same source
              token the buttons inherit — so switching it to Serif or Monospace re-typefaces
              everything at once.
            </p>
          </div>
        </div>
        <div className={styles.previewSection}>
          <h4>Buttons</h4>
          <div className={styles.previewRow}>
            <Button variant="brand">Brand</Button>
            <Button variant="outline-brand">Outline brand</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="outline-primary">Outline primary</Button>
          </div>
        </div>
        <div className={styles.previewSection}>
          <h4>Sizes &amp; states</h4>
          <div className={styles.previewRow}>
            <Button variant="brand" size="sm">Small</Button>
            <Button variant="brand" size="md">Medium</Button>
            <Button variant="brand" size="lg">Large</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </div>
        <div className={styles.previewSection}>
          <h4>Button group</h4>
          <div className={styles.previewRow}>
            <ButtonGroup>
              <Button variant="outline-primary">Left</Button>
              <Button variant="outline-primary">Middle</Button>
              <Button variant="outline-primary">Right</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>

      {/* Controls. */}
      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <h3 className={styles.panelTitle}>Design tokens</h3>
          <button type="button" className={styles.resetAll} onClick={resetAll} disabled={!hasOverrides}>
            Reset all
          </button>
        </div>
        <p className={styles.hint}>
          Set a source colour below; Style Dictionary re-derives the palette scale,
          theme aliases and button tokens live. Expand a source to edit its derived
          tokens directly.
        </p>

        {VARIANTS.map((v) => {
          const baseValue = baseOverrides[v] ?? BASE_COLORS[v];
          const groups = groupsForVariant(derivedPaths, v);
          const isOpen = !!open[v];
          const derivedCount = groups.reduce((n, g) => n + g.paths.length, 0);
          return (
            <div key={v} className={styles.card}>
              <div className={styles.baseControl}>
                <input
                  type="color"
                  className={styles.baseSwatch}
                  aria-label={`${SOURCE_LABEL[v]} colour`}
                  value={toHex(baseValue)}
                  onChange={(e) => setBaseOverrides((p) => ({ ...p, [v]: e.target.value }))}
                />
                <span className={styles.baseMeta}>
                  <span className={styles.baseName}>{SOURCE_LABEL[v]}</span>
                  <span className={styles.baseToken}>{BASE_TOKEN_PATH[v]}</span>
                </span>
                <input
                  type="text"
                  className={styles.baseValueInput}
                  aria-label={`${SOURCE_LABEL[v]} value`}
                  spellCheck={false}
                  value={baseValue}
                  onChange={(e) => setBaseOverrides((p) => ({ ...p, [v]: e.target.value }))}
                />
              </div>

              <button
                type="button"
                className={styles.disclosure}
                aria-expanded={isOpen}
                onClick={() => setOpen((p) => ({ ...p, [v]: !p[v] }))}
              >
                <span className={`${styles.caret} ${isOpen ? styles.caretOpen : ''}`}>▶</span>
                Derived tokens
                <span className={styles.count}>{derivedCount}</span>
              </button>

              {isOpen && (
                <div className={styles.derived}>
                  {groups.map((group) => (
                    <div key={group.label}>
                      <div className={styles.groupHeader}>{group.label}</div>
                      {group.paths.map((path) => renderTokenRow(path))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <h3 className={styles.panelTitle}>Typography, sizing &amp; spacing</h3>
        <p className={styles.hint}>
          Global tokens that theme every variant. Border radius fans out — through
          a real <code>calc()</code> — into the focus-ring radius.
        </p>

        {GLOBAL_CONTROLS.map((control) => {
          const value = tokenOverrides[control.path] ?? valueByPath[control.path] ?? '';
          const overridden = control.path in tokenOverrides;
          const isOpen = !!open[control.path];
          const derived = control.derived ?? [];
          const related = control.related ?? [];
          const detailCount = derived.length + related.length;
          return (
            <div key={control.path} className={styles.card}>
              <div className={styles.baseControl}>
                {control.kind === 'font' && (
                  <span className={styles.fontPreview} style={{ fontFamily: value }} aria-hidden>Aa</span>
                )}
                <span className={styles.baseMeta}>
                  <span className={styles.baseName}>{control.label}</span>
                  <span className={styles.baseToken}>{control.path}</span>
                </span>
                {overridden && (
                  <button
                    type="button"
                    className={styles.resetRow}
                    aria-label={`Reset ${control.path}`}
                    title="Reset to default"
                    onClick={() => resetToken(control.path)}
                  >
                    ↺
                  </button>
                )}
              </div>

              <div className={styles.tokenRow}>
                <input
                  type="text"
                  className={styles.valueInputWide}
                  aria-label={control.label}
                  spellCheck={false}
                  value={value}
                  onChange={(e) => setToken(control.path, e.target.value)}
                />
              </div>

              {control.presets && (
                <div className={styles.presets}>
                  {control.presets.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      className={styles.preset}
                      onClick={() => setToken(control.path, preset.value)}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              )}

              {detailCount > 0 && (
                <>
                  <button
                    type="button"
                    className={styles.disclosure}
                    aria-expanded={isOpen}
                    onClick={() => setOpen((p) => ({ ...p, [control.path]: !p[control.path] }))}
                  >
                    <span className={`${styles.caret} ${isOpen ? styles.caretOpen : ''}`}>▶</span>
                    Related tokens
                    <span className={styles.count}>{detailCount}</span>
                  </button>
                  {isOpen && (
                    <div className={styles.derived}>
                      {derived.length > 0 && (
                        <div>
                          <div className={styles.groupHeader}>Derived — track the value above</div>
                          {derived.map((path) => renderTokenRow(path))}
                        </div>
                      )}
                      {related.length > 0 && (
                        <div>
                          <div className={styles.groupHeader}>
                            {control.relatedLabel ?? 'Related — set independently'}
                          </div>
                          {control.relatedNote && (
                            <p className={styles.groupNote}>{control.relatedNote}</p>
                          )}
                          {related.map((path) => renderTokenRow(path))}
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DesignTokensPlayground;
