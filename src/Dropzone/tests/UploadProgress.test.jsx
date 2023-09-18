import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import userEvent from '@testing-library/user-event';

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
    render(<UploadProgressWrapper variant="spinner" />);
    const spinner = screen.getByTestId('upload-spinner');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveTextContent(`Uploading ${defaultProps.name}, ${defaultProps.percent}% done.`);
  });

  it('renders progress bar if receives "bar" as a variant prop', async () => {
    render(<UploadProgressWrapper variant="bar" />);
    const progressBar = screen.getByTestId('upload-progress-bar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveTextContent(`${defaultProps.percent}%`);

    const cancelButton = screen.getByText('Cancel');
    expect(cancelButton).toBeInTheDocument();

    await userEvent.click(cancelButton);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
