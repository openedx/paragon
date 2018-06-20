# ListBox

Provides a ListBox component that takes ListBoxOption components as children and handles the selection of and navigation through the components.

## API

### `children` (ListBoxOption component or ListBoxOption component array; required)
`children` specifies the ListBoxOption component(s) that will be displayed within the ListBox element. You can pass in one or more ListBoxOption components.

### `className` (string; optional)
`className` specifies Bootstrap class names to apply to the ListBox component. The default is an empty string.

### `selectedOptionIndex` (non-negative integer; optional)
Although the ListBox component keeps track of which ListBoxOption is selected, `selectedOptionIndex` provides a mechanism for an override, if necessary. An example would be to clear the selectedOption when moving between views. Note that override is not permanent and that clicking on a ListBoxOption or interacting with the ListBox with the keyboard will change the selected ListBoxOption relative to the original override. The default is undefined.

### `tag` (string; optional)
`tag` is used to specify the element type of the rendered ListBox component. The default is div. Example alternatives include ol, ul, span, etc.


