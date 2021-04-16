import styled from 'styled-components';
import RBButton from 'react-bootstrap/Button';
import forwardAsProp from '../utils/forwardAsProp';
import ButtonDeprecated from './deprecated';

const Button = forwardAsProp(styled(RBButton)`
  border: 2px solid palevioletred;
`);

Button.Deprecated = ButtonDeprecated;

export default Button;
export { default as ButtonGroup } from 'react-bootstrap/ButtonGroup';
export { default as ButtonToolbar } from 'react-bootstrap/ButtonToolbar';
