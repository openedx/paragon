import React from 'react';
import {
  Button,
  ActionRow,
  StandardModal,
} from '~paragon-react';
import CustomThemesForm, { CustomThemesFormRef } from './CustomThemesForm';
import { type Theme } from '../types/types';
import { ThemeFormProvider } from '../context/ThemeFormContext';

interface AddThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  existingThemes: Theme[];
  formRef: React.RefObject<CustomThemesFormRef>;
  onSaveTheme: (theme: { name: string; urls: string[] }) => void;
}

const AddThemeModal: React.FC<AddThemeModalProps> = ({
  isOpen,
  onClose,
  onSave,
  existingThemes,
  formRef,
  onSaveTheme,
}) => (
  <StandardModal
    title="Add Custom Theme"
    isOpen={isOpen}
    onClose={onClose}
    size="lg"
    hasCloseButton={false}
    footerNode={(
      <ActionRow>
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
        initialTheme={null}
      />
    </ThemeFormProvider>
  </StandardModal>
);

export default AddThemeModal;
