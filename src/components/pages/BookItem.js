"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {Well, Col, Row, Button} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {addToCart, updateCartItem} from '../../actions/cart';

//BookItem is a dummy component receiving props from BookList
class BookItem extends React.Component {
  handleCart(){
    const book = [...this.props.cart, {
      _id: this.props._id,
      title: this.props.title,
      description: this.props.description,
      price: this.props.price,
      quantity: 1
    }]

    if (this.props.cart.length > 0) {
      let _id = this.props._id;
      let cartIndex = this.props.cart.findIndex((book) => book._id === _id);

      if(cartIndex === -1) {
        this.props.addToCart(book);
      } else {
        this.props.updateCartItem(_id, 1)
      }
    } else {
      this.props.addToCart(book);
    }
  }

  render() {
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h6>{this.props.title}</h6>
            <p>{this.props.description}</p>
            <h6>{this.props.price}</h6>
            <Button onClick={this.handleCart.bind(this)} bsStyle="success">Buy now</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}

function mapStateToProps(state){
  return{
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addToCart, updateCartItem}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
