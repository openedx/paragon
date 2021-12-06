---
title: 'SearchField'
type: 'component'
components:
- SearchField
- SearchFieldAdvanced
- SearchFieldClearButton
- SearchFieldInput
- SearchFieldLabel
- SearchFieldSubmitButton
categories:
- Forms
- Navigation
status: 'Stable'
designStatus: 'Needs Review'
devStatus: 'Done'
notes:
---

### Basic Usage

```jsx live
<SearchField
  onSubmit={value => console.log(`search submitted: ${value}`)}
/>
```

### with an initial value

```jsx live
<SearchField
  onSubmit={value => console.log(`search submitted: ${value}`)}
  value="foobar"
/>
```

### with a placeholder

```jsx live
<SearchField
  onSubmit={value => console.log(`search submitted: ${value}`)}
  placeholder="foobar"
/>
```

### with callbacks

```jsx live
<SearchField
  onSubmit={value => console.log(`search submitted: ${value}`)}
  onChange={value => console.log(`value changed: ${value}`)}
  onFocus={event => console.log(`input focused: ${event}`)}
  onBlur={event => console.log(`input blurred: ${event}`)}
  onClear={() => console.log('search cleared')}
/>
```

### with a custom label

```jsx live
<SearchField
  onSubmit={value => console.log(`search submitted: ${value}`)}
  label="Search:"
/>
```

### with custom screenreader text

```jsx live
<SearchField
  onSubmit={value => console.log(`search submitted: ${value}`)}
  screenReaderText={{
    label: 'buscar',
    clearButton: 'borrar búsqueda',
    submitButton: 'enviar búsqueda',
  }}
/>
```

### With the submit button outside the input

```jsx live
<SearchField
  submitButtonLocation="external"
  onSubmit={value => console.log(`search submitted: ${value}`)}
/>
```

### Advanced Usage

For needs that deviate from the basic usage above, use `<SearchField.Advanced />`. The `children` elements must contain the `SearchField.Label` and `SearchField.Input` components at a minimum.

### with a custom label

```jsx live
<SearchField.Advanced
  onSubmit={value => console.log(`search submitted: ${value}`)}
>
  <SearchField.Label>Search:</SearchField.Label>
  <SearchField.Input />
  <SearchField.ClearButton />
  <SearchField.SubmitButton />
</SearchField.Advanced>
```

### with an initial value

```jsx live
<SearchField.Advanced
  onSubmit={value => console.log(`search submitted: ${value}`)}
  value="foobar"
>
  <SearchField.Label>Search:</SearchField.Label>
  <SearchField.Input />
  <SearchField.ClearButton />
  <SearchField.SubmitButton />
</SearchField.Advanced>
```

### with a placeholder

```jsx live
<SearchField.Advanced
  onSubmit={value => console.log(`search submitted: ${value}`)}
>
  <SearchField.Label>Search:</SearchField.Label>
  <SearchField.Input placeholder="foobar" />
  <SearchField.ClearButton />
  <SearchField.SubmitButton />
</SearchField.Advanced>
```

### with no clear button

```jsx live
<SearchField.Advanced
  onSubmit={value => console.log(`search submitted: ${value}`)}
>
  <SearchField.Label />
  <SearchField.Input />
  <SearchField.SubmitButton />
</SearchField.Advanced>
```

### with no submit or clear buttons

```jsx live
<SearchField.Advanced
  onSubmit={value => console.log(`search submitted: ${value}`)}
>
  <SearchField.Label />
  <SearchField.Input />
</SearchField.Advanced>
```
