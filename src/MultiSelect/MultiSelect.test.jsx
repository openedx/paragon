import React from 'react';
import renderer from 'react-test-renderer';
import MultiSelect from './index';

describe('<MultiSelect />', () => {
  it('successfully renders', () => {
    const tree = renderer.create(<MultiSelect />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
