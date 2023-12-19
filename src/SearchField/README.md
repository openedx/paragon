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
status: 'Stable'
designStatus: 'Needs Review'
devStatus: 'Done'
notes:
---

Search allows users to quickly find content. The `Search field` is made up of the `Text field` component and an optional `Button` component.

## Basic Usage

```jsx live
<SearchField onSubmit={(value) => console.log(`search submitted: ${value}`)} />
```

## With an initial value

```jsx live
<SearchField
  onSubmit={(value) => console.log(`search submitted: ${value}`)}
  value="foobar"
/>
```

## With a placeholder

```jsx live
<SearchField
  onSubmit={(value) => console.log(`search submitted: ${value}`)}
  placeholder="foobar"
/>
```

## With callbacks

```jsx live
<SearchField
  onSubmit={(value) => console.log(`search submitted: ${value}`)}
  onChange={(value) => console.log(`value changed: ${value}`)}
  onFocus={(event) => console.log(`input focused: ${event}`)}
  onBlur={(event) => console.log(`input blurred: ${event}`)}
  onClear={() => console.log('search cleared')}
/>
```

## With a custom label

```jsx live
<SearchField
  onSubmit={(value) => console.log(`search submitted: ${value}`)}
  label="Search:"
/>
```

## With custom screenreader text

```jsx live
<SearchField
  onSubmit={(value) => console.log(`search submitted: ${value}`)}
  screenReaderText={{
    label: 'buscar',
    clearButton: 'borrar búsqueda',
    submitButton: 'enviar búsqueda',
  }}
/>
```

## With the submit button outside the input

```jsx live
<SearchField
  submitButtonLocation="external"
  onSubmit={(value) => console.log(`search submitted: ${value}`)}
/>
```

## Advanced Usage

For needs that deviate from the basic usage above, use `<SearchField.Advanced />`. The `children` elements must contain the `SearchField.Label` and `SearchField.Input` components at a minimum.

## With a custom label

```jsx live
<SearchField.Advanced
  onSubmit={(value) => console.log(`search submitted: ${value}`)}
>
  <SearchField.Label>Search:</SearchField.Label>
  <SearchField.Input />
  <SearchField.ClearButton />
  <SearchField.SubmitButton />
</SearchField.Advanced>
```

## With an initial value

```jsx live
<SearchField.Advanced
  onSubmit={(value) => console.log(`search submitted: ${value}`)}
  value="foobar"
>
  <SearchField.Label>Search:</SearchField.Label>
  <SearchField.Input />
  <SearchField.ClearButton />
  <SearchField.SubmitButton />
</SearchField.Advanced>
```

## With a placeholder

```jsx live
<SearchField.Advanced
  onSubmit={(value) => console.log(`search submitted: ${value}`)}
>
  <SearchField.Label>Search:</SearchField.Label>
  <SearchField.Input placeholder="foobar" />
  <SearchField.ClearButton />
  <SearchField.SubmitButton />
</SearchField.Advanced>
```

## With no clear button

```jsx live
<SearchField.Advanced
  onSubmit={(value) => console.log(`search submitted: ${value}`)}
>
  <SearchField.Label />
  <SearchField.Input />
  <SearchField.SubmitButton />
</SearchField.Advanced>
```

## With no submit or clear buttons

```jsx live
<SearchField.Advanced
  onSubmit={(value) => console.log(`search submitted: ${value}`)}
>
  <SearchField.Label />
  <SearchField.Input />
</SearchField.Advanced>
```

## Advanced usage with the submit button outside the input

Use class `pgn__searchfield_wrapper` to group input elements apart from the submit button.

```jsx live
<SearchField.Advanced
  onSubmit={(value) => console.log(`search submitted: ${value}`)}
  submitButtonLocation="external"
>
  <div className="pgn__searchfield_wrapper">
    <SearchField.Label />
    <SearchField.Input />
  </div>
  <SearchField.SubmitButton submitButtonLocation="external" />
</SearchField.Advanced>
```
