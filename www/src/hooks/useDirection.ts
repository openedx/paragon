import { SETTINGS_EVENTS, sendUserAnalyticsEvent } from '../../segment-events';

export const useDirection = (
  settings: any,
  updateSettings: (key: string, value: any) => void
) => {
  const handleDirectionChange = (value: string) => {
    document.body.setAttribute('dir', value);
    updateSettings('direction', value);
  };

  return {
    handleDirectionChange,
  };
}; 