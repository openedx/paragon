import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DataTableContext from './DataTableContext';
import Actions from './CollapsibleButtonGroup';

function BulkActions({ className, ...rest }) {
  const tableInstance = useContext(DataTableContext);
  const {
    bulkActions,
    selectedFlatRows,
    controlledTableSelections: [{ isEntireTableSelected }],
  } = tableInstance;

  const args = {
    selectedFlatRows,
    isEntireTableSelected,
    tableInstance,
  };

  if (typeof bulkActions === 'function') {
    return <div className={classNames('pgn__bulk-actions', className)}>{bulkActions(args)}</div>;
  }

  const actions = bulkActions.map(action => ({ component: action, args }));

  return (
    <Actions
      className={classNames('pgn__bulk-actions', className)}
      data-testid="bulk-actions"
      actions={actions}
      {...rest}
    />
  );
}

BulkActions.defaultProps = {
  className: null,
};

BulkActions.propTypes = {
  /** class names for the div wrapping the button components */
  className: PropTypes.string,
};

export default BulkActions;
