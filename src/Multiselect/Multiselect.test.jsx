import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Multiselect from './index';
import components from './MultiselectComponents';

// eslint-disable-next-line react/prop-types
const TestComponent = (props) => <div>{props.children}</div>;

describe('<Multiselect />', () => {
  it('successfully renders', () => {
    const tree = renderer.create(<Multiselect />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with correct class when className is passed', () => {
    const testClassName = 'classname';
    const wrapper = mount(<Multiselect className={testClassName} />);
    const multiselect = wrapper.find('.pgn__multiselect').at(0);
    expect(multiselect.hasClass(testClassName)).toEqual(true);
  });
  it('renders with the dark variant', () => {
    const wrapper = mount(<Multiselect variant="dark" />);
    const multiselect = wrapper.find('.pgn__multiselect').at(0);
    expect(multiselect.hasClass('dark')).toEqual(true);
  });
  it('renders with disabled prop', () => {
    const wrapper = mount(<Multiselect disabled />);
    const multiselect = wrapper.find('.pgn__multiselect').at(0);
    expect(multiselect.hasClass('disabled')).toEqual(true);
  });
  it('renders with error prop', () => {
    const errorText = 'error text';
    const wrapper = mount(<Multiselect error={errorText} />);
    const multiselect = wrapper.find('.pgn__multiselect').at(0);
    expect(multiselect.hasClass('error')).toEqual(true);
    expect(wrapper.find('.pgn__multiselect__error-message').text()).toEqual(errorText);
  });

  describe('Multiselect Components', () => {
    it('Menu has base class', () => {
      const wrapper = mount(<components.Menu cx={() => {}} getStyles={() => {}} />);
      expect(wrapper.find('.pgn__multiselect__menu').length).toBeTruthy();
    });
    it('Option gets is-focus class on hover', () => {
      const wrapper = mount(<components.Option cx={() => {}} getStyles={() => {}} isFocused />);
      expect(wrapper.find('.is-focus').length).toBeTruthy();
    });
    it('MultiValueContainer has base class', () => {
      const wrapper = mount((
        <components.MultiValueContainer>
          <TestComponent innerProps={{}}>1</TestComponent>
          <TestComponent innerProps={{}}>2</TestComponent>
        </components.MultiValueContainer>
      ));
      expect(wrapper.find('.pgn__chip').length).toBeTruthy();
    });
    it('ClearIndicator has base class', () => {
      const wrapper = mount(<components.ClearIndicator innerProps={{ onMouseDown: () => {} }} />);
      expect(wrapper.find('.pgn__multiselect__indicator').length).toBeTruthy();
    });
  });
});
