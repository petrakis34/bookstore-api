#!/usr/bin/env node

const mongoose = require('mongoose');
const Book = require('../models/book');
const {books} = require('../models/books.json');
mongoose.connect('mongodb://localhost:27017/bookstore');

Book.insertMany(books).
  then(() => {
    console.log("books loaded");
  }).
  catch(console.error).
  finally(mongoose.disconnect);
