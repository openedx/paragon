import React from 'react';
import { render } from '@testing-library/react';
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
    const user = userEvent.setup();
    const { getByText } = render(<Button {...defaultProps} />);
    const button = getByText(defaultProps.label);

    expect(button).not.toHaveFocus();
    await user.click(button);
    expect(button).toHaveFocus();
  });

  it('calls onClick prop on click', async () => {
    const user = userEvent.setup();
    const onClickSpy = jest.fn();
    const { getByText } = render(<Button {...defaultProps} onClick={onClickSpy} />);
    const button = getByText(defaultProps.label);

    await user.click(button);
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
