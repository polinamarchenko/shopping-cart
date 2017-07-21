"use strict"

export function booksReducers(state={
  books:
    [
      {
        _id: 1,
        title: 'Harry Potter',
        description: 'My favorite book',
        price: 45
      },
      {
        _id: 2,
        title: 'Gone with the wind',
        description: 'My favorite book 2',
        price: 30
      }
    ]}, action){
  switch(action.type) {
    case "GET-BOOKS":
      return {...state, books: [...state.books]}
      break;
    case "POST-BOOK":
      return {books: [...state.books, ...action.payload]}
      break;
    case "DELETE-BOOK":
      const currentBooks = [...state.books];
      const indexToDelete = currentBooks.findIndex((book) => book._id === action.payload._id);
      return { books: [...currentBooks.slice(0, indexToDelete), ...currentBooks.slice(indexToDelete + 1)] };
      break;
    case "UPDATE-BOOK":
      const statusBooks = [...state.books];
      const indexToUpdate = statusBooks.findIndex((book) => book._id === action.payload._id);
      const bookToUpdate = {
        ...statusBooks[indexToUpdate],
        title: action.payload.title
      }
      return {books: [...statusBooks.slice(0, indexToUpdate), bookToUpdate, ...statusBooks.slice(indexToUpdate + 1)]};
      break;
  }
  return state;
}
