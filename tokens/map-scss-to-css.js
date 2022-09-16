const fs = require('fs');
const path = require('path');
const { getSCSStoCSSMap, getFilesWithExtension } = require('./utils');

const BASE_PATH = path.resolve(__dirname, './source');
const BASE_PREFIX = '--pgn';

const result = {};
const tokenPaths = getFilesWithExtension(BASE_PATH, '.json');

tokenPaths.forEach(tokenFile => {
  const content = fs.readFileSync(tokenFile, 'utf-8');
  const parsed = JSON.parse(content);
  getSCSStoCSSMap(BASE_PREFIX, parsed, result);
});

fs.writeFileSync(path.resolve(__dirname, './build/scss-to-css-map.json'), JSON.stringify(result));
