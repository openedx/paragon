import {
  LiveProvider, LiveEditor, LivePreview, LiveError,
} from 'react-live';

import { scope } from './scope';
import styles from './live.module.css';

export interface LiveExampleProps {
  /** A single JSX expression. No `import` statements; identifiers must be in `scope`. */
  code: string;
}

/**
 * An editable, live-rendering code example for MDX docs pages.
 *
 * These examples are intentionally **untyped** — the code string is the single
 * source of truth. Use this for illustrative snippets. For the controls-driven,
 * args-bound example see `LivePlayground`.
 */
export function LiveExample({ code }: LiveExampleProps) {
  return (
    // `sb-unstyled` opts the preview out of Storybook's docs typography reset
    // (which otherwise forces "Nunito Sans" onto every div in the docs prose),
    // so components render in the Paragon base font like a real consuming app.
    <div className={`${styles.live} sb-unstyled`}>
      <LiveProvider code={code.trim()} scope={scope}>
        <LivePreview className={styles.preview} />
        <div className={styles.editorLabel}>Editable — try changing the code</div>
        <LiveEditor className={styles.editor} />
        <LiveError className={styles.error} />
      </LiveProvider>
    </div>
  );
}

export default LiveExample;
