import React from 'react';

/**
 * Convert hex value to [r, g, b] array, hex value must be a string of 6 characters without leading #.
 */
function convertHexToRgb(hexColor: string) {
  if (hexColor.length !== 6) {
    throw new Error('Invalid HEX color, it must contain only 6 digits and be without starting #.');
  }
  return hexColor.match(/.{1,2}/g)!.map(rgbPart => parseInt(rgbPart, 16));
}

/**
 * Decides whether to return light color variant or dark one based on contrast value of the input color
 */
function getInverseColorContrast(color: string) {
  const CONTRAST_THRESHOLD = 128;
  const BLACK_COLOR = '#000';
  const WHITE_COLOR = '#FFF';

  let r;
  let g;
  let b;

  if (color.startsWith('#')) {
    let hexColorValue = color.slice(1);

    // conversion of a 3-digit color HEX code to a 6-digit one is necessary for transform to RGB
    if (hexColorValue.length === 3) {
      hexColorValue = hexColorValue.split('').map((hex) => hex + hex).join('');
    }

    [r, g, b] = convertHexToRgb(hexColorValue);
  } else if (color.startsWith('rgb')) {
    [r, g, b] = color.match(/(?<=rgba?\()(.*)(?=\))/g)![0].split(',').map(Number);
  } else {
    throw new Error('Invalid color - expected HEX or RGB/RGBA format.');
  }

  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

  return (yiq >= CONTRAST_THRESHOLD) ? BLACK_COLOR : WHITE_COLOR;
}

function containsColorValue(value: string) {
  return value.includes('rgb') || value.includes('#');
}

export function containsCSSVariable(value: string) {
  return value.includes('var(');
}

/**
 * Loop over CSS declaration string, if color value is found - add respective background color to it.
 */
export function colorCSSDeclaration(value: string) {
  if (!containsColorValue(value)) {
    return value;
  }

  // This is a very ugly code to be able to split strings like '1px solid rgb(1, 2, 3)' into
  // ['1px', 'solid', 'rgb(1, 2, 3)'].
  // TODO try to split with regex
  return value.split(' ').map((item, index, originalArray) => {
    if (item.startsWith('#')) {
      return (
        <mark key={item} className="mr-1" style={{ backgroundColor: item, color: getInverseColorContrast(item) }}>
          {item}
        </mark>
      );
    }

    if (item.startsWith('rgb')) {
      const elementsToCombineCount = item[3] === 'a' ? 3 : 2;
      const val = originalArray.slice(index, index + elementsToCombineCount + 1).join(' ');

      for (let i = 1; i <= elementsToCombineCount; i++) {
        // eslint-disable-next-line no-param-reassign
        delete originalArray[index + i];
      }

      return (
        <mark key={val} className="mr-1" style={{ backgroundColor: val, color: getInverseColorContrast(val) }}>
          {val}
        </mark>
      );
    }

    return <span key={item} className="mr-1">{item}</span>;
  });
}
