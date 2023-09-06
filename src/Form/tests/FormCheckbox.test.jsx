import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FormCheckbox from '../FormCheckbox';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';

describe('FormCheckbox', () => {
  const handleChange = jest.fn();
  const handleFocus = jest.fn();
  const handleBlur = jest.fn();

  it('renders an input with a name and value', () => {
    const { getByLabelText } = render(
      <FormCheckbox
        value="green"
        name="color"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        description="Describe green"
      >
        Green
      </FormCheckbox>,
    );

    const inputNode = getByLabelText('Green');

    expect(inputNode).toBeInTheDocument();
    expect(inputNode.getAttribute('name')).toBe('color');
  });

  it('has an associated label and description', () => {
    const { getByLabelText, getByText } = render(
      <FormCheckbox
        value="green"
        name="color"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        description="Describe green"
      >
        Green
      </FormCheckbox>,
    );

    const inputNode = getByLabelText('Green');
    const describerNode = getByText('Describe green');

    expect(inputNode).toBeInTheDocument();
    expect(describerNode).toBeInTheDocument();
  });

  it('calls the change handler', () => {
    const { getByLabelText } = render(
      <FormCheckbox
        value="green"
        name="color"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        description="Describe green"
      >
        Green
      </FormCheckbox>,
    );

    const inputNode = getByLabelText('Green');
    fireEvent.change(inputNode, { target: { value: 'green' } });

    waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: 'green' }),
          type: 'change',
        }),
      );
    });
  });

  it('calls the focus handler', () => {
    const { getByLabelText } = render(
      <FormCheckbox
        value="green"
        name="color"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        description="Describe green"
      >
        Green
      </FormCheckbox>,
    );

    const inputNode = getByLabelText('Green');
    fireEvent.focus(inputNode);

    expect(handleFocus).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'green' }),
        type: 'focus',
      }),
    );
  });

  it('calls the blur handler', () => {
    const { getByLabelText } = render(
      <FormCheckbox
        value="green"
        name="color"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        description="Describe green"
      >
        Green
      </FormCheckbox>,
    );

    const inputNode = getByLabelText('Green');
    fireEvent.blur(inputNode);

    expect(handleBlur).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'green' }),
        type: 'blur',
      }),
    );
  });
});

describe('FormCheckbox with FormGroup', () => {
  const handleChange = jest.fn();
  const handleFocus = jest.fn();
  const handleBlur = jest.fn();

  it('renders a group with a label', () => {
    const { getByText } = render(
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

    const groupNode = getByText('Group Label');
    expect(groupNode).toBeInTheDocument();
  });
});
