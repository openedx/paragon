# Paragon

[![npm_version](https://img.shields.io/npm/v/@edx/paragon.svg)](@edx/paragon) [![Build Status](https://travis-ci.org/edx/paragon.svg?branch=master)](https://travis-ci.org/edx/paragon) [![Coveralls](https://img.shields.io/coveralls/edx/paragon.svg?branch=master)](https://coveralls.io/github/edx/paragon)

Paragon is a pattern library containing [accessible](https://www.w3.org/WAI/standards-guidelines/aria/) React components and a SCSS foundation built on Twitter Bootstrap. Paragon is developed for the Open edX platform.

Documentation lives at http://edx.github.io/paragon.


## Usage

### React Components

Paragon components require React 16 or higher. To install Paragon into your project:

In terminal:

```
npm i --save @edx/paragon
```

In your React project:

```
import { ComponentName } from '@edx/paragon';
```

#### SCSS Foundation

Usage for Open edX and others:

```
// ... Any custom SCSS variables should be defined here
@import '~@edx/paragon/scss/core/core.scss';
```

Usage on edx.org:

```
@import '~@edx/paragon/scss/edx/theme.scss';
@import '~@edx/paragon/scss/edx/fonts.scss'; // Roboto
```

Note that including the fonts (Roboto) will affect performance.  In some micro-frontends you may choose not to load the custom font - this is a decision we've made for edx/frontend-app-payment, for instance, to keep it highly performant.

#### CSS Foundation

If you are not using SCSS you can use the pre-built CSS.

Usage for Open edX and others:

```
// ... Any custom SCSS variables should be defined here
@import "~@edx/paragon/dist/paragon.css';
```

Usage on edx.org:

```
@import "~@edx/paragon/dist/edx-paragon.css";
```


## Contributing & Development

To add a new component, create a file `src/MyComponent/index.jsx`. Define your component (using the same `<MyComponent>` as the class name) in this file. Example:

```
// src/MyComponent/index.jsx
import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ children, className }) => {
  // ...
  return (
    <p className={className}>
      {children}
    </p>
  );
}

MyComponent.propTypes = {
  className: PropTypes.string.isRequired,
}

export default MyComponent;

```

Next, add your component to the exports in `src/index.js`. Example:

```
...

export { default as MyComponent } from './MyComponent';

...
```

### Set up your workbench
To see your component in action, you need to run the documentation site locally and add a new page. The documentation site is a [Gatsby](https://www.gatsbyjs.org/) application located in the `www/` folder. 

##### Run the documentation site:

1. Install node modules in the root project
  `npm install`

2. Install node modules in the Gatsby project
  `cd www && npm install`

3. Run the documentation dev server
  `npm start`

4. Visit the documentation at [http://localhost:8000](http://localhost:8000)

##### Add a page for your new component

1. Make a copy of `www/src/pages/components/_my-component.mdx` and rename to match your component. Use kebab-case.

2. Add your new page to the navigation by making an addition to `www/src/components/navigation.jsx`. Note that the url of your new page is determined by its file name. A file at `www/src/pages/components/my-new-component.mdx` would generate a page at the path `components/my-new-component`.

You should see your changes reflected at [http://localhost:8000](http://localhost:8000).

Note: Live code blocks in mdx files are created by adding a live attribute (See `_my-component.mdx` for an example). The code inside this code block does not share scope with the MDX file it lives in. It's parsed and rendered inside `www/src/components/CodeBlock.jsx`. All Paragon components are added to the scope of these code blocks by default. If you need to add something to the scope (a React hook for example) you can do so in `CodeBlock.jsx`.

3. Use your new doc page as the workbench for your component. It will auto refresh as you make changes.


### ESLint

Paragon runs ESLint as a pre-commit hook. If your code fails linting, you will not be able to commit. To avoid hitting a giant-wall-of-linter-failures when you try to commit, we recommend [configuring your editor to run ESLint](http://eslint.org/docs/user-guide/integrations). To run ESLint in the console at any time, run the following:

```
$ npm run lint
```

Paragon's ESLint config is based off [eslint-config-edx](https://github.com/edx/eslint-config-edx/tree/master/packages/eslint-config-edx), which itself is based off [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb). Paragon uses ESLint 3 (and will upgrade to v4 as soon as eslint-config-airbnb releases a supported version), which itself comes with a number of built-in rules. This configuration is highly opinionated and may contain some rules with which you aren't yet familiar, like [comma-dangle](http://eslint.org/docs/rules/comma-dangle), but rest assured, you're writing modern, best-practice JS 💅

One of the most powerful features of this ESLint config is its inclusion of [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y). This plugin actually enforces accessibility best practices at the _linter_ level. It will catch things reviewers might not notice, like [event handlers bound to noninteractive elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md). Of course, it won't catch *all* accessibility violations, but it's a pretty good low-pass filter.

## Testing

Paragon uses [Jest](https://facebook.github.io/jest/) with [Enzyme](https://github.com/airbnb/enzyme) for tests and coverage. Both libraries are full-featured and very well supported.

### Unit Testing

[Jest](https://facebook.github.io/jest/) is an all-in-one test runner and assertion library created for use with React components. Jest's [API](https://facebook.github.io/jest/docs/en/api.html) is similar to Jasmine's and comes with functionality for mocking and spying as well. Check out [the docs](https://facebook.github.io/jest/docs/en/getting-started.html) for more details -- they are very comprehensive.

Paragon also uses Airbnb's [Enzyme](http://airbnb.io/enzyme/) library to help render our components within unit tests. Enzyme comes with a number of utilities for shallow rendering, mounting components, querying the DOM, simulating DOM events, and querying React components themselves. Read [the docs](http://airbnb.io/enzyme/docs/api/index.html) for more details.

To run the unit tests, run:

```
npm run test
```

To add unit tests for a component, create a file in your component's directory named `<ComponentName>.test.js`. Jest will automatically pick up this file and run the tests as part of the suite. Take a look at [Dropdown.test.jsx](https://github.com/edx/paragon/blob/master/src/Dropdown/Dropdown.test.jsx) or [CheckBox.test.jsx](https://github.com/edx/paragon/blob/master/src/CheckBox/CheckBox.test.jsx) for examples of good component unit tests.

#### Run Unit Tests in Chrome DevTools Inspector

To run the unit tests in the Chrome DevTools inspector, run:

```
npm run debug-test
```

Then, open `chrome://inspect` in your Chrome browser and select the "node_modules/.bin/jest" target to open the Chrome DevTools. You can set breakpoints in Chrome DevTools or insert a `debugger;` statement into the code to pause execution at that point.

![Screenshot of Chrome on the chrome://inspect page](docs/inspect-chrome-jest.png)

### Snapshot Testing

Jest has built-in [snapshot testing](http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest) functionality which serves as a good means of smoketesting components to ensure they render in a predictable way.

When you modify components or stories (or add new components or stories), make sure to update the snapshots or else the snapshot tests will fail. It's easy to do -- just run:

```
$ npm run snapshot
```

If the snapshot tests fail, it's generally pretty easy to tell whether it's happening because of a bug or because the snapshots need to be updated. Don't be afraid to inspect the test output for clues!

### Coverage

Paragon measures code coverage using Jest's built-in `--coverage` flag (which I believe uses istanbul under the hood) and report it via [Coveralls](https://coveralls.io/github/edx/paragon). Shoot for 100% test coverage on your PRs, but use your best judgment if you're really struggling to cover those last few lines. At the very least, don't *reduce* total coverage. Coveralls will fail your build if your PR reduces coverage.

## Semantic Release

Paragon uses the [`semantic-release` package](https://github.com/semantic-release/semantic-release) to automate its release process (creating Git tags, creating GitHub releases, and publishing to NPM).

### Commit Messages

[`semantic-release` analyzes commit messages to determine whether to create a `major`, `minor`, or `patch` release](https://github.com/semantic-release/semantic-release#default-commit-message-format) (or to skip a release).
Paragon currently uses [the default conventional Angular changelog rules](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) which means that there are **3** commit types that will trigger a release:
1. `feat` (`minor` release)
2. `fix` (`patch` release)
3. `perf` (`patch` release)

[There are other commit types](https://github.com/marionebl/commitlint/blob/master/%40commitlint/config-angular-type-enum/index.js#L1-L12) that will not trigger a release that you can use at your own discretion. Suggested prefixes are `docs`, `chore`, `style`, `refactor`, and `test` for non-changelog related tasks.

#### Breaking Changes

Any of the previous `3` commit types **combined with `BREAKING CHANGE` in the commit message body** will trigger a `major` version release.

##### Example Breaking Change commit message

```
perf(pencil): remove graphiteWidth option

BREAKING CHANGE: The graphiteWidth option has been removed. The default graphite width of 10mm is always used for performance reason.
```

## Treeshaking

Paragon is distributed on npm as ES6 modules.  This means that webpack can use treeshaking on any Paragon components that a consuming app is not using, resulting in greatly reduced bundle sizes.

To get treeshaking to work, your app may require some updates - most notably, Babel 7.  See this PR for an example of the changes necessary to update an app to take advantage of treeshaking with Paragon: https://github.com/edx/frontend-app-payment/pull/48
