import React from 'react';
import { FocusOn } from 'react-focus-on';
import { IntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ModalLayer from '../ModalLayer';
import messages from '../messages';

jest.mock('../Portal', () => function PortalMock(props: any) {
  const { children, ...otherProps } = props;
  return (
    // @ts-ignore this fake element. (Property 'paragon-portal' does not exist on type 'JSX.IntrinsicElements')
    <paragon-portal {...otherProps}>{children}</paragon-portal>
  );
});

jest.mock('react-focus-on', () => ({
  FocusOn: jest.fn().mockImplementation((props) => {
    const { children, ...otherProps } = props;
    return (
      // @ts-ignore this fake element. (Property 'focus-on' does not exist on type 'JSX.IntrinsicElements')
      <focus-on data-testid="focus-on" {...otherProps}>{children}</focus-on>
    );
  }),
}));

function Dialog() {
  return (
    <div role="dialog" aria-label="A dialog">
      A dialog.
    </div>
  );
}

describe('<ModalLayer />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when isOpen', () => {
    const isOpen = true;
    const closeFn = jest.fn();

    it('renders the dialog and a modal context provider', () => {
      render(
        <IntlProvider locale="en" messages={{}}>
          <ModalLayer isOpen={isOpen} onClose={closeFn}>
            <Dialog />
          </ModalLayer>
        </IntlProvider>,
      );

      const dialog = screen.getByRole('dialog', { name: 'A dialog' });
      expect(dialog).toBeInTheDocument();
    });

    it('renders a focus-on component with appropriate props', () => {
      render(
        <IntlProvider locale="en" messages={{}}>
          <ModalLayer isOpen={isOpen} onClose={closeFn}>
            <Dialog />
          </ModalLayer>
        </IntlProvider>,
      );

      const focusOn = screen.getByTestId('focus-on');
      expect(focusOn).toBeInTheDocument();
      expect(focusOn).toHaveAttribute('scrolllock', 'true');
      expect(focusOn).toHaveAttribute('enabled', 'true');
    });
  });

  it('when isOpen is false the dialog is not rendered', () => {
    render(
      <IntlProvider locale="en" messages={{}}>
        <ModalLayer isOpen={false} onClose={jest.fn()}>
          <Dialog />
        </ModalLayer>
      </IntlProvider>,
    );

    const dialog = screen.queryByRole('dialog', { name: 'A dialog' });
    expect(dialog).not.toBeInTheDocument();
  });

  describe('Dismiss modal', () => {
    it('closes a non-blocking modal layer when backdrop is clicked', async () => {
      const user = userEvent.setup();
      const closeFn = jest.fn();
      render(
        <IntlProvider locale="en" messages={{}}>
          <ModalLayer isOpen onClose={closeFn} isBlocking={false}>
            <Dialog />
          </ModalLayer>
        </IntlProvider>,
      );
      const backdrop = screen.getByRole('button', { name: messages.closeButtonText.defaultMessage });
      await user.click(backdrop);
      expect(closeFn).toHaveBeenCalled();
    });

    it('should configure FocusOn to close a non-blocking modal layer when Esc key is pressed', () => {
      const closeFn = jest.fn();
      render(
        <IntlProvider locale="en" messages={{}}>
          <ModalLayer isOpen onClose={closeFn} isBlocking={false}>
            <Dialog />
          </ModalLayer>
        </IntlProvider>,
      );
      expect(FocusOn).toHaveBeenCalledWith(
        expect.objectContaining({
          onEscapeKey: closeFn,
        }),
        // note: this 2nd function argument represents the
        // `refOrContext` (in this case, the context value
        // provided by `ModalContextProvider`).
        {},
      );
    });

    it('should not configure FocusOn to close a blocking modal layer when Esc key is pressed', () => {
      const closeFn = jest.fn();
      render(
        <IntlProvider locale="en" messages={{}}>
          <ModalLayer isOpen onClose={closeFn} isBlocking>
            <Dialog />
          </ModalLayer>
        </IntlProvider>,
      );
      expect(FocusOn).toHaveBeenCalledWith(
        expect.objectContaining({
          onEscapeKey: undefined,
        }),
        // note: this 2nd function argument represents the
        // `refOrContext` (in this case, the context value
        // provided by `ModalContextProvider`).
        {},
      );
    });

    it('does not close a blocking modal layer when backdrop is clicked', () => {
      const closeFn = jest.fn();
      render(
        <IntlProvider locale="en" messages={{}}>
          <ModalLayer isOpen onClose={closeFn} isBlocking>
            <Dialog />
          </ModalLayer>
        </IntlProvider>,
      );
      const backdrop = screen.getByRole('button', { name: messages.closeButtonText.defaultMessage });
      userEvent.click(backdrop);
      expect(closeFn).not.toHaveBeenCalled();
    });
  });
});
