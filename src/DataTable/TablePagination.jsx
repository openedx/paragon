import React, { useContext } from 'react';
import { Pagination } from '..';
import DataTableContext from './DataTableContext';

function TablePagination() {
  const {
    pageCount, state, gotoPage,
  } = useContext(DataTableContext);

  if (!pageCount || pageCount < 2) {
    return null;
  }

  const pageIndex = state?.pageIndex;

  return (
    <Pagination.Reduced
      currentPage={pageIndex + 1}
      handlePageSelect={(pageNum) => gotoPage(pageNum - 1)}
      pageCount={pageCount}
    />
  );
}

export default TablePagination;
