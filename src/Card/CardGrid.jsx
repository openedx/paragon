import React, { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardGrid({
  className,
  children,
  columnSizes,
  disableEqualHeight,
}) {
  const cards = useMemo(
    () => React.Children.map(children, (card) => {
      const { className: cardClassName } = card.props;
      return (
        <Col
          {...columnSizes}
          className={classNames(
            'pgn__card-grid__card-item',
            cardClassName,
            {
              'pgn__card__disable-equal-height': disableEqualHeight,
            },
          )}
        >
          {card}
        </Col>
      );
    }),
    [children, columnSizes, disableEqualHeight],
  );

  return (
    <div className={classNames('pgn__card-grid', className)}>
      <Row>
        {cards}
      </Row>
    </div>
  );
}

CardGrid.propTypes = {
  /** The class name for the CardGrid component */
  className: PropTypes.string,
  /** The Card components to organize into a responsive grid */
  children: PropTypes.node.isRequired,
  /**
   * An object containing the desired column size at each breakpoint, following a similar
   * props API as ``react-bootstrap/Col``
   */
  columnSizes: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  /** Whether to disable the default equal height cards across rows in the card grid */
  disableEqualHeight: PropTypes.bool,
};

CardGrid.defaultProps = {
  className: undefined,
  columnSizes: {
    sm: 12,
    lg: 6,
    xl: 4,
  },
  disableEqualHeight: false,
};

export default CardGrid;
