# Paragon modernization prototype — Button module

This is the **Step 1 reference implementation** for
[ADR 0022](../docs/decisions/0022-modernization-remove-bootstrap.rst). It
migrates the full `Button` module (`Button`, `ButtonGroup`, `ButtonToolbar`)
onto the proposed modern stack, in isolation, without touching the live library
build.

It is intentionally self-contained and **not published** — it exists to let the
Paragon Working Group evaluate the approach concretely.

## What it demonstrates

| Concern | Old | This prototype |
| --- | --- | --- |
| Behavior | `react-bootstrap` | **React Aria** (`useButton`, `useFocusRing`) |
| Styling | Bootstrap 4 SCSS, global classes | **CSS Modules** over the same `--pgn-*` tokens |
| Theming API | `style-dictionary` → CSS vars | **Unchanged** — imported verbatim (`src/tokens.css`) |
| Types | mixed `.jsx`/`.tsx` | **100% TypeScript** |
| Build | Babel + tsc + Makefile | **Vite** library mode + `vite-plugin-dts` |
| Tests | Jest | **Vitest** + Testing Library |
| Docs | Gatsby + react-docgen v5 | **Storybook 8** (props from TS types) |

The public prop API (`variant`, `size`, `iconBefore/After`, `as`, `disabled`,
`onClick`, …) is preserved from `@openedx/paragon`'s Button, so consuming code
does not change.

## Running it

```bash
cd prototype
npm install
npm test           # Vitest unit + a11y-ish behavior tests
npm run storybook  # interactive workbench at http://localhost:6007
npm run build      # ESM + .d.ts into dist/
```

## Key migration decisions surfaced here (for WG ratification)

1. **Polymorphic `as` via `useButton`, not `<Button>` from
   `react-aria-components`.** Paragon buttons are frequently rendered as `<a>`
   (link-buttons in MFEs). React Aria's `useButton` hook supports any
   `elementType` and — importantly — gives correct `disabled` semantics on
   non-`<button>` elements, replacing the old `a.btn.disabled { pointer-events:
   none }` hack.

2. **`onClick` is bridged, `onPress` is added.** React Aria's native model is
   `onPress` (device-agnostic). To avoid a breaking change we keep `onClick`
   working and expose `onPress` alongside it. **Decision needed:** whether to
   deprecate `onClick` over a major version or keep both indefinitely.

3. **Variant theming is inline token-variable remapping** (`variantVars` in
   `Button.tsx`), a 1:1 port of the SCSS `button-variant` mixin. This avoids 44
   near-identical CSS rules. The alternative — static per-variant classes or
   `[data-variant]` blocks — keeps all styling in CSS at the cost of verbosity.
   Worth a WG preference call before rolling out to 60+ components.

4. **Focus uses `[data-focus-visible]` from React Aria** instead of `:focus`,
   so the focus ring shows only for keyboard users.

5. **`src/tokens.css` imports the repo's already-compiled token CSS.** The
   prototype defines **zero** tokens of its own — this is the proof that the
   design-tokens theming API stays byte-compatible when Bootstrap is removed.

## Known gaps (deliberately out of scope for Step 1)

- Uses a real `@openedx/paragon` `Icon` would be swapped in; the prototype
  renders the icon component directly.
- `dropdown-toggle-split` / `btn-group-toggle` (radio/checkbox groups) are not
  ported — they belong with the Dropdown/Form migrations.
- No visual-regression snapshots yet; Storybook + the a11y addon are wired so
  these can be added via `@storybook/addon-vitest`.
