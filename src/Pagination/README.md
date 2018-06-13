# Pagination

Provides a responsive pagination component with `Previous`/`Next` buttons. On larger screen sizes, it displays a full pagination UI that dynamically collapses the page buttons using ellipses; the first and last pages are always shown. On smaller screen sizes (e.g., mobile devices), a simplified UI is displayed following a convention of page "X of Y":

#### Desktop
![Desktop Pagination](https://user-images.githubusercontent.com/2828721/41666898-99227722-7479-11e8-87e7-e8400994d4f1.png)

#### Mobile
![Mobile Pagination](https://user-images.githubusercontent.com/2828721/41666899-995084d2-7479-11e8-8061-a5e4965ea965.png)

## Accessibility
The `Pagination` component dynamically generates an `aria-label` for all buttons to ensure users with screen readers are aware of which page is currently selected. For example, when tabbing between pages, if the user focuses on a currently selected page, the screen reader would read `Page 1, Current Page` whereas a page not currently selected would read `Page 2`.

To ensure users with screen readers are aware of the currently selected page when using the `Previous`/ `Next` buttons, a `div` with an [`aria-live="polite"`](https://www.w3.org/TR/wai-aria/#aria-live) attribute - visible only to screen readers - updates accordingly (e.g., `Page 5, Current Page, of 20`). The contents will be read by the screen reader with each update.

Additionally, to avoid losing focus when the `Previous`/`Next` buttons become disabled, the focus is explicitly set. When the user selects the `Next` button where the next page is the last page, focus is set on the `Previous` button. Likewise, when the user selects the `Previous` button where the previous page is the first page, focus is set on the `Next` button.

## API

### `onPageSelect` (function; required)
`onPageSelect` specifies a callback function that is executed when the user selects a page button or the `Previous`/`Next` buttons. For example:

```jsx
<Pagination onPageSelect={(pageNumber) => { console.log(pageNumber); } />
```

### `pageCount` (number; required)
`pageCount` specifies the total number of pages in the `Pagination` component.

### `paginationLabel` (string; required)
`paginationLabel` specifies the `aria-label` for the `<nav>` element that wraps the pagination button list.

### `buttonLabels` (object; optional)
`buttonLabels` specifies the labels to use for the `Previous`/`Next` buttons as well as the various parts of `aria-label` on the page buttons for accessibility. All button labels accept both string or elements. The button label options are as follows:

* `previous`: Text for the `Previous` button;
* `next`: Text for the `Next` button;
* `page`: Text in the `aria-label` on page buttons to describe the button (e.g., "**Page** 1");
* `currentPage`: Text to depict the selected page in the `aria-label` on page buttons (e.g., "Page 1, **Current Page**");
* `pageOfCount`: Text that separates the current page and total page count for the mobile UI (e.g., "Page 1 **of** 20").

The default is:
```javascript
{
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
    currentPage: 'Current Page',
    pageOfCount: 'of',
}
```

### `className` (string; optional)
`className` specifies any class name(s) for the `Pagination` component. The default is an empty string.

### `currentPage` (number; optional)
`currentPage` specifies the page that the `Pagination` component will automatically select. The default is `1`.

### `maxPagesDisplayed` (number; optional)
`maxPagesDisplayed` specifies the number of page buttons to display in between the `Previous` and `Next` buttons. This number also includes any ellipses in the total count. Also, to ensure that at least one clickable page button is shown when both ellipses are displayed, this value must be greater than `4`.  The default is `7`.
