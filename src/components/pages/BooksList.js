"use strict"

import React from 'react';
import {connect} from 'react-redux' //in order to access the store from our component
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/books';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import BookItem from './BookItem';
import BooksForm from './BooksForm';
import Cart from './Cart';

class BooksList extends React.Component {
  componentDidMount(){
    //dispatch an action
    this.props.getBooks();
  }
  render() {
    const booksList = this.props.books.map(function(book) {
      return (
        <Col xs={12} sm={6} md={4} key={book._id}>
        <BookItem
          _id={book._id}
          title={book.title}
          description={book.description}
          price={book.price}/>
        </Col>
      )
    });

    return (
      <Grid>
        <Row>
          <Cart title={this.props.title}/>
        </Row>
        <Col xs={12} sm={6}>
          <BooksForm />
        </Col>
        <Row>
          {booksList}
        </Row>

      </Grid>
    )
  }
}

function mapStateToProps(state){
  return{
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getBooks}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
//by passing mapStateToProps as an argument to connect, our component is subscribing to the store and it returns an updated state to our local component
