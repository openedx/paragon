import React, { useContext } from 'react';
import classNames from 'classnames';
import PaginationContext from '../PaginationContext';

export default function PageOfCountButton() {
  const { getAriaLabelForPageOfCountButton, getPageOfText } = useContext(PaginationContext);

  const ariaLabel = getAriaLabelForPageOfCountButton();
  const label = getPageOfText();

  return (
    <li className={classNames('page-item', 'disabled')}>
      <span
        className={classNames(
          'btn',
          'page-link',
          'page-of-count',
        )}
        aria-label={ariaLabel}
      >
        {label}
      </span>
    </li>
  );
}
