import React from 'react';
import { graphql } from 'gatsby';
import classNames from 'classnames';
import SEO from '../../components/seo';
import { Col, Row } from 'react-bootstrap';
import Color from 'color';
import NearestColor from 'nearest-color';

const prospectusColors = [
  {
    "name": "$transparent-purple",
    "color": "rgba(255, 255, 255, 0.21)",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$white",
    "color": "#fff",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$orchid-white",
    "color": "#fffdf3",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$silk-white",
    "color": "#fcfcfc",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$touch-of-grey",
    "color": "#f9f9f9",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$exacting-grey",
    "color": "#f8f8f8",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$ice-blue",
    "color": "#f5f8ff",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$pale-grey",
    "color": "#f2f8fb",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$light-hydrangea",
    "color": "#f4f7ff",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$pale-lilac-two",
    "color": "#f6f6ff",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$whitesmoke",
    "color": "#f5f5f5",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$blue-tinged-grey",
    "color": "#f0f5ff",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$french-blue-light",
    "color": "#e9f6ff",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$very-light-grey",
    "color": "#f3f3f4",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$very-light-blue",
    "color": "#edf3ff",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$border-grey",
    "color": "#f2f2f2",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$blue-romance",
    "color": "#dcf7dc",
    "paragonColor": 'success-200',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$light-blue-background",
    "color": "#e9f0ff",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$bisque",
    "color": "#fbecc2",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$light-sea-blue",
    "color": "#dceef7",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$white-lilac",
    "color": "#ede7f1",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$pale-lilac",
    "color": "#e4e4ff",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$mercury",
    "color": "#e6e6e6",
    "paragonColor": 'gray-100',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$bizarre",
    "color": "#f2dede",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$silver",
    "color": "#d6dbe0",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$celadon",
    "color": "#b3e6b4",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$white-two",
    "color": "#d8d8d8",
    "paragonColor": 'gray-200',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$oyster-pink",
    "color": "#ebcccc",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$silver-two",
    "color": "#d1d2d4",
    "paragonColor": 'gray-200',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$box-border",
    "color": "#cacaca",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$lightning-yellow",
    "color": "#ffc01f",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$light-aquamarine",
    "color": "#9cd2e6",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$pinkish-grey",
    "color": "#c4c4c4",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$mouse-king-grey",
    "color": "#b9babe",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$faded-orange",
    "color": "#f0ad4e",
    "paragonColor": 'warning-300',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$corn",
    "color": "#e0a900",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$silver-chalice",
    "color": "#a8a8a8",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$nepal",
    "color": "#8c99bd",
    "paragonColor": 'info-200',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$dark-periwinkle",
    "color": "#6c83cd",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$edx-magenta-hover",
    "color": "#d7548e",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$default-border-color",
    "color": "#3185bd",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$light-purple",
    "color": "#966dbd",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$cherry-red",
    "color": "#f70e0e",
    "paragonColor": 'danger',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$light-blue-1",
    "color": "#007db8",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$light-grey",
    "color": "#757575",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$dark-cyan",
    "color": "#2d7999",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$dark-blue-7",
    "color": "#0075b4",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$enroll-btn-green",
    "color": "#008100",
    "paragonColor": 'success',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$slate-grey",
    "color": "#636c72",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$french-blue",
    "color": "#5064b1",
    "paragonColor": 'info',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$matisse",
    "color": "#126f9a",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$teal",
    "color": "#2968aa",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$denim",
    "color": "#366d75",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$monza",
    "color": "#cb0712",
    "paragonColor": 'danger',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$edx-magenta",
    "color": "#b62064",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$gunmetal-grey",
    "color": "#4d5b62",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$enroll-btn-hover",
    "color": "#006200",
    "paragonColor": 'success-700',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$darkish-purple-two",
    "color": "#9a1f60",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$alternative-blue",
    "color": "#065784",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$deep-sea-blue",
    "color": "#005686",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$dark-blue-8",
    "color": "#065683",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$dark-pink-1",
    "color": "#92205b",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$greyish-brown-two",
    "color": "#4a4a4a",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$crisp-blue",
    "color": "#23419f",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$sapphire",
    "color": "#23419f",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$very-dark-grey",
    "color": "#414141",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$greyish-brown",
    "color": "#414141",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$dark-grey-9",
    "color": "#414141",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$charcoal-grey",
    "color": "#393f43",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$lms-black",
    "color": "#3c3c3c",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$cobalt",
    "color": "#1a337b",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$darkish-purple",
    "color": "#4f1079",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$charcoal-grey-two",
    "color": "#2d323e",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$plum-purple",
    "color": "#45096b",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$dark-slate-blue",
    "color": "#17285d",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$dark-grey",
    "color": "#292b2c",
    "paragonColor": 'gray-900',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$vintage-black",
    "color": "#222",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$slightly-opaque-black",
    "color": "rgba(0, 0, 0, 0.1)",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$edx-shadow-2",
    "color": "rgba(0, 0, 0, 0.6)",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$edx-shadow-color",
    "color": "rgba(0, 0, 0, 0.3)",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  },
  {
    "name": "$black",
    "color": "#000",
    "paragonColor": '',
    "uses": 0,
    "description": ""
  }
];

const utilityClasses = {
  bg: (color, level) => (level ? `bg-${color}-${level}` : `bg-${color}`),
  border: (color, level) => (level ? `border-${color}-${level}` : `border-${color}`),
  text: (color, level) => (level ? `text-${color}-${level}` : `text-${color}`),
};

const colors = [
  { themeName: 'gray', color: 'gray', unusedLevels: [] },
  { themeName: 'primary', color: 'blue', unusedLevels: [] },
  { themeName: 'success', color: 'green', unusedLevels: [] },
  { themeName: 'info', color: 'teal', unusedLevels: [] },
  { themeName: 'danger', color: 'red', unusedLevels: [] },
  { themeName: 'warning', color: 'yellow', unusedLevels: [] },
];

const levels = [
  { level: 100, use: 'Backgrounds' },
  { level: 200, use: 'Borders & Lines' },
  { level: 300, use: 'Icons & Semantic State' },
  { level: 500, use: 'Lighter Text & Element Fills' },
  { level: 700, use: 'Regular Text & Hover State' },
  { level: 900, use: 'Darker Text & Active State' },
];

const selectorColors = {};
const paragonColorLevels = {};

function parseColors(cssSelectors) {
  const colorsAreParsed = Object.keys(selectorColors).length !== 0;
  if (colorsAreParsed) return;

  cssSelectors.forEach(({ selector, declarations }) => {
    // All declarations fit this shape: "background-color: #fff !important;"
    const declarationFragments = declarations[0].split(' ');
    selectorColors[selector] = declarationFragments.length ? declarationFragments[1] : null;
  });
  Object.entries(selectorColors).forEach(([ name, value ]) => {
    if (name.includes('bg-')
      && !name.includes('-500')
      && value[0] === '#'
      && !name.includes('secondary')
      && !name.includes('dark')
      && !name.includes('light')
    ) {
      paragonColorLevels[name.substring(3)] = value;
    }
  });
}

const Swatch = ({ color }) => <div style={{ backgroundColor: color }} className="p-4" />;

export default function ({ data }) {
  parseColors(data.allCssUtilityClasses.nodes);
  console.log(paragonColorLevels)
  const nearestParagonColor = NearestColor.from(paragonColorLevels);
  const tolerance = 50;
  const renderName = (paragonName) => {
    if (!paragonName) return '';
    const parts = paragonName.split('-');
    if (['gray', 'primary', 'success', 'info', 'danger', 'warning'].includes(parts[0])) {
      return <code>{`theme-color('${parts[0]}', ${parts[1] || '500'})`}</code>;
    }
    return <code>{parts[0]}</code>;
  }
  return (
    <div>

      <SEO title="Colors" />

      <h1>Colors</h1>
      {prospectusColors.map(({ name, color, paragonColor }) => {
        const colorObj =  Color(color);

        let guessParagonMatch = {};
        try {
          guessParagonMatch = nearestParagonColor(color);
        } catch (e) {
          // console.log('prolly rgba definition', e);
        }
        // const { themeName, level } = paragonColor;
        // const paragonColorObj = Color(selectorColors[utilityClasses.bg(themeName, level)])
        if (guessParagonMatch.distance > tolerance) {
          guessParagonMatch = {};
        }
        if (paragonColor) {
          guessParagonMatch = {
            name: paragonColor,
            value: paragonColorLevels[paragonColor],
            distance: 'manually selected',
            manual: true
          };
        }
        console.log(guessParagonMatch)
        return (
          <Row className="my-4">
            <Col xs={3}>
              {name}
            </Col>
            <Col xs={4}>
              <code>{color}</code>
              <Swatch color={color} />
              <span style={{ color }}>Aa</span>
            </Col>
            <Col xs={4}>
            {renderName(guessParagonMatch.name)}
              <Swatch color={guessParagonMatch.value} />
              {guessParagonMatch.name && <span style={{ color: guessParagonMatch.value }}>Aa</span>}
            </Col>
            <Col xs={1}>
              {(guessParagonMatch.distance && !guessParagonMatch.manual) && "" + Math.round(guessParagonMatch.distance)}
              {guessParagonMatch.manual && 'manual selection'}
            </Col>
          </Row>
        )
      })}
        {levels.map(({ level, use }) => (
        <div>
          <h6 className="text-muted text-uppercase mb-3 font-weight-normal">
            <strong className="mr-2">{level}</strong> {use}
          </h6>
          <div className="d-flex">
            {colors.map(({ themeName, unusedLevels }) => (
              <div className="mr-3 mb-4 w-100">
                <div
                  className={classNames(
                    'pgn-doc__swatch',
                    utilityClasses.bg(themeName, level),
                    {
                      'unused-level': unusedLevels.includes(level),
                    },
                  )}
                />
                {unusedLevels.includes(level) ? null : (
                  <div style={{ lineHeight: 1 }} className="mt-1">
                    <code className="mb-0 d-flex justify-content-between text-lowercase text-gray-700">
                      <span>{themeName}</span>
                      <span>{level}</span>
                    </code>
                    <code
                      style={{ fontSize: '65%' }}
                      className="text-black-50 text-lowercase"
                    >
                      {selectorColors[utilityClasses.bg(themeName, level)]}
                    </code>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}


    </div>
  );
}

export const query = graphql`
{
  allCssUtilityClasses(
    filter: {declarations: {regex: "/color/"}, isUtility: {eq: true}},
    sort: {fields: selector, order: ASC}
  ) {
    nodes {
      selector
      declarations
    }
    distinct(field: selector)
  }
}
`;