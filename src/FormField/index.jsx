import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Input, FormControl, InputText, InputSelect, InputTextarea } from '..';
// 'input', 'textarea', 'select', /
// overlays
const InputLeadingDecorator = ({ children }) => (
  <div className="pgn__input-group-prepend">
    {children}
  </div>
);
const InputTrailingDecorator = ({ children }) => (
  <div className="pgn__input-group-append">
    {children}
  </div>
);

const InputFloatingLabel = ({ children }) => (
  <div className="pgn__input-group-floating-label">
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
];

const isInputComponent = (child) => validInputChildren.includes(child.type.name);

/**
  * Decorates a textual input.
  */
const InputDecoratorGroup = ({ children, className, ...props }) => {
  let hasLeadingDecorator = false;
  let hasTrailingDecorator = false;
  const [inputHasFocus, setInputHasFocus] = React.useState(false);
  const [inputHasValue, setInputHasValue] = React.useState(false);


  React.Children.forEach(children, (child) => {
    if (childIs(child, InputLeadingDecorator)) {
      hasLeadingDecorator = true;
    }
    if (childIs(child, InputTrailingDecorator)) {
      hasTrailingDecorator = true;
    }
  });

  // validInputChildren
  // const sortedChildren = React.Children.toArray(children).sort(sortInputDecoratorChildren);
  const sortedChildren = React.Children.map(children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (React.isValidElement(child) && isInputComponent(child)) {
      return React.cloneElement(child, {
        onFocus: () => setInputHasFocus(true),
        onBlur: () => setInputHasFocus(false),
      });
    }
    return child;
  });

  return (
    <div
      className={classNames(
        'pgn__input-group',
        {
          'has-prepended-node': hasLeadingDecorator,
          'has-appended-node': hasTrailingDecorator,
          'has-focus': inputHasFocus,
          'has-value': inputHasValue,

        },
        className,
      )}
      {...props}
    >
      {sortedChildren}
    </div>
  );
};


export {
  InputDecoratorGroup,
  InputLeadingDecorator,
  InputTrailingDecorator,
  InputFloatingLabel,
};