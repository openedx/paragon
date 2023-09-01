import Form from '../Form';

// eslint-disable-next-line import/prefer-default-export,consistent-return
export const getInputType = (component, type) => {
  if (component === 'SelectableBox') {
    switch (type) {
      case 'radio':
        return Form.Radio;
      case 'checkbox':
        return Form.Checkbox;
      default:
        return Form.Radio;
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
};
