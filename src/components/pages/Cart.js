"use strict"

import React from 'react';
import {connect} from 'react-redux' //in order to access the store from our component
import {bindActionCreators} from 'redux';

import {Col, Panel, Row, Button, ButtonGroup, Label} from 'react-bootstrap';

class Cart extends React.Component {
  render() {
    if (this.props.cart.length > 0) {
      return this.renderCart();
    } else {
      return this.renderEmpty();
    }
  }
    renderEmpty() {
      return (
        <Panel header="cart" bsStyle="primary">
          <Panel>
            <Row>
              <Col xs={12} sm={4}>
              <h6>Your cart is empty</h6>
              </Col>
            </Row>
          </Panel>
        </Panel>
      )
    }

    renderCart(){
      const cartItemsList = this.props.cart.map(function(cartItem) {
        return (
          <Panel key={cartItem._id}>
            <Row>
              <Col xs={12} sm={4}>
                <h6>{cartItem.title}</h6>
              </Col>
              <Col xs={12} sm={2}>
                <h6>$ {cartItem.price}</h6>
              </Col>
              <Col xs={12} sm={2}>
                <h6>qty. <Label bsStyle="success"></Label> </h6>
              </Col>
              <Col xs={6} sm={4}>
                <ButtonGroup>
                  <Button bsStyle="default" bsSize="small">-</Button>
                  <Button bsStyle="default" bsSize="small">+</Button>
                  <Button bsStyle="danger" bsSize="small">DELETE</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Panel>
        )
      });
      return (
        <Panel header="cart" bsStyle="primary">
          {cartItemsList}
        </Panel>
      )
    }
  }

function mapStateToProps(state){
  return{
    cart: state.cart.cart
  }
}

export default connect(mapStateToProps)(Cart)
