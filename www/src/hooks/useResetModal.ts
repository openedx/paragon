import { useToggle } from '~paragon-react';

export const useResetModal = (resetThemes: () => void) => {
  const [showResetConfirm, openResetConfirm, closeResetConfirm] = useToggle(false);

  const handleResetConfirm = () => {
    resetThemes();
    closeResetConfirm();
  };

  return {
    showResetConfirm,
    openResetConfirm,
    closeResetConfirm,
    handleResetConfirm,
  };
};
