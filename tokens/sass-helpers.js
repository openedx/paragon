const path = require('path');
const fs = require('fs');
const chroma = require('chroma-js');

/**
 * Javascript version of bootstrap's color-yiq function. Decides whether to return light color variant or dark one
 * based on contrast value of the input color
 *
 * @param {Object} args
 * @param {Object} args.tokenName - Name of design token, used to log warnings
 * @param {Object} args.color - chroma-js color instance
 * @param {String} args.light - light color variant from ./src/themes/{themeVariant}/global/other.json
 * @param {String} args.dark - dark color variant from ./src/themes/{themeVariant}/global/other.json
 * @param {Number} args.threshold - contrast threshold from ./src/core/global/other.json
 * @param {String} [args.themeVariant] - theme variant name that will be used to find default contrast colors
 *
 * @return chroma-js color instance (one of dark or light variants)
 */
function colorYiq({
  tokenName,
  originalColor,
  light,
  dark,
  threshold,
  themeVariant = 'light',
}) {
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

  const [r, g, b] = originalColor.rgb();
  const yiq = ((r * 299) + (g * 587) + (b * 114)) * 0.001;

  let result = yiq >= contrastThreshold ? chroma(darkColor) : chroma(lightColor);

  const maxAttempts = 10; // maximum number of attempts to darken/brighten color to pass contrast ratio
  if (yiq >= contrastThreshold) {
    // check whether the resulting combination of colors passes a11y contrast ratio of 4:5:1
    // if not - darken resulting color until it does until maxAttempts is reached.
    let numDarkenAttempts = 1;
    while (chroma.contrast(originalColor, result) < 4.5 && numDarkenAttempts <= maxAttempts) {
      result = result.darken(0.1);
      numDarkenAttempts += 1;
      if (numDarkenAttempts === maxAttempts) {
        // eslint-disable-next-line no-console
        console.warn(`WARNING: Failed to darken ${tokenName} to pass contrast ratio of 4.5:1 (Original: ${originalColor.hex()}; Attempted: ${result.hex()}).`);
      }
    }
    return result;
  }

  // check whether the resulting combination of colors passes a11y contrast ratio of 4:5:1
  // if not - brighten resulting color until it does until maxAttempts is reached.
  let numBrightenAttempts = 1;
  while (chroma.contrast(originalColor, result) < 4.5 && numBrightenAttempts <= maxAttempts) {
    result = result.brighten(0.1);
    numBrightenAttempts += 1;
    if (numBrightenAttempts === maxAttempts) {
      // eslint-disable-next-line no-console
      console.warn(`WARNING: Failed to brighten ${tokenName} () to pass contrast ratio of 4.5:1 (Original: ${originalColor.hex()}; Attempted: ${result.hex()}).`);
    }
  }
  return result;
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
