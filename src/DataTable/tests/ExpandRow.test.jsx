import React from 'react';
import { render } from '@testing-library/react';

import ExpandRow from '../ExpandRow';

const row = {
  isExpanded: false,
  getToggleRowExpandedProps: () => {},
};

describe('<ExpandRow />', () => {
  it('renders expand row element if rows is not expanded', () => {
    const { getByLabelText } = render(<ExpandRow row={row} />);

    const iconButton = getByLabelText('Expand row');
    expect(iconButton).toBeInTheDocument();
  });

  it('renders collapse row element if row is expanded', () => {
    const expandedRow = { ...row, isExpanded: true };
    const { getByLabelText } = render(<ExpandRow row={expandedRow} />);

    const iconButton = getByLabelText('Collapse row');
    expect(iconButton).toBeInTheDocument();
  });
});
