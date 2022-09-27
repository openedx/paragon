import React, { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardGrid({
  className,
  children,
  columnSizes,
}) {
  const cards = useMemo(
    () => React.Children.map(children, card => (
      <Col {...columnSizes}>
        {card}
      </Col>
    )),
    [children, columnSizes],
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
};

CardGrid.defaultProps = {
  className: undefined,
  columnSizes: {
    sm: 12,
    lg: 6,
    xl: 4,
  },
};

export default CardGrid;
