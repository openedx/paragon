import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextClamp from 'react-string-clamp';
import CardContext from './CardContext';

const CardFooter = React.forwardRef(({
  children,
  className,
  isStacked,
  textElement,
  orientation,
  hasClamp,
  maxLines,
}, ref) => {
  const { orientation: cardOrientation } = useContext(CardContext);
  const footerOrientation = orientation || cardOrientation;
  const wrapperClassName = `pgn__card-footer ${footerOrientation}${isStacked ? '-stacked' : ''}`;
  const textElementClassName = `pgn__card-footer-text ${footerOrientation}${isStacked ? '-stacked' : ''}`;

  return (
    <div className={classNames(className, wrapperClassName)} ref={ref}>
      {textElement
        && (hasClamp
          ? (
            <TextClamp
              text={textElement}
              lines={maxLines}
              className={textElementClassName}
            />
          ) : (
            <div className={textElementClassName}>{textElement}</div>
          ))}
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
  /** The switcher limiting the number of rows  */
  hasClamp: PropTypes.bool,
  /** The maximum number of lines  */
  maxLines: PropTypes.number,
};

CardFooter.defaultProps = {
  className: undefined,
  textElement: undefined,
  isStacked: false,
  orientation: undefined,
  hasClamp: false,
  maxLines: undefined,
};

export default CardFooter;
