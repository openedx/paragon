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
];

/*
  Copies all sharp svg mui icons from @material-design-icons package to svg directory skipping existing ones.
 */
const muiIcons = fs.readdirSync('../node_modules/@material-design-icons/svg/sharp');
muiIcons.forEach((iconName) => {
  if (!fs.existsSync(`./svg/${iconName}`) && !fs.existsSync(`./svg/${iconName.replaceAll('-', '').replaceAll('_', '')}`)) {
    const resolvedName = CONFLICTING_ICONS.includes(iconName) ? `${iconName}_icon` : iconName;
    fs.copyFileSync(`../node_modules/@material-design-icons/svg/sharp/${iconName}`, `./svg/${resolvedName}`);
  }
});

/*
  Copies all sharp svg mui symbols from @material-symbols package to svg directory skipping existing ones.
 */
  const muiSymbols = fs.readdirSync('../node_modules/@material-symbols/svg-400/sharp');
  muiSymbols.forEach((iconName) => {
    if (!fs.existsSync(`./svg/${iconName}`) && !fs.existsSync(`./svg/${iconName.replaceAll('-', '').replaceAll('_', '')}`)) {
      const resolvedName = CONFLICTING_ICONS.includes(iconName) ? `${iconName}_icon` : iconName;
      fs.copyFileSync(`../node_modules/@material-symbols/svg-400/sharp/${iconName}`, `./svg/${resolvedName}`);
    }
  });
  