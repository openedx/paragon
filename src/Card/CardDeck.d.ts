import React from 'react';

export declare const CARD_DECK_ITEM_CLASS_NAME = 'pgn__card-deck-card-item';
export interface CardDeckProps {
  columnSizes?: {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
  },
  hasInteractiveChildren?: boolean,
  canScrollHorizontal?: boolean,
  hasOverflowScrollItems?: boolean,
  className?: string,
  children: React.ReactNode,
}
declare const CardDeck: React.ForwardRefExoticComponent<CardDeckProps>;
export default CardDeck;
