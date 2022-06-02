import React from 'react';
import Icon from '../Icon';
import { FileUpload } from '../../icons';

const DefaultContent = () => (
  <>
    <div>
      <Icon src={FileUpload} style={{ height: '48px', width: '48px' }} />
    </div>
    <p>
      Drag and drop your file here or click to upload.
    </p>
  </>
);

export default DefaultContent;
