# ListBoxOption:

Provides a ListBoxOption component that is passed as a child to the ListBox component.

## API

### `children` (node array; required)
`children` specifies the array of elements that will be displayed within the ListBoxOption component.

### `className` (string; optional)
`className` specifies Bootstrap class names to apply to the ListBoxOption component. The default is an empty string.

### `onSelect` (function, optional)
`onSelect` is a function that is called when a ListBoxOption component is selected, by mouse or by keyboard, to perform some additional action.

### `tag` (string; optional)
`tag` is used to specify the element type of the rendered ListBoxOption component. The default is div. Example alternatives include li, span, etc.