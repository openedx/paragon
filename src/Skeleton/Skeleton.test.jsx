import React from 'react';
import renderer from 'react-test-renderer';
import Skeleton from './index';

describe('<Skeleton />', () => {
  it('successfully renders', () => {
    const tree = renderer.create(<Skeleton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
