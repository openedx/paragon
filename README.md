# Paragon

[![Build Status](https://travis-ci.org/edx/paragon.svg?branch=master)](https://travis-ci.org/edx/paragon) [![Coveralls](https://img.shields.io/coveralls/edx/paragon.svg?branch=master)](https://coveralls.io/github/edx/paragon) [![Greenkeeper badge](https://badges.greenkeeper.io/edx/paragon.svg)](https://greenkeeper.io/)
[![npm_version](https://img.shields.io/npm/v/@edx/paragon.svg)](@edx/paragon)
[![npm_downloads](https://img.shields.io/npm/dt/@edx/paragon.svg)](@edx/paragon)
[![license](https://img.shields.io/npm/l/@edx/paragon.svg)](@edx/paragon)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


Paragon provides accessible React components for use within the Open edX platform and beyond.

<img src="http://i.imgur.com/uxTl3L3.gif" width="200" alt="sparkly 8-bit diamond" />

Components' markup, keyboard triggers, and behavior are based on the [WAI-ARIA 1.1 Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/). Components are styled with [Bootstrap 4](https://v4-alpha.getbootstrap.com/) via CSS Modules. Documentation/demo site is available at http://edx.github.io/paragon.

## Usage

Paragon requires React 16 or higher. To install Paragon into your project:

```
npm i --save @edx/paragon
```

Since Paragon is a React library, components must be rendered with React and ReactDOM. This doesn't mean the entire page has to be rendered with React. You can read up about rendering React into a page within the [official ReactDOM documentation](https://reactjs.org/docs/react-dom.html).

### Export Targets

Paragon's production build ships with two different export targets:

**`themeable`**: This is the default export intended for use within Bootstrap 4 pages. Components ship with stock Bootstrap classnames and can accept Bootstrap themes. This build assumes Bootstrap/Font Awesome are already available on the consuming page. You should not need to add any additional stylesheets -- just plug and go. Import syntax is as follows:

`import { ComponentName } from '@edx/paragon';`

**`static`**: The static build is intended for use within legacy pages not styled with Bootstrap 4. Component classnames are namespaced with the `paragon__` prefix so as not to conflict with existing classnames defined elsewhere on the page. Be cognizant of poorly scoped legacy rules (e.g. a rule for all `input` or `h1` tags), which can still affect Paragon components. This build comes with its own stylesheet, available at `/static/paragon.min.css`. You must include this stylesheet on any page that uses Paragon components. Components can be imported thus:

`import { ComponentName } from '@edx/paragon/static';`

Because of the additional weight of the `static` stylesheet (>100k), the `static` target exports should be used sparingly. If possible, consuming pages should be converted to standard Bootstrap instead.

### Components

Demo implementations of each component are viewable at the Paragon doc site at https://edx.github.io/paragon. API documentation for each component is available below:

- [asInput](src/asInput)
- [Button](src/Button)
- [CheckBox](src/CheckBox)
- [CheckBoxGroup](src/CheckBoxGroup)
- [Collapsible](src/Collapsible)
- [Dropdown](src/Dropdown)
- [Hyperlink](src/Hyperlink)
- [Icon](src/Icon)
- [InputSelect](src/InputSelect)
- [InputText](src/InputText)
- [Modal](src/Modal)
- [RadioButtonGroup](src/RadioButtonGroup)
- [StatusAlert](src/StatusAlert)
- [Table](src/Table)
- [Tabs](src/Tabs)
- [TextArea](src/TextArea)

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

#### Run Unit Tests in Chrome DevTools Inspector

To run the unit tests in the Chrome DevTools inspector, run:

```
npm run debug-test
```

Then, open `chrome://inspect` in your Chrome browser and select the "node_modules/.bin/jest" target to open the Chrome DevTools. You can set breakpoints in Chrome DevTools or insert a `debugger;` statement into the code to pause execution at that point.

![Screenshot of Chrome on the chrome://inspect page](docs/inspect-chrome-jest.png)

### Snapshot Testing

Jest has built-in [snapshot testing](http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest) functionality which serves as a good means of smoketesting components to ensure they render in a predictable way. Paragon's Jest snapshots are automatically generated from components' Storybook stories using the [Storyshots addon](https://github.com/storybooks/storybook/blob/4b6a93acfbaf044d85dd8ee7a7671239ea1ba01d/addons/storyshots/README.md) -- pretty cool, huh?

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

##### Example Release Notes

![alt-image](https://i.imgur.com/hk2qkic.png)

#### `Angular` Commit Message Convention

Paragon currently uses [the `Angular` commit message convention](https://gist.github.com/stephenparish/9941e89d80e2bc58a153). As documented in the previously linked gist, a commit that follows the `Angular` commit message convention has four parts:
1. A `type` - is this commit a `feat`, `fix`, `chore`, `docs`, etc.? There is a set of `type` values to choose from, but again, **only the `feat`, `fix`, `perf`, and `breaking`** `type` values will trigger a release.
2. A `scope` - what is this commit impacting? Did you fix a bug in the `Hyperlink` component? Did you add a new feature to the `RadioButtonGroup` component? Currently, the `scope` must be lower-case and `-` separated though switching this to being `camelCase` is currently being investigated.
3. A `subject` - provide a short description of _what_ your change is.
  * use imperative, present tense language (so `change` not `changed` or `changes`)
  * don't capitalize the first letter
  * don't add a period (`.`) at the end
  * there is a 50 character limit
4. A `body` (optional) - add more detail about your change
5. A `footer` (optional)
  * > All breaking changes have to be mentioned in footer with the description of the change, justification and migration notes - [`Angular` commit message specification](https://gist.github.com/stephenparish/9941e89d80e2bc58a153#breaking-changes)

##### Examples
This will lead to a patch version bump
> fix(someComponent): fix tab accessibility issue in someComponent

This will lead to a minor version bump
> feat(newComponent): add newComponent`

This will lead to a patch version bump - note the body
>fix(anotherComponent): fix escape key accessibility issue
>
> Unable to clear anotherComponent's popup using escape key.
> By updating the onKeyPress event handler to close popup window on escape key press, accessibility issue was resolved.


#### Using `commitlint` in Paragon

Paragon uses the [`commitlint`](https://github.com/marionebl/commitlint) package to lint commit messages. Paragon currently has [a `commit message` hook](https://github.com/edx/paragon/blob/master/package.json#L20) that runs `commitlint`'s, well, commit linting, on the given commit message using the configuration specified in [`commitlint.config.js`](https://github.com/edx/paragon/blob/master/commitlint.config.js). If a commit message fails linting, the commit associated with that message does not end up getting committed.

`commitlint` also comes with [a helpful CLI](https://github.com/marionebl/commitlint/tree/master/@commitlint/cli) that walks one through the entire semantic commit process. This CLI can be triggered by running the `npm run gc` command.

![example-commitlint](https://media.giphy.com/media/3ohs7H8y9Qi7HOHWko/giphy.gif)

As noted above, the only required fields are **`type`, `scope`, and `subject`**. The `body` and `footer` can be skipped through the CLI by typing `:skip`.

### Pull Requests

Since all pull requests should be `squashed` / `rebased` down to a single semantically-formatted commit, it is recommended that **all pull requests have a title that matches the commit message**. This way, whether you're merging a pull request, squashing and merging a pull request, or rebasing and merging a pull request, the correct commit message will be analyzed by `semantic-release`.

### Merging, Building, and Releasing

> When `semantic-release` is set up it will do that after every successful continuous integration build of your master branch (or any other branch you specify) and publish the new version for you - [`semantic-release` README](https://github.com/semantic-release/semantic-release)

Release-related activity only happens
1. After a successful Travis build on `master` ([the `semantic-release` NPM command is only executed as part of the `after_success` Travis hook](https://github.com/edx/paragon/blob/master/.travis.yml#L21-L22).)
2. If commit(s) exist with a format that would trigger a release

If a release occurs, a new GitHub release should be found with relevant notes that are parsed from commits associated with that release.

So for the following release
![example-release](https://imgur.com/RqFG7ND.png)
the commit message for that release was `fix(asinput): Override state value when props value changes`, and a new `patch` release was created with release notes from the commit message.

After a GitHub release is created, the package is then published to NPM.
