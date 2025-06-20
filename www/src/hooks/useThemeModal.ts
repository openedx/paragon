import { useState, useRef } from 'react';
import { useToggle } from '~paragon-react';
import { type Theme } from '../types/types';
import { CustomThemesFormRef } from '../components/CustomThemesForm';

interface ThemeData {
  name: string;
  urls: string[];
}

export const useThemeModal = (
  addTheme: (theme: ThemeData) => void,
  updateTheme: (index: number, theme: ThemeData) => void,
  removeTheme: (index: number) => void,
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
    if (editingThemeIndex !== null) {
      removeTheme(editingThemeIndex);
      closeEditModalHandler();
    }
  };

  const handleCancelRemove = () => {
    setShowRemoveConfirm(false);
  };

  const handleAddClick = () => {
    openAddModal();
  };

  const handleAddTheme = (theme: ThemeData) => {
    addTheme(theme);
    closeAddModalHandler();
  };

  const handleEditThemeSave = (theme: ThemeData) => {
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
