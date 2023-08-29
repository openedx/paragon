import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckBoxGroup from './index';
import CheckBox from '../CheckBox';

describe('<CheckBoxGroup />', () => {
  it('correct number of children displayed in group', () => {
    const checkBoxGroup = (
      <CheckBoxGroup>
        <CheckBox
          id="checkbox1"
          name="basicCheckBox"
          label="CheckBox 1"
        />
        <CheckBox
          id="checkbox2"
          name="basicCheckBox"
          label="CheckBox 2"
        />
        <CheckBox
          id="checkbox3"
          name="basicCheckBox"
          label="CheckBox 3"
        />
      </CheckBoxGroup>
    );
    const { getByLabelText } = render(checkBoxGroup);

    expect(getByLabelText('CheckBox 1')).toBeInTheDocument();
    expect(getByLabelText('CheckBox 2')).toBeInTheDocument();
    expect(getByLabelText('CheckBox 3')).toBeInTheDocument();
  });
});
