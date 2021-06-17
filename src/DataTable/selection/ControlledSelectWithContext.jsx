import React, { useContext, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import DataTableContext from '../DataTableContext';
import IndeterminateCheckbox from '../IndeterminateCheckBox';

import {
  deleteSelectedRowAction,
  addSelectedRowAction,
} from './data/actions';

export const SELECT_ONE_TEST_ID = 'selectOne';

const ControlledSelectWithContext = ({ row }) => {
  const {
    itemCount,
    controlledTableSelections: [{ selectedRows }, dispatch],
  } = useContext(DataTableContext);

  const isSelected = useMemo(
    () => selectedRows.some((selection) => selection.id === row.id),
    [selectedRows, JSON.stringify(row)],
  );

  const toggleSelected = useCallback(
    () => {
      if (isSelected) {
        dispatch(deleteSelectedRowAction(row.id));
      } else {
        dispatch(addSelectedRowAction(row, itemCount));
      }
    },
    [isSelected, itemCount, JSON.stringify(row)],
  );

  return (
    <div>
      <IndeterminateCheckbox
        style={{ cursor: 'pointer' }}
        title="Toggle row selected"
        checked={isSelected}
        onChange={toggleSelected}
        indeterminate={false}
        data-testid={SELECT_ONE_TEST_ID}
      />
    </div>
  );
};

ControlledSelectWithContext.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default ControlledSelectWithContext;
