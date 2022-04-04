import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectPlaygroundConfig from '../utils/injectPlaygroundConfig';

const DIRECTION_VARIANTS = [
  'horizontal',
  'vertical',
];

const Stack = React.forwardRef(({
  direction,
  gap,
  children,
  className,
}, ref) => (
  <div
    ref={ref}
    className={classNames(
      direction === 'horizontal' ? 'pgn__hstack' : 'pgn__vstack',
      gap ? `pgn__stack-gap--${gap}` : '',
      className,
    )}
  >
    {children}
  </div>
));

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

Stack.displayName = 'Stack';

export default injectPlaygroundConfig(Stack, {
  isDropzone: true,
});
