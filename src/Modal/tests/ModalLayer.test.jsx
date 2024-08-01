import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ModalLayer from '../ModalLayer';

/* eslint-disable react/prop-types */
jest.mock('../Portal', () => function PortalMock(props) {
  const { children, ...otherProps } = props;
  return (
    <paragon-portal {...otherProps}>
      {children}
    </paragon-portal>
  );
});

jest.mock('react-focus-on', () => ({
  FocusOn: (props) => {
    const { children, ...otherProps } = props;
    return (
      <focus-on data-testid="focus-on" {...otherProps}>{children}</focus-on>
    );
  },
}));

function Dialog() {
  return (
    <div role="dialog" aria-label="A dialog">
      A dialog.
    </div>
  );
}

describe('<ModalLayer />', () => {
  describe('when isOpen', () => {
    const isOpen = true;
    const closeFn = jest.fn();

    it('renders the dialog and a modal context provider', () => {
      render(
        <ModalLayer isOpen={isOpen} onClose={closeFn}>
          <Dialog />
        </ModalLayer>,
      );

      const dialog = screen.getByRole('dialog', { name: 'A dialog' });
      expect(dialog).toBeInTheDocument();
    });

    it('renders a focus-on component with appropriate props', () => {
      render(
        <ModalLayer isOpen={isOpen} onClose={closeFn}>
          <Dialog />
        </ModalLayer>,
      );

      const focusOn = screen.getByTestId('focus-on');
      expect(focusOn).toBeInTheDocument();
      expect(focusOn).toHaveAttribute('scrolllock', 'true');
      expect(focusOn).toHaveAttribute('enabled', 'true');
    });
  });

  test('when isOpen is false the dialog is not rendered', () => {
    render(
      <ModalLayer isOpen={false} onClose={jest.fn()}>
        <Dialog />
      </ModalLayer>,
    );

    const dialog = screen.queryByRole('dialog', { name: 'A dialog' });
    expect(dialog).not.toBeInTheDocument();
  });

  describe('Backdrop', () => {
    it('closes a non-blocking modal layer when clicked', async () => {
      const closeFn = jest.fn();
      render(
        <ModalLayer isOpen onClose={closeFn} isBlocking={false}>
          <Dialog />
        </ModalLayer>,
      );

      const backdrop = screen.getByTestId('modal-backdrop');
      await userEvent.click(backdrop);
      expect(closeFn).toHaveBeenCalled();
    });

    it('does not close a blocking modal layer when clicked', async () => {
      const closeFn = jest.fn();
      render(
        <ModalLayer isOpen onClose={closeFn} isBlocking>
          <Dialog />
        </ModalLayer>,
      );

      const backdrop = screen.getByTestId('modal-backdrop');
      await userEvent.click(backdrop);
      expect(closeFn).not.toHaveBeenCalled();
    });
  });
});
