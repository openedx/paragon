# Icon

Provides the ability to have a basic accessibility friendly Icon. The Icon has `aria-hidden=true` set as a default.

## API

### `id` (string; optional)
`id` will be the `id` property of the Icon element, by default this value is generated with the `newId` function with the `prefix` of `Icon`.

### `className` (array of strings; required)
`className` is array of class names that will define what the Icon looks like. For example, a list of FontAwesome style names.

### `describedBy` (string; optional)
`describedBy` is a string that can add a value to an `aria-describedBy` attribute on the Icon span, this value is `undefined` by default.

### `hidden` (boolean; optional)
`hidden` is a boolean that determines the value of `aria-hidden` attribute on the Icon span, this value is `true` by default.

### `screenReaderText` (string; optional, but recommended)
`screenReaderText` is a string that will be used on a secondary span leveraging the `sr-only` style for screenreader only text, this value is `undefined` by default. This value is recommended for use unless the Icon is being used in a way that is purely decorative or provides no additional context for screen reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
