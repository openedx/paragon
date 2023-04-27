import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import Stack from '../../Stack';
import IconButton from '../../IconButton';
import Icon from '../../Icon';
import { ArrowForward, ArrowBack } from '../../../icons';
import { CardCarouselContext } from './CardCarouselProvider';
import messages from './messages';

function CardCarouselControls() {
  const {
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext,
  } = useContext(CardCarouselContext);

  const intl = useIntl();

  if (isScrolledToStart && isScrolledToEnd) {
    return null;
  }

  return (
    <div className="pgn__card-carousel-controls">
      <Stack direction="horizontal" gap={1}>
        <IconButton
          disabled={isScrolledToStart}
          src={ArrowBack}
          iconAs={Icon}
          alt={intl.formatMessage(messages.scrollToPrevious)}
          onClick={scrollToPrevious}
        />
        <IconButton
          disabled={isScrolledToEnd}
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
