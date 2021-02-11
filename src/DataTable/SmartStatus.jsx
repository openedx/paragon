import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SelectionStatus from './SelectionStatus';
import RowStatus from './RowStatus';
import FilterStatus from './FilterStatus';
import DataTableContext from './DataTableContext';

const SMART_STATUS_CLASS = 'pgn__smart-status';

const SmartStatus = ({
  itemCount,
}) => {
  const { state, selectedFlatRows } = useContext(DataTableContext);
  const numSelectedRows = selectedFlatRows?.length;
  if (selectedFlatRows && numSelectedRows > 0) {
    return (
      <SelectionStatus
        itemCount={itemCount}
        className={SMART_STATUS_CLASS}
      />
    );
  }
  if (state?.filters && state.filters.length > 0) {
    return (
      <FilterStatus
        className={SMART_STATUS_CLASS}
      />
    );
  }
  return (
    <RowStatus
      className={SMART_STATUS_CLASS}
      itemCount={itemCount}
    />
  );
};

SmartStatus.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default SmartStatus;
