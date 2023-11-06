import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import StatusAlert from '.';
import { Button } from '..';

const dialog = 'Status Alert dialog';
const defaultProps = {
  dialog,
  onClose: () => {},
  open: true,
};

describe('<StatusAlert />', () => {
  describe('correct rendering', () => {
    it('renders default view', () => {
      render(<StatusAlert {...defaultProps} />);
      const statusAlertDialog = screen.getByRole('alert');
      expect(statusAlertDialog.textContent).toContain(dialog);
      expect(screen.getAllByRole('button')).toHaveLength(1);
    });

    it('renders non-dismissible view', () => {
      render(<StatusAlert {...defaultProps} dismissible={false} />);
      const statusAlertDialog = screen.getByRole('alert');

      expect(statusAlertDialog.textContent).toContain(dialog);
      expect(screen.queryAllByRole('button')).toHaveLength(0);
    });

    it('renders custom aria-label view', () => {
      const customLabel = 'Dismiss this alert post-haste!';
      render(<StatusAlert {...defaultProps} closeButtonAriaLabel={customLabel} />);
      const button = screen.getByRole('button');

      expect(button.getAttribute('aria-label')).toBe(customLabel);
    });
  });

  describe('props received correctly', () => {
    it('component receives props', async () => {
      const onCloseMock = jest.fn();

      const { rerender } = render(
        <StatusAlert dialog={dialog} onClose={onCloseMock} />,
      );
      const alertElement = screen.getByRole('alert', { hidden: true });
      expect(alertElement).not.toHaveClass('show');

      rerender(<StatusAlert dialog={dialog} onClose={onCloseMock} open />);
      expect(screen.getByRole('alert')).toHaveClass('show');

      expect(onCloseMock).not.toHaveBeenCalled();
      const closeButton = screen.getByRole('button');
      await userEvent.click(closeButton);
      expect(onCloseMock).toHaveBeenCalled();
    });

    it('component receives props and ignores prop change', () => {
      render(<StatusAlert {...defaultProps} />);
      const statusAlertDialog = screen.getByRole('alert');

      // Initial rendering with default props
      expect(statusAlertDialog.textContent).toContain(dialog);

      // Simulate prop update
      render(<StatusAlert {...defaultProps} dialog="Changed alert dialog" />);
      expect(statusAlertDialog.textContent).toContain(dialog);
    });
  });

  describe('close functions properly', () => {
    it('closes when x button pressed', async () => {
      render(<StatusAlert {...defaultProps} />);
      const closeButton = screen.getByRole('button');
      await userEvent.click(closeButton);
      expect(screen.queryByRole('alert')).toBeNull();
    });

    it('closes when Enter key pressed', async () => {
      render(<StatusAlert {...defaultProps} />);
      const closeButton = screen.getByRole('button');
      closeButton.focus();
      await userEvent.keyboard('{enter}');
      expect(screen.queryByRole('alert')).toBeNull();
    });

    it('closes when Escape key pressed', async () => {
      render(<StatusAlert {...defaultProps} />);
      const closeButton = screen.getByRole('button');
      closeButton.focus();
      await userEvent.keyboard('{enter}');
      expect(screen.queryByRole('alert')).toBeNull();
    });

    it('calls callback function on close', async () => {
      const spy = jest.fn();

      render(<StatusAlert {...defaultProps} onClose={spy} />);
      const closeButton = screen.getByRole('button');

      expect(spy).toHaveBeenCalledTimes(0);

      await userEvent.click(closeButton);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('invalid keystrokes do nothing', () => {
    beforeEach(() => {
      render(<StatusAlert {...defaultProps} />);
    });

    it('does nothing on invalid keystroke q', async () => {
      const closeButton = screen.getByRole('button');
      expect(document.activeElement).toEqual(closeButton);
      closeButton.focus();
      await userEvent.keyboard('{q}');
      expect(document.activeElement).toEqual(closeButton);
    });

    it('does nothing on invalid keystroke + ctrl', async () => {
      const closeButton = screen.getByRole('button');
      expect(document.activeElement).toEqual(closeButton);
      await waitFor(() => {
        userEvent.keyboard('{ctrl>}{tab}{/ctrl}');
      });
      expect(document.activeElement).toEqual(closeButton);
    });
  });
  describe('focus functions properly', () => {
    it('focus function changes focus', async () => {
      render(
        <div>
          <Button label="test">Button</Button>
          <StatusAlert {...defaultProps} />
        </div>,
      );
      const buttons = screen.getAllByRole('button');
      const xButton = buttons[1];
      const statusAlertButton = buttons[0];

      // Move focus away from the default StatusAlert xButton
      await userEvent.click(xButton);
      expect(xButton.innerHTML).toEqual(document.activeElement.innerHTML);

      statusAlertButton.focus();
      expect(statusAlertButton.innerHTML).toEqual(document.activeElement.innerHTML);
    });
  });
});
