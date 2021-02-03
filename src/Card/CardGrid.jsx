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
    () => React.Children.map(children, child => (
      <Col {...columnSizes}>
        {child}
      </Col>
    )),
    [children],
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
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
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
