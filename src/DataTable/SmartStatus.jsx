import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SelectionStatus from './SelectionStatus';
import RowStatus from './RowStatus';
import FilterStatus from './FilterStatus';
import { TableContext } from './TableContext';

const SMART_STATUS_CLASS = 'pgn__smart-status';

const SmartStatus = ({
  itemCount,
  tableName,
}) => {
  const { state, selectedFlatRows } = useContext(TableContext).getTableInstance(tableName);
  const numSelectedRows = selectedFlatRows?.length;
  if (selectedFlatRows && numSelectedRows > 0) {
    return (
      <SelectionStatus
        itemCount={itemCount}
        className={SMART_STATUS_CLASS}
        tableName={tableName}
      />
    );
  }
  if (state?.filters && state.filters.length > 0) {
    return (
      <FilterStatus
        className={SMART_STATUS_CLASS}
        tableName={tableName}
      />
    );
  }
  return (
    <RowStatus
      className={SMART_STATUS_CLASS}
      itemCount={itemCount}
      tableName={tableName}
    />
  );
};

SmartStatus.propTypes = {
  itemCount: PropTypes.number.isRequired,
  tableName: PropTypes.string.isRequired,
};

export default SmartStatus;
