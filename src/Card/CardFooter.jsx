import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardContext from './CardContext';

const CardFooter = React.forwardRef(({
  children,
  className,
  isStacked,
  text,
  orientation,
}, ref) => {
  const { orientation: contextOrientation } = useContext(CardContext);
  const footerOrientation = orientation || contextOrientation;
  const wrapperClassName = `pgn__card-footer ${footerOrientation}${isStacked ? '-stacked' : ''}`;
  const textClassName = `pgn__card-footer-text ${footerOrientation}${isStacked ? '-stacked' : ''} x-small`;

  return (
    <div className={classNames(className, wrapperClassName)} ref={ref}>
      {text && <div className={textClassName}>{text}</div>}
      {children}
    </div>
  );
});

CardFooter.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Footer text to display near actions. */
  text: PropTypes.string,
  /** Specifies whether to use stacked variant. */
  isStacked: PropTypes.bool,
  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical', '']),
};

CardFooter.defaultProps = {
  className: null,
  text: '',
  isStacked: false,
  orientation: '',
};

export default CardFooter;
