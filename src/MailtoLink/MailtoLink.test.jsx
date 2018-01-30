/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';

import MailtoLink from './index';

const emailAddress = 'edx@example.com';
const emailAddresses = ['foo@example.com', 'bar@example.com', 'baz@example.com'];
const subject = 'subject';
const body = 'body';
const content = 'content';

const baseProps = { subject, body, content };

describe('correct rendering', () => {
  it('renders MailtoLink with single to, cc, and bcc recipient', () => {
    const singleRecipientLink = (
      <MailtoLink
        {...baseProps}
        to={emailAddress}
        cc={emailAddress}
        bcc={emailAddress}
      />
    );
    const wrapper = shallow(singleRecipientLink);

    expect(wrapper.prop('href')).toEqual('mailto:edx@example.com?bcc=edx%40example.com&body=body&cc=edx%40example.com&subject=subject');
  });

  it('renders mailtoLink with many to, cc, and bcc recipients', () => {
    const multiRecipientLink = (
      <MailtoLink
        {...baseProps}
        to={emailAddresses}
        cc={emailAddresses}
        bcc={emailAddresses}
      />
    );
    const wrapper = shallow(multiRecipientLink);

    expect(wrapper.prop('href')).toEqual('mailto:foo@example.com,bar@example.com,baz@example.com?bcc=foo%40example.com%2Cbar%40example.com%2Cbaz%40example.com&body=body&cc=foo%40example.com%2Cbar%40example.com%2Cbaz%40example.com&subject=subject');
  });

  it('renders empty mailtoLink', () => {
    const wrapper = shallow(<MailtoLink content={content} />);

    expect(wrapper.prop('href')).toEqual('mailto:');
  });
});
