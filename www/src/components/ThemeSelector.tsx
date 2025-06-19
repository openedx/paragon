import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Badge,
  Stack,
  useToggle,
} from '~paragon-react';
import { SettingsContext } from '../context/SettingsContext';
import StandardModal from '../../../src/Modal/StandardModal.jsx';
import CustomBrandForm from './CustomBrandForm';
import ActionRow from '../../../src/ActionRow';

export interface IThemeSelector {
  className?: string,
}

export function ThemeSelector({ className }: IThemeSelector) {
  const {
    settings,
    handleCustomThemeChange,
    resetCustomTheme,
  } = useContext(SettingsContext);
  const [showBrandModal, openBrandModal, closeBrandModal] = useToggle(false);

  const customThemes = Array.isArray(settings?.customThemes) ? settings.customThemes : [];
  const activeIdx = typeof settings?.activeCustomThemeIndex === 'number' ? settings.activeCustomThemeIndex : 0;
  const currentTheme = customThemes[activeIdx] || null;

  return (
    <div className={className}>
      <Stack gap={1}>
        <div>
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
              onClick={() => {
                (document.getElementById('customBrandForm') as HTMLFormElement | null)?.requestSubmit();
              }}
            >
              Save
            </Button>
          </ActionRow>
        }
        isOverflowVisible={false}
      >
        <CustomBrandForm
          initialBrand={currentTheme}
          onSave={brand => {
            handleCustomThemeChange(brand);
            closeBrandModal();
          }}
        />
      </StandardModal>
    </div>
  );
}

ThemeSelector.propTypes = {
  className: PropTypes.string,
};

ThemeSelector.defaultProps = {
  className: undefined,
};

export default ThemeSelector; 