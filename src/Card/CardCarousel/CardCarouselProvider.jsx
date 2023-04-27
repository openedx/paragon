import React, { createContext, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { OverflowScrollContext } from '../../OverflowScroll';

export const CardCarouselContext = createContext();

function CardCarouselProvider({
  columnSizes,
  hasInteractiveChildren,
  canScrollHorizontal,
  children,
  CardCarouselControls,
}) {
  const {
    overflowRef,
    setOverflowRef,
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext,
  } = useContext(OverflowScrollContext);

  const cardCarouselContextValue = useMemo(() => ({
    overflowRef,
    setOverflowRef,
    columnSizes,
    hasInteractiveChildren,
    canScrollHorizontal,
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext,
    CardCarouselControls,
  }), [
    overflowRef,
    setOverflowRef,
    columnSizes,
    hasInteractiveChildren,
    canScrollHorizontal,
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext,
    CardCarouselControls,
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
  /** Optional override for the default `CardCarouselControls` */
  CardCarouselControls: PropTypes.elementType,
};

CardCarouselProvider.defaultProps = {
  columnSizes: {
    sm: 12,
    lg: 6,
    xl: 4,
  },
  hasInteractiveChildren: false,
  canScrollHorizontal: true,
  CardCarouselControls: undefined,
};

export default CardCarouselProvider;
