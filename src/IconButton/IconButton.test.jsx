import React from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { mount } from 'enzyme';
import { Popover, OverlayTrigger } from '../index';
import IconButton from './index';
import InteractiveIcon from './InteractiveIcon';

describe('<IconButton />', () => {
  const defaultAltText = 'infoooo';
  const props = {
    icon: faInfoCircle,
    alt: defaultAltText,
    overlay: <Popover>Foo</Popover>,
    overlayPlacement: 'left',
  };
  it('passes the correct props to the OverlayTrigger', () => {
    const wrapper = mount((
      <IconButton
        {...props}
        onClick={() => {}}
      />));
    const overlayT = wrapper.find(OverlayTrigger);
    expect(overlayT.prop('trigger')).toEqual(['hover', 'focus']);
    expect(overlayT.prop('placement')).toEqual(props.overlayPlacement);
    expect(overlayT.prop('overlay')).toEqual(props.overlay);
  });
  it('adds click to the triggers popover if there is no click handler', () => {
    const wrapper = mount((
      <IconButton
        {...props}
      />));
    const overlayT = wrapper.find(OverlayTrigger);
    expect(overlayT.prop('trigger')).toEqual(['hover', 'focus', 'click']);
  });
  it('passes the correct props to InteractiveIcon', () => {
    const onClickHandler = () => {};
    const wrapper = mount((
      <IconButton
        {...props}
        invertColors
        iconClassNames="foo"
        onClick={onClickHandler}
      />));
    const icon = wrapper.find(InteractiveIcon);
    expect(icon.prop('alt')).toEqual(defaultAltText);
    expect(icon.prop('icon')).toEqual(faInfoCircle);
    expect(icon.prop('invertColors')).toEqual(true);
    expect(icon.prop('iconClassNames')).toEqual('foo');
    expect(icon.prop('onClick')).toEqual(onClickHandler);
  });
});
