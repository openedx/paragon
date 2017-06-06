import React from 'react';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: '2px 5px',
    border: '1px solid #eae9e9',
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },

  note: {
    opacity: 0.5,
  },
};

export default function Welcome() {
  return (
    <div style={styles.main}>
      <h1>Paragon</h1>
      <p>
        This is a documentation and demo space for the Paragon accessible UI Component
        library. Better docs coming soon, but for now, check out our existing components
        via the links to the left-hand side.
      </p>
      <p>
        Documentation generated with <a
          style={styles.link}
          href="https://github.com/kadirahq/react-storybook"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Storybook
        </a>.
      </p>
    </div>
  );
}
