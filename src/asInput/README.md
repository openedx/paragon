# asInput

Handles all necessary props that are related to Input typed components.

## API

### `className` (string array; optional)
`className` specifies Bootstrap class names to apply to the input component. The default is an empty array.

### `description` (string or element; optional)
`description` can be used to provide a longer description of the component.  It will show up below the input component specified. The default is an empty string.

### `disabled` (boolean; optional)
`disabled` specifies if the component is disabled. The default type is false.

### `label` (string; required)
`label` specifies the label to be used for the overarching form-group. It appears above the input component.

### `name` (string; required)
`name` specifies the value for the name property within the component.

### `onBlur` (function; optional)
`onBlur` is a function that would specify what the input component should do when the `onBlur` event is triggered. For example, it could be used to update which element is currently in focus within the state. The default is an empty function.

### `onChange` (function; optional)
`onChange` is a function that would specify what the input component should do when the `onChange` event is triggered. For example, it could be storing the updated input data within the state. The default is an empty function.

### `required` (boolean; optional)
`required` specifies if the component is required. The default type is false.

### `validator` (function; optional)
`validator` specifies the function to use for validation logic if the input needs to be validated. Default is undefined.

### `value` (string; optional)
`value` specifies the value for the value property within the component. The default is an empty string.
