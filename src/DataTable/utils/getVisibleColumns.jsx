import React, { useMemo, useContext, useEffect } from 'react';

import { CheckboxControl } from '../../Form';
import DataTableContext from '../DataTableContext';
import useConvertIndeterminateProp from './useConvertIndeterminateProp';

export const selectColumn = {
  id: 'selection',
  // The header can use the table's getToggleAllPageRowsSelectedProps or getToggleAllRowsSelectedProps
  // method to render a checkbox. The method is determined based on whether pagination is enabled or
  // not (i.e., ``page`` is defined).
  // Proptypes disabled as these props are passed in separately
  /* eslint-disable-next-line react/prop-types */
  Header: ({ getToggleAllPageRowsSelectedProps, getToggleAllRowsSelectedProps, page }) => {
    const { isSelectable, maxSelectedRows } = useContext(DataTableContext);
    const toggleRowsSelectedProps = useMemo(
      () => {
        // determine if this selection is for an individual page or the entire table
        const getToggleRowsSelectedProps = page ? getToggleAllPageRowsSelectedProps : getToggleAllRowsSelectedProps;
        return getToggleRowsSelectedProps();
      },
      [getToggleAllPageRowsSelectedProps, getToggleAllRowsSelectedProps, page],
    );
    const updatedProps = useConvertIndeterminateProp(toggleRowsSelectedProps);
    const formatMaxSelectedRows = Math.max(0, maxSelectedRows);

    if (isSelectable && formatMaxSelectedRows >= 0) {
      return null;
    }

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
    const {
      isSelectable, maxSelectedRows, onMaxSelectedRows, state: { selectedRowIds },
    } = useContext(DataTableContext);
    const updatedProps = useConvertIndeterminateProp(row.getToggleRowSelectedProps());
    const { index } = row;
    const isRowSelected = index in selectedRowIds;
    const selectedRowsLength = Object.keys(selectedRowIds).length;
    const formatMaxSelectedRows = Math.max(0, maxSelectedRows);
    const hasMaxSelectedRows = formatMaxSelectedRows === selectedRowsLength;
    const disableCheck = isSelectable && hasMaxSelectedRows && !isRowSelected;

    useEffect(() => {
      if (hasMaxSelectedRows && selectedRowIds[index]) {
        onMaxSelectedRows?.();
      }
    }, [hasMaxSelectedRows, index, onMaxSelectedRows, selectedRowIds]);

    return (
      <div className="pgn__data-table__controlled-select">
        <CheckboxControl
          {...updatedProps}
          disabled={disableCheck}
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
