"use strict"

import React from 'react';
import {connect} from 'react-redux' //in order to access the store from our component
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';

import {Well, Panel, FormControl, FormGroup, Button, ControlLabel} from 'react-bootstrap';
import {postBook, deleteBook} from '../../actions/books';

class BooksForm extends React.Component {

  handleSubmit(){
    const book = [{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value
    }]
    this.props.postBook(book);
  }

  onDelete(){
    let bookId = findDOMNode(this.refs.delete).value;
    this.props.deleteBook(bookId);
  }

  render() {

    const bookList = this.props.books.map((book) => <option key={book._id}>{book._id}</option>)
    return (
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter book title"
              ref="title" />
          </FormGroup>
          <FormGroup controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter book description"
              ref="description" />
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter book price"
              ref="price" />
          </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">Add a book</Button>
        </Panel>
        <Panel>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select</ControlLabel>
            <FormControl ref="delete" componentClass="select" placeholder="select">
              <option value="select">Select a book</option>
              {bookList}
            </FormControl>
          </FormGroup>
          <Button onClick={this.onDelete.bind(this)} bsStyle="danger">DELETE</Button>
        </Panel>
      </Well>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({postBook, deleteBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm)
