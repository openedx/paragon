import { Link } from 'gatsby';
import PropTypes from 'prop-types';
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
      { title: 'Colors', url: 'foundations/colors' },
    ],
  },
  {
    section: 'COMPONENTS',
    items: [
      { title: 'Breadcrumbs', url: 'components/breadcrumbs' },
      { title: 'Button', url: 'components/button' },
      { title: 'Checkbox', url: 'components/checkbox' },
      { title: 'CheckboxGroup', url: 'components/checkboxgroup' },
      { title: 'Collapsible', url: 'components/collapsible' },
      { title: 'Dropdown', url: 'components/dropdown' },
      { title: 'Fieldset', url: 'components/fieldset' },
      { title: 'Hyperlink', url: 'components/hyperlink' },
      { title: 'Icon', url: 'components/icon' },
      { title: 'Input', url: 'components/input' },
      { title: 'InputSelect', url: 'components/inputselect' },
      { title: 'InputText', url: 'components/inputtext' },
      { title: 'ListBox', url: 'components/listbox' },
      { title: 'MailtoLink', url: 'components/mailtolink' },
      { title: 'Pagination', url: 'components/pagination' },
      { title: 'RadioButtonGroup', url: 'components/radiobuttongroup' },
      { title: 'Responsive', url: 'components/responsive' },
      { title: 'SearchField', url: 'components/searchfield' },
      { title: 'StatefulButton', url: 'components/statefulbutton' },
      { title: 'StatusAlert', url: 'components/statusalert' },
      { title: 'Table', url: 'components/table' },
      { title: 'Tabs', url: 'components/tabs' },
      { title: 'TextArea', url: 'components/textarea' },
      { title: 'TransitionReplace', url: 'components/transitionreplace' },
      { title: 'ValidationFormGroup', url: 'components/validationformgroup' },
    ],
  },
];


const Navigation = ({ siteTitle }) => (
  <div className="pgn-doc__navigation">
    <div className="pgn-doc__navigation-slide">
      {menu.map(({ section, items }) => (
        <nav className="nav flex-column">
          <h3 className="pgn-doc__nav-section-header">
            {section}
          </h3>
          {items.map(({ title, url }) => (
            <Link
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


Navigation.propTypes = {
  siteTitle: PropTypes.string,
};

Navigation.defaultProps = {
  siteTitle: '',
};

export default Navigation;
