---
title: 'InputSelect'
type: 'component'
components:
- InputSelect
categories:
- Forms (deprecated)
status: 'Deprecate Soon'
designStatus: 'TBD'
devStatus: 'To Do'
notes: |
  Replaced by Input and ValidationFormGroup
---

## basic usage

```jsx live
<InputSelect
  name="fruits"
  label="Fruits"
  value="strawberry"
  options={[
    'apple',
    'orange',
    'strawberry',
    'banana',
  ]}
/>
```

## separate labels and values

```jsx live
<InputSelect
  name="new-england-states"
  label="New England States"
  value="RI"
  options={[
    { label: 'Connecticut', value: 'CN' },
    { label: 'Maine', value: 'ME' },
    { label: 'Massachusetts', value: 'MA' },
    { label: 'New Hampshire', value: 'NH' },
    { label: 'Rhode Island', value: 'RI' },
    { label: 'Vermont', value: 'VT' },
  ]}
/>
```

## separate option groups

```jsx live
<InputSelect
  name="northeast-states"
  label="Northeast States"
  value="MD"
  options={[
    {
      label: 'New England States',
      options: [
        { label: 'Connecticut', value: 'CN' },
        { label: 'Maine', value: 'ME' },
        { label: 'Massachusetts', value: 'MA' },
        { label: 'New Hampshire', value: 'NH' },
        { label: 'Rhode Island', value: 'RI' },
        { label: 'Vermont', value: 'VT' },
      ],
    },
    {
      label: 'Mid Atlantic States',
      options: [
        { label: 'Delaware', value: 'DE' },
        { label: 'Maryland', value: 'MD' },
        { label: 'New Jersey', value: 'NJ' },
        { label: 'New York', value: 'NY' },
        { label: 'Pennsylvania', value: 'PA' },
        { label: 'Virginia', value: 'VA' },
        { label: 'Washington, DC', value: 'DC' },
        { label: 'West Virginia', value: 'WV' },
      ],
    },
  ]}
/>
```

## with validation

```jsx live
<InputSelect
  name="color"
  label="Favorite Color"
  options={['', 'red', 'orange', 'yellow', 'green', 'blue', 'purple']}
  validator={value => {
    let feedback = { isValid: true };
    if (!value) {
      feedback = {
        isValid: false,
        validationMessage: 'Please make a selection.',
      };
    }
    return feedback;
  }}
/>
```

## disabled usage

```jsx live
<InputSelect
  name="fruits"
  label="Fruits"
  aria-label="Fruits"
  value="strawberry"
  options={['
    apple',
    'orange',
    'strawberry',
    'banana',
  ]}
  disabled
/>
```

## with disabled option

```jsx live
<InputSelect
  name="fruits"
  label="Fruits"
  value="strawberry"
  options={[
    { label: 'apple', value: 'apple' },
    { label: 'orange', value: 'orange', disabled: true },
    { label: 'banana', value: 'banana', disabled: true },
  ]}
/>
```
