15. Internationalization support.
---------------------------------

Status
------

Accepted

Context
-------

Paragon's components are extensively used in applications that support i18n.
Currently consumers of Paragon need to handle i18n themselves, i.e. pass translated
strings to components as props. Furthermore, some of the components have hardcoded strings in them which do not
allow translation in any way which can cause a lot of headache for consumers.

Decision
--------

Paragon will natively support internationalization. We will use `react-intl <https://formatjs.io/docs/react-intl/>`_ library
to translate all string type props and move all hardcoded strings from components to respective props.
We will setup Transifex pipeline to auto pull new translations.
All translated messages will be exported from Paragon to allow consumers to use them throughout their apps.

Consequences
------------

- This will be a breaking change for all consumers who do not support i18n in their apps since react-intl requires a specific context to be used in the app. All apps (even if they don't intend use i18n) that use Paragon's components **must** use `IntlProvider` component to provide i18n context to Paragon's components, most common and recommended usage is to wrap root component of the app:

.. code-block:: javascript

  ReactDOM.render(
    <IntlProvider locale={usersLocale} messages={translationsForUsersLocale}>
      <App />
    </IntlProvider>,
    document.getElementById('root')
  )

- Consumers who support i18n will no longer need to pass translated strings to Paragon's components. They will either use translations offered by Paragon or override them which will greatly reduce the time needed to add i18n to their apps.
- Additional documentation will be created both for consumers (to explain how to enable or override Paragon's translations) and developers of Paragon (to explain how to properly enable i18n support for new components).

Questions
---------

1. Which languages should we support?
2. Should we use `wrapper for react-intl <https://github.com/edx/frontend-platform/blob/master/src/i18n/index.js>`_ created in frontend-platform or features added in the wrapper are not relevant for Paragon?
