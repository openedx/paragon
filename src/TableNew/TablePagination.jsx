import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from '..';

const TablePagination = ({
  previousPage, nextPage, canPreviousPage, canNextPage, pageIndex, pageCount,
}) => (
  <div className="pgn__table-pagination">
    <div className="pgn__page-count">
      Page{' '}
      <strong>
        {pageIndex + 1} of {pageCount}
      </strong>{' '}
    </div>
    <ButtonGroup>
      <Button variant="outline-primary" onClick={() => previousPage()} disabled={!canPreviousPage}>
        Previous
      </Button>
      <Button variant="outline-primary" onClick={() => nextPage()} disabled={!canNextPage}>
        Next
      </Button>
    </ButtonGroup>
  </div>
);

TablePagination.propTypes = {
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  canPreviousPage: PropTypes.bool.isRequired,
  canNextPage: PropTypes.bool.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default TablePagination;
