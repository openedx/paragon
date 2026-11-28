/**
 * Types for the deprecated single-icon import paths, such as `@openedx/paragon/icons/es5/Add`.
 * They mark those imports as deprecated in editors and linters.
 *
 * One wildcard declaration covers every icon, so no per-icon .d.ts files are needed. Wildcard
 * `declare module` is only allowed in a global (non-module) file, so this file must not contain any top-level
 * `import` or `export`. `icons/index.d.ts` and the main `@openedx/paragon` types load it with
 * `/// <reference path>`, so it applies to any project that imports from either.
 *
 * (The `@openedx/paragon/icons/es5` index has its own generated types: see build-compat.mjs.)
 */

declare module '@openedx/paragon/icons/es5/*' {
  /** @deprecated Import icons from '@openedx/paragon/icons' instead, e.g. `import { Add } from '@openedx/paragon/icons';` */
  const icon: import('react').FC<any>;
  export default icon;
}

declare module '@openedx/paragon/icons/jsx/*' {
  /** @deprecated Import icons from '@openedx/paragon/icons' instead, e.g. `import { Add } from '@openedx/paragon/icons';` */
  const icon: import('react').FC<any>;
  export default icon;
}
