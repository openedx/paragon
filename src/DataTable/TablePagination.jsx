import React, { useContext } from 'react';
import { Dropdown } from '..';
import DataTableContext from './DataTableContext';

const TablePagination = () => {
  const {
    pageCount, state, gotoPage,
  } = useContext(DataTableContext);

  if (!pageCount || pageCount < 2) {
    return null;
  }

  const pageIndex = state?.pageIndex;

  return (
    <Dropdown>
      <Dropdown.Toggle variant="tertiary" id="Pagination dropdown">
        {pageIndex + 1} of {pageCount}
      </Dropdown.Toggle>
      <Dropdown.Menu className="pgn__data-table-pagination-dropdown">
        {[...Array(pageCount).keys()].map(pageNum => (
          <Dropdown.Item onClick={() => gotoPage(pageNum)} key={pageNum}>
            {pageNum + 1}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default TablePagination;
