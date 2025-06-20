import React from 'react';
import { type Theme } from '../types/types';

interface ViewPanelProps {
  currentTheme: Theme;
}

const ViewPanel: React.FC<ViewPanelProps> = ({ currentTheme }) => (
  <div className="font-weight-bold">
    {currentTheme.name}
  </div>
);

export default ViewPanel;
