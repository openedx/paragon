import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useIsVisible from '../hooks/useIsVisible';

const Scrollable = ({ children, ...props }) => {
  const [isScrolledToTop, topSentinelRef] = useIsVisible();
  const [isScrolledToBottom, bottomSentinelRef] = useIsVisible();
  const className = classNames(
    'pgn__scrollable-body',
    props.className,
    {
      'pgn__scrollable-body-scroll-top': isScrolledToTop,
      'pgn__scrollable-body-scroll-bottom': isScrolledToBottom,
    },
  );
  return React.createElement(
    'div',
    { ...props, className },
    (
      <>
        <div ref={topSentinelRef} />
        <div className="pgn__scrollable-body-content">
          {children}
        </div>
        <div ref={bottomSentinelRef} />
      </>

    ),
  );
};

Scrollable.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Scrollable.defaultProps = {
  className: undefined,
};

export default Scrollable;
