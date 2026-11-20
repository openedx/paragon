const chroma = require('chroma-js');

const { lighten, darken } = require('../sass-helpers');

const BASE_COLOR = '#0A3055';

describe('lighten', () => {
  it.each([0.35, '0.35'])('should lighten by %p of HSL lightness', (amount) => {
    expect(lighten(chroma(BASE_COLOR), amount).hex()).toBe('#2b8ae6');
  });
});

describe('darken', () => {
  it.each([0.1, '0.1'])('should darken by %p of HSL lightness', (amount) => {
    expect(darken(chroma(BASE_COLOR), amount).hex()).toBe('#051627');
  });
});
