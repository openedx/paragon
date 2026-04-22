const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const os = require('os');
const sass = require('sass');

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
})));

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

  it('should compile core and theme stylesheets', () => {
    const args = [
      '--corePath=styles/core.scss',
      '--themesPath=styles/themes',
      '--outDir=dist',
      '--defaultThemeVariants=light',
    ];

    buildScssCommand(args);

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
