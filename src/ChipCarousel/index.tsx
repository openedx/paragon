import React, { ForwardedRef } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import { OverflowScroll, OverflowScrollContext } from '../OverflowScroll';
import IconButton from '../IconButton';
import Icon from '../Icon';
// @ts-ignore
import { ArrowForward, ArrowBack } from '../../icons';
// @ts-ignore
import messages from './messages';
import Chip from '../Chip';

export interface OverflowScrollContextProps {
  setOverflowRef: () => void,
  isScrolledToStart: boolean,
  isScrolledToEnd: boolean,
  scrollToPrevious: () => void,
  scrollToNext: () => void,
}

export interface ChipCarouselProps {
  className?: string;
  items: Array<React.ReactElement>;
  ariaLabel: string;
  disableOpacityMasks?: boolean;
  onScrollPrevious?: () => void;
  onScrollNext?: () => void;
  canScrollHorizontal?: boolean;
  offset?: number | string;
  offsetType?: 'percentage' | 'fixed';
  gap?: number;
}

const ChipCarousel = React.forwardRef(({
  className,
  items,
  ariaLabel,
  disableOpacityMasks,
  onScrollPrevious,
  onScrollNext,
  canScrollHorizontal = false,
  offset = 120,
  offsetType = 'fixed',
  gap,
  ...props
}: ChipCarouselProps, ref: ForwardedRef<HTMLDivElement>) => {
  const intl = useIntl();

  return (
    <div
      className={classNames('pgn__chip-carousel', className, gap ? `pgn__chip-carousel-gap__${gap}` : '')}
      {...props}
      ref={ref}
    >
      <OverflowScroll
        ariaLabel={ariaLabel}
        hasInteractiveChildren
        disableScroll={!canScrollHorizontal}
        disableOpacityMasks={disableOpacityMasks}
        onScrollPrevious={onScrollPrevious}
        onScrollNext={onScrollNext}
        offset={offset}
        offsetType={offsetType}
      >
        <OverflowScrollContext.Consumer>
          {({
            setOverflowRef,
            isScrolledToStart,
            isScrolledToEnd,
            scrollToPrevious,
            scrollToNext,
          }: OverflowScrollContextProps) => (
            <>
              <>
                {!isScrolledToStart && (
                  <IconButton
                    size="sm"
                    className="pgn__chip-carousel__left-control"
                    src={ArrowBack}
                    iconAs={Icon}
                    alt={intl.formatMessage(messages.scrollToPrevious)}
                    onClick={scrollToPrevious}
                  />
                )}
                {!isScrolledToEnd && (
                  <IconButton
                    size="sm"
                    className="pgn__chip-carousel__right-control"
                    src={ArrowForward}
                    iconAs={Icon}
                    alt={intl.formatMessage(messages.scrollToNext)}
                    onClick={scrollToNext}
                  />
                )}
              </>
              <div ref={setOverflowRef} className="d-flex">
                <OverflowScroll.Items>
                  {items?.map((item, id) => {
                    const { children } = item?.props || {};
                    if (!children) {
                      return null;
                    }
                    // eslint-disable-next-line react/no-array-index-key
                    return React.createElement(Chip, { ...item.props, key: id });
                  })}
                </OverflowScroll.Items>
              </div>
            </>
          )}
        </OverflowScrollContext.Consumer>
      </OverflowScroll>
    </div>
  );
});

ChipCarousel.propTypes = {
  /** Text describing the ChipCarousel for screen readers. */
  ariaLabel: PropTypes.string.isRequired,
  /** Specifies class name for the ChipCarousel. */
  className: PropTypes.string,
  /** Specifies array of `Chip` elements to be rendered inside the carousel. */
  // @ts-ignore
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  /** Whether the default opacity masks should be shown at the start/end, if applicable. */
  disableOpacityMasks: PropTypes.bool,
  /** Callback function for when the user scrolls to the previous element. */
  onScrollPrevious: PropTypes.func,
  /** Callback function for when the user scrolls to the next element. */
  onScrollNext: PropTypes.func,
  /** Whether users can scroll within the overflow container. */
  canScrollHorizontal: PropTypes.bool,
  /** A value specifying the distance the scroll should move. */
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Type of offset value (percentage or fixed). */
  offsetType: PropTypes.oneOf(['percentage', 'fixed']),
  /**
   * Specifies inner space between children blocks.
   *
   * Valid values are based on `the spacing classes`:
   * `0, 0.5, ... 6`.
   */
  gap: PropTypes.number,
};

ChipCarousel.defaultProps = {
  className: undefined,
  disableOpacityMasks: undefined,
  onScrollPrevious: undefined,
  onScrollNext: undefined,
  canScrollHorizontal: false,
  offset: 120,
  offsetType: 'fixed',
  gap: 3,
};

export default ChipCarousel;
