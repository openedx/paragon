import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useIsVisible from '../hooks/useIsVisible';

export const CLASSNAME_SCROLL_TOP = 'pgn__scrollable-body-scroll-top';
export const CLASSNAME_SCROLL_BOTTOM = 'pgn__scrollable-body-scroll-bottom';

const Scrollable = ({ children, ariaValue, ...props }) => {
  const [isScrolledToTop, topSentinelRef] = useIsVisible();
  const [isScrolledToBottom, bottomSentinelRef] = useIsVisible();
  const className = classNames(
    'pgn__scrollable-body',
    props.className,
    {
      [CLASSNAME_SCROLL_TOP]: isScrolledToTop,
      [CLASSNAME_SCROLL_BOTTOM]: isScrolledToBottom,
    },
  );
  return (
    <div {...props} className={className} role="scrollbar" aria-valuenow={ariaValue} aria-controls="scrollbar" tabIndex="0">
      <div ref={topSentinelRef} />
      <div className="pgn__scrollable-body-content">
        {children}
      </div>
      <div ref={bottomSentinelRef} />
    </div>
  );
};

Scrollable.propTypes = {
  /** Specifies the content of the `Scrollable`. */
  children: PropTypes.node.isRequired,
  /** Additional classnames for this component. */
  className: PropTypes.string,
  /** The aria-valuenow attribute defines the current value for range widgets. */
  ariaValue: PropTypes.string,
};

Scrollable.defaultProps = {
  className: undefined,
  ariaValue: null,
};

export default Scrollable;
