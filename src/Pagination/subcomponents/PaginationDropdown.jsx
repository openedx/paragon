import React, { useContext } from 'react';
import PaginationContext from '../PaginationContext';
import Dropdown from '../../Dropdown';

export default function PaginationDropdown() {
  const {
    getPageOfText,
    pageCount,
    handlePageSelect,
    getPageButtonVariant,
  } = useContext(PaginationContext);

  if (pageCount <= 1) {
    return null;
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant={getPageButtonVariant()} id="Pagination dropdown">
        {getPageOfText()}
      </Dropdown.Toggle>
      <Dropdown.Menu className="pagination-reduced-dropdown-menu">
        {[...Array(pageCount).keys()].map(pageNum => (
          <Dropdown.Item onClick={() => handlePageSelect(pageNum + 1)} key={pageNum}>
            {pageNum + 1}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
