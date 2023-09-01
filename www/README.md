# Paragon Documentation

This documentation site serves as the both the documentation and workbench for Paragon. Get started:

1. Install dependencies

```sh
npm install
```

2. Start the dev server

```sh
npm start
```

3. Navigate to `http://localhost:8000/` which corresponds to `src/pages/index.mdx`

Edits made to react components in `src/` will be hot-reloaded in this doc site.

## Including a custom theme

1. Create a separate SASS stylesheet with your theme in `src/scss`, e.g. `src/scss/my-theme.scss`.
2. Add your theme to `theme-config.js`, e.g.

```javascript
exports.THEMES = [
  ...,
  // Provide configuration of your theme so that documentation site can pick it up
  //
  // label: Label of your theme which  will appear in theme selector
  // stylesheet: Name of your theme's stylesheet (without extension) which you created during the first step,
  //             it's assumed that stylesheet is located in 'src/scss'. The stylesheet will be compiled into CSS
  //             and placed into ./public/static directory under <stylesheet>.css name
  {
    label: 'My custom theme',
    stylesheet: 'my-theme',
  },
];
```

3. Build your theme

  - If you have already started the dev server with `npm start`, run
    ```sh
    npm run build-themes
    ```

    the command will build your theme and add it to the site
  - If you haven't started the dev server yet, start it with

    ```sh
    npm start
    ```

    and your theme will automatically get picked up during the build.

## Feature Flags
In some scenarios, it is helpful to put your changes to the Paragon documentation site behind a feature flag so that you have more control over how a particular feature or change is rolled out more broadly.

### Configuring feature flags
To configure feature flags for the documentation site, see the file `src/config.js` for instructions.

### Enabling a feature flag
A feature flag may be enabled in two ways:
1. Environment variable. This will allow you to persist the state of a feature flag at build time, with no way to disable it.
2. Query parameter. Adding `?feature=` to the URL as a query parameter, you can temporarily enable one or more features.

### Feature Flags information
Listed features below are set up in the doc site. Some features can be enabled by default. To disable a specific feature, don't pass anything to the corresponding variable.

#### Axe
[Axe](https://www.npmjs.com/package/axe-core) is an accessibility testing engine for websites and other HTML-based user interfaces. By default, it is enabled and controlled by `FEATURE_ENABLE_AXE`. Open the console on a particular page on the site to see warning and errors from this package.

## A note about .mdx files

MDX is a flavor of Markdown that affords writing JSX directly inside markdown files. For more information visit the website: [https://mdxjs.com/](https://mdxjs.com/).

Syntax highlighting:

- For VSCode: [https://marketplace.visualstudio.com/items?itemName=silvenon.mdx](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)
- For SublimeText [https://packagecontrol.io/packages/MDX%20Syntax%20Highlighting](https://packagecontrol.io/packages/MDX%20Syntax%20Highlighting)
