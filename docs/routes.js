import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

import CourseHeader from './views/Header/CourseHeader';
import Home from './views/Home';
import Inputs from './views/Inputs';

const routes = (
  <div>
    <Nav>
      <NavItem>
        <NavLink href="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/header">Header</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/inputs">Inputs</NavLink>
      </NavItem>
    </Nav>
    <Route exact path="/" component={Home} />
    <Route path="/header" component={CourseHeader} />
    <Route path="/inputs" component={Inputs} />
  </div>
);

export default routes;
