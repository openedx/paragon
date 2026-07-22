import {
  LiveProvider, LiveEditor, LivePreview, LiveError,
} from 'react-live';

import type { ButtonProps } from '../Button/types';
import { scope } from './scope';
import styles from './live.module.css';

/** Serializes the current Button args into a JSX string shown in the editor. */
export function generateCode(args: Partial<ButtonProps>): string {
  const attrs: string[] = [`variant="${args.variant ?? 'primary'}"`];
  if (args.size && args.size !== 'md') attrs.push(`size="${args.size}"`);
  if (args.disabled) attrs.push('disabled');
  if (args.block) attrs.push('block');

  const label = typeof args.children === 'string' && args.children.length
    ? args.children
    : 'Button';

  const attrStr = attrs.join(' ');
  return `<Button ${attrStr}>${label}</Button>`;
}

/**
 * The Playground example: a live editor whose JSX is generated from the story's
 * args. Because Storybook's `<Controls>` block edits those same args, changing a
 * control regenerates the code and — via the `key` below — remounts the editor,
 * overwriting whatever was typed. Direct edits in the editor persist until the
 * next control change.
 */
export function LivePlayground(args: Partial<ButtonProps>) {
  const code = generateCode(args);
  return (
    // `sb-unstyled`: opt out of Storybook's docs font reset (see LiveExample).
    <div className={`${styles.live} sb-unstyled`}>
      {/* key={code}: a new generated string (from a changed control) forces a
          remount so the editor content is replaced with the regenerated JSX. */}
      <LiveProvider key={code} code={code} scope={scope}>
        <LivePreview className={styles.preview} />
        <div className={styles.editorLabel}>
          Generated from the controls below — editable, but re-editing a prop overwrites it
        </div>
        <LiveEditor className={styles.editor} />
        <LiveError className={styles.error} />
      </LiveProvider>
    </div>
  );
}

export default LivePlayground;
