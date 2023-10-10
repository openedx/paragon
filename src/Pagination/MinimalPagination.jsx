import React from 'react';
import { PreviousPageButton, NextPageButton } from './subcomponents';

export default function MinimalPagination() {
  return (
    <ul className="pagination">
      <PreviousPageButton />
      <NextPageButton />
    </ul>
  );
}
