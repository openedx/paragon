import React, { useContext, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { CheckboxControl } from '../../Form';
import DataTableContext from '../DataTableContext';

import {
  clearPageSelectionAction,
  setSelectedRowsAction,
} from './data/actions';

function ControlledSelectHeader({ rows }) {
  const {
    itemCount,
    controlledTableSelections: [, dispatch],
    getToggleAllPageRowsSelectedProps,
    state: { selectedRowIds },
    isAllPageRowsSelected,
  } = useContext(DataTableContext);

  const selectedPageRowIds = useMemo(
    () => Object.keys(selectedRowIds),
    [selectedRowIds],
  );

  const toggleAllPageRowsSelected = useCallback(
    () => {
      if (isAllPageRowsSelected) {
        dispatch(clearPageSelectionAction(selectedPageRowIds));
      } else {
        dispatch(setSelectedRowsAction(rows, itemCount));
      }
    },
    [rows, selectedPageRowIds, isAllPageRowsSelected, dispatch, itemCount],
  );

  const toggleAllPageRowsSelectedProps = getToggleAllPageRowsSelectedProps();
  toggleAllPageRowsSelectedProps.isIndeterminate = toggleAllPageRowsSelectedProps.indeterminate;
  // delete unused ``indeterminate`` prop
  delete toggleAllPageRowsSelectedProps.indeterminate;

  return (
    <div className="pgn__data-table__controlled-select">
      <CheckboxControl
        {...toggleAllPageRowsSelectedProps}
        onChange={toggleAllPageRowsSelected}
      />
    </div>
  );
}

ControlledSelectHeader.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  })).isRequired,
};

export default ControlledSelectHeader;
