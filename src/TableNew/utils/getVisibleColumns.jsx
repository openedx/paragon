import React from 'react';
import IndeterminateCheckbox from '../IndeterminateCheckBox';

const sortColumn = {
  id: 'selection',
  // The header can use the table's getToggleAllRowsSelectedProps method
  // to render a checkbox
  // Proptypes disabled as this prop is passed in separately
  // eslint-disable-next-line react/prop-types
  Header: ({ getToggleAllRowsSelectedProps }) => (
    <div>
      <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
    </div>
  ),
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

const getVisibleColumns = (isSelectable, visibleColumn, additionalColumns = []) => {
  let columns = [];
  if (isSelectable) {
    columns.push(sortColumn);
  }
  columns = columns.concat(visibleColumn);
  if (additionalColumns.length > 0) {
    columns = columns.concat(additionalColumns);
  }
  return columns;
};

export default getVisibleColumns;
