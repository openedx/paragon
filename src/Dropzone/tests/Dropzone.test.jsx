import React from 'react';
import { IntlProvider } from 'react-intl';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import renderer from 'react-test-renderer';
import {
  render,
  act,
  fireEvent,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { formatBytes } from '../utils';
import messages from '../messages';
import Dropzone from '..';

const axiosMock = new MockAdapter(axios);
axiosMock.onPost('/upload').reply((config) => {
  const total = 1024; // mocked file size
  const progress = 0.4;
  if (config.onUploadProgress) {
    config.onUploadProgress({ loaded: total * progress, total });
  }
  return new Promise(() => {});
});

// dummy function to test that upload event was not fired (i.e. this function has never been called)
// if your test case tests successful upload action you should override this function, see examples below
const handleProcessUpload = jest.fn();

function createFile(name, size, type) {
  const file = new File([], name, { type });
  Object.defineProperty(file, 'size', {
    get() {
      return size;
    },
  });
  return file;
}

function createDtWithFiles(files = []) {
  return {
    dataTransfer: {
      files,
      items: files.map((file) => ({
        kind: 'file',
        size: file.size,
        type: file.type,
        getAsFile: () => file,
      })),
      types: ['Files'],
    },
  };
}

const imageFile = createFile('image.png', 111, 'image/png');
const pdfFile = createFile('something.pdf', 10000, 'application/pdf');

// eslint-disable-next-line react/prop-types
function DropzoneWrapper({ children, ...props }) {
  return (
    <IntlProvider locale="en" messages={{}}>
      <Dropzone onProcessUpload={handleProcessUpload} {...props} />
    </IntlProvider>
  );
}

describe('<Dropzone />', () => {
  it('successfully renders', () => {
    const tree = renderer.create(<DropzoneWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('call onProcessUpload func if file passes validation', async () => {
    const processUpload = jest.fn();
    render(<DropzoneWrapper onProcessUpload={processUpload} />);
    const dropzoneContainer = await screen.findByTestId('dropzone-container');
    const dt = createDtWithFiles([imageFile]);
    await act(async () => {
      fireEvent.drop(dropzoneContainer, dt);
    });
    expect(processUpload).toHaveBeenCalledTimes(1);
  });

  it('renders warning if multiple files are dragged and does nothing if files are dropped', async () => {
    render(<DropzoneWrapper />);
    const dropzoneContainer = await screen.findByTestId('dropzone-container');
    const dt = createDtWithFiles([imageFile, pdfFile]);
    await act(async () => {
      fireEvent.dragEnter(dropzoneContainer, dt);
    });
    expect(dropzoneContainer).toHaveTextContent('Only one upload permitted.');
    await act(async () => {
      fireEvent.dragLeave(dropzoneContainer, dt);
    });
    expect(dropzoneContainer).toHaveTextContent('Drag and drop your file here or click to upload.');
    await act(async () => {
      fireEvent.dragEnter(dropzoneContainer, dt);
    });
    await act(async () => {
      fireEvent.drop(dropzoneContainer, dt);
    });
    expect(handleProcessUpload).toHaveBeenCalledTimes(0);
    expect(dropzoneContainer).toHaveTextContent('Drag and drop your file here or click to upload.');
  });

  it('does not upload files that exceed maxSize and renders default error message', async () => {
    render(<DropzoneWrapper maxSize={1000} />);
    const dropzoneContainer = await screen.findByTestId('dropzone-container');
    const dt = createDtWithFiles([pdfFile]);
    await act(async () => {
      fireEvent.drop(dropzoneContainer, dt);
    });
    expect(dropzoneContainer).toHaveTextContent(messages.invalidSizeMore.defaultMessage.replace('{size}', formatBytes(1000)));
    expect(handleProcessUpload).toHaveBeenCalledTimes(0);
  });

  it('does not upload files that have less size than minSize and renders default error message', async () => {
    render(<DropzoneWrapper minSize={1000} />);
    const dropzoneContainer = await screen.findByTestId('dropzone-container');
    const dt = createDtWithFiles([imageFile]);
    await act(async () => {
      fireEvent.drop(dropzoneContainer, dt);
    });
    expect(dropzoneContainer).toHaveTextContent(messages.invalidSizeLess.defaultMessage.replace('{size}', formatBytes(1000)));
    expect(handleProcessUpload).toHaveBeenCalledTimes(0);
  });

  it('does not upload files that have wrong extension and renders default error message', async () => {
    render(<DropzoneWrapper accept={{ 'application/pdf': [] }} />);
    const dropzoneContainer = await screen.findByTestId('dropzone-container');
    const dt = createDtWithFiles([imageFile]);
    await act(async () => {
      fireEvent.drop(dropzoneContainer, dt);
    });
    expect(dropzoneContainer).toHaveTextContent('The file type must be PDF file.');
    expect(handleProcessUpload).toHaveBeenCalledTimes(0);
  });

  it('renders multiple error messages if there multiple validation failures', async () => {
    render(<DropzoneWrapper maxSize={100} accept={{ 'application/pdf': [] }} />);
    const dropzoneContainer = await screen.findByTestId('dropzone-container');
    const dt = createDtWithFiles([imageFile]);
    await act(async () => {
      fireEvent.drop(dropzoneContainer, dt);
    });
    expect(dropzoneContainer).toHaveTextContent('The file type must be PDF file.');
    expect(dropzoneContainer).toHaveTextContent(messages.invalidSizeMore.defaultMessage.replace('{size}', formatBytes(100)));
    expect(handleProcessUpload).toHaveBeenCalledTimes(0);
  });

  it('renders custom error messages', async () => {
    render(
      <DropzoneWrapper
        maxSize={1000}
        minSize={150}
        accept={{ 'application/pdf': [] }}
        errorMessages={{
          invalidType: 'Invalid type error msg.',
          invalidSizeLess: 'Size less error msg.',
          invalidSizeMore: 'Size more error msg.',
        }}
      />,
    );
    const dropzoneContainer = await screen.findByTestId('dropzone-container');

    const dtImage = createDtWithFiles([imageFile]);
    await act(async () => {
      fireEvent.drop(dropzoneContainer, dtImage);
    });
    expect(dropzoneContainer).toHaveTextContent('Size less error msg.');
    expect(dropzoneContainer).toHaveTextContent('Invalid type error msg.');

    const dtPdf = createDtWithFiles([pdfFile]);
    await act(async () => {
      fireEvent.drop(dropzoneContainer, dtPdf);
    });
    expect(dropzoneContainer).toHaveTextContent('Size more error msg.');
    expect(handleProcessUpload).toHaveBeenCalledTimes(0);
  });

  it('renders custom validation error message returned by validator func', async () => {
    const validator = () => 'Custom validation error message.';
    render(<DropzoneWrapper validator={validator} />);
    const dropzoneContainer = await screen.findByTestId('dropzone-container');
    const dt = createDtWithFiles([imageFile]);
    await act(async () => {
      fireEvent.drop(dropzoneContainer, dt);
    });
    expect(dropzoneContainer).toHaveTextContent('Custom validation error message.');
  });

  it('renders progress component when upload progress is not 0', async () => {
    const handleProcessUploadMock = async ({
      fileData, requestConfig, handleError,
    }) => {
      const uploadUrl = '/upload';
      try {
        await axios.post(uploadUrl, fileData, requestConfig);
      } catch (error) {
        handleError(error);
      }
    };

    render(<DropzoneWrapper onProcessUpload={handleProcessUploadMock} />);
    const dropzoneContainer = await screen.findByTestId('dropzone-container');
    const dt = createDtWithFiles([imageFile]);
    await act(async () => {
      fireEvent.drop(dropzoneContainer, dt);
    });
    expect(dropzoneContainer).toHaveTextContent('Uploading image.png, 40% done.');
  });

  it('resets default Dropzone state after pressing cancel button', async () => {
    const handleProcessUploadMock = async ({
      fileData, requestConfig, handleError,
    }) => {
      const uploadUrl = '/upload';
      try {
        await axios.post(uploadUrl, fileData, requestConfig);
      } catch (error) {
        handleError(error);
      }
    };

    render(<DropzoneWrapper onProcessUpload={handleProcessUploadMock} progressVariant="bar" />);
    const dropzoneContainer = await screen.findByTestId('dropzone-container');
    const dt = createDtWithFiles([imageFile]);
    await act(async () => {
      fireEvent.drop(dropzoneContainer, dt);
    });
    expect(dropzoneContainer).toHaveTextContent('Uploading image.png.');

    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    fireEvent.click(cancelButton);
    expect(dropzoneContainer).toHaveTextContent('Drag and drop your file here or click to upload.');
  });

  it('shows upload error message in case upload failed', async () => {
    const handleProcessUploadWithError = async ({ handleError }) => handleError({});
    render(<DropzoneWrapper onProcessUpload={handleProcessUploadWithError} progressVariant="bar" />);
    const dropzoneContainer = await screen.findByTestId('dropzone-container');
    const dt = createDtWithFiles([imageFile]);
    await act(async () => {
      fireEvent.drop(dropzoneContainer, dt);
    });
    expect(dropzoneContainer).toHaveTextContent(messages.uploadError.defaultMessage);
  });
});
