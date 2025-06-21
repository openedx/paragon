import { useToggle } from '~paragon-react';

export const useResetModal = (
  resetThemes: () => void,
  onResetComplete?: () => void,
) => {
  const [showResetConfirm, openResetConfirm, closeResetConfirm] = useToggle(false);

  const handleResetConfirm = () => {
    resetThemes();
    closeResetConfirm();
    if (onResetComplete) {
      onResetComplete();
      setTimeout(() => {
        onResetComplete();
      }, 0);
    }
  };

  return {
    showResetConfirm,
    openResetConfirm,
    closeResetConfirm,
    handleResetConfirm,
  };
};
