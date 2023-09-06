import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FormText, { resolveTextType, FORM_TEXT_TYPES } from '../FormText';

describe('FormText', () => {
  it('renders with a default icon for a variant', () => {
    const { getByTestId } = render(
      <FormText data-testid={FORM_TEXT_TYPES.VALID} type={FORM_TEXT_TYPES.VALID}>
        This is feedback
      </FormText>,
    );
    const icon = getByTestId(`${FORM_TEXT_TYPES.VALID}`);
    expect(icon).toBeInTheDocument();
  });

  it('renders with a custom icon', () => {
    const customIcon = <custom-icon>!</custom-icon>;
    const { getByTestId } = render(
      <FormText data-testid="form-text-custom-icon" icon={customIcon}>
        This is feedback
      </FormText>,
    );
    const icon = getByTestId('form-text-custom-icon');
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
