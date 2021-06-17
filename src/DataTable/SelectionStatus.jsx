import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import DataTableContext from './DataTableContext';

export const SELECT_ALL_TEST_ID = 'test_selection_state_select_all_button';
export const CLEAR_SELECTION_TEST_ID = 'test_selection_state_clear_selection_button';
export const CLEAR_SELECTION_TEXT = 'Clear selection';

const SelectionStatus = ({
  className, clearSelectionText,
}) => {
  const { toggleAllRowsSelected, selectedFlatRows, itemCount } = useContext(DataTableContext);
  const numSelectedRows = selectedFlatRows.length;
  const allRowsSelected = numSelectedRows === itemCount;
  return (
    <div className={className}>
      <span>{allRowsSelected && 'All '}{numSelectedRows} selected </span>
      {!allRowsSelected && (
        <Button
          className={SELECT_ALL_TEST_ID}
          variant="link"
          size="inline"
          onClick={() => toggleAllRowsSelected(true)}
        >
          Select all {itemCount}
        </Button>
      )}
      {numSelectedRows > 0 && (
        <Button
          className={CLEAR_SELECTION_TEST_ID}
          variant="link"
          size="inline"
          onClick={() => toggleAllRowsSelected(false)}
        >
          {clearSelectionText}
        </Button>
      )}
    </div>
  );
};

SelectionStatus.defaultProps = {
  className: undefined,
  clearSelectionText: CLEAR_SELECTION_TEXT,
};

SelectionStatus.propTypes = {
  className: PropTypes.string,
  clearSelectionText: PropTypes.string,
};

export default SelectionStatus;
