import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import DataTableContext from '../DataTableContext';
import BaseSelectionStatus from './BaseSelectionStatus';

const SelectionStatus = ({ className, clearSelectionText }) => {
  const { toggleAllRowsSelected, selectedFlatRows } = useContext(DataTableContext);
  const numSelectedRows = selectedFlatRows.length;
  const selectionStatusProps = {
    className,
    numSelectedRows,
    clearSelectionText,
    onSelectAll: () => toggleAllRowsSelected(true),
    onClear: () => toggleAllRowsSelected(false),
  };
  return <BaseSelectionStatus {...selectionStatusProps} />;
};

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
