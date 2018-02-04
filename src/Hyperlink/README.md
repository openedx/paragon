# Hyperlink

## API

### `content` (string or element; required)

`content` specifies the text or element that a URL should be associated with

### `destination` (string; required)

`destination` specifies the URL

### `target` (string; optional)

`target` specifies where the link should open. The default behavior is `_self`, which means that the URL will be loaded into the same browsing context as the current one

### `onClick` (function; optional)

`onClick` specifies the callback function when the link is clicked

### `externalLinkAlternativeText` (string; optional)

`externalLinkAlternativeText` specifies the text for links with a `_blank` target (which loads the URL in a new browsing context).

**This value is required if the `target` value is `_blank`**

### `externalLinkTitle` (string; optional)

`externalLinkTitle` specifies the title for links with a `_blank` target (which loads the URL in a new browsing context).

**This value is required if the `target` value is `_blank`**