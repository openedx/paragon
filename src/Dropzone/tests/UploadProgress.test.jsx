import React from 'react';
import { mount } from 'enzyme';
import UploadProgress from '../UploadProgress';
import { Spinner, ProgressBar, Button } from '../..';

const onCancel = jest.fn();

const defaultProps = {
  percent: 45,
  name: 'Some file',
  onCancel,
};

describe('<Dropzone.UploadProgress />', () => {
  it('renders spinner if receives "spinner" as a variant prop', () => {
    const wrapper = mount(<UploadProgress {...defaultProps} variant="spinner" />);
    const spinner = wrapper.find(Spinner);
    expect(spinner.exists()).toEqual(true);
    expect(spinner.props().screenReaderText).toEqual(`Uploading ${defaultProps.name}`);
  });
  it('renders progress bar if receives "bar" as a variant prop', () => {
    const wrapper = mount(<UploadProgress {...defaultProps} variant="bar" />);
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

// 36-41,46-47,52-64,69-71,75-89,95-122,126-128,151,155,164