15. Internationalization support.
---------------------------------

Status
------

Accepted

Context
-------

Paragon's components are extensively used in applications that support i18n.
Currently consumers of Paragon need to handle i18n themselves (e.g., pass translated strings to components as props,
or pass components like ``FormattedMessage`` from ``react-intl`` as nodes). Furthermore, some of the components have hardcoded strings in them which do not
allow translation in any way which can cause a lot of headache for consumers.

Decision
--------

Paragon will natively support internationalization. We will use `react-intl <https://formatjs.io/docs/react-intl/>`_ library
to translate all string type props and move all hardcoded strings from components to respective props.
We will setup Transifex pipeline to auto pull new translations.
All translated messages will be exported from Paragon to allow consumers to use them throughout their apps.

To be compatible with `frontend-platform's i18n module <https://github.com/openedx/frontend-platform/tree/master/src/i18n>`_ we will use ``react-intl`` of the same version, namely ``2.9.0``.

Consequences
------------

- This will be a breaking change for all consumers who do not use ``frontend-platform``'s ``AppProvider`` component (and also for those who do not use ``react-intl`` in their app) since ``react-intl`` requires a specific context to be used in the app, which is included in ``AppProvider`` by default. All apps (even if they don't intend to use i18n) that use Paragon's components **must** use ``IntlProvider`` component to provide i18n context to Paragon's components. For apps that do not inherit from ``frontend-platform`` the most common and recommended usage is to wrap root component of the app:

.. code-block:: javascript

  import { IntlProvider } from 'react-intl';
  import { messages as paragonMessages } from '@edx/paragon';

  ReactDOM.render(
    <IntlProvider locale={usersLocale} messages={paragonMessages[usersLocale]}>
      <App />
    </IntlProvider>,
    document.getElementById('root')
  )

- On the other hand, for MFE's that inherit from ``frontend-platform`` this won't produce a breaking change since those MFE's use ``frontend-platform``'s ``AppProvider`` component which uses ``IntlProvider`` under the hood. Therefore, such MFE's would only need to add Paragon's translations to the app configuration, here is a simplified example of how it might look like:

.. code-block:: javascript

  import { APP_READY, subscribe, initialize } from '@edx/frontend-platform';
  import { AppProvider } from '@edx/frontend-platform/react';
  import { messages as paragonMessages } from '@edx/paragon';
  import App from './App';
  // this is your app's i18n messages
  import appMessages from './i18n';

  subscribe(APP_READY, () => {
    ReactDOM.render(
      <AppProvider>
        <App />
      </AppProvider>,
      document.getElementById('root')
    )
  })

  initialize({
    // this will add your app's messages as well as Paragon's messages to your app
    messages: [
      appMessages,
      paragonMessages,
    ],
    // here you will typically provide other configurations for you app
    ...
  });

- Consumers who support i18n will no longer need to pass translated strings to Paragon's components. They will either use translations offered by Paragon or override them which will greatly reduce the time needed to add i18n to their apps.
- Additional documentation will be created both for consumers (to explain how to enable or override Paragon's translations) and developers of Paragon (to explain how to properly enable i18n support for new components).

Questions
---------

1. Which languages should we support?
2. Should we use `wrapper for react-intl <https://github.com/openedx/frontend-platform/blob/master/src/i18n/index.js>`_ created in frontend-platform or features added in the wrapper are not relevant for Paragon?
