import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import CardContext from './CardContext';

const IS_LOADING_HEIGHT_VALUE = 18;

const CardFooter = React.forwardRef(({
  children,
  className,
  isStacked,
  textElement,
  skeletonHeight,
  skeletonWidth,
  orientation,
}, ref) => {
  const { orientation: cardOrientation, isLoading } = useContext(CardContext);
  const footerOrientation = orientation || cardOrientation;
  const wrapperClassName = `pgn__card-footer ${footerOrientation}${isStacked ? '-stacked' : ''}`;
  const textElementClassName = `pgn__card-footer-text ${footerOrientation}${isStacked ? '-stacked' : ''}`;

  if (isLoading) {
    return (
      <div className={classNames(className, wrapperClassName)}>
        <Skeleton
          containerClassName="pgn__card-footer-loader"
          height={skeletonHeight}
          width={skeletonWidth}
        />
      </div>
    );
  }

  return (
    <div className={classNames(className, wrapperClassName)} ref={ref}>
      {textElement && <div className={textElementClassName}>{textElement}</div>}
      {children}
    </div>
  );
});

CardFooter.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Optional node to display near actions. Should be either a plain text or an element containing text (e.g. link). */
  textElement: PropTypes.node,
  /** Specifies whether to use stacked variant. */
  isStacked: PropTypes.bool,
  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: PropTypes.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: PropTypes.number,
};

CardFooter.defaultProps = {
  children: null,
  className: undefined,
  textElement: undefined,
  isStacked: false,
  orientation: undefined,
  skeletonHeight: IS_LOADING_HEIGHT_VALUE,
  skeletonWidth: undefined,
};

export default CardFooter;
