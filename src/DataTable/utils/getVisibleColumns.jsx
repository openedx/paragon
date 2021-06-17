import React from 'react';

import IndeterminateCheckbox from '../IndeterminateCheckBox';

export const selectColumn = {
  id: 'selection',
  // The header can use the table's getToggleAllPageRowsSelectedProps or getToggleAllRowsSelectedProps
  // method to render a checkbox. The method is determined based on whether pagination is enabled or
  // not (i.e., ``page`` is defined).
  // Proptypes disabled as these props are passed in separately
  // eslint-disable-next-line react/prop-types
  Header: ({ getToggleAllPageRowsSelectedProps, getToggleAllRowsSelectedProps, page }) => {
    const toggleRowsSelected = page ? getToggleAllPageRowsSelectedProps : getToggleAllRowsSelectedProps;
    return (
      <div>
        <IndeterminateCheckbox {...toggleRowsSelected()} />
      </div>
    );
  },
  // The cell can use the individual row's getToggleRowSelectedProps method
  // to the render a checkbox
  // Proptypes disabled as this prop is passed in separately
  // eslint-disable-next-line react/prop-types
  Cell: ({ row }) => (
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
    </div>
  ),
  disableSortBy: true,
};

const getVisibleColumns = (
  isSelectable,
  visibleColumns,
  additionalColumns = [],
  manualSelectColumn = selectColumn,
) => {
  let columns = [];
  if (isSelectable) {
    columns.push(manualSelectColumn);
  }
  columns = columns.concat(visibleColumns);
  if (additionalColumns.length > 0) {
    columns = columns.concat(additionalColumns);
  }
  return columns;
};

export default getVisibleColumns;
