import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DataTableContext from './DataTableContext';
import Actions from './CollapsibleButtonGroup';

const BulkActions = ({
  className,
}) => {
  const {
    controlledTableSelections: [{ isEntireTableSelected }],
    selectedFlatRows,
    rows,
    bulkActions,
  } = useContext(DataTableContext);

  const bulkActionRows = selectedFlatRows || rows;
  const actionProps = {
    isEntireTableSelected,
    actionData: bulkActionRows,
  };
  return (
    <Actions
      actions={bulkActions}
      className={classNames('pgn__bulk-actions', className)}
      {...actionProps}
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
