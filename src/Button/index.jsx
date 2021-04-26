// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import RBButton from 'react-bootstrap/Button';
import ButtonDeprecated from './deprecated';

const Button = React.forwardRef((props, ref) => (
  <RBButton
    ref={ref}
    css={css`
      border: 2px solid palevioletred;
      &:hover {
        border-color: darkred;
      }
    `}
    {...props}
  >
    {props.children}
  </RBButton>
));

Button.Deprecated = ButtonDeprecated;

export default Button;
export { default as ButtonGroup } from 'react-bootstrap/ButtonGroup';
export { default as ButtonToolbar } from 'react-bootstrap/ButtonToolbar';
