import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Input, FormControl, InputText, InputSelect, InputTextarea } from '..';
import newId from '../utils/newId';
import useToggle from '../hooks/useToggle';

import { callAllHandlers, useHasValue } from './fieldUtils';


// overlays
const InputLeadingDecorator = ({ children }) => (
  <div className="pgn__input-decorator pgn__input-decorator-leading">
    {children}
  </div>
);
const InputTrailingDecorator = ({ children }) => (
  <div className="pgn__input-decorator pgn__input-decorator-trailing">
    {children}
  </div>
);

const InputFloatingLabel = ({ children, isFloating }) => (
  <div
    className={classNames(
      'pgn__input-group-floating-label',
      {
      'pgn__input-group-floating-label-is-floating': isFloating,
      },
    )}
  >
    <div className="pgn__input-group-floating-label-content">
      <div className="pgn__input-group-floating-label-text">
        {children}
      </div>
    </div>
  </div>
);

const childIs = (child, Component) => child.type.name === Component.name;

const componentsThatShouldComeLast = [
  InputLeadingDecorator.name,
  InputTrailingDecorator.name,
  InputFloatingLabel.name,
];

function sortInputDecoratorChildren(childA, childB) {
  // components that cannot be found have an index of -1: placing them earlier than others
  const indexOfChildA = componentsThatShouldComeLast.indexOf(childA.type.name);
  const indexOfChildB = componentsThatShouldComeLast.indexOf(childB.type.name);
  return indexOfChildA - indexOfChildB;
}

const validInputChildren = [
  // Input.name,
  FormControl.name,
  InputText.name,
  InputSelect.name,
  InputTextarea.name,
  'input',
  'textarea',
  'select',
];

const isInputComponent = (child) => validInputChildren.includes(child.type.name);

/**
  * Decorates a textual input.
  */
const InputDecoratorGroup = ({
  children,
  leadingElement,
  trailingElement,
  isLabelFloating,
  floatingLabel,
  className,
  size,
  ...props
}) => (
  <div
    className={classNames(
      '2pgn__input-group',
      'pgn__input-decorator-group',
      {
        'has-prepended-node': !!leadingElement,
        'has-appended-node': !!trailingElement,
        'has-leading-element': !!leadingElement,
        'has-trailing-element': !!trailingElement,
        'has-floating-label': !!floatingLabel,
        '2pgn__input-group-lg': size === 'lg',
        '2pgn__input-group-sm': size === 'sm',
        'pgn__input-decorator-group-lg': size === 'lg',
        'pgn__input-decorator-group-sm': size === 'sm',
        'float-label': isLabelFloating,
      },
      className,
    )}
    {...props}
  >
    {children}
    {leadingElement && <InputLeadingDecorator>{leadingElement}</InputLeadingDecorator>}
    {trailingElement && <InputTrailingDecorator>{trailingElement}</InputTrailingDecorator>}
    {floatingLabel && <InputFloatingLabel>{floatingLabel}</InputFloatingLabel>}
  </div>
);

export {
  InputDecoratorGroup,
  InputLeadingDecorator,
  InputTrailingDecorator,
  InputFloatingLabel,
};
