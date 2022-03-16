import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DataTableContext from './DataTableContext';

const EmptyTable = ({ content, className }) => {
  const { rows, isLoading } = useContext(DataTableContext);
  if (isLoading || !rows || rows.length > 0) { return null; }

  return (<div className={classNames('pgn__data-table-empty', className)}>{content}</div>);
};

EmptyTable.defaultProps = {
  className: null,
};

EmptyTable.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default EmptyTable;
