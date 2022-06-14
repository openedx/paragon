import React from 'react';
import BaseCard from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardContext, { CardContextProvider } from './CardContext';
import CardHeader from './CardHeader';
import CardDivider from './CardDivider';
import CardSection from './CardSection';
import CardFooter from './CardFooter';
import CardImageCap from './CardImageCap';
import CardBody from './CardBody';

const Card = React.forwardRef(({
  orientation,
  isLoading,
  className,
  isClickable,
  ...props
}, ref) => (
  <CardContextProvider orientation={orientation} isLoading={isLoading}>
    <BaseCard
      {...props}
      className={classNames(className, 'pgn__card', {
        horizontal: orientation === 'horizontal',
        clickable: isClickable,
      })}
      ref={ref}
      tabIndex={isClickable ? '0' : '-1'}
    />
  </CardContextProvider>
));

export { default as CardColumns } from 'react-bootstrap/CardColumns';
export { default as CardDeck } from 'react-bootstrap/CardDeck';
export { default as CardImg } from 'react-bootstrap/CardImg';
export { default as CardGroup } from 'react-bootstrap/CardGroup';
export { default as CardGrid } from './CardGrid';

Card.propTypes = {
  ...BaseCard.propTypes,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies which orientation to use. */
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: PropTypes.bool,
};

Card.defaultProps = {
  ...BaseCard.defaultProps,
  className: undefined,
  orientation: 'vertical',
  isClickable: false,
};

Card.Header = CardHeader;
Card.Divider = CardDivider;
Card.Section = CardSection;
Card.Footer = CardFooter;
Card.ImageCap = CardImageCap;
Card.Context = CardContext;
Card.Body = CardBody;
export default Card;
