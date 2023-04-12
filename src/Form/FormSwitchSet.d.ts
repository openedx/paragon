import React from 'react';
import { FormCheckboxSetProps } from './FormCheckboxSet';

export interface FormSwitchSetProps extends FormCheckboxSetProps{}

declare const FormSwitchSet = React.FC<FormSwitchSetProps>;

export default FormSwitchSet;
