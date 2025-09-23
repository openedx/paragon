import { createContext, ReactNode } from 'react';

const CardContext = createContext({});

interface CardContextProviderProps {
  /** Specifies which orientation to use. */
  orientation?: 'horizontal' | 'vertical';
  /** Specifies loading state. */
  isLoading?: boolean;
  /** Specifies content of the component. */
  children?: ReactNode;
  /** Specifies `Card` style variant */
  variant?: 'light' | 'dark' | 'muted';
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
