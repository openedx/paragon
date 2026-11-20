const { inlineRawValues } = require('../utils');

describe('inlineRawValues', () => {
  it('should return the tokens as they are when there is no raw group', () => {
    const tokens = { color: { white: { $value: '#FFFFFF' } } };

    expect(inlineRawValues(tokens)).toBe(tokens);
  });

  it('should inline raw values, including modify parameters, and drop the raw group', () => {
    const tokens = {
      raw: { color: { base: { $value: '#0A3055' }, target: { $value: '#FFFFFF' } } },
      color: {
        primary: {
          base: { $value: '{raw.color.base}' },
          100: {
            $value: '{color.primary.base}',
            modify: [{ type: 'mix', otherColor: '{raw.color.target}', amount: '0.94' }],
          },
        },
      },
    };

    expect(inlineRawValues(tokens)).toEqual({
      color: {
        primary: {
          base: { $value: '#0A3055' },
          100: {
            $value: '{color.primary.base}',
            modify: [{ type: 'mix', otherColor: '#FFFFFF', amount: '0.94' }],
          },
        },
      },
    });
  });

  it('should follow references between raw values', () => {
    const tokens = {
      raw: { first: { $value: '{raw.second}' }, second: { $value: '#000000' } },
      color: { black: { $value: '{raw.first}' } },
    };

    expect(inlineRawValues(tokens).color.black.$value).toBe('#000000');
  });

  it('should only replace strings that are exactly a raw reference', () => {
    const tokens = {
      raw: { width: { $value: '1px' } },
      border: { $value: '{raw.width} solid' },
    };

    expect(inlineRawValues(tokens).border.$value).toBe('{raw.width} solid');
  });

  it('should throw on an unknown raw value', () => {
    const tokens = {
      raw: { color: { base: { $value: '#0A3055' } } },
      color: { primary: { $value: '{raw.color.missing}' } },
    };

    expect(() => inlineRawValues(tokens)).toThrow('[Paragon] Unresolved raw value: {raw.color.missing}');
  });

  it('should throw on circular raw references', () => {
    const tokens = {
      raw: { first: { $value: '{raw.second}' }, second: { $value: '{raw.first}' } },
      color: { primary: { $value: '{raw.first}' } },
    };

    expect(() => inlineRawValues(tokens)).toThrow('[Paragon] Circular or too deep raw reference: {raw.first}');
  });
});
