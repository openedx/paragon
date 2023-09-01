import React, { useMemo } from 'react';

import { CheckboxControl } from '../../Form';
import useConvertIndeterminateProp from './useConvertIndeterminateProp';

export const selectColumn = {
  id: 'selection',
  // The header can use the table's getToggleAllPageRowsSelectedProps or getToggleAllRowsSelectedProps
  // method to render a checkbox. The method is determined based on whether pagination is enabled or
  // not (i.e., ``page`` is defined).
  // Proptypes disabled as these props are passed in separately
  /* eslint-disable-next-line react/prop-types */
  Header: ({ getToggleAllPageRowsSelectedProps, getToggleAllRowsSelectedProps, page }) => {
    const toggleRowsSelectedProps = useMemo(
      () => {
        // determine if this selection is for an individual page or the entire table
        const getToggleRowsSelectedProps = page ? getToggleAllPageRowsSelectedProps : getToggleAllRowsSelectedProps;
        return getToggleRowsSelectedProps();
      },
      [getToggleAllPageRowsSelectedProps, getToggleAllRowsSelectedProps, page],
    );
    const updatedProps = useConvertIndeterminateProp(toggleRowsSelectedProps);

    return (
      <div className="pgn__data-table__controlled-select">
        <CheckboxControl
          {...updatedProps}
          data-testid="datatable-select-column-checkbox-header"
        />
      </div>
    );
  },
  // The cell can use the individual row's getToggleRowSelectedProps method
  // to the render a checkbox
  // Proptypes disabled as this prop is passed in separately
  /* eslint-disable react/prop-types */
  Cell: ({ row }) => {
    const updatedProps = useConvertIndeterminateProp(row.getToggleRowSelectedProps());

    return (
      <div className="pgn__data-table__controlled-select">
        <CheckboxControl
          {...updatedProps}
          data-testid="datatable-select-column-checkbox-cell"
        />
      </div>
    );
  },
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
