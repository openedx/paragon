/* eslint-disable react/require-default-props */
import React from 'react';
import RowStatus from './RowStatus';
import TablePagination from './TablePagination';

const TableFooter = () => (
  <div className="pgn__data-table-footer">
    <RowStatus
      className="pgn__data-table-footer-row-status"
    />
    <TablePagination />
  </div>
);

export default TableFooter;
