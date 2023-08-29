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

function ControlledSelectionStatus({ className, clearSelectionText, ...rest }) {
  const {
    itemCount,
    page,
    controlledTableSelections: [{ selectedRows, isEntireTableSelected }, dispatch],
  } = useContext(DataTableContext);

  useEffect(
    () => {
      if (isEntireTableSelected) {
        const selectedRowIds = getRowIds(selectedRows);
        const unselectedPageRows = getUnselectedPageRows(selectedRowIds, page);
        if (unselectedPageRows.length) {
          dispatch(setSelectedRowsAction(unselectedPageRows, itemCount));
        }
      }
    },
    [isEntireTableSelected, selectedRows, itemCount, page, dispatch],
  );

  const numSelectedRows = isEntireTableSelected ? itemCount : selectedRows.length;
  const numSelectedRowsOnPage = (page || []).filter(r => r.isSelected).length;

  const selectionStatusProps = {
    className,
    numSelectedRows,
    numSelectedRowsOnPage,
    clearSelectionText,
    onSelectAll: () => dispatch(setSelectAllRowsAllPagesAction()),
    onClear: () => dispatch(clearSelectionAction()),
    ...rest,
  };
  return <BaseSelectionStatus {...selectionStatusProps} {...rest} />;
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
