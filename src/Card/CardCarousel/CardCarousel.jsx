import React from 'react';
import PropTypes from 'prop-types';
import { OverflowScroll } from '../..';
import CardCarouselProvider from './CardCarouselProvider';
import CardCarouselHeader from './CardCarouselHeader';
import CardCarouselItems from './CardCarouselItems';

function CardCarousel({
  children,
  title,
  subtitle,
  columnSizes,
  hasInteractiveChildren,
  canScrollHorizontal,
  disableOpacityMasks,
  onScrollPrevious,
  onScrollNext,
}) {
  return (
    <OverflowScroll
      disableScroll={!canScrollHorizontal}
      hasInteractiveChildren={hasInteractiveChildren}
      disableOpacityMasks={disableOpacityMasks}
      onScrollPrevious={onScrollPrevious}
      onScrollNext={onScrollNext}
    >
      <CardCarouselProvider
        columnSizes={columnSizes}
        hasInteractiveChildren={hasInteractiveChildren}
        canScrollHorizontal={canScrollHorizontal}
      >
        <div className="pgn__card-carousel">
          <CardCarouselHeader
            title={title}
            subtitle={subtitle}
          />
          <CardCarouselItems>{children}</CardCarouselItems>
        </div>
      </CardCarouselProvider>
    </OverflowScroll>
  );
}

CardCarousel.propTypes = {
  /** The `Card` items for the `CardCarousel`. */
  children: PropTypes.node.isRequired,
  /** An optional title. */
  title: PropTypes.node,
  /** An optional subtitle. */
  subtitle: PropTypes.node,
  /** Customize the responsive columnSizes used by the carousel. */
  columnSizes: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  /** Whether the carousel has interactive children (e.g., clickable cards). */
  hasInteractiveChildren: PropTypes.bool,
  /** Whether the carousel can be scrolled manually by users. */
  canScrollHorizontal: PropTypes.bool,
  /** Whether the default opacity masks should be shown at the start/end, if applicable. */
  disableOpacityMasks: PropTypes.bool,
  /** Callback function for when the user scrolls to the previous element. */
  onScrollPrevious: PropTypes.func,
  /** Callback function for when the user scrolls to the next element. */
  onScrollNext: PropTypes.func,
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
  disableOpacityMasks: false,
  onScrollPrevious: undefined,
  onScrollNext: undefined,
};

export default CardCarousel;
