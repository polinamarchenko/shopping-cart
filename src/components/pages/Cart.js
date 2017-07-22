"use strict"

import React from 'react';
import {connect} from 'react-redux' //in order to access the store from our component
import {bindActionCreators} from 'redux';
import {removeCartItem} from '../../actions/cart';

import {Col, Panel, Row, Button, ButtonGroup, Label} from 'react-bootstrap';

class Cart extends React.Component {

  handleRemoveItem(_id) {
    const currentCart = this.props.cart;
    const indexToRemove = currentCart.findIndex((cart) => cart._id === _id);
    let newCart = [...currentCart.slice(0, indexToRemove), ...currentCart.slice(indexToRemove + 1)];
    this.props.removeCartItem(newCart);
  }



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
                <h6>qty. <Label bsStyle="success">{cartItem.quantity}</Label> </h6>
              </Col>
              <Col xs={6} sm={4}>
                <ButtonGroup>
                  <Button onClick={this.incrementItem.bind(this, cartItem._id)} bsStyle="default" bsSize="small">-</Button>
                  <Button bsStyle="default" bsSize="small">+</Button>
                  <Button onClick={this.handleRemoveItem.bind(this, cartItem._id)} bsStyle="danger" bsSize="small">DELETE</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Panel>
        )
      }, this);
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({removeCartItem}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
