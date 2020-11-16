import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const TablePagination = ({ previousPage, nextPage }) => {
  return (
    <div className="pagination">
      <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </Button>
      <Button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </Button>
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
    </div>
  );
};

TablePagination.propTypes = {

};

export default TablePagination;
