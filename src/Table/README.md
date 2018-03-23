# Table

Provides a very basic table component with col-scoped headings displayed in the top row.

## API

### `columns` (object array; required)
`columns` specifies the order and contents of the table's columns and provides display strings for each column's heading. It is composed of an ordered array of objects. Each object contains the following keys:

1. `label` (string or element; required) contains the display string for each column's heading.
2. `key` (string; required) maps that label to its corresponding datum for each row in `data`, to ensure table data are displayed in their appropriate columns.
3. `columnSortable` (boolean; optional) specifies at the column-level whether the column is sortable. If `columnSortable` is `true`, a sort button will be rendered in the column table heading. It is only required if `tableSortable` is set to `true`.
4. `onSort` (function; conditionally required) specifies what function is called when a sortable column is clicked. It is only required if the column's `columnSortable` is set to `true`.
5. `hideHeader` (boolean; optional) specifies at the column-level whether the column label is visible. A column that is sortable cannot have its label be hidden.
6. `width` (string; conditionally required) only if `hasFixedColumnWidths` is set to `true`, the `<td>` elements' `class` attributes will be set to this value. This allows restricting columns to specific widths. See [Bootstrap's grid documentation](https://getbootstrap.com/docs/4.0/layout/grid/) for `col` class names that can be used.

The order of objects in `columns` specifies the order of the columns in the table.

### `data` (object array; required)
`data` is an array of objects corresponding to the rows to display in the body of your table. The rows will display in the same order as the objects in your array. There are no real restrictions on what these rows can contain, as long as their keys are consistent. The keys are used to organize data from each row into its appropriate column, determined by the corresponding `key` property specified in each object in `columns`.

### `defaultSortedColumn` (string; conditionally required)
Specifies the key of the column that is sorted by default. It is only required if `tableSortable` is set to `true`.

### `defaultSortDirection` (string; conditionally required)
Specifies the direction the `defaultSortedColumn` is sorted in by default; it will typically be either 'asc' or 'desc'. It is only required if `tableSortable` is set to `true`.

### `caption` (string or element; optional, default: `null`)
Specifies a descriptive caption to be applied to the entire table.

### `className` (string array; optional; default: `[]`)
Specifies Bootstrap class names to apply to the table. See [Bootstrap's table documentation](https://getbootstrap.com/docs/4.0/content/tables/) for a list of applicable class names.

### `headingClassName` (string array; optional; default: `[]`)
Specifies Bootstrap class names to apply to the table heading. Options are detailed in [Bootstrap's docs](https://getbootstrap.com/docs/4.0/content/tables/#table-head-options).

### `tableSortable` (boolean; optional; default: `false`)
Specifies whether the table is sortable. This setting supercedes column-level sortability, so if it is `false`, no sortable components will be rendered.

### `sortButtonsScreenReaderText` (object; conditionally required)
Specifies the screen reader only text that accompanies the sort buttons for sortable columns. It takes the form of an object containing the following keys:

1. `asc`: (string) specifies the screen reader only text for sort buttons in the ascending state.
2. `desc`: (string) specifies the screen reader only text for sort buttons in the descending state.
3. `defaultText`: (string) specifies the screen reader only text for sort buttons that are not engaged.

It is only required if `tableSortable` is set to `true`.

Default:

```javascript
{
  asc: 'sort ascending',
  desc: 'sort descending',
  defaultText: 'click to sort',
}
```

### `hasFixedColumnWidths` (boolean; optional; default: `false`)
Specifies whether the table's columns have fixed widths. Every element in `columns` must define a `width` if this is `true`.

**WARNING: The styling for fixed column widths does not work in IE11.**
