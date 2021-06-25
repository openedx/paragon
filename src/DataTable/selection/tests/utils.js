import { act } from 'react-dom/test-utils';

import { CheckboxControl } from '../../../Form';

// eslint-disable-next-line import/prefer-default-export
export const toggleCheckbox = ({ isChecked, wrapper }) => {
  act(() => {
    wrapper.find(CheckboxControl).simulate('change', { target: { checked: isChecked } });
  });
  wrapper.update();
  expect(wrapper.find(CheckboxControl).prop('checked')).toEqual(isChecked);
};
