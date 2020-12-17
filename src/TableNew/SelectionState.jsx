import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export const SELECT_ALL_TEST_ID = 'test_selection_state_select_all_button';
export const CLEAR_SELECTION_TEST_ID = 'test_selection_state_clear_selection_button';

const SelectionState = ({ numberOfSelectedRows, toggleAllRowsSelected, itemCount }) => {
  const allRowsSelected = numberOfSelectedRows === itemCount;
  return (
    <div>
      <span>{allRowsSelected && 'All '}{numberOfSelectedRows} selected </span>
      {!allRowsSelected && (
      <Button
        className={SELECT_ALL_TEST_ID}
        variant="link"
        onClick={() => toggleAllRowsSelected(true)}
      >
        Select all {itemCount}
      </Button>
      )}
      {numberOfSelectedRows > 0 && (
      <Button
        className={CLEAR_SELECTION_TEST_ID}
        variant="link"
        onClick={() => toggleAllRowsSelected(false)}
      >
        Clear Selection
      </Button>
      )}
    </div>
  );
};

SelectionState.propTypes = {
  numberOfSelectedRows: PropTypes.number.isRequired,
  toggleAllRowsSelected: PropTypes.func.isRequired,
  itemCount: PropTypes.number.isRequired,
};

export default SelectionState;
