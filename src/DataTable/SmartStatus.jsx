import React from 'react';
import PropTypes from 'prop-types';
import { requiredWhen } from './utils/propTypesUtils';
import SelectionStatus from './SelectionStatus';
import RowStatus from './RowStatus';
import FilterStatus from './FilterStatus';

const SMART_STATUS_CLASS = 'pgn__smart-status';

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
      <SelectionStatus
        numberOfSelectedRows={numberOfSelectedRows}
        toggleAllRowsSelected={toggleAllRowsSelected}
        itemCount={itemCount}
        className={SMART_STATUS_CLASS}
      />
    );
  }
  if (isFilterable && filterNames.length > 0) {
    return (
      <FilterStatus
        className={SMART_STATUS_CLASS}
        filterNames={filterNames}
        onClick={() => resetAllFilters()}
      />
    );
  }
  return <RowStatus className={SMART_STATUS_CLASS} pageSize={pageSize} itemCount={itemCount} />;
};

SmartStatus.defaultProps = {
  numberOfSelectedRows: 0,
  toggleAllRowsSelected: () => {},
  filterNames: [],
};

SmartStatus.propTypes = {
  isSelectable: PropTypes.bool.isRequired,
  numberOfSelectedRows: PropTypes.number,
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
