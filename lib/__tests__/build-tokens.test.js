const buildTokensCommand = require('../build-tokens');
const {
  initializeStyleDictionary,
  __mockClass: StyleDictionary,
  __mockInstance: styleDictionaryInstance,
} = require('../../tokens/style-dictionary');
const { createIndexCssFile } = require('../../tokens/utils');

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
});
