20. Adopting and maintaining Algolia DocSearch
----------------------------------------------

Status
------

Accepted

Context
-------

The Paragon documentation website (https://paragon-openedx.netlify.app/), hosted on Netlify, is used by designers and engineers to understand and use the capabilities provided by the Paragon design system and React component library. Ensuring consumers of Paragon can efficiently find the content they need is critical to ensuring the Paragon design system is easy to use and adopt.

Without formally supporting search, Paragon consumers generally need to use native browser search capabilities (e.g., `Cmd + F`). To make content discoverability easier, we would like to support search functionality on the Paragon documentation website in a lightweight and low-maintenance way.

Decision
--------

We will adopt Algolia DocSearch (https://docsearch.algolia.com/), a free tool provided to open-source projects who have documentation needs. Algolia DocSearch provides a configurable crawler that parses the Paragon documentation website on a regular frequency and indexes the content for search in an Algolia index. Algolia DocSearch also provides a search UI widget that can be embedded in the Paragon documentation website to provide search functionality.

While the Algolia DocSearch crawler is configurable, it's code is not open-source given it needs to be applied within the Algolia DocSearch crawler itself. To mitigate this, we will persist the code of the crawler configuration in the Paragon repository so that it can be easily referenced and updated as needed. When the crawler configuration is updated in the Paragon repository, it should also be updated in the Algolia DocSearch crawler editor.

Consequences
------------

* By persisting the Algolia DocSearch crawler configuration in the Paragon repository, we may run into situations where the crawler configuration is updated in the Paragon repository without it also getting persisted in the Algolia DocSearch crawler editor itself. This could result in the crawler configuration in the Algolia DocSearch crawler editor being out of sync with the Paragon repository. To mitigate this, we will document the process for updating the crawler configuration in the Paragon repository and the Algolia DocSearch crawler editor.

Resources
---------

* https://www.algolia.com/
* https://docsearch.algolia.com/
* https://crawler.algolia.com/
* https://dashboard.algolia.com/