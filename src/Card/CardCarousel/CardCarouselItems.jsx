import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { OverflowScroll } from '../..';
import CardDeck from '../CardDeck';
import { CardCarouselContext } from './CardCarouselProvider';

function CardCarouselItems({ children }) {
  const {
    columnSizes,
    hasInteractiveChildren,
    canScrollHorizontal,
    overflowRef,
    isScrolledToStart,
    isScrolledToEnd,
  } = useContext(CardCarouselContext);

  return (
    <CardDeck
      ref={overflowRef}
      columnSizes={columnSizes}
      hasInteractiveChildren={hasInteractiveChildren}
      canScrollHorizontal={canScrollHorizontal}
      StartSentinel={OverflowScroll.StartSentinel}
      EndSentinel={OverflowScroll.EndSentinel}
      hasOpacityMaskStart={!isScrolledToStart}
      hasOpacityMaskEnd={!isScrolledToEnd}
    >
      {children}
    </CardDeck>
  );
}

CardCarouselItems.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardCarouselItems;
