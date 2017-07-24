"use strict"

export function addToCart(book) {
  return {
    type: "ADD_TO_CART",
    payload: book
  }
}

export function removeCartItem(cart) {
  return {
    type: "REMOVE_CART_ITEM",
    payload: cart
  }
}

export function updateCartItem(_id, unit) {
  return {
    type: "UPDATE_CART_ITEM",
    _id,
    unit
  }
}

export function getCart() {
  return {
    type: "GET_CART",
  }
}
