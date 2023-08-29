import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ExpandRow from '../ExpandRow';

const row = {
  isExpanded: false,
  getToggleRowExpandedProps: () => {},
};

describe('<ExpandRow />', () => {
  it('renders expand row element if rows is not expanded', () => {
    const { getByTestId, getByLabelText } = render(<ExpandRow row={row} data-testid="span-expand-row" />);

    const labelWrapper = getByTestId('span-expand-row');
    expect(labelWrapper).toBeInTheDocument();

    const iconButton = getByLabelText('Expand row');
    expect(iconButton).toBeInTheDocument();
  });

  it('renders collapse row element if row is expanded', () => {
    const expandedRow = { ...row, isExpanded: true };
    const { getByTestId, getByLabelText } = render(<ExpandRow row={expandedRow} data-testid="span-collapse-row" />);

    const labelWrapper = getByTestId('span-collapse-row');
    expect(labelWrapper).toBeInTheDocument();

    const iconButton = getByLabelText('Collapse row');
    expect(iconButton).toBeInTheDocument();
  });
});
