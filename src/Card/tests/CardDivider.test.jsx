import React from 'react';
import { mount } from 'enzyme';

import CardDivider from '../CardDivider';

describe('correct rendering', () => {
  it('renders default divider', () => {
    const divider = mount(<CardDivider />).find('div');

    expect(divider).toHaveLength(1);
    expect(divider.prop('className')).toEqual('pgn__card-divider');
  });

  it('renders divider with custom className', () => {
    const className = 'my-class-name';
    const divider = mount(<CardDivider className={className} />).find('div');

    expect(divider.prop('className')).toEqual('pgn__card-divider my-class-name');
  });
});
