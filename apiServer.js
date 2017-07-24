var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//APIs
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booksshop');

const Books = require('./models/books.js');

//--> POST Books
app.post('/books', (req, res) => {
  const book = req.body;
  Books.create(book, (err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

//GET books

app.get('/books', (req, res) => {
  Books.find((err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

//DELETE book

app.delete('/books/:_id', (req, res) => {
  const query = {_id: req.params._id};

  Books.remove(query, (err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

app.listen(3001, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('API Server is listening on port 3001')
});
