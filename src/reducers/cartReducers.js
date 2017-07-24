"use strict"

export function cartReducers(state={cart: []}, action) {
  switch(action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: action.payload,
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).qty
      }
      break;
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cart: action.payload,
        totalAmount: totals(action.payload),
        totalQty: totals(action.payload).qty
      }
      break;

    case "UPDATE_CART_ITEM":
      const bookToUpdate = [...state.cart];
      const indexToUpdate = bookToUpdate.findIndex((book) => book._id === action._id);
      const newBookToUpdate = {
        ...bookToUpdate[indexToUpdate],
        quantity: bookToUpdate[indexToUpdate].quantity + action.unit
      }
      let cartUpdate = [...bookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...bookToUpdate.slice(indexToUpdate + 1)];

      return {
        ...state,
        cart: cartUpdate,
        totalAmount: totals(cartUpdate).amount,
        totalQty: totals(cartUpdate).qty
      }
      break;
    case "GET_CART":
      return {...state, cart: [...state.cart]}
      break;
    }
  return state;
}

export function totals(payload) {
  const totalAmount = payload.map((cartArr) => cartArr.price * cartArr.quantity)
    .reduce((prev, next) => prev + next);

  const totalQty = payload.map((cartArr) => cartArr.quantity)
    .reduce((prev, next) => prev + next);

  return {amount: totalAmount.toFixed(2), qty: totalQty}
}
