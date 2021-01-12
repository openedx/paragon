import React from 'react';
import PropTypes from 'prop-types';
import { requiredWhen } from './utils/propTypesUtils';
import SelectionState from './SelectionState';
import { Button } from '..';

const SMART_STATUS_CLASS = 'pgn__smart-status'

const SmartStatus = ({
  isSelectable,
  numberOfSelectedRows,
  toggleAllRowsSelected,
  isFilterable,
  filterNames,
  resetAllFilters,
  pageSize,
  itemCount,
}) => {
  if (isSelectable && numberOfSelectedRows > 0) {
    return (
      <SelectionState
        numberOfSelectedRows={numberOfSelectedRows}
        toggleAllRowsSelected={toggleAllRowsSelected}
        itemCount={itemCount}
        className={SMART_STATUS_CLASS}
      />
    );
  }
  if (isFilterable && filterNames.length > 0) {
    return (
      <div className={SMART_STATUS_CLASS}>
        Filtered by {filterNames.join(', ')}
        <Button
          className="pgn__smart-status-button"
          variant="link"
          size="inline"
          onClick={() => resetAllFilters()}
        >
          Clear Filters
        </Button>
      </div>
    );
  }
  return <div className={SMART_STATUS_CLASS}>Showing {pageSize} of {itemCount}</div>;
};

SmartStatus.defaultProps = {
  numberOfSelectedRows: 0,
  toggleAllRowsSelected: () => {},
  filterNames: [],
};

SmartStatus.propTypes = {
  isSelectable: PropTypes.bool.isRequired,
  numberOfSelectedRows: requiredWhen(PropTypes.number, 'isSelectable'),
  toggleAllRowsSelected: requiredWhen(PropTypes.func, 'isSelectable'),
  isFilterable: PropTypes.bool.isRequired,
  /** Names of applied filters */
  filterNames: requiredWhen(PropTypes.arrayOf(PropTypes.string), 'isFilterable'),
  // eslint-disable-next-line react/require-default-props
  resetAllFilters: requiredWhen(PropTypes.func, 'isFilterable'),
  pageSize: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
};

export default SmartStatus;
