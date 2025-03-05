import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import userEvent from '@testing-library/user-event';

import Toast from '.';

function ToastWrapper({ children, ...props }: React.ComponentProps<typeof Toast>) {
  return (
    <IntlProvider locale="en">
      <Toast {...props}>
        {children}
      </Toast>
    </IntlProvider>
  );
}

describe('<Toast />', () => {
  const onCloseHandler = jest.fn();
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
          onClick: jest.fn(),
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
      <ToastWrapper {...props}>
        Success message.
      </ToastWrapper>,
    );
    const toast = screen.getByRole('alert');
    await userEvent.hover(toast);
    setTimeout(() => {
      expect(screen.getByText('Success message.')).toBeTruthy();
      expect(toast).toHaveLength(1);
    }, 6000);
    await userEvent.unhover(toast);
    setTimeout(() => {
      expect(screen.getByText('Success message.')).toBeTruthy();
      expect(toast).toHaveLength(1);
    }, 6000);
  });
  it('autohide is set to false onFocus and true onBlur', async () => {
    render(
      <ToastWrapper {...props}>
        Success message.
      </ToastWrapper>,
    );
    const toast = screen.getByRole('alert');
    toast.focus();
    setTimeout(() => {
      expect(screen.getByText('Success message.')).toBeTruthy();
      expect(toast).toHaveLength(1);
    }, 6000);
    await userEvent.tab();
    setTimeout(() => {
      expect(screen.getByText('Success message.')).toBeTruthy();
      expect(toast).toHaveLength(1);
    }, 6000);
  });
  it('should contain aria-atomic and aria-live', async () => {
    render(
      <ToastWrapper {...props}>
        Success message.
      </ToastWrapper>,
    );

    const toast = screen.getByRole('alert');

    expect(toast).toHaveAttribute('aria-atomic', 'true');
    expect(toast).toHaveAttribute('aria-live', 'assertive');
  });
});
