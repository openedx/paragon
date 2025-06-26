import React, { useRef, useEffect } from 'react';
import {
  Button,
  ActionRow,
  AlertModal,
} from '~paragon-react';

interface ResetThemesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ResetThemesModal: React.FC<ResetThemesModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const confirmButtonRef = useRef<HTMLButtonElement>(null);

  // Focus the confirm button when the modal opens
  useEffect(() => {
    if (isOpen && confirmButtonRef.current) {
      confirmButtonRef.current.focus();
    }
  }, [isOpen]);

  return (
    <AlertModal
      isOpen={isOpen}
      onClose={onClose}
      title="Reset Custom Themes"
      variant="danger"
      footerNode={(
        <ActionRow>
          <Button variant="tertiary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={onConfirm}
            ref={confirmButtonRef}
          >
            Confirm
          </Button>
        </ActionRow>
      )}
    >
      Are you sure you want to remove all custom themes? This action cannot be undone.
    </AlertModal>
  );
};

export default ResetThemesModal;
