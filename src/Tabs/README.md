# Tabs

Provides the ability for a Tab view that allows for switching between tabs to view panels within a page.

## API

### `children` (element array; required)
`children` specifies the list of elements that will be displayed within each of the tabbed views.  It is the content relevant to each label. Children should not be passed as Props, but should instead be nested between the opening and closing `<Tabs> </Tabs>` tags.

### `labels` (string array or element array; required)
`labels` specifies the list of headings that will appear on all of the tabs that will be created.

## Accessibility
The W3C's reference documentation uses keyboard navigation to focus on the buttons in a tablist. This implementation instead is tab-focusable, based on documentation by Paul J Adam (http://pauljadam.com/demos/aria-tabpanel.html). The decision was made to follow this pattern instead of the standard based on the following points:
 - It makes all elements discoverable and is least likely to result in unwanted behaviour
 - There is a growing consensus on this pattern
