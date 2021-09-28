import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DataTableContext from './DataTableContext';
import Actions from './CollapsibleButtonGroup';

const TableActions = ({ className }) => {
  const tableInstance = useContext(DataTableContext);
  const { tableActions } = tableInstance;

  if (typeof tableActions === 'function') {
    return <div className={classNames('pgn__table-actions', className)}>{tableActions(tableInstance)}</div>;
  }

  const actions = tableActions.map(action => {
    if (typeof action === 'function') {
      return action(tableInstance);
    }
    return action;
  });

  return (
    <Actions
      className={classNames('pgn__table-actions', className)}
      actions={actions}
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
