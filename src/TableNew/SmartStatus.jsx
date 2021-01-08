import React from 'react';
import PropTypes from 'prop-types';
import { requiredWhen } from './utils/propTypesUtils';
import SelectionState from './SelectionState';

const SmartStatus = ({
  isSelectable,
  numberOfSelectedRows,
  toggleAllRowsSelected,
  filterNames,
  pageSize,
  itemCount,
}) => {
  if (isSelectable && numberOfSelectedRows > 0) {
    return (
      <SelectionState
        numberOfSelectedRows={numberOfSelectedRows}
        toggleAllRowsSelected={toggleAllRowsSelected}
        itemCount={itemCount}
      />
    );
  }
  if (filterNames.length > 0) {
    return <div>Filtered by {filterNames.join(', ')}</div>;
  }
  return <div>Showing {itemCount || pageSize} of {itemCount}</div>;
};

SmartStatus.defaultProps = {
  numberOfSelectedRows: 0,
  toggleAllRowsSelected: () => {},
  filterNames: [],
  pageSize: null,
};

SmartStatus.propTypes = {
  isSelectable: PropTypes.bool.isRequired,
  numberOfSelectedRows: requiredWhen(PropTypes.number, 'isSelectable'),
  toggleAllRowsSelected: requiredWhen(PropTypes.func, 'isSelectable'),
  filterNames: PropTypes.arrayOf(PropTypes.string),
  pageSize: PropTypes.number,
  itemCount: PropTypes.number.isRequired,
};

export default SmartStatus;
