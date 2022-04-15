import React, { useContext } from 'react';
import {
  Sheet,
  Form,
  Icon,
  IconButton,
} from '~paragon-react';
import { Close } from '~paragon-icons';

import SettingsContext from '../context/SettingsContext';
import { THEMES } from '../../theme-config';

const Settings = () => {
  const {
    theme: currentTheme,
    onThemeChange,
    showSettings,
    closeSettings,
    direction,
    onDirectionChange,
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
      <div className="pgn__settings-form-wrapper">
        <Form.Group>
          <Form.Control
            as="select"
            value={currentTheme}
            onChange={onThemeChange}
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
            value={direction}
            onChange={onDirectionChange}
            floatingLabel="Direction"
          >
            <option value="ltr">Left to right</option>
            <option value="rtl">Right to left</option>
          </Form.Control>
        </Form.Group>
      </div>
    </Sheet>
  );
};

export default Settings;
