import {
  LiveProvider, LiveEditor, LivePreview, LiveError,
} from 'react-live';

import { scope } from './scope';
import styles from './live.module.css';

export interface GenerateCodeOptions {
  /**
   * Prop values equal to these are treated as the component's default and are
   * dropped from the generated JSX (e.g. Button's `size="md"`, Stack's
   * `direction="vertical"`), keeping the snippet minimal.
   */
  defaults?: Record<string, unknown>;
  /**
   * Literal JSX to place between the open and close tags. When it spans multiple
   * lines the element is formatted as an indented block. If omitted, a string
   * `children` prop is used as the text body (the Button case); with neither the
   * element is self-closed.
   */
  children?: string;
}

/**
 * Serializes a component name + its story args into an editable JSX string.
 *
 * This is deliberately component-agnostic: every prototype component's
 * playground feeds its own args, defaults and children template through here, so
 * there is no per-component code-generation logic hard-coded in the docs layer.
 *
 * Serialization rules (matching how the examples are hand-authored):
 * - a prop whose value equals a supplied default is omitted;
 * - `undefined` / `null` / `false` props are omitted;
 * - `true` renders as a bare attribute (`disabled`);
 * - strings render as `name="value"`, everything else as `name={value}`.
 */
export function generateCode(
  component: string,
  // `object`, not `Record<string, unknown>`, so a component's concrete args type
  // (which has no index signature) can be passed without a cast at the call site.
  props: object,
  options: GenerateCodeOptions = {},
): string {
  const { defaults = {}, children } = options;
  const record = props as Record<string, unknown>;

  const attrs: string[] = [];
  for (const [name, value] of Object.entries(record)) {
    if (name === 'children') continue;
    if (name in defaults && defaults[name] === value) continue;
    if (value === undefined || value === null || value === false) continue;
    if (value === true) {
      attrs.push(name);
    } else if (typeof value === 'string') {
      attrs.push(`${name}="${value}"`);
    } else {
      attrs.push(`${name}={${JSON.stringify(value)}}`);
    }
  }
  const attrStr = attrs.length ? ` ${attrs.join(' ')}` : '';

  const body = children ?? (typeof record.children === 'string' ? record.children : '');
  if (!body) return `<${component}${attrStr} />`;
  if (body.includes('\n')) {
    const indented = body.split('\n').map((l) => (l ? `  ${l}` : l)).join('\n');
    return `<${component}${attrStr}>\n${indented}\n</${component}>`;
  }
  return `<${component}${attrStr}>${body}</${component}>`;
}

export interface LivePlaygroundProps {
  /** The generated JSX snippet — rendered live and shown in the editor. */
  code: string;
}

/**
 * The Playground example: a live editor whose JSX is generated (by
 * `generateCode`) from a story's args. Because Storybook's `<Controls>` block
 * edits those same args, changing a control regenerates the code and — via the
 * `key` below — remounts the editor, overwriting whatever was typed. Direct edits
 * in the editor persist until the next control change.
 *
 * It is intentionally component-agnostic: it just renders whatever `code` string
 * it is handed, so the same playground drives Button, ButtonGroup, Collapsible,
 * Stack, and any future prototype component (everything the snippet references
 * must be in `scope`).
 */
export function LivePlayground({ code }: LivePlaygroundProps) {
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
