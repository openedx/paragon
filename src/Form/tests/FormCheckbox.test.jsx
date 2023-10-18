import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FormCheckbox from '../FormCheckbox';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';

const handleChange = jest.fn();
const handleFocus = jest.fn();
const handleBlur = jest.fn();

function FormCheckboxComponent() {
  return (
    <FormCheckbox
      value="green"
      name="color"
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      description="Describe green"
    >
      Green
    </FormCheckbox>
  );
}

describe('FormCheckbox', () => {
  it('renders an input with a name and value', () => {
    render(FormCheckboxComponent());

    const inputNode = screen.getByLabelText('Green');

    expect(inputNode).toBeInTheDocument();
    expect(inputNode.getAttribute('name')).toBe('color');
  });

  it('has an associated label and description', () => {
    render(FormCheckboxComponent());

    const inputNode = screen.getByLabelText('Green');
    const describerNode = screen.getByText('Describe green');

    expect(inputNode).toBeInTheDocument();
    expect(describerNode).toBeInTheDocument();
  });

  it('calls the change handler', async () => {
    render(FormCheckboxComponent());

    const inputNode = screen.getByLabelText('Green');
    await userEvent.type(inputNode, 'green');

    waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: 'green' }),
          type: 'change',
        }),
      );
    });
  });

  it('calls the focus handler', async () => {
    render(FormCheckboxComponent());

    const inputNode = screen.getByLabelText('Green');
    inputNode.focus();

    expect(handleFocus).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'green' }),
        type: 'focus',
      }),
    );
  });

  it('calls the blur handler', async () => {
    render(FormCheckboxComponent());

    const inputNode = screen.getByLabelText('Green');
    inputNode.focus();
    await userEvent.tab();

    expect(handleBlur).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'green' }),
        type: 'blur',
      }),
    );
  });
});

describe('FormCheckbox with FormGroup', () => {
  it('renders a group with a label', () => {
    render(
      <FormGroup controlId="group-id">
        <FormLabel>Group Label</FormLabel>
        <FormCheckbox
          value="green"
          name="color"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          description="Describe green"
        >
          Green
        </FormCheckbox>
      </FormGroup>,
    );

    const groupNode = screen.getByText('Group Label');
    expect(groupNode).toBeInTheDocument();
  });
});
