import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import DataTableContext from '../DataTableContext';
import BaseSelectionStatus from './BaseSelectionStatus';

import {
  clearSelectionAction,
  setSelectAllRowsAllPagesAction,
  setSelectedRowsAction,
} from './data/actions';
import {
  getUnselectedPageRows,
  getRowIds,
} from './data/helpers';

const ControlledSelectionStatus = ({ className, clearSelectionText }) => {
  const {
    itemCount,
    rows,
    controlledTableSelections: [{ selectedRows, isEntireTableSelected }, dispatch],
  } = useContext(DataTableContext);

  useEffect(
    () => {
      if (isEntireTableSelected) {
        const selectedRowIds = getRowIds(selectedRows);
        const unselectedPageRows = getUnselectedPageRows(selectedRowIds, rows);
        if (unselectedPageRows?.length) {
          dispatch(setSelectedRowsAction(unselectedPageRows, itemCount));
        }
      }
    },
    [isEntireTableSelected, selectedRows, itemCount, rows, dispatch],
  );

  const numSelectedRows = isEntireTableSelected ? itemCount : selectedRows.length;

  const selectionStatusProps = {
    className,
    numSelectedRows,
    clearSelectionText,
    onSelectAll: () => dispatch(setSelectAllRowsAllPagesAction()),
    onClear: () => dispatch(clearSelectionAction()),
  };
  return <BaseSelectionStatus {...selectionStatusProps} />;
};

ControlledSelectionStatus.defaultProps = {
  className: undefined,
  clearSelectionText: undefined,
};

ControlledSelectionStatus.propTypes = {
  /** A class name to append to the base element */
  className: PropTypes.string,
  /** A text that appears on the `Clear selection` button, defaults to 'Clear Selection' */
  clearSelectionText: PropTypes.string,
};

export default ControlledSelectionStatus;
