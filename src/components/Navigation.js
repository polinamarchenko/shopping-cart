"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Navbar, Nav, NavItem, MenuItem, Badge} from 'react-bootstrap';
import {getCart} from '../../src/actions/cart';

class Navigation extends React.Component {
  componentDidMount(){
    this.props.getCart();
  }

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
              {(this.props.totalQty > 0)? <Badge className="badge">{this.props.totalQty}</Badge>: ''}
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps(state){
  return {
    totalQty: state.cart.totalQty
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getCart}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
