import React from 'react';
import { PreviousPageButton, NextPageButton, PaginationDropdown } from './subcomponents';

export default function ReducedPagination() {
  return (
    <ul className="pagination">
      <PreviousPageButton />
      <PaginationDropdown />
      <NextPageButton />
    </ul>
  );
}
