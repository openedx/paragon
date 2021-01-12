import React from 'react';
import PropTypes from 'prop-types';

const RowStatus = ({ className, pageSize, itemCount }) => (
  <div className={className}>Showing {pageSize} of {itemCount}</div>
);

RowStatus.defaultProps = {
  className: '',
};

RowStatus.propTypes = {
  className: PropTypes.string,
  pageSize: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
};

export default RowStatus;
