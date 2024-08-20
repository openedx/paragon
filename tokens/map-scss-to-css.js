import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getSCSStoCSSMap, getFilesWithExtension } from './utils.js';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const BASE_PATH = path.resolve(dirname, './src');
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

export default mapSCSStoCSS;
