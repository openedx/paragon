import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DataTableContext from './DataTableContext';
import Actions from './CollapsibleButtonGroup';

const TableActions = ({
  className,
}) => {
  const {
    controlledTableSelections: [{ isEntireTableSelected }],
    selectedFlatRows,
    rows,
    tableActions,
  } = useContext(DataTableContext);

  const tableActionRows = selectedFlatRows || rows;
  const actionProps = {
    isEntireTableSelected,
    actionData: tableActionRows,
  };
  return (
    <Actions
      {...actionProps}
      actions={tableActions}
      className={classNames('pgn__table-actions', className)}
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
