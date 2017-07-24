"use strict"

export function booksReducers(state={
  books:[]
}, action){
  switch(action.type) {
    case "GET-BOOKS":
      return {...state, books: [...action.payload]}
      break;
    case "POST-BOOK":
      return {books: [...state.books, ...action.payload]}
      break;
    case "DELETE-BOOK":
      const currentBooks = [...state.books];
      const indexToDelete = currentBooks.findIndex((book) => book._id.toString() === action.payload);
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
