import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import DataTableContext from '../DataTableContext';
import BaseSelectionStatus from './BaseSelectionStatus';
import { CLEAR_SELECTION_TEXT } from './data/constants';

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

SelectionStatus.defaultProps = {
  className: undefined,
  clearSelectionText: CLEAR_SELECTION_TEXT,
};

SelectionStatus.propTypes = {
  className: PropTypes.string,
  clearSelectionText: PropTypes.string,
};

export default SelectionStatus;
