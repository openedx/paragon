import React from 'react';
import axios from 'axios';
import { IntlProvider } from 'react-intl';
import renderer from 'react-test-renderer';
import { render, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Dropzone from '../index';

const handleProcessUpload = async ({
  fileData, requestConfig, handleError,
}) => {
  const uploadUrl = 'https://httpbin.org/post';
  try {
    await axios.post(uploadUrl, fileData, requestConfig);
  } catch (error) {
    handleError(error);
  }
};

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

const imageFile = createFile('image.pgn', 111, 'image/png');
const pdfFile = createFile('something.pdf', 111, 'application/pdf');

// eslint-disable-next-line react/prop-types
const DropzoneWrapper = ({ children, ...props }) => (
  <IntlProvider locale="en" messages={{}}>
    <Dropzone onProcessUpload={handleProcessUpload} {...props} />
  </IntlProvider>
);

describe('<Dropzone />', () => {
  it('successfully renders', () => {
    const tree = renderer.create(<DropzoneWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders warning if multiple files are dragged', async () => {
    const { findByTestId, getByText } = render(<DropzoneWrapper />);
    const dropzoneContainer = await findByTestId('dropzone-container');
    const dt = createDtWithFiles([imageFile, pdfFile]);
    await act(async () => {
      fireEvent.dragEnter(dropzoneContainer, dt);
    });
    expect(getByText('Only one upload permitted.')).toBeInTheDocument();
    await act(async () => {
      fireEvent.dragLeave(dropzoneContainer, dt);
    });
    expect(getByText('Drag and drop your file here or click to upload.')).toBeInTheDocument();
  });
});
