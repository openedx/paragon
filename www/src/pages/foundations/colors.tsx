import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container, DataTable } from '~paragon-react';
import SEO from '../../components/SEO';
import Layout from '../../components/PageLayout';
import { SettingsContext } from '../../context/SettingsContext';
import { CodeCell } from '../../components/TableCells';

const utilityClasses = {
  bg: (color: string, level: number) => (level ? `bg-${color}-${level}` : `bg-${color}`),
  border: (color: string, level: number) => (level ? `border-${color}-${level}` : `border-${color}`),
  text: (color: string, level: number) => (level ? `text-${color}-${level}` : `text-${color}`),
};

export interface IColors {
  themeName: string,
  color: string,
  unusedLevels: number[],
}

const colors: IColors[] = [
  { themeName: 'gray', color: 'gray', unusedLevels: [] },
  { themeName: 'primary', color: 'blue', unusedLevels: [] },
  { themeName: 'brand', color: 'blue', unusedLevels: [] },
  { themeName: 'light', color: 'light', unusedLevels: [] },
  { themeName: 'dark', color: 'dark', unusedLevels: [] },
  { themeName: 'success', color: 'green', unusedLevels: [] },
  { themeName: 'info', color: 'teal', unusedLevels: [] },
  { themeName: 'danger', color: 'red', unusedLevels: [] },
  { themeName: 'warning', color: 'yellow', unusedLevels: [] },
];

const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const selectorColors: Record<string, string | null> = {};

function parseColors(cssSelectors: { selector: string; declarations: string; }[]) {
  const colorsAreParsed = Object.keys(selectorColors).length !== 0;
  if (colorsAreParsed) { return; }

  cssSelectors.forEach(({ selector, declarations }) => {
    // All declarations fit this shape: "background-color: #fff !important;"
    const declarationFragments = declarations[0].split(' ');
    selectorColors[selector] = declarationFragments.length
      ? declarationFragments[1]
      : null;
  });
}

export type CSSStyleDeclarationType = CSSStyleDeclaration | null;

export interface ISwatch {
  name: string,
  colorClassName: string,
  isUnused?: boolean,
  styles: CSSStyleDeclarationType,
}

function Swatch({
  name, colorClassName, isUnused, styles,
}: ISwatch) {
  const computedValue = styles?.getPropertyValue(name);

  return (
    <div className="d-flex align-items-center mb-2">
      <div
        className={classNames('p-3 mr-2 rounded', colorClassName, {
          'unused-level': isUnused,
        })}
      />
      <div style={{ lineHeight: 1 }} className="small">
        <code className="mb-0 d-block text-lowercase text-dark-700">
          {`var(${name})`}
        </code>

        <code style={{ fontSize: '65%' }} className="text-muted">
          {computedValue}
        </code>
      </div>
    </div>
  );
}

Swatch.propTypes = {
  name: PropTypes.string.isRequired,
  colorClassName: PropTypes.string.isRequired,
  isUnused: PropTypes.bool,
};

Swatch.defaultProps = {
  isUnused: false,
};

const renderColorRamp = (themeName: string, unusedLevels: number[], styles: CSSStyleDeclarationType) => (
  <div
    key={`${themeName}`}
  >
    <p className="h5">{themeName}</p>
    {levels.map(level => (
      <Swatch
        key={`${themeName}-${level}`}
        name={`--pgn-color-${themeName}-${level}`}
        colorClassName={utilityClasses.bg(themeName, level)}
        isUnused={unusedLevels.includes(level)}
        styles={styles}
      />
    ))}
  </div>
);

export interface IColorsPage {
  data: {
    allCssUtilityClasses: {
      nodes: [],
    },
  },
}

// eslint-disable-next-line react/prop-types
export default function ColorsPage({ data }: IColorsPage) {
  const { settings } = useContext(SettingsContext);
  const styles = typeof window !== 'undefined' ? getComputedStyle(document.body) : null;

  parseColors(data.allCssUtilityClasses.nodes); // eslint-disable-line react/prop-types

  return (
    <Layout isAutoToc>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO title="Colors" />
      <Container size={settings.containerWidth} className="py-5">
        <h1>Colors</h1>
        <div className="color-palette mb-3">
          {colors
            .slice(0, 3)
            .map(({ themeName, unusedLevels }) => renderColorRamp(themeName, unusedLevels, styles))}
          {colors
            .slice(3)
            .map(({ themeName, unusedLevels }) => renderColorRamp(themeName, unusedLevels, styles))}
          <div>
            <p className="h5">accents</p>

            <Swatch name="--pgn-color-accent-a" colorClassName="bg-accent-a" styles={styles} />
            <Swatch name="--pgn-color-accent-b" colorClassName="bg-accent-b" styles={styles} />
          </div>
        </div>

        <h3>CSS Color Usage</h3>

        <h4>Variable name</h4>
        <code className="d-block mb-4 lead bg-gray-100 p-3">
          {'// var(--pgn-color-name-level) '}
          <br />
          var(--pgn-color-primary-100)
          <br />
          var(--pgn-color-primary-200)
          <br />
          var(--pgn-color-brand-100)
          <br />
          var(--pgn-color-brand-200)
        </code>

        <h4>With default value</h4>
        <p>
          Using a default value in CSS variables allows to set a default value for a variable,
          which will be used if the primary value of the variable is not defined or not available.
        </p>
        <code className="d-block mb-4 lead bg-gray-100 p-3">
          {'// var(--pgn-color-name-level), default variable '}
          <br />
          var(--pgn-color-brand-100, var(--pgn-color-primary-200))
        </code>

        <h3>CSS Class Utilities</h3>
        <p>
          Utility classes for backgrounds, borders, and text colors follow the
          format below:
        </p>
        <p>
          <code>{'.{use}-{color}-{level}'}</code>
        </p>
        <div className="w-sm-50 mb-4">
          <DataTable
            itemCount={3}
            data={colors.map(({ themeName }, index) => ({
              use: Object.keys(utilityClasses)[index],
              color: themeName,
              level: levels[index],
            }))}
            columns={[
              { Header: 'Use', accessor: 'use', Cell: CodeCell },
              { Header: 'Color', accessor: 'color', Cell: CodeCell },
              { Header: 'Level', accessor: 'level', Cell: CodeCell },
            ]}
          >
            <DataTable.Table />
          </DataTable>
        </div>

        <h3>Background Fills</h3>
        <div className="d-flex flex-wrap">
          {colors.map(({ themeName }) => (
            <div key={themeName} style={{ flexBasis: '33%' }}>
              <div className="mr-3 mb-3">
                <div
                  className={classNames(
                    'p-3 rounded',
                    utilityClasses.bg(themeName, 100),
                  )}
                >
                  <code style={{ color: 'inherit' }}>
                    .{utilityClasses.bg(themeName, 100)}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3>Borders & Lines</h3>
        <div className="d-flex flex-wrap">
          {colors.map(({ themeName }) => (
            <div key={themeName} style={{ flexBasis: '33%' }}>
              <div className="mr-3 mb-3">
                <div
                  className={classNames(
                    'p-3 rounded border',
                    utilityClasses.border(themeName, 200),
                  )}
                >
                  <code style={{ color: 'inherit' }}>
                    .{utilityClasses.border(themeName, 200)}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3>Icons & Semantic Lines</h3>
        <div className="d-flex flex-wrap">
          {colors.map(({ themeName }) => (
            <div key={themeName} style={{ flexBasis: '33%' }}>
              <div className="mr-3 mb-3">
                <div
                  className={classNames(
                    'p-3 rounded border',
                    utilityClasses.border(themeName, 300),
                  )}
                >
                  <code style={{ color: 'inherit' }}>
                    .{utilityClasses.border(themeName, 300)}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3>Text</h3>
        <p>
          Color levels 500 and above are accessible on white and 100 level
          backgrounds.
        </p>
        <div className="d-flex rounded overflow-hidden mb-3">
          <p className="mb-0 w-100 h4">Lighter Text</p>
          <p className="mb-0 w-100 h4">Regular Text</p>
          <p className="mb-0 w-100 h4">Darker Text</p>
        </div>
        <div className="d-flex">
          {[500, 700, 900].map(level => (
            <div key={level} style={{ flexBasis: '33%' }}>
              {colors.map(({ themeName, unusedLevels }) => {
                if (unusedLevels.includes(level)) { return null; }
                return (
                  <code
                    key={`${themeName}-${level}`}
                    className={classNames(
                      'd-block',
                      utilityClasses.text(themeName, level),
                    )}
                  >
                    .{utilityClasses.text(themeName, level)}
                  </code>
                );
              })}
            </div>
          ))}
        </div>

        <h3>Element Fills</h3>
        <p>Buttons or other interactive elements.</p>
        <div>
          <div className="d-flex rounded overflow-hidden mb-3">
            <div className="w-100">
              <p className="mb-0 h4">Default State</p>
            </div>
            <div className="w-100">
              <p className="mb-0 h4">Hover State</p>
            </div>
            <div className="w-100">
              <p className="mb-0 h4">Active State</p>
            </div>
          </div>
          {colors.map(({ themeName }) => {
            if (themeName === 'warning') { return null; }
            return (
              <div key={themeName} className="d-flex rounded overflow-hidden mb-3">
                <div
                  className={classNames(
                    'p-3 w-100',
                    utilityClasses.bg(themeName, 500),
                    {
                      'text-white': themeName !== 'light',
                    },
                  )}
                >
                  <code style={{ color: 'inherit' }}>
                    .{utilityClasses.bg(themeName, 500)}
                  </code>
                </div>
                <div
                  className={classNames(
                    'p-3 w-100',
                    utilityClasses.bg(themeName, 700),
                    {
                      'text-white': themeName !== 'light',
                    },
                  )}
                >
                  <code style={{ color: 'inherit' }}>
                    .{utilityClasses.bg(themeName, 700)}
                  </code>
                </div>
                <div
                  className={classNames(
                    'p-3 w-100',
                    utilityClasses.bg(themeName, 900),
                    {
                      'text-white': themeName !== 'light',
                    },
                  )}
                >
                  <code style={{ color: 'inherit' }}>
                    .{utilityClasses.bg(themeName, 900)}
                  </code>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  {
    allCssUtilityClasses(
      filter: { declarations: { regex: "/color/" }, isUtility: { eq: true } }
      sort: { fields: selector, order: ASC }
    ) {
      nodes {
        selector
        declarations
      }
      distinct(field: selector)
    }
  }
`;
