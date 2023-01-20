1.  Scaling the Paragon design system's styles with design tokens and `style-dictionary`
########################################################################################

Status
======

Provisional

Context
=======

A critical component of the Open edX platform is the ability to customize its visual styles to reflect the custom brand of its consumers in the Open edX community. Historically, the Open edX platform (via `edx-platform`) has supported a comprehensive theming system fulfilling the community's theming needs, including brand customization but also functionality, too (e.g., modifying, adding, or removing user interface elements). However, as we've moved towards React micro-frontends, the theming from a brand customization perspective has been largely replaced by the theming system provided by the Paragon design system.

Within Paragon, "theming" predominantly refers to brand customization as it relates to visual styles. It does not intend to be responsible for customization of functionality as in the historical sense of comprehensive theming in `edx-platform`. Enabling such customization to bring comprehensive theming support to micro-frontends is on the roadmap for the Frontend Working Group as a separate initiative outside of Paragon itself.

Current styles architecture
---------------------------

Today, Paragon's core styles are heavily based on `Bootstrap 4 <https://getbootstrap.com/docs/4.6/getting-started/introduction/>`_. The decision to rely on Bootstrap was to extend a popular, existing repsonsive CSS framework to get an initial design system created more efficienctly than creating all styles from scratch in addition to general knowledge and awareness of Bootstrap throughout the frontend community (see `OEP-16 <https://open-edx-proposals.readthedocs.io/en/latest/best-practices/oep-0016-bp-adopt-bootstrap.html>`_ for more details).

Bootstrap 4 supports theming of visual styles through SCSS variables. As a result, Paragon's current theming system also relies overriding SCSS variables, both from core Bootstrap and custom Paragon variables.

While Paragon's SCSS theming system has largely supported Open edX's transition from building legagy UIs in Django to React micro-frontends, we have identified several challenges that hinder its continued scalability and use in micro-frontends throughout Open edX.

Challenges with current styles architecture
-------------------------------------------

* **On theme changes, all its consuming applications must be upgraded, re-built, and re-deployed.**

  * Because Paragon currently heavily relies on SCSS variables for its theme, when any SCSS variable(s) are changed, every application consuming that theme needs to upgrade to the new version, be re-built, and get re-deployed.
  
    * With applications needing to be rebuild/redeployed, it's a significant effort to upgrade all applications to the new theme, especially if trying to do all applications at once.
  
  * With runtime theming via CSS variables, when a change is made to the theme, only the theme itself should need to get re-built, and the styles should automatically get applied to all consuming applications without needing to explicitly upgrade, re-build, and re-deploy those applications.

* **Paragon styles are not platform agnostic nor a single source-of-truth.**

  * The styles associated with Paragon themes are largely only accessible in environments that support SCSS as pretty much all Paragon's style properties are baked into SCSS variables.
  * Ideally, the style properties would be defined in a platform agnostic way such that they can be transformed for various platforms, like iOS and Android apps or even a Figma integration.
  
    * *Note: these additional platform support ideas is more of a longer-term vision for how we could extend the design tokens work further in the future.*

* **Supporting both system-wide themes and organizational themes.**

  * The primary theming use case for Paragon is largely around system-wide theming, where all applications in the Open edX ecosystem share the same theme.
  * However, there are use cases for organizational themes, too (i.e., updating the colors for specific partners/organizations, enterprise customers, etc.).
  
    * This is not well supported today and largely requires overriding CSS classes from Paragon rather than the desired approach of overriding underlying CSS variable(s). This an anti-pattern as Paragon class names should really be considered internal implementation details of Paragon components, and not used by consumers directly.

* **Dependence on Bootstrap's internal styles.**

  * Since Paragon is largely built on top of Bootstrap 4, it relies heavily on Bootstrap's styles and SCSS variables for many core aspects of Paragon themes. However, Bootstrap 4 itself doesn't support runtime theming nor does it give us control to replace its variables with Paragon-specific CSS variables.

Decision
========

We will migrate Paragon's theming and styles architecture to rely on CSS variables instead of SCSS variables to enable runtime theming support for consuming applications throughout the Open edX platform.

In order to create a scalable, platform-agnostic way to define style properties (i.e., design tokens), Paragon will utilize `style-dictionary` (`docs <https://amzn.github.io/style-dictionary/#/>`_), a "build system that allows you to define styles once, in a way for any platform or language to consume."

If Paragon opted to hardcode the new CSS variables derived from the existing SCSS variables, we would still be in a situation where our design tokens are not platform-agnostic in that supporting CSS variables alone implies Paragon can only be utilized by browser-based applications.

However, one of the long-term visions for the Paragon design system is to be the source of truth for visual styles across the entire Open edX ecosystem. This includes the iOS and Android mobile applications, which currently define and manage their styles (e.g., colors, spacing, etc.) separately from the design system itself even though they share similar design principles.

By only transforming our hardcoded SCSS variables to hardcoded CSS variables, we would be missing out on the opportunity to iterate towards the vision of making the Paragon design system be platform-agnostic.

As a result, Paragon's existing SCSS variables will be migrated to design tokens defined as JSON files that get transformed by `style-dictonary` into various platform-specific styles. To start, we are transforming the design tokens specified in JSON to CSS variables as well as some CSS utility classes. In the future, our approach may expand to transforming the design tokens to iOS and Android compatible files as well.

By utilizing a tool like `style-dictonary`, the naming convention of design tokens and the resulting CSS variables will be standardized and consistent (e.g., prefixed with `pgn-`, defined within the context of specified categories like `color`).

An additional longer term vision may also include transforming the Paragon design tokens to be compatible with Figma, such that the Paragon design tokens are truly a single source of truth across both design and engineering.

How does `style-dictionary` work?
---------------------------------

At its core, `style-dictionary` finds all design token files, deep merges them together, and then parses them based on a configuration for how it should transform the discovered design tokens. As it parses the design token files, it resolves aliases or references to other design tokens. The final output from `style-dictionary` are automatically generated files (e.g., `variables.css`) based on the platforms specified in the configuration.

.. image:: ./assets/style-dictionary-build-diagram.png
  :width: 100%
  :alt: `style-dictionary` build architecture diagram

Consequences
============

* **Updates required for consuming applications using and/or overriding SCSS variables.**

  * We are attempting to mitigate this concern keeping the SCSS variables Paragon has in place today, but redefining them to reference the newly generated CSS variables instead. This approach should allow consumers who rely on the existing SCSS variables to continue to use them as they are, but still utilize the underlying CSS variable for runtime theming support instead.
  * We also plan to ensure the output CSS/SCSS supported by Paragon is well-documented such that consumers know what variables are available to use.

* **Breaking change for how Paragon themes are currently created.**

  * Currently, Paragon themes are created following the guidance in `@edx/brand-openedx`, which defines a set of files in which theme authors should modify to override the core Paragon starter theme. These files include a `_variables.scss` file in which theme authors may override any of Paragon's SCSS variables.
  * With design tokens, theme authors will no longer override any variables in SCSS/CSS directly, but rather define JSON files to override the core Paragon design tokens. After re-building the theme, a new `variables.css` file representing all the CSS variables for the theme is generated, including the overriden values in theme's custom JSON files.
  * The resulting CSS file may be hosted on a CDN and applied at runtime to consuming applications.

* **Onboarding designers and engineers to design tokens.**

  * Given defining styles via JSON files is a bit of a nascent paradigm, there is a fair concern that onboarding designers and engineers to this new styles architecture may be more difficult than defining traditional styles (e.g., hardcoding CSS variables). That said, with adequate documentation and training, we feel the benefits of design tokens for Paragon's future scalability outweigh potential increased complexities with getting up to speed with design tokens.
  * There is also a vision that there could, in the future, be a user interface built on top of the JSON design tokens such that changes could be made by designers and engineers alike without needing to understanding the underlying `style-dictionary` tool and JSON schema.
  * Design tokens will also be annotated with brief descriptions of their purpose, which will be helpful for theme authors.
