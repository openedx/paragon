# Dropdown

Provides a dropdown component that will maintain focus and keyboard navigation on an array of `menuItems` that is passed in.

Note: When passing in a component to `menuItems` that uses a prop other than `ref` for access to a focusable DOM element (such as the `Link` component from `react-router`, which uses `innerRef`), it's recommended to wrap the component in another component that exposes it's own focus method.

## API

### `buttonType` (string; optional)
`buttonType` is used to determine the type of button to be rendered.  See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable button types. The default is `buttonType="light"`.

### `menuItems` (shape array or element array; required)
`menuItems` specifies the list of items that will be rendered within the dropdown for selection.  It accepts an array of either: 1) Javascript objects containing the menu item `label` and the `href` properties as strings; or 2) React/HTML elements.

### `title` (string; required)
`title` specifies the text that is displayed within the original dropdown button.
