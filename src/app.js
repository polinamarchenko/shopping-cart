"use strict"

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'; //Provider component wraps React inside of render method and passes the store as a props!


import reducers from './reducers/index';
import {addToCart} from './actions/cart';
import {postBook, deleteBook, updateBook} from './actions/books';

import BooksList from './components/pages/BooksList';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

//3 STEP define reducers
//reducers must not mutate the state!!!

//1 STEP create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

render(
  <Provider store={store}>
    <div>
      <Navigation />
      <BooksList />
      <Footer />
    </div>
  </Provider>, document.getElementById('app')
);
// store.subscribe(function() {
//   console.log('current state is', store.getState());
// });

// //2 STEP create and dispatch actions
// store.dispatch(postBook(
//   [
//     {
//       id: 1,
//       title: 'Harry Potter',
//       description: 'My favorite book',
//       price: 24
//     },
//     {
//       id: 2,
//       title: 'Harry Potter 2',
//       description: 'My favorite book 2',
//       price: 28
//     }
//   ]
// ));

  // store.dispatch(deleteBook({ id: 1 }));
  //
  // store.dispatch(updateBook({
  //     id: 2,
  //     title: 'Sex in the city'
  //   }
  // ));

  // store.dispatch(addToCart([{ id: 1 }]));
