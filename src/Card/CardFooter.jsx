import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LinesEllipsis from 'react-lines-ellipsis';
import CardContext from './CardContext';

const CardFooter = React.forwardRef(({
  children,
  className,
  isStacked,
  textElement,
  orientation,
  maxLine,
}, ref) => {
  const { orientation: cardOrientation } = useContext(CardContext);
  const footerOrientation = orientation || cardOrientation;
  const wrapperClassName = `pgn__card-footer ${footerOrientation}${isStacked ? '-stacked' : ''}`;
  const textElementClassName = `pgn__card-footer-text ${footerOrientation}${isStacked ? '-stacked' : ''}`;

  return (
    <div className={classNames(className, wrapperClassName)} ref={ref}>
      {textElement
      && (
      <LinesEllipsis
        className={textElementClassName}
        text={`${textElement}`}
        maxLine={maxLine}
      />
      )}
      {children}
    </div>
  );
});

CardFooter.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Optional node to display near actions. Should be either a plain text or an element containing text (e.g. link). */
  textElement: PropTypes.node,
  /** Specifies whether to use stacked variant. */
  isStacked: PropTypes.bool,
  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Max count of lines allowed */
  maxLine: PropTypes.string,
};

CardFooter.defaultProps = {
  className: undefined,
  textElement: undefined,
  isStacked: false,
  orientation: undefined,
  maxLine: undefined,
};

export default CardFooter;
