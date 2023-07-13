import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import Toast from '.';

/* eslint-disable-next-line react/prop-types */
function ToastWrapper({ children, ...props }) {
  return (
    <IntlProvider locale="en">
      <Toast {...props}>
        {children}
      </Toast>
    </IntlProvider>
  );
}

describe('<Toast />', () => {
  const onCloseHandler = () => {};
  const props = {
    onClose: onCloseHandler,
    show: true,
  };
  it('renders optional action as link', () => {
    render(
      <ToastWrapper
        {...props}
        action={{
          label: 'Optional action',
          href: '#',
        }}
      >
        Success message.
      </ToastWrapper>,
    );

    const toastLink = screen.getByRole('button', { name: 'Optional action' });
    expect(toastLink).toBeTruthy();
  });
  it('renders optional action as button', () => {
    render(
      <ToastWrapper
        {...props}
        action={{
          label: 'Optional action',
          onClick: () => {},
        }}
      >
        Success message.
      </ToastWrapper>,
    );
    const toastButton = screen.getByRole('button', { name: 'Optional action' });
    expect(toastButton.className).toContain('btn');
  });
  it('autohide is set to false on onMouseOver and true on onMouseLeave', () => {
    render(
      <ToastWrapper data-testid="toast" {...props}>
        Success message.
      </ToastWrapper>,
    );
    const toast = screen.getByTestId('toast');
    fireEvent.mouseOver(toast);
    setTimeout(() => {
      expect(screen.getByText('Success message.')).toEqual(true);
      expect(toast).toHaveLength(1);
    }, 6000);
    fireEvent.mouseLeave(toast);
    setTimeout(() => {
      expect(screen.getByText('Success message.')).toEqual(false);
      expect(toast).toHaveLength(1);
    }, 6000);
  });
  it('autohide is set to false onFocus and true onBlur', () => {
    render(
      <ToastWrapper data-testid="toast" {...props}>
        Success message.
      </ToastWrapper>,
    );
    const toast = screen.getByTestId('toast');
    fireEvent.focus(toast);
    setTimeout(() => {
      expect(screen.getByText('Success message.')).toEqual(true);
      expect(toast).toHaveLength(1);
    }, 6000);
    fireEvent.blur(toast);
    setTimeout(() => {
      expect(screen.getByText('Success message.')).toEqual(false);
      expect(toast).toHaveLength(1);
    }, 6000);
  });
});
