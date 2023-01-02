import React, { createContext, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { OverflowScrollContext } from '../..';

export const CardCarouselContext = createContext();

function CardCarouselProvider({
  columnSizes,
  hasInteractiveChildren,
  canScrollHorizontal,
  children,
}) {
  const {
    overflowRef,
    isOverflowContainerVisible,
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext,
  } = useContext(OverflowScrollContext);

  const cardCarouselContextValue = useMemo(() => ({
    overflowRef,
    columnSizes,
    hasInteractiveChildren,
    canScrollHorizontal,
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext,
    isOverflowContainerVisible,
  }), [
    overflowRef,
    columnSizes,
    hasInteractiveChildren,
    canScrollHorizontal,
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext,
    isOverflowContainerVisible,
  ]);

  return (
    <CardCarouselContext.Provider value={cardCarouselContextValue}>
      {children}
    </CardCarouselContext.Provider>
  );
}

CardCarouselProvider.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * An object containing the desired column size at each breakpoint, following a similar
   * props API as ``react-bootstrap/Col``
   */
  columnSizes: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  /** Whether the child `Card` components are interactive/focusable. If not, a `tabindex="0"` is
   * added to be a11y-compliant */
  hasInteractiveChildren: PropTypes.bool,
  /** Whether the `CardDeck` supports horizontal scrolling when there are overflow children */
  canScrollHorizontal: PropTypes.bool,
};

CardCarouselProvider.defaultProps = {
  columnSizes: {
    sm: 12,
    lg: 6,
    xl: 4,
  },
  hasInteractiveChildren: false,
  canScrollHorizontal: true,
};

export default CardCarouselProvider;
