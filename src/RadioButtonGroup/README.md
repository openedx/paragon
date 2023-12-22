---
title: 'RadioButtonGroup'
type: 'component'
components:
- RadioButtonGroup
categories:
- Forms (deprecated)
tabName: 'implementation'
status: 'Deprecate Soon'
designStatus: 'To Do'
devStatus: 'To Do'
notes: |
  Replaced by Form.Radio and From.RadioSet
---

## Unselected minimal usage

```jsx live
<RadioButtonGroup
  name="rbg"
  label="Radio Button Group"
  onBlur={() => console.log('blurred')}
  onChange={() => console.log('onChange')}
  onClick={() => console.log('onClick')}
  onFocus={() => console.log('onFocus')}
  onKeyDown={() => console.log('onKeyDown')}
>
  <RadioButton value="jaebaebae">First Value</RadioButton>
  <RadioButton value="value2">Second Value</RadioButton>
  <RadioButton value="value3">Third Value</RadioButton>
</RadioButtonGroup>
```

## Selected minimal usage

```jsx live
<RadioButtonGroup
  name="rbg-2"
  label="Radio Button Group"
  onBlur={() => console.log('blurred')}
  onChange={() => console.log('onChange')}
  onClick={() => console.log('onClick')}
  onFocus={() => console.log('onFocus')}
  onKeyDown={() => console.log('onKeyDown')}
  selectedIndex={1}
>
  <RadioButton value="jaebaebae">First Value</RadioButton>
  <RadioButton value="value2">Second Value</RadioButton>
  <RadioButton value="value3">Third Value</RadioButton>
</RadioButtonGroup>
```
