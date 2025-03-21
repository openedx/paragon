import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import DataTableContext from '../DataTableContext';
import BaseSelectionStatus from './BaseSelectionStatus';

import {
  clearSelectionAction,
  setSelectAllRowsAllPagesAction,
} from './data/actions';

function ControlledSelectionStatus({ className, clearSelectionText }) {
  const {
    itemCount,
    page,
    controlledTableSelections: [
      { selectedRows, isSelectAllEnabled },
      selectionsDispatch,
    ],
  } = useContext(DataTableContext);

  const numSelectedRows = itemCount === selectedRows.length || isSelectAllEnabled ? itemCount : selectedRows.length;
  const numSelectedRowsOnPage = (page || []).filter(r => r.isSelected).length;

  const selectionStatusProps = {
    className,
    numSelectedRows,
    numSelectedRowsOnPage,
    clearSelectionText,
    onSelectAll: () => selectionsDispatch(setSelectAllRowsAllPagesAction()),
    onClear: () => selectionsDispatch(clearSelectionAction()),
  };
  return <BaseSelectionStatus {...selectionStatusProps} />;
}

ControlledSelectionStatus.defaultProps = {
  className: undefined,
  clearSelectionText: undefined,
};

ControlledSelectionStatus.propTypes = {
  /** A class name to append to the base element */
  className: PropTypes.string,
  /** A text that appears on the `Clear selection` button, defaults to 'Clear Selection' */
  clearSelectionText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default ControlledSelectionStatus;
