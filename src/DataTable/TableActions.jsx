import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DataTableContext from './DataTableContext';
import Actions from './Actions';

const TableActions = ({
  className,
}) => {
  const instance = useContext(DataTableContext);

  return <Actions actionData={instance} actions={instance.tableActions} className={classNames('pgn__table-actions', className)} />;
};

TableActions.defaultProps = {
  className: null,
};

TableActions.propTypes = {
  /** class names for the div wrapping the button components */
  className: PropTypes.string,
};

export default TableActions;
