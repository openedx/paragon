import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const POSITION_VARIANTS = [
  'top',
  'bottom',
];

const Sticky = React.forwardRef(({
  position,
  children,
  offset,
  className,
  ...rest
}, ref) => {
  const [isSticky, setIsSticky] = useState(false);
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  // eslint-disable-next-line consistent-return
  useLayoutEffect(() => {
    if (resolvedRef.current) {
      // getComputedStyle is used to get real top/bottom
      // values on the page for proper shadows display
      const elementStyles = window.getComputedStyle(resolvedRef.current);
      const elementOffset = elementStyles[position || 'top'];
      // Margin calculations according to the offset.
      // 1 pixel above/bellow + offset pixels that determines
      // when callback function is called
      const elementWithOffset = 1 + (parseInt(elementOffset, 10) || 0);
      const observer = new IntersectionObserver(
        ([entry]) => setIsSticky(entry.intersectionRatio < 1),
        {
          threshold: [1],
          rootMargin: position === 'bottom'
            ? `0px 0px -${elementWithOffset}px 0px`
            : `-${elementWithOffset}px 0px 0px 0px`,
        },
      );
      observer.observe(resolvedRef.current);

      return () => {
        observer.unobserve(resolvedRef.current);
      };
    }
  }, []);

  return (
    <div
      className={classNames(
        'pgn__sticky',
        `pgn__sticky-${position || 'top'}`,
        offset ? `pgn__sticky-offset--${offset}` : '',
        { 'pgn__sticky-shadow': isSticky },
        className,
      )}
      ref={resolvedRef}
      {...rest}
    >
      {children}
    </div>
  );
});

Sticky.propTypes = {
  /** Specifies content of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies position of the element. */
  position: PropTypes.oneOf(POSITION_VARIANTS),
  /**
   * Specifies offset from top/bottom depending on the `position` property.
   *
   * Valid values are based on `the spacing classes`:
   * `0, 0.5, ... 6`.
   */
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Specifies an additional `className` to add to the base element. */
  className: PropTypes.string,
};

Sticky.defaultProps = {
  position: 'top',
  offset: undefined,
  className: undefined,
};

export default Sticky;
