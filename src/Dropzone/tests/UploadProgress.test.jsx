import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import UploadProgress from '../UploadProgress';
import { Spinner, ProgressBar, Button } from '../..';

const onCancel = jest.fn();

const defaultProps = {
  percent: 45,
  name: 'Some file',
  onCancel,
};

// eslint-disable-next-line react/prop-types
function UploadProgressWrapper({ children, ...props }) {
  return (
    <IntlProvider locale="en" messages={{}}>
      <UploadProgress
        {...defaultProps}
        {...props}
      />
    </IntlProvider>
  );
}

describe('<Dropzone.UploadProgress />', () => {
  it('renders spinner if receives "spinner" as a variant prop', () => {
    const wrapper = mount(<UploadProgressWrapper variant="spinner" />);
    const spinner = wrapper.find(Spinner);
    expect(spinner.exists()).toEqual(true);
    expect(spinner.props().screenReaderText).toEqual(`Uploading ${defaultProps.name}, ${defaultProps.percent}% done.`);
  });
  it('renders progress bar if receives "bar" as a variant prop', () => {
    const wrapper = mount(<UploadProgressWrapper variant="bar" />);
    const bar = wrapper.find(ProgressBar);
    expect(bar.exists()).toEqual(true);
    expect(bar.props().now).toEqual(defaultProps.percent);
    expect(bar.props().label).toEqual(`${defaultProps.percent}%`);
    const cancelButton = wrapper.find(Button);
    expect(cancelButton.exists()).toEqual(true);
    cancelButton.simulate('click');
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
