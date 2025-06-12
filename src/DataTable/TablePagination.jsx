import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import DataTableContext from './DataTableContext';
import Pagination from '../Pagination';
import messages from './messages';

function TablePagination() {
  const intl = useIntl();

  const {
    pageCount, state, gotoPage,
  } = useContext(DataTableContext);

  if (!pageCount || pageCount < 2) {
    return null;
  }

  const pageIndex = state?.pageIndex;

  return (
    <Pagination
      variant="reduced"
      currentPage={pageIndex + 1}
      onPageSelect={(pageNum) => gotoPage(pageNum - 1)}
      pageCount={pageCount}
      paginationLabel={intl.formatMessage(messages.paginationLabel)}
      icons={{
        leftIcon: null,
        rightIcon: null,
      }}
    />
  );
}

export default TablePagination;
