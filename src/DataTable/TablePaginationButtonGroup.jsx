import React, { useContext } from 'react';
import { ButtonGroup, IconButton, Icon } from '..';
import { ArrowBackIos, ArrowForwardIos } from '../../icons';
import DataTableContext from './DataTableContext';

const TablePaginationButtonGroup = () => {
  const {
    nextPage, previousPage, canPreviousPage, canNextPage,
  } = useContext(DataTableContext);

  // Use nextPage as a proxy for whether or not the table is paginated
  if (!nextPage) {
    return null;
  }

  return (
    <ButtonGroup>
      <IconButton
        alt="Previous page"
        src={ArrowBackIos}
        iconAs={Icon}
        onClick={previousPage}
        disabled={!canPreviousPage}
      />
      <IconButton
        alt="Next page"
        src={ArrowForwardIos}
        iconAs={Icon}
        onClick={nextPage}
        disabled={!canNextPage}
      />
    </ButtonGroup>
  );
};

export default TablePaginationButtonGroup;
