import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormGroupContext } from '../FormGroupContext';
import FormControlDecoratorGroup from '../FormControlDecoratorGroup';
import { FORM_CONTROL_SIZES } from '../constants';

describe('FormControlDecoratorGroup', () => {
  it('renders', () => {
    render(
      <FormControlDecoratorGroup
        leadingElement="before"
        trailingElement="after"
        floatingLabel="label"
      >
        <span>Form control</span>
      </FormControlDecoratorGroup>,
    );
    expect(screen.getByText('before')).toBeInTheDocument();
    expect(screen.getByText('after')).toBeInTheDocument();
    expect(screen.getByText('label')).toBeInTheDocument();
  });

  it('renders a size reflecting a context', () => {
    render(
      <FormGroupContext.Provider value={{ size: FORM_CONTROL_SIZES.LARGE }}>
        <FormControlDecoratorGroup
          leadingElement="before"
          trailingElement="after"
          floatingLabel="label"
          data-testid="form-control-decoration-group"
        >
          <span>Form control</span>
        </FormControlDecoratorGroup>
      </FormGroupContext.Provider>,
    );
    const groupNode = screen.getByTestId('form-control-decoration-group');
    expect(groupNode).toBeInTheDocument();
    expect(groupNode.classList).toContain('pgn__form-control-decorator-group-lg');
  });

  it('renders nodes in leading, trailing, and floatLabel elements', () => {
    const beforeNode = <span data-testid="before-node">before</span>;
    const afterNode = <span data-testid="after-node">after</span>;
    const labelNode = <span data-testid="label-node">label</span>;
    render(
      <FormControlDecoratorGroup
        leadingElement={beforeNode}
        trailingElement={afterNode}
        floatingLabel={labelNode}
      >
        <span>Form control</span>
      </FormControlDecoratorGroup>,
    );
    expect(screen.getByTestId('before-node')).toBeInTheDocument();
    expect(screen.getByTestId('after-node')).toBeInTheDocument();
    expect(screen.getByTestId('label-node')).toBeInTheDocument();
  });
});
