# Paragon

[![Build Status](https://travis-ci.org/edx/paragon.svg?branch=master)](https://travis-ci.org/edx/paragon) [![Coveralls](https://img.shields.io/coveralls/edx/paragon.svg?branch=master)](https://coveralls.io/github/edx/paragon) [![Greenkeeper badge](https://badges.greenkeeper.io/edx/paragon.svg)](https://greenkeeper.io/)

Paragon provides accessible React components for use within the Open edX platform and beyond.

<img src="http://i.imgur.com/uxTl3L3.gif" width="200" alt="sparkly 8-bit diamond" />

Components' markup, keyboard triggers, and behavior are based on the [WAI-ARIA 1.1 Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/). Components are styled with [Bootstrap 4](https://v4-alpha.getbootstrap.com/) via CSS Modules. Documentation/demo site is available at http://edx.github.io/paragon.

## Development

First, clone the repo and install dependencies. You must be running Node 6 or newer.

```
$ git clone git@github.com:edx/paragon.git
$ cd paragon
$ npm install
```

### Storybook

Paragon uses [Storybook](https://storybook.js.org/) to generate and serve its documentation/demo site. Storybook also serves as an excellent sandbox space to develop new components or modify existing ones. For each component, developers write React code "stories" demonstrating different ways to invoke it in order to show off its functionality. Storybook renders all the stories within its own runtime as interactive chunks of UI.

To start the Storybook server locally, run the following:

```
$ npm run start
```

Storybook will serve at http://localhost:6006. It's important to note that the Storybook server uses its own [webpack config file](https://github.com/edx/paragon/blob/master/.storybook/webpack.config.js) which is separate from the project root config.

### Adding a Component

To add a new component, create a directory within /src named `<ComponentName>` (use UpperCamelCase, per [Airbnb's React best practices](https://github.com/airbnb/javascript/tree/master/react)). Define your component (using the same `<ComponentName>` as the class name) within a file in this directory named `index.jsx`.

To see your component in action, you will need to create a new Storybook story for it. Create a file within your component's directory named `<ComponentName>.stories.js`. Check out [InputSelect.stories.jsx](https://github.com/edx/paragon/blob/master/src/InputSelect/InputSelect.stories.jsx) for an example of some good stories. Storybook will automatically pick up this file and serve its stories -- you should be able to see them linked from the left-hand menu.

Make sure to define PropTypes and DefaultProps on your components, using the [prop-types package](https://github.com/facebook/prop-types). PropTypes provide a clear API for your component and help consumers invoke it properly within their own code. In terms of functionality, ship an MVP component up-front. Don't make it do any more than is necessary. It's easy to add new functionality later on as needed, but it's much harder to remove functionality once we've released a component.

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

### Snapshot Testing

Jest has built-in [snapshot testing](http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest) functionality which serves as a good means of smoketesting components to ensure they render in a predictable way. Paragon's Jest snapshots are automatically generated from components' Storybook stories using the [Storyshots addon](https://github.com/storybooks/storybook/blob/4b6a93acfbaf044d85dd8ee7a7671239ea1ba01d/addons/storyshots/README.md) -- pretty cool, huh?

When you modify components or stories (or add new components or stories), make sure to update the snapshots or else the snapshot tests will fail. It's easy to do -- just run:

```
$ npm run snapshot
```

If the snapshot tests fail, it's generally pretty easy to tell whether it's happening because of a bug or because the snapshots need to be updated. Don't be afraid to inspect the test output for clues!

### Coverage

Paragon measures code coverage using Jest's built-in `--coverage` flag (which I believe uses istanbul under the hood) and report it via [Coveralls](https://coveralls.io/github/edx/paragon). Shoot for 100% test coverage on your PRs, but use your best judgment if you're really struggling to cover those last few lines. At the very least, don't *reduce* total coverage. Coveralls will fail your build if your PR reduces coverage.
