import type { FC } from 'react';
import { createContext, useContext, ReactNode } from 'react';
import { type Theme, type ThemeConfig } from '../types/types';

interface ThemeFormContextValue {
  existingThemes: Theme[];
  onSaveTheme: (theme: ThemeConfig) => void;
}

const ThemeFormContext = createContext<ThemeFormContextValue | null>(null);

interface ThemeFormProviderProps {
  children: ReactNode;
  existingThemes: Theme[];
  onSaveTheme: (theme: ThemeConfig) => void;
}

export const ThemeFormProvider: FC<ThemeFormProviderProps> = ({
  children,
  existingThemes,
  onSaveTheme,
}) => (
  <ThemeFormContext.Provider value={{ existingThemes, onSaveTheme }}>
    {children}
  </ThemeFormContext.Provider>
);

export const useThemeForm = () => {
  const context = useContext(ThemeFormContext);
  if (!context) {
    throw new Error('useThemeForm must be used within a ThemeFormProvider');
  }
  return context;
};
