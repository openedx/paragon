import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DataTableContext from './DataTableContext';
import Actions from './CollapsibleButtonGroup';

function TableActions({ className }) {
  const tableInstance = useContext(DataTableContext);
  const { tableActions } = tableInstance;

  const args = {
    tableInstance,
  };

  if (typeof tableActions === 'function') {
    return <div className={classNames('pgn__table-actions', className)}>{tableActions(tableInstance)}</div>;
  }

  const actions = tableActions.map(action => ({ component: action, args }));

  return (
    <Actions
      className={classNames('pgn__table-actions', className)}
      data-testid="table-actions"
      actions={actions}
    />
  );
}

TableActions.defaultProps = {
  className: undefined,
};

TableActions.propTypes = {
  /** class names for the div wrapping the button components */
  className: PropTypes.string,
};

export default TableActions;
