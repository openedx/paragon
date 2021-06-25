import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../..';
import DataTableContext from '../DataTableContext';
import {
  SELECT_ALL_TEST_ID,
  CLEAR_SELECTION_TEST_ID,
} from './data/constants';

const BaseSelectionStatus = ({
  className,
  clearSelectionText,
  numSelectedRows,
  onSelectAll,
  onClear,
}) => {
  const { itemCount } = useContext(DataTableContext);
  const isAllRowsSelected = numSelectedRows === itemCount;
  return (
    <div className={className}>
      <span>{isAllRowsSelected && 'All '}{numSelectedRows} selected </span>
      {!isAllRowsSelected && (
        <Button
          className={SELECT_ALL_TEST_ID}
          variant="link"
          size="inline"
          onClick={onSelectAll}
        >
          Select all {itemCount}
        </Button>
      )}
      {numSelectedRows > 0 && (
        <Button
          className={CLEAR_SELECTION_TEST_ID}
          variant="link"
          size="inline"
          onClick={onClear}
        >
          {clearSelectionText}
        </Button>
      )}
    </div>
  );
};

BaseSelectionStatus.defaultProps = {
  className: undefined,
};

BaseSelectionStatus.propTypes = {
  className: PropTypes.string,
  clearSelectionText: PropTypes.string.isRequired,
  numSelectedRows: PropTypes.number.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default BaseSelectionStatus;
