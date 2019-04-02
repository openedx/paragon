import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SearchField from './index';
import README from './README.md';

storiesOf('User Input|SearchField', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <SearchField
      onSubmit={action('search-submitted')}
    />
  ))
  .add('with placeholder', () => (
    <SearchField
      onSubmit={action('search-submitted')}
      placeholder="Search"
    />
  ))
  .add('with value', () => (
    <SearchField
      onSubmit={action('search-submitted')}
      placeholder="Search"
      value="foobar"
    />
  ))
  .add('with callbacks', () => (
    <SearchField
      onSubmit={action('search-submitted')}
      onChange={action('value-changed')}
      onFocus={action('search-focused')}
      onBlur={action('search-blurred')}
      onClear={action('search-cleared')}
    />
  ))
  .add('with custom label and screenreader text', () => (
    <SearchField
      onSubmit={action('search-submitted')}
      inputLabel="Buscar:"
      screenReaderText={{
        clearButton: 'Borrar búsqueda',
        searchButton: 'Enviar búsqueda',
      }}
    />
  ));
