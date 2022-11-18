const fs = require('fs');
const path = require('path');
const { getSCSStoCSSMap, getFilesWithExtension } = require('./utils');

const BASE_PATH = path.resolve(__dirname, './source');
const BASE_PREFIX = '--pgn';

const SCSStoCSSMap = {};
const CSStoSCSSMap = {};
const tokenPaths = getFilesWithExtension(BASE_PATH, '.json');

tokenPaths.forEach(tokenFile => {
  const tokenContent = fs.readFileSync(tokenFile, 'utf-8');
  const parsed = JSON.parse(tokenContent);
  getSCSStoCSSMap(BASE_PREFIX, parsed, SCSStoCSSMap);
});

Object.entries(SCSStoCSSMap).forEach(([key, value]) => {
  CSStoSCSSMap[value] = key;
});

fs.writeFileSync(path.resolve(__dirname, './build/scss-to-css.json'), JSON.stringify(SCSStoCSSMap));
fs.writeFileSync(path.resolve(__dirname, './build/css-to-scss.json'), JSON.stringify(CSStoSCSSMap));
