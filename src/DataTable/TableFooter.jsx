/* eslint-disable react/require-default-props */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import RowStatus from './RowStatus';
import TablePagination from './TablePagination';
import TablePaginationMinimal from './TablePaginationMinimal';

function TableFooter({ className, children }) {
  return (
    <div className={classNames(className, 'pgn__data-table-footer')}>
      {children}
    </div>
  );
}

TableFooter.propTypes = {
  /** Specifies the content of the `TableFooter` */
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.node])),
  ]),
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
};

TableFooter.defaultProps = {
  children: (
    <>
      <RowStatus />
      <TablePagination />
      <TablePaginationMinimal />
    </>
  ),
  className: null,
};

export default TableFooter;
