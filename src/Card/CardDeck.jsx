import React, { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BaseCardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardDeck({
  className,
  children,
  columnSizes,
  hasInteractiveChildren,
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
    <div
      className={classNames('pgn__card-deck', className)}
      tabIndex={hasInteractiveChildren ? -1 : 0}
    >
      <Row className="pgn__card-deck-row">
        {cards}
      </Row>
    </div>
  );
}

CardDeck.propTypes = {
  /** The class name for the CardDeck component */
  className: PropTypes.string,
  /** The Card components to organize */
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
  /** Whether the child `Card` components are interactive/focusable. If not, a `tabindex="0"` is
   * added to be a11y-compliant */
  hasInteractiveChildren: PropTypes.bool,
};

CardDeck.defaultProps = {
  className: undefined,
  columnSizes: {
    sm: 12,
    lg: 6,
    xl: 4,
  },
  hasInteractiveChildren: false,
};

CardDeck.Deprecated = BaseCardDeck;

export default CardDeck;
