import React from 'react';
import { render, screen } from '@testing-library/react';

import FormGroup from '../FormGroup';
import FormControl from '../FormControl';
import FormLabel from '../FormLabel';
import FormControlFeedback from '../FormControlFeedback';

jest.mock('react-bootstrap/FormControl', () => {
  const { forwardRef } = jest.requireActual('react');
  return forwardRef((props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <form-control {...otherProps} ref={ref}>
        {children}
      </form-control>
    );
  });
});

function renderFormGroup() {
  return (
    render(
      <FormGroup controlId="my-field">
        <FormLabel>My Field</FormLabel>
        <FormControl data-testid="form-control" />
        <FormControlFeedback>Default help text</FormControlFeedback>
        <FormControlFeedback>Second help text</FormControlFeedback>
      </FormGroup>,
    )
  );
}

describe('FormGroup', () => {
  describe('associate element ids and attributes', () => {
    it('has a form control with the proper id', () => {
      renderFormGroup();
      const formControlNode = screen.getByTestId('form-control');
      expect(formControlNode).toBeInTheDocument();
      expect(formControlNode).toHaveAttribute('id', 'my-field');
    });

    it('has a label with the proper htmlFor value', () => {
      renderFormGroup();
      const labelNode = screen.getByText('My Field');
      expect(labelNode).toBeInTheDocument();
      expect(labelNode).toHaveAttribute('for', 'my-field');
    });

    it('has default description text with a generated id that appears on the form-control', () => {
      renderFormGroup();
      const defaultHelpTextNode = screen.getByText('Default help text').parentElement;
      const formControlNode = screen.getByTestId('form-control');
      expect(defaultHelpTextNode).toBeInTheDocument();
      const id = defaultHelpTextNode.getAttribute('id');
      expect(id).toBeTruthy();
      expect(formControlNode).toHaveAttribute('aria-describedby', expect.stringContaining(id));
    });

    it('has another description text with a generated id that appears on the form-control', () => {
      renderFormGroup();
      const secondHelpTextNode = screen.getByText('Second help text').parentElement;
      const formControlNode = screen.getByTestId('form-control');
      expect(secondHelpTextNode).toBeInTheDocument();
      const id = secondHelpTextNode.getAttribute('id');
      expect(id).toBeTruthy();
      expect(formControlNode).toHaveAttribute('aria-describedby', expect.stringContaining(id));
    });
  });

  it('renders a form control with a generated id', () => {
    render(
      <FormGroup>
        <FormControl data-testid="form-control" />
      </FormGroup>,
    );
    const formControlNode = screen.getByTestId('form-control');
    expect(formControlNode).toBeInTheDocument();
    expect(formControlNode).toHaveAttribute('id', expect.any(String));
  });
});
