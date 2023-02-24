const path = require('path');
const fs = require('fs');
const chroma = require('chroma-js');

/**
 * Javascript version of bootstrap's color-yiq function. Decides whether to return light color variant or dark one
 * based on contrast value of the input color
 *
 * @param color - chroma-js color instance
 * @param {String} [themeVariant] - theme variant name that will be used to find default contrast colors
 * @param {String} [light] - light color variant from ./src/themes/{themeVariant}/global/other.json
 * @param {String} [dark] - dark color variant from ./src/themes/{themeVariant}/global/other.json
 * @param {Number} [threshold] - contrast threshold from ./src/core/global/other.json
 * @return chroma-js color instance (one of dark or light variants)
 */
function colorYiq(color, light, dark, threshold, themeVariant = 'light') {
  const defaultThresholdFile = fs.readFileSync(path.resolve(__dirname, 'src/core/global', 'other.json'), 'utf8');
  const defaultThreshold = JSON.parse(defaultThresholdFile)['yiq-contrasted-threshold'];

  const defaultColorsFile = fs.readFileSync(path.resolve(__dirname, `src/themes/${themeVariant}/global`, 'other.json'), 'utf8');
  const {
    'yiq-text-dark': defaultDark,
    'yiq-text-light': defaultLight,
  } = JSON.parse(defaultColorsFile);

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
