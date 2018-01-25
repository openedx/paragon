# Checkbox Component

Checkbox based off of the [WAI-ARIA authoring guidelines for the checkbox component](https://www.w3.org/TR/wai-aria-1.1/#checkbox). The checkbox is an HTMl input element with added attributes to ensure proper functionality and accessibility. The checkbox is wrapped in an `asInput` component. The `asInput` wrapper is passed the input element as well as a second parameter set to `false` to ensure that the label is placed to the right of the checkbox.

The following parameters should be passed into every checkbox component:
* `name` (`String`): `name` attribute
* `label` (`String`): label to be placed next to the checkbox

The following parameters can optionally be passed into a checkbox component:
* `checked` (`Boolean`): `true` if the state should be checked, `false` otherwise. This prop can be used to manage the Checkbox more directly, overriding the default Checkbox checked state.
* `disabled` (`Boolean`): `true` if the checkbox should be disabled, `false` otherwise
* `onChange`: function to be called when the checkbox changes state
  * Function will be called with the arguments: `checked` (`Boolean`), `name` (`String`)

The implementation of the checkbox contains the following functions:
* `constructor()`: The constructor sets the `id` for the checkbox and sets whether the initial state should be checked or unchecked
* `handleClick()`: Switches the state of the checkbox; also calls the `onChangeState()` function if one has been passed in
* '`render()`: Returns the checkbox as an input element with seven attributes: `id`, `type`, `name`, `defaultChecked`, `aria-checked`, `onClick`, and `disabled`.
