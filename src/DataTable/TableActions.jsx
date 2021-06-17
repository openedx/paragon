import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DataTableContext from './DataTableContext';
import Actions from './CollapsibleButtonGroup';

const TableActions = ({ className }) => {
  const tableInstance = useContext(DataTableContext);
  const {
    controlledTableSelections: [{ isEntireTableSelected }],
    selectedFlatRows,
    rows,
    tableActions,
  } = tableInstance;
  const selectedRowsForAction = selectedFlatRows || rows;

  return (
    <Actions
      actions={tableActions}
      className={classNames('pgn__table-actions', className)}
      selectedRows={selectedRowsForAction}
      isEntireTableSelected={isEntireTableSelected}
      tableInstance={tableInstance}
    />
  );
};

TableActions.defaultProps = {
  className: null,
};

TableActions.propTypes = {
  /** class names for the div wrapping the button components */
  className: PropTypes.string,
};

export default TableActions;
