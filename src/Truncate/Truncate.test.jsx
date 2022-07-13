import React from 'react';
import renderer from 'react-test-renderer';
import Truncate from './index';

describe('<Truncate />', () => {
  it('successfully renders', () => {
    const tree = renderer.create(<Truncate />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
