import React, {
  useContext, forwardRef, ForwardedRef, ReactNode,
} from 'react';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import CardContext from './CardContext';

const IS_LOADING_HEIGHT_VALUE = 18;

interface CardFooterProps {
  /** Specifies contents of the component. */
  children?: ReactNode;
  /** Specifies class name to append to the base element. */
  className?: string;
  /** Optional node to display near actions. Should be either a plain text or an element containing text (e.g. link). */
  textElement?: ReactNode;
  /** Specifies whether to use stacked variant. */
  isStacked?: boolean;
  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation?: 'horizontal' | 'vertical';
  /** Specifies height of skeleton in loading state. */
  skeletonHeight?: number;
  /** Specifies width of skeleton in loading state. */
  skeletonWidth?: number;
}

const CardFooter = forwardRef(({
  children = null,
  className,
  isStacked = false,
  textElement,
  skeletonHeight = IS_LOADING_HEIGHT_VALUE,
  skeletonWidth,
  orientation,
}: CardFooterProps, ref: ForwardedRef<HTMLDivElement>) => {
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

export default CardFooter;
