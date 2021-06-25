import React from 'react';

import { CheckboxControl } from '../../Form';

export const selectColumn = {
  id: 'selection',
  // The header can use the table's getToggleAllPageRowsSelectedProps or getToggleAllRowsSelectedProps
  // method to render a checkbox. The method is determined based on whether pagination is enabled or
  // not (i.e., ``page`` is defined).
  // Proptypes disabled as these props are passed in separately
  /* eslint-disable-next-line react/prop-types */
  Header: ({ getToggleAllPageRowsSelectedProps, getToggleAllRowsSelectedProps, page }) => {
    const getToggleRowsSelectedProps = page ? getToggleAllPageRowsSelectedProps : getToggleAllRowsSelectedProps;
    const toggleRowsSelectedProps = getToggleRowsSelectedProps();
    toggleRowsSelectedProps.isIndeterminate = toggleRowsSelectedProps.indeterminate;
    // delete unused ``indeterminate`` prop
    delete toggleRowsSelectedProps.indeterminate;
    return (
      <div className="d-flex align-content-center p-1">
        <CheckboxControl {...toggleRowsSelectedProps} />
      </div>
    );
  },
  // The cell can use the individual row's getToggleRowSelectedProps method
  // to the render a checkbox
  // Proptypes disabled as this prop is passed in separately
  /* eslint-disable react/prop-types */
  Cell: ({ row }) => (
    <div className="d-flex align-content-center p-1">
      <CheckboxControl {...row.getToggleRowSelectedProps()} />
    </div>
  ),
  /* eslint-enable react/prop-types */
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
