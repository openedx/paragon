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
    </Sheet>
  );
};

export default Settings;
