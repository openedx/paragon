import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  AppProvider,
  ErrorPage,
  PageRoute,
} from '@edx/frontend-platform/react';
import { APP_INIT_ERROR, APP_READY, initialize } from '@edx/frontend-platform';
import { subscribe } from '@edx/frontend-platform/pubSub';
import MyComponent from './MyComponent';
import ExampleCardCarouselPage from './ExampleCardCarouselPage';
import ExampleCardDeckPage from './ExampleCardDeckPage';
import GenericCarouselPage from './GenericCarouselPage';

import './index.scss';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <PageRoute
        exact
        path="/"
        component={MyComponent}
      />
      <PageRoute
        exact
        path="/carddeck"
        component={ExampleCardDeckPage}
      />
      <PageRoute
        exact
        path="/cardcarousel"
        component={ExampleCardCarouselPage}
      />
      <PageRoute
        exact
        path="/carousel"
        component={GenericCarouselPage}
      />
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages: [],
  requireAuthenticatedUser: false,
  hydrateAuthenticatedUser: true,
});
