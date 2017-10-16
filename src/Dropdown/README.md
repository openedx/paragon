# Dropdown

Provides a dropdown component that will maintain focus and keyboard navigation on an array of `menuItems` that is passed in.

## API

### `buttonType` (string; optional)
`buttonType` is used to determine the type of button to be rendered.  See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable button types. The default is `buttonType="light"`.

### `menuItems` (shape array; required)
`menuItems` specifies the list of items that will be rendered within the dropdown for selection.  It takes in the type `shape` that appears a Javascript object containing the menu item `label` and the `href` properties as strings.

### `title` (string; required)
`title` specifies the text that is displayed within the original dropdown button.
