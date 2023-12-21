import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import userEvent from '@testing-library/user-event';

import ToastContainer from '../ToastContainer';
import { toast } from '../toast';

jest.useFakeTimers();

function ToastWrapper(props) {
  return (
    <IntlProvider locale="en" messages={{}}>
      <ToastContainer {...props} />
    </IntlProvider>
  );
}

describe('<Toast />', () => {
  const mockOnDismiss = jest.fn();
  const props = {
    onDismiss: mockOnDismiss,
    message: 'Success message.',
    duration: 5000,
  };

  it('renders Toasts when emitted', () => {
    render(<ToastWrapper />);
    act(() => {
      toast({ message: 'Toast 1', duration: 5000 });
    });
    expect(screen.queryByText('Toast 1')).toBeInTheDocument();
  });

  it('removes Toasts after duration', () => {
    render(<ToastWrapper />);
    act(() => {
      toast({ message: 'Toast 2', duration: 5000 });
      jest.advanceTimersByTime(5000);
    });
    expect(screen.queryByText('Toast 2')).not.toBeInTheDocument();
  });

  it('renders multiple toasts', () => {
    render(<ToastWrapper />);

    act(() => {
      toast({ message: 'Toast 1', duration: 5000 });
      toast({ message: 'Toast 2', duration: 5000 });
    });

    expect(screen.queryByText('Toast 1')).toBeInTheDocument();
    expect(screen.queryByText('Toast 2')).toBeInTheDocument();
  });

  it('renders optional action as button', () => {
    render(<ToastWrapper {...props} />);
    act(() => {
      toast({
        actions: [{
          label: 'Optional action',
          onClick: () => {},
        }],
      });
    });

    const toastButton = screen.getByRole('button', { name: 'Optional action' });
    expect(toastButton).toBeInTheDocument();
  });

  it('pauses and resumes timer on hover', async () => {
    render(<ToastWrapper />);
    act(() => {
      toast({ message: 'Hover Test', duration: 5000 });
    });
    const toastElement = screen.getByText('Hover Test');
    await userEvent.hover(toastElement);
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.queryByText('Hover Test')).toBeInTheDocument();

    await userEvent.unhover(toastElement);
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.queryByText('Hover Test')).not.toBeInTheDocument();
  });
});
