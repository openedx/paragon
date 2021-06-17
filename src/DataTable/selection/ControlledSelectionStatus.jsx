import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';
import DataTableContext from '../DataTableContext';

import {
  clearSelectionAction,
  setSelectAllRowsAllPagesAction,
  setSelectedRowsAction,
} from './data/actions';
import {
  getUnselectedPageRows,
  getRowIds,
} from './data/helpers';

export const SELECT_ALL_TEST_ID = 'test_selection_state_select_all_button';
export const CLEAR_SELECTION_TEST_ID = 'test_selection_state_clear_selection_button';
export const CLEAR_SELECTION_TEXT = 'Clear selection';

const ControlledSelectionStatus = ({ className, clearSelectionText }) => {
  const {
    itemCount,
    rows,
    controlledTableSelections: [{ selectedRows, isEntireTableSelected }, dispatch],
  } = useContext(DataTableContext);

  useEffect(
    () => {
      if (isEntireTableSelected) {
        const selectedRowIds = getRowIds(selectedRows);
        const unselectedPageRows = getUnselectedPageRows(selectedRowIds, rows);
        if (unselectedPageRows?.length) {
          dispatch(setSelectedRowsAction(unselectedPageRows, itemCount));
        }
      }
    },
    [isEntireTableSelected, selectedRows, itemCount, rows],
  );

  const numSelectedRows = isEntireTableSelected ? itemCount : selectedRows.length;
  const isAllRowsSelected = numSelectedRows === itemCount;

  return (
    <div className={className}>
      <span>{isAllRowsSelected && 'All '}{numSelectedRows} selected </span>
      {!isAllRowsSelected && (
        <Button
          className={SELECT_ALL_TEST_ID}
          variant="link"
          size="inline"
          onClick={() => dispatch(setSelectAllRowsAllPagesAction())}
        >
          Select all {itemCount}
        </Button>
      )}
      {numSelectedRows > 0 && (
        <Button
          className={CLEAR_SELECTION_TEST_ID}
          variant="link"
          size="inline"
          onClick={() => { dispatch(clearSelectionAction()); }}
        >
          {clearSelectionText}
        </Button>
      )}
    </div>
  );
};

ControlledSelectionStatus.defaultProps = {
  className: undefined,
  clearSelectionText: CLEAR_SELECTION_TEXT,
};

ControlledSelectionStatus.propTypes = {
  className: PropTypes.string,
  clearSelectionText: PropTypes.string,
};

export default ControlledSelectionStatus;
