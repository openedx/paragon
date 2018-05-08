# asInput

Handles all necessary props that are related to Input typed components.

## API

### `autoComplete` (string; optional)
`autoComplete` specifies whether or not an input field should have autocomplete enabled. It allows the browser to predict the value. When a user starts to type in a field, the browser should display options to fill in the field, based on earlier typed values. The default value is 'on'.

### `className` (string array; optional)
`className` specifies Bootstrap class names to apply to the input component. The default is an empty array.

### `dangerIconDescription` (string or element; optional)
`dangerIconDescription` can be used to provide a screen-reader description of the "exclamation" icon used in the validation message displayed when `isValid` is false and `themes` includes "danger". Only used if `validator` is not specified. The default is an empty string.

### `description` (string or element; optional)
`description` can be used to provide a longer description of the component.  It will show up below the input component specified. The default is an empty string.

### `disabled` (boolean; optional)
`disabled` specifies if the component is disabled. The default type is false.

### `label` (string or element; required)
`label` specifies the label to be used for the overarching form-group. This can be a string or element type. It appears above the input component by default.

### `inline` (boolean; optional)
`inline` specifies if the form-group will be displayed inline (label and input elements on the same line). The default is false.

### `inputGroupAppend` (element or element array; optional)
`inputGroupAppend` specifies the element(s) to display inline to the right of the input. See [the Bootstrap docs](https://getbootstrap.com/docs/4.0/components/input-group/) for more info on input groups. The default is `undefined`.

### `inputGroupPrepend` (element or element array; optional)
`inputGroupPrepend` specifies the element(s) to display inline to the left of the input. See [the Bootstrap docs](https://getbootstrap.com/docs/4.0/components/input-group/) for more info on input groups. The default is `undefined`.

### `name` (string; required)
`name` specifies the value for the name property within the component.

### `onBlur` (function; optional)
`onBlur` is a function that would specify what the input component should do when the `onBlur` event is triggered. For example, it could be used to update which element is currently in focus within the state. The default is an empty function.

### `onChange` (function; optional)
`onChange` is a function that would specify what the input component should do when the `onChange` event is triggered. For example, it could be storing the updated input data within the state. The default is an empty function.

### `required` (boolean; optional)
`required` specifies if the component is required. The default type is false.

### `themes` (array of strings; optional)
`themes` specifies the themes to apply to the input (e.g. "danger"). The default is an empty array.

### `validator` (function; optional)
`validator` specifies the function to use for validation logic if the input needs to be validated. The function receives the input value as a parameter and it must return an object which will be written to the component's state with `setState`. Default is undefined. E.g.:

```jsx
<InputText
  name="username"
  label="Username"
  description="The unique name that identifies you throughout the site."
  validator={(value) => {
    let feedback = { isValid: true };
    if (value.length < 3) {
      feedback = {
        isValid: false,
        validationMessage: 'Username must be at least 3 characters in length.',
        dangerIconDescription: 'Error',
      };
    }
    return feedback;
  }}
  themes={['danger']}
/>
```

### `isValid` (boolean; optional)
`isValid` specifies whether the current input has validated correctly. Consider updating this from an `onBlur` handler. Only used if `validator` is not specified. The default is true.

### `validationMessage` (string or element; optional)
`validationMessage` specifies the message to display when `isValid` is false.  Only used if `validator` is not specified. The default is an empty string.

### `value` (string or number; optional)
`value` specifies the value for the value property within the component. The default is an empty string.
