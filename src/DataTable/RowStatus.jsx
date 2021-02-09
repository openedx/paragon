import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TableContext } from './TableContext';

const RowStatus = ({ className, itemCount, tableName }) => {
  const instance = useContext(TableContext).getTableInstance(tableName);
  const pageSize = instance.page ? instance.page.length : instance.rows?.length;

  if (!pageSize) {
    return null;
  }
  return (<div className={className}>Showing {pageSize} of {itemCount}</div>);
};

RowStatus.defaultProps = {
  className: '',
};

RowStatus.propTypes = {
  className: PropTypes.string,
  itemCount: PropTypes.number.isRequired,
  tableName: PropTypes.string.isRequired,
};

export default RowStatus;
