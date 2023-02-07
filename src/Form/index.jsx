import Form from 'react-bootstrap/Form';
import FormControl from './FormControl';
import FormLabel from './FormLabel';
import FormGroup from './FormGroup';
import FormControlFeedback from './FormControlFeedback';
import FormText from './FormText';
import FormControlDecoratorGroup from './FormControlDecoratorGroup';
import FormRadio from './FormRadio';
import FormRadioSet from './FormRadioSet';
import FormRadioSetContext from './FormRadioSetContext';
import FormAutosuggest from './FormAutosuggest';
import FormAutosuggestOption from './FormAutosuggestOption';
import FormCheckbox, { CheckboxControl } from './FormCheckbox';
import FormSwitch, { SwitchControl } from './FormSwitch';
import FormCheckboxSet from './FormCheckboxSet';
import FormSwitchSet from './FormSwitchSet';
import FormCheckboxSetContext from './FormCheckboxSetContext';
import useCheckboxSetValues from './useCheckboxSetValues';

Form.Control = FormControl;
Form.Radio = FormRadio;
Form.RadioSet = FormRadioSet;
Form.Autosuggest = FormAutosuggest;
Form.AutosuggestOption = FormAutosuggestOption;
Form.Checkbox = FormCheckbox;
Form.CheckboxSet = FormCheckboxSet;
Form.Switch = FormSwitch;
Form.SwitchSet = FormSwitchSet;
Form.Label = FormLabel;
Form.Group = FormGroup;
Form.Text = FormText;

export default Form;
export {
  FormControl,
  FormLabel,
  FormRadio,
  FormRadioSet,
  FormRadioSetContext,
  FormCheckbox,
  FormSwitch,
  FormAutosuggest,
  FormAutosuggestOption,
  FormCheckboxSet,
  FormCheckboxSetContext,
  FormGroup,
  FormControlDecoratorGroup,
  FormControlFeedback,
  FormText,
  CheckboxControl,
  SwitchControl,
  FormSwitchSet,
  useCheckboxSetValues,
};

export { default as FormCheck } from 'react-bootstrap/FormCheck';
export { default as FormFile } from 'react-bootstrap/FormFile';
export { default as InputGroup } from 'react-bootstrap/InputGroup';
