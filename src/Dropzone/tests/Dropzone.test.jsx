import React from 'react';
import axios from 'axios';
import renderer from 'react-test-renderer';
import Dropzone from '../index';
import { render, act, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const defaultAxiosConfig = {
  uploadUrl: 'https://httpbin.org/post',
  client: axios.create({}),
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

describe('<Dropzone />', () => {
  it('successfully renders', () => {
    const tree = renderer.create(<Dropzone axiosConfig={defaultAxiosConfig} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders warning if multiple files are dragged', async () => {
    const { findByTestId, getByText } = render(<Dropzone axiosConfig={defaultAxiosConfig} />);
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
