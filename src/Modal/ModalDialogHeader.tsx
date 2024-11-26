/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import type { ComponentWithAsProp } from '../utils/types/bootstrap';

export interface Props {
  as?: string;
  children: React.ReactNode;
  className?: string;
}

type HeaderType = ComponentWithAsProp<'div', Props>;

const ModalDialogHeader: HeaderType = React.forwardRef<HTMLDivElement, Props>(({
  as = 'div',
  children,
  ...props
}, ref) => (
  React.createElement(
    as,
    {
      ...props,
      ref,
      className: classNames('pgn__modal-header', props.className),
    },
    children,
  )
));

ModalDialogHeader.propTypes = {
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** Specifies the contents of the header */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
};

export default ModalDialogHeader;
