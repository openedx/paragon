import React from 'react';
import PropTypes from 'prop-types';
import BaseCarousel from 'react-bootstrap/Carousel';
import BaseCarouselItem from 'react-bootstrap/CarouselItem';
import BaseCarouselCaption from 'react-bootstrap/CarouselCaption';

export const CAROUSEL_NEXT_LABEL_TEXT = 'Next';
export const CAROUSEL_PREV_LABEL_TEXT = 'Previous';

const Carousel = React.forwardRef((props, ref) => <BaseCarousel {...props} ref={ref} />);

const CarouselItem = React.forwardRef((props, ref) => <BaseCarouselItem {...props} ref={ref} />);

const CarouselCaption = React.forwardRef((props, ref) => <BaseCarouselCaption {...props} ref={ref} />);

Carousel.propTypes = {
  /** Specifies element type for this component. */
  as: PropTypes.elementType,
  /** Controls the current visible slide. Defaults to `defaultActiveIndex` prop */
  activeIndex: PropTypes.number,
  /** Specifies default active index prop */
  defaultActiveIndex: PropTypes.number,
  /** Show the `Carousel's` previous and next arrows for changing the current slide. */
  controls: PropTypes.bool,
  /** Animates slides with a crossfade animation instead of the default slide animation. */
  fade: PropTypes.bool,
  /** Show a set of slide position indicators. */
  indicators: PropTypes.bool,
  /** The amount of time to delay between automatically cycling an item. */
  interval: PropTypes.number,
  /** Specifies whether the `Carousel` should react to keyboard events. */
  keyboard: PropTypes.bool,
  /** Override the default button icon for the "next" control */
  nextIcon: PropTypes.node,
  /** Label shown to screen readers only, can be used to show the next element in the `Carousel` */
  nextLabel: PropTypes.string,
  /** Callback fired when the active item changes. */
  onSelect: PropTypes.func,
  /** Callback fired when a slide transition ends. */
  onSlid: PropTypes.func,
  /** Callback fired when a slide transition starts. */
  onSlide: PropTypes.func,
  /** If set to "hover", pauses the cycling of the `Carousel` on mouseenter and
   * resumes the cycling of the carousel on mouseleave.
   * If set to false, hovering over the `Carousel` won't pause it.
   *
   * On touch-enabled devices, when set to "hover", cycling will pause on touchend
   * (once the user finished interacting with the `Carousel`) for two intervals,
   * before automatically resuming. Note that this is in addition to the above mouse behavior.
   */
  pause: PropTypes.oneOf(['hover', false]),
  /** Override the default button icon for the "previous" control */
  prevIcon: PropTypes.node,
  /** Label shown to screen readers only, can be used to show the
   * previous element in the `Carousel`. Set to null to deactivate. */
  prevLabel: PropTypes.string,
  /** Enables animation on the Carousel as it transitions between slides. */
  slide: PropTypes.bool,
  /** Whether the `Carousel` should support left/right swipe interactions on touchscreen devices. */
  touch: PropTypes.bool,
  /** Whether the `Carousel` should cycle continuously or have hard stops */
  wrap: PropTypes.bool,
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string,
};

CarouselItem.propTypes = {
  /** Specifies element type for this component. */
  as: PropTypes.elementType,
  /** The amount of time to delay between automatically cycling this specific item.
   * Will default to the `Carousel's` interval prop value if none is specified.
   */
  interval: PropTypes.number,
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string,
};

CarouselCaption.propTypes = {
  /** Specifies element type for this component. */
  as: PropTypes.elementType,
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string,
};

Carousel.defaultProps = {
  as: 'div',
  activeIndex: undefined,
  defaultActiveIndex: 0,
  controls: true,
  fade: false,
  indicators: true,
  interval: 5000,
  keyboard: true,
  nextIcon: <span aria-hidden="true" className="carousel-control-next-icon" />,
  nextLabel: CAROUSEL_NEXT_LABEL_TEXT,
  onSelect: undefined,
  onSlid: undefined,
  onSlide: undefined,
  pause: 'hover',
  prevIcon: <span aria-hidden="true" className="carousel-control-prev-icon" />,
  prevLabel: CAROUSEL_PREV_LABEL_TEXT,
  slide: true,
  touch: true,
  wrap: true,
  bsPrefix: 'carousel',
};

CarouselItem.defaultProps = {
  as: 'div',
  interval: undefined,
  bsPrefix: 'carousel-item',
};

CarouselCaption.defaultProps = {
  as: 'div',
  bsPrefix: 'carousel-caption',
};

Carousel.Item = CarouselItem;
Carousel.Caption = CarouselCaption;

export { CarouselItem };
export default Carousel;
