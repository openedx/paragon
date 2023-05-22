const fs = require('fs');

/*
  Copies all sharp svg mui icons from @material-icons package to svg directory skipping existing ones.
 */
const muiIcons = fs.readdirSync('../node_modules/@material-icons/svg/svg/');
muiIcons.forEach((iconName) => {
  if (!fs.existsSync(`./svg/${iconName}.svg`) && !fs.existsSync(`./svg/${iconName.replaceAll('-', '').replaceAll('_', '')}.svg`)) {
    fs.copyFileSync(`../node_modules/@material-icons/svg/svg/${iconName}/sharp.svg`, `./svg/${iconName}.svg`);
  }
})
