import React, { useLayoutEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';

import { useReversedChildren } from '../hooks';

export const CardFooterContext = React.createContext();

const CardFooter = ({
  className,
  children,
  stacked: controlledStacked,
  ...attrs
}) => {
  const [stacked, setStacked] = useState(controlledStacked);

  const { width, ref } = useResizeDetector({
    refreshMode: 'throttle',
    refreshRate: 100,
  });
  const reversedChildren = useReversedChildren(children);
  const contextValue = useMemo(
    () => ({
      stacked,
    }),
    [stacked],
  );

  useLayoutEffect(
    () => {
      if (controlledStacked) {
        // ``stacked`` was passed in as a prop so this component is being used as a
        // controlled component; rely on this prop instead of setting ``stacked`` state below.
        return;
      }

      // TODO: what to do about hardcoded width breakpoints...?
      if (width < 420) {
        setStacked(true);
      } else {
        setStacked(false);
      }
    },
    [controlledStacked, width],
  );

  return (
    <div
      ref={ref}
      {...attrs}
      className={classNames('pgn__card-footer', className, {
        stacked,
      })}
    >
      <CardFooterContext.Provider value={contextValue}>
        {stacked ? reversedChildren : children}
      </CardFooterContext.Provider>
    </div>
  );
};

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  stacked: PropTypes.bool,
};

CardFooter.defaultProps = {
  className: undefined,
  stacked: undefined, // the internals of ``CardFooter`` will decide the initial default state.
};

export default CardFooter;
