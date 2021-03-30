import Form from 'react-bootstrap/Form';
import FormControl from './FormControl';
import FormLabel from './FormLabel';
import FormGroup from './FormGroup';
import FormControlFeedback from './FormControlFeedback';
import FormText from './FormText';
import FormControlDecoratorGroup from './FormControlDecoratorGroup';
import FormRadio from './FormRadio';
import FormRadioGroup from './FormRadioGroup';
import FormRadioGroupLegend from './FormRadioGroupLegend';
import FormRadioGroupContext from './FormRadioGroupContext';
import FormRadioGroupFeedback from './FormRadioGroupFeedback';
import FormRadioFeedback from './FormRadioFeedback';

Form.Control = FormControl;
Form.Radio = FormRadio;
Form.RadioGroup = FormRadioGroup;
Form.Label = FormLabel;
Form.Group = FormGroup;
Form.Text = FormText;

export default Form;
export {
  FormControl,
  FormLabel,
  FormRadio,
  FormRadioGroup,
  FormRadioGroupLegend,
  FormRadioGroupContext,
  FormRadioGroupFeedback,
  FormRadioFeedback,
  FormGroup,
  FormControlDecoratorGroup,
  FormControlFeedback,
  FormText,
};

export { default as FormCheck } from 'react-bootstrap/FormCheck';
export { default as FormFile } from 'react-bootstrap/FormFile';
export { default as InputGroup } from 'react-bootstrap/InputGroup';
