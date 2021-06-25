import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DataTableContext from './DataTableContext';
import Actions from './CollapsibleButtonGroup';

const BulkActions = ({ className }) => {
  const { bulkActions } = useContext(DataTableContext);
  return (
    <Actions
      className={classNames('pgn__bulk-actions', className)}
      actions={bulkActions}
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
