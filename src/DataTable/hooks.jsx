import { useContext, useEffect } from 'react';
import DataTableContext from './DataTableContext';
import { clearSelectionAction, setSelectedRowsAction, toggleIsEntireTableSelected } from './selection/data/actions';
import { getRowIds, getUnselectedPageRows } from './selection/data/helpers';

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

  const clearSelection = () => {
    // if using controlled selection component DataTable.ControlledSelectionStatus
    if (selectedRows.length > 0 || isEntireTableSelected) {
      dispatch(clearSelectionAction());
    } else {
      toggleAllRowsSelected(false);
    }
  };

  return {
    clearSelection,
  };
};

/**
 * Provides business logic around managing selection state, notably for controlled
 * selections with API-driven data.
 *
 */
export const useDataTableSelections = ({
  selections,
  selectionsDispatch,
  itemCount,
  selectedRows,
  page,
  isAllPageRowsSelected,
}) => {
  // If "Select all" is explicitly opted in by the user, ensure that all unselected rows are selected
  // when the user navigates to a new page.
  useEffect(
    () => {
      if (selections.isSelectAllEnabled && (itemCount > selectedRows.length || !isAllPageRowsSelected)) {
        const selectedRowIds = getRowIds(selectedRows);
        const unselectedPageRows = getUnselectedPageRows(selectedRowIds, page);
        if (unselectedPageRows.length) {
          selectionsDispatch(setSelectedRowsAction(unselectedPageRows, itemCount));
        }
      }
    },
    [selectedRows, itemCount, page, selectionsDispatch, selections.isSelectAllEnabled, isAllPageRowsSelected],
  );

  // When `selections.isSelectAllEnabled` is true, ensure `selections.isEntireTableSelected` is true.
  useEffect(() => {
    if (selections.isSelectAllEnabled && !selections.isEntireTableSelected) {
      selectionsDispatch(toggleIsEntireTableSelected());
    }
  }, [selectionsDispatch, selections.isEntireTableSelected, selections.isSelectAllEnabled]);

  // When `selections.isSelectAllEnabled` differs from `selections.isEntireTableSelected` and
  // `isAllPageRowsSelected` matches `selections.isSelectAllEnabled`, toggle `selections.isEntireTableSelected`.
  useEffect(() => {
    if (!selections.isSelectAllEnabled && selections.isEntireTableSelected && !isAllPageRowsSelected) {
      selectionsDispatch(toggleIsEntireTableSelected());
    }
    if (selections.isSelectAllEnabled && !selections.isEntireTableSelected && isAllPageRowsSelected) {
      selectionsDispatch(toggleIsEntireTableSelected());
    }
  }, [
    selectionsDispatch,
    isAllPageRowsSelected,
    selections.isEntireTableSelected,
    selections.isSelectAllEnabled,
  ]);
};
