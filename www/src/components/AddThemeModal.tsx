import type { RefObject, FC } from 'react';
import { useState } from 'react';
import {
  Button,
  ActionRow,
  StandardModal,
} from '~paragon-react';
import CustomThemesForm, { CustomThemesFormRef } from './CustomThemesForm';
import { type Theme, type ThemeConfig, type ThemeFormState } from '../types/types';
import { convertTheme } from '../utils/themeUtils';
import { ThemeFormProvider } from '../context/ThemeFormContext';

interface AddThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  existingThemes: Theme[];
  formRef: RefObject<CustomThemesFormRef>;
  onSaveTheme: (theme: ThemeConfig) => void;
}

const AddThemeModal: FC<AddThemeModalProps> = ({
  isOpen,
  onClose,
  onSave,
  existingThemes,
  formRef,
  onSaveTheme,
}) => {
  const [formState, setFormState] = useState<ThemeFormState>({ isValid: false });

  return (
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
          initialTheme={null}
          onFormStateChange={setFormState}
        />
      </ThemeFormProvider>
    </StandardModal>
  );
};

export default AddThemeModal;
