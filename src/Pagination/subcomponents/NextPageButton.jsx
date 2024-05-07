import React, { useContext } from 'react';
import classNames from 'classnames';
import { PAGINATION_BUTTON_ICON_BUTTON_NEXT_ALT } from '../constants';
import PaginationContext from '../PaginationContext';
import Button from '../../Button';
import IconButton from '../../IconButton';
import Icon from '../../Icon';

export default function NextPageButton() {
  const {
    invertColors,
    getPageButtonVariant,
    isDefaultVariant,
    isOnLastPage,
    getAriaLabelForNextButton,
    handleNextButtonClick,
    getNextButtonIcon,
    buttonLabels,
    nextButtonRef,
  } = useContext(PaginationContext);

  const isDisabled = isOnLastPage();
  const icon = getNextButtonIcon();

  if (isDefaultVariant()) {
    return (
      <li className={classNames('page-item', { disabled: isDisabled })}>
        <Button
          className="previous page-link"
          variant={getPageButtonVariant()}
          aria-label={getAriaLabelForNextButton()}
          tabIndex={isDisabled ? '-1' : undefined}
          onClick={handleNextButtonClick}
          ref={nextButtonRef}
          disabled={isDisabled}
          iconAfter={icon}
        >
          {buttonLabels.next}
        </Button>
      </li>
    );
  }

  if (!icon) {
    return null;
  }

  return (
    <li className={classNames('page-item', { disabled: isDisabled })}>
      <IconButton
        invertColors={invertColors}
        src={getNextButtonIcon()}
        iconAs={Icon}
        className="previous page-link"
        aria-label={getAriaLabelForNextButton()}
        tabIndex={isDisabled ? '-1' : undefined}
        onClick={handleNextButtonClick}
        ref={nextButtonRef}
        disabled={isDisabled}
        alt={PAGINATION_BUTTON_ICON_BUTTON_NEXT_ALT}
      />
    </li>
  );
}
