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

## Developing with a theme applied

1. Run
```sh
npm run develop:with-theme
```

(Coming soon) Control the theme used by installing a custom brand under the npm alias `@edx/brand`.
```sh
npm i @edx/brand@file:~/my-brand
```

## A note about .mdx files

MDX is a flavor of Markdown that affords writing JSX directly inside markdown files. For more information visit the website: [https://mdxjs.com/](https://mdxjs.com/).

Syntax highlighting:

- For VSCode: [https://marketplace.visualstudio.com/items?itemName=silvenon.mdx](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)
- For SublimeText [https://packagecontrol.io/packages/MDX%20Syntax%20Highlighting](https://packagecontrol.io/packages/MDX%20Syntax%20Highlighting)
