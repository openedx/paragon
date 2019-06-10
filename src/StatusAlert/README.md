# StatusAlert

Provides a status alert component with customizable dialog options. StatusAlert has an X button on the right by default (see dismissible option).

## API

### `alertType` (string; optional)
`alertType` specifies the type of alert that is being diplayed. It defaults to "warning".  See the other available [bootstrap](https://v4-alpha.getbootstrap.com/components/alerts/) options.

### `className` (string array; optional)
`className` is a string array that defines the classes to be used within the status alert.

### `children` (string or element; required)
`children` is a string or an element that is rendered inside of the status alert as the main data.

### `dismissible` (boolean; optional)
`dismissible` specifies if the status alert will include the dismissible X button to close the alert. It defaults to true.

### `onClose` (function; optional)
`onClose` is a function that is called on close. It can be used to perform actions upon closing of the status alert, such as restoring focus to the previous logical focusable element. 

### `icon` (object; optional)
`icon` optional icon can be added and is rendered before alert status.

### `isOpen` (boolean; required)
`isOpen` specifies whether the status alert renders open or closed on the initial render. State of isOpen should be maintained in the parent component.

### `toggleAlert` (function; required)
`toggleAlert` is a function that is called on close. It is used to toggle the state of isOpen. 
