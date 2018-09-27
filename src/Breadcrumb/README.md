# Breadcrumb

Provides a basic breadcrumb component.

## API

### `links` (shape array; required)
`links` is an array of objects with the properties `label` and `url` as strings.

### `activeLabel` (string; optional)
`activeLabel` allows to add a label that is not a link to the end of the breadcrumb. Defaults to `undefined`.

### `spacer` (element; optional)
`spacer` allows to add a custom element between the breadcrumb items. Defaults to `>` rendered using the `Icon` component.

### `clickHandler` (function; optional)
`clickHandler` allows to add a custom function to be called `onClick` of a breadcrumb link. The use case for this is for adding custom analytics to the component.