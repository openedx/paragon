import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DataTableContext from './DataTableContext';
import Actions from './CollapsibleButtonGroup';

const BulkActions = ({ className }) => {
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

  const actions = bulkActions.map(action => {
    if (typeof action === 'function') {
      return action(args);
    }
    return action;
  });

  return (
    <Actions
      className={classNames('pgn__bulk-actions', className)}
      actions={actions}
    />
  );
};

BulkActions.defaultProps = {
  className: null,
};

BulkActions.propTypes = {
  /** class names for the div wrapping the button components */
  className: PropTypes.string,
};

export default BulkActions;
