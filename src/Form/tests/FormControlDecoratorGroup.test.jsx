import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { FormGroupContext } from '../FormGroupContext';
import FormControlDecoratorGroup from '../FormControlDecoratorGroup';
import { FORM_CONTROL_SIZES } from '../constants';

describe('FormControlDecoratorGroup', () => {
  it('renders', () => {
    const { getByText } = render(
      <FormControlDecoratorGroup
        leadingElement="before"
        trailingElement="after"
        floatingLabel="label"
      >
        <span>Form control</span>
      </FormControlDecoratorGroup>,
    );
    expect(getByText('before')).toBeInTheDocument();
    expect(getByText('after')).toBeInTheDocument();
    expect(getByText('label')).toBeInTheDocument();
  });

  it('renders a size reflecting a context', () => {
    const { getByTestId } = render(
      <FormGroupContext.Provider value={{ size: FORM_CONTROL_SIZES.LARGE }}>
        <FormControlDecoratorGroup
          leadingElement="before"
          trailingElement="after"
          floatingLabel="label"
          data-testid="decoration-id"
        >
          <span>Form control</span>
        </FormControlDecoratorGroup>
      </FormGroupContext.Provider>,
    );
    const groupNode = getByTestId('decoration-id');
    expect(groupNode).toBeInTheDocument();
    expect(groupNode.classList).toContain('pgn__form-control-decorator-group-lg');
  });

  it('renders nodes in leading, trailing, and floatLabel elements', () => {
    const beforeNode = <span data-testid="before-node">before</span>;
    const afterNode = <span data-testid="after-node">after</span>;
    const labelNode = <span data-testid="label-node">label</span>;
    const { getByTestId } = render(
      <FormControlDecoratorGroup
        leadingElement={beforeNode}
        trailingElement={afterNode}
        floatingLabel={labelNode}
        data-testid="decoration-id"
      >
        <span>Form control</span>
      </FormControlDecoratorGroup>,
    );
    expect(getByTestId('before-node')).toBeInTheDocument();
    expect(getByTestId('after-node')).toBeInTheDocument();
    expect(getByTestId('label-node')).toBeInTheDocument();
  });
});
