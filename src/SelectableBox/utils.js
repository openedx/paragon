import Form, { CheckboxControl, RadioControl } from '../Form';

export const getInputType = (component, type) => {
  if (component === 'SelectableBox') {
    switch (type) {
      case 'radio':
        return RadioControl;
      case 'checkbox':
        return CheckboxControl;
      default:
        return RadioControl;
    }
  } else if (component === 'SelectableBoxSet') {
    switch (type) {
      case 'radio':
        return Form.RadioSet;
      case 'checkbox':
        return Form.CheckboxSet;
      default:
        return Form.RadioSet;
    }
  }
  return null;
};
