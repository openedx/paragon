# MailtoLink

A thin wrapper around the `Hyperlink` component that abstracts the creation of the `destination` value given a set of recipients, a subject, and a body.

## API

### `content` (string or element; required)

`content` specifies the text or element that a URL should be associated with

### `to` (string or string array; optional)

`to` specifies the email's recipients

### `cc` (string or string array; optional)

`cc` specifies the email's carbon copy recipients

### `bcc` (string or string array; optional)

`bcc` specifies the email's blind carbon copy recipients

### `subject` (string; optional)

`subject` specifies the email's subject

### `body` (string; optional)

`body` specifies the email's body

### `target` (string; optional)

`target` specifies where the link should open. The default behavior is `_self`, which means that the URL will be loaded into the same browsing context as the current one

### `onClick` (function; optional)

`onClick` specifies the callback function when the link is clicked

### `externalLink` (shape; optional)

The `externalLink` object contains the `alternativeText` and `title` fields which specify the text and title for links with a `_blank` target (which loads the URL in a new browsing context).

**This object is required if the `target` value is `_blank`**
