import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import ExpandAll from '../ExpandAll';

function ExpandAllWrapper(props) {
  return (
    <IntlProvider locale="en" messages={{}}>
      <ExpandAll {...props} />
    </IntlProvider>
  );
}

describe('<ExpandAll />', () => {
  it('renders expand all element if not all rows are expanded', () => {
    const { getByText, getByRole } = render(
      <ExpandAllWrapper getToggleAllRowsExpandedProps={() => {}} isAllRowsExpanded={false} />,
    );
    const labelWrapper = getByText('Expand all');
    const collapseButton = getByRole('button', { name: 'Expand all' });
    expect(labelWrapper).toBeInTheDocument();
    expect(collapseButton).toBeInTheDocument();
  });

  it('renders collapse all element if all rows are expanded', () => {
    const { getByText, getByRole } = render(
      <ExpandAllWrapper getToggleAllRowsExpandedProps={() => {}} isAllRowsExpanded />,
    );
    const labelWrapper = getByText('Collapse all');
    const collapseButton = getByRole('button', { name: 'Collapse all' });
    expect(labelWrapper).toBeInTheDocument();
    expect(collapseButton).toBeInTheDocument();
  });
});
