import React from 'react';
import { shallow, mount } from 'enzyme';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import IconButton from './index';

describe('<IconButton />', () => {
  const alt = 'alternative';
  const icon = faInfoCircle;
  const variant = 'secondary';
  const props = {
    alt,
    icon,
    variant,
  };
  it('passes the alt text to the button aria-label', () => {
    const wrapper = shallow(<IconButton {...props} onClick={() => {}} />);
    expect(wrapper.prop('aria-label')).toEqual(alt);
  });
  it('should not render with inverse- class names if invertColors is false', () => {
    const wrapper = shallow(<IconButton {...props} onClick={() => {}} />);
    expect(wrapper.find(`.btn-icon-inverse-${variant}`)).toHaveLength(0);
    expect(wrapper.find(`.btn-icon-inverse-${variant}`)).toHaveLength(0);
  });
  it('should render with inverse- class names if invertColors is true', () => {
    const wrapper = shallow(<IconButton {...props} onClick={() => {}} invertColors />);
    expect(wrapper.find(`.btn-icon-inverse-${variant}`)).toHaveLength(1);
    expect(wrapper.find(`.btn-icon-inverse-${variant}`)).toHaveLength(1);
  });
  it('should add the icon class names if it receives them', () => {
    const wrapper = shallow(<IconButton {...props} onClick={() => {}} iconClassNames="foo bar" />);
    expect(wrapper.find('.foo')).toHaveLength(1);
    expect(wrapper.find('.bar')).toHaveLength(1);
  });
  describe('onClick', () => {
    it('performs the onClick action when clicked', () => {
      const spy = jest.fn();
      const wrapper = mount((<IconButton {...props} onClick={spy} />));
      expect(spy).toHaveBeenCalledTimes(0);
      wrapper.props().onClick();
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it('only clicks one icon at a time', () => {
      const spy1 = jest.fn();
      const spy2 = jest.fn();
      const wrapper = mount((
        <div>
          <IconButton {...props} onClick={spy1} />
          <IconButton {...props} onClick={spy2} />
        </div>
      ));
      const icon1 = wrapper.find(IconButton).at(0);
      icon1.props().onClick();
      expect(spy1).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalledTimes(0);
      const icon2 = wrapper.find(IconButton).at(1);
      icon2.props().onClick();
      expect(spy1).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalledTimes(1);
    });
  });
});
