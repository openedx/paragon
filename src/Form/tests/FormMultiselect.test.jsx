import React from 'react';
import { mount, shallow } from 'enzyme';
import FormMultiselect from '../FormMultiselect';

const props = {
  children: [
    'White',
    'Black',
    'Green',
    'Purple',
    'Blue',
  ],
  floatingLabel: 'Test label',
  errorText: 'Error text',
  disabled: false,
  variant: false,
};

// eslint-disable-next-line no-shadow
const setUp = (props) => mount(<FormMultiselect {...props} />);

describe('FormMultiselect renders correctly', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  });

  describe('has render component', () => {
    it('render component', () => {
      component.find('.form__multiselect');
      expect(component).toHaveLength(1);
    });
    it('create snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
  describe('has props', () => {
    it('checked render select wrapper', () => {
      const select = component.find('.form__multiselect-items');
      expect(select).toHaveLength(1);
    });
    it('checked render option items', () => {
      const select = component.find('.form__multiselect-item');
      expect(select).toHaveLength(5);
    });
  });
  describe('has no props', () => {
    it('checked render select wrapper', () => {
      component = shallow(<FormMultiselect />);
      const select = component.find('.form__multiselect-items');
      expect(select).toHaveLength(1);
    });
    it('checked render option items', () => {
      component = shallow(<FormMultiselect />);
      const select = component.find('.form__multiselect-item');
      expect(select).toHaveLength(0);
    });
    it('checked render floatingLabel', () => {
      component = FormMultiselect.defaultProps.floatingLabel;
      expect(component).toEqual('Label');
    });
    it('checked render hasError', () => {
      component = FormMultiselect.defaultProps.errorText;
      expect(component).toEqual('');
    });
  });
  describe('default FormMultiselect props', () => {
    it('checked floatingLabel props', () => {
      component = FormMultiselect.defaultProps.floatingLabel;
      expect(component).toEqual('Label');
    });
    it('checked hasError props', () => {
      component = FormMultiselect.defaultProps.errorText;
      expect(component).toEqual('');
    });
    it('checked disabled props', () => {
      component = FormMultiselect.defaultProps.disabled;
      expect(component).toEqual(false);
    });
    it('checked variant props', () => {
      component = FormMultiselect.defaultProps.variant;
      expect(component).toEqual(false);
    });
  });
});
