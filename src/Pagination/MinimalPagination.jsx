// React import needed to support build-docs, if removed the build-docs will break
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
