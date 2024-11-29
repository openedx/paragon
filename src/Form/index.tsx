import BootstrapForm, { FormProps } from 'react-bootstrap/Form';
import { ComponentWithAsProp } from '../utils/types/bootstrap';
// TODO: add more typing and remove the @ts-ignore directives here
// @ts-ignore
import FormControl from './FormControl';
import FormLabel from './FormLabel';
import FormGroup from './FormGroup';
// @ts-ignore
import FormControlFeedback from './FormControlFeedback';
// @ts-ignore
import FormText from './FormText';
// @ts-ignore
import FormControlDecoratorGroup from './FormControlDecoratorGroup';
// @ts-ignore
import FormRadio, { RadioControl } from './FormRadio';
// @ts-ignore
import FormRadioSet from './FormRadioSet';
// @ts-ignore
import FormRadioSetContext from './FormRadioSetContext';
// @ts-ignore
import FormAutosuggest from './FormAutosuggest';
// @ts-ignore
import FormAutosuggestOption from './FormAutosuggestOption';
// @ts-ignore
import FormCheckbox, { CheckboxControl } from './FormCheckbox';
// @ts-ignore
import FormSwitch, { SwitchControl } from './FormSwitch';
// @ts-ignore
import FormCheckboxSet from './FormCheckboxSet';
// @ts-ignore
import FormSwitchSet from './FormSwitchSet';
// @ts-ignore
import FormCheckboxSetContext from './FormCheckboxSetContext';
// @ts-ignore
import useCheckboxSetValues from './useCheckboxSetValues';

const Form = BootstrapForm as any as ComponentWithAsProp<'form', FormProps> & {
  Control: typeof FormControl;
  Radio: typeof FormRadio;
  RadioSet: typeof FormRadioSet;
  Autosuggest: typeof FormAutosuggest;
  AutosuggestOption: typeof FormAutosuggestOption;
  Checkbox: typeof FormCheckbox;
  CheckboxSet: typeof FormCheckboxSet;
  Switch: typeof FormSwitch;
  SwitchSet: typeof FormSwitchSet;
  Label: typeof FormLabel;
  Group: typeof FormGroup;
  Text: typeof FormText;
};
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
  RadioControl,
  SwitchControl,
  FormSwitchSet,
  useCheckboxSetValues,
};

export { default as FormCheck } from 'react-bootstrap/FormCheck';
export { default as FormFile } from 'react-bootstrap/FormFile';
export { default as InputGroup } from 'react-bootstrap/InputGroup';
