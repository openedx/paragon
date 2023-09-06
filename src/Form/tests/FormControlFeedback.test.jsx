import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FormControlFeedback from '../FormControlFeedback';
import { FORM_TEXT_TYPES } from '../FormText';
import { FormGroupContext } from '../FormGroupContext';

describe('FormControlFeedback', () => {
  it('renders a form control with an id', () => {
    const getDescriptorProps = jest.fn(() => ({ id: 'descriptor-id' }));
    const contextValue = {
      getDescriptorProps,
    };
    const { getByText } = render(
      <FormGroupContext.Provider value={contextValue}>
        <FormControlFeedback>
          This is feedback
        </FormControlFeedback>
      </FormGroupContext.Provider>,
    );
    const FeedbackNode = getByText('This is feedback');
    expect(FeedbackNode).toBeInTheDocument();
    expect(getDescriptorProps).toHaveBeenCalled();
    expect(FeedbackNode.parentElement).toHaveAttribute('id', 'descriptor-id');
  });

  it('renders with a default icon for a variant', () => {
    const { getByTestId } = render(
      <FormControlFeedback data-testid={FORM_TEXT_TYPES.VALID} type={FORM_TEXT_TYPES.VALID}>
        This is feedback
      </FormControlFeedback>,
    );
    expect(getByTestId(FORM_TEXT_TYPES.VALID)).toBeInTheDocument();
  });

  it('renders with a custom icon', () => {
    const customIcon = <custom-icon>!</custom-icon>;
    const { getByText } = render(
      <FormControlFeedback icon={customIcon}>
        This is feedback
      </FormControlFeedback>,
    );
    expect(getByText('!')).toBeInTheDocument();
  });
});
