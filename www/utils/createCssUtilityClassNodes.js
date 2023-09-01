const sass = require('sass');
const path = require('path');
const css = require('css');

function createCssUtilityClassNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const { createNode } = actions;

  // We convert to CSS first since we prefer the real values over tokens.
  const compiledCSS = sass
    .renderSync({
      file: path.resolve(__dirname, '../../styles/scss/core/utilities-only.scss'),
      // Resolve tildes the way webpack would in our base npm project
      importer(url) {
        let resolvedUrl = url;
        if (url[0] === '~') {
          resolvedUrl = path.resolve(__dirname, '../../node_modules', url.substr(1));
        }
        return { file: resolvedUrl };
      },
    })
    .css.toString();

  const sheet = css.parse(compiledCSS).stylesheet;

  sheet.rules.forEach(({ selectors, position, declarations }) => {
    if (!selectors) { return; }

    selectors.forEach(selector => {
      if (selector[0] !== '.') { return; } // classes only

      const classSelector = selector.substr(1);

      const nodeData = {
        selector: classSelector,
        declarations: declarations.map(
          ({ property, value }) => `${property}: ${value};`,
        ),
        isUtility:
            declarations.length === 1
            && declarations[0].value.includes('!important'),
      };

      const nodeMeta = {
        id: createNodeId(
          `rule-${classSelector}-${position.start.line}-${position.end.line}`,
        ),
        parent: null,
        children: [],
        internal: {
          type: 'CssUtilityClasses',
          contentDigest: createContentDigest(nodeData),
        },
      };

      const node = { ...nodeData, ...nodeMeta };
      createNode(node);
    });
  });
}

module.exports = createCssUtilityClassNodes;
