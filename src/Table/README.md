# Table

Provides a very basic table component with col-scoped headings displayed in the top row.

## API

### `headings` (object array; required)
`headings` specifies the order and contents of the table's columns and provides display strings for each column's heading. It is composed of an ordered array of objects, each containing a string `key` and a string or element `label`. `label` contains the display string for each column's heading. `key` maps that label to its corresponding datum for each row in `data`, to ensure table data are displayed in their appropriate columns. The order of objects in `headings` specifies the order of the columns in the table.

### `data` (object array; required)
`data` is an array of objects corresponding to the rows to display in the body of your table. The rows will display in the same order as the objects in your array. There are no real restrictions on what these rows can contain, as long as their keys are consistent. The keys are used to organize data from each row into its appropriate column, determined by the corresponding `key` property specified in each object in `headings`.

### `caption` (string or element; optional)
Specifies a descriptive caption to be applied to the entire table.

### `className` (string array; optional)
Specifies Bootstrap class names to apply to the table. See [Bootstrap's table documentation](https://getbootstrap.com/docs/4.0/content/tables/) for a list of applicable class names.

### `headingClassName` (string array; optional)
Specifies Bootstrap class names to apply to the table heading. Options are detailed in [Bootstrap's docs](https://getbootstrap.com/docs/4.0/content/tables/#table-head-options)
