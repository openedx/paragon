---
title: 'Input'
type: 'component'
components:
  - Input
categories:
  - Forms (deprecated)
status: 'Deprecate Soon'
designStatus: 'Done'
devStatus: 'Done'
notes: |
  Replaced by Form.Control
---

A component for all user input. It is responsible for rendering select, textarea, and inputs of any type with the appropriate bootstrap class name.

Extra props supplied to Input will be passed through to the html node.

## Text

```jsx live
<Input type="text" defaultValue="Some text input" />
```

## Select

```jsx live
<Input
  type="select"
  defaultValue="Foo Bar"
  options={[
    { value: 'Foo Bar', label: 'Foo Bar' },
    { value: 'Foos Bar', label: 'Bar foo' },
    { value: 'Foo sBar', label: 'FoBaro' },
    { value: 'Foo ssBar', label: 'Farboo' },
    {
      label: 'But there is more',
      group: [
        { value: 'vFoo Bar', label: 'Foov Bar' },
        { value: 'vFoos Bar', label: 'Barv foo' },
        { value: 'vFoo sBar', label: 'FoBarov' },
        { value: 'vFoo ssBar', label: 'Farboov' },
      ],
    },
  ]}
/>
```

## Textarea

```jsx live
<Input
  type="textarea"
  defaultValue="Hammock semiotics pok pok jianbing venmo, crucifix taiyaki stumptown irony ennui knausgaard bitters synth slow-carb iPhone."
/>
```

## Date

```jsx live
<Input type="date" />
```

### File

```jsx live
<Input type="file" />
```

### Range

```jsx live
<Input type="range" />
```
