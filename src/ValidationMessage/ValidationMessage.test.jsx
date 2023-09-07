import React from 'react';
import { render, screen } from '@testing-library/react';

import ValidationMessage from '.';
import Variant from '../utils/constants';

const dangerVariant = {
  status: Variant.status.DANGER,
};
const id = 'error-input1';
const invalidMessage = 'This is invalid!';
const variant = {
  status: Variant.status.INFO,
};
const variantIconDescription = 'Error';

const baseProps = {
  className: '',
  id,
  isValid: true,
  invalidMessage,
  variant,
  variantIconDescription,
};

describe('ValidationMessage', () => {
  it('renders', () => {
    render(<ValidationMessage {...baseProps} />);
    const feedback = screen.getByTestId('validation-message');
    expect(feedback).toBeTruthy();
    expect(feedback.className).toContain('invalid-feedback-nodanger');
    expect(feedback.getAttribute('aria-live')).toBe('polite');
    expect(feedback.textContent).toBe('');
    expect(feedback.getAttribute('id')).toBe(id);
  });

  it('renders invalidMessage when isValid is false', () => {
    render(<ValidationMessage {...baseProps} isValid={false} />);
    const feedback = screen.getByTestId('validation-message');
    expect(feedback.textContent).toBe(invalidMessage);
  });

  it('renders with danger variant when isValid is false and variant is DANGER', () => {
    render(
      <ValidationMessage
        {...baseProps}
        isValid={false}
        variant={dangerVariant}
      />,
    );
    const feedback = screen.getByTestId('validation-message');
    expect(feedback.className).not.toBe('invalid-feedback-nodanger');
    expect(feedback.textContent).toBe(`${variantIconDescription}${invalidMessage}`);
    const icon = feedback.querySelector('.fa-exclamation-circle');
    expect(icon).toBeTruthy();
  });
});
