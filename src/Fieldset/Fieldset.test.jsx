import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Fieldset from './index';
import Variant from '../utils/constants';

const dangerVariant = {
  status: Variant.status.DANGER,
};
const id = 'input1';
const legend = 'A Fieldset';
const invalidMessage = 'This is invalid!';
const children = 'Input goes here';
const variant = {
  status: Variant.status.INFO,
};
const variantIconDescription = 'Error';

const baseProps = {
  className: '',
  id,
  isValid: true,
  legend,
  invalidMessage,
  variant,
  variantIconDescription,
};

jest.mock('../utils/newId', () => jest.fn().mockReturnValue('fieldset1'));

describe('Fieldset', () => {
  it('renders', () => {
    const { getByTestId, getByText } = render(
      <Fieldset {...baseProps}>{children}</Fieldset>,
    );

    const fieldset = getByTestId('fieldset');
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveClass('is-invalid-nodanger');
    expect(fieldset).toHaveAttribute('aria-describedby', `error-${id}`);

    const legendElem = getByText(legend);
    expect(legendElem).toBeInTheDocument();

    const feedback = getByTestId('validation-message');
    expect(feedback).toHaveAttribute('id', `error-${id}`);
  });

  it('renders with auto-generated id if not specified', () => {
    const props = {
      ...baseProps,
      id: undefined,
    };

    const { getByTestId } = render(<Fieldset {...props} />);
    const feedback = getByTestId('validation-message');
    expect(feedback).toHaveAttribute('id', 'error-fieldset1');
  });

  it('renders invalidMessage when isValid is false', () => {
    const { getByTestId } = render(
      <Fieldset {...baseProps} isValid={false} />,
    );
    const feedback = getByTestId('validation-message');
    expect(feedback).toHaveTextContent(invalidMessage);
  });

  it('renders with danger variant when isValid is false and variant is DANGER', () => {
    const { getByTestId } = render(
      <Fieldset {...baseProps} isValid={false} variant={dangerVariant} />,
    );
    const feedback = getByTestId('validation-message');
    expect(feedback).not.toHaveClass('invalid-feedback-nodanger');
    expect(feedback).toHaveTextContent(invalidMessage);
  });

  it('receives new id when a valid one is passed to props', () => {
    const nextId = 'new-id';

    const { getByTestId } = render(<Fieldset {...baseProps} id={nextId} />);
    const fieldset = getByTestId('fieldset');
    const feedback = getByTestId('validation-message');

    expect(fieldset).toHaveAttribute('aria-describedby', `error-${nextId}`);
    expect(feedback).toHaveAttribute('id', `error-${nextId}`);
  });

  it('auto-generates new id when an invalid one is passed to props', () => {
    const nextId = '';

    const { getByTestId } = render(<Fieldset {...baseProps} id={nextId} />);
    const fieldset = getByTestId('fieldset');
    const feedback = getByTestId('validation-message');

    expect(fieldset).toHaveAttribute(
      'aria-describedby',
      'error-fieldset1',
    );
    expect(feedback).toHaveAttribute('id', 'error-fieldset1');
  });
});
