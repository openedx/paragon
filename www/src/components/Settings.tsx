import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Sheet,
  Form,
  Icon,
  IconButton,
  Stack,
  Nav,
} from '~paragon-react';
import { Close } from '~paragon-icons';

import { Link } from 'gatsby';
import { LANGUAGES } from '../config';

import { SettingsContext } from '../context/SettingsContext';

export interface ISetting {
  showMinimizedTitle?: boolean,
}

function Settings({ showMinimizedTitle }: ISetting) {
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
      onClose={closeSettings}
    >
      <div className="pgn-doc__settings">
        <div className="pgn-doc__settings-title">
          <h3 className="mb-0">Settings</h3>
          <IconButton
            src={Close}
            iconAs={Icon}
            alt="Close settings"
            onClick={closeSettings}
            size="sm"
          />
        </div>
        <Stack gap={1}>
          <Form.Group className="pgn-doc__settings-direction">
            <Form.Label className="pgn-doc__settings-label">Text direction</Form.Label>
            <Form.RadioSet
              name="direction"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSettingsChange('direction', e.target.value)}
              value={settings.direction}
            >
              <Form.Radio value="ltr">Left to right</Form.Radio>
              <Form.Radio value="rtl">Right to left</Form.Radio>
            </Form.RadioSet>
          </Form.Group>
          <Form.Group>
            <Form.Label className="pgn-doc__settings-label">Language</Form.Label>
            <Form.Control
              as="select"
              value={settings.language}
              onChange={(e: { target: { value: string; }; }) => handleSettingsChange('language', e.target.value)}
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
          {!showMinimizedTitle && (
            <Form.Group>
              <Form.Label className="pgn-doc__settings-label">Container Width</Form.Label>
              <Form.Control
                as="select"
                value={settings.containerWidth}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSettingsChange('containerWidth', e.target.value)}
              >
                <option value="xs">xs</option>
                <option value="sm">sm</option>
                <option value="md">md (default)</option>
                <option value="lg">lg</option>
                <option value="xl">xl</option>
              </Form.Control>
            </Form.Group>
          )}
          <Nav className="pgn-doc__settings-nav--items">
            <Nav.Item>
              <Link className="nav-link" to="/changelog">
                Changelog
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://github.com/openedx/paragon">
                GitHub
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Stack>
      </div>
    </Sheet>
  );
}

Settings.propTypes = {
  showMinimizedTitle: PropTypes.bool,
};

Settings.defaultProps = {
  showMinimizedTitle: false,
};

export default Settings;
