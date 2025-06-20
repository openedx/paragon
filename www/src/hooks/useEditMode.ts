import { useRef } from 'react';
import { useToggle } from '~paragon-react';

export const useEditMode = (activeThemeIndex: number) => {
  const [isEditMode, , , toggleEditMode] = useToggle(false);
  const editButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const radioRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleTransitionEnd = () => {
    if (isEditMode) {
      const currentIndex = activeThemeIndex || 0;
      radioRefs.current[currentIndex]?.focus();
    } else {
      editButtonRef.current?.focus();
    }
  };

  return {
    isEditMode,
    toggleEditMode,
    editButtonRef,
    closeButtonRef,
    radioRefs,
    handleTransitionEnd,
  };
};
