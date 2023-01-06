const path = require('path');
const fs = require('fs');
const chroma = require('chroma-js');

/**
 * Javascript version of bootstrap's color-yiq function. Decides whether to return light color variant or dark one
 * based on contrast value of the input color
 *
 * @param color - chroma-js color instance
 * @param {String} [light] - light color variant, defaults to 'yiq-text-light' from ./src/global/other.json
 * @param {String} [dark] - dark color variant, defaults to 'yiq-text-dark' from ./src/global/other.json
 * @param {Number} [threshold] - contrast threshold, defaults to 'yiq-contrasted-threshold'
 * from ./src/global/other.json
 * @return chroma-js color instance (one of dark or light variants)
 */
function colorYiq(color, light, dark, threshold) {
  const defaultsFile = fs.readFileSync(path.resolve(__dirname, 'src', 'global', 'other.json'), 'utf8');
  const defaults = JSON.parse(defaultsFile);

  const {
    'yiq-text-dark': defaultDark,
    'yiq-text-light': defaultLight,
    'yiq-contrasted-threshold': defaultThreshold,
  } = defaults;

  const contrastThreshold = threshold || defaultThreshold;
  const lightColor = light || defaultLight;
  const darkColor = dark || defaultDark;

  const [r, g, b] = color.rgb();
  const yiq = ((r * 299) + (g * 587) + (b * 114)) * 0.001;

  if (yiq >= contrastThreshold) {
    return chroma(darkColor);
  }

  return chroma(lightColor);
}

/**
 * Overrides chroma-js's lighten / darken functions to behave the same way SASS functions do.
 */
const lighten = (color, hslPercent) => color.set('hsl.l', color.get('hsl.l') + hslPercent);
const darken = (color, hslPercent) => lighten(color, -hslPercent);

module.exports = {
  colorYiq,
  darken,
  lighten,
};
