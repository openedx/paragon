/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },
};

storiesOf('Paragon', module)
  .add('Welcome', () => (
    <div style={styles.main}>
      <h1>💎 Paragon</h1>
      <p>
        This is a documentation and demo space for the Paragon accessible UI component
        library. Better docs coming soon, but for now, check out our existing components
        via the links to the left-hand side.
      </p>
      <p>
        Documentation generated with <a
          href="https://github.com/kadirahq/react-storybook"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Storybook
        </a>.
      </p>
    </div>
  ));
