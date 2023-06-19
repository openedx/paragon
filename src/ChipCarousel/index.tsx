import React, { ForwardedRef } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
// @ts-ignore
import { OverflowScroll, OverflowScrollContext } from '../OverflowScroll';
// @ts-ignore
import IconButton from '../IconButton';
// @ts-ignore
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
}

const ChipCarousel = React.forwardRef(({
  className,
  items,
  ariaLabel,
  disableOpacityMasks,
  onScrollPrevious,
  onScrollNext,
  canScrollHorizontal = false,
  offset = 20,
  offsetType = 'fixed',
  ...props
}: ChipCarouselProps, ref: ForwardedRef<HTMLDivElement>) => {
  const intl = useIntl();

  return (
    <div
      className={classNames('pgn__chip-carousel', className)}
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
                  {items?.map(item => {
                    const { children } = item?.props || {};
                    if (!children) {
                      return null;
                    }
                    return React.createElement(Chip, item.props);
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
  ariaLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  // @ts-ignore
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  disableOpacityMasks: PropTypes.bool,
  onScrollPrevious: PropTypes.func,
  onScrollNext: PropTypes.func,
  canScrollHorizontal: PropTypes.bool,
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetType: PropTypes.oneOf(['percentage', 'fixed']),
};

ChipCarousel.defaultProps = {
  className: undefined,
  disableOpacityMasks: undefined,
  onScrollPrevious: undefined,
  onScrollNext: undefined,
  canScrollHorizontal: false,
  offset: 20,
  offsetType: 'percentage',
};

export default ChipCarousel;
