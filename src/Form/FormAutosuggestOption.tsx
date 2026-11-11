import React, { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
import classNames from 'classnames';
import MenuItem from '../Menu/MenuItem';

interface FormAutosuggestOptionProps extends Omit<ComponentPropsWithoutRef<'li'>, 'children' | 'className' | 'onClick'> {
  /** Specifies class name to append to the base element. */
  className?: string;
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children?: string;
  /** A click handler for the `FormAutosuggestOption` */
  onClick?: MouseEventHandler<HTMLLIElement>;
}

function FormAutosuggestOption({
  children,
  className,
  onClick,
  ...props
}: FormAutosuggestOptionProps) {
  return (
    <MenuItem
      as="li"
      data-testid="autosuggest-optionitem"
      role="option"
      tabIndex={-1}
      onClick={onClick}
      className={classNames(className, 'dropdown-item')}
      {...props}
    >
      {children}
    </MenuItem>
  );
}

export default FormAutosuggestOption;
