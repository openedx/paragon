import React from 'react';
import renderer from 'react-test-renderer';
import componentName from './index';

describe('<componentName />', () => {
  it('successfully renders', () => {
    const tree = renderer.create(<componentName />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
