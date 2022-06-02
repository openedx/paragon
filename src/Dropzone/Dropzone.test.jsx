import React from 'react';
import axios from 'axios';
import renderer from 'react-test-renderer';
import Dropzone from './index';

const defaultAxiosConfig = {
  uploadUrl: 'https://httpbin.org/post',
  client: axios.create({}),
};

describe('<Dropzone />', () => {
  it('successfully renders', () => {
    const tree = renderer.create(<Dropzone axiosConfig={defaultAxiosConfig} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
