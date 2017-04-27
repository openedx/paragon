import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';

ReactDOM.render(
  <Router>
    {routes}
  </Router>,
  document.getElementById('root')
);
