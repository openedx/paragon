import React, { useContext } from 'react';
import { Button, ButtonGroup } from '..';
import DataTableContext from './DataTableContext';

const NEXT_BUTTON_TEXT = 'Next';
const PREVOUS_BUTTON_TEXT = 'Previous';
const PAGE_TEXT = 'Page';

const TablePagination = () => {
  const {
    pageCount, previousPage, canPreviousPage, canNextPage, nextPage, state,
  } = useContext(DataTableContext);

  // Use nextPage as a proxy for whether or not the table is paginated
  if (!nextPage) {
    return null;
  }

  const pageIndex = state?.pageIndex;

  return (
    <div className="pgn__data-table-pagination">
      <div className="pgn__page-count mr-3">
        {PAGE_TEXT}{' '}
        <strong>
          {pageIndex + 1} of {pageCount}
        </strong>{' '}
      </div>
      <ButtonGroup>
        <Button variant="outline-primary" onClick={() => previousPage()} disabled={!canPreviousPage}>
          {PREVOUS_BUTTON_TEXT}
        </Button>
        <Button variant="outline-primary" onClick={() => nextPage()} disabled={!canNextPage}>
          {NEXT_BUTTON_TEXT}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default TablePagination;
