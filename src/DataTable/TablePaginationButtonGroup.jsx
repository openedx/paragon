import React, { useContext } from 'react';
import { Pagination } from '..';
import DataTableContext from './DataTableContext';

const TablePaginationButtonGroup = () => {
  const {
    nextPage, pageCount, gotoPage, state,
  } = useContext(DataTableContext);

  // Use nextPage as a proxy for whether or not the table is paginated
  if (!nextPage) {
    return null;
  }

  const pageIndex = state?.pageIndex;

  return (
    <Pagination variant="minimal" currentPage={pageIndex + 1} pageCount={pageCount} paginationLabel="1234" onPageSelect={(pageNum) => gotoPage(pageNum - 1)} />
  );
};

export default TablePaginationButtonGroup;
