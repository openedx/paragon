# Radio Button Group

This component is comprised of `RadioButton` `children` and should be compliant with [the `WAI-ARIA` `Radio Group` specification](https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton).

## API

### `RadioButtonGroup`

### `label` (string; required)

`label` specifies the `aria-label` value for the `RadioButtonGroup`

### `name` (string; required)

`name` specifies the `name` value for the `RadioButtonGroup` so that no more than one `RadioButton` can be selected at any given time

### `onBlur` (function; optional)

`onBlur` specifies the callback for the `onBlur` event for each `RadioButton` within the group. The default value is a no-op function.

### `onClick` (function: optional)

`onClick` specifies the callback for the `onClick` event for each `RadioButton` within the group. The default value is a no-op function.

### `onFocus` (function: optional)

`onFocus` specifies the callback for the `onFocus` event for each `RadioButton` within the group. The default value is a no-op function.

### `onKeyDown` (function: optional)

`onKeyDown` specifies the callback for the `onKeyDown` event for each `RadioButton` within the group. The default value is a no-op function.

### `selectedIndex` (number: optional)

`selectedIndex` specifies which `RadioButton` is initially selected. The default value is `undefined` which signifies that no `RadioButton` is initially selected.

## `RadioButton`

### `value` (string, number, bool; required)

`value` represents the value attribute for a `RadioButton`

### `onBlur` (function; optional)

`onBlur` specifies the callback for the `onBlur` event. The default value is the `onBlur` callback specified in the `RadioButtonGroup`.

### `onClick` (function: optional)

`onClick` specifies the callback for the `onClick` event. The default value is the `onClick` callback specified in the `RadioButtonGroup`.

### `onFocus` (function: optional)

`onFocus` specifies the callback for the `onFocus` event. The default value is the `onFocus` callback specified in the `RadioButtonGroup`.

### `onKeyDown` (function: optional)

`onKeyDown` specifies the callback for the `onKeyDown` event. The default value is the `onKeyDown` callback specified in the `RadioButtonGroup`.

### Example Usage

```javascript
<RadioButtonGroup
  name="rbg"
  label="Radio Button Group"
  onBlur={someOnBlurFunction}
  onChange={someOnChangeFunction}
  onClick={someOnClickFunction}
  onFocus={someOnFocusFunction}
  onKeyDown={someOnKeyDownFunction}
>
  <RadioButton value="value1">First Value</RadioButton>
  <RadioButton value="value2">Second Value</RadioButton>
  <RadioButton value="value3">Third Value</RadioButton>
</RadioButtonGroup>
```