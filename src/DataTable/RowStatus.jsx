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

RowStatus.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
};

RowStatus.defaultProps = {
  className: undefined,
};

export default RowStatus;
