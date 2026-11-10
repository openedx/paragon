import React, {
  useContext, forwardRef, ForwardedRef, ReactNode,
} from 'react';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import CardContext from './CardContext';

const SKELETON_HEIGHT_VALUE = 100;

interface CardSectionProps {
  /** Specifies class name to append to the base element. */
  className?: string;
  /** Specifies contents of the component. */
  children?: ReactNode;
  /** Specifies title of the `Section`. */
  title?: ReactNode;
  /** Specifies node to render on the bottom right of the `Section` (i.e. `ActionRow`). */
  actions?: ReactNode;
  /** Specifies whether to display `Section` with muted styling. */
  muted?: boolean;
  /** Specifies height of skeleton in loading state. */
  skeletonHeight?: number;
  /** Specifies width of skeleton in loading state. */
  skeletonWidth?: number;
}

const CardSection = forwardRef(({
  className,
  children = null,
  title,
  actions,
  muted = false,
  skeletonHeight = SKELETON_HEIGHT_VALUE,
  skeletonWidth,
}: CardSectionProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { isLoading } = useContext(CardContext);

  if (isLoading) {
    return (
      <div className={classNames('pgn__card-section', className, { 'is-muted': muted })}>
        <Skeleton
          containerClassName="pgn__card-section-loader"
          height={skeletonHeight}
          width={skeletonWidth}
        />
      </div>
    );
  }

  return (
    <div
      className={classNames('pgn__card-section', className, { 'is-muted': muted })}
      ref={ref}
    >
      {title && <div className="pgn__card-section-title">{title}</div>}
      {children}
      {actions && <div className="pgn__card-section-actions">{actions}</div>}
    </div>
  );
});

export default CardSection;
