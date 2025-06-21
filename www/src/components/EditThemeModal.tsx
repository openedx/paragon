import React from 'react';
import {
  Button,
  ActionRow,
  StandardModal,
} from '~paragon-react';
import CustomThemesForm, { CustomThemesFormRef } from './CustomThemesForm';
import { type Theme, type ThemeConfig } from '../types/types';
import { createThemeConfig, hasUrls } from '../utils/themeUtils';
import { ThemeFormProvider } from '../context/ThemeFormContext';

interface EditThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  onRemove: () => void;
  editingTheme: Theme;
  existingThemes: Theme[];
  formRef: React.RefObject<CustomThemesFormRef>;
  onSaveTheme: (theme: ThemeConfig) => void;
}

const EditThemeModal: React.FC<EditThemeModalProps> = ({
  isOpen,
  onClose,
  onSave,
  onRemove,
  editingTheme,
  existingThemes,
  formRef,
  onSaveTheme,
}) => (
  <StandardModal
    title="Edit Custom Theme"
    isOpen={isOpen}
    onClose={onClose}
    size="lg"
    hasCloseButton={false}
    footerNode={(
      <ActionRow>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={onRemove}
        >
          Remove
        </Button>
        <ActionRow.Spacer />
        <Button variant="tertiary" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={onSave}
        >
          Save
        </Button>
      </ActionRow>
      )}
    isOverflowVisible={false}
  >
    <ThemeFormProvider
      existingThemes={existingThemes.map(createThemeConfig)}
      onSaveTheme={onSaveTheme}
    >
      <CustomThemesForm
        ref={formRef}
        initialTheme={hasUrls(editingTheme) ? createThemeConfig(editingTheme) : null}
      />
    </ThemeFormProvider>
  </StandardModal>
);

export default EditThemeModal;
