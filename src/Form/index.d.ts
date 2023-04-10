import React from 'react';
import { FormControlProps } from './FormControl';
import { FormRadioProps } from './FormRadio';
import { FormRadioSetProps } from './FormRadioSet';
import { FormAutosuggestProps } from './FormAutosuggest';
import { FormAutosuggestOptionProps } from './FormAutosuggestOption';
import { FormCheckboxProps } from './FormCheckbox';
import { FormCheckboxSetProps } from './FormCheckboxSet';
import { FormSwitchProps } from './FormSwitch';
import { FormLabelProps } from './FormLabel';
import { FormGroupProps } from './FormGroup';
import { FormTextProps } from './FormText';

declare const FormControl: React.FC<FormControlProps>;
declare const FormRadio: React.FC<FormRadioProps>;
declare const FormRadioSet: React.FC<FormRadioSetProps>;
declare const FormAutosuggest: React.FC<FormAutosuggestProps>;
declare const FormAutosuggestOption: React.FC<FormAutosuggestOptionProps>;
declare const FormCheckbox: React.FC<FormCheckboxProps>;
declare const FormCheckboxSet: React.FC<FormCheckboxSetProps>;
declare const FormSwitch: React.FC<FormSwitchProps>;
declare const FormLabel: React.FC<FormLabelProps>;
declare const FormGroup: React.FC<FormGroupProps>;
declare const FormText: React.FC<FormTextProps>

declare const Form: {
    Control: React.FC<FormControlProps>;
    Radio: React.FC<FormRadioProps>;
    RadioSet: React.FC<FormRadioSetProps>;
    Autosuggest: React.FC<FormAutosuggestProps>;
    AutosuggestOption: React.FC<FormAutosuggestOptionProps>;
    Checkbox: React.FC<FormCheckboxProps>;
    CheckboxSet: React.FC<FormCheckboxSetProps>;
    Switch: React.FC<FormSwitchProps>;
    Label: React.FC<FormLabelProps>;
    Group: React.FC<FormGroupProps>;
    Text: React.FC<FormTextProps>
}

export {
    FormControl,
    FormRadio,
    FormRadioSet,
    FormAutosuggest,
    FormAutosuggestOption,
    FormCheckbox,
    FormCheckboxSet,
    FormSwitch,
    FormLabel,
    FormGroup,
    FormText
}

export default Form;
