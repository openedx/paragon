import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DataTableContext from './DataTableContext';

const RowStatus = ({ className, itemCount }) => {
  const instance = useContext(DataTableContext);
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
};

export default RowStatus;
