const path = require('path');

/**
 * Checks whether SVG name starts with number, and if it does - append `Pgn` string to it (e.g. '11M' => 'Pgn11M')
 *
 * The reason for this is that material-icons repository from where we copy icons contains icons with names like
 * 5G, 2K etc., which by default transforms to 'export { default as 5G } from './5G'' which is invalid js
 * (component name cannot start with number), this function will transform this export to
 * 'export { default as Pgn5G } from './5G'', which is valid.
 *
 * @param {string} basename - name of the SVG component.
 * @returns {string} - formatted name of the SVG component.
 */
function getComponentName(basename) {
  if (!isNaN(basename.charAt(0))) {
    return `Pgn${basename}`;
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
    plugins: [
      {
        removeViewBox: false
      },
      {
        addAttributesToSVGElement: {
          attributes: ['fill="none"'],
        },
      },
    ],
  },
  jsx: {
    babelConfig: {
      plugins: [
        [
          "@svgr/babel-plugin-add-jsx-attribute",
          {
            "elements": ["path", "circle"],
            "attributes": [
              {
                "name": "fill",
                "value": "currentColor",
                "spread": false,
                "literal": false,
                "position": "end"
              }
            ]
          }
        ]
      ],
    },
  },
};
