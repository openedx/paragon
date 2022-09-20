3. Repository Ownership
--------------------

Status
------

Accepted

Context
-------

Paragon components are currently in use in a variety of production IDAs and continue to be updated, improved, and extended by engineers throughout the organization. At the same time, the repository itself lacks explicit ownership and review processes from potential stakeholders, such as architecture, product, accessibility, and user experience. This combination of a frequently updated, mission critical library without consistent oversight is potentially a significant risk to the stability of our front ends.

Meanwhile, the architecture team has been tasked with improving our codebase's overall approachability and extensibility, as well as our time-to-market for new features and applications, and has been explicitly looking at Paragon and our usage of bootstrap with respect to creating a comprehensive design system for the organization.

Decision
--------

The architecture team (`Arch Team Homepage <https://openedx.atlassian.net/wiki/spaces/AC/pages/439353453/Architecture%2BTeam>`_) will own Paragon to the extent that it will:

- With the help of UX, Accessibility, and Product, document the requirements and best practices for updates and additions to Paragon's reusable components. ("I want to help you help me help you.")
- Ensure that UX, Accessibility, and Product are given the opportunity to vet and sign off on changes to the library. ("Going once, going twice...")
- Review Paragon pull requests with an eye toward ensuring that Paragon continues to be a flexible, consistent library of reusable components that fulfill our needs across the organization. ("Have you considered...")
- Lead the charge on improving and fleshing out Paragon with the above goals in mind. ("Here, use this!")

Consequences
------------

Establishing clear ownership roles and review criteria for Paragon should help ensure that code quality remains high, and that changes to the library are less likely to result in bugs and unexpected breaking changes. In addition, this ownership structure dovetails well with the architecture team's stated goal of improving our front end systems' approachability, extensibility, and the time to market of IDAs built on Paragon.

This ownership will, of course, take up some of the architecture team's time to coordinate. That said, documenting and disseminating the process and considerations for updating Paragon should help alleviate some of that strain by allowing pull request authors to do much of the due diligence themselves.

References
----------

* https://github.com/openedx/paragon/graphs/code-frequency (Paragon is in active development)
* https://openedx.atlassian.net/wiki/spaces/AC/pages/787087363/Architecture+Roadmap+2018-19#ArchitectureRoadmap,2018-19-ArchitectureOGSP
* https://www.designbetter.co/design-systems-handbook
