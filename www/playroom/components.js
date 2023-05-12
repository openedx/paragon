const components = require('../../src');

// Some icons have the same names as Paragon's components,
// so we rename them here first before exporting to playroom
const {
  Badge: BadgeIcon,
  CheckBox: CheckBoxIcon,
  Image: ImageIcon,
  Input: InputIcon,
  Menu: MenuIcon,
  Spinner: SpinnerIcon,
  Tab: TabIcon,
  ...restIcons
} = require('../../icons');

module.exports = {
  BadgeIcon,
  CheckBoxIcon,
  InputIcon,
  ImageIcon,
  MenuIcon,
  SpinnerIcon,
  TabIcon,
  ...restIcons,
  ...components,
};
