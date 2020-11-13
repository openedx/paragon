import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const SelectionState = ({ numberOfSelectedRows, toggleAllRowsSelected }) => (
  <div>
    <span>{numberOfSelectedRows} selected </span>
    <Button variant="link" onClick={() => toggleAllRowsSelected(true)}>Select All Rows</Button>
    {numberOfSelectedRows > 0 && <Button variant="link" onClick={() => toggleAllRowsSelected(false)}>Clear Selection</Button>}
  </div>
);

SelectionState.propTypes = {
  numberOfSelectedRows: PropTypes.number.isRequired,
  toggleAllRowsSelected: PropTypes.func.isRequired,
};

export default SelectionState;
