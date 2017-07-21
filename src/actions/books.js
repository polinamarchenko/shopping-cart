"use strict"

//Get books doesn't have a payload and will request data from our database
export function getBooks() {
  return {
    type: "GET-BOOKS"
  }
}

export function postBook(book) {
  return {
    type: "POST-BOOK",
    payload: book
  }
}

export function deleteBook(id) {
  return {
    type: "DELETE-BOOK",
    payload: id
  }
}
export function updateBook(book) {
  return {
    type: "UPDATE-BOOK",
    payload: book
  }
}
