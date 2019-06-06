# Tabs

Provides the ability for a Tab view that allows for switching between tabs to view panels within a page.

## API

### `tabs` (element array; required)
`tabs` specifies the list of headings that will appear on all of tabs that will be created as well as the contents of each tab. Tabs must ben an array of objects with each object including keys `label` and `content` for each tab. For example <Tabs `tabs`={[{ `label`: 'I am the label of the tab', `content`: 'I am the contents of the tab'}]}/>

## Accessibility
The W3C's reference documentation uses keyboard navigation to focus on the buttons in a tablist. This implementation instead is tab-focusable, based on documentation by Paul J Adam (http://pauljadam.com/demos/aria-tabpanel.html). The decision was made to follow this pattern instead of the standard based on the following points:
 - It makes all elements discoverable and is least likely to result in unwanted behaviour
 - There is a growing consensus on this pattern
