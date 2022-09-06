const fs = require('fs');
const { getSCSStoCSSMap, getFilesWithExtension } = require('./utils');

const BASE_PATH = '../tokens';
const BASE_PREFIX = '--pgn';

const result = {};
const tokenPaths = getFilesWithExtension(BASE_PATH, '.json');

tokenPaths.forEach(tokenFile => {
  const content = fs.readFileSync(tokenFile, 'utf-8');
  const parsed = JSON.parse(content);
  getSCSStoCSSMap(BASE_PREFIX, parsed, result);
});

fs.writeFileSync('../style-dictionary-build/scss-to-css-map.json', JSON.stringify(result));
