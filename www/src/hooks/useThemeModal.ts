import { useState, useRef } from 'react';
import { useToggle } from '~paragon-react';
import { type Theme, type ThemeConfig } from '../types/types';
import { CustomThemesFormRef } from '../components/CustomThemesForm';

export const useThemeModal = (
  addTheme: (theme: ThemeConfig) => void,
  updateTheme: (index: number, theme: ThemeConfig) => void,
  removeTheme: (index: number) => void,
  themes: ThemeConfig[],
  activeThemeIndex: number,
  onAddModalClose?: () => void,
  onAddThemeSave?: () => void,
  onRemoveTheme?: (newActiveIndex: number) => void,
) => {
  const [showAddModal, openAddModal, closeAddModal] = useToggle(false);
  const [showEditModal, openEditModal, closeEditModal] = useToggle(false);
  const [editingTheme, setEditingTheme] = useState<Theme | null>(null);
  const [editingThemeIndex, setEditingThemeIndex] = useState<number | null>(null);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const addFormRef = useRef<CustomThemesFormRef>(null);
  const editFormRef = useRef<CustomThemesFormRef>(null);

  const closeAddModalHandler = () => {
    closeAddModal();
    if (onAddModalClose) {
      setTimeout(() => {
        onAddModalClose();
      }, 0);
    }
  };

  const closeEditModalHandler = () => {
    setEditingTheme(null);
    setEditingThemeIndex(null);
    setShowRemoveConfirm(false);
    closeEditModal();
  };

  const handleAddSaveClick = () => {
    addFormRef.current?.submitForm();
  };

  const handleEditSaveClick = () => {
    editFormRef.current?.submitForm();
  };

  const handleEditTheme = (themeIndex: number, themes: Theme[]) => {
    const themeToEdit = themes[themeIndex];
    if (themeToEdit) {
      setEditingTheme(themeToEdit);
      setEditingThemeIndex(themeIndex);
      openEditModal();
    }
  };

  const handleRemoveTheme = () => {
    setShowRemoveConfirm(true);
  };

  const handleConfirmRemove = () => {
    if (editingThemeIndex === null) {
      return;
    }
    
    const currentThemes = themes || [];
    const currentActiveIndex = activeThemeIndex || 0;
    
    removeTheme(editingThemeIndex);
    closeEditModalHandler();
    
    if (!onRemoveTheme) {
      return;
    }
    
    // Calculate the new active index after removing the theme
    const calculateNewActiveIndex = () => {
      const remainingThemesCount = currentThemes.length - 1;
      
      // If we're removing the currently active theme, pick a new one
      if (currentActiveIndex === editingThemeIndex) {
        // If it was the last theme, go to the first theme (index 0)
        if (currentActiveIndex >= remainingThemesCount) {
          return 0;
        }
        // Otherwise, stay at the same index (the next theme will shift up to this position)
        return currentActiveIndex;
      }
      
      // If the active theme comes after the removed theme, shift back by 1
      if (currentActiveIndex > editingThemeIndex) {
        return currentActiveIndex - 1;
      }
      
      // Otherwise, keep the same index
      return currentActiveIndex;
    };
    
    const newActiveIndex = calculateNewActiveIndex();
    onRemoveTheme(newActiveIndex);
  };

  const handleCancelRemove = () => {
    setShowRemoveConfirm(false);
  };

  const handleAddClick = () => {
    openAddModal();
  };

  const handleAddTheme = (theme: ThemeConfig) => {
    addTheme(theme);
    closeAddModal();
    if (onAddThemeSave) {
      setTimeout(() => {
        onAddThemeSave();
      }, 0);
    }
  };

  const handleEditThemeSave = (theme: ThemeConfig) => {
    if (editingThemeIndex !== null) {
      updateTheme(editingThemeIndex, theme);
    }
    closeEditModalHandler();
  };

  return {
    showAddModal,
    showEditModal,
    editingTheme,
    showRemoveConfirm,
    addFormRef,
    editFormRef,
    openAddModal,
    closeAddModal: closeAddModalHandler,
    closeEditModal: closeEditModalHandler,
    handleAddSaveClick,
    handleEditSaveClick,
    handleEditTheme,
    handleRemoveTheme,
    handleConfirmRemove,
    handleCancelRemove,
    handleAddClick,
    handleAddTheme,
    handleEditThemeSave,
  };
};
