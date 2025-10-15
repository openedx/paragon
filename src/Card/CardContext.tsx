import React, { createContext, ReactNode } from 'react';

interface CardContextData {
  /** Specifies which orientation to use. */
  orientation: 'horizontal' | 'vertical';
  /** Specifies loading state. */
  isLoading: boolean;
  /** Specifies `Card` style variant */
  variant: 'light' | 'dark' | 'muted';
}

const CardContext = createContext<CardContextData>({
  orientation: 'vertical',
  isLoading: false,
  variant: 'light',
});

interface CardContextProviderProps extends Partial<CardContextData> {
  /** Specifies content of the component. */
  children?: ReactNode;
}

function CardContextProvider({
  orientation = 'vertical',
  children,
  isLoading = false,
  variant = 'light',
}: CardContextProviderProps) {
  return (
    <CardContext.Provider value={{ orientation, isLoading, variant }}>
      {children}
    </CardContext.Provider>
  );
}

export { CardContextProvider };
export default CardContext;
