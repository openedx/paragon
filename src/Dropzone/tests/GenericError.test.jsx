import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import '@testing-library/jest-dom/extend-expect';

import GenericError from '../GenericError';

describe('<Dropzone.GenericError />', () => {
  it('renders Alert component with messages', () => {
    const messages = ['First error message', 'Second error message'];
    const { getByTestId, getAllByText } = render(
      <IntlProvider locale="en" messages={{}}>
        <GenericError errorMsgs={messages} data-testid="generic-error-alert" />
      </IntlProvider>,
    );

    const alert = getByTestId('generic-error-alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass('pgn__dropzone-generic-alert');

    const contents = getAllByText(/error message/i);
    expect(contents).toHaveLength(2);
    expect(contents[0]).toHaveTextContent('First error message');
    expect(contents[1]).toHaveTextContent('Second error message');
  });
});
