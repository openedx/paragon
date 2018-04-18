# Modal

Provides a basic modal component with customizable title, body, and footer buttons. Modal has X button in top right and Close button in bottom right by default.

## API

### `open` (boolean; optional)
`open` specifies whether the modal renders open or closed on the initial render. It defaults to false.

### `title` (string or element; required)
`title` is a string or an element that is rendered inside of the modal title, above the modal body.

### `body` (string or element; required)
`body` is a string or an element that is rendered inside of the modal body, between the title and the footer.

### `buttons` (element or shape in form of buttonPropTypes array; optional)
`buttons` is an array of either elements or shapes that take the form of the buttonPropTypes. See the [buttonPropTypes](https://github.com/edx/paragon/blob/master/src/Button/index.jsx#L40) for a list of acceptable props to pass as part of a button.

### `closeText` (string; optional)
`closeText` specifies the display text of the default Close button. It defaults to "Close".

### `onClose` (function; required)
`onClose` is a function that is called on close. It can be used to perform actions upon closing of the modal, such as restoring focus to the previous logical focusable element.

### `renderHeaderCloseButton` (boolean; optional)
`renderHeaderCloseButton` specifies whether a close button is rendered in the modal header. It defaults to true.
