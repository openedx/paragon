import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import DataTableContext from './DataTableContext';
import Pagination from '../Pagination';
import { ArrowBackIos, ArrowForwardIos } from '../../icons';
import messages from './messages';

function TablePaginationMinimal() {
  const intl = useIntl();

  const {
    nextPage, pageCount, gotoPage, state,
  } = useContext(DataTableContext);

  // Use nextPage as a proxy for whether or not the table is paginated
  if (!nextPage) {
    return null;
  }

  const pageIndex = state?.pageIndex;

  return (
    <Pagination
      variant="minimal"
      currentPage={pageIndex + 1}
      pageCount={pageCount}
      paginationLabel={intl.formatMessage(messages.paginationLabel)}
      onPageSelect={(pageNum) => gotoPage(pageNum - 1)}
      icons={{
        leftIcon: ArrowBackIos,
        rightIcon: ArrowForwardIos,
      }}
    />
  );
}

export default TablePaginationMinimal;
