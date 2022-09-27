import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DIRECTION_VARIANTS = [
  'horizontal',
  'vertical',
];

function Stack({
  direction,
  gap,
  children,
  className,
}) {
  return (
    <div
      className={classNames(
        direction === 'horizontal' ? 'pgn__hstack' : 'pgn__vstack',
        gap ? `pgn__stack-gap--${gap}` : '',
        className,
      )}
    >
      {children}
    </div>
  );
}

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
  /** Specifies an additional `className` to add to the base element. */
  className: PropTypes.string,
};

Stack.defaultProps = {
  direction: 'vertical',
  gap: 0,
  className: undefined,
};

export default Stack;
