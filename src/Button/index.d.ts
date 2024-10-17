import React from 'react';
import { ButtonProps } from 'react-bootstrap/Button';
import { ButtonGroupProps, ButtonToolbarProps } from "react-bootstrap";
import { BsPrefixRefForwardingComponent } from "react-bootstrap/helpers";

export interface BaseButtonProps extends ButtonProps {
  iconBefore?: React.ReactElement,
  iconAfter?: React.ReactElement,
}

declare type Button = BsPrefixRefForwardingComponent<'button', BaseButtonProps>;
declare type ButtonGroup = BsPrefixRefForwardingComponent<'div', ButtonGroupProps>;
declare type ButtonToolbar = BsPrefixRefForwardingComponent<'div', ButtonToolbarProps>;

declare const Button: Button;
declare const ButtonGroup: ButtonGroup;
declare const ButtonToolbar: ButtonToolbar;
export { ButtonGroup, ButtonToolbar };
export default Button;
