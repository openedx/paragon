import { useRef, useCallback } from 'react';
import { useToggle } from '~paragon-react';

export const useEditMode = (activeThemeIndex: number) => {
  const [isEditMode, , , toggleEditMode] = useToggle(false);
  const radioRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOpen = useCallback(() => {
    // Focus management when collapsible opens
    const currentIndex = activeThemeIndex || 0;
    setTimeout(() => {
      radioRefs.current[currentIndex]?.focus();
    }, 100); // Small delay to ensure DOM is updated
  }, [activeThemeIndex]);

  return {
    isEditMode,
    toggleEditMode,
    onOpen: handleOpen,
    radioRefs,
  };
};
