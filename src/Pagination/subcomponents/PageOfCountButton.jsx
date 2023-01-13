import React, { useContext } from 'react';
import classNames from 'classnames';
import PaginationContext from '../PaginationContext';

export default function PageOfCountButton() {
  const { getAriaLabelForPageOfCountButton, getLabelForPageOfCountButton } = useContext(PaginationContext);

  const ariaLabel = getAriaLabelForPageOfCountButton();
  const label = getLabelForPageOfCountButton();

  return (
    <li className={classNames(['page-item', 'disabled'])}>
      <span
        className={classNames([
          'btn',
          'page-link',
          'mx-2',
          'border-0',
        ])}
        aria-label={ariaLabel}
      >
        {label}
      </span>
    </li>
  );
}
