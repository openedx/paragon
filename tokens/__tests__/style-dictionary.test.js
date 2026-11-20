const { colorTransform } = require('../style-dictionary');

describe('colorTransform', () => {
  it('should apply a lighten modifier whose amount is a string, as in the token JSON files', () => {
    const token = {
      name: 'color-form-control-range-thumb-bg-active',
      $value: '#0A3055',
      original: { $value: '{color.bg.active}' },
      modify: [{ type: 'lighten', amount: '0.35' }],
    };

    expect(colorTransform(token)).toBe('#2B8AE6FF');
  });
});
