import React from 'react';
import renderer from 'react-test-renderer';
import ComponentName from './index';

describe('<ComponentName />', () => {
  it('successfully renders', () => {
    const tree = renderer.create(<ComponentName />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
