const fs = require('fs');

// These name conflict with Paragon's component names, so we rename them to {iconName}_icon.
const CONFLICTING_ICONS = [
  'badge',
  'check_box',
  'image',
  'input',
  'menu',
  'spinner',
  'tab',
]

/*
  Copies all sharp svg mui icons from @material-icons package to svg directory skipping existing ones.
 */
const muiIcons = fs.readdirSync('../node_modules/@material-icons/svg/svg/');
muiIcons.forEach((iconName) => {
  if (!fs.existsSync(`./svg/${iconName}.svg`) && !fs.existsSync(`./svg/${iconName.replaceAll('-', '').replaceAll('_', '')}.svg`)) {
    const resolvedName = CONFLICTING_ICONS.includes(iconName) ? `${iconName}_icon` : iconName;
    fs.copyFileSync(`../node_modules/@material-icons/svg/svg/${iconName}/sharp.svg`, `./svg/${resolvedName}.svg`);
  }
})
