import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const EmptyTable = ({ content, className }) => <div className={classNames('pgn__data-table-empty', className)}>{content}</div>;

EmptyTable.defaultProps = {
  className: null,
};

EmptyTable.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default EmptyTable;
