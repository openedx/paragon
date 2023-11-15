import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import { CheckboxControl } from '../../Form';
import DataTableContext from '../DataTableContext';
import useConvertIndeterminateProp from '../utils/useConvertIndeterminateProp';

import {
  deleteSelectedRowAction,
  addSelectedRowAction,
} from './data/actions';

function ControlledSelect({ row }) {
  const {
    itemCount,
    controlledTableSelections: [, dispatch],
  } = useContext(DataTableContext);

  const toggleSelected = useCallback(
    () => {
      if (row.isSelected) {
        dispatch(deleteSelectedRowAction(row.id));
      } else {
        dispatch(addSelectedRowAction(row, itemCount));
      }
    },
    [itemCount, row, dispatch],
  );

  const updatedProps = useConvertIndeterminateProp(row.getToggleRowSelectedProps());

  return (
    <div className="pgn__data-table__controlled-select">
      <CheckboxControl
        {...updatedProps}
        onChange={toggleSelected}
      />
    </div>
  );
}

ControlledSelect.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    getToggleRowSelectedProps: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ControlledSelect;
