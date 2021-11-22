---
title: 'Nav'
type: 'component'
components:
- Nav
- NavItem
- NavLink
- NavDropdown
categories:
- Navigation
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

Navigation bits in Bootstrap all share a general ``Nav`` component and styles. Swap ``variant``s to switch between each style. The base ``Nav`` component is built with flexbox and provide a strong foundation for building all types of navigation components.

<p>
  This is a pass through component from React-Bootstrap.<br/>
  <a href="https://react-bootstrap.github.io/components/navs/" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for additional documentation.
  </a>
</p>

### Basic Usage

```jsx live
() => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          NavLink 1 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          NavLink 2 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3 content
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}
```

### Theme variables (SCSS)

```scss
$nav-link-padding-y:                .5rem !default;
$nav-link-padding-x:                1rem !default;
$nav-link-color:                    $gray-700 !default;
$nav-link-disabled-color:           $gray-300 !default;
$nav-link-font-weight:              500 !default;

$nav-tabs-border-color:             $light-400 !default;
$nav-tabs-border-width:             2px !default;
$nav-tabs-border-radius:            0 !default;
$nav-tabs-link-hover-border-color:  transparent transparent $nav-tabs-border-color !default;
$nav-tabs-link-hover-bg:            $light-400 !default;
$nav-tabs-link-active-color:        $primary-500 !default;
$nav-tabs-link-active-bg:           $body-bg !default;
$nav-tabs-link-active-border-color: transparent transparent $primary-500 !default;

$nav-pills-border-radius:           $border-radius !default;
$nav-pills-link-active-color:       $component-active-color !default;
$nav-pills-link-active-bg:          $component-active-bg !default;

$nav-divider-color:                 theme-color("gray", "background") !default;
$nav-divider-margin-y:              $spacer / 2 !default;
```
