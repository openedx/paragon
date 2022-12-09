import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import DataTableContext from '../DataTableContext';
import BaseSelectionStatus from './BaseSelectionStatus';
import { useRows } from '../hooks';

function SelectionStatus({ className, clearSelectionText }) {
  const { toggleAllRowsSelected, state } = useContext(DataTableContext);
  const { displayRows } = useRows();
  const { selectedRowIds } = state;
  const numSelectedRows = Object.keys(selectedRowIds || {}).length;
  const numSelectedRowsOnPage = displayRows.filter(r => r.isSelected).length;
  const selectionStatusProps = {
    className,
    numSelectedRows,
    numSelectedRowsOnPage,
    clearSelectionText,
    onSelectAll: () => toggleAllRowsSelected(true),
    onClear: () => toggleAllRowsSelected(false),
  };
  return <BaseSelectionStatus {...selectionStatusProps} />;
}

SelectionStatus.propTypes = {
  /** A class name to append to the base element */
  className: PropTypes.string,
  /** A text that appears on the `Clear selection` button, defaults to 'Clear Selection' */
  clearSelectionText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

SelectionStatus.defaultProps = {
  className: undefined,
  clearSelectionText: undefined,
};

export default SelectionStatus;
