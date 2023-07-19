19.  Scaling the Paragon design system's styles with design tokens and ``style-dictionary``
###########################################################################################

Status
======

Accepted

Context
=======

A critical component of the Open edX platform is the ability to customize its visual styles to reflect the custom brand of its consumers in the Open edX community. Historically, the Open edX platform (via ``edx-platform``) has supported a comprehensive theming system fulfilling the community's theming needs, including brand customization but also functionality, too (e.g., modifying, adding, or removing user interface elements). However, as we've moved towards React micro-frontends, the theming from a brand customization perspective has been largely replaced by the theming system provided by the Paragon design system.

Within Paragon, "theming" predominantly refers to brand customization as it relates to visual styles. It does not intend to be responsible for customization of functionality as in the historical sense of comprehensive theming in ``edx-platform``. The Frontend Working Group's roadmap includes improvements to micro-frontend customizability.

Current styles architecture
---------------------------

Today, Paragon's core styles are heavily based on `Bootstrap 4 <https://getbootstrap.com/docs/4.6/getting-started/introduction/>`__. The decision to rely on Bootstrap was to extend a popular, existing responsive CSS framework to get an initial design system created more efficiently than creating all styles from scratch in addition to general knowledge and awareness of Bootstrap throughout the frontend community (see `OEP-16 <https://open-edx-proposals.readthedocs.io/en/latest/best-practices/oep-0016-bp-adopt-bootstrap.html>`__ for more details).

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
  
    * This is not well supported today and largely requires overriding CSS classes from Paragon rather than the desired approach of overriding underlying CSS variable(s). This an anti-pattern as Paragon class names should really be considered internal implementation details of Paragon components, and not used by consumers directly. For example, the Enterprise MFEs within Open edX (e.g., frontend-app-learner-portal-enterprise) inject ``<style>`` tag in the HTML document with CSS class name overrides such as ``.btn-primary { background-color: $enterpriseCustomerPrimaryColor }``. Ideally, similar use cases could instead override a CSS variable such as ``--pgn-color-btn-primary-bg`` instead such that it gets re-used throughout all Paragon styles, not just ``.btn-primary``.

* **Dependence on Bootstrap's internal styles.**

  * Since Paragon is largely built on top of Bootstrap 4, it relies heavily on Bootstrap's styles and SCSS variables for many core aspects of Paragon themes. However, Bootstrap 4 itself doesn't support runtime theming nor does it give us control to replace its variables with Paragon-specific CSS variables.

Decision
========

We will migrate Paragon's theming and styles architecture to rely on CSS variables instead of SCSS variables to enable runtime theming support for consuming applications throughout the Open edX platform.

In order to create a scalable, platform-agnostic way to define style properties (i.e., design tokens), Paragon will utilize ``style-dictionary`` (`docs <https://amzn.github.io/style-dictionary/#/>`__), a "build system that allows you to define styles once, in a way for any platform or language to consume."

If Paragon opted to hardcode the new CSS variables derived from the existing SCSS variables, we would still be in a situation where our design tokens are not platform-agnostic in that supporting CSS variables alone implies Paragon can only be utilized by browser-based applications.

However, one of the long-term visions for the Paragon design system is to be the source of truth for visual styles across the entire Open edX ecosystem. This includes the iOS and Android mobile applications, which currently define and manage their styles (e.g., colors, spacing, etc.) separately from the design system itself even though they share similar design principles.

By only transforming our hardcoded SCSS variables to hardcoded CSS variables, we would be missing out on the opportunity to iterate towards the vision of making the Paragon design system be platform-agnostic.

As a result, Paragon's existing SCSS variables will be migrated to design tokens defined as JSON files that get transformed by ```style-dictionary``` into various platform-specific styles. To start, we are transforming the design tokens specified in JSON to CSS variables as well as some CSS utility classes. In the future, our approach may expand to transforming the design tokens to iOS and Android compatible files as well.

By utilizing a tool like ``style-dictionary``, the naming convention of design tokens and the resulting CSS variables will be standardized and consistent (e.g., prefixed with ``pgn-``, defined within the context of specified categories like ``color``).

An additional longer term vision may also include transforming the Paragon design tokens to be compatible with Figma, such that the Paragon design tokens are truly a single source of truth across both design and engineering.

How does ``style-dictionary`` work?
---------------------------------

At its core, ``style-dictionary`` finds all design token files, deep merges them together, and then parses them based on a configuration for how it should transform the discovered design tokens. As it parses the design token files, it resolves aliases or references to other design tokens. The final output from ``style-dictionary`` are automatically generated files (e.g., ``variables.css``) based on the platforms specified in the configuration.

The majority of the above architecture is handled ``style-dictionary`` itself; what concerns Paragon is how to define its configuration (i.e., which platforms to support) and the design tokens JSON file schema.

.. image:: ./assets/style-dictionary-build-diagram.png
  :width: 100%
  :alt: `style-dictionary` build architecture diagram

Design tokens implementation in Paragon 
----------------------------------------

In Paragon's design token implementation with ``style-dictionary``, there will be a new directory (``tokens``) containing the JSON files representing Paragon's design tokens schema. These tokens represent style properties defined at several different layers of abstraction:

1. Global tokens
2. Alias tokens
3. Component tokens

Global tokens
^^^^^^^^^^^^^

The primitive values in the Paragon design language. The color palette, typography, spacing, animation, etc. are treated as global tokens. They may be used directly, and are inherited by other token types.

Example::

  {
    "color": {
      "primary": {
        "500": {
          "value": "#00262B",
        },
        "base": {
          "value": "{color.primary.500.value}",
        }
      }
  }

The above global tokens would be transformed into CSS variables by ``style-dictionary`` as follows::

  --pgn-color-primary-500: #00262B;
  --pgn-color-primary-base: var(--pgn-color-primary-500);

Alias tokens
^^^^^^^^^^^^

Intends to map global tokens and even other alias tokens to specific contexts, communicating the intended purpose of a token.

Example::

  {
    "color": {
      "theme": {
        "default": {
          "primary": {
            "value": "{color.primary.500.value}"
          }
        }
      }
    }
  }

The above alias token would be transformed into a CSS variable by ``style-dictionary`` as follows::

  --pgn-color-theme-default-primary: var(--pgn-color-primary-500);

Component tokens
^^^^^^^^^^^^^^^^

An exhaustive representation of every value associated with specific components in the design system. Component tokens give explicit control over component-specific styles. They may inherit from other token types.

Example::

  {
    "color": {
      "btn": {
        "bg": {
          "primary": {
            "value": "{color.theme.default.primary.value}"
          }
        }
      }
    }
  }

The above component token would be transformed to a CSS variable by ``style-dictionary`` as follows::

  --pgn-color-btn-bg-primary: var(--pgn-color-theme-default-primary);

By creating tokens within these 3 categories, the Paragon theming system provides more explicit control in how design tokens are utilized throughout the design system and its components.

For example, by using alias tokens, theme authors may change the style properties of components consuming a specific alias token(s) without needing to necessarily change any underlying global token itself.

In the token examples shown above, say the button component token referred directly to a global token instead. To update that button's background color (say, to a darker shade of the base primary color), the theme author must update the foundational global token to change the button color. However, this may have unintentend consequences in changing the color of components that were not intended to be changed.

Instead, by having the component token inherit from an alias token, theme authors can modify the alias token without needing to change the underlying global token, which helps mitigate concerns around changing a foundational style property heavily used throughout the entire design system.

In the above example, for instance, the value of ``--pgn-color-theme-default-primary`` could be changed to ``{color.primary.700}`` rather than changing the underlying value of ``{color.primary.500}`` directly, which might need to remain at its current value given its use elsewhere throughout the design system.

Additional token file examples
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Please refer to the `tokens <https://github.com/openedx/paragon/tree/alpha/tokens/src>`__ defined in the current ``alpha`` release of Paragon.

Implications for theme authors (e.g., ``@edx/brand`` packages)
------------------------------------------------------------

Currently, Paragon recommends theme authors to create a theme package such as ``@edx/brand-openedx`` (`Github <https://github.com/openedx/brand-openedx>`__) and ``@edx/brand-edx.org`` (`Github <https://github.com/edx/brand-edx.org>`__).

While the migration from SCSS variables to CSS variables is a breaking change for theme authors, we have tried to mitigate this by keeping the existing SCSS variables but defining them such that their values refer to the new CSS variables. Because SCSS can't evaluate the CSS variables at runtime, it utilizes the CSS variable in the resulting output CSS used in the browser.

Currently, theme authors largely modify SCSS variables from core Paragon by creating a ``_variables.scss`` file and importing it *after* the core Paragon SCSS styles in consuming applications (e.g., micro-frontends). Doing so, SCSS will override the original variables' values defined by core Paragon with the new SCSS from the ``@edx/brand`` theme.

With design tokens, theme authors will instead override core Paragon tokens by defining their own JSON tokens that get deep merged alongside the core Paragon tokens, thus overriding any tokens that were defined by the theme author.

This approach gives theme authors the same theming experience as core Paragon's tokens architecture though theme authors could also hardcode the CSS variables themselves like they do with SCSS variables today. The former approach is primarily recommended by Paragon to enable theme authors to have same theming approach as core Paragon.

Furthermore, given CSS variables may be generated and consumed by applications in numerous ways, it's worth mentioning alternative strategies as well.

For example, the above approach largely assumes you're able to generate and use a CSS file containing CSS variable overrides in consuming applications for each desired theme. It may be impractical to generate and host a CSS file for each dynamically generated theme, e.g. if the theme is driven by user input or the theme values (like HEX values) are stored in a database, retrieved by an API.

In such cases, consumers could also directly override CSS variables at runtime by generating and injecting them into the ``<head>`` of the HTML document (e.g., with ``react-helmet``) after retrieving the values from an API, which would result in overriding the core Paragon CSS variables as well.

Future considerations: Customizing the theme via a user interface
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

More forward thinking, we would also like to explore creating a UI on top of these design tokens such that the understanding and writing of JSON files is abstracted away from theme authors. Alternatively, we also plan to investigate integrating the Paragon design tokens implemented in code with Figma, a powerful industry-standard tool designers use when working with Paragon, potentially enabling a two-way sync between Figma and GitHub. Such a UI or Figma integration may also enable designers to self-serve update the theme with minimal engineering involvement.

Though this theme customization UI is not included in the initial release of design tokens and CSS variables, there is desire to do some prototyping to see what might be possible; other groups in the community may also have the capacity to run with it as well.

That said, such UI considerations thus far have largely been for theme authors at the system/provider level, not so much at the user level. It may be interesting to explore whether Paragon could (and/or should) expose some generic and flexible helper components, hooks, functions, etc. that consuming applications could utilize to simplify the creation and injection of a dynamic, user-driven theme's CSS variables. 

As a more concrete example, consuming applications could, in theory, use an exported function from Paragon or a Node.js-based API that accepts a list of JSON and/or JavaScript objects as design tokens (similar to importing all the token files in the tokens build) and then run ``style-dictionary`` with the same (or extended) config on these custom tokens and the core Paragon tokens to  dynamically generate CSS variables at runtime without needing to write ``.css`` files to disk. This somewhat hypothetical solution is still pretty raw and is likely out of scope of the initial design tokens release and this ADR.

Consequences
============

May need to iterate on the design tokens schema
-----------------------------------------------

* Identifying the best way to think about, represent, and communicate our design tokens in JSON is a new paradigm and we'll likely need to make some adjustments to the schema over time as design tokens get adopted by consumers and theme authors and we receive feedback on what's working and what isn't.
* Iterating on good naming conventions and JSON file schemas that make sense and continues to scale as the Paragon design system evolves will be a challenge, especially to do so in a way that doesn't cause downstream breaking changes without warning. We will likely need to establish a process for deprecating design tokens to facilitate some level of iteration on the token schema.
* Paragon's previous SCSS variables were a combination of only global and component tokens. The notion of "alias" tokens is new to Paragon and will require intentional thought into how alias tokens are defined and used.

Updates required for consuming applications using and/or overriding SCSS variables
----------------------------------------------------------------------------------

* We are attempting to mitigate this concern keeping the SCSS variables Paragon has in place today, but redefining them to reference the newly generated CSS variables instead. This approach should allow consumers who rely on the existing SCSS variables to continue to use them as they are, but still utilize the underlying CSS variable for runtime theming support instead.
* We also plan to ensure the output CSS/SCSS supported by Paragon is well-documented such that consumers know what variables are available to use.

Breaking change for how Paragon themes are currently created
------------------------------------------------------------

* Currently, Paragon themes are created following the guidance in ``@edx/brand-openedx``, which defines a set of files in which theme authors should modify to override the core Paragon starter theme. These files include a `_variables.scss` file in which theme authors may override any of Paragon's SCSS variables.
* With design tokens, theme authors will no longer override any variables in SCSS/CSS directly, but rather define JSON files to override the core Paragon design tokens. After re-building the theme, a new `variables.css` file representing all the CSS variables for the theme is generated, including the overriden values in theme's custom JSON files.
* The resulting CSS file may be hosted on a CDN and applied at runtime to consuming applications.

Lack of support for SCSS calculations with CSS variables
--------------------------------------------------------

* One of the benefits of SCSS is its useful helper functions that could be used with SCSS variables, such as ``lighten`` and ``darken`` to modify colors slightly.
* SCSS is unable to parse the value of CSS variables at build time so, theme authors can't use such SCSS helper functions with Paragon's CSS variables.
* As an alternative, we are proposing an approach to define `modifications <https://github.com/openedx/paragon/blob/alpha/tokens/sass-helpers.js>`_ to tokens similar to ``lighten`` and ``darken`` via a ``modify`` array in the design token JSON properties based on functionality available via ``chroma-js`` (`NPM <https://www.npmjs.com/package/chroma-js>`__).

An abbreviated example::

  {
    "inverse-brand": {
      "value": "{color.btn.bg.inverse-brand.value}",
      "source": "$btn-brand-inverse-hover-bg",
      "modify": [{ "type": "darken", "amount": 0.075 }]
  },

Onboarding designers and engineers to design tokens
---------------------------------------------------

* Given defining styles via JSON files is a bit of a nascent paradigm, there is a fair concern that onboarding designers and engineers to this new styles architecture may be more difficult than defining traditional styles (e.g., hardcoding CSS variables). That said, with adequate documentation and training, we feel the benefits of design tokens for Paragon's future scalability outweigh potential increased complexities with getting up to speed with design tokens.
* There is also a vision that there could, in the future, be a user interface built on top of the JSON design tokens such that changes could be made by designers and engineers alike without needing to understanding the underlying ``style-dictionary`` tool and JSON file schema.
* Design tokens will also be annotated with brief descriptions of their purpose, which will be helpful for theme authors.

Design tooling support for tokens is still relatively poor
-----------------------------------------------------------

* One of the intriguing benefits of moving to design tokens is that they may be transformed to other formats compatible with different platforms. One of the areas the Paragon Working Group may like to explore in the future is an integration between its design tokens and the Figma design tool.
* One of the deliverables of the Paragon design system is the Figma library containing drop-in Paragon components that largely match the components as implemented in code. The Figma library enables designers to work more efficiently and consistently, without needing to redefine existing patterns.
* However, all of the visual styles associated with the design system are essentially defined twice: once in Figma and again in code.
* The longer term vision would be treat Figma as a compatible platform for Paragon's design tokens, such that these foundational style properties would truly become a single source of truth across for both designers and engineers alike.
* However, this vision is limited by what such design tools like Figma can support; While Figma does not have native support for design tokens, there are Figma plugins (e.g., `Design Tokens <https://www.figma.com/community/plugin/888356646278934516/Design-Tokens>`__) that might be worth exploring in the future.
