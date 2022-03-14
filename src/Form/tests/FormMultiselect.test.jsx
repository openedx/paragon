import React from 'react';
import { shallow } from 'enzyme';
import FormMultiselect from '../FormMultiselect';
import Chip from "../../Chip";

const props = {
  children: [
    'White',
    'Black',
    'Green',
    'Purple',
    'Blue',
  ],
  floatingLabel: 'Test label',
  errorMessage: 'Error text',
  hasError: false,
  disabled: false,
  variant: false,
};

// eslint-disable-next-line no-shadow
const setUp = (props) => shallow(<FormMultiselect {...props} />);

describe('FormMultiselect renders correctly', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = setUp(props);
    instance = component.instance();
  });

  describe('props Handlers', () => {
    it('should ', () => {
      const mockCallBack = jest.fn();
      component = shallow(<Chip onClick={mockCallBack} />);
      component.find('.form__multiselect-field--chip').simulate('click');
      expect(mockCallBack.mock.calls.length).toBe(1);
      console.log(component.debug());
    });
  });
  describe('has render component', () => {
    it('render', () => {
      component.find('.form__multiselect');
      expect(component).toHaveLength(1);
    });
    it('render', () => {
      expect(component).toMatchSnapshot();
    });
  });
  describe('has props', () => {
    it('show render select', () => {
      const select = component.find('.form__multiselect-items');
      expect(select).toHaveLength(1);
    });
    it('show render option', () => {
      const select = component.find('.form__multiselect-item');
      expect(select).toHaveLength(5);
    });
  });
  describe('has no props', () => {
    it('show render option', () => {
      component = shallow(<FormMultiselect />);
      const select = component.find('.form__multiselect-items');
      expect(select).toHaveLength(1);
    });
    it('show render floatingLabel', () => {
      component = FormMultiselect.defaultProps.floatingLabel;
      expect(component).toEqual('Label');
    });
    it('show render errorMessage', () => {
      component = FormMultiselect.defaultProps.errorMessage;
      expect(component).toEqual('Error text');
    });
  });
  describe('test default props', () => {
    it('test floatingLabel props', () => {
      component = FormMultiselect.defaultProps.floatingLabel;
      expect(component).toEqual('Label');
    });
    it('test errorMessage props', () => {
      component = FormMultiselect.defaultProps.errorMessage;
      expect(component).toEqual('Error text');
    });
    it('test hasError props', () => {
      component = FormMultiselect.defaultProps.hasError;
      expect(component).toEqual(false);
    });
    it('test disabled props', () => {
      component = FormMultiselect.defaultProps.disabled;
      expect(component).toEqual(false);
    });
    it('test variant props', () => {
      component = FormMultiselect.defaultProps.variant;
      expect(component).toEqual(false);
    });
  });
});
