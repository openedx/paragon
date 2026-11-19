const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const CLI = path.join(ROOT, 'bin/paragon-scripts.js');
const FIXTURES = path.join(__dirname, '__fixtures__/build-tokens');
const COMMITTED_CSS = path.join(ROOT, 'styles/css');

// Outputs that repeat Paragon's own CSS are stored relative to the committed `styles/css`
// (which CI checks against a fresh build first, see "Verify generated token stylesheets"):
// identical files as a flag, large files as the lines they add or drop. Ordinary token changes
// then don't churn these snapshots. If one fails after a token change, run
// `npm run build-tokens` before updating the snapshots.
const FULL_SNAPSHOT_MAX_BYTES = 2048;

const fixture = (name) => path.join(FIXTURES, name);

const listCssFiles = (dir) => fs.readdirSync(dir, { recursive: true })
  .filter((file) => file.endsWith('.css'))
  .sort();

// The committed file an output is compared with: the same path, or the light theme's file
// for a theme variant that Paragon doesn't ship.
const getCommittedCounterpart = (file) => [file, file.replace(/^themes\/[^/]+\//, 'themes/light/')]
  .map((candidate) => path.join(COMMITTED_CSS, candidate))
  .find((candidate) => fs.existsSync(candidate));

const diffLines = (actual, expected) => {
  const actualLines = actual.split('\n');
  const expectedLines = expected.split('\n');
  const actualSet = new Set(actualLines);
  const expectedSet = new Set(expectedLines);
  const diff = [
    ...actualLines.filter((line) => !expectedSet.has(line)).map((line) => `+ ${line}`),
    ...expectedLines.filter((line) => !actualSet.has(line)).map((line) => `- ${line}`),
  ];

  const sharedActual = actualLines.filter((line) => expectedSet.has(line));
  const sharedExpected = expectedLines.filter((line) => actualSet.has(line));
  if (sharedActual.join('\n') !== sharedExpected.join('\n')) {
    diff.push('! shared lines are reordered or duplicated');
  }
  return diff;
};

const describeFile = (file, content) => {
  const counterpart = getCommittedCounterpart(file);
  if (!counterpart) {
    return content;
  }

  const committed = fs.readFileSync(counterpart, 'utf8');
  if (content === committed) {
    return { identicalToCommittedCss: true };
  }
  if (content.length <= FULL_SNAPSHOT_MAX_BYTES) {
    return content;
  }
  return { diffFromCommittedCss: diffLines(content, committed) };
};

const buildTokens = (args) => {
  const buildDir = fs.mkdtempSync(path.join(os.tmpdir(), 'paragon-build-tokens-'));
  try {
    execFileSync(process.execPath, [CLI, 'build-tokens', ...args, '--build-dir', buildDir], {
      cwd: ROOT,
      env: { ...process.env, TRACK_ANONYMOUS_ANALYTICS: '' },
      stdio: 'pipe',
      timeout: 60000,
    });
    return Object.fromEntries(listCssFiles(buildDir).map((file) => [
      file,
      describeFile(file, fs.readFileSync(path.join(buildDir, file), 'utf8')),
    ]));
  } finally {
    fs.rmSync(buildDir, { recursive: true, force: true });
  }
};

// These snapshots characterize the current output, including its quirks: for example,
// `--source-tokens-only` currently drops overrides that only change `modify`.
describe('build-tokens CLI', () => {
  it.each([
    ['a brand, source tokens only', ['--source', fixture('brand'), '--themes', 'light', '--source-tokens-only']],
    ['a brand with a light and a brand-only dark theme', ['--source', fixture('brand'), '--themes', 'light,dark']],
    ['all brand themes, source tokens only', ['--source', fixture('brand'), '--all-themes', '--source-tokens-only']],
    ['a theme on top of the light theme', [
      '--source', fixture('brand'), '--themes', 'high-contrast', '--base-paragon-theme', 'light',
    ]],
    ['a theme on top of the light theme, source tokens only', [
      '--source', fixture('brand'), '--themes', 'high-contrast', '--base-paragon-theme', 'light', '--source-tokens-only',
    ]],
    ['app tokens', ['--source', fixture('app')]],
    ['TOML tokens', ['--source', fixture('toml'), '--themes', 'light', '--source-tokens-only']],
    ['without output references or core', [
      '--source', fixture('brand'), '--themes', 'light', '--source-tokens-only', '--output-references=false',
      '--exclude-core',
    ]],
  ])('should build %s', (name, args) => {
    expect(buildTokens(args)).toMatchSnapshot();
  });
});
