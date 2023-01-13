import React from 'react';
import PreviousPageButton from './subcomponents/PreviousPageButton';
import NextPageButton from './subcomponents/NextPageButton';
import PaginationDropdown from './subcomponents/PaginationDropdown';

export default function ReducedPagination() {
  return (
    <ul className="pagination">
      <PreviousPageButton />
      <PaginationDropdown />
      <NextPageButton />
    </ul>
  );
}
