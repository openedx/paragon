import type { Preview } from '@storybook/react-vite';

// Load the design-token CSS custom properties globally, exactly as a consuming
// app would. This is the *same* compiled token output the real library ships —
// proof that the CSS Modules approach preserves the theming contract.
import '../src/tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
