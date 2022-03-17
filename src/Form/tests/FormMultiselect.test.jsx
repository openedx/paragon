import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import FormMultiselect from '../FormMultiselect';

const options = [
  'White',
  'Black',
  'Green',
  'Purple',
  'Blue',
];

const Multiselect = (props) => <FormMultiselect {...props} />;

describe('<FormMultiselect />', () => {
  describe('correct rendering', () => {
    it('renders without props', () => {
      const tree = renderer.create((
        <Multiselect options={options} />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with no options', () => {
      const wrapper = mount(<Multiselect />);
      const multiselect = wrapper.find('.pgn__form-multiselect');
      expect(multiselect.length).toEqual(1);
    });
    it('renders with the default class', () => {
      const wrapper = mount(<Multiselect options={options} />);
      const multiselect = wrapper.find('.pgn__form-multiselect');
      expect(multiselect.length).toEqual(1);
    });
    it('opens dropdown when show button is clicked', () => {
      const wrapper = mount(<Multiselect options={options} />);
      wrapper.find('.pgn__form-multiselect-field-show-btn').first().simulate('click');
      const dropdown = wrapper.find('.pgn__form-multiselect-items');
      expect(dropdown.hasClass('show')).toEqual(true);
    });
    it('options are rendered in the dropdown', () => {
      const wrapper = mount(<Multiselect options={options} />);
      const dropdownItems = wrapper.find('.pgn__form-multiselect-items');
      expect(dropdownItems.find('.pgn__form-multiselect-item')).toHaveLength(5);
    });
    it('rendered with floating label', () => {
      const labelText = 'TestMultiselect';
      const wrapper = mount(<Multiselect options={options} floatingLabel={labelText} />);
      const input = wrapper.find('.form-control');
      expect(input.at(0).props().placeholder).toEqual(labelText);
      input.simulate('focus');
      expect(wrapper.find('.pgn__form-multiselect-field-label').text()).toEqual(labelText);
    });
    it('rendered with errorText', () => {
      const errorText = 'TestError';
      const wrapper = mount(<Multiselect options={options} errorText={errorText} />);
      const error = wrapper.find('.pgn__form-multiselect-field-error');
      expect(error.text()).toEqual(errorText);
      expect(wrapper.find('.pgn__form-multiselect-field').hasClass('error')).toEqual(true);
    });
    it('rendered with disabled prop', () => {
      const wrapper = mount(<Multiselect options={options} disabled />);
      expect(wrapper.find('.pgn__form-multiselect-field').hasClass('disabled')).toEqual(true);
    });
    it('rendered with dark variant', () => {
      const wrapper = mount(<Multiselect options={options} variant="dark" />);
      expect(wrapper.find('.pgn__form-multiselect-field-label').hasClass('dark')).toEqual(true);
    });
  });
  describe('correct interactions', () => {
    it('option is selected', () => {
      const setSelectedOptions = jest.fn();
      const wrapper = mount(
        <Multiselect
          options={options}
          setSelectedOptions={setSelectedOptions}
        />,
      );
      const firstItem = wrapper.find('.pgn__form-multiselect-item').first();
      const firstItemsText = firstItem.text();
      firstItem.simulate('click');
      wrapper.update();
      expect(wrapper.find('.pgn__form-multiselect-item').first().text()).not.toEqual(firstItemsText);
      expect(setSelectedOptions).toHaveBeenCalled();
    });
    it('option is preselected', () => {
      const option = 'White';
      const wrapper = mount(
        <Multiselect
          options={options}
          selectedOptions={[option]}
        />,
      );
      expect(wrapper.find('.pgn__form-multiselect-item').first().text()).not.toEqual(option);
      expect(wrapper.find('.pgn__form-multiselect-field-chip').first().text()).toEqual(option);
    });
    it('option is removed', () => {
      const option = 'White';
      const setSelectedOptions = jest.fn();
      const wrapper = mount(
        <Multiselect
          options={options}
          selectedOptions={[option]}
          setSelectedOptions={setSelectedOptions}
        />,
      );
      const chip = wrapper.find('.pgn__form-multiselect-field-chip').first();
      chip.simulate('click');
      expect(setSelectedOptions).toHaveBeenCalled();
    });
    it('options are searched', () => {
      const searchValue = 'b';
      const wrapper = mount(
        <Multiselect
          options={options}
        />,
      );
      expect(wrapper.find('.pgn__form-multiselect-item')).toHaveLength(5);
      const input = wrapper.find('.form-control');
      input.simulate('change', { target: { value: searchValue } });
      expect(wrapper.find('.pgn__form-multiselect-item')).toHaveLength(2);
    });
    it('dropdown opens when input value is changed', () => {
      const searchValue = 'b';
      const wrapper = mount(
        <Multiselect
          options={options}
        />,
      );
      expect(wrapper.find('.pgn__form-multiselect-items').hasClass('none')).toEqual(true);
      const input = wrapper.find('.form-control');
      input.simulate('change', { target: { value: searchValue } });
      expect(wrapper.find('.pgn__form-multiselect-items').hasClass('show')).toEqual(true);
    });
    it('options are reset', () => {
      const option = 'White';
      const setSelectedOptions = jest.fn();
      const wrapper = mount(
        <Multiselect
          options={options}
          selectedOptions={[option]}
          setSelectedOptions={setSelectedOptions}
        />,
      );
      const reset = wrapper.find('.pgn__form-multiselect-field-hide-btn').first();
      reset.simulate('click');
      expect(setSelectedOptions).toHaveBeenCalled();
    });
    it('correct floating label behavior', () => {
      const labelText = 'TestMultiselect';
      const wrapper = mount(<Multiselect options={options} floatingLabel={labelText} />);
      const input = wrapper.find('.form-control');
      input.simulate('focus');
      expect(wrapper.find('.pgn__form-multiselect-field-label').text()).toEqual(labelText);
      input.simulate('blur');
      expect(input.at(0).props().placeholder).toEqual(labelText);
      wrapper.setProps({ selectedOptions: ['White'] });
      expect(wrapper.find('.pgn__form-multiselect-field-label').text()).toEqual(labelText);
    });
    it('no options text is rendered', () => {
      const searchValue = 'something';
      const noOptions = 'no options';
      const wrapper = mount(
        <Multiselect
          options={options}
          noOptionsText={noOptions}
        />,
      );
      const input = wrapper.find('.form-control');
      input.simulate('change', { target: { value: searchValue } });
      expect(wrapper.find('.pgn__form-multiselect-items-text').text()).toEqual(noOptions);
    });
  });
});
