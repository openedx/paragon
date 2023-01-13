import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../Button';
import PaginationContext from '../PaginationContext';

export default function PageButton({ pageNum }) {
  const {
    isPageButtonActive,
    getAriaLabelForPageButton,
    getPageButtonVariant,
    handlePageSelect,
    getPageButtonRefHandler,
  } = useContext(PaginationContext);

  return (
    <li className={classNames('page-item', { active: isPageButtonActive(pageNum) })}>
      <Button
        className="page-link"
        aria-label={getAriaLabelForPageButton(pageNum)}
        variant={getPageButtonVariant(pageNum)}
        ref={getPageButtonRefHandler(pageNum)}
        onClick={() => handlePageSelect(pageNum)}
      >
        {pageNum}
      </Button>
    </li>
  );
}

PageButton.propTypes = {
  pageNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
