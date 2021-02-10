import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import DataTableContext from './TableContext';

export const SELECT_ALL_TEST_ID = 'test_selection_state_select_all_button';
export const CLEAR_SELECTION_TEST_ID = 'test_selection_state_clear_selection_button';

const SelectionStatus = ({
  itemCount, className,
}) => {
  const { toggleAllRowsSelected, selectedFlatRows } = useContext(DataTableContext);
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

SelectionStatus.defaultProps = {
  className: undefined,
};

SelectionStatus.propTypes = {
  itemCount: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default SelectionStatus;
