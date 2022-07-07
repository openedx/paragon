const path = require('path');

function humanizeNumber(numString){
  const ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
                'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
                'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  const num = parseInt(numString);

  if (num < 20) {
    return ones[num];
  }

  if (numString.length === 2) {
    if (numString.endsWith('0')) {
      return tens[numString[0]];
    }
    return `${tens[numString[0]]}${ones[numString[1]]}`;
  }

  if (num === 360) {
    return 'ThreeSixty';
  }

  if (num === 123) {
    return 'OneTwoThree';
  }
}

/**
 * Checks whether SVG name starts with number, and if it does - replace number with humanized string
 * (e.g. '11M' => 'ElevenM'), only 2-digit numbers are fully supported, (e.g. '11111M' would become 'Eleven111M'),
 * and only two cases for 3-digit numbers are covered (360 and 123).
 *
 * The reason for this is that material-icons repository from where we copy icons contains icons with names like
 * 5G, 2K etc., which by default transforms to 'export { default as 5G } from './5G'' which is invalid js
 * (component name cannot start with number), this function will transform this export to
 * 'export { default as FiveG } from './5G'', which is valid.
 * Only two icons have 3 digits in them, so no need to fully support conversion to words for such numbers.
 *
 * @param {string} basename - name of the SVG component.
 * @returns {string} - formatted name of the SVG component.
 */
function getComponentName(basename) {
  if (!isNaN(basename.charAt(0))) {
    if (basename.length > 1 && !isNaN(basename.charAt(1))) {
      if (basename.length > 2 && !isNaN(basename.charAt(2))) {
        return `${humanizeNumber(basename.slice(0, 3))}${basename.slice(3)}`;
      } else {
        return `${humanizeNumber(basename.slice(0, 2))}${basename.slice(2)}`;
      }
    } else {
      return `${humanizeNumber(basename.charAt(0))}${basename.slice(1)}`;
    }
  }
  return basename;
}

module.exports = {
  "icon": false,
  "expandProps": "end",
  "replaceAttrValues": {
    "#000": "currentColor"
  },
  "ext": "jsx",
  indexTemplate: filePaths => {
    const exportEntries = filePaths.map((filePath) => {
      const basename = path.basename(filePath, path.extname(filePath));
      return `export { default as ${getComponentName(basename)} } from './${basename}';`
    })
    return exportEntries.join('\n')
  },
  svgoConfig: {
    plugins: {
      removeViewBox: false,
    },
  },
};
