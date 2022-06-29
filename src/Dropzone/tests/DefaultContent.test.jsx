import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';

import DefaultContent from '../DefaultContent';

describe('<Dropzone.DefaultContent />', () => {
  it('successfully renders', () => {
    const tree = renderer.create(<IntlProvider locale="en" messages={{}}><DefaultContent /></IntlProvider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
