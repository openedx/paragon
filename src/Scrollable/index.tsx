import React, { useState } from 'react';
import classNames from 'classnames';

import useIsVisible from '../hooks/useIsVisibleHook';

export const CLASSNAME_SCROLL_TOP = 'pgn__scrollable-body-scroll-top';
export const CLASSNAME_SCROLL_BOTTOM = 'pgn__scrollable-body-scroll-bottom';

export interface ScrollableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Specifies the content of the `Scrollable`. */
  children: React.ReactNode;
  /** Additional classnames for this component. */
  className?: string;
}

function Scrollable({ children, className, ...props }: ScrollableProps) {
  const [isScrolledToTop, topSentinelRef] = useIsVisible();
  const [isScrolledToBottom, bottomSentinelRef] = useIsVisible();
  const [valueNow, setValueNow] = useState(0);
  const scrollableClassName = classNames(
    'pgn__scrollable-body',
    className,
    {
      [CLASSNAME_SCROLL_TOP]: isScrolledToTop,
      [CLASSNAME_SCROLL_BOTTOM]: isScrolledToBottom,
    },
  );

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const maxScrollHeight = e.currentTarget.scrollHeight - e.currentTarget.clientHeight;
    setValueNow(Math.ceil((100 * e.currentTarget.scrollTop) / maxScrollHeight));
  };

  return (
    <div
      {...props}
      className={scrollableClassName}
      role="scrollbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={valueNow}
      aria-controls="scrollbar"
      tabIndex={0}
      onScroll={handleScroll}
    >
      <div ref={topSentinelRef as React.RefObject<HTMLDivElement>} />
      <div className="pgn__scrollable-body-content">
        {children}
      </div>
      <div ref={bottomSentinelRef as React.RefObject<HTMLDivElement>} />
    </div>
  );
}

Scrollable.displayName = 'Scrollable';

export default Scrollable;
