import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from '..';
import { TableContext } from './TableContext';

const NEXT_BUTTON_TEXT = 'Next';
const PREVOUS_BUTTON_TEXT = 'Previous';
const PAGE_TEXT = 'Page';

const TablePagination = ({
  tableName,
}) => {
  const tableContext = useContext(TableContext);
  const instance = tableContext.getTableInstance(tableName);
  const {
    pageCount, previousPage, canPreviousPage, canNextPage, nextPage,
  } = instance;
  const pageIndex = instance.state?.pageIndex;

  if (!nextPage) {
    return null;
  }

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

TablePagination.propTypes = {
  tableName: PropTypes.string.isRequired,
};

export default TablePagination;
