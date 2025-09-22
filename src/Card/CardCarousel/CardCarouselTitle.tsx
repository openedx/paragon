import React from 'react';
import classNames from 'classnames';

interface CardCarouselTitleProps {
  children: React.ReactNode;
  as?: React.ElementType | string;
  className?: string;
}

function CardCarouselTitle({ children, as, className }: CardCarouselTitleProps) {
  const Component = as || 'h2';
  return (
    <Component className={classNames('pgn__card-carousel-title', className)}>
      {children}
    </Component>
  );
}

export default CardCarouselTitle;
