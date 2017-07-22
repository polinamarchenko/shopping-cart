"use strict"

export function cartReducers(state={cart: []}, action) {
  switch(action.type) {
    case "ADD_TO_CART":
      return {...state, cart: action.payload}
      break;
    case "REMOVE_CART_ITEM":
      return {...state, cart: action.payload}
      break;
    case "UPDATE_CART_ITEM":
      const bookToUpdate = [...state.cart];
      const indexToUpdate = bookToUpdate.findIndex((book) => book._id === action._id);
      const newBookToUpdate = {
        ...bookToUpdate[indexToUpdate],
        quantity: bookToUpdate[indexToUpdate].quantity + action.unit
      }
      let cartUpdate = [...bookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...bookToUpdate.slice(indexToUpdate + 1)];

      return {...state, cart: cartUpdate}
      break;
    }
  return state;
}
