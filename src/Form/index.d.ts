import React from 'react';
import { Form, FormProps } from 'react-bootstrap/Form';

import FormControl, { FormControlProps } from './FormControl';
import FormRadio, { FormRadioProps } from './FormRadio';
import FormRadioSet, { FormRadioSetProps } from './FormRadioSet';
import FormControlFeedback, { FormControlFeedbackProps } from './FormControlFeedback';
import FormRadioSetContext from './FormRadioSetContext';
import FormAutosuggest, { FormAutosuggestProps } from './FormAutosuggest';
import FormAutosuggestOption, { FormAutosuggestOptionProps } from './FormAutosuggestOption';
import FormCheckbox, { FormCheckboxProps, CheckboxControl } from './FormCheckbox';
import FormCheckboxSet, { FormCheckboxSetProps } from './FormCheckboxSet';
import FormCheckboxSetContext from './FormCheckboxSetContext';
import FormControlDecoratorGroup from './FormControlDecoratorGroup';
import FormSwitch, { FormSwitchProps, SwitchControl } from './FormSwitch';
import FormLabel, { FormLabelProps } from './FormLabel';
import FormGroup, { FormGroupProps } from './FormGroup';
import FormText, { FormTextProps } from './FormText';
import FormSwitchSet from './FormSwitchSet';
import { BsPrefixRefForwardingComponent } from "react-bootstrap/helpers";

declare const Form: React.FC<FormProps> & {
    Control: React.FC<FormControlProps> & {
        Feedback: React.FC<FormControlFeedbackProps>;
        Description: React.FC<FormControlFeedbackProps>;
    };
    Radio: React.FC<FormRadioProps>;
    RadioSet: React.FC<FormRadioSetProps>;
    Autosuggest: React.FC<FormAutosuggestProps>;
    AutosuggestOption: React.FC<FormAutosuggestOptionProps>;
    Checkbox: React.FC<FormCheckboxProps>;
    CheckboxSet: React.FC<FormCheckboxSetProps>;
    Switch: React.FC<FormSwitchProps>;
    SwitchSet: React.FC<FormCheckboxSetProps>;
    Label: React.FC<FormLabelProps>;
    Group: React.FC<FormGroupProps>;
    Text: React.FC<FormTextProps>;
    Row: BsPrefixRefForwardingComponent<"div", unknown>;
};

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
}
