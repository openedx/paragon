import React from 'react';
import {
  Button,
  ActionRow,
  StandardModal,
} from '~paragon-react';
import CustomThemesForm, { CustomThemesFormRef } from './CustomThemesForm';
import { type Theme } from '../types/types';
import { ThemeFormProvider } from '../context/ThemeFormContext';

interface EditThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  onRemove: () => void;
  editingTheme: Theme;
  existingThemes: Theme[];
  formRef: React.RefObject<CustomThemesFormRef>;
  onSaveTheme: (theme: { name: string; urls: string[] }) => void;
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
      existingThemes={existingThemes.map(theme => ({
        name: theme.name,
        urls: theme.urls || [],
      }))}
      onSaveTheme={onSaveTheme}
    >
      <CustomThemesForm
        ref={formRef}
        initialTheme={editingTheme.urls ? { name: editingTheme.name, urls: editingTheme.urls } : null}
      />
    </ThemeFormProvider>
  </StandardModal>
);

export default EditThemeModal;
