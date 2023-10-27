import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import userEvent from '@testing-library/user-event';

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
  it('autohide is set to false on onMouseOver and true on onMouseLeave', async () => {
    render(
      <ToastWrapper data-testid="toast" {...props}>
        Success message.
      </ToastWrapper>,
    );
    const toast = screen.getByTestId('toast');
    await userEvent.hover(toast);
    setTimeout(() => {
      expect(screen.getByText('Success message.')).toEqual(true);
      expect(toast).toHaveLength(1);
    }, 6000);
    await userEvent.unhover(toast);
    setTimeout(() => {
      expect(screen.getByText('Success message.')).toEqual(false);
      expect(toast).toHaveLength(1);
    }, 6000);
  });
  it('autohide is set to false onFocus and true onBlur', async () => {
    render(
      <ToastWrapper data-testid="toast" {...props}>
        Success message.
      </ToastWrapper>,
    );
    const toast = screen.getByTestId('toast');
    toast.focus();
    setTimeout(() => {
      expect(screen.getByText('Success message.')).toEqual(true);
      expect(toast).toHaveLength(1);
    }, 6000);
    await userEvent.tab();
    setTimeout(() => {
      expect(screen.getByText('Success message.')).toEqual(false);
      expect(toast).toHaveLength(1);
    }, 6000);
  });
});
