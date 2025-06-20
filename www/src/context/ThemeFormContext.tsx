import React, { createContext, useContext, ReactNode } from 'react';
import { type Theme, type ThemeSetting } from '../types/types';

interface ThemeFormContextValue {
  existingThemes: Theme[];
  onSaveTheme: (theme: ThemeSetting) => void;
}

const ThemeFormContext = createContext<ThemeFormContextValue | null>(null);

interface ThemeFormProviderProps {
  children: ReactNode;
  existingThemes: Theme[];
  onSaveTheme: (theme: ThemeSetting) => void;
}

export const ThemeFormProvider: React.FC<ThemeFormProviderProps> = ({
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
