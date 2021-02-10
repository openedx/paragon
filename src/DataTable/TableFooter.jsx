/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import RowStatus from './RowStatus';
import TablePagination from './TablePagination';

const TableFooter = ({
  itemCount,
}) => (
  <div className="pgn__data-table-footer">
    <RowStatus
      className="pgn__data-table-footer-row-status"
      itemCount={itemCount}
    />
    <TablePagination />
  </div>
);

TableFooter.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default TableFooter;
