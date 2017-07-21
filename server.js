"use strict"

const express = require('express');
const app = express();
const path = require('path');

//Middleware to define folder for static files
app.use(express.static('public'));

// DEFINES THE MAIN ENTRY POINT
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => console.log("Listening on port 3000"));
