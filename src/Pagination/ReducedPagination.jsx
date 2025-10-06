// React import needed to support build-docs, if removed the build-docs will break
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
