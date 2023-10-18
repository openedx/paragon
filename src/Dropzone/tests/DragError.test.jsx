import React from 'react';
import { render } from '@testing-library/react';

import DragError from '../DragError';

describe('<Dropzone.DragError />', () => {
  it('renders error message', () => {
    const { getByText } = render(<DragError message="Drag error message" />);
    const errorMessage = getByText('Drag error message');
    expect(errorMessage).toBeInTheDocument();
  });
});
