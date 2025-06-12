const replaceVariablesCommand = require('../replace-variables');
const { transformInPath } = require('../../tokens/utils');
const mapSCSStoCSS = require('../../tokens/map-scss-to-css');

jest.mock('../../tokens/utils');
jest.mock('../../tokens/map-scss-to-css');

describe('replaceVariablesCommand', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mapSCSStoCSS.mockReturnValue({
      '$primary-color': '#123456',
      '$secondary-color': '#654321',
    });
    transformInPath.mockResolvedValue();
  });

  it('should call transformInPath with correct arguments for default replacement', async () => {
    const args = ['--filePath', 'styles.scss', '--source', 'variables.scss'];

    await replaceVariablesCommand(args);

    expect(mapSCSStoCSS).toHaveBeenCalledWith('variables.scss');
    expect(transformInPath).toHaveBeenCalledWith(
      'styles.scss',
      { '$primary-color': '#123456', '$secondary-color': '#654321' },
    );
  });

  it('should handle usage replacement type with direction', async () => {
    const args = [
      '--filePath', 'styles.scss',
      '--source', 'variables.scss',
      '--replacementType', 'usage',
      '--direction', 'forward',
    ];

    await replaceVariablesCommand(args);

    expect(transformInPath).toHaveBeenCalledWith(
      'styles.scss',
      { '$primary-color': '#123456', '$secondary-color': '#654321' },
      'usage',
      [],
      'forward',
    );
  });

  it('should work with short-form aliases', async () => {
    const args = ['-p', 'styles.scss', '-s', 'variables.scss'];

    await replaceVariablesCommand(args);

    expect(mapSCSStoCSS).toHaveBeenCalledWith('variables.scss');
    expect(transformInPath).toHaveBeenCalledWith(
      'styles.scss',
      { '$primary-color': '#123456', '$secondary-color': '#654321' },
    );
  });

  it('should handle usage replacement type without direction', async () => {
    const args = [
      '--filePath', 'styles.scss',
      '--source', 'variables.scss',
      '--replacementType', 'usage',
    ];

    await replaceVariablesCommand(args);

    expect(transformInPath).toHaveBeenCalledWith(
      'styles.scss',
      { '$primary-color': '#123456', '$secondary-color': '#654321' },
      'usage',
      [],
      undefined,
    );
  });
});
