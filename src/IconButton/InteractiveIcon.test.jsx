import React from 'react';
import { shallow, mount } from 'enzyme';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InteractiveIcon from './InteractiveIcon';

describe('<InteractiveIcon />', () => {
  const alt = 'alternative';
  const icon = faPlusCircle;
  const variant = 'secondary';
  const props = {
    alt,
    icon,
    variant,
  };
  it('passes the icon and alt text to the icon', () => {
    const wrapper = shallow(<InteractiveIcon {...props} />);
    const faIcon = wrapper.find(FontAwesomeIcon).at(0);
    expect(faIcon.prop('icon')).toEqual(icon);
    expect(faIcon.prop('alt')).toEqual(alt);
  });
  it('should not render with --dark classnames if invertColors is set', () => {
    const wrapper = shallow(<InteractiveIcon {...props} />);
    expect(wrapper.find(`.iconbutton-hover__${variant}--dark`)).toHaveLength(0);
    expect(wrapper.find(`.iconbutton__${variant}--dark`)).toHaveLength(0);
  });
  it('should render with --dark classnames if invertColors is true', () => {
    const wrapper = shallow(<InteractiveIcon {...props} invertColors />);
    expect(wrapper.find(`.iconbutton-hover__${variant}--dark`)).toHaveLength(1);
    expect(wrapper.find(`.iconbutton__${variant}--dark`)).toHaveLength(1);
  });
  it('should add the icon class names if it receives them', () => {
    const wrapper = shallow(<InteractiveIcon {...props} iconClassNames="foo bar" />);
    expect(wrapper.find('.foo')).toHaveLength(1);
    expect(wrapper.find('.bar')).toHaveLength(1);
  });
  describe('onClick', () => {
    it('performs the onClick action when clicked', () => {
      const spy = jest.fn();
      const wrapper = shallow(<InteractiveIcon {...props} onClick={spy} />);
      expect(spy).toHaveBeenCalledTimes(0);
      wrapper.simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it('performs the onClick action when in focus and space bar is pressed', () => {
      const spy = jest.fn();
      const wrapper = shallow(<InteractiveIcon {...props} onClick={spy} />);
      wrapper.simulate('keydown', { keyCode: 32, preventDefault: () => {} });
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it('only clicks one icon at a time', () => {
      const spy1 = jest.fn();
      const spy2 = jest.fn();
      const wrapper = mount((
        <div>
          <InteractiveIcon {...props} onClick={spy1} />
          <InteractiveIcon {...props} onClick={spy2} />
        </div>
      ));
      const icon1 = wrapper.find(InteractiveIcon).at(0);
      icon1.simulate('click');
      expect(spy1).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalledTimes(0);
      const icon2 = wrapper.find(InteractiveIcon).at(1);
      icon2.simulate('click');
      expect(spy1).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalledTimes(1);
    });
  });
});
