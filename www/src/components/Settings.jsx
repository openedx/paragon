import React, { useContext } from 'react';
import {
  Sheet,
  Form,
  Icon,
  IconButton,
  Stack,
} from '~paragon-react';
import { Close } from '~paragon-icons';

import { FEATURES, LANGUAGES } from '../config';
import SettingsContext from '../context/SettingsContext';
import { THEMES } from '../../theme-config';

const Settings = () => {
  const {
    settings,
    handleSettingsChange,
    showSettings,
    closeSettings,
  } = useContext(SettingsContext);

  return (
    <Sheet
      position="right"
      show={showSettings}
      variant="light"
    >
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="h3 mb-0">
          Settings
        </div>
        <IconButton
          src={Close}
          iconAs={Icon}
          alt="Close settings"
          onClick={closeSettings}
          size="sm"
        />
      </div>
      <Stack gap={3}>
        <Form.Group>
          <Form.Control
            as="select"
            value={settings.theme}
            onChange={(e) => handleSettingsChange('theme', e.target.value)}
            floatingLabel="Theme"
          >
            {THEMES.map(theme => (
              <option
                key={theme.label}
                value={theme.stylesheet}
              >
                {theme.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="select"
            value={settings.direction}
            onChange={(e) => handleSettingsChange('direction', e.target.value)}
            floatingLabel="Direction"
          >
            <option value="ltr">Left to right</option>
            <option value="rtl">Right to left</option>
          </Form.Control>
        </Form.Group>
        {FEATURES.LANGUAGE_SWITCHER && (
          <Form.Group>
            <Form.Control
              as="select"
              value={settings.language}
              onChange={(e) => handleSettingsChange('language', e.target.value)}
              floatingLabel="Component Language"
            >
              {LANGUAGES.map(lang => (
                <option
                  key={lang.code}
                  value={lang.code}
                >
                  {lang.label}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        )}
      </Stack>
    </Sheet>
  );
};

export default Settings;
