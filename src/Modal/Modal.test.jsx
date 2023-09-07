import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Modal from '.';
import { Button } from '..';
import Variant from '../utils/constants';

const modalOpen = (isOpen, container) => {
  if (!isOpen) {
    expect(container.getByTestId('modal').classList).not.toContain('d-block');
    expect(container.getByTestId('modal').classList).not.toContain('show');
    expect(container.getByTestId('modal').classList).toContain('fade');
    expect(container.queryByTestId('modal-backdrop').classList).not.toContain('modal-backdrop');
  } else {
    expect(container.getByTestId('modal').classList).toContain('d-block');
    expect(container.getByTestId('modal').classList).toContain('show');
    expect(container.queryByTestId('modal').classList).not.toContain('fade');
    expect(container.queryByTestId('modal-backdrop').classList).toContain('modal-backdrop');
  }
};

const title = 'Modal title';
const body = 'Modal body';
const defaultProps = {
  title,
  body,
  open: true,
  onClose: () => { },
};
const closeText = 'GO AWAY!';

describe('<Modal />', () => {
  describe('correct rendering', () => {
    const buttons = [
      <Button.Deprecated buttonType="primary">Blue button!</Button.Deprecated>,
      {
        label: 'Red button!',
        buttonType: 'danger',
      },
      <Button.Deprecated buttonType="success">Green button!</Button.Deprecated>,
    ];

    it('renders default buttons', () => {
      render(<Modal {...defaultProps} />);
      const modalTitle = screen.getByText(title);
      const modalBody = screen.getByText(body);

      expect(modalTitle).toBeInTheDocument();
      expect(modalBody).toBeInTheDocument();
      expect(screen.queryAllByRole('button')).toHaveLength(2);
    });

    it('renders custom buttons', () => {
      render(<Modal {...defaultProps} buttons={buttons} />);
      expect(screen.queryAllByRole('button')).toHaveLength(buttons.length + 2);
    });

    it('renders Warning Variant', () => {
      render(
        <Modal {...defaultProps} variant={{ status: Variant.status.WARNING }} />,
      );

      const modalBody = screen.getByTestId('modal-body');

      expect(modalBody.firstChild.classList).toContain('container-fluid');
      expect(screen.getByText(body)).toBeInTheDocument();

      const icon = screen.getByTestId('modal-icon').firstChild;
      expect(icon.classList).toContain('fa-exclamation-triangle');
      expect(icon.classList).toContain('fa-3x');
      expect(icon.classList).toContain('text-warning');
    });

    it('renders invalid Variant properly', () => {
      render(<Modal {...defaultProps} variant={{ status: 'foo' }} />);
      const modalTitle = screen.getByText(title);
      const modalBody = screen.getByText(body);

      expect(modalTitle).toBeInTheDocument();
      expect(modalBody).toBeInTheDocument();
      expect(screen.queryAllByRole('button')).toHaveLength(2);
    });

    it('render of the header close button is optional', () => {
      render(<Modal {...defaultProps} renderHeaderCloseButton={false} />);
      const modalHeaderBtn = screen.queryByTestId('modal-header-btn');
      const modalFooterBtn = screen.getByTestId('modal-footer-btn');

      expect(modalHeaderBtn).not.toBeInTheDocument();
      expect(modalFooterBtn).toBeInTheDocument();
    });

    it('render of the default footer close button is optional', () => {
      render(<Modal {...defaultProps} renderDefaultCloseButton={false} />);
      const modalHeaderBtn = screen.getByTestId('modal-header-btn');
      const modalFooterBtn = screen.queryByTestId('modal-footer-btn');

      expect(modalHeaderBtn).toBeInTheDocument();
      expect(modalFooterBtn).not.toBeInTheDocument();
    });

    it('renders custom close button string', () => {
      render(<Modal {...defaultProps} closeText={closeText} />);
      const modalFooterBtn = screen.getByTestId('modal-footer-btn');
      expect(modalFooterBtn).toBeInTheDocument();
      expect(modalFooterBtn).toHaveTextContent(closeText);
    });

    it('renders custom close button element', () => {
      const closeElem = <span className="is-close-text">{closeText}</span>;
      render(<Modal {...defaultProps} closeText={closeElem} />);
      const modalFooterBtn = screen.getByTestId('modal-footer-btn');

      expect(modalFooterBtn).toBeInTheDocument();
      expect(modalFooterBtn.firstChild.classList).toContain('is-close-text');
      expect(modalFooterBtn.firstChild).toHaveTextContent(closeText);
    });

    it('renders with IE11-specific styling when IE11 is detected', () => {
      const { MSInputMethodContext } = global;
      const { documentMode } = global.document;

      // mimic IE11
      global.MSInputMethodContext = true;
      global.document.documentMode = true;
      render(<Modal {...defaultProps} />);
      const modal = screen.queryByTestId('modal');
      expect(modal.classList).toContain('is-ie11');

      global.MSInputMethodContext = MSInputMethodContext;
      global.document.documentMode = documentMode;
    });

    it('renders without IE11-specific styling when IE11 is not detected', () => {
      const { MSInputMethodContext } = global;
      const { documentMode } = global.document;

      // mimic non-IE11 browser
      global.MSInputMethodContext = false;
      global.document.documentMode = false;
      render(<Modal {...defaultProps} />);
      const modal = screen.queryByTestId('modal');
      expect(modal).not.toContain('is-ie11');

      global.MSInputMethodContext = MSInputMethodContext;
      global.document.documentMode = documentMode;
    });
  });

  describe('props received correctly', () => {
    it('component receives props', () => {
      const { rerender } = render(<Modal {...defaultProps} open={false} />);

      modalOpen(false, screen);
      rerender(<Modal {...defaultProps} open />);
      modalOpen(true, screen);
    });

    it('component receives props and ignores prop change', () => {
      const { rerender } = render(<Modal {...defaultProps} />);

      modalOpen(true, screen);
      rerender(<Modal {...defaultProps} title="Changed modal title" />);
      modalOpen(true, screen);
    });

    it('throws an error when an invalid parentSelector prop is passed', () => {
      expect(() => render(
        <Modal
          {...defaultProps}
          parentSelector=".this-selector-does-not-exist"
        />,
      )).toThrow('Modal received invalid parentSelector: .this-selector-does-not-exist, no matching element found');
    });
  });

  describe('close functions properly', () => {
    it('closes when x button pressed', () => {
      render(<Modal {...defaultProps} />);

      modalOpen(true, screen);
      fireEvent.click(screen.queryAllByRole('button')[0]);
      modalOpen(false, screen);
    });

    it('closes when Close button pressed', () => {
      render(<Modal {...defaultProps} />);

      modalOpen(true, screen);
      fireEvent.click(screen.queryAllByRole('button')[1]);
      modalOpen(false, screen);
    });

    it('calls callback function on close', () => {
      const spy = jest.fn();
      render(<Modal {...defaultProps} onClose={spy} />);

      expect(spy).toHaveBeenCalledTimes(0);

      // press X button
      fireEvent.click(screen.queryAllByRole('button')[0]);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('reopens after closed', () => {
      const { rerender } = render(<Modal {...defaultProps} />);

      modalOpen(true, screen);
      fireEvent.click(screen.queryAllByRole('button')[0]);
      modalOpen(false, screen);
      rerender(<Modal {...defaultProps} open />);
      modalOpen(true, screen);
    });
  });

  describe('focus changes correctly', () => {
    it('has correct initial focus', () => {
      render(<Modal {...defaultProps} />);
      const buttons = screen.queryAllByRole('button');
      expect(buttons[0]).toHaveFocus();
    });

    it('has reset focus after close and reopen', () => {
      const { rerender } = render(<Modal {...defaultProps} />);
      const buttons = screen.queryAllByRole('button');
      expect(buttons[0]).toHaveFocus();
      rerender(<Modal {...defaultProps} open={false} />);
      modalOpen(false, screen);
      rerender(<Modal {...defaultProps} open />);
      modalOpen(true, screen);
      expect(buttons[0]).toHaveFocus();
    });

    it('has focus on input in modal body', () => {
      const { getByTestId } = render(
        <Modal
          {...defaultProps}
          open
          renderDefaultCloseButton={false}
          renderHeaderCloseButton={false}
          body={<div><input data-testid="modal-input" /></div>}
        />,
      );
      const input = getByTestId('modal-input');
      expect(input).toHaveFocus();
    });

    it('has focus on `.modal-content` when nothing else is tabbable', () => {
      const { getByTestId } = render(
        <Modal
          {...defaultProps}
          renderDefaultCloseButton={false}
          renderHeaderCloseButton={false}
        />,
      );
      const modalContent = getByTestId('modal-content');
      expect(modalContent).toHaveFocus();
    });
  });
});
