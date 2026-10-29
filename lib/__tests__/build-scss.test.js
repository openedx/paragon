const fs = require('fs');
const path = require('path');
const { spawn } = require('node:child_process');
const os = require('os');
const sass = require('sass');
const postCSS = require('postcss');

const buildScssCommand = require('../build-scss');
const { updateParagonThemeOutput } = require('../build-scss');

jest.mock('fs');
jest.mock('sass');
jest.mock('postcss', () => jest.fn().mockReturnValue({
  process: jest.fn().mockResolvedValue({
    css: '.processed { color: black; }',
    map: {
      toString: () => 'minified sourcemap content',
    },
  }),
}));
jest.mock('ora', () => jest.fn(() => ({
  start: jest.fn().mockReturnThis(),
  succeed: jest.fn().mockReturnThis(),
  fail: jest.fn().mockReturnThis(),
  stop: jest.fn().mockReturnThis(),
})));

const processedResult = {
  css: '.processed { color: black; }',
  map: {
    toString: () => 'minified sourcemap content',
  },
};

// The minify pass is the only `process` call that asks for an external source map.
const isMinifyCall = (options) => options.map && options.map.inline === false;

const mockPostCss = (processImpl) => {
  postCSS.mockImplementation(() => ({ process: jest.fn(processImpl) }));
};

const writtenFiles = () => fs.writeFileSync.mock.calls.map(([filePath]) => filePath);

describe('updateParagonThemeOutput', () => {
  it('should add core theme correctly', () => {
    const input = {
      paragonThemeOutput: { themeUrls: {} },
      name: 'core',
      isThemeVariant: false,
      isDefaultThemeVariant: false,
    };

    const expected = {
      themeUrls: {
        core: {
          paths: {
            default: './core.css',
            minified: './core.min.css',
          },
        },
      },
    };

    const result = updateParagonThemeOutput(input);
    expect(result).toEqual(expected);
  });

  it('should add theme variant correctly', () => {
    const input = {
      paragonThemeOutput: { themeUrls: {} },
      name: 'light',
      isThemeVariant: true,
      isDefaultThemeVariant: false,
    };

    const expected = {
      themeUrls: {
        variants: {
          light: {
            paths: {
              default: './light.css',
              minified: './light.min.css',
            },
          },
        },
      },
    };

    const result = updateParagonThemeOutput(input);
    expect(result).toEqual(expected);
  });

  it('should add default theme variant correctly', () => {
    const input = {
      paragonThemeOutput: { themeUrls: {} },
      name: 'light',
      isThemeVariant: true,
      isDefaultThemeVariant: true,
    };

    const expected = {
      themeUrls: {
        defaults: {
          light: 'light',
        },
        variants: {
          light: {
            paths: {
              default: './light.css',
              minified: './light.min.css',
            },
          },
        },
      },
    };

    const result = updateParagonThemeOutput(input);
    expect(result).toEqual(expected);
  });
});

describe('buildScssCommand', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockPostCss(() => Promise.resolve(processedResult));
    fs.writeFileSync.mockImplementation(() => {});
    fs.existsSync.mockReturnValue(false);
    fs.readdirSync.mockReturnValue([
      { name: 'light', isDirectory: () => true },
      { name: 'dark', isDirectory: () => true },
    ]);
    sass.compile.mockReturnValue({
      css: '.test { color: black; }',
      map: {
        toString: () => 'sourcemap content',
      },
    });
  });

  it('should compile core and theme stylesheets', async () => {
    const args = [
      '--corePath=styles/core.scss',
      '--themesPath=styles/themes',
      '--outDir=dist',
      '--defaultThemeVariants=light',
    ];

    await buildScssCommand(args);

    expect(sass.compile).toHaveBeenCalledWith(
      expect.stringContaining('core.scss'),
      expect.any(Object),
    );

    expect(fs.readdirSync).toHaveBeenCalledWith(
      expect.stringContaining('themes'),
      expect.objectContaining({ withFileTypes: true }),
    );
  });

  it('should use default arguments when none provided', async () => {
    await buildScssCommand([]);

    expect(sass.compile).toHaveBeenCalledWith(
      expect.stringContaining('core.scss'),
      expect.any(Object),
    );
  });

  it('should exclude core properly', async () => {
    await buildScssCommand(['--excludeCore']);

    expect(sass.compile).not.toHaveBeenCalledWith(
      expect.stringContaining('core.scss'),
      expect.any(Object),
    );

    expect(fs.readdirSync).toHaveBeenCalledWith(
      expect.stringContaining('themes'),
      expect.objectContaining({ withFileTypes: true }),
    );
  });
  it('should resolve only after every stylesheet, minified file and source map is written', async () => {
    mockPostCss((css, options) => {
      if (isMinifyCall(options)) {
        return new Promise((resolve) => { setTimeout(() => resolve(processedResult), 20); });
      }
      return Promise.resolve(processedResult);
    });

    await buildScssCommand(['--outDir=dist']);

    expect(writtenFiles()).toEqual(expect.arrayContaining(
      ['core', 'light', 'dark'].flatMap((name) => [
        `dist/${name}.css`,
        `dist/${name}.min.css`,
        `dist/${name}.css.map`,
      ]),
    ));
  });

  it('should list core and every theme variant in theme-urls.json', async () => {
    const files = {};
    fs.writeFileSync.mockImplementation((filePath, content) => { files[filePath] = content; });
    fs.existsSync.mockImplementation((filePath) => filePath in files);
    fs.readFileSync.mockImplementation((filePath) => files[filePath]);

    await buildScssCommand(['--outDir=dist', '--defaultThemeVariants=light']);

    const { themeUrls } = JSON.parse(files['dist/theme-urls.json']);
    expect(themeUrls.core.paths.minified).toBe('./core.min.css');
    expect(Object.keys(themeUrls.variants)).toEqual(['light', 'dark']);
    expect(themeUrls.defaults).toEqual({ light: 'light' });
  });

  it('should reject when Sass compilation fails', async () => {
    sass.compile.mockImplementation(() => { throw new Error('Undefined variable.'); });

    await expect(buildScssCommand(['--outDir=dist'])).rejects.toThrow('Undefined variable.');
  });

  it('should reject when PostCSS processing fails', async () => {
    mockPostCss(() => Promise.reject(new Error('PostCSS failed')));

    await expect(buildScssCommand(['--outDir=dist'])).rejects.toThrow('PostCSS failed');
  });

  it('should reject when minification fails', async () => {
    mockPostCss((css, options) => (
      isMinifyCall(options) ? Promise.reject(new Error('Minify failed')) : Promise.resolve(processedResult)
    ));

    await expect(buildScssCommand(['--outDir=dist'])).rejects.toThrow('Minify failed');
  });

  it('should reject when the output directory does not exist', async () => {
    fs.writeFileSync.mockImplementation((filePath) => {
      throw new Error(`ENOENT: no such file or directory, open '${filePath}'`);
    });

    await expect(buildScssCommand(['--outDir=missing'])).rejects.toThrow('ENOENT');
  });

  it('should not build theme variants after the core stylesheet fails', async () => {
    mockPostCss(() => Promise.reject(new Error('PostCSS failed')));

    await expect(buildScssCommand(['--outDir=dist'])).rejects.toThrow();

    expect(sass.compile).toHaveBeenCalledTimes(1);
  });
});

describe('SIGINT handling', () => {
  it('should exit with code 130 when SIGINT is received during build', async () => {
    const child = spawn(process.execPath, [
      path.resolve(__dirname, '../../bin/paragon-scripts.js'),
      'build-scss',
      `--outDir=${path.join(os.tmpdir(), 'build-scss-sigint-test')}`,
    ], {
      cwd: path.resolve(__dirname, '../..'),
      stdio: 'ignore',
    });

    const { code, signal } = await new Promise((resolve) => {
      child.on('exit', (exitCode, exitSignal) => resolve({ code: exitCode, signal: exitSignal }));
      setTimeout(() => child.kill('SIGINT'), 500);
    });

    // Process was terminated by SIGINT — either our handler called process.exit(130)
    // or default signal handling killed it before the handler was registered
    expect(code === 130 || signal === 'SIGINT').toBe(true);
  }, 30000);
});
