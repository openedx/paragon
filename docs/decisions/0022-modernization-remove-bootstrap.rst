22. Modernization: Removing Bootstrap and Modernizing the Toolchain
-------------------------------------------------------------------

Status
------

Proposed

Context
-------

Paragon is a mature, accessibility-focused React component library. Its public
surface has two stable, widely-depended-upon contracts:

1. The **React component API** — ~99 exports whose props are consumed by dozens
   of Open edX micro-frontends (MFEs).
2. The **design-tokens theming API** — a ``style-dictionary`` pipeline that
   compiles DTCG-style token JSON into CSS custom properties, shipped as
   ``core.css`` / ``light.css`` and overridden by ``@edx/brand`` packages.

Underneath those contracts, however, Paragon rests on aging foundations:

- **Bootstrap 4** provides both a *behavior* layer (34 components wrap
  ``react-bootstrap`` sub-components) and a *style* layer (``core.scss`` imports
  ``~bootstrap/scss/{reboot,root,mixins,transitions,grid,...}``). Bootstrap 4 is
  no longer actively developed, is built on legacy SCSS, and blocks adoption of
  modern CSS and tooling. ``react-bootstrap`` v1 targets Bootstrap 4 and is
  effectively frozen for our purposes.
- The **build** relies on Babel + ``tsc`` + a hand-written ``Makefile``.
- **Tests** run on Jest with ``ts-jest`` / ``babel-jest``.
- The **documentation site** runs on Gatsby 5 with
  ``gatsby-transformer-react-docgen`` and ``react-docgen`` v5, which parses
  JavaScript rather than our TypeScript types. This makes props tables
  unreliable and the doc pipeline difficult to maintain.

Two properties of the current codebase make modernization tractable rather than
requiring a hard fork:

- Paragon components are already **thin adapters**: Paragon owns the public prop
  API and delegates internals to ``react-bootstrap``. Swapping the internal
  engine does not, by itself, change the public API.
- The **theming/token pipeline is already Bootstrap-independent**. Components
  reference token-derived CSS custom properties; the ``source: $scss-var`` field
  on each token is only a back-compat bridge to Bootstrap SCSS variables. The
  emitted ``core.css`` / ``light.css`` contract does not depend on Bootstrap.

A TypeScript migration is also already ~half complete (roughly 31 ``index.tsx``
vs. 27 ``index.jsx`` at time of writing).

This ADR supersedes the direction of:

- **ADR 0004** (Usage of Bootstrap) and **ADR 0009** (Usage of React-Bootstrap),
  which established Bootstrap and ``react-bootstrap`` as foundations.

It also revisits **ADR 0006** (Removal of CSS Module Support). ADR 0006 removed
CSS Modules for one specific reason: component SCSS files imported Bootstrap
*partials* (mixins/variables) that drifted between Bootstrap minor versions and
caused compile errors in consuming apps. Once Bootstrap SCSS is removed
entirely, that objection no longer applies — the CSS Modules reintroduced here
consume only Paragon's own token CSS custom properties, never Bootstrap
partials.

Decision
--------

We will re-implement Paragon on modern, fully-typed foundations while preserving
both public contracts (the React component API and the design-tokens theming
API). The change is delivered **incrementally** — swapping engines behind stable
APIs — not as a big-bang rewrite.

Concretely:

1. **Behavior layer → React Aria Components.** Replace ``react-bootstrap`` with
   `React Aria Components <https://react-spectrum.adobe.com/react-aria/>`_. It is
   headless (leaving Paragon in full control of DOM and CSS), fully typed, and
   provides best-in-class WAI-ARIA patterns plus built-in internationalization
   and RTL support — a direct fit for Paragon's accessibility and ``react-intl``
   commitments. Each component's public props are preserved; only the internal
   engine changes. This also retires ``uncontrollable``, ``tabbable``, and
   ``react-focus-on``.

2. **Style layer → CSS Modules driven by token CSS variables.** Remove Bootstrap
   SCSS. Each component's styles become a co-located ``*.module.css`` file that
   references the existing token-derived CSS custom properties. The small
   Bootstrap surface actually in use (``reboot``/``root``, grid, utilities) is
   re-implemented with modern native CSS (nesting, ``:where()`` for low
   specificity, logical properties for RTL, container queries). Consumer usage
   (``dependent-usage.json``) guides which utilities to retain.

3. **Design-tokens theming API → preserved unchanged.** The ``style-dictionary``
   pipeline and the emitted ``core.css`` / ``light.css`` CSS-variable contract
   stay byte-compatible so ``@edx/brand`` themes and consuming MFEs are
   unaffected. Additionally, a new build target emits a typed ``tokens.ts`` so
   tokens are first-class in TypeScript. The ``source: $scss-var`` back-compat
   field is removed only after Bootstrap SCSS is gone.

4. **Supporting dependencies:**

   - ``react-table`` v7 → **TanStack Table v8** (same author, fully typed).
   - ``@popperjs`` / ``react-popper`` → **Floating UI** or React Aria overlays.
   - ``axios`` → native ``fetch``.
   - ``classnames`` → ``clsx`` (or retain).
   - Retain: ``style-dictionary``, ``chroma-js``, ``react-intl``,
     ``react-colorful``, ``react-dropzone``, ``react-imask``,
     ``react-loading-skeleton``.

5. **Build → Vite (library mode) + ``vite-plugin-dts``** (or ``tsup``),
   replacing Babel + ``tsc`` + ``Makefile``. Emits ESM + ``.d.ts`` and preserves
   ``sideEffects``/tree-shaking.

6. **Tests → Vitest**, keeping ``@testing-library/react`` and the existing
   accessibility assertions.

7. **Documentation → Storybook 8 (Vite builder)**, retiring Gatsby,
   ``gatsby-transformer-react-docgen``, ``react-docgen`` v5, ``react-live``, and
   Playroom. Props tables are generated from TypeScript types
   (``react-docgen-typescript``); existing per-component ``README.md`` / ``.mdx``
   map onto Storybook Docs pages; interactive controls replace Playroom; the a11y
   addon and interaction/visual testing reinforce the accessibility mission.

8. **Complete the TypeScript migration** so the library is 100% typed.

Migration sequence
~~~~~~~~~~~~~~~~~~~

The work ships continuously behind stable public APIs:

1. Switch build to Vite, tests to Vitest, finish remaining ``.jsx → .tsx``, and
   emit a typed ``tokens.ts``. No consumer-visible change.
2. Replace Bootstrap SCSS imports with a token-built reset/grid/utility layer.
   Snapshot the full set of emitted CSS custom properties to prove the theming
   contract held.
3. Swap the behavior engine component-by-component onto React Aria (and DataTable
   onto TanStack Table), leaf components first, each shipping independently.
4. Stand up Storybook 8 alongside Gatsby, port component pages, then retire
   Gatsby.
5. Remove the ``source:`` SCSS back-compat from tokens and drop the legacy
   dependencies (``bootstrap``, ``react-bootstrap``, ``axios``,
   ``uncontrollable``, ``tabbable``, ``react-focus-on``, ``sass``).

Consequences
------------

- **Public contracts are preserved.** Because components are adapters and the
  token pipeline is Bootstrap-independent, the React component API and the CDN
  ``core.css`` / ``light.css`` theming contract remain stable. ``@edx/brand``
  themes and consuming MFEs upgrade without breaking, likely across one or two
  major versions rather than a fork.
- **Accessibility improves**, since React Aria's ARIA/keyboard/focus/i18n
  behavior is more rigorous and better maintained than our Bootstrap 4 baseline.
- **The internal styling model changes** from global Bootstrap classes to
  component-scoped CSS Modules over token variables. This reintroduces CSS
  Modules (cf. ADR 0006) but without the Bootstrap-partial version-drift problem
  that motivated their removal.
- **Consumers relying on raw Bootstrap 4 class names** (e.g. ``btn``,
  ``col-*``, Bootstrap utility classes) rather than Paragon components or tokens
  will be affected. Paragon will provide a compatibility utility layer for the
  classes real consumers depend on and communicate removals via major-version
  releases.
- **Guardrails required before removal steps:** snapshot the emitted CSS
  custom-property set (theming regression net), keep per-component
  ``@testing-library`` + a11y assertions as the public-API contract test, and use
  ``dependent-usage.json`` to confirm which utility classes and props consumers
  actually use before pruning.
- **Toolchain is unified** on Vite/Vitest/Storybook, reducing bespoke build code
  (Makefile, Babel config, Gatsby plugins) and making the docs site maintainable.

References
----------

* React Aria Components: https://react-spectrum.adobe.com/react-aria/
* TanStack Table: https://tanstack.com/table/latest
* Floating UI: https://floating-ui.com/
* Vite library mode: https://vitejs.dev/guide/build.html#library-mode
* Storybook: https://storybook.js.org/
* ADR 0004 (Usage of Bootstrap), ADR 0006 (Removal of CSS Module Support),
  ADR 0009 (Usage of React-Bootstrap), ADR 0018 (Design Tokens /
  ``style-dictionary``), ADR 0019 (Scaling Styles with Design Tokens)
