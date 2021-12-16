/* eslint-disable react/require-default-props */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import RowStatus from './RowStatus';
import TablePagination from './TablePagination';
import TablePaginationButtonGroup from './TablePaginationButtonGroup';

const TableFooter = ({ className, children }) => (
  <div className={classNames(className, 'pgn__data-table-footer')}>
    {children}
  </div>
);

TableFooter.defaultProps = {
  children: (
    <>
      <RowStatus />
      <TablePagination />
      <TablePaginationButtonGroup />
    </>
  ),
  className: null,
};

TableFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.node])),
  ]),
};

export default TableFooter;
