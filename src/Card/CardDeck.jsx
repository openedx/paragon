import React, { Children, useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useOverflowScrollItems } from '../OverflowScroll';

const CardDeck = React.forwardRef(({
  className,
  children,
  columnSizes,
  hasInteractiveChildren,
  canScrollHorizontal,
  hasOverflowScrollItems,
  hasEqualColumnHeights,
}, ref) => {
  const cards = useMemo(
    () => Children.map(children, (card) => (
      <Col
        {...columnSizes}
        className={classNames(
          'pgn__card-deck__card-item',
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
  const overflowCardDeckItems = useOverflowScrollItems(cards);

  const cardDeckChildren = useMemo(() => {
    if (hasOverflowScrollItems) {
      return overflowCardDeckItems;
    }
    return cards;
  }, [hasOverflowScrollItems, overflowCardDeckItems, cards]);

  return (
    <div
      className={classNames(
        'pgn__card-deck',
        {
          'pgn__card-deck-has-horizontal-scroll': canScrollHorizontal,
        },
        className,
      )}
    >
      <Row
        className="pgn__card-deck-row"
        tabIndex={hasInteractiveChildren ? -1 : 0}
        ref={ref}
      >
        {cardDeckChildren}
      </Row>
    </div>
  );
});

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
  /** Whether the `CardDeck` supports horizontal scrolling when there are overflow children */
  canScrollHorizontal: PropTypes.bool,
  /** Whether the children of CardDeck should be processed by `useOverflowScrollItems` to give
   * each child a known/stable CSS classname */
  hasOverflowScrollItems: PropTypes.bool,
  /** Whether to disable the default equal height cards */
  hasEqualColumnHeights: PropTypes.bool,
};

CardDeck.defaultProps = {
  className: undefined,
  columnSizes: {
    sm: 12,
    lg: 6,
    xl: 4,
  },
  hasInteractiveChildren: false,
  canScrollHorizontal: true,
  hasOverflowScrollItems: false,
  hasEqualColumnHeights: true,
};

export default CardDeck;
