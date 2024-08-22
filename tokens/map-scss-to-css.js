const fs = require('fs');
const path = require('path');
const { getSCSStoCSSMap, getFilesWithExtension } = require('./utils');

const BASE_PATH = path.resolve(__dirname, './src');
const TOKEN_PREFIX = '--pgn';

function mapSCSStoCSS(sourcePath) {
  const SCSStoCSSMap = {};
  const tokenPaths = getFilesWithExtension(BASE_PATH, '.json');
  if (sourcePath) {
    tokenPaths.push(...getFilesWithExtension(sourcePath, '.json'));
  }

  tokenPaths.forEach(tokenFile => {
    const tokenContent = fs.readFileSync(tokenFile, 'utf-8');
    const parsed = JSON.parse(tokenContent);
    getSCSStoCSSMap(TOKEN_PREFIX, parsed, SCSStoCSSMap);
  });

  return SCSStoCSSMap;
}

module.exports = mapSCSStoCSS;
