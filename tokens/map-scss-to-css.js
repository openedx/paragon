const fs = require('fs');
const path = require('path');
const { getSCSStoCSSMap, getFilesWithExtension } = require('./utils');

const CORE_BASE_PATH = path.resolve(__dirname, './source');
const COMPONENTS_BASE_PATH = path.resolve(__dirname, './source/components');
const BASE_PREFIX = '--pgn';

const coreContent = {};
const componentsContent = {};
const coreTokenPaths = getFilesWithExtension(CORE_BASE_PATH, '.json', [], ['components']);
const componentsTokenPaths = getFilesWithExtension(COMPONENTS_BASE_PATH, '.json');

coreTokenPaths.forEach(tokenFile => {
  const content = fs.readFileSync(tokenFile, 'utf-8');
  const parsed = JSON.parse(content);
  getSCSStoCSSMap(BASE_PREFIX, parsed, coreContent);
});

componentsTokenPaths.forEach(tokenFile => {
  const content = fs.readFileSync(tokenFile, 'utf-8');
  const parsed = JSON.parse(content);
  getSCSStoCSSMap(BASE_PREFIX, parsed, componentsContent);
});

fs.writeFileSync(path.resolve(__dirname, './build/scss-to-css-core.json'), JSON.stringify(coreContent));
fs.writeFileSync(path.resolve(__dirname, './build/scss-to-css-components.json'), JSON.stringify(componentsContent));
