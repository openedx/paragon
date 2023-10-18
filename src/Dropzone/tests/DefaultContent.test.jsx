import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { render } from '@testing-library/react';

import DefaultContent from '../DefaultContent';

// eslint-disable-next-line react/prop-types
function DefaultContentWrapper({ children, ...props }) {
  return (
    <IntlProvider locale="en" messages={{}}>
      <DefaultContent {...props} />
    </IntlProvider>
  );
}

describe('<Dropzone.DefaultContent />', () => {
  it('successfully renders', () => {
    const tree = renderer.create(<DefaultContentWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders file type restriction message if receives accept prop', () => {
    const { container } = render(<DefaultContentWrapper accept={{ 'image/*': ['.png', '.jpg'] }} />);
    expect(container).toHaveTextContent('Upload PNG or JPG files');
  });
  it('renders min size restriction message if receives minSize prop', () => {
    const { container } = render(<DefaultContentWrapper minSize={1048576} />);
    expect(container).toHaveTextContent('Min 1MB');
  });
  it('renders max size restriction message if receives maxSize prop', () => {
    const { container } = render(<DefaultContentWrapper maxSize={1048576} />);
    expect(container).toHaveTextContent('Max 1MB');
  });
  it('renders type and size restriction message if receives all props', () => {
    const { container } = render(
      <DefaultContentWrapper
        accept={{ 'image/*': ['.png', '.jpg', '.gif'] }}
        minSize={1048576}
        maxSize={20 * 1048576}
      />,
    );
    expect(container).toHaveTextContent('Upload PNG, JPG or GIF files (Between 1MB and 20MB)');
  });
});
