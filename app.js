var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;