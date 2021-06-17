import React, { useContext, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import DataTableContext from '../DataTableContext';
import IndeterminateCheckbox from '../IndeterminateCheckBox';

import {
  clearPageSelectionAction,
  setSelectedRowsAction,
} from './data/actions';
import {
  getSelectedPageRows,
  checkEveryPageRowSelected,
  getRowIds,
} from './data/helpers';

export const SELECT_ALL_TEST_ID = 'selectAll';

const ControlledSelectWithContextHeader = ({ rows }) => {
  const {
    itemCount,
    controlledTableSelections: [{ selectedRows }, dispatch],
  } = useContext(DataTableContext);

  const selectedPageRowIds = useMemo(
    () => {
      const selectedRowIds = getRowIds(selectedRows);
      const selectedPageRows = getSelectedPageRows(selectedRowIds, rows);
      return getRowIds(selectedPageRows);
    },
    [rows, selectedRows],
  );

  const isAllPageRowsSelected = useMemo(
    () => {
      if (!rows.length) {
        return false;
      }
      return checkEveryPageRowSelected(selectedPageRowIds, rows);
    },
    [selectedPageRowIds, rows],
  );

  const anyPageRowsSelected = useMemo(
    () => rows.some((row) => selectedPageRowIds.includes(row.id)),
    [selectedPageRowIds, rows],
  );

  const toggleAllPageRowsSelected = useCallback(
    () => {
      if (isAllPageRowsSelected) {
        dispatch(clearPageSelectionAction(selectedPageRowIds));
      } else {
        dispatch(setSelectedRowsAction(rows, itemCount));
      }
    },
    [rows, selectedPageRowIds, isAllPageRowsSelected],
  );

  return (
    <div>
      <IndeterminateCheckbox
        style={{ cursor: 'pointer' }}
        title="Toggle all rows selected"
        checked={isAllPageRowsSelected}
        onChange={toggleAllPageRowsSelected}
        indeterminate={anyPageRowsSelected && !isAllPageRowsSelected}
        data-testid={SELECT_ALL_TEST_ID}
      />
    </div>
  );
};

ControlledSelectWithContextHeader.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  })).isRequired,
};

export default ControlledSelectWithContextHeader;
