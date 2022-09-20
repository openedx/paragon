5. Usage of Reactstrap
----------------------

Status
------

Superseded by ADR-0008

Context
-------

Paragon components exist for a variety of use cases, are React-based, and are currently styled using Bootstrap-compatible CSS class names. All known usages of Paragon are backed by Bootstrap. Reactstrap is a React-based component library that provides implementations of Bootstrap's components.

Paragon's strength is found in its ability to be modified to meet our accessibility and functionality requirements above and beyond what any third-party component library might contain. In addition, Paragon is the home for any reusable components we create that we haven't found in any generic component library.

Reactstrap's strength is found in its consistent, flexible, and comprehensive components (its API, effectively) and its more-or-less complete set of implementations of Bootstrap's various 'component' styles.

Both have something to offer us.

Decision
--------

We will use Reactstrap to opportunistically extend and improve the functionality of Paragon. This implies that some existing Reactstrap components will be exposed via Paragon directly if they meet our needs, effectively extending Paragon's component library with minimal effort.

This will be accomplished via one of several methods depending on the nature and utility of particular components. For the purposes of this list, 'production-ready' means a component that would pass stakeholder review as described in ADR 0003 - Repository Ownership.

For Reactstrap components:

- Reactstrap components which are deemed production-ready will be exposed as an export of Paragon as-is, making them immediately available as "Paragon components" in consuming front-ends.
- Reactstrap components that do not conform to our UX guidelines can be excluded from the Paragon exports, effectively hiding them so they're not erroneously used.
- Reactstrap components that have significant deficiencies that prevent them from being production-ready, but would otherwise be desirable, can be handled in one of two ways:
  - They can be augmented via a custom wrapper in Paragon, improving their functionality and making them production-ready and exportable.
  - They can be improved via a pull request to Reactstrap - more likely if straightforward accessibility bugs are found, for instance - and included once Reactstrap updates. Obviously, this approach can be done in parallel with using a custom wrapper in some cases.

For existing Paragon components:

- Paragon components that are deemed to be production-ready can be left as-is for now without backing or replacing them with Reactstrap implementations. No need to change a tire that isn't flat.
- Paragon components with accessibility, flexibility, or consistency issues that could be mitigated by backing them with Reactstrap can be opportunistically updated. The extent of this change - and whether it results in a major, minor, or patch version update, largely depends on how different the Paragon/Reactstrap components are. Where possible, we will favor the best practices and functionality of the Reactstrap components, under the assumption that they are generally more flexible and consistent than our own home-grown components.

For new Paragon components:

- New Paragon components will ideally make use of Reactstrap components where possible to take advantage of Reactstrap's strengths.

Consequences
------------

Opportunistically following the above guidelines should result in Paragon becoming a more comprehensive, consistent, flexible component library, furthering the architecture team's goals of approachability, extensibility, and improving the organization's time to market for new features. Using Reactstrap for new components will improve the ease of implementation for new Paragon components as well.

Breaking changes to Paragon components will ideally, but not necessarily, result in updates to Paragon's consuming IDAs to bring them in line with the latest version. This will take a little time, but result in a more consistent usage pattern across the organization.

References
----------

* https://github.com/openedx/paragon
* https://reactstrap.github.io/
