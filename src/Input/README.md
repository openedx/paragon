# Input

A component for all user input. It is responsible for rendering select, textarea, and inputs of any type with the appropriate bootstrap class name.

## API

### `type` (string; required)
`type` specifies the type of component. One of select, textarea, or any valid type for an html input tag.

### `className` (string; optional)
`className` specifies the className in addition to a bootstrap class name.

### `options` (element; optional)
`options` should be used to specify the options of an Input of type select

```
[{...
  label?: string,
  value?: string,
  group?: [{...
    label?: string,
    value?: string,
  }],
}]
```

All other props added to Input will be passed through to the html node.