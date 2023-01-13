import React from 'react';
import PreviousPageButton from './subcomponents/PreviousPageButton';
import NextPageButton from './subcomponents/NextPageButton';

export default function MinimalPagination() {
  return (
    <ul className="pagination">
      <PreviousPageButton />
      <NextPageButton />
    </ul>
  );
}
