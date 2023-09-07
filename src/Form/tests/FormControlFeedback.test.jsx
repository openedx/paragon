import React from 'react';
import { render, screen } from '@testing-library/react';

import FormControlFeedback from '../FormControlFeedback';
import { FORM_TEXT_TYPES } from '../FormText';
import { FormGroupContext } from '../FormGroupContext';

const THIS_IS_FEEDBACK = 'This is feedback';

describe('FormControlFeedback', () => {
  it('renders a form control with an id', () => {
    const getDescriptorProps = jest.fn(() => ({ id: 'descriptor-id' }));
    const contextValue = {
      getDescriptorProps,
    };
    render(
      <FormGroupContext.Provider value={contextValue}>
        <FormControlFeedback>
          {THIS_IS_FEEDBACK}
        </FormControlFeedback>
      </FormGroupContext.Provider>,
    );
    const FeedbackNode = screen.getByText(THIS_IS_FEEDBACK);
    expect(FeedbackNode).toBeInTheDocument();
    expect(getDescriptorProps).toHaveBeenCalled();
    expect(FeedbackNode.parentElement).toHaveAttribute('id', 'descriptor-id');
  });

  it('renders with a default icon for a variant', () => {
    render(
      <FormControlFeedback data-testid={FORM_TEXT_TYPES.VALID} type={FORM_TEXT_TYPES.VALID}>
        {THIS_IS_FEEDBACK}
      </FormControlFeedback>,
    );
    expect(screen.getByTestId(FORM_TEXT_TYPES.VALID)).toBeInTheDocument();
  });

  it('renders with a custom icon', () => {
    const customIcon = <custom-icon>!</custom-icon>;
    render(
      <FormControlFeedback icon={customIcon}>
        {THIS_IS_FEEDBACK}
      </FormControlFeedback>,
    );
    expect(screen.getByText('!')).toBeInTheDocument();
  });
});
