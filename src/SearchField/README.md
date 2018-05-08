# SearchField

Provides a basic search field component.

## API

### `onSubmit` (function; required)
`onSubmit` specifies a callback function for when the `SearchField` is submitted by the user. For example:

```jsx
<SearchField onSubmit={(value) => { console.log(value); } />
```

### `inputLabel` (string, optional)
`inputLabel` specifies the label to use for the input field (e.g., for i18n translations). The default is "Search:".

### `onChange` (function; optional)
`onChange` specifies a callback function for when the value in `SearchField` is changed by the user. The default is an empty function. For example:

```jsx
<SearchField onChange={(value) => { console.log(value); } />
```

### `onFocus` (function; optional)
`onFocus` specifies a callback function for when the user focuses in the `SearchField` component. The default is an empty function. For example:

```jsx
<SearchField onFocus={(value) => { console.log(value); } />
```

### `onBlur` (function; optional)
`onBlur` specifies a callback function for when the user loses focus in the `SearchField` component. The default is an empty function. For example:

```jsx
<SearchField onBlur={(value) => { console.log(value); }} />
```

### `placeholder` (string; optional)
`placeholder` specifies the placeholder text for the input. The default is an empty string.

### `screenReaderText` (object, optional)
`screenReaderText` specifies the screenreader text for both the clear and search buttons (e.g., for i18n translations). The default is `{ clearButton: 'Clear search', searchButton: 'Submit search' }`.

### `value` (string; optional)
`value` specifies the initial value for the input. The default is an empty string.
