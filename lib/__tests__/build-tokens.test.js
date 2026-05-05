const fs = require('fs');
const buildTokensCommand = require('../build-tokens');
const {
  initializeStyleDictionary,
  __mockClass: StyleDictionary,
  __mockInstance: styleDictionaryInstance,
} = require('../../tokens/style-dictionary');
const { createIndexCssFile } = require('../../tokens/utils');

jest.mock('fs');
jest.mock('../../tokens/style-dictionary');
jest.mock('../../tokens/utils');

describe('buildTokensCommand', () => {
  const defaultBuildDir = './build/';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should use default parameters when no arguments provided', async () => {
    await buildTokensCommand([]);

    expect(initializeStyleDictionary).toHaveBeenCalledWith(
      expect.objectContaining({
        themes: ['light'],
      }),
    );
  });

  it('should handle multiple themes correctly', async () => {
    await buildTokensCommand(['--themes', 'light,dark']);

    expect(StyleDictionary).toHaveBeenCalledTimes(3); // 1 for core + 2 for themes
    expect(createIndexCssFile).toHaveBeenCalledTimes(3);

    // Verify index files creation for core and each theme
    const expectedCalls = [
      { isThemeVariant: false, themeVariant: undefined },
      { isThemeVariant: true, themeVariant: 'light' },
      { isThemeVariant: true, themeVariant: 'dark' },
    ];

    expectedCalls.forEach(params => {
      expect(createIndexCssFile).toHaveBeenCalledWith(expect.objectContaining({
        buildDir: defaultBuildDir,
        ...params,
      }));
    });
  });

  it('should handle source-tokens-only flag', async () => {
    await buildTokensCommand(['--source-tokens-only']);

    expect(StyleDictionary).toHaveBeenCalledWith(expect.objectContaining({
      platforms: expect.objectContaining({
        css: expect.objectContaining({
          files: expect.arrayContaining([
            expect.objectContaining({
              filter: 'isSource',
            }),
          ]),
        }),
      }),
    }));
  });

  it('should handle the exclude-core flag', async () => {
    await buildTokensCommand(['--exclude-core']);

    // only light theme, not core
    expect(StyleDictionary).toHaveBeenCalledTimes(1);
    const callArgs = StyleDictionary.mock.calls[0][0];
    for (const file of callArgs.platforms.css.files) {
      expect(file.destination).toContain('themes/light');
    }

    // Verify only light theme index files are created
    expect(createIndexCssFile).toHaveBeenCalledTimes(1);
    expect(createIndexCssFile).toHaveBeenCalledWith(expect.objectContaining({
      buildDir: defaultBuildDir,
      isThemeVariant: true,
      themeVariant: 'light',
    }));
  });

  it('should use custom build path', async () => {
    const customBuildDir = './custom-build/';
    await buildTokensCommand(['--build-dir', customBuildDir]);

    expect(StyleDictionary).toHaveBeenCalledWith(expect.objectContaining({
      platforms: expect.objectContaining({
        css: expect.objectContaining({
          buildPath: customBuildDir,
        }),
      }),
    }));
  });

  it('should handle custom token source', async () => {
    const customSource = './custom-tokens';
    await buildTokensCommand(['--source', customSource]);

    expect(StyleDictionary).toHaveBeenCalledWith(expect.objectContaining({
      source: expect.arrayContaining([
        expect.stringContaining(customSource),
      ]),
    }));
  });

  it('should handle build errors', async () => {
    const errorMessage = 'Clean error';
    styleDictionaryInstance.cleanAllPlatforms.mockRejectedValueOnce(new Error(errorMessage));

    await expect(buildTokensCommand([])).rejects.toThrow(errorMessage);
  });

  it('should handle verbose flag', async () => {
    await buildTokensCommand(['--verbose']);

    expect(StyleDictionary).toHaveBeenCalledWith(expect.objectContaining({
      log: {
        verbosity: 'verbose',
      },
    }));
  });

  describe('app token discovery', () => {
    const mockAppsDirectory = (appNames) => {
      fs.existsSync.mockReturnValue(true);
      fs.readdirSync.mockReturnValue(
        appNames.map((name) => ({ name, isDirectory: () => true })),
      );
    };

    it('builds one config per discovered app, in addition to core and themes', async () => {
      mockAppsDirectory(['catalog', 'discussions']);

      await buildTokensCommand(['--source', '/fake/source']);

      // 1 core + 1 light theme + 2 apps = 4 StyleDictionary calls
      expect(StyleDictionary).toHaveBeenCalledTimes(4);
    });

    it('uses the expected per-app config shape', async () => {
      mockAppsDirectory(['catalog']);

      await buildTokensCommand(['--source', '/fake/source']);

      const appCallArgs = StyleDictionary.mock.calls
        .map(([config]) => config)
        .find((config) => config.platforms.css.files[0].destination.startsWith('apps/'));

      expect(appCallArgs).toBeDefined();
      expect(appCallArgs.platforms.css.prefix).toBe('');
      expect(appCallArgs.platforms.css.transformGroup).toBe('paragon-css-app');
      expect(appCallArgs.platforms.css.files).toHaveLength(1);
      expect(appCallArgs.platforms.css.files[0].destination).toBe('apps/catalog/variables.css');
      expect(appCallArgs.platforms.css.files[0].options.outputReferences).toBe(true);

      // Inline filter passes source tokens, rejects include'd Paragon tokens.
      const appFilter = appCallArgs.platforms.css.files[0].filter;
      expect(typeof appFilter).toBe('function');
      expect(appFilter({ isSource: true })).toBe(true);
      expect(appFilter({ isSource: false })).toBe(false);
    });

    it('does not create an index.css for app configs', async () => {
      mockAppsDirectory(['catalog', 'discussions']);

      await buildTokensCommand(['--source', '/fake/source']);

      // Only core + light theme should get an index; the two apps should not.
      expect(createIndexCssFile).toHaveBeenCalledTimes(2);
      const indexCalls = createIndexCssFile.mock.calls.map(([params]) => params);
      indexCalls.forEach(({ themeVariant }) => {
        expect(themeVariant === undefined || themeVariant === 'light').toBe(true);
      });
    });
  });
});
