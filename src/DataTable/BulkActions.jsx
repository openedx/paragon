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

  const actions = bulkActions.map(action => ({ component: action, args }));

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
