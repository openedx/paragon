import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import UploadProgress from '../UploadProgress';

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
    const { getByTestId } = render(<UploadProgressWrapper variant="spinner" />);
    const spinner = getByTestId('upload-spinner');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveTextContent(`Uploading ${defaultProps.name}, ${defaultProps.percent}% done.`);
  });

  it('renders progress bar if receives "bar" as a variant prop', () => {
    const { getByTestId, getByText } = render(<UploadProgressWrapper variant="bar" />);
    const progressBar = getByTestId('upload-progress-bar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveTextContent(`${defaultProps.percent}%`);

    const cancelButton = getByText('Cancel');
    expect(cancelButton).toBeInTheDocument();

    fireEvent.click(cancelButton);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
