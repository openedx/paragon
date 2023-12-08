import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

const defaultProps = {
  label: 'Click me!',
};

describe('<Button />', () => {
  it('renders', () => {
    const { getByText } = render(<Button {...defaultProps} />);
    const button = getByText(defaultProps.label);
    expect(button).toBeInTheDocument();
  });

  it('puts focus on button on click', async () => {
    const { getByText } = render(<Button {...defaultProps} />);
    const button = getByText(defaultProps.label);

    expect(button).not.toHaveFocus();
    userEvent.click(button);
    await waitFor(() => {
      expect(button).toHaveFocus();
    });
  });

  it('calls onClick prop on click', async () => {
    const onClickSpy = jest.fn();
    const { getByText } = render(<Button {...defaultProps} onClick={onClickSpy} />);
    const button = getByText(defaultProps.label);

    userEvent.click(button);
    await waitFor(() => {
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });
});
