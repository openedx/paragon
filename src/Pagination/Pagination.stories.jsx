import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';

import Pagination from './index';
import README from './README.md';

storiesOf('Pagination', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .addDecorator(withReadme(README))
  .add('basic usage', () => (
    <Pagination
      paginationLabel="pagination navigation"
      pageCount={20}
      onPageSelect={action('page-selected')}
    />
  ))
  .add('with initial page selected', () => (
    <Pagination
      paginationLabel="pagination navigation"
      pageCount={20}
      currentPage={15}
      onPageSelect={action('page-selected')}
    />
  ))
  .add('with max pages displayed', () => (
    <Pagination
      paginationLabel="pagination navigation"
      pageCount={20}
      onPageSelect={action('page-selected')}
      maxPagesDisplayed={9}
    />
  ))
  .add('with custom string labels', () => (
    <Pagination
      paginationLabel="pagination navigation"
      pageCount={20}
      onPageSelect={action('page-selected')}
      buttonLabels={{
        previous: 'Anterior',
        next: 'Siguiente',
        page: 'Página',
        currentPage: 'Página actual',
        pageOfCount: 'de',
      }}
    />
  ))
  .add('with custom element labels', () => (
    <Pagination
      paginationLabel="pagination navigation"
      pageCount={20}
      onPageSelect={action('page-selected')}
      buttonLabels={{
        previous: <span>Anterior</span>,
        next: <span>Siguiente</span>,
        page: <span>Página</span>,
        currentPage: <span>Página actual</span>,
        pageOfCount: <span>de</span>,
      }}
    />
  ));
