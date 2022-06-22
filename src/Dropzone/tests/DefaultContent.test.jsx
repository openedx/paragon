import React from 'react';
import renderer from 'react-test-renderer';
import DefaultContent from '../DefaultContent';

describe('<Dropzone.DefaultContent />', () => {
  it('successfully renders', () => {
    const tree = renderer.create(<DefaultContent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
