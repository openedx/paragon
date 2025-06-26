import { useState } from 'react';
import { SETTINGS_EVENTS, sendUserAnalyticsEvent } from '../../segment-events';

export const useSettingsUI = () => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = (value: boolean) => {
    const event = value
      ? SETTINGS_EVENTS.OPENED
      : SETTINGS_EVENTS.CLOSED;

    setShowSettings(value);
    sendUserAnalyticsEvent(event);
  };

  const openSettings = () => toggleSettings(true);
  const closeSettings = () => toggleSettings(false);

  return {
    showSettings,
    openSettings,
    closeSettings,
  };
};
