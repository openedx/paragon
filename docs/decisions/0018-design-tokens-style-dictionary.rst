18. Design tokens with Style Dictionary
---------------------------------------

Status
------

Accepted

Design Tokens
-------------

Design tokens are fundamental elements Paragon design system, representing the smallest pieces of design decisions
that can be systematically used across in the Open edX ecosystem. These tokens include, but are not limited to,
colors, typography, spacing, borders, shadows, and any other design attributes that define the visual identity.

By abstracting these values into tokens, we achieve several key benefits:

- **Consistency.**
  Design tokens ensure a uniform look and feel across different platforms (web, mobile, desktop, etc.).
  By using the same set of design tokens, we eliminate discrepancies and ensure that all visual components adhere to the same standards.

- **Scalability.**
  As the number of design components and their variations grows, maintaining consistency manually becomes impractical.
  Design tokens provide a scalable solution by centralizing design properties, making it easier to apply updates globally.

- **Collaboration.**
  Design tokens create a common language between designers and developers. This shared vocabulary helps to bridge the gap
  between design and implementation, ensuring that both teams are aligned.

- **Efficiency.**
  Tokens streamline the design and development workflow by reducing the need for manual updates.
  When a token is updated, all instances where it is used are automatically updated, saving time and reducing the risk of errors.

Style Dictionary
----------------

`Style Dictionary <https://amzn.github.io/style-dictionary/>`__ is a comprehensive tool that facilitates the management and transformation of design tokens.
Style Dictionary allows us to define our design tokens in a centralized ``JSON`` or ``YAML`` file and then
transform these tokens into various formats needed for different platforms and technologies.

.. image:: ./assets/style-dictionary-build-diagram.png
  :width: 100%
  :alt: `style-dictionary` build architecture diagram

Some of the key features of Style Dictionary include:

- **Multi-platform support.**
  Style Dictionary can output design tokens in multiple formats such as ``CSS``, ``SCSS``, ``LESS``, ``JSON``, ``XML``, and more.
  This makes it easy to integrate tokens into different environments, whether it's a web application, mobile app, or a desktop application.

- **Customization.**
  The tool provides extensive customization options, allowing us to define custom formats, filters, and transforms.
  This flexibility ensures that the output meets the specific needs of our projects.

- **Automation.**
  By integrating Style Dictionary into our build process, we can automate the generation and distribution of design tokens.
  This ensures that the latest design updates are always reflected in the codebase without manual intervention.

- **Extensibility.**
  Style Dictionary's plugin system allows us to extend its functionality to suit our specific requirements.
  We can add custom transforms, formats, and actions to enhance its capabilities.

Decision
--------

To enhance the efficiency and consistency of Paragon design system, we have configured Style Dictionary to manage and create design tokens.
Our configuration includes semantic categorization of tokens into two global categories: core and themes.
Additionally, we have provided users with the capability to modify tokens using SCSS preprocessor tools, enabling complex transformations and customizations.

**Configuration of Style Dictionary:**

- **Semantic categorization:**
  - **Core tokens.**
    These are the fundamental design elements such as base colors, typography scales, and spacing units that remain consistent across all themes.
  - **Theme tokens.**
    These tokens define specific variations for different themes (e.g., light and dark modes), allowing for flexible theming without altering the core design principles.
  - **Global tokens.**
    These are standardized values representing various design aspects such as colors, fonts, sizes, and other stylistic parameters within a design system, ensuring consistency in appearance across an design system.
  - **Alias tokens.**
    These are references or shortcuts for other tokens within a design system, providing convenient names for values that may be frequently used or logically related to each other.

  .. image:: ./assets/design-tokens-style-dictionary.png
    :width: 100%
    :alt: global and alias design tokens diagram

- **SCSS preprocessor tools:**
  - **Color adjustments:**
    - ``darken`` and ``lighten``: Formatter to adjust the lightness or darkness of colors.

        Example::

          {
            "color": {
              "primary": {
                "value": "{color.badge.bg.primary}",
                "type": "color",
                "source": "$badge-primary-focus-bg",
                "modify": [{ "type": "darken", "amount": 0.1 }]
              },
            }
          }

    - ``color-yiq``: Formatter to determine contrasting colors for better readability.

        Example::

          {
            "color": {
              "danger": {
                "value": "{color.danger.base}",
                "type": "color",
                "source": "$badge-danger-color",
                "modify": [{ "type": "color-yiq" }]
              },
            }
          }

  - **String manipulation:**
    - ``str-replace``: Formatter to replace parts of strings, useful for manipulating token names or values.

        Example::

          {
            "color": {
              "icon-bg": {
                "value": "url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='{color.navbar.dark.text}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
                "type": "file",
                "source": "$navbar-dark-toggler-icon-bg",
                "outputReferences": false,
                "modify": [{
                  "type": "str-replace",
                  "toReplace": "#",
                  "replaceWith": "%23"
                }]
              }
            }
          }

  - **Color format conversion:**
    - Conversion of hex color values to ``rgba`` format with adjustable alpha values for transparency effects.

        Example::

          {
            "color": {
              "border": {
                "value": "{color.black}",
                "type": "color",
                "source": "$navbar-light-toggler-border-color",
                "modify": [{
                  "type": "alpha",
                  "amount": 0.1
                }]
              }
            }
          }

- **Custom media breakpoints:**
  We have configured Style Dictionary to generate custom media breakpoints.
  These breakpoints are essential for the successful use of CSS variables within media queries,
  ensuring responsive design adaptability across various screen sizes.

  Source::

    {
      "size": {
        "breakpoint": {
          "xs": { "value": "0", "type": "dimension", "description": "Starting breakpoint for portrait phones." }
        }
      }
    }

  Result::

    @custom-media --pgn-size-breakpoint-min-width-xs (min-width: 0);


Consequences
------------

Design tokens with Style Dictionary enhance the efficiency, consistency, scalability, collaboration,
customization, and automation of the Paragon design system.

Resources
---------

`Style dictionary documentation <https://amzn.github.io/style-dictionary/>`__
