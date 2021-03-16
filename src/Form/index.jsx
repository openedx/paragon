import Form from 'react-bootstrap/Form';
import FormControl from './FormControl';
import FormLabel from './FormLabel';
import FormGroup from './FormGroup';
import FormControlDescription from './FormControlDescription';
import FormControlDecoratorGroup from './FormControlDecoratorGroup';

Form.Control = FormControl;
Form.Label = FormLabel;
Form.Group = FormGroup;
Form.Text = FormControlDescription;

export default Form;
export {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlDecoratorGroup,
  FormControlDescription,
  FormControlDescription as FormText,
};
export { default as FormCheck } from 'react-bootstrap/FormCheck';
export { default as FormFile } from 'react-bootstrap/FormFile';
export { default as InputGroup } from 'react-bootstrap/InputGroup';
