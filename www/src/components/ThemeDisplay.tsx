import React from 'react';
import { type Theme } from '../types/types';

interface ThemeDisplayProps {
  currentTheme: Theme;
}

const ThemeDisplay: React.FC<ThemeDisplayProps> = ({ currentTheme }) => (
  <div>
    <div className="small">Current theme:</div>
    <div className="font-weight-bold">
      {currentTheme.name}
    </div>
  </div>
);

export default ThemeDisplay;
