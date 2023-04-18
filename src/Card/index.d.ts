import React from 'react';
import Card, { CardProps } from "react-bootstrap/Card";
import { BsPrefixRefForwardingComponent } from "react-bootstrap/helpers";
import CardDivider from "./CardDivider";
import CardContext from "./CardContext";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import CardSection from "./CardSection";
import CardStatus from "./CardStatus";
import CardImageCap from "./CardImageCap";

export interface BaseCardProps extends CardProps {
  orientation?: 'horizontal' | 'vertical',
  isLoading?: boolean,
  isClickable?: boolean,
  muted?: boolean,
  variant?: 'light' | 'dark' | 'muted',
  className?: string,
  children?: React.ReactNode,
}
declare type Card = BsPrefixRefForwardingComponent<'div', BaseCardProps> & {
  Img: typeof Card.Img;
  Title: typeof Card.Title;
  Subtitle: typeof Card.Subtitle;
  Body: typeof CardBody;
  Link: typeof Card.Link;
  Text: typeof Card.Text;
  Header: typeof CardHeader;
  Footer: typeof CardFooter;
  ImgOverlay: typeof Card.ImgOverlay;
  Context: typeof CardContext;
  Divider: typeof CardDivider;
  Section: typeof CardSection;
  Status: typeof CardStatus;
  ImageCap: typeof CardImageCap;
};

declare const Card: Card;
export default Card;
export { default as CardColumns } from 'react-bootstrap/CardColumns';
export { default as CardDeck } from './CardDeck';
export { default as CardCarousel } from './CardCarousel/CardCarousel';
export { default as CardImg } from 'react-bootstrap/CardImg';
export { default as CardGroup } from 'react-bootstrap/CardGroup';
export { default as CardGrid } from './CardGrid';
