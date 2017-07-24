"use strict"

import axios from 'axios';

//Get books doesn't have a payload and will request data from our database
export function getBooks() {
  return (dispatch) => {
    axios.get('/books')
      .then((response) => {
        dispatch({type: "GET-BOOKS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GET-BOOK-REJECTED", payload: err})
      });
  }

  // return {
  //   type: "GET-BOOKS"
  // }
}
//we return a function instead of an action, because we use redux-thunk
export function postBook(book) {
  return (dispatch) => {
    axios.post('/books', book)
      .then((response) => {
        dispatch({type: "POST-BOOK", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "POST-BOOK-REJECTED", payload: err})
      })
  }
  // return {
  //   type: "POST-BOOK",
  //   payload: book
  // }
}

export function deleteBook(id) {
  return (dispatch) => {
    axios.delete(`/books/${id}`)
      .then((response) => {
        dispatch({type: "DELETE-BOOK", payload: id})
      })
      .catch((err) => {
        dispatch({type: "DELETE-BOOK-REJECTED", payload: err})
      })
  }
  // return {
  //   type: "DELETE-BOOK",
  //   payload: id
  // }
}
export function updateBook(book) {
  return {
    type: "UPDATE-BOOK",
    payload: book
  }
}
