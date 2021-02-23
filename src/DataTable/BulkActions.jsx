import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DataTableContext from './DataTableContext';
import Actions from './Actions';

const BulkActions = ({
  className,
}) => {
  const { selectedFlatRows, rows, bulkActions } = useContext(DataTableContext);

  const bulkActionRows = selectedFlatRows || rows;

  return <Actions actionData={bulkActionRows} actions={bulkActions} className={classNames('pgn__bulk-actions', className)} />;
};

BulkActions.defaultProps = {
  className: null,
};

BulkActions.propTypes = {
  /** class names for the div wrapping the button components */
  className: PropTypes.string,
};

export default BulkActions;
