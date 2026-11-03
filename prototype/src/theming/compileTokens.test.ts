import { describe, it, expect } from 'vitest';
import { compileTokens } from './compileTokens';

describe('compileTokens (browser Style Dictionary)', () => {
  it('reproduces the shipped brand & primary button tokens', async () => {
    const { vars } = await compileTokens();
    // Brand base #9D0054 -> white text (color-yiq), border == bg.
    expect(vars['--pgn-color-btn-bg-brand']).toBe('#9D0054FF');
    expect(vars['--pgn-color-btn-text-brand']).toBe('#FFFFFFFF');
    expect(vars['--pgn-color-btn-border-brand']).toBe('#9D0054FF');
    // Primary base #0A3055 -> white text.
    expect(vars['--pgn-color-btn-bg-primary']).toBe('#0A3055FF');
    expect(vars['--pgn-color-btn-text-primary']).toBe('#FFFFFFFF');
    // Scale midpoints resolve to the base.
    expect(vars['--pgn-color-brand-500']).toBe('#9D0054FF');
  });

  it('re-derives text colour when the base flips light', async () => {
    const { vars } = await compileTokens({ brand: '#FFEE88' });
    expect(vars['--pgn-color-btn-bg-brand']).toBe('#FFEE88FF');
    // Light background -> dark text.
    expect(vars['--pgn-color-btn-text-brand']?.toUpperCase()).toContain('454545');
  });
});

describe('non-colour global tokens', () => {
  it('passes through and resolves references inside calc()', async () => {
    const { vars } = await compileTokens();
    expect(vars['--pgn-typography-font-family-base']).toContain('apple-system');
    expect(vars['--pgn-typography-btn-font-family']).toBe('inherit');
    expect(vars['--pgn-typography-btn-font-size-base']).toBe('1.125rem');
    expect(vars['--pgn-size-btn-border-radius-base']).toBe('.375rem');
    expect(vars['--pgn-size-btn-focus-border-radius-base']).toBe('calc(.375rem + calc(2px + 2px))');
  });

  it('re-derives the focus radius when the base border radius changes', async () => {
    const { vars } = await compileTokens({}, { 'size.border.radius.base': '1rem' });
    expect(vars['--pgn-size-btn-border-radius-base']).toBe('1rem');
    expect(vars['--pgn-size-btn-focus-border-radius-base']).toBe('calc(1rem + calc(2px + 2px))');
  });
});

describe('nav / tabs theming', () => {
  it('derives the active tab text colour from primary', async () => {
    const { vars } = await compileTokens();
    expect(vars['--pgn-color-nav-tabs-base-link-active-text']).toBe('#0A3055FF');
  });

  it('recolours the active tab text when $primary changes', async () => {
    const { vars } = await compileTokens({ primary: '#7A1FA2' });
    expect(vars['--pgn-color-nav-tabs-base-link-active-text']).toBe('#7A1FA2FF');
  });
});

describe('nav tabs active border', () => {
  it('derives the active tab border from primary and tracks it', async () => {
    const base = await compileTokens();
    expect(base.vars['--pgn-border-color-nav-tabs-link-border-active']).toBe('#0A3055FF');
    const themed = await compileTokens({ primary: '#7A1FA2' });
    expect(themed.vars['--pgn-border-color-nav-tabs-link-border-active']).toBe('#7A1FA2FF');
  });
});
