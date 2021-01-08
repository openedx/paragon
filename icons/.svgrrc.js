const path = require('path');

module.exports = {
  "icon": false,
  "expandProps": "end",
  "replaceAttrValues": {
    "#000": "currentColor"
  },
  "ext": "jsx",
  indexTemplate: filePaths => {
    const exportEntries = filePaths.map((filePath) => {
      const basename = path.basename(filePath, path.extname(filePath))
      return `export { default as ${basename} } from './${basename}';`
    })
    return exportEntries.join('\n')
  },
  svgoConfig: {
    plugins: {
      removeViewBox: false,
    },
  },
};
