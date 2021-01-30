import CardDeprecated from 'react-bootstrap/Card';

import CardDivider from './CardDivider';
import CardSection from './CardSection';
import CardHeader from './CardHeader';

const Card = CardDeprecated;
Card.Divider = CardDivider;
Card.Section = CardSection;
Card.Header = CardHeader;

export { default as CardDeck } from 'react-bootstrap/CardDeck';
export { default as CardColumns } from 'react-bootstrap/CardColumns';
export { default as CardImg } from 'react-bootstrap/CardImg';
export { default as CardGroup } from 'react-bootstrap/CardGroup';

export default Card;
