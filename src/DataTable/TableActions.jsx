import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DataTableContext from './DataTableContext';
import Actions from './CollapsibleButtonGroup';

const TableActions = ({ className }) => {
  const tableInstance = useContext(DataTableContext);
  const { tableActions } = tableInstance;
  if (typeof tableActions === 'function') {
    return <div className={classNames('pgn__bulk-actions', className)}>{tableActions()}</div>;
  }
  return (
    <Actions
      className={classNames('pgn__bulk-actions', className)}
      actions={tableActions}
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
