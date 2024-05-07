import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import PaginationContext from './PaginationContext';
import { ELLIPSIS } from './constants';
import {
  PreviousPageButton,
  NextPageButton,
  PageOfCountButton,
  PageButton,
  Ellipsis,
} from './subcomponents';
import breakpoints from '../utils/breakpoints';
import newId from '../utils/newId';

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

export default function DefaultPagination() {
  return (
    <ul className="pagination">
      <PreviousPageButton />
      <PaginationPages />
      <NextPageButton />
    </ul>
  );
}
