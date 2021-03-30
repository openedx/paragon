import React from 'react';
import { mount } from 'enzyme';

import FormText, { resolveTextType, FORM_TEXT_TYPES, FORM_TEXT_ICONS } from '../FormText';

describe('FormText', () => {
  it('renders with a default icon for a variant', () => {
    const wrapper = mount((
      <FormText type={FORM_TEXT_TYPES.VALID}>
        This is feedback
      </FormText>
    ));
    expect(wrapper.exists(FORM_TEXT_ICONS[FORM_TEXT_TYPES.VALID])).toBe(true);
  });

  it('renders with a custom icon', () => {
    const customIcon = <custom-icon>!</custom-icon>;
    const wrapper = mount((
      <FormText icon={customIcon}>
        This is feedback
      </FormText>
    ));
    expect(wrapper.exists('custom-icon')).toBe(true);
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
