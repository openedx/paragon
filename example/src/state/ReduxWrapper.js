import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import { IntlProvider } from '@edx/frontend-i18n';
import rootReducer from '.';

const createStore = () => reduxCreateStore(rootReducer);

export default ({ element }) => (
  <Provider store={createStore()}>
    <IntlProvider>
      {element}
    </IntlProvider>
  </Provider>
);
