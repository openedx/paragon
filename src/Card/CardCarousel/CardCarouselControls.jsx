import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import { Stack, IconButton, Icon } from '../..';
import { ArrowForward, ArrowBack } from '../../../icons';
import { CardCarouselContext } from './CardCarouselProvider';
import messages from './messages';

function CardCarouselControls() {
  const {
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext,
    isOverflowElementVisible,
  } = useContext(CardCarouselContext);

  const intl = useIntl();

  const isPreviousDisabled = isScrolledToStart || !isOverflowElementVisible;
  const isNextDisabled = isScrolledToEnd || !isOverflowElementVisible;

  if (isPreviousDisabled && isNextDisabled) {
    return null;
  }

  return (
    <div className="pgn__card-carousel-controls">
      <Stack direction="horizontal" gap={1}>
        <IconButton
          disabled={isPreviousDisabled}
          src={ArrowBack}
          iconAs={Icon}
          alt={intl.formatMessage(messages.scrollToPrevious)}
          onClick={scrollToPrevious}
        />
        <IconButton
          disabled={isNextDisabled}
          src={ArrowForward}
          iconAs={Icon}
          alt={intl.formatMessage(messages.scrollToNext)}
          onClick={scrollToNext}
        />
      </Stack>
    </div>
  );
}

export default CardCarouselControls;
