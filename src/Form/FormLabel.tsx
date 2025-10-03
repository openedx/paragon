import React from 'react';
import classNames from 'classnames';
import { useFormGroupContext } from './FormGroupContext';
import { FORM_CONTROL_SIZES } from './constants';

interface Props {
  /** Specifies contents of the component. */
  children: React.ReactNode;
  /** Specifies whether the component should be displayed with inline styling. */
  isInline?: boolean;
  /** Specifies an additional `className` to add to the base element. */
  className?: string;
}

function FormLabel({ children, isInline = false, ...props }: Props & React.ComponentPropsWithoutRef<'label'>) {
  const { size, isControlGroup, getLabelProps } = useFormGroupContext();
  const className = classNames(
    'pgn__form-label',
    {
      'pgn__form-label-inline': isInline,
      'pgn__form-label-lg': size === FORM_CONTROL_SIZES.LARGE,
      'pgn__form-label-sm': size === FORM_CONTROL_SIZES.SMALL,
    },
    props.className,
  );
  const labelProps = getLabelProps({ ...props, className });
  const componentType = isControlGroup ? 'p' : 'label';
  return React.createElement(componentType, labelProps, children);
}

export default FormLabel;
