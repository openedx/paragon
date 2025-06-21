import React, { useRef } from 'react';
import {
  Button,
  Stack,
  IconButton,
  TransitionReplace,
} from '~paragon-react';
import { Close } from '~paragon-icons';
import { useCurrentTheme } from '../hooks/useCurrentTheme';
import { useThemeModal } from '../hooks/useThemeModal';
import { useResetModal } from '../hooks/useResetModal';
import { useEditMode } from '../hooks/useEditMode';
import { useThemeContext } from '../hooks/useThemeContext';
import ViewPanel from './ViewPanel';
import EditPanel from './EditPanel';
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

  const addButtonRef = useRef<HTMLButtonElement>(null);

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
    editButtonRef,
    closeButtonRef,
    radioRefs,
    handleTransitionEnd,
  } = useEditMode(currentThemeIndex);

  const handleAddThemeSave = () => {
    const newThemeIndex = themes.length;
    if (radioRefs.current && radioRefs.current[newThemeIndex]) {
      radioRefs.current[newThemeIndex].focus();
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
    handleAddModalClose,
    handleAddThemeSave,
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
      <Stack direction="horizontal" className="justify-content-between">
        <span className="small">Current theme:</span>
        {isEditMode ? (
          <IconButton
            ref={closeButtonRef}
            src={Close}
            alt="Finish editing"
            size="sm"
            onClick={toggleEditMode}
            variant="secondary"
          />
        ) : (
          <Button ref={editButtonRef} size="sm" variant="link" onClick={toggleEditMode}>
            Edit
          </Button>
        )}
      </Stack>
      <TransitionReplace onChildExited={handleTransitionEnd}>
        {isEditMode ? (
          <div key="edit">
            <EditPanel
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
          </div>
        ) : (
          <div key="view">
            <ViewPanel
              currentTheme={currentTheme}
            />
          </div>
        )}
      </TransitionReplace>
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
