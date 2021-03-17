import Form from 'react-bootstrap/Form';
import FormControl from './FormControl';
import FormLabel from './FormLabel';
import FormGroup from './FormGroup';
import FormControlFeedback from './FormControlFeedback';
import FormControlDecoratorGroup from './FormControlDecoratorGroup';

Form.Control = FormControl;
Form.Label = FormLabel;
Form.Group = FormGroup;
Form.Text = FormControlFeedback;

export default Form;
export {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlDecoratorGroup,
  FormControlFeedback,
  FormControlFeedback as FormText,
};
export { default as FormCheck } from 'react-bootstrap/FormCheck';
export { default as FormFile } from 'react-bootstrap/FormFile';
export { default as InputGroup } from 'react-bootstrap/InputGroup';
