import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DataTableContext from './DataTableContext';

const RowStatus = ({ className }) => {
  const { page, rows, itemCount } = useContext(DataTableContext);
  const pageSize = page?.length || rows?.length;

  if (!pageSize) {
    return null;
  }
  return (<div className={className}>Showing {pageSize} of {itemCount}.</div>);
};

RowStatus.defaultProps = {
  className: undefined,
};

RowStatus.propTypes = {
  className: PropTypes.string,
};

export default RowStatus;
