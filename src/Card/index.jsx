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

const Card = ({ horizontal, ...props }) => (
  <CardContextProvider horizontal={horizontal}>
    <BaseCard className={classNames('pgn__card', { horizontal })} {...props} />
  </CardContextProvider>
);

export { default as CardColumns } from 'react-bootstrap/CardColumns';
export { default as CardDeck } from 'react-bootstrap/CardDeck';
export { default as CardImg } from 'react-bootstrap/CardImg';
export { default as CardGroup } from 'react-bootstrap/CardGroup';
export { default as CardGrid } from './CardGrid';

Card.propTypes = {
  ...BaseCard.propTypes,
  /** Display `horizontal` layout of the `Card` when the prop is set to `true`. */
  horizontal: PropTypes.bool,
};

Card.defaultProps = {
  ...BaseCard.defaultProps,
  horizontal: false,
};

CardContextProvider.defaultProps = {
  horizontal: false,
};

Card.Header = CardHeader;
Card.Divider = CardDivider;
Card.Section = CardSection;
Card.Footer = CardFooter;
Card.ImageCap = CardImageCap;
Card.Context = CardContext;
Card.Body = CardBody;
export default Card;
