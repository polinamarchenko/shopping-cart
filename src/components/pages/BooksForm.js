"use strict"

import React from 'react';
import {connect} from 'react-redux' //in order to access the store from our component
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';

import {Well, Panel, FormControl, FormGroup, Button, ControlLabel} from 'react-bootstrap';
import {postBook} from '../../actions/books';

class BooksForm extends React.Component {

  handleSubmit(){
    const book = [{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value
    }]
    this.props.postBook(book);
  }

  render() {
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
      </Well>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({postBook}, dispatch)
}

export default connect(null, mapDispatchToProps)(BooksForm)
