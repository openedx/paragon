import React from 'react';
import { render, screen } from '@testing-library/react';

import FormText, { resolveTextType, FORM_TEXT_TYPES } from '../FormText';

describe('FormText', () => {
  it('renders with a default icon for a variant', () => {
    render(
      <FormText data-testid={FORM_TEXT_TYPES.VALID} type={FORM_TEXT_TYPES.VALID}>
        This is feedback
      </FormText>,
    );
    const icon = screen.getByTestId(`${FORM_TEXT_TYPES.VALID}`);
    expect(icon).toBeInTheDocument();
  });

  it('renders with a custom icon', () => {
    const customIcon = <custom-icon>!</custom-icon>;
    render(
      <FormText data-testid="form-text-custom-icon" icon={customIcon}>
        This is feedback
      </FormText>,
    );
    const icon = screen.getByTestId('form-text-custom-icon');
    expect(icon).toBeInTheDocument();
  });
});

describe('resolveTextType', () => {
  it('resolves to VALID when is valid is set', () => {
    const result = resolveTextType({ isValid: true });
    expect(result).toBe(FORM_TEXT_TYPES.VALID);
  });

  it('resolves to INVALID when is invalid is set', () => {
    const result = resolveTextType({ isInvalid: true });
    expect(result).toBe(FORM_TEXT_TYPES.INVALID);
  });

  it('resolves to VALID when is valid and invalid are set', () => {
    const result = resolveTextType({ isValid: true, isInvalid: true });
    expect(result).toBe(FORM_TEXT_TYPES.VALID);
  });

  it('resolves to DEFAULT when is valid and invalid are false', () => {
    const result = resolveTextType({ isValid: false, isInvalid: false });
    expect(result).toBe(FORM_TEXT_TYPES.DEFAULT);
  });
});
