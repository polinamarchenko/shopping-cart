"use strict"

import React from 'react';
import {Navbar, Nav, NavItem, MenuItem, Badge} from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Home</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/about">About</NavItem>
            <NavItem eventKey={2} href="/contact">Contact Us</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/settings">Settings</NavItem>
            <NavItem eventKey={2} href="/cart">Your Cart
              <Badge className="badge">1</Badge>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;
