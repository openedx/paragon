/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import RowStatus from './RowStatus';
import TablePagination from './TablePagination';
import { requiredWhen } from './utils/propTypesUtils';

const TableFooter = ({
  isPaginated, pageSize, itemCount, previousPage, nextPage, canNextPage, canPreviousPage, pageIndex, pageCount,
}) => (
  <div className="pgn__table-footer">
    <RowStatus className="pgn__table-footer-row-status" pageSize={pageSize} itemCount={itemCount} />
    {isPaginated && (
      <TablePagination
        previousPage={previousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        pageIndex={pageIndex}
        pageCount={pageCount}
      />
    )}
  </div>
);

TableFooter.propTypes = {
  isPaginated: PropTypes.bool.isRequired,
  previousPage: requiredWhen(PropTypes.func, 'isPaginated'),
  nextPage: requiredWhen(PropTypes.func, 'isPaginated'),
  canPreviousPage: requiredWhen(PropTypes.bool, 'isPaginated'),
  canNextPage: requiredWhen(PropTypes.bool, 'isPaginated'),
  pageIndex: requiredWhen(PropTypes.number, 'isPaginated'),
  pageCount: requiredWhen(PropTypes.number, 'isPaginated'),
  pageSize: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
};

export default TableFooter;
