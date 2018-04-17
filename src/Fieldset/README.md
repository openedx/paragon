# Fieldset

Wraps many inputs in a border and allows validating them as one form control.

## API

### `children` (node; optional)
`children` specifies the elements that the Fieldset will wrap. The default is null.

### `className` (string; optional)
`className` specifies Bootstrap class names to apply to the input component. The default is an empty array.

### `id` (string; optional)
`id` specifies a unique identifier for the fieldset.  It will be used to create an id for the ValidationMessage that is referenced by an `aria-describedby` on the `fieldset`. The default is an auto-generated id of the form `fieldsetN` where N is an auto-incremented integer.

### `invalidMessage` (string or element; optional)
`invalidMessage` specifies the message to display immediately below the fieldset outside the border when `isValid` is false. The default is an empty string.

### `isValid` (boolean; optional)
`isValid` specifies whether the whole fieldset has validated correctly. Consider updating this from an `onSubmit` handler of a parent `form` element. The default is true.

### `legend` (string or element; required)
`legend` specifies the label to be used for the overarching fieldset. This can be a string or element type. It appears at the top of the fieldset, inline with the border.

### `variant` (object with a string `status` field; optional)
`variant` specifies which type of fieldset to display. These are the Variants currently supported:

#### `status`

**INFO** (default):
* Fieldset border is always black, even when `isValid` is `false`.
* Displays `invalidMessage` in black.
* Does not display an icon next to `invalidMessage`.

**DANGER**:
* Fieldset border is red when `isValid` is `false` and black when `true`.
* Displays `invalidMessage` in red.
* Displays an "exclamation" icon next to `invalidMessage`.

### `variantIconDescription` (string or element; optional)
`variantIconDescription` can be used to provide a screen-reader description of the icon used in the validation message displayed when `isValid` is false and `variant.status` is set to a Variant that needs an icon. The default is an empty string.
