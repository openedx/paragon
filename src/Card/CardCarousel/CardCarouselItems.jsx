import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CardDeck from '../CardDeck';
import { CardCarouselContext } from './CardCarouselProvider';

function CardCarouselItems({ children }) {
  const {
    columnSizes,
    hasInteractiveChildren,
    canScrollHorizontal,
    setOverflowRef,
  } = useContext(CardCarouselContext);

  return (
    <CardDeck
      ref={setOverflowRef}
      columnSizes={columnSizes}
      hasInteractiveChildren={hasInteractiveChildren}
      canScrollHorizontal={canScrollHorizontal}
      hasOverflowScrollItems
    >
      {children}
    </CardDeck>
  );
}

CardCarouselItems.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardCarouselItems;
