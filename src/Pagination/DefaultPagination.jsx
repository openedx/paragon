import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import PaginationContext from './PaginationContext';
import PreviousPageButton from './subcomponents/PreviousPageButton';
import NextPageButton from './subcomponents/NextPageButton';
import PageOfCountButton from './subcomponents/PageOfCountButton';
import breakpoints from '../utils/breakpoints';
import { ELLIPSIS } from './constants';
import Ellipsis from './subcomponents/Ellipsis';
import newId from '../utils/newId';
import PageButton from './subcomponents/PageButton';

export default function DefaultPagination() {
  return (
    <ul className="pagination">
      <PreviousPageButton />
      <PaginationPages />
      <NextPageButton />
    </ul>
  );
}

function PaginationPages() {
  const { displayPages } = useContext(PaginationContext);
  const isMobile = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  if (isMobile) {
    return <PageOfCountButton />;
  }

  return (
    <>
      {displayPages.map((pageIndex) => {
        if (pageIndex === ELLIPSIS) {
          return <Ellipsis key={newId('pagination-ellipsis-')} />;
        }
        return <PageButton key={pageIndex} pageNum={pageIndex + 1} />;
      })}
    </>
  );
}