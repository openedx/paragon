import React, { ForwardedRef } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import Chip from '../Chip';
// @ts-ignore
import { OverflowScroll, OverflowScrollContext } from '../OverflowScroll';
// @ts-ignore
import Button from '../Button';
// @ts-ignore
import IconButton from '../IconButton';
// @ts-ignore
import Icon from '../Icon';
// @ts-ignore
import { ArrowForward, ArrowBack } from '../../icons';
// @ts-ignore
import messages from './messages';

export interface OverflowScrollContextProps {
  setOverflowRef: () => void,
  isScrolledToStart: boolean,
  isScrolledToEnd: boolean,
  scrollToPrevious: () => void,
  scrollToNext: () => void,
}

export interface ChipCarouselProps {
  className?: string;
  items?: Array<{
    onClick?: () => void;
    title?: string;
  }>;
  ariaLabel: string;
  disableOpacityMasks?: boolean;
  onScrollPrevious?: () => void;
  onScrollNext?: () => void;
  innerControls?: boolean;
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
  innerControls = true,
  canScrollHorizontal = false,
  offset = 20,
  offsetType = 'percentage',
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
              {innerControls ? (
                <>
                  {!isScrolledToStart && (
                    <>
                      {/* <div className="pgn__chip-carousel__arrow-back-bg" /> */}
                      <IconButton
                        size="sm"
                        className="pgn__chip-carousel__left-control"
                        src={ArrowBack}
                        iconAs={Icon}
                        alt={intl.formatMessage(messages.scrollToPrevious)}
                        onClick={scrollToPrevious}
                      />
                    </>
                  )}
                  {!isScrolledToEnd && (
                    <>
                      {/* <div className="pgn__chip-carousel__arrow-forward-bg" /> */}
                      <IconButton
                        size="sm"
                        className="pgn__chip-carousel__right-control"
                        src={ArrowForward}
                        iconAs={Icon}
                        alt={intl.formatMessage(messages.scrollToNext)}
                        onClick={scrollToNext}
                      />
                    </>
                  )}
                </>
              ) : (
                <div className="mb-3">
                  <Button
                    onClick={scrollToPrevious}
                    className="mr-2"
                    size="sm"
                    disabled={isScrolledToStart}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={scrollToNext}
                    size="sm"
                    disabled={isScrolledToEnd}
                  >
                    Next
                  </Button>
                </div>
              )}
              <div ref={setOverflowRef} className="d-flex">
                <OverflowScroll.Items>
                  {items?.map(item => (
                    <Chip key={item.title} {...item}>
                      {item.title}
                    </Chip>
                  ))}
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ),
  disableOpacityMasks: PropTypes.bool,
  onScrollPrevious: PropTypes.func,
  onScrollNext: PropTypes.func,
  innerControls: PropTypes.bool,
  canScrollHorizontal: PropTypes.bool,
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetType: PropTypes.oneOf(['percentage', 'fixed']),
};

ChipCarousel.defaultProps = {
  className: undefined,
  items: undefined,
  disableOpacityMasks: undefined,
  onScrollPrevious: undefined,
  onScrollNext: undefined,
  innerControls: true,
  canScrollHorizontal: false,
  offset: 20,
  offsetType: 'percentage',
};

export default ChipCarousel;
