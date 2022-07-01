import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import GenericError from '../GenericError';
import { Alert } from '../..';

describe('<Dropzone.GenericError />', () => {
  it('renders Alert component with messages', () => {
    const messages = ['First error message', 'Second error message'];
    const wrapper = mount(<IntlProvider locale="en" messages={{}}><GenericError errorMsgs={messages} /></IntlProvider>);
    const alert = wrapper.find(Alert);
    expect(alert.exists()).toEqual(true);
    expect(alert.hasClass('pgn__dropzone-generic-alert')).toEqual(true);
    const contents = wrapper.find('span');
    expect(contents.length).toEqual(3);
    expect(contents.at(0).hasClass('pgn__icon')).toEqual(true);
    expect(contents.at(1).text()).toEqual('First error message');
    expect(contents.at(2).text()).toEqual('Second error message');
  });
});
