import React, { useContext, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { CheckboxControl } from '../../Form';
import DataTableContext from '../DataTableContext';
import useConvertIndeterminateProp from '../utils/useConvertIndeterminateProp';

import {
  deleteSelectedRowAction,
  addSelectedRowAction,
} from './data/actions';

const ControlledSelect = ({ row }) => {
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
    [itemCount, row],
  );

  const toggleRowSelectedProps = useMemo(() => row.getToggleRowSelectedProps(), [row.getToggleRowSelectedProps]);
  const updatedProps = useConvertIndeterminateProp(toggleRowSelectedProps);

  return (
    <div className="d-flex align-content-center p-1">
      <CheckboxControl
        {...updatedProps}
        onChange={toggleSelected}
      />
    </div>
  );
};

ControlledSelect.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    getToggleRowSelectedProps: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ControlledSelect;
