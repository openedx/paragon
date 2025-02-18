const Configuration = {
  extends: ['@commitlint/config-conventional'],

  helpUrl: 'https://open-edx-proposals.readthedocs.io/en/latest/oep-0051-bp-conventional-commits.html',

  rules: {
    'type-enum':
      [2, 'always', [
        'revert', 'feat', 'fix', 'perf', 'docs', 'test', 'build', 'refactor', 'style', 'chore', 'temp',
      ]],

    // Default rules we want to suppress:
    'body-leading-blank': [0, "always"],
    'body-max-line-length': [0, "always"],
    'footer-max-line-length': [0, "always"],
    'footer-leading-blank': [0, "always"],
    'subject-case': [0, "always", []],
    'subject-full-stop': [0, "never", '.'],
  },

  ignores: [
    // Allow GitHub revert messages, like:
    //    Revert "introduce a bug"
    //    Revert "introduce a bug" (#1234)
    message => /^Revert ".*"( \(#\d+\))?/.test(message),

    // BTW: commitlint has a built-in list of ignores which are also applied.
    // Those include the typical "Merged" messages, so those are implicitly ignored:
    // https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/is-ignored/src/defaults.ts
  ],
};

export default Configuration;
