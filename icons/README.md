# Paragon Icons

This module contains icons for use with the Paragon `<Icon />` component and props like `<Button iconBefore={...}>`:

```jsx
import { Add } from '@openedx/paragon/icons';

<Button iconBefore={Add}>Add New Thing</Button>
```

## How it works

- `svg/` holds the source `.svg` file for every icon. This is the only place icons are edited.
- `build-icons.mjs` optimizes them with [SVGO](https://github.com/svg/svgo) and generates:
  - `index.js`: every icon as one line, e.g. `export const Add = /*#__PURE__*/ icon("Add", ["M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"]);`.
    Each icon is a separate export, so bundlers drop the icons an app doesn't use.
  - `index.d.ts`: types for each icon, plus the `IconName` type.

  Both files are committed. CI checks that they match `svg/`.
- `build-compat.mjs` generates the deprecated `es5/` and `jsx/` folders (not committed). They keep old import paths
  like `@openedx/paragon/icons/es5/Add` working by re-exporting from `index.js`. The root `make build` runs it.

## Adding an icon

1. Install dependencies: `npm install` (from the repository root).
2. Add the `.svg` file to `svg/`. It should be designed for display at 24px by 24px. The file name sets the icon's
   name: `arrow_back.svg` becomes `ArrowBack`. A name starting with a digit gets a `Pgn` prefix: `5g.svg` becomes `Pgn5G`.
3. Regenerate the icons: `npm run build` (in this directory).

Every icon is rendered with `fill="currentColor"`, so it takes the text color of its surroundings. Multi-color
and raster (embedded image) icons are not supported.

Most of the icons are taken from [MUI icons](https://github.com/material-icons/material-icons) by the
`copy-mui-icons.js` script, which `npm run build` runs. Things to keep in mind:
- The script does not overwrite existing files. To update an icon, copy the new version into `svg/` manually and run
  the build.
- When a new version of the `@material-icons/svg` package adds icons, update its version in `package.json` before
  running the build to pick them up.

Brand icons are copied from [Bootstrap Icons](https://icons.getbootstrap.com/) by `copy-brand-icons.js`.
