import React, { Children, useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BaseCardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useOverflowScrollItems } from '..';

export const CARD_DECK_ITEM_CLASS_NAME = 'pgn__card-deck-card-item';

const CardDeck = React.forwardRef(({
  className,
  children,
  columnSizes,
  hasInteractiveChildren,
  canScrollHorizontal,
  StartSentinel,
  EndSentinel,
  hasOverflowScrollItems,
}, ref) => {
  const cards = useMemo(
    () => Children.map(Children.toArray(children), child => (
      <Col className={classNames(CARD_DECK_ITEM_CLASS_NAME, child.props.className)} {...columnSizes}>
        {child}
      </Col>
    )),
    [children, columnSizes],
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
        {StartSentinel && <StartSentinel />}
        {cardDeckChildren}
        {EndSentinel && <EndSentinel />}
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
  /** React element to determine when scrolled to start  */
  StartSentinel: PropTypes.elementType,
  /** React element to determine when scrolled to end  */
  EndSentinel: PropTypes.elementType,
  /** Whether the children of CardDeck should be processed by `useOverflowScrollItems` to give
   * each child a known/stable CSS classname */
  hasOverflowScrollItems: PropTypes.bool,
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
  StartSentinel: null,
  EndSentinel: null,
  hasOverflowScrollItems: false,
};

CardDeck.Deprecated = BaseCardDeck;

export default CardDeck;
