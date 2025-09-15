import React, { ForwardedRef } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
// @ts-ignore
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
  /** Specifies class name for the ChipCarousel. */
  className?: string;
  /** Specifies array of `Chip` elements to be rendered inside the carousel. */
  items: Array<React.ReactElement>;
  /** Text describing the ChipCarousel for screen readers. */
  ariaLabel: string;
  /** Whether the default opacity masks should be shown at the start/end, if applicable. */
  disableOpacityMasks?: boolean;
  /** Callback function for when the user scrolls to the previous element. */
  onScrollPrevious?: () => void;
  /** Callback function for when the user scrolls to the next element. */
  onScrollNext?: () => void;
  /** Whether users can scroll within the overflow container. */
  canScrollHorizontal?: boolean;
  /** A value specifying the distance the scroll should move. */
  offset?: number | string;
  /** Type of offset value (percentage or fixed). */
  offsetType?: 'percentage' | 'fixed';
  /**
   * Specifies inner space between children blocks.
   *
   * Valid values are based on `the spacing classes`:
   * `0, 0.5, ... 6`.
   */
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
  gap = 3,
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

export default ChipCarousel;
