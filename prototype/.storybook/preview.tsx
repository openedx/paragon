import type { Preview } from '@storybook/react-vite';

// Load the design-token CSS custom properties globally, exactly as a consuming
// app would. This is the *same* compiled token output the real library ships —
// proof that the CSS Modules approach preserves the theming contract.
import '../src/tokens.css';
// The reboot-replacement base layer, so story/docs frames inherit Paragon's
// root typography just like a consuming app would.
import '../src/base.css';
// The global, public class layer (btn / utilities / component classes) so docs
// live examples can use `btn btn-outline-primary`, `d-flex`, `collapsible-card`
// etc. exactly as a consuming app (and the source READMEs) do.
import '../src/styles/index.css';

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
