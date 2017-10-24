# Button

Provides a button component that can be customized and handle multiple event handlers such as `onBlur`, `onClick`, and `onKeyDown`.

## API

### `buttonType` (string; optional)
`buttonType` is used to determine the type of button to be rendered.  See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable button types. For example, `buttonType="light"`. The default is `undefined`.

### `className` (string array; optional)
`className` specifies Bootstrap class names to apply to the button. See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable class names. The default is an empty array.

### `label` (string; required)
`label` specifies the text that is displayed within the button.

### `inputRef` (function; optional)
`inputRef` is a function that defines a reference for the button. An example `inputRef` from the calling component could look something like: `inputRef={(input) => { this.button = input; }}`. The default is an empty function.

### `isClose` (boolean; optional)
`isClose` is used to determine if the button is a "Close" style button to leverage bootstrap styling. Example use case is with the Status Alert [dismiss button](https://getbootstrap.com/docs/4.0/components/alerts/#dismissing). The default is false.

### `onBlur` (function; optional)
`onBlur` is a function that would specify what the button should do when the `onBlur` event is triggered. For example, the button could change in color or `buttonType` when focus is changed. The default is an empty function.

### `onClick` (function; optional)
`onClick` is a function that would specify what the button should do when the `onClick` event is triggered. For example, the button could launch a `Modal`. The default is an empty function.

### `onKeyDown` (function; optional)
`onKeyDown` is a function that would specify what the button should do when the `onKeyDown` event is triggered.  For example, this could handle using the `Escape` key to trigger the button's action. The default is an empty function.

### `type` (string; optional)
`type` is used to set the `type` attribute on the `button` tag.  The default type is `button`.
