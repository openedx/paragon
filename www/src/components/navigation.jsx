import { Link } from 'gatsby';
import React from 'react';

const menu = [
  {
    section: 'OVERVIEW',
    items: [
      { title: 'Getting Started', url: '/' },
      { title: 'Library Status', url: '/status' },
    ],
  },
  {
    section: 'FOUNDATIONS',
    items: [
      { title: 'Colors', url: '/foundations/colors' },
      { title: 'Typography', url: '/foundations/typography' },
      { title: 'Layout & Grid', url: '/foundations/layout' },
      { title: 'Spacing & Margins', url: '/foundations/spacing' },
      { title: 'Icons', url: '/foundations/icons' },
      { title: 'Illustrations', url: '/foundations/illustrations' },
      { title: 'All Utilities', url: '/foundations/css-utilities' },
    ],
  },
  {
    section: 'COMPONENTS',
    items: [
      { title: 'Accordion (coming soon)', url: '/components/accordion' },
      { title: 'Alert', url: '/components/alert' },
      { title: 'Badge', url: '/components/badge' },
      { title: 'Breadcrumbs', url: '/components/breadcrumbs' },
      { title: 'Button', url: '/components/button' },
      { title: 'Button Group', url: '/components/button-group' },
      { title: 'Card', url: '/components/card' },
      { title: 'Carousel', url: '/components/carousel' },
      { title: 'Checkbox', url: '/components/checkbox' },
      { title: 'CheckboxGroup', url: '/components/checkboxgroup' },
      { title: 'Collapsible', url: '/components/collapsible' },
      { title: 'Dropdown', url: '/components/dropdown' },
      { title: 'Fieldset', url: '/components/fieldset' },
      { title: 'Figure', url: '/components/figure' },
      { title: 'Forms', url: '/components/forms' },
      { title: 'Hyperlink', url: '/components/hyperlink' },
      { title: 'Icon', url: '/components/icon' },
      { title: 'Input', url: '/components/input' },
      { title: 'Input Group', url: '/components/input-group' },
      { title: 'InputSelect', url: '/components/inputselect' },
      { title: 'InputText', url: '/components/inputtext' },
      { title: 'Image', url: '/components/image' },
      { title: 'ListBox', url: '/components/listbox' },
      { title: 'Modal', url: '/components/modal' },
      { title: 'MailtoLink', url: '/components/mailtolink' },
      { title: 'Navs', url: '/components/navs' },
      { title: 'Navbar', url: '/components/navbar' },
      { title: 'Overlays', url: '/components/overlays' },
      { title: 'Pagination', url: '/components/pagination' },
      { title: 'Popover', url: '/components/popover' },
      { title: 'ProgressBar', url: '/components/progress-bar' },
      { title: 'RadioButtonGroup', url: '/components/radiobuttongroup' },
      { title: 'Responsive', url: '/components/responsive' },
      { title: 'SearchField', url: '/components/searchfield' },
      { title: 'Spinner', url: '/components/spinner' },
      { title: 'StatefulButton', url: '/components/statefulbutton' },
      { title: 'StatusAlert', url: '/components/statusalert' },
      { title: 'Table', url: '/components/table' },
      { title: 'Tabs', url: '/components/tabs' },
      { title: 'TextArea', url: '/components/textarea' },
      { title: 'Tooltip', url: '/components/tooltip' },
      { title: 'Toast', url: '/components/toast' },
      { title: 'TransitionReplace', url: '/components/transitionreplace' },
      { title: 'ValidationFormGroup', url: '/components/validationformgroup' },
    ],
  },
  {
    section: 'HOOKS',
    items: [
      { title: 'useWindowSize', url: '/hooks/useWindowSize' },
    ],
  },
];


const Navigation = () => (
  <div className="pgn-doc__navigation">
    <div className="pgn-doc__navigation-slide">
      {menu.map(({ section, items }) => (
        <nav key={section} className="nav flex-column">
          <h3 className="pgn-doc__nav-section-header">
            {section}
          </h3>
          {items.map(({ title, url }) => (
            <Link
              key={title}
              activeClassName="active"
              className="nav-link"
              to={url}
            >
              {title}
            </Link>
          ))}
        </nav>
      ))}
    </div>
  </div>
);

export default Navigation;
