import React, { useState } from 'react';
import {
  Button,
  ActionRow,
  StandardModal,
} from '~paragon-react';
import CustomThemesForm, { CustomThemesFormRef } from './CustomThemesForm';
import { type Theme, type ThemeConfig, type ThemeFormState } from '../types/types';
import { convertTheme, hasUrls } from '../utils/themeUtils';
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
}) => {
  const [formState, setFormState] = useState<ThemeFormState>({ isValid: false });

  return (
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
            disabled={!formState.isValid}
          >
            Save
          </Button>
        </ActionRow>
        )}
      isOverflowVisible={false}
    >
      <ThemeFormProvider
        existingThemes={existingThemes.map(theme => convertTheme(theme))}
        onSaveTheme={onSaveTheme}
      >
        <CustomThemesForm
          ref={formRef}
          initialTheme={hasUrls(editingTheme) ? convertTheme(editingTheme) : null}
          onFormStateChange={setFormState}
        />
      </ThemeFormProvider>
    </StandardModal>
  );
};

export default EditThemeModal;
