import React, { useMemo, ReactNode } from 'react';
import classNames from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface CardGridProps {
  /** The class name for the CardGrid component */
  className?: string;
  /** The Card components to organize into a responsive grid */
  children: ReactNode;
  /**
   * An object containing the desired column size at each breakpoint, following a similar
   * props API as ``react-bootstrap/Col``
   */
  columnSizes?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  /** Whether to disable the default equal height cards across rows in the card grid */
  hasEqualColumnHeights?: boolean;
}

function CardGrid({
  className,
  children,
  columnSizes = {
    sm: 12,
    lg: 6,
    xl: 4,
  },
  hasEqualColumnHeights = true,
}: CardGridProps) {
  const cards = useMemo(
    () => React.Children.map(children, (card) => (
      <Col
        {...columnSizes}
        className={classNames(
          'pgn__card-grid__card-item',
          {
            'pgn__card__disable-equal-column-heights': !hasEqualColumnHeights,
          },
        )}
      >
        {card}
      </Col>
    )),
    [children, columnSizes, hasEqualColumnHeights],
  );

  return (
    <div className={classNames('pgn__card-grid', className)}>
      <Row>
        {cards}
      </Row>
    </div>
  );
}

export default CardGrid;
