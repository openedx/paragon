import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import { OverflowScroll } from '../..';
import { CARD_DECK_ITEM_CLASS_NAME } from '../CardDeck';
import CardCarouselProvider from './CardCarouselProvider';
import CardCarouselTitle from './CardCarouselTitle';
import CardCarouselSubtitle from './CardCarouselSubtitle';
import CardCarouselControls from './CardCarouselControls';
import CardCarouselItems from './CardCarouselItems';

const getFormattedTitle = (title) => {
  if (!title) {
    return null;
  }
  if (isValidElement(title)) {
    return title;
  }
  return <CardCarouselTitle>{title}</CardCarouselTitle>;
};

const getFormattedSubtitle = (subtitle) => {
  if (!subtitle) {
    return null;
  }
  if (isValidElement(subtitle)) {
    return subtitle;
  }
  return <CardCarouselSubtitle>{subtitle}</CardCarouselSubtitle>;
};

function CardCarousel({
  children,
  title,
  subtitle,
  columnSizes,
  hasInteractiveChildren,
  canScrollHorizontal,
}) {
  const carouselTitle = getFormattedTitle(title);
  const carouselSubtitle = getFormattedSubtitle(subtitle);

  return (
    <OverflowScroll
      childQuerySelector={`.${CARD_DECK_ITEM_CLASS_NAME}`}
      disableScroll={!canScrollHorizontal}
    >
      <CardCarouselProvider
        columnSizes={columnSizes}
        hasInteractiveChildren={hasInteractiveChildren}
        canScrollHorizontal={canScrollHorizontal}
      >
        <div className="pgn__card-carousel">
          <div className="pgn__card-carousel-header">
            <div>
              {carouselTitle}
              {carouselSubtitle}
            </div>
            <CardCarouselControls />
          </div>
          <CardCarouselItems>{children}</CardCarouselItems>
        </div>
      </CardCarouselProvider>
    </OverflowScroll>
  );
}

CardCarousel.propTypes = {
  /** TODO */
  children: PropTypes.node.isRequired,
  /** TODO */
  title: PropTypes.node,
  /** TODO */
  subtitle: PropTypes.node,
  /** TODO */
  columnSizes: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  /** TODO */
  hasInteractiveChildren: PropTypes.bool,
  /** TODO */
  canScrollHorizontal: PropTypes.bool,
};

CardCarousel.defaultProps = {
  title: undefined,
  subtitle: undefined,
  columnSizes: {
    sm: 12,
    lg: 6,
    xl: 4,
  },
  hasInteractiveChildren: false,
  canScrollHorizontal: true,
};

export default CardCarousel;
