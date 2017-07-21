"use strict"

import {combineReducers} from "redux";
import {booksReducers} from "./booksReducers";
import {cartReducers} from "./cartReducers";

//take as an argument the object that represents the state object
export default combineReducers({
  books: booksReducers,
  cart: cartReducers
})
