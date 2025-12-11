import React from 'react';
import classNames from 'classnames';

interface CardCarouselSubtitleProps {
  /** Specifies contents of the component. */
  children: React.ReactNode;
  /** Specifies the base element */
  as?: React.ElementType;
  /** A class name to append to the base element. */
  className?: string;
}

function CardCarouselSubtitle({ children, as, className }: CardCarouselSubtitleProps) {
  const Component = as || 'p';
  return (
    <Component className={classNames('pgn__card-carousel-subtitle', className)}>
      {children}
    </Component>
  );
}

export default CardCarouselSubtitle;
