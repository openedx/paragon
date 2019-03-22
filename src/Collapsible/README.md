# Collapsible Component

Provides a component that can collapse to hide its child elements and
optionally has the ability to display without the open/close button based on the
screen size. The collapsible functionality mimics that of an accordion section,
with the exception that multiple collapsibles can be open at the same time.

Note: The CSS is required for the hide/show functionality and animations to
work properly.

## API

### `children` (object; required)
`children` are the objects that are the children of the collapsible that should
be hidden when the collapsible is closed.

### `title` (string; required)
`title` is the string to be displayed on the collapsible button.

### `expandedTitle` (element; optional)
`expandedTitle` is the element to be displayed as the title when the collapsible
is expanded. Defaults to undefined.

### `isOpen` (boolean; optional)
`isOpen` specifies whether the collapsible should initially be open. Defaults
to false.

### `isCollapsible` (function; optional)
`isCollapsible` is the optional function that, if given, will be used on
resize to determine whether to display the collapsible or regular view. The
example below demonstrates a collapsible that will only show the open/close
button for non-desktop screens.

### `iconId` (string; optional)
`iconId` is the id attribute that is passed to the icon on the collapsible.
Defaults to the empty string.

```jsx
<Collapsible
  title="Collapsible"
  expandedTitle={<h2>Collapsible</h2>}
  isCollapsible={() => window.matchMedia('(min-width: 992px)').matches}
>
  <p>Child 1</p>
  <p>Child 2</p>
</Collapsible>
```

If no function is given, the collapsible does not handle resizing and will
always show the open/close button.

### `onToggle` (function; optional)
`onToggle` is an optional callback that is trigged when the Collapsible components is opened or closed. A boolean is passed to the callback with the value of `isOpen` from the component's state.