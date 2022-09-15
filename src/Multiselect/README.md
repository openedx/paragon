---
title: 'Multiselect'
type: 'component'
components:
- Multiselect
categories:
- Forms
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
---

A text input that allows the user to select multiple options. `Multiselect` is a modified version of React Select. For more information and props, please, check [React Select](https://react-select.com/home) documentation.

## Basic Usage

```jsx live
() => {
  const colourOptions = [
    {
      value: 'ocean',
      label: 'Ocean',
      color: '#00B8D9',
      isFixed: true
    },
    {
      value: 'blue',
      label: 'Blue',
      color: '#0052CC',
      isDisabled: true
    },
    {
      value: 'purple',
      label: 'Purple',
      color: '#5243AA'
    },
    {
      value: 'red',
      label: 'Red',
      color: '#FF5630',
      isFixed: true
    },
    {
      value: 'orange',
      label: 'Orange',
      color: '#FF8B00'
    },
    {
      value: 'yellow',
      label: 'Yellow',
      color: '#FFC400'
    },
    {
      value: 'green',
      label: 'Green',
      color: '#36B37E'
    },
    {
      value: 'forest',
      label: 'Forest',
      color: '#00875A'
    },
    {
      value: 'slate',
      label: 'Slate',
      color: '#253858'
    },
    {
      value: 'silver',
      label: 'Silver',
      color: '#666666'
    },
  ];
  
  const handleChange = (e) => console.log(e);

  return (
    <Stack direction="vertical">
      <div className="py-4">
        <Multiselect
          onChange={handleChange}
          placeholder="Select colour"
          options={colourOptions}
        />
      </div>
      <div className="py-4">
        <Multiselect
          disabled
          onChange={handleChange}
          placeholder="Select colour"
          options={colourOptions}
        />
      </div>
      <div className="bg-dark p-4">
        <Multiselect
          onChange={handleChange}
          variant="dark"
          placeholder="Select colour"
          options={colourOptions}
        />
      </div>
    </Stack>
  );
};
```

### Error state

```jsx live
() => {
  const colourOptions = [
    {
      value: 'ocean',
      label: 'Ocean',
      color: '#00B8D9',
    },
    {
      value: 'green',
      label: 'Green',
      color: '#36B37E'
    },
    {
      value: 'forest',
      label: 'Forest',
      color: '#00875A'
    },
  ];
  
  const handleChange = (e) => console.log(e);

  return (
    <Multiselect
      error="There is an error!"
      onChange={handleChange}
      placeholder="Select colour"
      options={colourOptions}
    />
  );
};
```
