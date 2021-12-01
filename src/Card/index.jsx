import Card from 'react-bootstrap/Card';
import CardHeader from './CardHeader';
import CardDivider from './CardDivider';
import CardSection from './CardSection';
import CardFooter from './CardFooter';

export { default as CardColumns } from 'react-bootstrap/CardColumns';
export { default as CardDeck } from 'react-bootstrap/CardDeck';
export { default as CardImg } from 'react-bootstrap/CardImg';
export { default as CardGroup } from 'react-bootstrap/CardGroup';

export { default as CardGrid } from './CardGrid';

Card.Header = CardHeader;
Card.Divider = CardDivider;
Card.Section = CardSection;
Card.Footer = CardFooter;
export default Card;
