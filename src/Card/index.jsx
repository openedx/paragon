import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseCard from './BaseCard';
import CardContext, { CardContextProvider } from './CardContext';
import CardHeader from './CardHeader';
import CardDivider from './CardDivider';
import CardSection from './CardSection';
import CardFooter from './CardFooter';
import CardImageCap from './CardImageCap';
import CardBody from './CardBody';
import CardStatus from './CardStatus';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';

export const CARD_VARIANTS = ['light', 'dark', 'muted'];

const Card = React.forwardRef(({
  orientation,
  isLoading,
  className,
  isClickable,
  muted,
  variant,
  ...props
}, ref) => {
  const resolvedVariant = muted ? 'muted' : variant;

  return (
    <CardContextProvider
      orientation={orientation}
      isLoading={isLoading}
      variant={resolvedVariant}
    >
      <BaseCard
        {...props}
        className={classNames(className, 'pgn__card', {
          horizontal: orientation === 'horizontal',
          clickable: isClickable,
          [`pgn__card-${resolvedVariant}`]: resolvedVariant,
        })}
        ref={ref}
        tabIndex={isClickable ? 0 : -1}
      />
    </CardContextProvider>
  );
});

export { default as CardColumns } from 'react-bootstrap/CardColumns';
export { default as CardDeck } from './CardDeck';
export { default as CardCarousel } from './CardCarousel/CardCarousel';
export { default as CardImg } from 'react-bootstrap/CardImg';
export { default as CardGroup } from 'react-bootstrap/CardGroup';
export { default as CardGrid } from './CardGrid';

Card.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies which orientation to use. */
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: PropTypes.bool,
  /** Specifies loading state. */
  isLoading: PropTypes.bool,
  /** Specifies `Card` style variant. */
  variant: PropTypes.oneOf(CARD_VARIANTS),
  /** **Deprecated**. Specifies whether `Card` uses `muted` variant. Use `variant="muted"` instead. */
  muted: PropTypes.bool,
};

Card.defaultProps = {
  ...BaseCard.defaultProps,
  className: undefined,
  orientation: 'vertical',
  isClickable: false,
  variant: 'light',
  isLoading: false,
};

const CardWithDeprecatedProp = withDeprecatedProps(Card, 'Card', {
  muted: {
    deprType: DeprTypes.REMOVED,
    message: 'Use "variant" prop instead, i.e. variant="muted"',
  },
});

CardWithDeprecatedProp.Status = CardStatus;
CardWithDeprecatedProp.Header = CardHeader;
CardWithDeprecatedProp.Divider = CardDivider;
CardWithDeprecatedProp.Section = CardSection;
CardWithDeprecatedProp.Footer = CardFooter;
CardWithDeprecatedProp.ImageCap = CardImageCap;
CardWithDeprecatedProp.Context = CardContext;
CardWithDeprecatedProp.Body = CardBody;

export default CardWithDeprecatedProp;
