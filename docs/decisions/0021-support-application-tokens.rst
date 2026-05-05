21. Support application tokens
------------------------------

Status
======

Accepted

Context
=======

Paragon's design token system (see `ADR 0019: Scaling Paragon's styles
architecture with design tokens
<0019-scaling-styles-with-design-tokens.rst>`__) prefixes every emitted CSS
variable with ``--pgn-``. This is intentional for tokens that belong to the
Paragon design system: it namespaces them, keeps them from colliding with
consumer CSS, and reflects their origin.

However, Open edX micro-frontends (MFEs) define their own CSS variables for
component-level customization, and those variables are *not* part of Paragon.
They use names chosen by the MFE itself. For example, ``frontend-app-catalog``
defines this in its home banner stylesheet:

.. code-block:: scss

  background-color: var(--catalog-home-page-banner-background-color, var(--pgn-color-gray-500));

The fallback (``var(--pgn-color-gray-500)``) covers default rendering when no
MFE-specific override is supplied. Brand package authors who want to customize
the catalog banner separately are expected to set
``--catalog-home-page-banner-background-color`` to a value of their choosing.

With Paragon's existing token tooling, brand package authors cannot do this.
Every token built through ``paragon build-tokens`` is unconditionally prefixed
with ``pgn``. A brand package author defining a token at path
``catalog.home-page.banner.background-color`` would emit a CSS variable named
``--pgn-catalog-home-page-banner-background-color`` — a name no MFE actually
reads.

This is the gap reported in `issue #4274
<https://github.com/openedx/paragon/issues/4274>`__: brand package authors
should be able to use the existing token system to customize MFE CSS
variables, but the system has no mechanism for tokens that don't belong to
Paragon.

Decision
========

We will add a third top-level token directory, ``apps/``, alongside ``core/``
and ``themes/``. Tokens placed under ``apps/<app-name>/`` will be emitted
**without** the ``--pgn-`` prefix into a new build artifact at
``<buildDir>/apps/<app-name>/variables.css``. References from app tokens to
Paragon tokens will be preserved as ``var(--pgn-…)`` so theme variation
continues to flow through automatically.

The decision breaks down into three sub-decisions, each with a meaningful
rejected alternative.

1. Apps emit unprefixed CSS variables; the variable name is the JSON path
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The app build runs with ``prefix: ''`` and a token defined at JSON path
``catalog.home-page.banner.background-color`` emits the CSS variable
``--catalog-home-page-banner-background-color``. The brand package author has
full control over the resulting CSS name through the path they choose.

**Rejected alternative: a per-app prefix (e.g. ``--<app-name>-…``) injected
automatically by the build.** The reason this fails is that MFE CSS variable
conventions vary across the Open edX codebase. Some MFEs use the unprefixed
app slug (``--catalog-…``), some use the full package name
(``--frontend-app-catalog-…``), some use neither. Any single auto-prefix
scheme would either require brand package authors to write extra path
segments to compensate, or would simply fail to match the MFE's actual
variable name. Letting the JSON path be the source of truth is the only
flexible answer.

**Rejected alternative: keep the ``--pgn-`` prefix and ask MFEs to adopt
``--pgn-…`` for their own variables.** The ``--pgn-`` prefix marks a variable
as belonging to the Paragon design system. MFE-defined variables are *not*
part of Paragon — they belong to the MFE that defines them — so prefixing
them with ``--pgn-`` would be a category error regardless of any practical
considerations. Asking MFEs to migrate would also shift a non-trivial burden
across the ecosystem and contradict variable conventions MFEs have already
published, but the namespacing argument is the load-bearing one: app tokens
fundamentally aren't Paragon tokens.

2. App tokens are inlined into each theme variant's CSS bundle
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The per-theme ``index.css`` produced by ``build-tokens`` adds an ``@import``
line per discovered app, and ``postcss-import`` resolves those imports during
the SCSS compilation step in ``build-scss``. The published
``dist/<variant>.min.css`` therefore already contains every app's
custom-property declarations.

This means no MFE-side runtime change is required to consume app tokens.
Every MFE that loads a brand's ``light.min.css`` (via
``MFE_CONFIG["PARAGON_THEME_URLS"]``) automatically receives every app's
overrides.

**Rejected alternative (deferred): ship per-app CSS files in ``dist/`` and
extend the runtime manifest.** A natural future shape is one CSS file per app
at ``dist/apps/<app>.min.css``, advertised through a new ``apps`` section of
``theme-urls.json``, with Paragon's runtime loading only the app file
matching the current MFE. This is more efficient when many apps have brand
overrides — each MFE downloads only its own. We didn't do it because it
requires changes across multiple repositories (Paragon's runtime, the
MFE-side convention for "what's my app name", the manifest schema, every
brand package's build), all to optimize a cost (theme bundle size) that
isn't yet a real problem. Brands typically override a small number of apps,
so the linear growth of the bundled approach is bounded. We can revisit
this once volume justifies it.

**Rejected alternative: convention-based URLs without a manifest.** MFEs
could try-load ``<brandOverride-base>/apps/<self>.min.css`` and fall back
silently if the file is absent. This is the worst of both worlds: it requires
MFE-side changes (so it doesn't deliver the bundled approach's "no MFE
change" benefit), but it provides no manifest for discovery and produces 404
noise in production logs.

3. App builds include a theme variant for reference-resolution vocabulary
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The app build's ``include`` covers Paragon's ``core/`` *and* one theme
variant (``themes/light/``). This makes paths like ``color.gray.500`` and
``color.brand.500`` available to ``style-dictionary``'s reference resolver,
so an app token writing ``{ "$value": "{color.gray.500}" }`` correctly emits
``var(--pgn-color-gray-500)`` in the output.

The choice of theme variant is incidental — only the path layout matters for
reference resolution; values fall out at runtime against whichever Paragon
theme CSS is loaded. ``light`` is hardcoded in
``getAppStyleDictionaryConfig`` because it is the only theme variant Paragon
ships today.

**Rejected alternative: include only ``core/``.** A natural-looking simpler
design, but it fails: many tokens that brand package authors will want to
reference (colors in particular) are declared in ``themes/<variant>/`` files,
not in ``core/``. Without a theme in scope, those references would not
resolve and the build would fail or warn.

This points at an architectural smell — the coupling of "the path exists"
and "the path has this value in this theme" — that is captured in `issue
#4275 <https://github.com/openedx/paragon/issues/4275>`__ as a future
refactor. A semantic-vs-primitive token split would let app builds reference
a theme-invariant schema in ``core/`` and remove the implicit light-theme
dependency. That refactor is out of scope here; the hardcoded ``light`` is a
deliberate workaround that this ADR records so it can be revisited.

Consequences
============

* **Brand package authors gain a token-level mechanism for MFE
  customization.** What previously required hand-rolled CSS now flows through
  the same JSON-driven design token pipeline as Paragon's own tokens.

* **No MFE-side change is required.** Brand packages continue to publish
  ``dist/<variant>.min.css`` that MFEs load via
  ``MFE_CONFIG["PARAGON_THEME_URLS"]``. App overrides arrive as additional
  ``:root`` declarations in that same file. MFEs that don't read a particular
  ``--<app>-…`` variable simply ignore the declaration; the theme bundle
  grows linearly with the number of apps a brand actually overrides.

* **The ``--pgn-`` prefix is no longer a hard invariant of the token
  system.** Output prefixes now depend on which top-level directory a token
  lives under. Consumers writing tokens don't need to reason about it — the
  directory choice does it for them.

* **Per-app CSS files are not currently emitted to ``dist/``.** Apps are
  bundled into the theme variant's CSS rather than served independently. If
  app overrides become widespread enough that per-MFE loading is worth it, a
  future iteration can revisit decision (2) above.

* **App tokens reach into ``themes/`` for reference resolution, not just
  ``core/``.** Many of the paths a brand package author will want to
  reference — colors especially — are declared in ``themes/<variant>/``, not
  in ``core/``. The app build accommodates that today by including
  ``themes/light`` in its style-dictionary ``include`` purely for vocabulary.
  Issue `#4275 <https://github.com/openedx/paragon/issues/4275>`__ tracks
  splitting Paragon's tokens into a theme-invariant schema (in ``core/``)
  and theme-specific values (in ``themes/``), at which point app builds
  would only need ``core/``.

Resources
=========

* `Issue #4274 — Handle non-pgn-prefixed tokens from MFEs
  <https://github.com/openedx/paragon/issues/4274>`__
* `Issue #4275 — Decouple semantic token declarations from theme-specific
  values <https://github.com/openedx/paragon/issues/4275>`__
* `ADR 0019 — Scaling Paragon's styles architecture with design tokens
  <0019-scaling-styles-with-design-tokens.rst>`__
