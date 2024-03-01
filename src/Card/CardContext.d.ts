import React from 'react';

export interface CardContextProviderProps {
  orientation?: 'horizontal' | 'vertical',
  isLoading?: boolean,
  variant?: 'light' | 'dark' | 'muted',
  children?: React.ReactNode,
}
declare const CardContextProvider: React.FC<CardContextProviderProps>;
declare const CardContext: React.Context<{}>;
export { CardContextProvider };
export default CardContext;
