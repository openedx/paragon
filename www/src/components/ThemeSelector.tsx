import React, { useRef } from 'react';
import {
  Stack,
  Collapsible,
  IconButton,
} from '~paragon-react';
import { ExpandMore, ExpandLess } from '~paragon-icons';
import { useCurrentTheme } from '../hooks/useCurrentTheme';
import { useThemeModal } from '../hooks/useThemeModal';
import { useResetModal } from '../hooks/useResetModal';
import { useEditMode } from '../hooks/useEditMode';
import { useThemeContext } from '../hooks/useThemeContext';
import ThemeDisplay from './ThemeDisplay';
import ThemeOptions from './ThemeOptions';
import ResetThemesModal from './ResetThemesModal';
import RemoveThemeModal from './RemoveThemeModal';
import AddThemeModal from './AddThemeModal';
import EditThemeModal from './EditThemeModal';

export default function ThemeSelector() {
  const {
    themes,
    currentThemeIndex,
    hasCustomThemes,
    addTheme,
    updateTheme,
    removeTheme,
    resetThemes,
    setCurrentTheme,
  } = useThemeContext();

  const currentTheme = useCurrentTheme();

  const addButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleResetComplete = () => {
    if (addButtonRef.current) {
      addButtonRef.current.focus();
    }
  };

  const handleAddModalClose = () => {
    if (addButtonRef.current) {
      addButtonRef.current.focus();
    }
  };

  const {
    isEditMode,
    toggleEditMode,
    onOpen,
    radioRefs,
  } = useEditMode(currentThemeIndex);

  const handleRemoveThemeComplete = (newActiveIndex: number) => {
    // Focus the current active theme radio button
    // The default theme will always exist, so updatedThemes.length > 0 is guaranteed
    setTimeout(() => {
      const radioRef = radioRefs.current?.[newActiveIndex];
      if (radioRef) {
        radioRef.focus();
      }
    }, 100); // Small delay to ensure DOM is updated after theme removal
  };

  const handleAddThemeSave = () => {
    const newThemeIndex = themes.length;
    const radioRef = radioRefs.current?.[newThemeIndex];
    if (radioRef) {
      radioRef.focus();
    }
  };

  const {
    showAddModal,
    showEditModal,
    editingTheme,
    showRemoveConfirm,
    addFormRef,
    editFormRef,
    closeAddModal,
    closeEditModal,
    handleAddSaveClick,
    handleEditSaveClick,
    handleEditTheme,
    handleRemoveTheme,
    handleConfirmRemove,
    handleCancelRemove,
    handleAddClick,
    handleAddTheme,
    handleEditThemeSave,
  } = useThemeModal(
    addTheme,
    updateTheme,
    removeTheme,
    themes,
    currentThemeIndex,
    handleAddModalClose,
    handleAddThemeSave,
    handleRemoveThemeComplete,
  );

  const {
    showResetConfirm,
    openResetConfirm,
    closeResetConfirm,
    handleResetConfirm,
  } = useResetModal(resetThemes, handleResetComplete);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const themeIndex = parseInt(value, 10);
    setCurrentTheme(themeIndex);
  };

  return (
    <div>
      <Collapsible.Advanced
        open={isEditMode}
        onToggle={toggleEditMode}
        onOpen={onOpen}
      >
        <Collapsible.Trigger>
          <Stack direction="horizontal" className="justify-content-between align-items-center">
            <ThemeDisplay currentTheme={currentTheme} />
            <Collapsible.Visible whenClosed>
              <IconButton
                src={ExpandMore}
                alt="Expand theme options"
                size="sm"
                variant="secondary"
              />
            </Collapsible.Visible>
            <Collapsible.Visible whenOpen>
              <IconButton
                src={ExpandLess}
                alt="Collapse theme options"
                size="sm"
                variant="secondary"
              />
            </Collapsible.Visible>
          </Stack>
        </Collapsible.Trigger>
        <Collapsible.Body className="mt-4">
          <ThemeOptions
            themes={themes}
            currentThemeValue={currentThemeIndex.toString()}
            onThemeChange={handleThemeChange}
            onEditTheme={(themeIndex) => handleEditTheme(themeIndex, themes)}
            hasCustomThemes={hasCustomThemes}
            onResetClick={openResetConfirm}
            onAddClick={handleAddClick}
            radioRefs={radioRefs}
            addButtonRef={addButtonRef}
          />
        </Collapsible.Body>
      </Collapsible.Advanced>
      <AddThemeModal
        isOpen={showAddModal}
        onClose={closeAddModal}
        onSave={handleAddSaveClick}
        existingThemes={themes}
        formRef={addFormRef}
        onSaveTheme={handleAddTheme}
      />
      {editingTheme && (
        <EditThemeModal
          isOpen={showEditModal}
          onClose={closeEditModal}
          onSave={handleEditSaveClick}
          onRemove={handleRemoveTheme}
          editingTheme={editingTheme}
          existingThemes={themes}
          formRef={editFormRef}
          onSaveTheme={handleEditThemeSave}
        />
      )}
      <RemoveThemeModal
        isOpen={showRemoveConfirm}
        onClose={handleCancelRemove}
        onConfirm={handleConfirmRemove}
        themeName={editingTheme?.name || ''}
      />
      <ResetThemesModal
        isOpen={showResetConfirm}
        onClose={closeResetConfirm}
        onConfirm={handleResetConfirm}
      />
    </div>
  );
}
