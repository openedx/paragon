import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardFooter = React.forwardRef(({
  children,
  className,
  isStacked,
  text,
  orientation,
}, ref) => {
  const wrapperClassName = `pgn__card-footer ${orientation}${isStacked ? '-stacked' : ''}`;
  const textClassName = `pgn__card-footer-text ${orientation}${isStacked ? '-stacked' : ''} x-small`;

  return (
    <div className={classNames(className, wrapperClassName)} ref={ref}>
      {text && <div className={textClassName}>{text}</div>}
      {children}
    </div>
  );
});

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Footer text to display near actions. */
  text: PropTypes.string,
  /** Specifies whether to use stacked variant. */
  isStacked: PropTypes.bool,
  /** Specifies which orientation to use. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

CardFooter.defaultProps = {
  className: null,
  text: '',
  isStacked: false,
  orientation: 'vertical',
};

export default CardFooter;
