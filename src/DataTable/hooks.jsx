import { useCallback, useContext } from 'react';
import DataTableContext from './DataTableContext';
import { clearSelectionAction } from './selection/data/actions';

export const useRows = () => {
  const {
    getTableProps, prepareRow, page, rows, headerGroups, getTableBodyProps,
  } = useContext(DataTableContext);

  const displayRows = page || rows;

  return {
    getTableProps, prepareRow, displayRows, headerGroups, getTableBodyProps,
  };
};

/**
 * Hook that provides selection state functionality
 * @param {Object} param0 Table instance
 * @param {Array} controlledTableSelections Selection Object and dispatch function
 * @returns
 */
export const useSelectionActions = (
  { toggleAllRowsSelected },
  controlledTableSelections,
) => {
  const [{ selectedRows, isEntireTableSelected }, dispatch] = controlledTableSelections;

  const clearSelection = useCallback(() => {
    // if using controlled selection component DataTable.ControlledSelectionStatus
    if (selectedRows.length > 0 || isEntireTableSelected) {
      dispatch(clearSelectionAction());
    } else {
      toggleAllRowsSelected(false);
    }
  }, [dispatch, isEntireTableSelected, selectedRows, toggleAllRowsSelected]);

  return {
    clearSelection,
  };
};
