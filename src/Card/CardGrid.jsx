import React, { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardGrid = ({
  className,
  children,
  columnSizes,
}) => {
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
};

CardGrid.propTypes = {
  /** The class name for the CardGrid component */
  className: PropTypes.string,
  /** The Card components to organize into a responsive grid */
  children: PropTypes.node.isRequired,
  /**
   * An object containing the desired column size at each breakpoint, following a similar
   * props API as ``react-bootstrap/Col``
   */
  oneoftype: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  instanceof: PropTypes.instanceOf(CardGrid),
  PropTypeArrayOf: PropTypes.arrayOf(PropTypes.string),
  PropTypeObjectOf: PropTypes.objectOf(PropTypes.number),
  columnSizes: PropTypes.shape({
    sm: PropTypes.func,
    lg: PropTypes.shape({
      xs: PropTypes.number.isRequired,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
      xl: PropTypes.number,
    }).isRequired,
    xl: PropTypes.number,
  }),
  // An object with warnings on extra properties
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number
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
