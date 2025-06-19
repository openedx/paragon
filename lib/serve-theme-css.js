/* eslint-disable no-console */
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const minimist = require('minimist');
const chalk = require('chalk');
const ora = require('ora');

const { encodeThemesToQueryParam } = require('./queryParamEncoding');

// Constants
const DEFAULT_THEME_NAME = 'Local Theme';

// Get docs URL from environment variable
const DOCS_BASE_URL = process.env.PARAGON_DOCS_URL;

/**
 * Generates a docs URL with encoded themes parameter
 */
function generateDocsUrl(themeUrls, host, port, themeName) {
  if (!themeUrls.themeUrls) {
    return null;
  }

  const themes = [];
  const activeIndex = 1; // Set active index to 1 since we'll add default theme first

  // Always include the default Open edX theme first (index 0)
  themes.push({
    name: 'Open edX (Default)',
    urls: [],
  });

  // Create a single theme variant that includes all available CSS files
  const themeUrlList = [];

  // Add core.css if it exists
  if (themeUrls.themeUrls.core) {
    const corePath = themeUrls.themeUrls.core.paths.default.replace(/^\.\//, '');
    themeUrlList.push(`http://${host}:${port}/${corePath}`);
  }

  // Add all theme variants if they exist
  if (themeUrls.themeUrls.variants) {
    Object.entries(themeUrls.themeUrls.variants).forEach(([, themeData]) => {
      const themePath = themeData.paths.default.replace(/^\.\//, '');
      themeUrlList.push(`http://${host}:${port}/${themePath}`);
    });
  }

  if (themeUrlList.length === 0) {
    // If no local themes, just return URL with default theme
    const encodedThemes = encodeThemesToQueryParam(themes, 0);
    return `${DOCS_BASE_URL}?themes=${encodedThemes}`;
  }

  // Create a single theme with all the combined URLs (index 1)
  themes.push({
    name: themeName,
    urls: themeUrlList,
  });

  const encodedThemes = encodeThemesToQueryParam(themes, activeIndex);
  return `${DOCS_BASE_URL}?themes=${encodedThemes}`;
}

/**
 * Serves theme CSS files on a local server as if they were on a CDN.
 *
 * @param {string[]} commandArgs - Command line arguments for serving theme CSS files.
 * @param {string} [commandArgs.build-dir='./dist'] - The directory containing built CSS files to serve.
 * @param {number} [commandArgs.port=3000] - The port to serve files on.
 * @param {string} [commandArgs.host='localhost'] - The host to serve files on.
 * @param {boolean} [commandArgs.cors=true] - Whether to enable CORS headers.
 * @param {string} [commandArgs.theme-name='Local Theme'] - The name for the theme in the docs URL.
 */
async function serveThemeCssCommand(commandArgs) {
  const defaultArgs = {
    'build-dir': './dist',
    port: 3000,
    host: 'localhost',
    cors: true,
    'theme-name': DEFAULT_THEME_NAME,
  };

  const alias = {
    'build-dir': 'b',
    port: 'p',
    host: 'h',
    'theme-name': 't',
  };

  const {
    'build-dir': buildDir,
    port,
    host,
    cors,
    'theme-name': themeName,
  } = minimist(commandArgs, {
    alias,
    default: defaultArgs,
    boolean: ['cors'],
  });

  const resolvedBuildDir = path.resolve(process.cwd(), buildDir);

  // Check if build directory exists
  if (!fs.existsSync(resolvedBuildDir)) {
    console.error(chalk.red.bold(`Error: Build directory '${resolvedBuildDir}' does not exist.`));
    console.error(chalk.yellow('Please run `paragon build-scss` first to generate CSS files.'));
    process.exit(1);
  }

  // Check for theme-urls.json to validate this is a proper dist directory
  const themeUrlsPath = path.join(resolvedBuildDir, 'theme-urls.json');
  if (!fs.existsSync(themeUrlsPath)) {
    console.error(chalk.red.bold(`Error: '${resolvedBuildDir}' does not appear to be a valid Paragon dist directory.`));
    console.error(chalk.yellow('Missing theme-urls.json file. Please run `paragon build-scss` first.'));
    process.exit(1);
  }

  // Read theme-urls.json to understand the available files
  let themeUrls;
  try {
    const themeUrlsContent = fs.readFileSync(themeUrlsPath, 'utf8');
    themeUrls = JSON.parse(themeUrlsContent);
  } catch (error) {
    console.error(chalk.red.bold('Error: Could not read theme-urls.json file.'));
    process.exit(1);
  }

  // Create server
  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    let filePath = parsedUrl.pathname;

    // Remove leading slash
    if (filePath.startsWith('/')) {
      filePath = filePath.substring(1);
    }

    // Default to theme-urls.json if no file specified
    if (filePath === '') {
      filePath = 'theme-urls.json';
    }

    // Resolve file path relative to build directory
    const fullPath = path.join(resolvedBuildDir, filePath);

    // Security check: ensure file is within build directory
    if (!fullPath.startsWith(resolvedBuildDir)) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('Forbidden');
      return;
    }

    // Set CORS headers if enabled
    if (cors) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    }

    // Handle OPTIONS requests for CORS preflight
    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
      return;
    }

    // Get file stats
    const stats = fs.statSync(fullPath);

    // Handle directories
    if (stats.isDirectory()) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('Directory access not allowed');
      return;
    }

    // Set appropriate content type based on file extension
    const ext = path.extname(fullPath).toLowerCase();

    // Set CDN-like cache headers for static assets
    const setCdnHeaders = (contentType) => {
      res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
      res.setHeader('ETag', `"${stats.size}-${stats.mtime.getTime()}"`);
      res.setHeader('Content-Type', contentType);
    };

    // Only serve CSS files and theme configuration JSON
    if (ext === '.css') {
      setCdnHeaders('text/css');
    } else if (ext === '.json' && path.basename(fullPath) === 'theme-urls.json') {
      setCdnHeaders('application/json');
    } else {
      // Reject all other file types
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('Only CSS files and theme-urls.json are allowed');
      return;
    }

    res.setHeader('Content-Length', stats.size);

    // Stream the file
    const fileStream = fs.createReadStream(fullPath);
    fileStream.pipe(res);

    fileStream.on('error', (error) => {
      console.error(chalk.red(`Error serving file ${filePath}:`, error.message));
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal server error');
      }
    });
  });

  // Start server
  server.listen(port, host, () => {
    const spinner = ora('Starting theme CSS server...').start();

    setTimeout(() => {
      spinner.succeed(chalk.green.bold(`Theme CSS server running at http://${host}:${port}`));
      console.log(chalk.cyan('\nAvailable theme files:'));

      // List available files based on theme-urls.json
      if (themeUrls.themeUrls) {
        // Core files
        if (themeUrls.themeUrls.core) {
          console.log(chalk.yellow('\nCore CSS:'));
          const coreDefault = themeUrls.themeUrls.core.paths.default.replace(/^\.\//, '');
          const coreMinified = themeUrls.themeUrls.core.paths.minified.replace(/^\.\//, '');
          console.log(chalk.gray(`  http://${host}:${port}/${coreDefault}`));
          console.log(chalk.gray(`  http://${host}:${port}/${coreMinified}`));
        }

        // Theme variants
        if (themeUrls.themeUrls.variants) {
          console.log(chalk.yellow('\nTheme Variants:'));
          Object.entries(themeUrls.themeUrls.variants).forEach(([variantName, themeData]) => {
            const isDefault = themeUrls.themeUrls.defaults && themeUrls.themeUrls.defaults[variantName];
            const prefix = isDefault ? chalk.green('★ ') : '  ';
            const themeDefault = themeData.paths.default.replace(/^\.\//, '');
            const themeMinified = themeData.paths.minified.replace(/^\.\//, '');
            console.log(chalk.gray(`${prefix}${variantName}:`));
            console.log(chalk.gray(`    http://${host}:${port}/${themeDefault}`));
            console.log(chalk.gray(`    http://${host}:${port}/${themeMinified}`));
          });
        }

        // Theme URLs JSON
        console.log(chalk.yellow('\nTheme Configuration:'));
        console.log(chalk.gray(`  http://${host}:${port}/theme-urls.json`));
      }

      // Show the Paragon docs URL with encoded themes
      const docsUrlWithThemes = generateDocsUrl(themeUrls, host, port, themeName);
      if (docsUrlWithThemes) {
        console.log(chalk.green.bold('\n📖 Paragon Docs URL with encoded themes:'));
        console.log(chalk.cyan(docsUrlWithThemes));
        console.log(chalk.gray('\nThis URL will load the Paragon docs site with the default Open edX theme and your local theme CSS files pre-configured.'));
        console.log(chalk.gray('The local theme will be active by default, but you can switch to the default Open edX theme using the theme selector.'));
      } else {
        console.log(chalk.yellow('\n⚠️  No themes found to encode for docs URL.'));
      }

      console.log(chalk.gray('\nPress Ctrl+C to stop the server'));
    }, 1000);
  });

  // Handle server errors
  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(chalk.red.bold(`Error: Port ${port} is already in use.`));
      console.error(chalk.yellow('Try using a different port with --port option.'));
    } else {
      console.error(chalk.red.bold('Server error:', error.message));
    }
    process.exit(1);
  });

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log(chalk.gray('\nShutting down server...'));
    server.close(() => {
      console.log(chalk.green('Server stopped'));
      process.exit(0);
    });
  });
}

module.exports = serveThemeCssCommand;
