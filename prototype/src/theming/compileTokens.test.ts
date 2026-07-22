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
