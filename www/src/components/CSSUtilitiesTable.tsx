import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { DataTable } from '~paragon-react';

export function convertHexToRgb(hexColor: string, startIndex: number, endIndex: number) {
  const RADIX_VALUE = 16;
  return parseInt(hexColor.substring(startIndex, endIndex), RADIX_VALUE);
}

/**
 * Decides whether to return light color variant or dark one based on contrast value of the input color
 */
export function getInverseColorContrast(hexColor: string) {
  const SHORT_HEX_CODE_LENGTH = 3;
  const CONTRAST_THRESHOLD = 128;
  const BLACK_COLOR = '#000';
  const WHITE_COLOR = '#FFF';
  let hexColorValue = hexColor;

  if (hexColorValue.includes('#')) {
    hexColorValue = hexColor.slice(1);
  }

  // conversion of a three-digit color HEX code to a six-digit one is necessary for transform to RGB
  if (hexColorValue.length === SHORT_HEX_CODE_LENGTH) {
    hexColorValue = hexColor.split('').map((hex) => hex + hex).join('');
  }

  const r = convertHexToRgb(hexColorValue, 0, 2);
  const g = convertHexToRgb(hexColorValue, 2, 4);
  const b = convertHexToRgb(hexColorValue, 4, 8);

  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

  return (yiq >= CONTRAST_THRESHOLD) ? BLACK_COLOR : WHITE_COLOR;
}

export interface ICSSUtilitiesTable {
  selectors: Array<{
    selector: string,
    declarations: Array<string>,
  }>,
}

function CSSUtilitiesTable({ selectors }: ICSSUtilitiesTable) {
  return (
    <DataTable
      data={selectors.map(({ selector, declarations }) => ({
        selector: <code style={{ fontSize: '14px' }}>.{selector}</code>,
        declarations: (
          <div>
            {declarations.map(declaration => {
              const transformDeclaration = declaration.split(' ');
              const nameProperty = transformDeclaration[0];
              const colorValue = transformDeclaration[1];
              const importantRule = transformDeclaration[2];

              return (
                <code
                  style={{ fontSize: '14px' }}
                  key={declaration}
                  className="mb-0 text-muted"
                >
                  {(nameProperty.includes('color:') && (colorValue.includes('#'))) ? (
                    <>
                      {`${nameProperty} `}
                      <mark style={{ backgroundColor: colorValue, color: getInverseColorContrast(colorValue) }}>
                        {colorValue}
                      </mark>
                      {` ${importantRule}`}
                    </>
                  ) : declaration}
                </code>
              );
            })}
          </div>
        ),
      }))}
      itemCount={selectors.length}
      columns={[
        {
          Header: 'Utility Class Name',
          accessor: 'selector',
        },
        {
          Header: 'Styles',
          accessor: 'declarations',
        },
      ]}
    >
      <DataTable.Table />
    </DataTable>
  );
}

CSSUtilitiesTable.propTypes = {
  selectors: PropTypes.arrayOf(
    PropTypes.shape({
      selector: PropTypes.string,
      declarations: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

CSSUtilitiesTable.defaultProps = {
  selectors: [],
};

export default CSSUtilitiesTable;
