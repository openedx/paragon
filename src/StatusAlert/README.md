# StatusAlert

Provides a status alert component with customizable dialog options. StatusAlert has an X button on the right by default (see dismissible option).

## API

### `alertType` (string; optional)
`alertType` specifies the type of alert that is being diplayed. It defaults to "warning".  See the other available [bootstrap](https://v4-alpha.getbootstrap.com/components/alerts/) options.

### `className` (string array; optional)
`className` is a string array that defines the classes to be used within the status alert.

### `dialog` (string or element; required)
`dialog` is a string or an element that is rendered inside of the status alert as the main data.

### `dismissible` (boolean; optional)
`dismissible` specifies if the status alert will include the dismissible X button to close the alert. It defaults to true.

### `onClose` (function; conditionally required)
`onClose` is a function that is called on close. It can be used to perform actions upon closing of the status alert, such as restoring focus to the previous logical focusable element.  It is only required if `dismissible` is set to `true` and not required if the alert is not `dismissible`.

### `open` (boolean; optional)
`open` specifies whether the status alert renders open or closed on the initial render. It defaults to false.
