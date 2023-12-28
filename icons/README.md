# Paragon Icons

This module contains icons for use with the Paragon `<Icon />` component. This module generates source `.svg` icons into jsx and es5 React components.

To add a new icon:

1. Install dependencies

```sh
npm install
```

2. Add the desired `.svg` icon file to the svg folder. It should be designed for display at 24px by 24px.

3. Generate the React components

```sh
npm run build
```

Note that most of the icons are taken from [MUI icons](https://github.com/material-icons/material-icons), this is achieved through `copy-mui-icons.js` script located in this directory which is part of `npm run build` command. There are a couple of things to keep in mind:

- the script currently does not override existing files, so if you need updated version of the icon you will need to update it manually (copy the icon to `svg` directory and run build command)
- if new version of the `material-icons` package is published with new icons, the version needs to be updated in `package.json` before running the build command to include new icons
