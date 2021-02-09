import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import { TableContext } from './TableContext';

export const SELECT_ALL_TEST_ID = 'test_selection_state_select_all_button';
export const CLEAR_SELECTION_TEST_ID = 'test_selection_state_clear_selection_button';

const SelectionState = ({
  itemCount, className, tableName,
}) => {
  const instance = useContext(TableContext).getTableInstance(tableName);
  const { toggleAllRowsSelected, selectedFlatRows } = instance;
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
        Clear Selection
      </Button>
      )}
    </div>
  );
};

SelectionState.defaultProps = {
  className: undefined,
};

SelectionState.propTypes = {
  itemCount: PropTypes.number.isRequired,
  className: PropTypes.string,
  tableName: PropTypes.string.isRequired,
};

export default SelectionState;
