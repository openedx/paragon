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
  } = useContext(CardCarouselContext);

  const intl = useIntl();

  return (
    <div>
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
