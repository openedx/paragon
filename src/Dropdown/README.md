# Dropdown

Provides a dropdown component that will maintain focus and keyboard navigation on `Item` child components.

Note: When passing in a component to `Item` that uses a prop other than `ref` for access to a focusable DOM element (such as the `Link` component from `react-router`, which uses `innerRef`), it's recommended to wrap the component in another component that exposes it's own focus method.

## API

### `buttonClassName` (string; optional)
`buttonClassName` is used to determine the type of button to be rendered. See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable button types and its classNames.

### `buttonContent` (string; required)
`buttonContent` specifies the text that is displayed within the original dropdown button. Can have an 'icon' element to be displayed alongside the text.

## Subcomponent `Item`
`Item` specifies the items that will be rendered within the dropdown for selection.  It accepts React/HTML elements.

### `tag` (string; optional)
`tag` is used to determine the type of tag to be rendered. Default is an <a></a> tag.
