---
title: 'RadioButtonGroup'
type: 'component'
components:
- RadioButtonGroup
categories:
- Forms (deprecated)
status: 'Deprecate Soon'
designStatus: 'To Do'
devStatus: 'To Do'
notes: |
  Refactor to use Input component
  and refresh checkbox designs
---

## unselected minimal usage

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

## selected minimal usage

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
