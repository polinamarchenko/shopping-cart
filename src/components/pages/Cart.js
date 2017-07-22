"use strict"

import React from 'react';
import {connect} from 'react-redux' //in order to access the store from our component
import {bindActionCreators} from 'redux';
import {removeCartItem, updateCartItem} from '../../actions/cart';

import {Col, Panel, Row, Button, ButtonGroup, Label, Modal} from 'react-bootstrap';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  open() {
    this.setState({showModal: true});
  }

  close() {
    this.setState({showModal: false});
  }

  handleRemoveItem(_id) {
    const currentCart = this.props.cart;
    const indexToRemove = currentCart.findIndex((cart) => cart._id === _id);
    let newCart = [...currentCart.slice(0, indexToRemove), ...currentCart.slice(indexToRemove + 1)];
    this.props.removeCartItem(newCart);
  }

  incrementItem(_id) {
    this.props.updateCartItem(_id, 1);
  }

  decrementItem(_id, quantity) {
    if (quantity > 1) {
      this.props.updateCartItem(_id, -1);
    }
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
                  <Button onClick={this.decrementItem.bind(this, cartItem._id, cartItem.quantity)} bsStyle="default" bsSize="small">-</Button>
                  <Button onClick={this.incrementItem.bind(this, cartItem._id)} bsStyle="default" bsSize="small">+</Button>
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
          <Row>
            <Col xs={6} sm={4}>
              <h6>Total amount: ${this.props.totalAmount}</h6>
              <Button onClick={this.open.bind(this)} bsStyle="success" bsSize="small">
                Proceed to checkout
              </Button>
            </Col>
            </Row>
            <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>Thank you!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Your order has been saved</h4>
              <p>You will receive an email confirmation</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close.bind(this)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Panel>
      )
    }
  }

function mapStateToProps(state){
  return{
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({removeCartItem, updateCartItem}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
