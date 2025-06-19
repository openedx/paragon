import React, { useContext, useRef } from 'react';
import {
  Button,
  Badge,
  Stack,
  useToggle,
} from '~paragon-react';
import { SettingsContext } from '../context/SettingsContext';
import StandardModal from '../../../src/Modal/StandardModal.jsx';
import CustomThemesForm, { CustomThemesFormRef } from './CustomThemesForm';
import ActionRow from '../../../src/ActionRow';

export function ThemeSelector() {
  const {
    settings,
    handleCustomThemeChange,
    resetCustomTheme,
  } = useContext(SettingsContext);
  const [showBrandModal, openBrandModal, closeBrandModal] = useToggle(false);
  const formRef = useRef<CustomThemesFormRef>(null);

  const customThemes = Array.isArray(settings?.customThemes) ? settings.customThemes : [];
  const activeIdx = typeof settings?.activeCustomThemeIndex === 'number' ? settings.activeCustomThemeIndex : 0;
  const currentTheme = customThemes[activeIdx] || null;

  const handleSaveClick = () => {
    formRef.current?.submitForm();
  };

  return (
    <div>
      <Stack gap={1}>
        <div role="status">
          <div className="small">Current theme:</div>
          <div>
            <Badge variant="primary">
              {currentTheme?.name || 'Open edX'}
            </Badge>
          </div>
        </div>
        <Button
          size="sm"
          variant="outline-primary"
          className="mt-2 mt-md-0"
          onClick={openBrandModal}
          block
        >
          {currentTheme ? 'Edit custom theme' : 'Add custom theme'}
        </Button>
      </Stack>
      <StandardModal
        title={currentTheme ? 'Edit Custom Theme' : 'Add Custom Theme'}
        isOpen={showBrandModal}
        onClose={closeBrandModal}
        size="lg"
        hasCloseButton={false}
        footerNode={
          <ActionRow>
            <Button variant="tertiary" onClick={closeBrandModal}>
              Cancel
            </Button>
            {currentTheme && (
              <Button variant="outline-danger" size="sm" onClick={() => {
                resetCustomTheme();
                closeBrandModal();
              }}>
                Reset to Default
              </Button>
            )}
            <ActionRow.Spacer />
            <Button
              variant="primary"
              onClick={handleSaveClick}
            >
              Save
            </Button>
          </ActionRow>
        }
        isOverflowVisible={false}
      >
        <CustomThemesForm
          ref={formRef}
          initialTheme={currentTheme}
          onSave={theme => {
            handleCustomThemeChange(theme);
            closeBrandModal();
          }}
        />
      </StandardModal>
    </div>
  );
}

export default ThemeSelector; 
