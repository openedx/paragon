import { Link } from 'gatsby';
import React from 'react';
import { Nav } from '~paragon-react';

const NavSectionTitle = ({ children }) => <h6 className="mt-4 px-3">{children}</h6>;

const ParNavLink = ({ children, ...props }) => (
  <Link activeClassName="active" className="nav-link" {...props}>{children}</Link>
);

const Navigation = () => (
  <Nav variant="pills" defaultActiveKey="/home" className="flex-column align-items-stretch py-3 mr-3">

    <NavSectionTitle>Overview</NavSectionTitle>

    <ParNavLink to="/">Getting Started</ParNavLink>
    <ParNavLink to="/status">Library Status</ParNavLink>
    <ParNavLink to="/insights">Usage Insights</ParNavLink>
    <Nav.Item>
      <Nav.Link href="https://github.com/edx/paragon">Contribute on Github</Nav.Link>
    </Nav.Item>


    <NavSectionTitle>Foundations</NavSectionTitle>

    <ParNavLink to="/foundations/colors">Colors</ParNavLink>
    <ParNavLink to="/foundations/typography">Typography</ParNavLink>
    <ParNavLink to="/foundations/layout">Layout & Grid</ParNavLink>
    <ParNavLink to="/foundations/spacing">Spacing & Margins</ParNavLink>
    <ParNavLink to="/foundations/icons">Icons</ParNavLink>
    <ParNavLink to="/foundations/css-utilities">All Utilities</ParNavLink>


    <NavSectionTitle>Components</NavSectionTitle>

    <ParNavLink to="/components/accordion">Accordion (coming soon)</ParNavLink>
    <ParNavLink to="/components/alert">Alert</ParNavLink>
    <ParNavLink to="/components/avatar">Avatar</ParNavLink>
    <ParNavLink to="/components/avatar-button">Avatar Button</ParNavLink>
    <ParNavLink to="/components/badge">Badge</ParNavLink>
    <ParNavLink to="/components/breadcrumbs">Breadcrumbs</ParNavLink>
    <ParNavLink to="/components/button">Button</ParNavLink>
    <ParNavLink to="/components/button-group">Button Group</ParNavLink>
    <ParNavLink to="/components/card">Card</ParNavLink>
    <ParNavLink to="/components/carousel">Carousel</ParNavLink>
    <ParNavLink to="/components/collapsible">Collapsible</ParNavLink>
    <ParNavLink to="/components/container">Container</ParNavLink>
    <ParNavLink to="/components/dropdown">Dropdown</ParNavLink>
    <ParNavLink to="/components/fieldset">Fieldset</ParNavLink>
    <ParNavLink to="/components/figure">Figure</ParNavLink>
    <ParNavLink to="/components/forms">Forms</ParNavLink>
    <ParNavLink to="/components/hyperlink">Hyperlink</ParNavLink>
    <ParNavLink to="/components/icon">Icon</ParNavLink>
    <ParNavLink to="/components/icon-button">IconButton</ParNavLink>
    <ParNavLink to="/components/input">Input</ParNavLink>
    <ParNavLink to="/components/input-group">Input Group</ParNavLink>
    <ParNavLink to="/components/image">Image</ParNavLink>
    <ParNavLink to="/components/modal">Modal</ParNavLink>
    <ParNavLink to="/components/modal-layer">ModalLayer</ParNavLink>
    <ParNavLink to="/components/modal-popup">ModalPopup</ParNavLink>
    <ParNavLink to="/components/mailtolink">MailtoLink</ParNavLink>
    <ParNavLink to="/components/navs">Navs</ParNavLink>
    <ParNavLink to="/components/navbar">Navbar</ParNavLink>
    <ParNavLink to="/components/overlays">Overlays</ParNavLink>
    <ParNavLink to="/components/pagination">Pagination</ParNavLink>
    <ParNavLink to="/components/popover">Popover</ParNavLink>
    <ParNavLink to="/components/progress-bar">ProgressBar</ParNavLink>
    <ParNavLink to="/components/responsive">Responsive</ParNavLink>
    <ParNavLink to="/components/searchfield">SearchField</ParNavLink>
    <ParNavLink to="/components/sheet">Sheet</ParNavLink>
    <ParNavLink to="/components/spinner">Spinner</ParNavLink>
    <ParNavLink to="/components/statefulbutton">StatefulButton</ParNavLink>
    <ParNavLink to="/components/table">Table</ParNavLink>
    <ParNavLink to="/components/tabs">Tabs</ParNavLink>
    <ParNavLink to="/components/tooltip">Tooltip</ParNavLink>
    <ParNavLink to="/components/toast">Toast</ParNavLink>
    <ParNavLink to="/components/transitionreplace">TransitionReplace</ParNavLink>
    <ParNavLink to="/components/validationformgroup">ValidationFormGroup</ParNavLink>


    <NavSectionTitle>Hooks</NavSectionTitle>

    <ParNavLink to="/hooks/useWindowSize">useWindowSize</ParNavLink>
    <ParNavLink to="/hooks/useToggle">useToggle</ParNavLink>


    <NavSectionTitle>Tables</NavSectionTitle>

    <ParNavLink to="/table/datatable">DataTable</ParNavLink>
    <ParNavLink to="/table/tablecontrolbar">TableControlBar</ParNavLink>
    <ParNavLink to="/table/dataviews">Data views</ParNavLink>
    <ParNavLink to="/table/tablefooter">TableFooter</ParNavLink>
    <ParNavLink to="/table/tablefilters">Table Filters</ParNavLink>

    <NavSectionTitle>Deprecated</NavSectionTitle>

    <ParNavLink to="/components/checkbox">Checkbox</ParNavLink>
    <ParNavLink to="/components/checkboxgroup">CheckboxGroup</ParNavLink>
    <ParNavLink to="/components/inputselect">InputSelect</ParNavLink>
    <ParNavLink to="/components/inputtext">InputText</ParNavLink>
    <ParNavLink to="/components/radiobuttongroup">RadioButtonGroup</ParNavLink>
    <ParNavLink to="/components/statusalert">StatusAlert</ParNavLink>
    <ParNavLink to="/components/textarea">TextArea</ParNavLink>

    <hr className="w-100" />

    <div className="mb-2">
      <Nav.Item>
        <Nav.Link href="https://github.com/edx/.github/blob/master/CODE_OF_CONDUCT.md">Code of Conduct</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://open.edx.org/">Open edX</Nav.Link>
      </Nav.Item>
    </div>

    <p className="mb-5 px-3">
      <a href="https://www.netlify.com">
        <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
      </a>
    </p>
  </Nav>
);

export default Navigation;
