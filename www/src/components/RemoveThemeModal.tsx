import type { FC } from 'react';
import { useRef, useEffect } from 'react';
import {
  Button,
  ActionRow,
  AlertModal,
} from '~paragon-react';

interface RemoveThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  themeName: string;
}

const RemoveThemeModal: FC<RemoveThemeModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  themeName,
}) => {
  const confirmButtonRef = useRef<HTMLButtonElement>(null);

  // Focus the confirm button when the modal opens
  useEffect(() => {
    if (isOpen && confirmButtonRef.current) {
      // Delay focus to ensure modal is fully rendered and accessible
      const timeout = setTimeout(() => {
        confirmButtonRef.current?.focus();
      }, 0);

      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [isOpen]);

  return (
    <AlertModal
      isOpen={isOpen}
      onClose={onClose}
      title="Remove Custom Theme"
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
            Remove
          </Button>
        </ActionRow>
      )}
    >
      Are you sure you want to remove &ldquo;{themeName}&rdquo;? This action cannot be undone.
    </AlertModal>
  );
};

export default RemoveThemeModal;
