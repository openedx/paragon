import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CheckBox from '.';

describe('<CheckBox />', () => {
  it('attributes are set correctly', () => {
    render(<CheckBox name="checkbox" label="check me out!" />);
    const checkbox = screen.getByLabelText('check me out!');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('aria-label changes after click', async () => {
    render(<CheckBox name="checkbox" label="check me out!" />);
    const checkbox = screen.getByLabelText('check me out!');
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(checkbox);
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
    await userEvent.click(checkbox);
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('check that callback function is triggered when clicked', async () => {
    const onChangeSpy = jest.fn();
    render(<CheckBox name="checkbox" label="check me out!" onChange={onChangeSpy} />);
    const checkbox = screen.getByLabelText('check me out!');
    expect(onChangeSpy).toHaveBeenCalledTimes(0);
    await userEvent.click(checkbox);
    expect(onChangeSpy).toHaveBeenCalledTimes(1);
    expect(onChangeSpy).toHaveBeenCalledWith(true, 'checkbox');
    await userEvent.click(checkbox);
    expect(onChangeSpy).toHaveBeenCalledTimes(2);
    expect(onChangeSpy).toHaveBeenCalledWith(false, 'checkbox');
  });

  it('checks if start state can be set to checked', async () => {
    render(<CheckBox name="checkbox" label="I start checked" checked />);
    const checkbox = screen.getByLabelText('I start checked');
    expect(checkbox).toBeChecked();
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('checkbox can be disabled', async () => {
    render(<CheckBox name="checkbox" label="I am disabled" disabled />);
    const checkbox = screen.getByLabelText('I am disabled');
    expect(checkbox).toBeDisabled();
    await userEvent.click(checkbox);
    expect(checkbox).toBeDisabled();
  });

  it('overrides state value when props value changes', () => {
    const { rerender } = render(<CheckBox name="checkbox" label="I start checked" checked />);
    const checkbox = screen.getByLabelText('I start checked');
    expect(checkbox).toBeChecked();
    rerender(<CheckBox name="checkbox" label="I start checked" checked={false} />);
    expect(checkbox).not.toBeChecked();
  });
});
