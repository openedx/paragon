import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DIRECTION_VARIANTS = [
  'horizontal',
  'vertical',
];

const Stack = forwardRef(({
  direction,
  gap,
  reverse,
  children,
  className,
  ...rest
}, ref) => {
  const childrenArray = React.Children.toArray(children);

  if (reverse) {
    childrenArray.reverse();
  }
  return (
    <div
      ref={ref}
      className={classNames(
        direction === 'horizontal' ? 'pgn__hstack' : 'pgn__vstack',
        gap ? `pgn__stack-gap--${gap}` : '',
        className,
      )}
      {...rest}
    >
      {childrenArray}
    </div>
  );
});

Stack.propTypes = {
  /** Specifies the content of the `Stack`. */
  children: PropTypes.node.isRequired,
  /** Specifies direction of the children blocks (column/row). */
  direction: PropTypes.oneOf(DIRECTION_VARIANTS),
  /**
   * Specifies inner space between children blocks.
   *
   * Valid values are based on `the spacing classes`:
   * `0, 0.5, ... 6`.
   */
  gap: PropTypes.number,
  /** Specifies the order of the children. */
  reverse: PropTypes.bool,
  /** Specifies an additional `className` to add to the base element. */
  className: PropTypes.string,
};

Stack.defaultProps = {
  direction: 'vertical',
  gap: 0,
  className: undefined,
  reverse: false,
};

export default Stack;
