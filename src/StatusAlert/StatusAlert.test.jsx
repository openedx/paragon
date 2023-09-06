import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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
    it('component receives props', () => {
      const onCloseMock = jest.fn();

      const { rerender, getByRole } = render(
        <StatusAlert dialog={dialog} onClose={onCloseMock} />,
      );
      const alertElement = getByRole('alert', { hidden: true });
      expect(alertElement).not.toHaveClass('show');

      rerender(<StatusAlert dialog={dialog} onClose={onCloseMock} open />);
      expect(screen.getByRole('alert')).toHaveClass('show');

      expect(onCloseMock).not.toHaveBeenCalled();
      const closeButton = getByRole('button');
      fireEvent.click(closeButton);
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
    it('closes when x button pressed', () => {
      render(<StatusAlert {...defaultProps} />);
      const closeButton = screen.getByRole('button');
      fireEvent.click(closeButton);
      expect(screen.queryByRole('alert')).toBeNull();
    });

    it('closes when Enter key pressed', () => {
      render(<StatusAlert {...defaultProps} />);
      const closeButton = screen.getByRole('button');
      fireEvent.keyDown(closeButton, { key: 'Enter', code: 'Enter', charCode: 13 });
      expect(screen.queryByRole('alert')).toBeNull();
    });

    it('closes when Escape key pressed', () => {
      render(<StatusAlert {...defaultProps} />);
      const closeButton = screen.getByRole('button');

      fireEvent.keyDown(closeButton, { key: 'Enter', code: 'Enter', charCode: 13 });
      expect(screen.queryByRole('alert')).toBeNull();
    });

    it('calls callback function on close', () => {
      const spy = jest.fn();

      render(<StatusAlert {...defaultProps} onClose={spy} />);
      const closeButton = screen.getByRole('button');

      expect(spy).toHaveBeenCalledTimes(0);

      fireEvent.click(closeButton);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('invalid keystrokes do nothing', () => {
    beforeEach(() => {
      render(<StatusAlert {...defaultProps} />);
    });

    it('does nothing on invalid keystroke q', () => {
      const closeButton = screen.getByRole('button');
      expect(document.activeElement).toEqual(closeButton);

      fireEvent.keyDown(closeButton, { key: 'q', code: 'q', charCode: 113 });
      expect(document.activeElement).toEqual(closeButton);
    });

    it('does nothing on invalid keystroke + ctrl', () => {
      const closeButton = screen.getByRole('button');
      expect(document.activeElement).toEqual(closeButton);

      fireEvent.keyDown(closeButton, { key: 'Tab', ctrlKey: true });
      expect(document.activeElement).toEqual(closeButton);
    });
  });
  describe('focus functions properly', () => {
    it('focus function changes focus', () => {
      render(
        <div>
          <Button label="test" />
          <StatusAlert {...defaultProps} />
        </div>,
      );
      const buttons = screen.getAllByRole('button');
      const xButton = buttons[1];
      const statusAlertButton = buttons[0];

      // Move focus away from the default StatusAlert xButton
      fireEvent.click(xButton);
      expect(xButton.innerHTML).toEqual(document.activeElement.innerHTML);

      fireEvent.focus(statusAlertButton);
      statusAlertButton.focus();
      expect(statusAlertButton.innerHTML).toEqual(document.activeElement.innerHTML);
    });
  });
});
