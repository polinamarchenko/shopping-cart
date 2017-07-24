"use strict"

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'; //Provider component wraps React inside of render method and passes the store as a props!
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import reducers from './reducers/index';
import {addToCart} from './actions/cart';
import {postBook, deleteBook, updateBook} from './actions/books';

import BooksList from './components/pages/BooksList';
import BooksForm from './components/pages/BooksForm';
import Cart from './components/pages/Cart';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

const Routes = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={BooksList}/>
          <Route path="/settings" component={BooksForm}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
)

render(
  Routes, document.getElementById('app')
);
